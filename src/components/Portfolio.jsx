import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Code, 
  ShoppingCart, 
  Calendar,
  User,
  Building,
  Filter
} from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: "Site Institucional - Empresa de Consultoria",
      category: "site",
      description: "Site profissional para empresa de consultoria empresarial com design moderno e responsivo.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      features: ["Design Responsivo", "SEO Otimizado", "Formulário de Contato"],
      icon: Building
    },
    {
      id: 2,
      title: "E-commerce - Loja de Roupas",
      category: "ecommerce",
      description: "Loja virtual completa com carrinho de compras, sistema de pagamento e gestão de produtos.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Carrinho de Compras", "Pagamento Online", "Painel Admin"],
      icon: ShoppingCart
    },
    {
      id: 3,
      title: "Sistema de Agendamento - Salão de Beleza",
      category: "sistema",
      description: "Plataforma para agendamento online de consultas com notificações automáticas.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Express", "PostgreSQL"],
      features: ["Agenda Online", "Notificações", "Gestão de Clientes"],
      icon: Calendar
    },
    {
      id: 4,
      title: "Portfólio Profissional - Arquiteta",
      category: "portfolio",
      description: "Site pessoal para arquiteta com galeria de projetos e formulário de contato.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Galeria de Imagens", "Design Elegante", "Otimizado para Mobile"],
      icon: User
    },
    {
      id: 5,
      title: "Catálogo Digital - Restaurante",
      category: "catalogo",
      description: "Cardápio digital interativo com sistema de pedidos online para restaurante.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "PWA"],
      features: ["Cardápio Digital", "Pedidos Online", "App Mobile"],
      icon: Code
    },
    {
      id: 6,
      title: "Blog Corporativo - Empresa de TI",
      category: "blog",
      description: "Blog corporativo com sistema de posts, comentários e newsletter.",
      image: "/api/placeholder/400/300",
      technologies: ["WordPress", "PHP", "MySQL"],
      features: ["Sistema de Posts", "Comentários", "Newsletter"],
      icon: Building
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos os Projetos', count: projects.length },
    { id: 'site', label: 'Sites', count: projects.filter(p => p.category === 'site').length },
    { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'sistema', label: 'Sistemas', count: projects.filter(p => p.category === 'sistema').length },
    { id: 'portfolio', label: 'Portfólios', count: projects.filter(p => p.category === 'portfolio').length },
    { id: 'catalogo', label: 'Catálogos', count: projects.filter(p => p.category === 'catalogo').length },
    { id: 'blog', label: 'Blogs', count: projects.filter(p => p.category === 'blog').length }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada projeto é único e criado com foco na qualidade e resultados.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-blue-600" />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600 capitalize">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Principais recursos:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Solicitar Projeto Similar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vamos conversar sobre seu projeto! Oferecemos soluções personalizadas 
              para cada necessidade, desde sites simples até sistemas complexos.
            </p>
            <Button 
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Iniciar Meu Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

