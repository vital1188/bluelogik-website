import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.whyAI'), href: '/#why-ai' },
    { name: t('nav.contact'), href: '/#contact' },
  ];

  const legalLinks = [
    { name: t('footer.privacy'), href: '#' },
    { name: t('footer.terms'), href: '#' },
  ];

  return (
    <footer className="border-t border-gray-100">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Copyright */}
          <div>
            <Link to="/" className="text-xl font-thin tracking-wider inline-block mb-4">
              <span className="gradient-text-blue">Blue</span>Logik
            </Link>
            <p className="text-sm text-gray-500">
              © {currentYear} BlueLogik. {t('footer.rights')}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Legal */}
          <div className="flex gap-6 md:justify-end">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
