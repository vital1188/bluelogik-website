import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative py-20 lg:py-0">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg mb-8 md:mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#contact" className="btn-minimal-blue w-full sm:w-auto text-center">
                <span>{t('hero.cta')}</span>
                <ArrowRight />
              </a>
              <a href="#services" className="btn-minimal w-full sm:w-auto text-center">
                <span>{t('hero.learnMore')}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-square relative max-w-md mx-auto lg:max-w-none">
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
                
                {/* Animated circles with sublime effects */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ 
                    pathLength: 1,
                    rotate: 270,
                  }}
                  transition={{ 
                    pathLength: { duration: 3, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0, rotate: 90 }}
                  animate={{ 
                    pathLength: 1,
                    rotate: -270,
                  }}
                  transition={{ 
                    pathLength: { duration: 3, delay: 0.3, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                  }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="1"
                  strokeOpacity="0.1"
                  initial={{ pathLength: 0, rotate: -45 }}
                  animate={{ 
                    pathLength: 1,
                    rotate: 315,
                  }}
                  transition={{ 
                    pathLength: { duration: 3, delay: 0.6, ease: "easeInOut" },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                />
                
                {/* Center dot with pulse */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="3"
                  fill="url(#blueGradient)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 1.2, 1] }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1,
                    times: [0, 0.6, 0.8, 1]
                  }}
                />
                
                {/* Gradient glow with breathing effect */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="url(#blueGradient)"
                  fillOpacity="0.05"
                  filter="blur(40px)"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Additional floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="200"
                    cy="200"
                    r="1"
                    fill="#0066ff"
                    initial={{ 
                      x: 0, 
                      y: 0,
                      opacity: 0
                    }}
                    animate={{ 
                      x: [0, (i - 1) * 80],
                      y: [0, Math.sin(i) * 80],
                      opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Orbiting dots with trail effect */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.circle 
                    cx="200" 
                    cy="50" 
                    r="2" 
                    fill="#0066ff"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Trail effect */}
                  <motion.circle 
                    cx="200" 
                    cy="50" 
                    r="1" 
                    fill="#0066ff"
                    opacity="0.3"
                    initial={{ rotate: -10 }}
                  />
                </motion.g>
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <motion.circle 
                    cx="350" 
                    cy="200" 
                    r="2" 
                    fill="#4d94ff"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Trail effect */}
                  <motion.circle 
                    cx="350" 
                    cy="200" 
                    r="1" 
                    fill="#4d94ff"
                    opacity="0.3"
                    initial={{ rotate: 10 }}
                  />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Minimal Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-16 md:pt-24 border-t border-gray-100"
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
              <div className="text-2xl md:text-3xl font-thin mb-1 md:mb-2 gradient-text-blue">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
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
