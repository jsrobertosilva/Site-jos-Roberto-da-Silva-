import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  BarChart3,
  FileText,
  Video,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Users,
  TrendingUp
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const navigate = useNavigate()

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/')
  }

  const stats = [
    { label: 'Visitantes do Mês', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Contatos Recebidos', value: '156', change: '+8%', icon: MessageSquare, color: 'green' },
    { label: 'Artigos Publicados', value: '24', change: '+3%', icon: FileText, color: 'purple' },
    { label: 'Downloads de E-books', value: '1,234', change: '+15%', icon: Download, color: 'orange' }
  ]

  const recentContacts = [
    { id: 1, name: 'Maria Silva', email: 'maria@email.com', service: 'E-commerce', date: '2024-01-20' },
    { id: 2, name: 'João Santos', email: 'joao@email.com', service: 'Abertura CNPJ', date: '2024-01-19' },
    { id: 3, name: 'Ana Costa', email: 'ana@email.com', service: 'Site Institucional', date: '2024-01-18' }
  ]

  const articles = [
    { id: 1, title: 'Como Abrir um CNPJ: Guia Completo 2024', status: 'Publicado', views: 1250, date: '2024-01-15' },
    { id: 2, title: 'MEI vs CNPJ: Qual Escolher?', status: 'Rascunho', views: 0, date: '2024-01-10' },
    { id: 3, title: 'Desenvolvimento Web: Tendências 2024', status: 'Publicado', views: 1500, date: '2024-01-05' }
  ]

  const ebooks = [
    { id: 1, title: 'Guia Completo do Empreendedor Digital', downloads: 2300, status: 'Ativo' },
    { id: 2, title: 'Manual de Obrigações Fiscais para MEI', downloads: 1800, status: 'Ativo' },
    { id: 3, title: 'Checklist para Sites Profissionais', downloads: 1200, status: 'Ativo' }
  ]

  const videos = [
    { id: 1, title: 'Como Abrir MEI em 10 Minutos', views: 5400, duration: '12:30', status: 'Publicado' },
    { id: 2, title: 'Criando seu Primeiro Site', views: 3200, duration: '25:45', status: 'Publicado' },
    { id: 3, title: 'Planejamento Tributário', views: 2800, duration: '18:20', status: 'Rascunho' }
  ]

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'articles', label: 'Artigos', icon: FileText },
    { id: 'ebooks', label: 'E-books', icon: BookOpen },
    { id: 'videos', label: 'Vídeos', icon: Video },
    { id: 'contacts', label: 'Contatos', icon: MessageSquare },
    { id: 'settings', label: 'Configurações', icon: Settings }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} vs mês anterior
                </p>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Contacts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Contatos Recentes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">E-mail</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Serviço</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentContacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{contact.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{contact.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{contact.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{new Date(contact.date).toLocaleDateString('pt-BR')}</td>
                  <td className="px-6 py-4 text-sm">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderArticles = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gerenciar Artigos</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Artigo
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Título</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Visualizações</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{article.title}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      article.status === 'Publicado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{article.views}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{new Date(article.date).toLocaleDateString('pt-BR')}</td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'articles':
        return renderArticles()
      case 'ebooks':
        return (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gerenciamento de E-books</h3>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        )
      case 'videos':
        return (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gerenciamento de Vídeos</h3>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        )
      case 'contacts':
        return (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gerenciamento de Contatos</h3>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        )
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Configurações</h3>
            <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JS</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">José Roberto</h1>
              <p className="text-sm text-gray-600">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="px-4 pb-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-gray-600 hover:text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

