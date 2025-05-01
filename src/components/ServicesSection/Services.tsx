import { Database, HardDrive, LayoutDashboard, Link2, Server, Terminal } from 'lucide-react'
import { Button } from '../ui/button'

export default function Services() {
    const services = [
        {
            icon: <Server className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
            title: "Desenvolvimento de APIs",
            description: "APIs RESTful e GraphQL de alta performance, documentação com Swagger/OpenAPI e integração com diversos sistemas.",
            highlights: ["Node.js/Express", "NestJS", "Python FastAPI", "Autenticação JWT/OAuth"]
        },
        {
            icon: <HardDrive className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
            title: "Aplicativos Desktop",
            description: "Soluções desktop multiplataforma para automação de processos internos e gestão empresarial.",
            highlights: ["Electron.js", "Python Tkinter", "Java Swing", "Integração com hardware"]
        },
        {
            icon: <LayoutDashboard className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />,
            title: "Dashboards Analíticos",
            description: "Visualização de dados em tempo real com gráficos interativos e relatórios personalizáveis.",
            highlights: ["Power BI", "Grafana", "Tableau", "Dash (Python)"]
        },
        {
            icon: <Link2 className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />,
            title: "Integração com ERPs",
            description: "Conexão entre sistemas e ERPs corporativos como WinThor e Consinco para otimização de processos.",
            highlights: ["Winthor TOTVS", "Consinco", "SAP Integration", "Banco de dados Oracle/SQL"]
        },
        {
            icon: <Terminal className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />,
            title: "Automatização de Processos",
            description: "Robôs para automação de tarefas repetitivas e integração entre sistemas legados.",
            highlights: ["Python (Selenium)", "RPA", "Web Scraping", "Automação de planilhas"]
        },
        {
            icon: <Database className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors" />,
            title: "Banco de Dados",
            description: "Modelagem, otimização e migração de bancos de dados relacionais e não-relacionais.",
            highlights: ["PostgreSQL", "MongoDB", "Redis", "Otimização de queries"]
        }
    ]

    return (
        <section id="services" className="py-20 ">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Especializados</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Soluções técnicas personalizadas para impulsionar sua operação e otimizar processos empresariais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 select-none">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden"
                        >
                            {/* Efeito neon de fundo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            
                            {/* Brilho neon nas bordas */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/20 pointer-events-none transition-all duration-300"></div>
                            
                            <div className="relative z-10">
                                <div className="mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center group-hover:bg-gray-700/70 transition-all group-hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{service.description}</p>

                                <div className="mt-4 pt-4 border-t border-gray-700/50 group-hover:border-gray-700/70 transition-colors">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2 group-hover:text-gray-200 transition-colors">Tecnologias relacionadas:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.highlights.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-700/40 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-700/60 group-hover:text-gray-200 transition-all"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-7 text-center">
                    <p className="text-gray-400 mb-6">
                        Não encontrou exatamente o que precisa? Posso desenvolver uma solução personalizada para seu caso específico.
                    </p>
                    <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                        Falar sobre um projeto personalizado
                    </Button>
                </div>
            </div>
        </section>
    )
}