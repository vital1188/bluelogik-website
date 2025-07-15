import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-0">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative px-2 sm:px-0"
          >
            <motion.h1 
              className="mb-6 sm:mb-8 leading-tight relative text-center sm:text-left font-semibold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
            >
              <span className="block">{t('hero.title')}</span>
              {/* Subtle accent line */}
              <motion.div
                className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0 text-gray-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-minimal-blue w-full sm:w-auto text-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn-minimal w-full sm:w-auto text-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('hero.learnMore')}</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Enhanced Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-first lg:order-last mb-12 lg:mb-0"
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4 sm:px-0">
              {/* Main geometric visualization */}
              <div className="aspect-square relative">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066ff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#4d94ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#80b3ff" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4d94ff" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer rotating ring */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="url(#primaryGradient)"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                    initial={{ rotate: 0, pathLength: 0 }}
                    animate={{ 
                      rotate: 360,
                      pathLength: 1
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                      pathLength: { duration: 2, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Middle ring */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="url(#primaryGradient)"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                    initial={{ rotate: 0, pathLength: 0 }}
                    animate={{ 
                      rotate: -360,
                      pathLength: 1
                    }}
                    transition={{ 
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                      pathLength: { duration: 2.5, delay: 0.3, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Inner core */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="url(#accentGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Central pulse */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="4"
                    fill="#0066ff"
                    filter="url(#glow)"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating nodes */}
                  {[...Array(6)].map((_, i) => {
                    const angle = (i * 60) * (Math.PI / 180);
                    const radius = 140;
                    const x = 200 + Math.cos(angle) * radius;
                    const y = 200 + Math.sin(angle) * radius;
                    
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3"
                        fill="#0066ff"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1,
                          opacity: [0, 1, 0.5, 1]
                        }}
                        transition={{ 
                          scale: { duration: 0.5, delay: 1 + i * 0.1 },
                          opacity: { 
                            duration: 3,
                            delay: 1.5 + i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    );
                  })}
                  
                  {/* Connection lines */}
                  {[...Array(3)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={200 + Math.cos(i * 120 * Math.PI / 180) * 140}
                      y2={200 + Math.sin(i * 120 * Math.PI / 180) * 140}
                      stroke="url(#primaryGradient)"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ 
                        duration: 1.5,
                        delay: 1.2 + i * 0.2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Floating elements around the main visual */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-50 rounded-full border border-blue-200"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-14 lg:pt-16 border-t border-gray-100 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: '99%', label: t('hero.efficiency'), suffix: '' },
            { value: '24', label: t('hero.support'), suffix: '/7' },
            { value: '500', label: t('hero.solutions'), suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group px-2 sm:px-4"
            >
              <motion.div 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1 sm:mb-2 gradient-text-blue"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
              >
                {stat.value}<span className="text-blue-500">{stat.suffix}</span>
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider font-semibold leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced background elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-blue-100/20 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translate(30%, -50%)' }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-tr from-blue-50/20 to-transparent rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ transform: 'translate(-30%, 50%)' }}
      />
    </section>
  );
};

export default Hero;
