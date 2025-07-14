import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyAI from '../components/WhyAI';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
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
