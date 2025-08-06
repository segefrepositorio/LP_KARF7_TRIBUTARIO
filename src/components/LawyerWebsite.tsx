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

const LawyerWebsite = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2" />
              <span className="text-lg sm:text-xl font-bold text-primary">KARF7</span>
            </div>
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors link-underline">Serviços</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors link-underline">Sobre</a>
              <a href="#resultados" className="text-foreground hover:text-primary transition-colors link-underline">Resultados</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors link-underline">Contato</a>
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer">
                <Button className="text-sm sm:text-base px-3 sm:px-4">
                  <FaWhatsapp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">WhatsApp</span>
                  <span className="sm:hidden">Fale com o Dr Carlos</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-12 sm:py-16 md:py-20 lg:py-32 min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4342494/pexels-photo-4342494.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                Cansado de ter seu crescimento <span className="text-secondary">freiado por impostos?</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Pare de tomar decisões no escuro. Transforme sua área tributária de "dor de cabeça" em <span className="font-bold text-yellow-300">vantagem competitiva</span> com quem estruturou operações de milhões nas Big Four.
              </p>
              
              {/* Cards com glassmorphism */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                  <div className="text-lg sm:text-xl font-bold text-secondary mb-2">Big 4</div>
                  <div className="text-xs sm:text-sm text-blue-100">Profissionais que evitaram bilhões em autuações</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                  <div className="text-lg sm:text-xl font-bold text-secondary mb-2">Seniores</div>
                  <div className="text-xs sm:text-sm text-blue-100">Dedicados, zero juniores</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                  <div className="text-lg sm:text-xl font-bold text-secondary mb-2">Alta Complexidade</div>
                  <div className="text-xs sm:text-sm text-blue-100">Casos que outros consultores recusam</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                  <div className="text-lg sm:text-xl font-bold text-secondary mb-2">100% Compliance</div>
                  <div className="text-xs sm:text-sm text-blue-100">Zero autuações em 5 anos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg">
                  <div className="text-lg sm:text-xl font-bold text-secondary mb-2">24h Diagnóstico</div>
                  <div className="text-xs sm:text-sm text-blue-100">Problemas identificados em 1 dia</div>
                </div>
              </div>
              
              {/* CTA Button com glassmorphism */}
              <div className="flex justify-center mb-8 sm:mb-12">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="hover-glow bg-green-500/90 backdrop-blur-md border border-green-400/30 hover:bg-green-600/90 w-full sm:w-auto text-xl sm:text-2xl px-12 sm:px-16 py-6 sm:py-8 scale-110 sm:scale-125 shadow-2xl">
                    <FaWhatsapp className="h-6 w-6 sm:h-8 sm:w-8 mr-3" />
                    Fale com o Dr Carlos
                  </Button>
                </a>
              </div>
              
              {/* Avaliações com glassmorphism */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 space-y-4 sm:space-y-0">
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6">
                  <span className="text-sm sm:text-base text-blue-100 mb-3">Excelência Comprovada</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6">
                  <span className="text-sm sm:text-base text-blue-100 mb-3">Resultados Concretos</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-secondary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              

            </div>
          </div>
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

      {/* Nossos Serviços */}
      <section id="servicos" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Reformulados com foco em dores - Soluções que resolvem seus maiores problemas tributários
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer group border-border shadow-card bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <service.icon className="h-12 w-12 lg:h-16 lg:w-16 text-primary flex-shrink-0 group-hover:text-secondary transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-primary mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
                    "{service.headline}"
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-green-800">Benefício: {service.benefits}</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    Saiba Mais
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Dores */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Você Reconhece Alguma Dessas Situações Constrangedoras?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed italic mb-8">
              "Você tenta entender os tributos, mas sempre parece faltar alguma peça?"
            </p>
          </div>
          
          {/* Grid de Dores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift border-l-4 border-red-500">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">A Reunião do Pesadelo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Os números existem, mas não se conectam. As planilhas não refletem a realidade. E você precisa explicar para o conselho por que a empresa pode enfrentar uma autuação milionária.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift border-l-4 border-orange-500">
              <div className="text-3xl mb-4">💸</div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">O Dinheiro que Sumiu</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você descobriu que pagou R$ 800 mil em impostos desnecessários. Pior: só soube disso quando um concorrente comentou sobre uma decisão favorável que vocês perderam.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift border-l-4 border-yellow-500">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">A Decisão no Escuro</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toda estratégia de crescimento vira um "achômetro" porque ninguém sabe ao certo qual será o impacto tributário real. Crescer virou sinônimo de risco.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover-lift border-l-4 border-red-600">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">A Bomba-Relógio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você sabe que algo está errado na estrutura fiscal, mas não sabe o quê. E cada dia que passa, o problema só cresce.
              </p>
            </div>
          </div>
          
          {/* CTA da Solução */}
          <div className="text-center bg-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Transformamos dados dispersos em informações estratégicas que geram decisões seguras e lucrativas.
            </h3>
            <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <FaWhatsapp className="h-5 w-5 mr-2" />
                Quero Resolver Essas Dores Agora
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Resultados reais de empresas que transformaram suas dores em soluções
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift shadow-card">
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

      {/* Como podemos ajudar */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Como Podemos Te Ajudar
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Nosso Processo Anti-Surpresas: Técnico, Personalizado e Focado em Resultados Concretos
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in px-4" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-6 sm:translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-base sm:text-lg font-semibold text-secondary mb-2 italic">"{step.subtitle}"</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Por que escolher a KARF7?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Expertise em Alta Complexidade Corporativa com Resultados Comprovados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 animate-fade-in hover-lift p-3 sm:p-4 rounded-lg">
                <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-base sm:text-lg font-semibold text-secondary mb-2 italic">"{benefit.subtitle}"</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-up order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                Sobre a KARF7
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="text-xl sm:text-2xl font-bold text-primary mb-6">
                  "Soluções Técnicas. Resultados Concretos. Sono Tranquilo."
                </p>
                <p className="text-lg">
                  Nosso propósito é simples: Transformar a área tributária da sua empresa de <strong className="text-red-600">"centro de custo e dor de cabeça"</strong> em <strong className="text-green-600">"centro de lucro e vantagem competitiva"</strong>.
                </p>
                <p>
                  <strong className="text-primary">A diferença está no time:</strong> Formado exclusivamente por profissionais que estruturaram operações bilionárias nas Big Four. Não são consultores comuns - são os mesmos especialistas que blindaram as maiores corporações do país.
                </p>
                <p>
                  <strong className="text-primary">Personalização real:</strong> Não é marketing. Alocamos profissionais seniores dedicados ao seu projeto porque sua empresa merece soluções que realmente funcionam, não templates genéricos.
                </p>
                <p className="text-lg font-semibold text-green-700 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <strong>Compromisso com resultado:</strong> Se não identificarmos pelo menos R$ 100 mil em economia ou recuperação no diagnóstico gratuito, você não deve nada. Simples assim.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Conhecer Serviços
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Diagnóstico Gratuito
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in order-1 lg:order-2">
              <img 
                src={lawyerHero} 
                alt="Equipe KARF7"
                className="rounded-2xl shadow-elevated w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-3 sm:p-4 rounded-xl shadow-elevated">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">Big 4</div>
                  <div className="text-xs sm:text-sm">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Transforme os Desafios Tributários em Oportunidades de Caixa
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto px-4">
              Pare de perder dinheiro enquanto seus concorrentes economizam milhões com estratégia fiscal inteligente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <a href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20QUERO%20MEU%20DIAGNÓSTICO%20GRATUITO%20AGORA" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 font-bold">
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  QUERO MEU DIAGNÓSTICO GRATUITO AGORA
                </Button>
              </a>
            </div>
            
            {/* Subtítulos dos CTAs */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center mb-8 text-xs sm:text-sm text-blue-200">
              <span>(Descubra em 24h onde sua empresa está perdendo dinheiro)</span>
              <span>(Empresas similares que já resolveram problemas parecidos)</span>
            </div>
            
            {/* Garantias */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-xs sm:text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                <span>Diagnóstico 100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                <span>Sigilo Profissional Absoluto</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2 text-green-400" />
                <span>Atendimento em 24h</span>
              </div>
              <div className="flex items-center justify-center">
                <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                <span>Resultados Concretos ou Reembolso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mr-2" />
                <span className="text-lg sm:text-xl font-bold">KARF7</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Consultoria Tributária especializada em alta complexidade corporativa.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold">Serviços</h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                <li>Compliance Tributário</li>
                <li>Planejamento Tributário</li>
                <li>Recuperação de Créditos</li>
                <li>Reforma Tributária</li>
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold">Contato</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>+55 12 98171-3398</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>contato@karf7.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>São José dos Campos, SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold">Horário</h3>
              <div className="text-sm sm:text-base text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>WhatsApp 24h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2024 KARF7. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5512991019885&text=Olá%20Dr.%20Carlos,%20vim%20pelo%20site%20e%20preciso%20de%20advogado%20tributário."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 pulse-animation"
      >
        <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
};

export default LawyerWebsite;