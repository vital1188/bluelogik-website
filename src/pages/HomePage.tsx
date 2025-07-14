import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyAI from '../components/WhyAI';
import Contact from '../components/Contact';
import { useScrollToSection } from '../hooks/useScrollToSection';

const HomePage: React.FC = () => {
  // This will handle scrolling to sections when URL has hash
  useScrollToSection();

  return (
    <>
      <Hero />
      <Services />
      <WhyAI />
      <Contact />
    </>
  );
};

export default HomePage;
