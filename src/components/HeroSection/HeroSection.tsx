import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden flex items-center justify-center">
            <div id='#hero' className="container mx-auto px-6 pt-36 pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                                Solicitar Orçamento
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((item) => (
                                    <img
                                        key={item}
                                        src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'
                                            }/${item + 20}.jpg`}
                                        className="w-10 h-10 rounded-full border-2 border-white/30"
                                        alt="Client"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-gray-300">
                                <p>+50 integrações realizadas</p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span>5.0 (32 avaliações)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="API Development"
                                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border border-white/10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl -z-10" />

                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
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
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
