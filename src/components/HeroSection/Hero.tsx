import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function HeroSection() {
    const whatsappRedirect = () => {
        window.open('https://wa.me/5516992276144?text=Olá%2C+vi+o+seu+site+e+tenho+interesse+em+negociar.', '_blank')
    }
    return (
        <section id='hero' className="relative overflow-hidden flex items-center justify-center">
            <div id="hero-bg" className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-cyan-900/20"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />

                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                ))}
            </div>


            <div id='#hero' className="container mx-auto px-6 pt-36 pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
                                Desenvolvedor Backend
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-200">
                                Potencialize seu negócio com{' '}
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                                    soluções robustas
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-300 max-w-lg">
                                Desenvolvimento de APIs de alta performance, integrações com ERPs como WinThor e Consinco,
                                dashboards personalizados e soluções de automação para otimizar seus processos.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div>
                                <Button onClick={whatsappRedirect} className="px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30">
                                    Solicitar Orçamento
                                </Button>
                            </div>
                        </div>

                        <motion.div
                            className="flex items-center gap-4 pt-4"
                            whileHover={{
                                scale: 1.02,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20"
                                    initial={{ scale: 1 }}
                                    animate={{
                                        scale: [1, 1.03, 1],
                                        rotate: [0, 2, -2, 0]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "anticipate",
                                        times: [0, 0.2, 1]
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: {
                                            duration: 0.3
                                        }
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-blue-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 1, x: 0 }}
                                    whileHover={{
                                        x: 3,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <p className="text-sm text-gray-300">Soluções personalizadas</p>
                                    <p className="text-sm text-blue-300">Tecnologia sob medida para sua empresa</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="lg:w-1/2 relative"
                        whileHover={{ y: -10 }}
                    >
                        <div className="relative">
                            <motion.img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="API Development"
                                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border border-white/10"
                                whileHover={{ rotate: 1 }}
                            />

                            <motion.div
                                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-xl -z-10"
                                animate={{
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />

                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
                                        animate={{
                                            opacity: [1, 0.8, 1]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut'
                                        }}
                                    >
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
                                    </motion.div>
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