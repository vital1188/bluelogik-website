import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '/#home', section: 'home' },
    { name: t('nav.services'), href: '/#services', section: 'services' },
    { name: t('nav.whyAI'), href: '/#why-ai', section: 'why-ai' },
    { name: t('nav.contact'), href: '/#contact', section: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    
    // If we're on the home page, just scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash
      navigate(item.href);
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <nav className={`relative z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-300 cursor-pointer text-gray-800"
                  style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}
                >
                  {item.name}
                </a>
              </motion.div>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2 text-sm font-light hover:opacity-60 transition-opacity duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang?.flag}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 bg-white border border-gray-100 min-w-[150px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-light hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                          language === lang.code ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/#contact" className="btn-minimal">
                {t('nav.contact')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block text-lg font-medium cursor-pointer text-gray-800"
                  style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-2 text-sm font-light border ${
                        language === lang.code
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
