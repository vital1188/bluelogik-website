import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/services/ServiceDetail';

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
      <Router>
        <ScrollToTop />
        <div className="min-h-screen text-gray-900 relative">
          {/* Subtle Background Animation */}
          <Background3D />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
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
      </Router>
    </LanguageProvider>
  );
}

export default App;
