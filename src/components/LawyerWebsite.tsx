import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Users, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Heart,
  Star,
  MapPin,
  ChevronRight,
  Calculator,
  FileText,
  TrendingUp,
  Building,
  User,
  Eye,
  Globe,
  Zap
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, memo, lazy, Suspense } from "react";
import { useLazyAnimations, useIsMobile, useIntersectionObserver } from "@/hooks/useLazyAnimations";
import PerformanceOptimizer from './PerformanceOptimizer';

// Componentes lazy removidos temporariamente - seções não existem

const LawyerWebsite = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonRef = useRef(null);
  const heroSectionRef = useRef(null);
  
  // Hooks otimizados
  const { isLoaded, gsap, ScrollReveal } = useLazyAnimations();
  const isMobile = useIsMobile();
  const isHeroVisible = useIntersectionObserver(heroSectionRef, { threshold: 0.1 });

  useEffect(() => {
    try {
      // Só executar animações quando as bibliotecas estiverem carregadas
      if (!isLoaded || !gsap || !ScrollReveal) return;

    // Configuração inicial dos elementos para GSAP - CORRIGIDA
    if (heroTitleRef.current && heroSubtitleRef.current && heroButtonRef.current) {
      
      // Timeline de animações GSAP - MAIS RÁPIDA E DIRETA
      const tl = gsap.timeline({ delay: 0.5 }); // Pequeno delay para garantir que a página carregou
      
      // Configurar estado inicial dos elementos
      gsap.set([heroTitleRef.current, heroSubtitleRef.current, heroButtonRef.current], { 
        opacity: 0, 
        y: isMobile ? 20 : 30 
      });
      
      // Animação do H1
      tl.to(heroTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: "power2.out"
      })
      // Animação do subtítulo
      .to(heroSubtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.5 : 0.7,
        ease: "power2.out"
      }, "-=0.4")
      // Animação do botão
      .to(heroButtonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.4 : 0.6,
        ease: "back.out(1.2)"
      }, "-=0.3");
    }

    // Configuração do ScrollReveal - CORRIGIDA
    if (!ScrollReveal || typeof ScrollReveal !== 'function') {
      console.warn('ScrollReveal não está disponível');
      return;
    }
    
    const sr = ScrollReveal({
      distance: isMobile ? '20px' : '30px',
      duration: isMobile ? 400 : 600,
      opacity: 0,
      reset: false,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      viewFactor: isMobile ? 0.15 : 0.2,
      mobile: true,
      // Otimizações de performance
      beforeReveal: function (domEl) {
        domEl.style.willChange = 'transform, opacity';
      },
      afterReveal: function (domEl) {
        domEl.style.willChange = 'auto';
      }
    });

    // Hero Section - OTIMIZADO PARA VELOCIDADE
    sr.reveal('.hero-title', { delay: 50, origin: 'bottom', duration: isMobile ? 400 : 600 });
    sr.reveal('.hero-subtitle', { delay: 100, origin: 'bottom', duration: isMobile ? 300 : 500 });
    sr.reveal('.hero-button', { delay: 150, origin: 'bottom', scale: 0.95, duration: isMobile ? 300 : 400 });
    sr.reveal('.hero-cards', { delay: 200, interval: isMobile ? 50 : 100, origin: 'bottom', duration: isMobile ? 400 : 600 });
    sr.reveal('.hero-reviews', { delay: 250, origin: 'bottom', duration: isMobile ? 300 : 500 });

    // Services Section - Carregamento tardio
    sr.reveal('.services-header', { delay: 100, origin: 'top' });
    sr.reveal('.service-card', { delay: 200, interval: isMobile ? 100 : 200, origin: 'bottom', scale: 0.95 });

    // Pain Points Section
    sr.reveal('.pain-header', { delay: 100, origin: 'top' });
    sr.reveal('.pain-card', { delay: 200, interval: 150, origin: 'left', distance: '80px' });
    sr.reveal('.pain-cta', { delay: 300, origin: 'bottom', scale: 0.9 });

    // Testimonials Section
    sr.reveal('.testimonials-header', { delay: 100, origin: 'top' });
    sr.reveal('.testimonial-card', { delay: 200, interval: 100, origin: 'bottom', rotate: { x: 0, y: 0, z: 5 } });

    // Process Section
    sr.reveal('.process-header', { delay: 100, origin: 'top' });
    sr.reveal('.process-step', { delay: 200, interval: 200, origin: 'bottom', distance: '40px' });

    // Benefits Section
    sr.reveal('.benefits-header', { delay: 100, origin: 'top' });
    sr.reveal('.benefit-item', { delay: 200, interval: 100, origin: 'right', distance: '60px' });

    // About Section
    sr.reveal('.about-content', { delay: 100, origin: 'left', distance: '80px' });
    sr.reveal('.about-image', { delay: 200, origin: 'right', distance: '80px' });

    // Contact Section
    sr.reveal('.contact-header', { delay: 100, origin: 'top' });
    sr.reveal('.contact-info', { delay: 200, interval: 150, origin: 'bottom' });
    sr.reveal('.contact-form', { delay: 300, origin: 'bottom', scale: 0.95 });

    // Footer
    sr.reveal('.footer-content', { delay: 100, origin: 'bottom', distance: '30px' });

    // Animações GSAP para hover effects - OTIMIZADO PARA PERFORMANCE
    const cards = document.querySelectorAll('.hover-lift');
    cards.forEach(card => {
      // Configurar will-change para performance
      card.style.willChange = 'transform';
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -6,
          duration: 0.25,
          ease: "power2.out",
          force3D: true, // Forçar aceleração de hardware
          boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.25,
          ease: "power2.out",
          force3D: true,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        });
      });
    });

    // Animação de botões - OTIMIZADO PARA PERFORMANCE
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
      // Configurar will-change para performance
      button.style.willChange = 'transform';
      
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          y: -2,
          duration: 0.15,
          ease: "power2.out",
          force3D: true,
          boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          y: 0,
          duration: 0.15,
          ease: "power2.out",
          force3D: true,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        });
      });
    });

    // Cleanup
    return () => {
      try {
        sr.destroy();
      } catch (error) {
        console.warn('Erro ao destruir ScrollReveal:', error);
      }
    };
    } catch (error) {
      console.warn('Erro nas animações:', error);
    }
  }, [isLoaded, gsap, ScrollReveal, isMobile, isHeroVisible]);

  // Preload de recursos críticos
  useEffect(() => {
    // Preload da imagem hero
    const heroImg = new Image();
    heroImg.src = 'https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1';
    
    // Preload do logo
    const logoImg = new Image();
    logoImg.src = '/images/KARF7_LOGO.png';
    
    // Preconnect para recursos externos
    const preconnectLinks = [
      'https://images.pexels.com',
      'https://api.whatsapp.com'
    ];
    
    preconnectLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);
  const services = [
    {
      icon: Shield,
      title: "Compliance Tributário",
      headline: "Prepare-se para a Reforma Tributária com Conformidade Total",
      description: "Diagnóstico completo de adequação às novas regras tributárias com proteção jurídica garantida",
      benefits: "Evita autuações e multas sob o novo regime tributário"
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      headline: "Simule Cenários da Reforma e Economize até 30% em Impostos",
      description: "Cálculos precisos e estratégia fiscal inteligente para o novo cenário tributário brasileiro",
      benefits: "Redução legal de carga tributária com segurança jurídica"
    },
    {
      icon: Calculator,
      title: "Simulação de Impactos",
      headline: "Calcule Exatamente Quanto Sua Empresa Pagará com a Reforma",
      description: "Análise detalhada do impacto das novas regras em cada operação do seu negócio",
      benefits: "Decisões imediatas baseadas em dados precisos"
    },
    {
      icon: FileText,
      title: "Preparação para Reforma",
      headline: "Antecipe-se às Mudanças e Transforme-as em Vantagem Competitiva",
      description: "Estratégia completa de adaptação às novas regras com processos redondos e cálculos exatos",
      benefits: "Segurança operacional durante a transição tributária"
    },
    {
      icon: Scale,
      title: "Diagnóstico Tributário",
      headline: "Radiografia Completa da Sua Empresa Sob as Novas Regras",
      description: "Mapeamento preciso de riscos e oportunidades no cenário da Reforma Tributária",
      benefits: "Proteção preventiva contra contingências fiscais"
    },
    {
      icon: Building,
      title: "Reestruturação Empresarial",
      headline: "Reorganize Sua Operação para o Novo Sistema Tributário",
      description: "Redesenho de processos e estruturas para máxima eficiência sob as novas regras",
      benefits: "Otimização operacional alinhada à nova tributação"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico Gratuito",
      subtitle: "Simulação Completa sob as Novas Regras Tributárias",
      description: "Analisamos sua operação e calculamos precisamente o impacto da Reforma Tributária no seu negócio"
    },
    {
      number: "02", 
      title: "Análise Especializada",
      subtitle: "Cálculos Precisos por Especialistas em Alta Complexidade",
      description: "Profissionais com 20+ anos de experiência avaliam cada detalhe da sua operação sob o novo regime"
    },
    {
      number: "03",
      title: "Estratégia Personalizada",
      subtitle: "Plano de Adaptação com Processos Redondos", 
      description: "Desenvolvemos estratégia tributária correta específica para seu setor e complexidade operacional"
    },
    {
      number: "04",
      title: "Decisão Imediata",
      subtitle: "Implementação Segura com Acompanhamento Contínuo",
      description: "Suporte completo na transição para o novo sistema tributário com ajustes precisos e monitoramento"
    }
  ];

  const testimonials = [
    {
      name: "João Silva, CEO",
      location: "Empresa de Tecnologia - Faturamento R$ 120MM",
      text: "A simulação da KARF7 sobre o impacto da Reforma Tributária nos permitiu tomar decisões estratégicas com 6 meses de antecedência. Os cálculos precisos e a estratégia tributária correta nos deram vantagem competitiva enquanto concorrentes ainda tentam entender as mudanças.",
      rating: 5
    },
    {
      name: "Maria Santos, Diretora Financeira",
      location: "Indústria Farmacêutica - Faturamento R$ 300MM", 
      text: "O diagnóstico tributário da KARF7 revelou oportunidades que não enxergávamos com as novas regras. A expertise em alta complexidade tributária fez toda diferença - são profissionais que realmente entendem as nuances da Reforma e seus impactos em operações complexas.",
      rating: 5
    },
    {
      name: "Carlos Mendoza, CFO",
      location: "Varejo Nacional - Faturamento R$ 200MM",
      text: "Graças à preparação antecipada com a KARF7, redesenhamos nossos processos para o novo cenário tributário e estimamos economia de 22% em impostos. A decisão imediata baseada em dados precisos nos permitiu ajustar a operação com segurança e previsibilidade.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expertise em Alta Complexidade",
      subtitle: "20+ Anos de Experiência em Cenários Tributários Complexos",
      description: "Profissionais que estruturaram operações bilionárias nas maiores empresas do país, com profundo conhecimento das nuances da Reforma Tributária."
    },
    {
      icon: Heart,
      title: "Diagnóstico Completo",
      subtitle: "Simulações Precisas sob as Novas Regras Tributárias", 
      description: "Mapeamento detalhado do impacto da Reforma em cada aspecto do seu negócio, com cálculos exatos para tomada de decisão segura."
    },
    {
      icon: TrendingUp,
      title: "Cálculos Precisos",
      subtitle: "Números Exatos para Decisões Estratégicas Imediatas",
      description: "Análises quantitativas rigorosas que revelam exatamente como cada operação será afetada pelas novas regras tributárias."
    },
    {
      icon: Eye,
      title: "Estratégia Tributária Correta",
      subtitle: "Planejamento Técnico Alinhado às Novas Regras",
      description: "Abordagem estratégica que transforma a complexidade da Reforma em vantagem competitiva com total segurança jurídica."
    },
    {
      icon: Globe,
      title: "Processos Redondos",
      subtitle: "Redesenho Operacional para o Novo Cenário Fiscal",
      description: "Adaptação completa de processos e sistemas para conformidade perfeita com o novo regime tributário, sem surpresas."
    },
    {
      icon: Zap,
      title: "Decisão Imediata",
      subtitle: "Implementação Rápida com Acompanhamento Contínuo",
      description: "Suporte completo na transição para o novo sistema tributário, permitindo decisões ágeis com base em informações confiáveis."
    }
  ];

  return (
    <div className="bg-background">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/images/KARF7_LOGO.png" alt="KARF7" className="h-8 w-auto" />
            </div>
            {/* Navegação removida - apenas logo e WhatsApp */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer">
                <Button className="text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2">
                  <FaWhatsapp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="hidden md:inline">WhatsApp</span>
                  <span className="md:hidden">Contato</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Estrutura Aprimorada */}
      <section 
        ref={heroSectionRef}
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.3) 50%, rgba(51, 65, 85, 0.2) 100%), url('https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? '768' : '1920'}&h=${isMobile ? '1024' : '1080'}&dpr=1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed'
        }}
      >
        {/* Overlay com gradiente sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/15 to-slate-700/10"></div>
        
        {/* Elementos decorativos - Ajustados para prevenir overflow */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse max-w-[40vw]"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000 max-w-[40vw]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-12">
            
            {/* Badge de credibilidade */}
            <div className="inline-flex items-center px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm text-white/90 mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-secondary" />
              <span className="text-center">Especialistas em Reforma Tributária • 20+ anos • Alta Complexidade</span>
            </div>

            {/* Título principal aprimorado */}
            <div className="space-y-4 sm:space-y-6">
              <h1 ref={heroTitleRef} className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white px-1 sm:px-2">
                Prepare-se para a
                <span className="block bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent animate-pulse py-1 sm:py-2 leading-relaxed">
                  Reforma Tributária
                </span>
              </h1>
              
              <p ref={heroSubtitleRef} className="hero-subtitle text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-200 leading-relaxed max-w-5xl mx-auto font-light px-2">
                Diagnóstico completo e <span className="text-secondary font-semibold">simulações precisas</span> sob as novas regras.
                <br className="hidden sm:block" />
                Decisões imediatas com <span className="text-secondary font-bold">estratégia tributária correta</span> e processos redondos.
              </p>
            </div>

            {/* Cards de credenciais redesenhados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto my-8 sm:my-12 lg:my-16 px-2">
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">20+</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Anos de experiência tributária</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Simulações precisas</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">24h</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Diagnóstico tributário</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">Alta</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Complexidade operacional</div>
              </div>
            </div>

            {/* CTA aprimorado */}
            <div ref={heroButtonRef} className="space-y-4 sm:space-y-6 lg:space-y-8 px-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20diagnóstico%20para%20a%20Reforma%20Tributária." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="group relative w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" />
                      <span className="text-center">Agendar Diagnóstico Gratuito</span>
                    </div>
                  </Button>
                </a>
              </div>
            </div>

            {/* Social proof aprimorado */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/20 bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4">
              <div className="flex flex-col items-center">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current drop-shadow-lg" />
                  ))}
                </div>
                <div className="text-white font-bold text-base sm:text-lg drop-shadow-lg text-center">5.0 • 127 avaliações</div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium text-center">Google & LinkedIn</div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-white/40"></div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-black text-secondary mb-1 drop-shadow-lg">98%</div>
                <div className="text-white font-bold text-base sm:text-lg drop-shadow-lg text-center">Taxa de Sucesso</div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium text-center">Casos resolvidos</div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-white/40"></div>
              
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-black text-secondary mb-1 drop-shadow-lg">500+</div>
                <div className="text-white font-bold text-base sm:text-lg drop-shadow-lg text-center">Empresas Atendidas</div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium text-center">Desde 2019</div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white/60 rotate-90" />
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Diagnóstico Gratuito */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-semibold">Diagnóstico 100% Gratuito</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Descubra em 24h onde sua empresa está sangrando dinheiro
            </h2>
          </div>
          
          {/* 4 Pilares de Valor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-counter bg-white/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift">
              <Shield className="h-12 w-12 lg:h-16 lg:w-16 text-primary mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3">Confiança</h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">Durma Tranquilo Sabendo que Está Protegido</h4>
              <p className="text-muted-foreground leading-relaxed">Enquanto seus concorrentes vivem no "achômetro", você terá certeza absoluta sobre cada decisão fiscal</p>
            </div>
            
            <div className="animate-counter bg-white/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift">
              <Award className="h-12 w-12 lg:h-16 lg:w-16 text-primary mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3">Experiência</h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">Profissionais que Já Salvaram Bilhões em Autuações</h4>
              <p className="text-muted-foreground leading-relaxed">Time com passagem sólida por Big Four - quem estruturou as maiores operações do país</p>
            </div>
            
            <div className="animate-counter bg-white/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift">
              <Users className="h-12 w-12 lg:h-16 lg:w-16 text-primary mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3">Personalização</h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">Sua Empresa Não é Igual às Outras, Sua Estratégia Também Não Pode Ser</h4>
              <p className="text-muted-foreground leading-relaxed">Chega de soluções "tamanho único". Cada estratégia é desenhada para sua realidade específica</p>
            </div>
            
            <div className="animate-counter bg-white/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift">
              <TrendingUp className="h-12 w-12 lg:h-16 lg:w-16 text-primary mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3">Resultados</h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">Transforme Gastos Tributários em Geração de Caixa</h4>
              <p className="text-muted-foreground leading-relaxed">Foco obsessivo em colocar dinheiro no seu bolso, não no do governo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços - OTIMIZADO MOBILE */}
      <section id="servicos" className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="services-header text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-2">
              Preparação para a Reforma Tributária
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções Estratégicas para Adaptação às Novas Regras Tributárias
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover-lift cursor-pointer group border-border shadow-card bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 text-primary flex-shrink-0 group-hover:text-secondary transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1 sm:mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
                    "{service.headline}"
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{service.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-green-800 leading-tight">Benefício: {service.benefits}</span>
                    </div>
                  </div>
                  <Button className="btn w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors text-sm sm:text-base">
                    Saiba Mais
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Dores - OTIMIZADO MOBILE */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="pain-header text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 lg:mb-6 px-2 leading-tight">
              Desafios da Reforma Tributária
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed italic mb-6 sm:mb-8">
              "Transformamos Complexidades do Novo Sistema em Vantagens Estratégicas"
            </p>
          </div>
          
          {/* Grid de Dores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-red-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🧮</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">Simulações Imprecisas</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Sua empresa tenta calcular o impacto da Reforma Tributária, mas os números não fecham. As planilhas não refletem a realidade e você não consegue tomar decisões confiáveis.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-orange-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💸</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">Processos Inadequados</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Seus processos atuais não estão preparados para o novo sistema tributário. A adaptação parece complexa e você teme perder competitividade durante a transição.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-yellow-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">Decisões Estratégicas</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Precisa tomar decisões imediatas sobre investimentos e precificação considerando a Reforma Tributária, mas não tem dados confiáveis para embasar suas escolhas.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-red-600">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⏰</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">Prazo se Esgotando</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                A implementação da Reforma Tributária está chegando e sua empresa ainda não tem uma estratégia clara. Cada dia de atraso pode significar perdas significativas.
              </p>
            </div>
          </div>
          
          {/* CTA da Solução */}
          <div className="pain-cta text-center bg-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-6 px-2 leading-relaxed">
              Transformamos dados dispersos em informações estratégicas que geram decisões seguras e lucrativas.
            </h3>
            <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20diagnóstico%20para%20a%20Reforma%20Tributária." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
              <Button size="lg" className="btn w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4 leading-tight whitespace-normal">
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="break-words text-center">Solicitar Diagnóstico para Reforma Tributária</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Depoimentos - OTIMIZADO MOBILE */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="testimonials-header text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-2">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Resultados reais de empresas que transformaram suas dores em soluções
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card hover-lift shadow-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="font-semibold text-primary text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground flex items-center mt-1">
                      <Building className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como podemos ajudar - OTIMIZADO MOBILE */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="process-header text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-2">
              Como Preparamos Sua Empresa
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Nossa metodologia exclusiva transforma a complexidade da Reforma Tributária em vantagem competitiva para seu negócio
            </p>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step text-center animate-fade-in px-2 sm:px-4 relative" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base sm:text-lg lg:text-2xl font-bold mx-auto mb-2 sm:mb-3 lg:mb-4 relative z-10">
                    {step.number}
                  </div>

                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary mb-1 sm:mb-2 italic">"{step.subtitle}"</p>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposta de Valor - OTIMIZADO MOBILE */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="benefits-header text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 px-2">
              Por que escolher a KARF7?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              20+ anos de experiência em alta complexidade tributária, diagnósticos precisos e estratégias personalizadas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item flex items-start space-x-2 sm:space-x-3 lg:space-x-4 animate-fade-in hover-lift p-3 sm:p-4 rounded-lg">
                <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-1 sm:mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-secondary mb-1 sm:mb-2 italic">"{benefit.subtitle}"</p>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre - OTIMIZADO MOBILE */}
      <section id="sobre" className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="about-content animate-slide-up order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 lg:mb-6 px-2">
                Sobre a KARF7
              </h2>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  "Especialistas em Reforma Tributária. Resultados Concretos. Sono Tranquilo."
                </p>
                <p className="text-base sm:text-lg">
                  Nosso propósito é simples: Transformar a complexidade da Reforma Tributária de <strong className="text-red-600">"ameaça ao seu negócio"</strong> em <strong className="text-green-600">"vantagem competitiva e economia fiscal"</strong>.
                </p>
                <p>
                  <strong className="text-primary">A diferença está no time:</strong> Formado exclusivamente por profissionais que estruturaram operações bilionárias nas Big Four e dominam as nuances da Reforma Tributária. Não são consultores comuns - são especialistas que antecipam cenários fiscais complexos.
                </p>
                <p>
                  <strong className="text-primary">Simulações precisas:</strong> Não trabalhamos com estimativas vagas. Nossos diagnósticos revelam exatamente como cada aspecto da Reforma impactará suas operações, com cálculos exatos para decisões seguras.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-green-700 bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <strong>Compromisso com resultado:</strong> Se não identificarmos pelo menos R$ 100 mil em economia ou oportunidades no novo cenário tributário durante o diagnóstico gratuito, você não deve nada. Simples assim.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20diagnóstico%20para%20a%20Reforma%20Tributária." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="btn w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3 whitespace-normal">
                    <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                    <span className="text-center">Preparação para Reforma</span>
                  </Button>
                </a>

              </div>
            </div>
            <div className="about-image relative animate-scale-in order-1 lg:order-2">
              <img 
                src="https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" 
                alt="Especialistas em Reforma Tributária"
                className="rounded-xl sm:rounded-2xl shadow-elevated w-full object-cover h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:-bottom-6 lg:-right-6 bg-primary text-primary-foreground p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-elevated">
                <div className="text-center">
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold">Reforma</div>
                  <div className="text-xs sm:text-sm">Tributária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - OTIMIZADO MOBILE */}
      <section id="cta" className="py-8 sm:py-12 lg:py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="contact-header animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2 leading-tight">
              Pronto para se preparar para a Reforma Tributária?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-blue-100 max-w-4xl mx-auto px-4">
              Agende um diagnóstico gratuito e descubra como podemos ajudar sua empresa a simular impactos, adaptar processos e maximizar oportunidades no novo cenário tributário.
            </p>
            
            <div className="contact-form flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 lg:mb-8">
              <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20diagnóstico%20para%20a%20Reforma%20Tributária." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="btn w-full sm:w-auto text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-3 sm:py-4 font-bold whitespace-normal">
                  <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                  <span className="text-center">Agendar Diagnóstico Gratuito</span>
                </Button>
              </a>

            </div>
            
            {/* Garantia */}
            <p className="text-xs sm:text-sm mt-4 sm:mt-6 text-white/80 cta-guarantee">
              Garantia de satisfação: Se não identificarmos pelo menos R$ 100 mil em economia potencial com a Reforma Tributária no diagnóstico inicial, você não paga nada.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - OTIMIZADO MOBILE */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="flex items-center">
                <Scale className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-secondary mr-2" />
                <span className="text-base sm:text-lg lg:text-xl font-bold">KARF7</span>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">
                Especialistas em Reforma Tributária com diagnósticos precisos e estratégias personalizadas.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Serviços</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                <li>Simulação de Impactos</li>
                <li>Planejamento Tributário</li>
                <li>Compliance Tributário</li>
                <li>Preparação para Reforma</li>
              </ul>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Agende seu Diagnóstico</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>+55 12 99101-9885</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="break-all">contato@karf7.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Horário</h3>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Diagnósticos para Reforma Tributária em 24h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 sm:pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2024 KARF7 Consultoria Tributária. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors text-center">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors text-center">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - OTIMIZADO MOBILE */}
      <a
        href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20diagnóstico%20para%20a%20Reforma%20Tributária."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg z-50 transition-all duration-300 pulse-animation"
        aria-label="Agendar Diagnóstico para Reforma Tributária"
      >
        <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </a>
    </div>
  );
};

export default LawyerWebsite;