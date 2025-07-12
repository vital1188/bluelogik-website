import React, { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyAI from './components/WhyAI';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Simple scroll progress bar
    const updateScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen text-gray-900 relative">
        {/* Subtle Background Animation */}
        <Background3D />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <Services />
          <WhyAI />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-100 z-50">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300"
            style={{ width: '0%' }}
            id="scroll-progress"
          />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
