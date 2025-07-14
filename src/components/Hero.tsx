import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#contact" className="btn-minimal-blue group">
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-minimal">
                {t('hero.learnMore')}
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Minimal geometric design */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                style={{ maxWidth: '500px', margin: '0 auto', display: 'block' }}
              >
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff" />
                    <stop offset="100%" stopColor="#4d94ff" />
                  </linearGradient>
                </defs>
                
                {/* Animated circles */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="#e5e5e5"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="#e5e5e5"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                />
                
                {/* Center dot */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="3"
                  fill="#1a1a1a"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                
                {/* Orbiting dots */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="200" cy="50" r="2" fill="#666666" />
                </motion.g>
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="350" cy="200" r="2" fill="#999999" />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Minimal Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-8 mt-24 pt-24 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '99%', label: t('hero.efficiency') },
            { value: '24/7', label: t('hero.support') },
            { value: '500+', label: t('hero.solutions') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-thin mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full blur-3xl opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Hero;
