import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Eu sou o José, assistente virtual. Como posso ajudá-lo hoje?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    {
      text: "Serviços de Contabilidade",
      response: "Oferecemos diversos serviços Fiscais:\n\n• Abertura de CNPJ/MEI\n• Assessoria Fiscal\n• Resolução de débitos com Receita Federal\n• Suporte com conta Gov.br\n• Agendamentos e consultas\n\nGostaria de falar diretamente com o José Roberto?"
    },
    {
      text: "Desenvolvimento Web",
      response: "Criamos soluções digitais completas:\n\n• Sites institucionais\n• E-commerce e lojas virtuais\n• Catálogos para restaurantes\n• Sistemas de agendamento\n• Portfólios e blogs pessoais\n\nQuer saber mais sobre algum serviço específico?"
    },
    {
      text: "Preços e Orçamentos",
      response: "Os preços variam conforme o projeto e suas necessidades específicas. Para um orçamento personalizado, recomendo falar diretamente com o José Roberto. Ele poderá entender melhor seu projeto e oferecer a melhor solução!"
    },
    {
      text: "Falar com José Roberto",
      response: "Perfeito! Você pode falar diretamente com o José Roberto através do WhatsApp. Ele responde rapidamente e poderá esclarecer todas suas dúvidas!"
    }
  ]

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá José Roberto! Vim através do seu site e gostaria de saber mais sobre seus serviços.")
    window.open(`https://wa.me/5511991761002?text=${message}`, '_blank')
  }

  const sendEmail = () => {
    window.open('mailto:joserobertodasilvaa2023@gmail.com?subject=Contato através do site', '_blank')
  }

  const addMessage = (text, sender = 'user') => {
    const newMessage = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleQuickReply = (reply) => {
    addMessage(reply.text, 'user')
    
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      addMessage(reply.response, 'bot')
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = inputMessage.trim()
    addMessage(userMessage, 'user')
    setInputMessage('')

    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      
      // Simple keyword-based responses
      let botResponse = "Obrigado pela sua mensagem! Para um atendimento mais personalizado, recomendo falar diretamente com o José Roberto através do WhatsApp. Ele poderá ajudá-lo melhor!"

      const lowerMessage = userMessage.toLowerCase()
      
      if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
        botResponse = "Os valores variam conforme o projeto. Para um orçamento personalizado, entre em contato com o José Roberto pelo WhatsApp. Ele fará uma análise das suas necessidades!"
      } else if (lowerMessage.includes('contabilidade') || lowerMessage.includes('fiscal') || lowerMessage.includes('cnpj')) {
        botResponse = "Temos diversos serviços contábeis disponíveis! O José Roberto é especialista em abertura de empresas, assessoria fiscal e resolução de problemas com a Receita Federal. Quer falar com ele?"
      } else if (lowerMessage.includes('site') || lowerMessage.includes('desenvolvimento') || lowerMessage.includes('web')) {
        botResponse = "Criamos sites profissionais, e-commerce, sistemas de agendamento e muito mais! O José Roberto pode desenvolver a solução perfeita para seu negócio. Vamos conversar?"
      } else if (lowerMessage.includes('horário') || lowerMessage.includes('atendimento')) {
        botResponse = "O atendimento é de segunda a sexta, das 8h às 18h. Mas pelo WhatsApp você pode enviar mensagem a qualquer hora que o José Roberto responde assim que possível!"
      }

      addMessage(botResponse, 'bot')
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">José - Assistente Virtual</h3>
                <p className="text-sm text-blue-100">Online agora</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-blue-500"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Escolha uma opção:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    variant="outline"
                    size="sm"
                    className="text-xs h-auto py-2 px-3 whitespace-normal"
                  >
                    {reply.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Actions */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2 mb-3">
              <Button
                onClick={openWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs"
              >
                <Phone className="w-4 h-4 mr-1" />
                WhatsApp
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
              <Button
                onClick={sendEmail}
                variant="outline"
                className="flex-1 text-xs"
              >
                <Mail className="w-4 h-4 mr-1" />
                E-mail
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

