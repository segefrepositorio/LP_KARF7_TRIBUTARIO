// Service Worker para cache de recursos e melhor performance
const CACHE_NAME = 'karf7-v1.0.0';
const STATIC_CACHE = 'karf7-static-v1.0.0';
const DYNAMIC_CACHE = 'karf7-dynamic-v1.0.0';

// Recursos para cache estático (críticos)
// Nota: não pré-cacheamos '/' nem '/index.html' para evitar servir uma
// versão em cache do documento que poderia conter head antigo e interferir
// com CSS injetado dinamicamente pelo bundle (Vite injetando CSS via JS).
const STATIC_ASSETS = [
  '/images/KARF7_LOGO.png',
  '/manifest.json'
];

// Recursos para cache dinâmico
const DYNAMIC_ASSETS = [
  'https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg',
  'https://fonts.googleapis.com/css2',
  'https://fonts.gstatic.com'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache estático
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Pré-cache de recursos dinâmicos críticos
      caches.open(DYNAMIC_CACHE).then(cache => {
        console.log('Service Worker: Pre-caching dynamic assets');
        return Promise.allSettled(
          DYNAMIC_ASSETS.map(url => 
            cache.add(url).catch(err => console.warn(`Failed to cache ${url}:`, err))
          )
        );
      })
    ]).then(() => {
      console.log('Service Worker: Installation complete');
      return self.skipWaiting();
    })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Remover caches antigos
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activation complete');
      return self.clients.claim();
    })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-GET
  if (request.method !== 'GET') return;

  // Ignorar requisições de extensões do browser
  if (url.protocol === 'chrome-extension:' || url.protocol === 'moz-extension:') return;

  // Tratar navegações/document requests com Network First para garantir
  // que sempre recebemos a versão mais recente do HTML (evita conflitos com
  // CSS injetado pelo bundle que poderia desaparecer se servirmos um HTML em cache).
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    return;
  }

  // Estratégia de cache baseada no tipo de recurso
  if (isStaticAsset(url)) {
    // Cache First para arquivos estáticos em /assets/ ou arquivos js/css
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isImageAsset(url)) {
    // Cache First para imagens (dinâmico)
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else if (isFontAsset(url)) {
    // Cache First para fontes
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else if (isAPIRequest(url)) {
    // Network First para APIs
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Stale While Revalidate para outros recursos
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  }
});

// Estratégias de cache

// Cache First - Prioriza cache
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Cache First failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First - Prioriza rede
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Network failed, trying cache:', error);
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate - Retorna cache e atualiza em background
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Fetch em background para atualizar cache
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(err => {
    console.warn('Background fetch failed:', err);
  });
  
  // Retorna cache imediatamente se disponível
  return cachedResponse || fetchPromise;
}

// Utilitários para identificar tipos de recursos

function isStaticAsset(url) {
  return url.pathname.includes('/assets/') || 
         url.pathname.endsWith('.js') || 
         url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.html') ||
         url.pathname === '/';
}

function isImageAsset(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i) ||
         url.hostname.includes('images.pexels.com') ||
         url.hostname.includes('unsplash.com');
}

function isFontAsset(url) {
  return url.pathname.match(/\.(woff|woff2|ttf|eot)$/i) ||
         url.hostname.includes('fonts.googleapis.com') ||
         url.hostname.includes('fonts.gstatic.com');
}

function isAPIRequest(url) {
  return url.pathname.includes('/api/') ||
         url.hostname.includes('api.');
}

// Limpeza periódica de cache
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCache();
  }
});

async function cleanOldCache() {
  const cache = await caches.open(DYNAMIC_CACHE);
  const requests = await cache.keys();
  
  // Manter apenas os 50 recursos mais recentes
  if (requests.length > 50) {
    const toDelete = requests.slice(0, requests.length - 50);
    await Promise.all(toDelete.map(request => cache.delete(request)));
    console.log(`Cleaned ${toDelete.length} old cache entries`);
  }
}

// Executar limpeza a cada 24 horas
setInterval(cleanOldCache, 24 * 60 * 60 * 1000);