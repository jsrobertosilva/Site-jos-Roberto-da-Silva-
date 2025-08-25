import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock,
  MapPin,
  Send,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Send to WhatsApp
      const message = `Olá José Roberto! Recebi seu contato através do site.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Orçamento:* ${formData.budget}
*Mensagem:* ${formData.message}`

      const whatsappUrl = `https://wa.me/5511991761002?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        })
      }, 3000)
    }, 1000)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5511991761002?text=Olá! Gostaria de conversar sobre seus serviços.', '_blank')
  }

  const sendEmail = () => {
    window.open('mailto:joserobertodasilvaa2023@gmail.com?subject=Contato através do site', '_blank')
  }

  const services = [
    'Abertura de CNPJ/MEI',
    'Assessoria Fiscal',
    'Resolução de Débitos',
    'Suporte Conta Gov.br',
    'Site Institucional',
    'E-commerce',
    'Sistema de Agendamento',
    'Portfólio/Blog',
    'Catálogo Digital',
    'Outro'
  ]

  const budgetRanges = [
    'Até R$ 1.000',
    'R$ 1.000 - R$ 3.000',
    'R$ 3.000 - R$ 5.000',
    'R$ 5.000 - R$ 10.000',
    'Acima de R$ 10.000',
    'Prefiro não informar'
  ]

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pronto para começar seu projeto? Entre em contato conosco e vamos 
            conversar sobre como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-gray-600">
                  Obrigado pelo contato! Você será redirecionado para o WhatsApp 
                  para continuarmos a conversa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Service and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Orçamento Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione uma faixa</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Conte-nos mais sobre seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Prefere falar diretamente? Entre em contato através dos canais abaixo. 
                Estamos sempre prontos para ajudar!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Resposta rápida e atendimento personalizado
                  </p>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    (11) 99176-1002
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Para propostas e documentos detalhados
                  </p>
                  <Button 
                    onClick={sendEmail}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    joserobertodasilvaa2023@gmail.com
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>WhatsApp: 24h (resposta em até 2h)</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Atendimento</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Presencial: São Paulo - SP</p>
                    <p>Online: Todo o Brasil</p>
                    <p>Agendamento via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Perguntas Frequentes</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900">Quanto tempo leva para responder?</p>
                  <p className="text-gray-600">Respondemos em até 2 horas durante o horário comercial.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Fazem orçamento gratuito?</p>
                  <p className="text-gray-600">Sim! Todos os orçamentos são gratuitos e sem compromisso.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Atendem todo o Brasil?</p>
                  <p className="text-gray-600">Sim, atendemos online em todo território nacional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

