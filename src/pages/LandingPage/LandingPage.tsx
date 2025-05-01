import { motion } from "framer-motion";
import UnderConstruction from "./images/UnderConstruction.webp";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-8 max-w-4xl"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-4">
            Em Construção
          </h1>
          <p className="text-lg text-blue-200 max-w-lg">
            Estamos preparando algo incrível para você! Volte em breve para conferir as novidades.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <img
            src={UnderConstruction}
            alt="LS Tecnologia"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl shadow-blue-500/20"
          />
          <div className="absolute inset-0 rounded-lg bg-blue-500/10 pointer-events-none mix-blend-overlay" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center text-blue-300"
        >
          <p>© {new Date().getFullYear()} LS Tecnologia</p>
          <p className="text-sm mt-2">contato@lstecnologia.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
}