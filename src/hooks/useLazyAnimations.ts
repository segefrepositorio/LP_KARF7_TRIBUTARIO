import { useEffect, useState } from 'react';

// Hook para carregamento tardio das bibliotecas de animação
export const useLazyAnimations = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [gsap, setGsap] = useState<any>(null);
  const [ScrollReveal, setScrollReveal] = useState<any>(null);

  useEffect(() => {
    // Carregar animações apenas quando necessário (após interação ou scroll)
    const loadAnimations = async () => {
      try {
        // Carregamento dinâmico das bibliotecas
        const [gsapModule, scrollRevealModule] = await Promise.all([
          import('gsap'),
          import('scrollreveal')
        ]);

        setGsap(gsapModule.gsap);
        // ScrollReveal pode ser exportado como default ou named export
        setScrollReveal(scrollRevealModule.default || scrollRevealModule);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Erro ao carregar bibliotecas de animação:', error);
      }
    };

    // Carregar após um pequeno delay para não bloquear o carregamento inicial
    const timer = setTimeout(() => {
      loadAnimations();
    }, 100);

    // Carregar imediatamente se o usuário interagir
    const handleInteraction = () => {
      clearTimeout(timer);
      loadAnimations();
      // Remover listeners após primeira interação
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mouseenter', handleInteraction);
    };

    // Listeners para carregamento antecipado
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('mouseenter', handleInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mouseenter', handleInteraction);
    };
  }, []);

  return { isLoaded, gsap, ScrollReveal };
};

// Hook para preload de imagens críticas
export const useImagePreload = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true); // Marcar como carregado mesmo com erro
    img.src = imageSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]);

  return isLoaded;
};

// Hook para detecção de dispositivos móveis
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile, { passive: true });

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
};

// Hook para intersection observer otimizado
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isIntersecting;
};