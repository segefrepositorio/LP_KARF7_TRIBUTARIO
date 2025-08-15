import { useEffect, useRef } from 'react'
import { useLazyAnimations, useIsMobile } from './useLazyAnimations'

export const useGSAPAnimations = () => {
  const animationContextRef = useRef<gsap.Context | null>(null)
  const scrollTriggersRef = useRef<ScrollTrigger[]>([])
  const countersAnimatedRef = useRef<Set<string>>(new Set())
  
  const { isLoaded, gsap, ScrollReveal } = useLazyAnimations()
  const isMobile = useIsMobile()

  // Ref para elementos Hero
  const heroTitleRef = useRef(null)
  const heroSubtitleRef = useRef(null)
  const heroButtonRef = useRef(null)
  const heroAvatarRef = useRef(null)

  useEffect(() => {
    // Só executar quando as bibliotecas estiverem carregadas
    if (!isLoaded || !gsap) return

    // Importar ScrollTrigger dinamicamente
    const initScrollTrigger = async () => {
      try {
        const ScrollTriggerModule = await import('gsap/ScrollTrigger')
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)

        // Criar contexto para limpeza automática
        animationContextRef.current = gsap.context(() => {
          // TIMELINE HERO - Implementação robusta
          const heroElements = [
            heroAvatarRef.current,
            heroTitleRef.current,
            heroSubtitleRef.current,
            heroButtonRef.current,
          ].filter(Boolean)

          if (heroElements.length > 0) {
            // Timeline sequencial: avatar → título → subtítulo → CTA
            const heroTl = gsap.timeline({ delay: 0.3 })

            // Estado inicial - todos elementos invisíveis
            gsap.set(heroElements, {
              opacity: 0,
              y: isMobile ? 30 : 50,
              scale: 0.9,
            })

            // Avatar (se existir)
            if (heroAvatarRef.current) {
              heroTl.to(heroAvatarRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.2)',
              })
            }

            // Título
            heroTl.to(
              heroTitleRef.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: isMobile ? 0.6 : 0.8,
                ease: 'power2.out',
              },
              heroAvatarRef.current ? '-=0.3' : '0'
            )

            // Subtítulo
            if (heroSubtitleRef.current) {
              heroTl.to(
                heroSubtitleRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: isMobile ? 0.5 : 0.7,
                  ease: 'power2.out',
                },
                '-=0.4'
              )
            }

            // CTA Button
            if (heroButtonRef.current) {
              heroTl.to(
                heroButtonRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: isMobile ? 0.4 : 0.6,
                  ease: 'back.out(1.1)',
                },
                '-=0.3'
              )
            }
          }

          // SCROLL REVEAL COM STAGGER PARA CARDS
          const createCardBatch = (selector: string) => {
            const elements = document.querySelectorAll(selector)
            if (elements.length === 0) return

            ScrollTrigger.batch(elements, {
              onEnter: (elements) => {
                gsap.from(elements, {
                  opacity: 0,
                  y: 60,
                  scale: 0.95,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power2.out',
                  force3D: true,
                })
              },
              start: 'top bottom-=100',
              refreshPriority: -1,
            })
          }

          // Aplicar para diferentes tipos de cards
          createCardBatch('.service-card')
          createCardBatch('.testimonial-card')
          createCardBatch('.pain-card')
          createCardBatch('[data-animate="card"]')

          // MICROINTERAÇÕES DE BOTÕES
          const buttons = document.querySelectorAll('button, .btn, .btn-cta, .hero-cta')
          buttons.forEach((button) => {
            const element = button as HTMLElement
            element.style.willChange = 'transform'

            // Hover
            element.addEventListener('mouseenter', () => {
              gsap.to(element, {
                scale: 1.05,
                y: -2,
                duration: 0.2,
                ease: 'power2.out',
                force3D: true,
              })
            })

            element.addEventListener('mouseleave', () => {
              gsap.to(element, {
                scale: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out',
                force3D: true,
              })
            })

            // Click
            element.addEventListener('mousedown', () => {
              gsap.to(element, {
                scale: 0.98,
                duration: 0.1,
                ease: 'power2.out',
              })
            })

            element.addEventListener('mouseup', () => {
              gsap.to(element, {
                scale: 1.05,
                duration: 0.1,
                ease: 'power2.out',
              })
            })
          })

          // ANIMAÇÃO DE SEÇÕES GERAIS
          const sections = document.querySelectorAll('.section, .feature, [data-animate="reveal"]')
          sections.forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: 'top 80%',
              onEnter: () => {
                gsap.from(section, {
                  opacity: 0,
                  y: 50,
                  duration: 0.8,
                  ease: 'power2.out',
                })
              },
              once: true,
            })
          })

          // DEPOIMENTOS COM FADE SUAVE
          const testimonials = document.querySelectorAll('.testimonial-card')
          if (testimonials.length > 0) {
            ScrollTrigger.batch(testimonials, {
              onEnter: (elements) => {
                gsap.from(elements, {
                  opacity: 0,
                  duration: 1.2,
                  stagger: 0.2,
                  ease: 'power1.out',
                })
              },
              start: 'top 85%',
            })
          }

          // COUNTERS ANIMADOS
          const animateCounter = (element: Element, target: number) => {
            const counterId = element.getAttribute('data-counter-id') || Math.random().toString()
            element.setAttribute('data-counter-id', counterId)
            
            if (countersAnimatedRef.current.has(counterId)) return
            countersAnimatedRef.current.add(counterId)

            const counter = { value: 0 }
            gsap.to(counter, {
              value: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                const value = Math.round(counter.value)
                const suffix = element.textContent?.match(/[^\d]+$/)?.[0] || ''
                element.textContent = value + suffix
              },
            })
          }

          // Detectar counters automaticamente
          const counters = document.querySelectorAll('.animate-counter')
          counters.forEach((counter) => {
            const text = counter.textContent || ''
            const number = parseInt(text.replace(/\D/g, ''), 10)
            
            if (!isNaN(number) && number > 0) {
              ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => animateCounter(counter, number),
                once: true,
              })
            }
          })

          // BENEFIT ITEMS com animação da direita
          const benefitItems = document.querySelectorAll('.benefit-item')
          if (benefitItems.length > 0) {
            ScrollTrigger.batch(benefitItems, {
              onEnter: (elements) => {
                gsap.from(elements, {
                  opacity: 0,
                  x: 60,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power2.out',
                })
              },
              start: 'top 85%',
            })
          }

          // HEADERS DE SEÇÕES - Animação de entrada desde o topo
          const sectionHeaders = document.querySelectorAll('.services-header, .pain-header, .testimonials-header, .process-header, .benefits-header, .contact-header')
          sectionHeaders.forEach((header) => {
            ScrollTrigger.create({
              trigger: header,
              start: 'top 85%',
              onEnter: () => {
                gsap.from(header, {
                  opacity: 0,
                  y: -30,
                  duration: 0.7,
                  ease: 'power2.out',
                })
              },
              once: true,
            })
          })

          // HERO REVIEWS - Animação suave de baixo
          const heroReviews = document.querySelector('.hero-reviews')
          if (heroReviews) {
            ScrollTrigger.create({
              trigger: heroReviews,
              start: 'top 90%',
              onEnter: () => {
                gsap.from(heroReviews, {
                  opacity: 0,
                  y: 30,
                  duration: 0.6,
                  ease: 'power1.out',
                })
              },
              once: true,
            })
          }

          // ABOUT SECTION - Animação lateral
          const aboutContent = document.querySelector('.about-content')
          const aboutImage = document.querySelector('.about-image')
          
          if (aboutContent) {
            ScrollTrigger.create({
              trigger: aboutContent,
              start: 'top 80%',
              onEnter: () => {
                gsap.from(aboutContent, {
                  opacity: 0,
                  x: -60,
                  duration: 0.8,
                  ease: 'power2.out',
                })
              },
              once: true,
            })
          }

          if (aboutImage) {
            ScrollTrigger.create({
              trigger: aboutImage,
              start: 'top 80%',
              onEnter: () => {
                gsap.from(aboutImage, {
                  opacity: 0,
                  x: 60,
                  duration: 0.8,
                  ease: 'power2.out',
                })
              },
              once: true,
            })
          }

          // CONTACT SECTION - Animação escalonada
          const contactInfo = document.querySelectorAll('.contact-info')
          const contactForm = document.querySelector('.contact-form')
          
          if (contactInfo.length > 0) {
            ScrollTrigger.batch(contactInfo, {
              onEnter: (elements) => {
                gsap.from(elements, {
                  opacity: 0,
                  y: 40,
                  duration: 0.7,
                  stagger: 0.15,
                  ease: 'power2.out',
                })
              },
              start: 'top 85%',
            })
          }

          if (contactForm) {
            ScrollTrigger.create({
              trigger: contactForm,
              start: 'top 80%',
              onEnter: () => {
                gsap.from(contactForm, {
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                  duration: 0.8,
                  ease: 'back.out(1.2)',
                })
              },
              once: true,
            })
          }

          // FOOTER - Animação suave de entrada
          const footerContent = document.querySelector('.footer-content')
          if (footerContent) {
            ScrollTrigger.create({
              trigger: footerContent,
              start: 'top 85%',
              onEnter: () => {
                gsap.from(footerContent, {
                  opacity: 0,
                  y: 30,
                  duration: 0.7,
                  ease: 'power1.out',
                })
              },
              once: true,
            })
          }

          // CTA GUARANTEE - Animação destacada
          const ctaGuarantee = document.querySelector('.cta-guarantee')
          if (ctaGuarantee) {
            ScrollTrigger.create({
              trigger: ctaGuarantee,
              start: 'top 85%',
              onEnter: () => {
                gsap.from(ctaGuarantee, {
                  opacity: 0,
                  scale: 0.9,
                  duration: 0.8,
                  ease: 'back.out(1.3)',
                })
              },
              once: true,
            })
          }

        }) // Fim do contexto GSAP

        // Guardar referências dos ScrollTriggers para limpeza
        scrollTriggersRef.current = ScrollTrigger.getAll()

      } catch (error) {
        console.warn('Erro ao carregar ScrollTrigger:', error)
      }
    }

    initScrollTrigger()

    // Cleanup function
    return () => {
      // Matar todos os ScrollTriggers
      scrollTriggersRef.current.forEach((st) => st.kill())
      scrollTriggersRef.current = []

      // Destruir contexto GSAP
      if (animationContextRef.current) {
        animationContextRef.current.revert()
        animationContextRef.current = null
      }

      // Limpar set de counters
      countersAnimatedRef.current.clear()

      // Resetar will-change para performance
      document.querySelectorAll('[style*="will-change"]').forEach((el) => {
        ;(el as HTMLElement).style.willChange = 'auto'
      })
    }
  }, [isLoaded, gsap, isMobile])

  return {
    heroTitleRef,
    heroSubtitleRef,
    heroButtonRef,
    heroAvatarRef,
    isLoaded,
  }
}