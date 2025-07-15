import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

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
    { name: t('footer.privacy'), href: '/privacy-policy' },
    { name: t('footer.terms'), href: '/terms-conditions' },
  ];

  return (
    <footer className="border-t border-gray-100">
      <div className="container py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-3 md:mb-4">
              <Logo />
            </div>
            <p className="text-xs md:text-sm text-gray-500">
              © {currentYear} BlueLogik. {t('footer.rights')}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Legal */}
          <div className="flex gap-4 md:gap-6 md:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs md:text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
