import { useEffect, useRef } from 'react';

// Hook para animações GSAP avançadas
export const useGSAPAnimations = () => {
  const contextRef = useRef<any>(null);
  const isInitialized = useRef(false);
  const stRef = useRef<any>(null); // referência ao ScrollTrigger para limpeza

  useEffect(() => {
    // Evitar múltiplas inicializações
    if (isInitialized.current) return;

    const loadGSAPAnimations = async () => {
      try {
        // Carregamento dinâmico do GSAP e plugins (robusto para ESM/CJS)
        const gsapModule: any = await import('gsap');
        const stModule: any = await import('gsap/ScrollTrigger');
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTrigger = stModule.default || stModule.ScrollTrigger;

        // Registrar plugin
        gsap.registerPlugin(ScrollTrigger);
        stRef.current = ScrollTrigger;

        // Criar contexto GSAP para limpeza automática
        contextRef.current = gsap.context(() => {
          // HERO SECTION - Timeline inicial
          const heroElements = {
            avatar: '.hero-avatar',
            heading: '.hero-heading, .hero-title',
            sub: '.hero-sub, .hero-subtitle',
            cta: '.hero-cta, .hero-button'
          };

          // Verificar se elementos existem antes de animar
          const existingHeroElements = Object.entries(heroElements)
            .filter(([_, selector]) => document.querySelector(selector as string))
            .map(([key, selector]) => ({ key, selector, element: document.querySelector(selector as string) }));

          if (existingHeroElements.length > 0) {
            const heroTl = gsap.timeline({ delay: 0.3 });

            // Estados iniciais
            existingHeroElements.forEach(({ selector }) => {
              gsap.set(selector as string, {
                opacity: 0,
                y: 30,
                scale: 0.95
              });
            });

            // Ordem desejada: avatar -> heading -> sub -> cta
            const order = ['avatar', 'heading', 'sub', 'cta'];
            order.forEach((name, idx) => {
              const item = existingHeroElements.find(e => e.key === name);
              if (!item) return;
              heroTl.to(item.selector as string, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: name === 'cta' ? 'back.out(1.2)' : 'power2.out'
              }, idx * 0.15);
            });
          }

          // SCROLL REVEAL COM SCROLLTRIGGER.BATCH - Cards e seções
          const revealElements = [
            '.card',
            '.service-card',
            '[data-animate="card"]',
            '.section',
            '.feature',
            '[data-animate="reveal"]'
          ];

          revealElements.forEach(selector => {
            const elements = gsap.utils.toArray(selector as string);
            if (elements.length > 0) {
              // Estado inicial
              gsap.set(elements, {
                opacity: 0,
                y: 40,
                scale: 0.95
              });

              // Animação com ScrollTrigger.batch para performance
              ScrollTrigger.batch(elements as Element[], {
                onEnter: (els: Element[]) => {
                  gsap.to(els, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out'
                  });
                },
                start: 'top 85%',
                once: true
              });
            }
          });

          // BOTÕES - Microinterações
          const listeners: Array<{ el: Element; type: string; handler: (e: any) => void }> = [];
          const buttons = gsap.utils.toArray('.btn, .btn-cta, .hero-cta, button') as Element[];
          buttons.forEach((btn: Element) => {
            if (!btn) return;

            const onEnter = () => {
              gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
            };
            const onLeave = () => {
              gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
            };
            const onDown = () => {
              gsap.to(btn, { scale: 0.98, duration: 0.1, ease: 'power2.out' });
            };
            const onUp = () => {
              gsap.to(btn, { scale: 1.05, duration: 0.1, ease: 'power2.out' });
            };

            btn.addEventListener('mouseenter', onEnter as any);
            btn.addEventListener('mouseleave', onLeave as any);
            btn.addEventListener('mousedown', onDown as any);
            btn.addEventListener('mouseup', onUp as any);

            listeners.push({ el: btn, type: 'mouseenter', handler: onEnter });
            listeners.push({ el: btn, type: 'mouseleave', handler: onLeave });
            listeners.push({ el: btn, type: 'mousedown', handler: onDown });
            listeners.push({ el: btn, type: 'mouseup', handler: onUp });
          });

          // CONTADORES - Animação de números
          const counters = gsap.utils.toArray('.animate-counter');
          counters.forEach((counter: any) => {
            if (!counter) return;

            // Procurar números dentro do elemento
            const numberElement = counter.querySelector('.text-2xl, .text-3xl, .text-4xl, h3, .font-bold');
            if (numberElement) {
              const text = numberElement.textContent || '';
              const numbers = text.match(/\d+/g);

              if (numbers && numbers.length > 0) {
                const targetNumber = parseInt(numbers[0]);
                const countObj = { value: 0 };

                ScrollTrigger.create({
                  trigger: counter,
                  start: 'top 80%',
                  once: true,
                  onEnter: () => {
                    gsap.to(countObj, {
                      value: targetNumber,
                      duration: 2,
                      ease: 'power2.out',
                      onUpdate: () => {
                        const currentValue = Math.round(countObj.value);
                        numberElement.textContent = text.replace(/\d+/g, currentValue.toString());
                      }
                    });
                  }
                });
              }
            }

            // Animação do card do contador
            gsap.set(counter, { opacity: 0, y: 30, scale: 0.95 });
            ScrollTrigger.create({
              trigger: counter,
              start: 'top 85%',
              once: true,
              onEnter: () => {
                gsap.to(counter, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.1)' });
              }
            });
          });

          // DEPOIMENTOS - Fade in suave
          const testimonials = gsap.utils.toArray('.testimonial-card');
          if (testimonials.length > 0) {
            gsap.set(testimonials, { opacity: 0, y: 20 });
            ScrollTrigger.batch(testimonials as Element[], {
              onEnter: (els: Element[]) => {
                gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' });
              },
              start: 'top 85%',
              once: true
            });
          }

          // SEÇÕES GERAIS - Reveal em batch
          const sections = gsap.utils.toArray('section') as Element[];
          sections.forEach((section: Element) => {
            if (!section) return;
            gsap.set(section, { opacity: 0.3 });
            ScrollTrigger.create({
              trigger: section,
              start: 'top 90%',
              end: 'bottom 10%',
              onEnter: () => { gsap.to(section, { opacity: 1, duration: 0.6, ease: 'power2.out' }); },
              onLeave: () => { gsap.to(section, { opacity: 0.8, duration: 0.3 }); },
              onEnterBack: () => { gsap.to(section, { opacity: 1, duration: 0.3 }); }
            });
          });

          // ELEMENTOS COM STAGGER - Cards em sequência
          const cardGroups = ['.service-card', '.pain-card', '.testimonial-card', '.process-step', '.benefit-item'];
          cardGroups.forEach(selector => {
            const elements = gsap.utils.toArray(selector as string);
            if (elements.length > 1) {
              gsap.set(elements, { opacity: 0, y: 40, scale: 0.9 });
              ScrollTrigger.batch(elements as Element[], {
                onEnter: (batch: Element[]) => {
                  gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.1)' });
                },
                start: 'top 85%',
                once: true
              });
            }
          });

          // Registrar limpeza de listeners no contexto
          contextRef.current?.add?.(() => {
            listeners.forEach(({ el, type, handler }) => {
              el.removeEventListener(type, handler as any);
            });
          });
        });

        isInitialized.current = true;

      } catch (error) {
        console.warn('Erro ao carregar animações GSAP:', error);
      }
    };

    // Carregar com delay para não bloquear renderização inicial
    const timer = setTimeout(loadGSAPAnimations, 100);

    return () => {
      clearTimeout(timer);
      // Limpeza do contexto GSAP
      if (contextRef.current) {
        contextRef.current.revert();
      }
      // Limpar todos os ScrollTriggers criados
      if (stRef.current) {
        try {
          stRef.current.getAll().forEach((t: any) => t.kill());
        } catch { /* noop */ }
      }
    };
  }, []);

  return { contextRef };
};