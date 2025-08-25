import { Button } from '@/components/ui/button'
import { ArrowRight, Calculator, Code, MessageCircle } from 'lucide-react'
import josePhoto from '../assets/jose-silva-photo.jpg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5511991761002?text=Olá! Gostaria de saber mais sobre seus serviços.', '_blank')
  }

  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Disponível para novos projetos
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                José Roberto
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold">
                Contador & Desenvolvedor Web
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Soluções completas em contabilidade e tecnologia. 
                Oferecemos assessoria fiscal especializada e desenvolvimento 
                de sites profissionais para impulsionar seu negócio.
              </p>
            </div>

            {/* Services Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contabilidade</h3>
                  <p className="text-sm text-gray-600">Assessoria fiscal completa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvimento</h3>
                  <p className="text-sm text-gray-600">Sites e sistemas web</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('servicos')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Ver Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                onClick={openWhatsApp}
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Fale Comigo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={josePhoto} 
                alt="José Roberto - Contador e Desenvolvedor Web"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-4 left-4 w-48 h-48 bg-green-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

