import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyAI from '../components/WhyAI';
import Contact from '../components/Contact';
import { useScrollToSection } from '../hooks/useScrollToSection';

const HomePage: React.FC = () => {
  // This will handle scrolling to sections when URL has hash
  useScrollToSection();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BlueLogik - AI Business Solutions",
    "description": "Transform your business with BlueLogik's comprehensive AI solutions. Expert AI business optimization, sales growth, marketing automation, data analysis, and web development services.",
    "url": "https://bluelogik.com/",
    "mainEntity": {
      "@type": "Organization",
      "name": "BlueLogik AI Solutions",
      "url": "https://bluelogik.com",
      "logo": "https://bluelogik.com/favicon.svg",
      "description": "Leading AI solutions provider specializing in business optimization, sales growth, marketing automation, and web development.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chisinau",
        "addressCountry": "Moldova"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+373-784-70-679",
        "contactType": "customer service",
        "email": "hello@bluelogik.com"
      },
      "offers": [
        {
          "@type": "Service",
          "name": "AI Business Optimization",
          "description": "Reduce operational costs by up to 40% with intelligent workflow automation"
        },
        {
          "@type": "Service", 
          "name": "AI Sales Growth",
          "description": "Increase sales by up to 35% with predictive analytics and customer insights"
        },
        {
          "@type": "Service",
          "name": "AI Marketing Strategies", 
          "description": "Improve marketing ROI by up to 45% with automated campaigns and targeting"
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="BlueLogik - AI Business Solutions | Transform Your Business with Artificial Intelligence"
        description="Transform your business with BlueLogik's AI solutions. Expert AI business optimization, sales growth, marketing automation, data analysis, and web development services in Moldova. Increase revenue by 35% with our proven AI strategies."
        keywords="AI business solutions, artificial intelligence Moldova, AI optimization, AI marketing, AI sales growth, AI data analysis, AI web development, business automation, AI integration, machine learning services, AI consulting Chisinau, digital transformation Moldova, AI strategy, business intelligence, predictive analytics"
        url="https://bluelogik.com/"
        structuredData={structuredData}
      />
      <Hero />
      <Services />
      <WhyAI />
      <Contact />
    </>
  );
};

export default HomePage;
