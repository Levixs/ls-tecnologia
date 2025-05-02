import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  colorClass: string;
  hoverColorClass?: string;
};

const ContactItem = React.memo(({
  icon,
  title,
  value,
  href,
  colorClass,
  hoverColorClass
}: ContactItemProps) => (
  <motion.div
    className="flex items-start gap-4"
    whileHover={{ x: 5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <motion.div
      className={`p-3 bg-opacity-10 rounded-lg ${colorClass}`}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {icon}
    </motion.div>
    <div className="flex-1">
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      {href ? (
        <a
          href={href}
          className={`text-lg text-gray-200 transition-colors ${hoverColorClass || 'hover:text-gray-300'}`}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <p className="text-lg text-gray-200">{value}</p>
      )}
    </div>
  </motion.div>
));

export default function Contact() {
  return (
    <section id="contact" className="relative py-12 overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              rotate: Math.random() * 360,
              opacity: 0.1
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversar</span>
          </h2>
          <p className="text-lg text-gray-400">
            Entre em contato para discutir seu projeto ou solicitar um orçamento personalizado.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 w-full">
          {/* Formulário */}
          <motion.div
            className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/60 transition-colors backdrop-blur-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Envie uma mensagem</h3>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/70 transition-colors"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/70 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border min-h-32 border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/70 transition-colors"
                  placeholder="Descreva seu projeto ou dúvida..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/60 transition-colors backdrop-blur-sm w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Informações de Contato</h3>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                value="contato@lstecnologia.com"
                href="mailto:contato@lstecnologia.com"
                colorClass="text-blue-400 bg-blue-400"
                hoverColorClass="hover:text-blue-400"
              />

              <ContactItem
                icon={<Phone className="w-5 h-5" />}
                title="Telefone/WhatsApp"
                value="+55 (16) 99227-6144"
                href="https://wa.me/5516992276144?text=Olá%2C+vi+o+seu+site+e+tenho+interesse+em+negociar."
                colorClass="text-green-400 bg-green-400"
                hoverColorClass="hover:text-green-400"
              />
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/gleidsonlevi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/10 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </motion.a>

                <motion.a
                  href="https://github.com/Levixs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700/50 rounded-lg hover:bg-gray-500/10 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-gray-200 hover:text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}