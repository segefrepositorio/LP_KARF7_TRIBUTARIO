import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

// Componente para otimizações de performance
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Otimizações de performance no carregamento
    const optimizePerformance = () => {
      // Remover unused CSS classes após carregamento
      const removeUnusedStyles = () => {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
        stylesheets.forEach((sheet) => {
          if (
            sheet.href &&
            !sheet.href.includes('tailwind') &&
            !sheet.href.includes('main')
          ) {
            sheet.remove()
          }
        })
      }

      // Lazy load de fontes não críticas
      const loadNonCriticalFonts = () => {
        const fontLink = document.createElement('link')
        fontLink.rel = 'stylesheet'
        fontLink.href =
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
        fontLink.media = 'print'
        fontLink.onload = () => {
          fontLink.media = 'all'
        }
        document.head.appendChild(fontLink)
      }

      // Otimizar imagens lazy loading
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[loading="lazy"]')
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                if (img.dataset.src) {
                  img.src = img.dataset.src
                  img.removeAttribute('data-src')
                  imageObserver.unobserve(img)
                }
              }
            })
          },
          {
            rootMargin: '50px',
          },
        )

        images.forEach((img) => imageObserver.observe(img))
      }

      // Executar otimizações após carregamento
      setTimeout(() => {
        removeUnusedStyles()
        loadNonCriticalFonts()
        optimizeImages()
      }, 2000)
    }

    // Service Worker para cache
    const registerServiceWorker = async () => {
      if (
        'serviceWorker' in navigator &&
        process.env.NODE_ENV === 'production'
      ) {
        try {
          await navigator.serviceWorker.register('/sw.js')
        } catch (error) {
          console.warn('Service Worker registration failed:', error)
        }
      }
    }

    optimizePerformance()
    registerServiceWorker()
  }, [])

  return (
    <Helmet>
      {/* Meta tags críticas para performance */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Preconnect para recursos externos */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://api.whatsapp.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://images.pexels.com" />
      <link rel="dns-prefetch" href="https://api.whatsapp.com" />

      {/* Preload de recursos críticos */}
      <link
        rel="preload"
        href="/images/KARF7_LOGO.png"
        as="image"
        type="image/png"
      />

      {/* Critical CSS inline */}
      <style>{`
        /* Critical CSS para Above the Fold */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, rgba(10, 44, 82, 0.3) 50%, rgba(10, 44, 82, 0.2) 100%);
        }
        
        // .hero-title {
        //   font-size: clamp(2rem, 4vw, 3rem);
        //   font-weight: 900;
        //   line-height: 1.1;
        // }
        
        // .hero-subtitle {
        //   font-size: clamp(1.125rem, 2.5vw, 1.5rem);
        //   line-height: 1.5;
        // }
        
        /* Otimizações de rendering */
        * {
          box-sizing: border-box;
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Prevent layout shift */
          .aspect-ratio-16-9 {
          aspect-ratio: 16 / 9;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* SEO e Performance Meta Tags */}
      <meta
        name="description"
        content="Especialistas em Reforma Tributária com 20+ anos de experiência. Diagnóstico gratuito e simulações precisas para sua empresa."
      />
      <meta
        name="keywords"
        content="reforma tributária, advogado tributário, planejamento tributário, compliance fiscal"
      />
      <meta name="author" content="KARF7 Advocacia Tributária" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="KARF7 - Especialistas em Reforma Tributária"
      />
      <meta
        property="og:description"
        content="Diagnóstico completo e simulações precisas sob as novas regras tributárias. 20+ anos de experiência."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/KARF7_LOGO.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="KARF7 - Especialistas em Reforma Tributária"
      />
      <meta
        name="twitter:description"
        content="Diagnóstico completo e simulações precisas sob as novas regras tributárias."
      />

      {/* Performance hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1e293b" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'KARF7 Advocacia Tributária',
          description:
            'Especialistas em Reforma Tributária com 20+ anos de experiência',
          url: window.location.origin,
          telephone: '+5512991019885',
          areaServed: 'Brasil',
          serviceType: 'Consultoria Tributária',
          priceRange: 'Consulta gratuita disponível',
        })}
      </script>
    </Helmet>
  )
}

export default PerformanceOptimizer
