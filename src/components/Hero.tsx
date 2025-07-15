import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Cpu, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  // Neural network background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      connections: number[];
    }> = [];

    const particleCount = 80;
    const connectionDistance = 150;
    const mouseRadius = 100;
    let mouseX = 0;
    let mouseY = 0;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        connections: []
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${0.6 - (distance / 1000)})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.15 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative py-20 lg:py-0 overflow-hidden" ref={containerRef}>
      {/* Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ opacity: 0.3 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 -z-5" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            {/* Floating AI Icons */}
            <motion.div className="flex gap-4 mb-6" variants={letterVariants}>
              <motion.div animate={floatingAnimation} className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Brain className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.div 
                animate={{...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 }}} 
                className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
              >
                <Cpu className="w-6 h-6 text-purple-600" />
              </motion.div>
              <motion.div 
                animate={{...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 }}} 
                className="p-3 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl"
              >
                <Network className="w-6 h-6 text-cyan-600" />
              </motion.div>
            </motion.div>

            <motion.h1 
              className="mb-4 md:mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl font-light"
              variants={letterVariants}
            >
              <span className="block">
                {t('hero.title').split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block mr-3 ${word.includes('AI') ? 'gradient-text-blue font-normal' : ''}`}
                    variants={letterVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg mb-8 md:mb-12 max-w-xl text-gray-600"
              variants={letterVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons with enhanced animations */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={letterVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn-minimal-blue w-full sm:w-auto text-center group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {t('hero.cta')}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn-minimal w-full sm:w-auto text-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('hero.learnMore')}</span>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 mt-8"
              variants={letterVariants}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">500+</span> businesses transformed
              </p>
            </motion.div>
          </motion.div>

          {/* Advanced Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-12 lg:mt-0 order-first lg:order-last"
          >
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              {/* 3D Rotating Cube with AI visualization */}
              <div className="relative w-full h-[400px] flex items-center justify-center">
                {/* Central AI Brain */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Rotating rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="absolute w-64 h-64 rounded-full border border-blue-200"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-56 h-56 rounded-full border border-purple-200"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-48 h-48 rounded-full border border-cyan-200"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Central holographic display */}
                <motion.div
                  className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl"
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-400/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                  
                  {/* Orbiting particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI / 3) * 60, 0],
                        y: [0, Math.sin(i * Math.PI / 3) * 60, 0],
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Data streams */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: 'center',
                      transform: `rotate(${i * 45}deg) translateY(-100px)`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scaleY: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats with live counters */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-16 md:pt-24 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '99%', label: t('hero.efficiency'), icon: <Cpu className="w-4 h-4" /> },
            { value: '24/7', label: t('hero.support'), icon: <Network className="w-4 h-4" /> },
            { value: '500+', label: t('hero.solutions'), icon: <Brain className="w-4 h-4" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-2 mb-2"
                whileHover={{ y: -5 }}
              >
                <span className="text-blue-500 group-hover:text-purple-500 transition-colors">
                  {stat.icon}
                </span>
                <div className="text-2xl md:text-3xl font-thin gradient-text-blue group-hover:gradient-text-purple transition-all">
                  {stat.value}
                </div>
              </motion.div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
