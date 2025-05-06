import { Calendar, Check, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import React from 'react';

const ContactItem = React.memo(({ icon, title, value, href, color }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  color: string;
}) => (
  <div className="flex items-start gap-4">
    <div className={`p-3 ${color}/10 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      {href ? (
        <a href={href} className="text-lg text-gray-200 hover:text-${color}-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-lg text-gray-200">{value}</p>
      )}
    </div>
  </div>
));

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversar</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Entre em contato para discutir seu projeto ou solicitar um orçamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Envie uma mensagem</h3>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 border min-h-28 h-28 border-gray-600/50 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">Informações de Contato</h3>

              <div className="space-y-4">
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  value="contato@exemplo.com"
                  href="mailto:contato@exemplo.com"
                  color="text-blue-400"
                />

                <ContactItem
                  icon={<Phone className="w-5 h-5" />}
                  title="Telefone/WhatsApp"
                  value="+55 (11) 99999-9999"
                  href="tel:+5511999999999"
                  color="text-green-400"
                />
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Redes Sociais</h4>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/seu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-blue-500/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>

                  <a
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-500/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-200" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card de Disponibilidade Moderno */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-100">Disponibilidade</h3>
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className='mb-2'>
                    <h4 className="text-sm font-medium text-gray-400">Status Atual</h4>
                    <p className="text-gray-200">Disponível para novos projetos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}