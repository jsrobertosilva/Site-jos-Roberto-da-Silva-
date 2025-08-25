import { Button } from '@/components/ui/button'
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import josePhoto from '../assets/jose-silva-photo.jpg'

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formação em Contabilidade",
      description: "Graduação completa com especialização em contabilidade empresarial"
    },
    {
      icon: Award,
      title: "Certificações Web",
      description: "Certificações em desenvolvimento web e tecnologias modernas"
    },
    {
      icon: Users,
      title: "Experiência Prática",
      description: "Mais de 5 anos atendendo empresas e empreendedores"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Respostas rápidas e soluções eficientes para seus problemas"
    }
  ]

  const differentials = [
    "Atendimento personalizado e humanizado",
    "Soluções completas em um só lugar",
    "Combinação única de contabilidade e tecnologia",
    "Suporte contínuo e acompanhamento",
    "Preços justos e transparentes",
    "Experiência com pequenas e médias empresas"
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Sobre José Roberto
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Experiência e Dedicação a Seu Serviço
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Sou José Roberto, contador experiente e desenvolvedor web apaixonado por 
                ajudar empresas e empreendedores a alcançarem seus objetivos. Com uma 
                combinação única de conhecimento contábil e habilidades tecnológicas, 
                ofereço soluções completas e personalizadas.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Minha missão é simplificar processos complexos, seja na área fiscal 
                ou no desenvolvimento de soluções digitais. Acredito que cada cliente 
                é único e merece um atendimento diferenciado, com soluções que realmente 
                fazem a diferença no dia a dia do negócio.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <qual.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{qual.title}</h3>
                    <p className="text-sm text-gray-600">{qual.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Meus Diferenciais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{differential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Ver Portfólio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contato')}
                size="lg"
                variant="outline"
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          {/* Photo and Stats */}
          <div className="space-y-8">
            {/* Professional Photo */}
            <div className="relative">
              <img 
                src={josePhoto} 
                alt="José Roberto - Contador e Desenvolvedor Web"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
                <div className="text-gray-600">Tempo de Resposta</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

