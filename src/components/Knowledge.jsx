import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Download, 
  Play, 
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  FileText,
  Video
} from 'lucide-react'

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState('artigos')

  const articles = [
    {
      id: 1,
      title: "Como Abrir um CNPJ: Guia Completo 2024",
      excerpt: "Passo a passo detalhado para abrir sua empresa de forma rápida e sem complicações.",
      date: "2024-01-15",
      readTime: "8 min",
      views: 1250,
      category: "Contabilidade",
      featured: true
    },
    {
      id: 2,
      title: "MEI vs Simples Nacilnal: Qual Escolher para Seu Negócio?",
      excerpt: "Entenda as diferenças e vantagens de cada modalidade empresarial.",
      date: "2024-01-10",
      readTime: "6 min",
      views: 980,
      category: "Fiscal"
    },
    {
      id: 3,
      title: "Desenvolvimento Web: Tendências para 2024",
      excerpt: "As principais tecnologias e tendências que estão moldando o desenvolvimento web.",
      date: "2024-01-05",
      readTime: "10 min",
      views: 1500,
      category: "Tecnologia",
      featured: true
    },
    {
      id: 4,
      title: "Como Resolver Débitos com a Receita Federal",
      excerpt: "Estratégias eficazes para regularizar sua situação fiscal.",
      date: "2023-12-28",
      readTime: "7 min",
      views: 750,
      category: "Fiscal"
    }
  ]

  const ebooks = [
    {
      id: 1,
      title: "Guia Completo do Empreendedor Digital",
      description: "Tudo que você precisa saber para começar seu negócio online.",
      pages: 45,
      downloads: 2300,
      category: "Empreendedorismo",
      featured: true
    },
    {
      id: 2,
      title: "Manual de Obrigações Fiscais para MEI",
      description: "Todas as obrigações fiscais do MEI explicadas de forma simples.",
      pages: 32,
      downloads: 1800,
      category: "Contabilidade"
    },
    {
      id: 3,
      title: "Checklist para Criação de Sites Profissionais",
      description: "Lista completa do que não pode faltar no seu site.",
      pages: 28,
      downloads: 1200,
      category: "Tecnologia"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Como Abrir MEI em 10 Minutos",
      description: "Tutorial prático mostrando todo o processo de abertura do MEI.",
      duration: "12:30",
      views: 5400,
      category: "Tutorial",
      featured: true
    },
    {
      id: 2,
      title: "Criando seu Primeiro Site: Do Zero ao Online",
      description: "Aprenda a criar um site profissional sem conhecimento técnico.",
      duration: "25:45",
      views: 3200,
      category: "Tecnologia"
    },
    {
      id: 3,
      title: "Planejamento Tributário para Pequenas Empresas",
      description: "Estratégias legais para reduzir a carga tributária da sua empresa.",
      duration: "18:20",
      views: 2800,
      category: "Fiscal"
    }
  ]

  const tabs = [
    { id: 'artigos', label: 'Artigos', icon: FileText, count: articles.length },
    { id: 'ebooks', label: 'E-books', icon: BookOpen, count: ebooks.length },
    { id: 'videos', label: 'Vídeos', icon: Video, count: videos.length }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5511991761002?text=Olá! Gostaria de saber mais sobre os conteúdos educativos.', '_blank')
  }

  return (
    <section id="conhecimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compartilhando Conhecimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acesse conteúdos gratuitos sobre contabilidade, desenvolvimento web e empreendedorismo. 
            Conhecimento que faz a diferença no seu negócio.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`${
                  activeTab === tab.id 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label} ({tab.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Articles */}
          {activeTab === 'artigos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div key={article.id} className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow ${article.featured ? 'ring-2 ring-blue-200' : ''}`}>
                  {article.featured && (
                    <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1">
                      Destaque
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* E-books */}
          {activeTab === 'ebooks' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ebooks.map((ebook) => (
                <div key={ebook.id} className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow ${ebook.featured ? 'ring-2 ring-green-200' : ''}`}>
                  {ebook.featured && (
                    <div className="bg-green-600 text-white text-xs font-medium px-3 py-1">
                      Mais Baixado
                    </div>
                  )}
                  <div className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-green-600" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {ebook.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Download className="w-3 h-3 mr-1" />
                        {ebook.downloads}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {ebook.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {ebook.description}
                    </p>
                    
                    <div className="text-xs text-gray-500 mb-4">
                      {ebook.pages} páginas • PDF
                    </div>
                    
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Gratuito
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow ${video.featured ? 'ring-2 ring-red-200' : ''}`}>
                  {video.featured && (
                    <div className="bg-red-600 text-white text-xs font-medium px-3 py-1">
                      Mais Assistido
                    </div>
                  )}
                  <div className="relative h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-red-600 ml-1" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {video.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {video.description}
                    </p>
                    
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Assistir Vídeo
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Receba Conteúdos Exclusivos
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Cadastre-se para receber artigos, e-books e vídeos exclusivos 
              diretamente no seu WhatsApp. Conteúdo de qualidade, sem spam.
            </p>
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Quero Receber Conteúdos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledge

