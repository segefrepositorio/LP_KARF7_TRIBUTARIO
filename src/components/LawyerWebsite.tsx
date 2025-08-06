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
import lawyerHero from "@/assets/lawyer-hero.jpg";
import karf7Logo from "@/assets/karf7-logo.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollReveal from "scrollreveal";

const LawyerWebsite = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    // Configuração inicial dos elementos para GSAP - OTIMIZADO PARA VELOCIDADE
    if (heroTitleRef.current && heroSubtitleRef.current && heroButtonRef.current) {
      // Configurar estado inicial dos elementos
      gsap.set(heroTitleRef.current, { opacity: 0, y: 30 });
      gsap.set(heroSubtitleRef.current, { opacity: 0, y: 20 });
      gsap.set(heroButtonRef.current, { opacity: 0, scale: 0.9 });

      // Timeline de animações GSAP - MAIS RÁPIDA E DIRETA
      const tl = gsap.timeline();
      
      // Animação do H1 - MAIS RÁPIDA
      tl.to(heroTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      // Animação do subtítulo - SIMULTÂNEA
      .to(heroSubtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4") // Quase simultâneo
      // Animação do botão - IMEDIATA
      .to(heroButtonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.2)"
      }, "-=0.3"); // Aparece rapidamente
    }

    // Configuração do ScrollReveal - OTIMIZADA
    const sr = ScrollReveal({
      distance: '40px',
      duration: 800,
      opacity: 0,
      reset: false,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      viewFactor: 0.15
    });

    // Hero Section - OTIMIZADO PARA VELOCIDADE
    sr.reveal('.hero-title', { delay: 50, origin: 'bottom', duration: 600 });
    sr.reveal('.hero-subtitle', { delay: 100, origin: 'bottom', duration: 500 });
    sr.reveal('.hero-button', { delay: 150, origin: 'bottom', scale: 0.95, duration: 400 });
    sr.reveal('.hero-cards', { delay: 200, interval: 100, origin: 'bottom', duration: 600 });
    sr.reveal('.hero-reviews', { delay: 250, origin: 'bottom', duration: 500 });

    // Services Section
    sr.reveal('.services-header', { delay: 100, origin: 'top' });
    sr.reveal('.service-card', { delay: 200, interval: 200, origin: 'bottom', scale: 0.95 });

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

    // Animações GSAP para hover effects - SEM OVERFLOW
    const cards = document.querySelectorAll('.hover-lift');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
        });
      });
    });

    // Animação de botões - SEM SCALE
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          y: -2,
          duration: 0.2,
          ease: "power2.out",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          y: 0,
          duration: 0.2,
          ease: "power2.out",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        });
      });
    });

    // Cleanup
    return () => {
      sr.destroy();
    };
  }, []);
  const services = [
    {
      icon: Shield,
      title: "Compliance Tributário",
      headline: "Pare de Viver com Medo da Receita Federal Bater na Sua Porta",
      description: "Garantia blindada de conformidade - durma tranquilo sabendo que está 100% protegido",
      benefits: "Evita autuações milionárias e multas desnecessárias"
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      headline: "Seus Concorrentes Pagam 30% Menos Impostos que Você. Quer Saber Como?",
      description: "Estrutura fiscal inteligente que transforma obrigação em vantagem competitiva",
      benefits: "Redução legal de 20-40% na carga tributária"
    },
    {
      icon: Calculator,
      title: "Recuperação de Créditos",
      headline: "Sua Empresa Tem Milhões 'Esquecidos' nos Cofres da Receita",
      description: "Identificação e monetização de créditos que você nem sabia que tinha direito",
      benefits: "Injeção imediata de caixa sem empréstimos"
    },
    {
      icon: FileText,
      title: "Reforma Tributária",
      headline: "A Reforma Vem Aí. Quem Não Se Preparar Vai Pagar 3x Mais",
      description: "Preparação estratégica para o novo cenário - saia na frente da concorrência",
      benefits: "Modernização que vira vantagem competitiva"
    },
    {
      icon: Scale,
      title: "Defesa Administrativa",
      headline: "Receita Federal Quer R$ 5 Milhões da Sua Empresa? Vamos Contestar",
      description: "Defesa técnica impecável que protege seu caixa de autuações abusivas",
      benefits: "Proteção do patrimônio empresarial"
    },
    {
      icon: Building,
      title: "Contencioso Judicial",
      headline: "Quando a Receita Insiste no Erro, Nós Insistimos na Justiça",
      description: "Ações judiciais estratégicas para garantir seus direitos como contribuinte",
      benefits: "Segurança jurídica definitiva"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico Gratuito",
      subtitle: "Raio-X Completo da Sua Situação Tributária",
      description: "Analisamos sua empresa sem compromisso e identificamos exatamente onde está perdendo dinheiro"
    },
    {
      number: "02", 
      title: "Análise Especializada",
      subtitle: "Profissionais Seniores Avaliam Cada Oportunidade",
      description: "Zero juniores. Apenas especialistas com 10+ anos de Big Four mapeiam riscos e oportunidades"
    },
    {
      number: "03",
      title: "Estratégia Personalizada",
      subtitle: "Solução Sob Medida Para Sua Realidade", 
      description: "Desenvolvemos um plano específico que funciona para seu setor, porte e complexidade"
    },
    {
      number: "04",
      title: "Resultados Concretos",
      subtitle: "Implementação e Acompanhamento Até o Último Real",
      description: "Não paramos até você ver o dinheiro entrando no caixa e os riscos eliminados"
    }
  ];

  const testimonials = [
    {
      name: "João Silva, CEO",
      location: "Empresa de Tecnologia - Faturamento R$ 120MM",
      text: "Estava perdendo o sono com uma possível autuação de R$ 8 milhões. A KARF7 não só identificou R$ 2,3 milhões em créditos que nem sabíamos que existiam, como blindou nossa operação. Hoje durmo tranquilo e meu CFO sorri quando fala de tributos.",
      rating: 5
    },
    {
      name: "Maria Santos, Diretora Financeira",
      location: "Indústria Farmacêutica - Faturamento R$ 300MM", 
      text: "Evitaram uma autuação de R$ 5 milhões com uma defesa que nem nosso jurídico interno acreditava ser possível. O nível técnico é incomparável - são os mesmos profissionais que estruturavam operações bilionárias nas Big Four.",
      rating: 5
    },
    {
      name: "Carlos Mendoza, CFO",
      location: "Varejo Nacional - Faturamento R$ 200MM",
      text: "Em 8 meses, reduziram nossa carga tributária em 25% e ainda recuperaram R$ 1,2 milhão em créditos. O ROI foi de 800% no primeiro ano. Agora nossos concorrentes perguntam como conseguimos preços tão competitivos.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expertise Big Four",
      subtitle: "Não São Consultores Comuns - São os Mesmos que Estruturaram Bilhões",
      description: "Time com passagem sólida por Big Four em operações de alta complexidade. Quem salvou gigantes corporativas, pode salvar sua empresa."
    },
    {
      icon: Heart,
      title: "Personalização Total",
      subtitle: "Chega de Soluções 'Tamanho Único' que Não Funcionam", 
      description: "Profissionais seniores dedicados exclusivamente ao seu projeto. Sua empresa merece atenção VIP, não atendimento de call center."
    },
    {
      icon: TrendingUp,
      title: "Resultados Concretos",
      subtitle: "Foco Obsessivo em Colocar Dinheiro no Seu Bolso",
      description: "Monetização real e geração de caixa sem aventuras tributárias. Se não gerar resultado, você não paga."
    },
    {
      icon: Eye,
      title: "Segurança Jurídica",
      subtitle: "Embasamento Técnico que Resiste a Qualquer Fiscalização",
      description: "Jurisprudência atualizada do CARF, STF e STJ. Estratégias blindadas que passam em qualquer auditoria."
    },
    {
      icon: Globe,
      title: "Visão Estratégica",
      subtitle: "Tributário Alinhado ao Negócio, Não Contra Ele",
      description: "Estratégia fiscal que potencializa operações, não as complica. Crescimento sem medo de complicações."
    },
    {
      icon: Zap,
      title: "Inovação Tributária",
      subtitle: "Preparação Para o Futuro, Não Só Para o Presente",
      description: "Antecipação da Reforma Tributária com modelagem de impactos. Saia na frente enquanto concorrentes se adaptam."
    }
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={karf7Logo} alt="KARF7" className="h-8 w-auto" />
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.3) 50%, rgba(51, 65, 85, 0.2) 100%), url('https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
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
              <span className="text-center">Especialistas Big Four • 5+ anos • Zero autuações</span>
            </div>

            {/* Título principal aprimorado */}
            <div className="space-y-4 sm:space-y-6">
              <h1 ref={heroTitleRef} className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white px-1 sm:px-2">
                Transforme Impostos em
                <span className="block bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent animate-pulse py-1 sm:py-2 leading-relaxed">
                  Vantagem Competitiva
                </span>
              </h1>
              
              <p ref={heroSubtitleRef} className="hero-subtitle text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-200 leading-relaxed max-w-5xl mx-auto font-light px-2">
                Pare de <span className="text-red-400 font-semibold">perder dinheiro</span> com estratégias amadoras.
                <br className="hidden sm:block" />
                Estruture operações de <span className="text-secondary font-bold">milhões</span> com quem fez isso nas Big Four.
              </p>
            </div>

            {/* Cards de credenciais redesenhados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto my-8 sm:my-12 lg:my-16 px-2">
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">Big 4</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Experiência em multinacionais</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">R$ 2B+</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Em economia tributária</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Taxa de aprovação</div>
              </div>
              
              <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:shadow-2xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-secondary mb-1 sm:mb-2">24h</div>
                <div className="text-xs sm:text-sm text-slate-300 leading-tight">Diagnóstico completo</div>
              </div>
            </div>

            {/* CTA aprimorado */}
            <div ref={heroButtonRef} className="space-y-4 sm:space-y-6 lg:space-y-8 px-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="group relative w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border-2 border-green-400/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" />
                      <span className="text-center">Falar com Dr. Carlos Agora</span>
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
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções que resolvem seus maiores problemas tributários
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
              Você Reconhece Alguma Dessas Situações?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed italic mb-6 sm:mb-8">
              "Você tenta entender os tributos, mas sempre parece faltar alguma peça?"
            </p>
          </div>
          
          {/* Grid de Dores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-red-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">😰</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">A Reunião do Pesadelo</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Os números existem, mas não se conectam. As planilhas não refletem a realidade. E você precisa explicar para o conselho por que a empresa pode enfrentar uma autuação milionária.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-orange-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💸</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">O Dinheiro que Sumiu</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Você descobriu que pagou R$ 800 mil em impostos desnecessários. Pior: só soube disso quando um concorrente comentou sobre uma decisão favorável que vocês perderam.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-yellow-500">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">A Decisão no Escuro</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Toda estratégia de crescimento vira um "achômetro" porque ninguém sabe ao certo qual será o impacto tributário real. Crescer virou sinônimo de risco.
              </p>
            </div>
            
            <div className="pain-card bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 hover-lift border-l-4 border-red-600">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⏰</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">A Bomba-Relógio</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Você sabe que algo está errado na estrutura fiscal, mas não sabe o quê. E cada dia que passa, o problema só cresce.
              </p>
            </div>
          </div>
          
          {/* CTA da Solução */}
          <div className="pain-cta text-center bg-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4 px-2">
              Transformamos dados dispersos em informações estratégicas que geram decisões seguras e lucrativas.
            </h3>
            <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
              <Button size="lg" className="btn w-full sm:w-auto text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-3 sm:py-4">
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Quero Resolver Essas Dores Agora
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
              Como Podemos Te Ajudar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Nosso Processo Anti-Surpresas: Técnico, Personalizado e Focado em Resultados
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
              Expertise em Alta Complexidade Corporativa com Resultados Comprovados
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
                  "Soluções Técnicas. Resultados Concretos. Sono Tranquilo."
                </p>
                <p className="text-base sm:text-lg">
                  Nosso propósito é simples: Transformar a área tributária da sua empresa de <strong className="text-red-600">"centro de custo e dor de cabeça"</strong> em <strong className="text-green-600">"centro de lucro e vantagem competitiva"</strong>.
                </p>
                <p>
                  <strong className="text-primary">A diferença está no time:</strong> Formado exclusivamente por profissionais que estruturaram operações bilionárias nas Big Four. Não são consultores comuns - são os mesmos especialistas que blindaram as maiores corporações do país.
                </p>
                <p>
                  <strong className="text-primary">Personalização real:</strong> Não é marketing. Alocamos profissionais seniores dedicados ao seu projeto porque sua empresa merece soluções que realmente funcionam, não templates genéricos.
                </p>
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-green-700 bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                  <strong>Compromisso com resultado:</strong> Se não identificarmos pelo menos R$ 100 mil em economia ou recuperação no diagnóstico gratuito, você não deve nada. Simples assim.
                </p>
              </div>
              <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="btn w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3">
                    <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Conhecer Serviços
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="btn border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Diagnóstico Gratuito
                </Button>
              </div>
            </div>
            <div className="about-image relative animate-scale-in order-1 lg:order-2">
              <img 
                src={lawyerHero} 
                alt="Equipe KARF7"
                className="rounded-xl sm:rounded-2xl shadow-elevated w-full object-cover h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:-bottom-6 lg:-right-6 bg-primary text-primary-foreground p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-elevated">
                <div className="text-center">
                  <div className="text-sm sm:text-lg lg:text-2xl font-bold">Big 4</div>
                  <div className="text-xs sm:text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - OTIMIZADO MOBILE */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="contact-header animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2 leading-tight">
              Transforme os Desafios Tributários em Oportunidades de Caixa
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-blue-100 max-w-4xl mx-auto px-4">
              Pare de perder dinheiro enquanto seus concorrentes economizam milhões com estratégia fiscal inteligente.
            </p>
            
            <div className="contact-form flex flex-col gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 lg:mb-8">
              <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20QUERO%20MEU%20DIAGNÓSTICO%20GRATUITO%20AGORA" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="btn w-full text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-3 sm:py-4 font-bold">
                  <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  QUERO MEU DIAGNÓSTICO GRATUITO AGORA
                </Button>
              </a>
            </div>
            
            {/* Subtítulos dos CTAs */}
            <div className="flex flex-col gap-1 sm:gap-2 justify-center mb-6 sm:mb-8 text-xs sm:text-sm text-blue-200 px-4">
              <span>(Descubra em 24h onde sua empresa está perdendo dinheiro)</span>
              <span className="hidden sm:inline">(Empresas similares que já resolveram problemas parecidos)</span>
            </div>
            
            {/* Garantias */}

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
                Consultoria Tributária especializada em alta complexidade corporativa.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Serviços</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                <li>Compliance Tributário</li>
                <li>Planejamento Tributário</li>
                <li>Recuperação de Créditos</li>
                <li>Reforma Tributária</li>
              </ul>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Contato</h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>+55 12 98171-3398</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="break-all">contato@karf7.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>São José dos Campos, SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold">Horário</h3>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>WhatsApp 24h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 sm:pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2024 KARF7. Todos os direitos reservados.
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
        href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg z-50 transition-all duration-300 pulse-animation"
      >
        <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </a>
    </div>
  );
};

export default LawyerWebsite;