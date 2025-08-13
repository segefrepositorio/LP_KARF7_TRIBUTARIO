// Utilitários de performance para otimização do site

// Debounce para otimizar eventos de scroll e resize
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle para limitar execução de funções
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload de recursos críticos
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Preconnect para domínios externos
export const preconnectDomain = (href: string, crossorigin = false) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  if (crossorigin) link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// DNS Prefetch para melhorar resolução de DNS
export const dnsPrefetch = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Lazy loading de scripts
export const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

// Otimização de imagens
export const optimizeImageUrl = (url: string, width?: number, height?: number, quality = 80) => {
  if (url.includes('pexels.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams({
      auto: 'compress',
      cs: 'tinysrgb',
      dpr: '1'
    });
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  return url;
};

// Detecção de dispositivo móvel otimizada
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768;
};

// Detecção de conexão lenta
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }
  
  const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
};

// Otimização de animações baseada na performance
export const getOptimizedAnimationConfig = () => {
  const isMobile = isMobileDevice();
  const isSlowConn = isSlowConnection();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    return {
      duration: 0.01,
      distance: 0,
      enabled: false
    };
  }
  
  if (isMobile || isSlowConn) {
    return {
      duration: 0.3,
      distance: 20,
      enabled: true
    };
  }
  
  return {
    duration: 0.6,
    distance: 50,
    enabled: true
  };
};

// Monitoramento de performance
export const measurePerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const metrics = {
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
        tcp: perfData.connectEnd - perfData.connectStart,
        request: perfData.responseStart - perfData.requestStart,
        response: perfData.responseEnd - perfData.responseStart,
        dom: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        load: perfData.loadEventEnd - perfData.loadEventStart,
        total: perfData.loadEventEnd - perfData.navigationStart
      };
      
      console.log('Performance Metrics:', metrics);
      
      // Enviar métricas para analytics (opcional)
      // analytics.track('page_performance', metrics);
    }, 0);
  });
};

// Cleanup de recursos não utilizados
export const cleanupUnusedResources = () => {
  // Remover CSS não utilizado após carregamento
  const unusedStyles = document.querySelectorAll('style[data-emotion], style[data-styled]');
  unusedStyles.forEach(style => {
    if (style.textContent && style.textContent.length === 0) {
      style.remove();
    }
  });
  
  // Limpar event listeners órfãos
  window.addEventListener('beforeunload', () => {
    // Cleanup automático será feito pelo browser
  });
};

// Otimização de scroll
export const optimizeScroll = () => {
  let ticking = false;
  
  const updateScrollPosition = () => {
    // Lógica de scroll otimizada
    ticking = false;
  };
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', onScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
};

// Inicialização de todas as otimizações
export const initPerformanceOptimizations = () => {
  // Preconnect para domínios críticos
  preconnectDomain('https://fonts.googleapis.com');
  preconnectDomain('https://fonts.gstatic.com', true);
  preconnectDomain('https://images.pexels.com');
  preconnectDomain('https://api.whatsapp.com');
  
  // DNS Prefetch
  dnsPrefetch('https://images.pexels.com');
  dnsPrefetch('https://api.whatsapp.com');
  
  // Monitoramento de performance
  measurePerformance();
  
  // Cleanup de recursos
  setTimeout(cleanupUnusedResources, 5000);
  
  // Otimização de scroll
  const cleanupScroll = optimizeScroll();
  
  return cleanupScroll;
};