import { Button } from '@/components/ui/button'
import { 
  Calculator, 
  FileText, 
  Building, 
  Shield, 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Calendar,
  User,
  BookOpen,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const contabilidadeServices = [
    {
      icon: Building,
      title: "Abertura de CNPJ/MEI",
      description: "Processo completo de abertura de empresa, desde a consulta de viabilidade até a obtenção do CNPJ.",
      features: ["Consulta de viabilidade", "Documentação completa", "Acompanhamento do processo"]
    },
    {
      icon: Calculator,
      title: "Assessoria Fiscal",
      description: "Orientação especializada em questões fiscais para manter sua empresa sempre em conformidade.",
      features: ["Planejamento tributário", "Orientação fiscal", "Compliance tributário"]
    },
    {
      icon: Shield,
      title: "Resolução de Débitos",
      description: "Regularização de débitos junto à Receita Federal e outros órgãos governamentais.",
      features: ["Parcelamento de débitos", "Negociação com RF", "Regularização completa"]
    },
    {
      icon: FileText,
      title: "Suporte Conta Gov.br",
      description: "Ajuda completa com criação de senha, problemas de acesso e utilização da plataforma.",
      features: ["Criação de conta", "Recuperação de senha", "Suporte técnico"]
    }
  ]

  const webServices = [
    {
      icon: Code,
      title: "Sites Institucionais",
      description: "Sites profissionais e responsivos que representam sua marca de forma impactante.",
      features: ["Design responsivo", "SEO otimizado", "Carregamento rápido"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce e Lojas Virtuais",
      description: "Lojas online completas com carrinho de compras integrado e sistema de pagamento.",
      features: ["Carrinho de compras", "Pagamento integrado", "Gestão de produtos"]
    },
    {
      icon: Smartphone,
      title: "Catálogos para Restaurantes",
      description: "Cardápios digitais interativos para restaurantes e estabelecimentos alimentícios.",
      features: ["Cardápio digital", "Pedidos online", "Interface intuitiva"]
    },
    {
      icon: Calendar,
      title: "Sistemas de Agendamento",
      description: "Plataformas personalizadas para agendamento online de serviços e consultas.",
      features: ["Agenda online", "Notificações automáticas", "Gestão de horários"]
    },
    {
      icon: User,
      title: "Portfólios Profissionais",
      description: "Sites pessoais e portfólios profissionais para destacar seu trabalho e experiência.",
      features: ["Design personalizado", "Galeria de projetos", "Formulário de contato"]
    },
    {
      icon: BookOpen,
      title: "Blogs Pessoais",
      description: "Blogs personalizados para compartilhar conhecimento e construir autoridade no mercado.",
      features: ["Sistema de posts", "Comentários", "SEO integrado"]
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em contabilidade e desenvolvimento web 
            para impulsionar seu negócio e garantir sua conformidade fiscal.
          </p>
        </div>

        {/* Serviços Contábeis */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Serviços Contábeis e Fiscais
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Assessoria Contábil Completa
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantenha sua empresa em conformidade com todas as obrigações fiscais 
              e conte com nossa experiência para otimizar seus processos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contabilidadeServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Serviços de Desenvolvimento Web */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Code className="w-4 h-4 mr-2" />
              Desenvolvimento Web
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Soluções Digitais Profissionais
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Criamos sites, sistemas e aplicações web modernas e responsivas 
              que elevam sua presença digital e geram resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => scrollToSection('contato')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services

