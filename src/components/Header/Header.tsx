import { motion, AnimatePresence } from 'framer-motion';
import lstech from "./images/lstech.webp";
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.paddingTop = '0';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen, isMobile]);

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className={`fixed w-full top-0 z-50 ${scrolled ? 'bg-black/30 backdrop-blur-sm' : 'bg-black/20 backdrop-blur-none'} border-b border-white/10`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <a href="#hero" className="flex items-center gap-2 focus:outline-none">
                <motion.div
                  className="w-16 h-16 rounded-full border-2 border-white/10 shadow-lg shadow-blue-500/30 overflow-hidden flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={lstech}
                    alt="LS Tecnologia logo"
                    className="w-full h-full object-contain p-1"
                    loading="eager"
                    width={64}
                    height={64}
                  />
                </motion.div>
              </a>
            </motion.div>

            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a
                      href={item.href}
                      className="relative text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider group focus:outline-none"
                    >
                      {item.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.button
              className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {isMobile && menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/70 z-40"
                  onClick={() => setMenuOpen(false)}
                />

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="md:hidden fixed top-20 left-0 right-0 bg-gray-900 z-50 border-t border-white/10 shadow-xl"
                >
                  <ul className="flex flex-col py-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: 'spring' }}
                        whileHover={{ x: 5 }}
                      >
                        <a
                          href={item.href}
                          className="block text-gray-300 hover:text-white text-sm font-medium uppercase tracking-wider py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-800 transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

    </>
  );
}