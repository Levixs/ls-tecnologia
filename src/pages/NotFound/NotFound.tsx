import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#1A347C] text-white font-sans text-center relative overflow-hidden select-none px-4">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 100,
          damping: 10
        }}
        className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-extrabold bg-gradient-to-r from-white to-[#a0c4ff] bg-clip-text text-transparent text-shadow"
      >
        404
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3,
          ease: "easeOut"
        }}
        className="text-lg sm:text-xl md:text-2xl max-w-md sm:max-w-lg md:max-w-xl opacity-90 mb-12 z-10"
      >
        Oops! Parece que você se perdeu no espaço digital.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.6,
          type: "spring",
          stiffness: 150
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -3,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 30px rgba(160, 196, 255, 0.4)",
          transition: { 
            duration: 0.2,
            ease: "easeOut"
          }
        }}
        whileTap={{ 
          scale: 0.95,
          boxShadow: "0 0 15px rgba(160, 196, 255, 0.2)",
          transition: { 
            duration: 0.1 
          }
        }}
        onClick={() => window.location.href = "/"}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white font-semibold text-base sm:text-lg z-10 relative overflow-hidden"
      >
        Voltar para a Terra
      </motion.button>
    </div>
  )
}
