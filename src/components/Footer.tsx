import React from 'react';
import { 
  Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Instagram,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'AI Optimization', href: '#' },
      { label: 'Sales Growth', href: '#' },
      { label: 'Marketing AI', href: '#' },
      { label: 'Data Analysis', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    support: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-50" />
                <div className="relative bg-gradient-to-r from-purple-500 to-purple-700 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900">BlueLogik</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Transforming businesses with cutting-edge AI solutions. 
              Empowering innovation and driving growth.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@bluelogik.ai"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>contact@bluelogik.ai</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold mb-3 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Stay Updated with AI Insights
              </h3>
              <p className="text-gray-600 text-sm">
                Get the latest AI trends delivered to your inbox.
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors flex-1 md:w-64"
              />
              <button
                type="submit"
                className="btn-primary text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Copyright */}
          <div className="text-gray-600">
            © {currentYear} BlueLogik. {t('footer.rights')}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
