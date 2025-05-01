import { Button } from '../ui/button'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden flex items-center justify-center">
            <div id='#hero' className="container mx-auto px-6 pt-36 pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
                                Desenvolvedor Backend
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-200">
                                Potencialize seu negócio com{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                                    APIs robustas
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300 max-w-lg">
                                Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco,
                                dashboards personalizados e soluções de automação para otimizar seus processos.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                                Solicitar Orçamento
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-gray-300">
                                    <p>Soluções personalizadas</p>
                                    <p className="text-blue-300">Tecnologia sob medida para sua empresa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="API Development"
                                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border border-white/10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl -z-10" />

                            <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">+200 endpoints</p>
                                        <p className="text-xs text-gray-300">Desenvolvidos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}