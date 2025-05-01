import { Database, HardDrive, LayoutDashboard, Link2, Server, Terminal } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Desenvolvimento de APIs",
      description: "APIs RESTful e GraphQL de alta performance, documentação com Swagger/OpenAPI e integração com diversos sistemas.",
      highlights: ["Node.js/Express", "NestJS", "Python FastAPI", "Autenticação JWT/OAuth"]
    },
    {
      icon: <HardDrive className="w-8 h-8 text-cyan-400" />,
      title: "Aplicativos Desktop",
      description: "Soluções desktop multiplataforma para automação de processos internos e gestão empresarial.",
      highlights: ["Electron.js", "Python Tkinter", "Java Swing", "Integração com hardware"]
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-purple-400" />,
      title: "Dashboards Analíticos",
      description: "Visualização de dados em tempo real com gráficos interativos e relatórios personalizáveis.",
      highlights: ["Power BI", "Grafana", "Tableau", "Dash (Python)"]
    },
    {
      icon: <Link2 className="w-8 h-8 text-green-400" />,
      title: "Integração com ERPs",
      description: "Conexão entre sistemas e ERPs corporativos como WinThor e Consinco para otimização de processos.",
      highlights: ["Winthor TOTVS", "Consinco", "SAP Integration", "Banco de dados Oracle/SQL"]
    },
    {
      icon: <Terminal className="w-8 h-8 text-yellow-400" />,
      title: "Automatização de Processos",
      description: "Robôs para automação de tarefas repetitivas e integração entre sistemas legados.",
      highlights: ["Python (Selenium)", "RPA", "Web Scraping", "Automação de planilhas"]
    },
    {
      icon: <Database className="w-8 h-8 text-red-400" />,
      title: "Banco de Dados",
      description: "Modelagem, otimização e migração de bancos de dados relacionais e não-relacionais.",
      highlights: ["PostgreSQL", "MongoDB", "Redis", "Otimização de queries"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Especializados</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluções técnicas personalizadas para impulsionar sua operação e otimizar processos empresariais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Tecnologias relacionadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gray-700/40 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          <p className="text-gray-400 mb-6">
            Não encontrou exatamente o que precisa? Posso desenvolver uma solução personalizada para seu caso específico.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/20">
            Falar sobre um projeto personalizado
          </button>
        </div>
      </div>
    </section>
  )
}