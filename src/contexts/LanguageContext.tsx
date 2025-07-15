import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'ro' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Base translations (English)
const baseTranslations = {
  // Navigation
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.whyAI': 'Why AI',
  'nav.contact': 'Contact',
  
  // Hero Section
  'hero.title': 'Transform Your Business with AI Solutions',
  'hero.subtitle': 'Leverage the power of artificial intelligence to optimize operations, enhance decision-making, and drive innovation.',
  'hero.cta': 'Get Started',
  'hero.learnMore': 'Learn More',
  'hero.efficiency': 'Efficiency',
  'hero.support': 'Support',
  'hero.solutions': 'Solutions',
  
  // Services Section
  'services.title': 'Our AI Services',
  'services.subtitle': 'Comprehensive AI solutions designed to transform your business operations and drive growth',
  'services.viewAll': 'View All Services',
  'services.learnMore': 'Learn more',
  
  'services.optimization.title': 'AI Business Task Optimization',
  'services.optimization.desc': 'Streamline operations and automate repetitive tasks with our AI-powered workflow optimization solutions. Increase efficiency and reduce operational costs.',
  
  'services.sales.title': 'AI-Enhanced Sales Growth',
  'services.sales.desc': 'Leverage predictive analytics and customer insights to identify opportunities, optimize pricing strategies, and increase conversion rates.',
  
  'services.marketing.title': 'AI-Powered Marketing Strategies',
  'services.marketing.desc': 'Create data-driven marketing campaigns with personalized content and automated optimization to maximize ROI and customer engagement.',
  
  'services.social.title': 'AI Social Media Optimization',
  'services.social.desc': 'Enhance your social media presence with AI-powered content creation, scheduling, and performance analytics to reach and engage your target audience.',
  
  'services.analysis.title': 'Advanced AI Data Analysis',
  'services.analysis.desc': 'Transform raw data into actionable insights with our advanced analytics solutions. Identify patterns, trends, and opportunities hidden in your data.',
  
  'services.integration.title': 'AI Integration Services',
  'services.integration.desc': 'Seamlessly integrate AI capabilities into your existing systems and workflows with our custom implementation and integration services.',
  
  'services.webdev.title': 'Web Development with AI',
  'services.webdev.desc': 'Create cutting-edge websites with AI-assisted development tools that optimize code, design, and user experience for maximum performance and engagement.',
  
  'services.webopt.title': 'Website Optimization with AI',
  'services.webopt.desc': 'Enhance your existing website\'s performance, SEO, and conversion rates using AI-powered analysis and optimization techniques.',
  
  'services.website.title': 'Website Development',
  'services.website.desc': 'Professional website development with modern technologies, responsive design, and optimal performance.',
  
  'services.shopify.title': 'Shopify E-commerce Development',
  'services.shopify.desc': 'Build powerful online stores with Shopify, including custom themes, apps, and integrations.',
  
  'services.woocommerce.title': 'WooCommerce Development',
  'services.woocommerce.desc': 'Create flexible WordPress-based e-commerce solutions with WooCommerce customization.',
  
  'services.bigcommerce.title': 'BigCommerce Development',
  'services.bigcommerce.desc': 'Enterprise-level e-commerce solutions with BigCommerce for scalable online businesses.',
  
  // Service Details - Business Optimization
  'services.optimization.feature1': 'Intelligent workflow automation',
  'services.optimization.feature2': 'Task prioritization algorithms',
  'services.optimization.feature3': 'Resource allocation optimization',
  'services.optimization.feature4': 'Real-time performance monitoring',
  'services.optimization.feature5': 'Predictive maintenance scheduling',
  'services.optimization.benefit1': 'Reduce operational costs by up to 40%',
  'services.optimization.benefit2': 'Increase productivity by 60%',
  'services.optimization.benefit3': 'Minimize human error',
  'services.optimization.benefit4': 'Free up staff for strategic tasks',
  'services.optimization.benefit5': '24/7 automated operations',
  'services.optimization.process1': 'Initial business process assessment',
  'services.optimization.process2': 'AI model customization',
  'services.optimization.process3': 'Integration with existing systems',
  'services.optimization.process4': 'Staff training and onboarding',
  'services.optimization.process5': 'Continuous optimization',
  'services.optimization.cta': 'Start Optimizing Today',
  
  // Service Details - Sales Growth
  'services.sales.feature1': 'Predictive sales forecasting',
  'services.sales.feature2': 'Customer behavior analysis',
  'services.sales.feature3': 'Dynamic pricing optimization',
  'services.sales.feature4': 'Lead scoring and prioritization',
  'services.sales.feature5': 'Personalized recommendations',
  'services.sales.benefit1': 'Increase sales by up to 35%',
  'services.sales.benefit2': 'Improve conversion rates by 50%',
  'services.sales.benefit3': 'Reduce customer acquisition costs',
  'services.sales.benefit4': 'Enhanced customer lifetime value',
  'services.sales.benefit5': 'Data-driven decision making',
  'services.sales.process1': 'Sales data analysis',
  'services.sales.process2': 'AI model training',
  'services.sales.process3': 'CRM integration',
  'services.sales.process4': 'Sales team training',
  'services.sales.process5': 'Performance tracking',
  'services.sales.cta': 'Boost Your Sales',
  
  // Service Details - Marketing
  'services.marketing.feature1': 'Automated content generation',
  'services.marketing.feature2': 'Audience segmentation',
  'services.marketing.feature3': 'Campaign performance optimization',
  'services.marketing.feature4': 'Multi-channel automation',
  'services.marketing.feature5': 'A/B testing at scale',
  'services.marketing.benefit1': 'Increase ROI by up to 45%',
  'services.marketing.benefit2': 'Reduce marketing costs by 30%',
  'services.marketing.benefit3': 'Improve engagement rates',
  'services.marketing.benefit4': 'Personalized customer experiences',
  'services.marketing.benefit5': 'Real-time campaign optimization',
  'services.marketing.process1': 'Marketing audit and analysis',
  'services.marketing.process2': 'AI strategy development',
  'services.marketing.process3': 'Platform integration',
  'services.marketing.process4': 'Campaign launch',
  'services.marketing.process5': 'Continuous optimization',
  'services.marketing.cta': 'Transform Your Marketing',
  
  // Service Details - Social Media
  'services.social.feature1': 'Automated content scheduling',
  'services.social.feature2': 'Sentiment analysis',
  'services.social.feature3': 'Trend identification',
  'services.social.feature4': 'Engagement optimization',
  'services.social.feature5': 'Influencer identification',
  'services.social.benefit1': 'Increase engagement by 70%',
  'services.social.benefit2': 'Save 20+ hours per week',
  'services.social.benefit3': 'Consistent brand presence',
  'services.social.benefit4': 'Data-driven content strategy',
  'services.social.benefit5': 'Improved customer relationships',
  'services.social.process1': 'Social media audit',
  'services.social.process2': 'AI tool setup',
  'services.social.process3': 'Content strategy development',
  'services.social.process4': 'Automation implementation',
  'services.social.process5': 'Performance monitoring',
  'services.social.cta': 'Optimize Social Media',
  
  // Service Details - Data Analysis
  'services.analysis.feature1': 'Predictive analytics',
  'services.analysis.feature2': 'Pattern recognition',
  'services.analysis.feature3': 'Anomaly detection',
  'services.analysis.feature4': 'Real-time dashboards',
  'services.analysis.feature5': 'Custom reporting',
  'services.analysis.benefit1': 'Make data-driven decisions',
  'services.analysis.benefit2': 'Identify hidden opportunities',
  'services.analysis.benefit3': 'Reduce risks',
  'services.analysis.benefit4': 'Improve forecasting accuracy',
  'services.analysis.benefit5': 'Competitive advantage',
  'services.analysis.process1': 'Data assessment',
  'services.analysis.process2': 'Analytics setup',
  'services.analysis.process3': 'Model development',
  'services.analysis.process4': 'Dashboard creation',
  'services.analysis.process5': 'Insights delivery',
  'services.analysis.cta': 'Unlock Your Data',
  
  // Service Details - Integration
  'services.integration.feature1': 'API integration',
  'services.integration.feature2': 'Custom AI solutions',
  'services.integration.feature3': 'Legacy system compatibility',
  'services.integration.feature4': 'Cloud deployment',
  'services.integration.feature5': 'Security compliance',
  'services.integration.benefit1': 'Minimal disruption',
  'services.integration.benefit2': 'Faster implementation',
  'services.integration.benefit3': 'Scalable solutions',
  'services.integration.benefit4': 'Cost-effective integration',
  'services.integration.benefit5': 'Future-proof technology',
  'services.integration.process1': 'System assessment',
  'services.integration.process2': 'Integration planning',
  'services.integration.process3': 'Development and testing',
  'services.integration.process4': 'Deployment',
  'services.integration.process5': 'Support and maintenance',
  'services.integration.cta': 'Start Integration',
  
  // Service Details - Web Development
  'services.webdev.feature1': 'Smart user interfaces',
  'services.webdev.feature2': 'Personalization engines',
  'services.webdev.feature3': 'Chatbot integration',
  'services.webdev.feature4': 'Performance optimization',
  'services.webdev.feature5': 'Accessibility features',
  'services.webdev.benefit1': 'Enhanced user experience',
  'services.webdev.benefit2': 'Higher conversion rates',
  'services.webdev.benefit3': 'Reduced bounce rates',
  'services.webdev.benefit4': 'Improved SEO',
  'services.webdev.benefit5': 'Competitive edge',
  'services.webdev.process1': 'Requirements analysis',
  'services.webdev.process2': 'Design and prototyping',
  'services.webdev.process3': 'Development',
  'services.webdev.process4': 'Testing and optimization',
  'services.webdev.process5': 'Launch and support',
  'services.webdev.cta': 'Build Smart Websites',
  
  // Service Details - Web Optimization
  'services.webopt.feature1': 'SEO optimization',
  'services.webopt.feature2': 'Speed optimization',
  'services.webopt.feature3': 'Conversion optimization',
  'services.webopt.feature4': 'User behavior analysis',
  'services.webopt.feature5': 'Content optimization',
  'services.webopt.benefit1': 'Improve search rankings',
  'services.webopt.benefit2': 'Faster load times',
  'services.webopt.benefit3': 'Higher conversion rates',
  'services.webopt.benefit4': 'Better user experience',
  'services.webopt.benefit5': 'Increased revenue',
  'services.webopt.process1': 'Website audit',
  'services.webopt.process2': 'Optimization strategy',
  'services.webopt.process3': 'Implementation',
  'services.webopt.process4': 'Testing and refinement',
  'services.webopt.process5': 'Ongoing monitoring',
  'services.webopt.cta': 'Optimize Your Site',
  
  // Service Details - Website Development
  'services.website.feature1': 'Custom website design',
  'services.website.feature2': 'Responsive development',
  'services.website.feature3': 'Modern frameworks (React, Vue, Angular)',
  'services.website.feature4': 'CMS integration',
  'services.website.feature5': 'Performance optimization',
  'services.website.benefit1': 'Professional online presence',
  'services.website.benefit2': 'Mobile-friendly design',
  'services.website.benefit3': 'Fast loading times',
  'services.website.benefit4': 'SEO-ready structure',
  'services.website.benefit5': 'Scalable architecture',
  'services.website.process1': 'Requirements gathering',
  'services.website.process2': 'Design mockups',
  'services.website.process3': 'Development phase',
  'services.website.process4': 'Testing and QA',
  'services.website.process5': 'Launch and support',
  'services.website.cta': 'Start Your Project',
  
  // Service Details - Shopify
  'services.shopify.feature1': 'Custom Shopify themes',
  'services.shopify.feature2': 'App development',
  'services.shopify.feature3': 'Payment gateway integration',
  'services.shopify.feature4': 'Inventory management',
  'services.shopify.feature5': 'Multi-channel selling',
  'services.shopify.benefit1': 'Quick time to market',
  'services.shopify.benefit2': 'Secure payment processing',
  'services.shopify.benefit3': 'Mobile-optimized stores',
  'services.shopify.benefit4': 'Built-in SEO features',
  'services.shopify.benefit5': 'Scalable platform',
  'services.shopify.process1': 'Store planning',
  'services.shopify.process2': 'Theme customization',
  'services.shopify.process3': 'App integration',
  'services.shopify.process4': 'Product setup',
  'services.shopify.process5': 'Launch and training',
  'services.shopify.cta': 'Build Your Store',
  
  // Service Details - WooCommerce
  'services.woocommerce.feature1': 'Custom WooCommerce themes',
  'services.woocommerce.feature2': 'Plugin development',
  'services.woocommerce.feature3': 'Payment integration',
  'services.woocommerce.feature4': 'Product management',
  'services.woocommerce.feature5': 'WordPress integration',
  'services.woocommerce.benefit1': 'Full customization control',
  'services.woocommerce.benefit2': 'Cost-effective solution',
  'services.woocommerce.benefit3': 'SEO-friendly platform',
  'services.woocommerce.benefit4': 'Large plugin ecosystem',
  'services.woocommerce.benefit5': 'Content marketing ready',
  'services.woocommerce.process1': 'WordPress setup',
  'services.woocommerce.process2': 'WooCommerce configuration',
  'services.woocommerce.process3': 'Theme development',
  'services.woocommerce.process4': 'Plugin integration',
  'services.woocommerce.process5': 'Testing and launch',
  'services.woocommerce.cta': 'Start Selling Online',
  
  // Service Details - BigCommerce
  'services.bigcommerce.feature1': 'Enterprise features',
  'services.bigcommerce.feature2': 'API-first architecture',
  'services.bigcommerce.feature3': 'Multi-storefront capability',
  'services.bigcommerce.feature4': 'B2B functionality',
  'services.bigcommerce.feature5': 'Advanced analytics',
  'services.bigcommerce.benefit1': 'Enterprise scalability',
  'services.bigcommerce.benefit2': 'No transaction fees',
  'services.bigcommerce.benefit3': 'Built-in B2B features',
  'services.bigcommerce.benefit4': 'Headless commerce ready',
  'services.bigcommerce.benefit5': 'Global selling capabilities',
  'services.bigcommerce.process1': 'Platform assessment',
  'services.bigcommerce.process2': 'Architecture planning',
  'services.bigcommerce.process3': 'Custom development',
  'services.bigcommerce.process4': 'Integration setup',
  'services.bigcommerce.process5': 'Enterprise deployment',
  'services.bigcommerce.cta': 'Scale Your Business',
  
  // All Services Page
  'allServices.title': 'All Our Services',
  'allServices.subtitle': 'Comprehensive solutions to transform your business with AI and modern web technologies',
  'allServices.cta': 'Get Started with Our Services',
  
  // Service Detail Pages
  'serviceDetail.backToServices': 'Back to Services',
  'serviceDetail.keyFeatures': 'Key Features',
  'serviceDetail.benefits': 'Benefits',
  'serviceDetail.process': 'Our Process',
  'serviceDetail.ready': 'Ready to Get Started?',
  'serviceDetail.discuss': 'Let\'s discuss how our',
  'serviceDetail.transform': 'can transform your business.',
  
  // Why AI Section
  'whyai.title': 'Why Your Business Needs AI',
  'whyai.subtitle': 'The business landscape is changing rapidly. Companies that embrace AI now will thrive – those that don\'t risk falling behind.',
  
  'whyai.advantage.title': 'Competitive Advantage',
  'whyai.advantage.desc': 'Companies that implement AI solutions gain a significant edge over competitors, with 63% of businesses reporting increased revenue after AI adoption.',
  
  'whyai.efficiency.title': 'Operational Efficiency',
  'whyai.efficiency.desc': 'AI automates repetitive tasks, reducing operational costs by up to 40% and allowing your team to focus on high-value strategic activities.',
  
  'whyai.decision.title': 'Enhanced Decision Making',
  'whyai.decision.desc': 'Data-driven insights from AI enable better business decisions, with 87% of executives reporting more confident strategic planning.',
  
  'whyai.experience.title': 'Customer Experience',
  'whyai.experience.desc': 'AI-powered personalization increases customer satisfaction by 35% and boosts retention rates through tailored experiences and 24/7 support.',
  
  // Why AI Features
  'whyai.features.title': 'AI-Powered Features',
  'whyai.features.realtime': 'Real-time data processing',
  'whyai.features.predictive': 'Predictive analytics',
  'whyai.features.automated': 'Automated workflows',
  'whyai.features.smart': 'Smart recommendations',
  'whyai.features.continuous': 'Continuous learning',
  'whyai.features.scalable': 'Scalable solutions',
  'whyai.cta': 'Start Your AI Journey',
  
  // Contact Section
  'contact.title': 'Get in Touch',
  'contact.subtitle': 'Ready to transform your business with AI? Contact us today to discuss your needs.',
  'contact.form.title': 'Send us a message',
  'contact.form.name': 'Your Name',
  'contact.form.email': 'Email Address',
  'contact.form.company': 'Company',
  'contact.form.message': 'Message',
  'contact.form.send': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Message sent successfully!',
  'contact.form.successDesc': 'We\'ll get back to you within 24 hours.',
  'contact.form.error': 'Failed to send message. Please try again.',
  'contact.form.messagePlaceholder': 'Tell us about your project...',
  'contact.info.title': 'Contact Information',
  'contact.info.address': 'Chisinau, Moldova',
  'contact.info.available': 'Available 24/7 for your business needs',
  'contact.info.email': 'Email',
  'contact.info.phone': 'Phone',
  'contact.info.location': 'Address',
  'contact.hours.title': 'Business Hours',
  'contact.hours.weekdays': 'Monday - Friday',
  'contact.hours.saturday': 'Saturday',
  'contact.hours.sunday': 'Sunday',
  'contact.hours.closed': 'Closed',
  'contact.quick.title': 'Need a quick response?',
  'contact.quick.desc': 'For urgent inquiries, please call us directly or use our live chat support.',
  'contact.quick.cta': 'Start Live Chat',
  
  // Footer
  'footer.rights': 'All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
};

const translations: Record<Language, Record<string, string>> = {
  en: baseTranslations,
  ro: {
    ...baseTranslations,
    // Navigation
    'nav.home': 'Acasă',
    'nav.services': 'Servicii',
    'nav.whyAI': 'De ce AI',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transformă-ți Afacerea cu Soluții AI',
    'hero.subtitle': 'Valorifică puterea inteligenței artificiale pentru a optimiza operațiunile, îmbunătăți procesul decizional și stimula inovația.',
    'hero.cta': 'Începe Acum',
    'hero.learnMore': 'Află Mai Multe',
    'hero.efficiency': 'Eficiență',
    'hero.support': 'Suport',
    'hero.solutions': 'Soluții',
    
    // Services Section
    'services.title': 'Serviciile Noastre AI',
    'services.subtitle': 'Soluții AI complete concepute pentru a transforma operațiunile afacerii tale și a stimula creșterea',
    'services.viewAll': 'Vezi Toate Serviciile',
    'services.learnMore': 'Află mai multe',
    
    'services.optimization.title': 'Optimizare Sarcini de Afaceri cu AI',
    'services.optimization.desc': 'Eficientizează operațiunile și automatizează sarcinile repetitive cu soluțiile noastre de optimizare a fluxului de lucru bazate pe AI.',
    
    'services.sales.title': 'Creștere Vânzări Îmbunătățită cu AI',
    'services.sales.desc': 'Valorifică analizele predictive și informațiile despre clienți pentru a identifica oportunități și crește ratele de conversie.',
    
    'services.marketing.title': 'Strategii de Marketing cu AI',
    'services.marketing.desc': 'Creează campanii de marketing bazate pe date cu conținut personalizat și optimizare automată.',
    
    'services.social.title': 'Optimizare Social Media cu AI',
    'services.social.desc': 'Îmbunătățește-ți prezența pe rețelele sociale cu crearea de conținut și analize de performanță bazate pe AI.',
    
    'services.analysis.title': 'Analiză Avansată de Date cu AI',
    'services.analysis.desc': 'Transformă datele brute în informații acționabile cu soluțiile noastre avansate de analiză.',
    
    'services.integration.title': 'Servicii de Integrare AI',
    'services.integration.desc': 'Integrează fără probleme capacitățile AI în sistemele și fluxurile de lucru existente.',
    
    'services.webdev.title': 'Dezvoltare Web cu AI',
    'services.webdev.desc': 'Creează site-uri web de ultimă generație cu instrumente de dezvoltare asistate de AI.',
    
    'services.webopt.title': 'Optimizare Website cu AI',
    'services.webopt.desc': 'Îmbunătățește performanța, SEO și ratele de conversie ale site-ului tău existent.',
    
    'services.website.title': 'Dezvoltare Website',
    'services.website.desc': 'Dezvoltare profesională de website-uri cu tehnologii moderne, design responsive și performanță optimă.',
    
    'services.shopify.title': 'Dezvoltare E-commerce Shopify',
    'services.shopify.desc': 'Construiește magazine online puternice cu Shopify, inclusiv teme personalizate, aplicații și integrări.',
    
    'services.woocommerce.title': 'Dezvoltare WooCommerce',
    'services.woocommerce.desc': 'Creează soluții e-commerce flexibile bazate pe WordPress cu personalizare WooCommerce.',
    
    'services.bigcommerce.title': 'Dezvoltare BigCommerce',
    'services.bigcommerce.desc': 'Soluții e-commerce la nivel enterprise cu BigCommerce pentru afaceri online scalabile.',
    
    // All Services Page
    'allServices.title': 'Toate Serviciile Noastre',
    'allServices.subtitle': 'Soluții complete pentru a transforma afacerea ta cu AI și tehnologii web moderne',
    'allServices.cta': 'Începe cu Serviciile Noastre',
    
    // Service Detail Pages
    'serviceDetail.backToServices': 'Înapoi la Servicii',
    'serviceDetail.keyFeatures': 'Caracteristici Cheie',
    'serviceDetail.benefits': 'Beneficii',
    'serviceDetail.process': 'Procesul Nostru',
    'serviceDetail.ready': 'Ești Gata să Începi?',
    'serviceDetail.discuss': 'Hai să discutăm cum',
    'serviceDetail.transform': 'poate transforma afacerea ta.',
    
    // Why AI Section
    'whyai.title': 'De Ce Afacerea Ta Are Nevoie de AI',
    'whyai.subtitle': 'Peisajul afacerilor se schimbă rapid. Companiile care adoptă AI acum vor prospera.',
    
    'whyai.advantage.title': 'Avantaj Competitiv',
    'whyai.advantage.desc': 'Companiile care implementează soluții AI obțin un avantaj semnificativ față de concurenți, cu 63% dintre afaceri raportând venituri crescute după adoptarea AI.',
    
    'whyai.efficiency.title': 'Eficiență Operațională',
    'whyai.efficiency.desc': 'AI automatizează sarcinile repetitive, reducând costurile operaționale cu până la 40% și permițând echipei tale să se concentreze pe activități strategice.',
    
    'whyai.decision.title': 'Luare de Decizii Îmbunătățită',
    'whyai.decision.desc': 'Informațiile bazate pe date din AI permit decizii de afaceri mai bune, cu 87% dintre executivi raportând o planificare strategică mai încrezătoare.',
    
    'whyai.experience.title': 'Experiența Clientului',
    'whyai.experience.desc': 'Personalizarea bazată pe AI crește satisfacția clienților cu 35% și îmbunătățește ratele de retenție prin experiențe personalizate și suport 24/7.',
    
    // Why AI Features
    'whyai.features.title': 'Caracteristici Bazate pe AI',
    'whyai.features.realtime': 'Procesare date în timp real',
    'whyai.features.predictive': 'Analize predictive',
    'whyai.features.automated': 'Fluxuri de lucru automatizate',
    'whyai.features.smart': 'Recomandări inteligente',
    'whyai.features.continuous': 'Învățare continuă',
    'whyai.features.scalable': 'Soluții scalabile',
    'whyai.cta': 'Începe Călătoria ta cu AI',
    
    // Contact Section
    'contact.title': 'Contactează-ne',
    'contact.subtitle': 'Ești gata să-ți transformi afacerea cu AI? Contactează-ne astăzi pentru a discuta nevoile tale.',
    'contact.form.title': 'Trimite-ne un mesaj',
    'contact.form.name': 'Numele Tău',
    'contact.form.email': 'Adresa de Email',
    'contact.form.company': 'Companie',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Trimite Mesaj',
    'contact.form.sending': 'Se trimite...',
    'contact.form.success': 'Mesaj trimis cu succes!',
    'contact.form.successDesc': 'Te vom contacta în 24 de ore.',
    'contact.form.error': 'Eroare la trimiterea mesajului. Te rugăm să încerci din nou.',
    'contact.form.messagePlaceholder': 'Spune-ne despre proiectul tău...',
    'contact.info.title': 'Informații de Contact',
    'contact.info.address': 'Chișinău, Moldova',
    'contact.info.available': 'Disponibili 24/7 pentru nevoile afacerii tale',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefon',
    'contact.info.location': 'Adresă',
    'contact.hours.title': 'Program de Lucru',
    'contact.hours.weekdays': 'Luni - Vineri',
    'contact.hours.saturday': 'Sâmbătă',
    'contact.hours.sunday': 'Duminică',
    'contact.hours.closed': 'Închis',
    'contact.quick.title': 'Ai nevoie de un răspuns rapid?',
    'contact.quick.desc': 'Pentru solicitări urgente, te rugăm să ne suni direct sau să folosești chat-ul live.',
    'contact.quick.cta': 'Începe Chat Live',
    
    // Footer
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
  },
  es: {
    ...baseTranslations,
    // Service Details - Business Optimization
    'services.optimization.feature1': 'Automatización inteligente de flujos de trabajo',
    'services.optimization.feature2': 'Algoritmos de priorización de tareas',
    'services.optimization.feature3': 'Optimización de asignación de recursos',
    'services.optimization.feature4': 'Monitoreo de rendimiento en tiempo real',
    'services.optimization.feature5': 'Programación de mantenimiento predictivo',
    'services.optimization.benefit1': 'Reduce los costos operativos hasta un 40%',
    'services.optimization.benefit2': 'Aumenta la productividad en un 60%',
    'services.optimization.benefit3': 'Minimiza el error humano',
    'services.optimization.benefit4': 'Libera al personal para tareas estratégicas',
    'services.optimization.benefit5': 'Operaciones automatizadas 24/7',
    'services.optimization.process1': 'Evaluación inicial de procesos empresariales',
    'services.optimization.process2': 'Personalización del modelo de IA',
    'services.optimization.process3': 'Integración con sistemas existentes',
    'services.optimization.process4': 'Capacitación del personal',
    'services.optimization.process5': 'Optimización continua',
    'services.optimization.cta': 'Comienza a Optimizar Hoy',
    
    // Service Details - Sales Growth
    'services.sales.feature1': 'Pronóstico predictivo de ventas',
    'services.sales.feature2': 'Análisis del comportamiento del cliente',
    'services.sales.feature3': 'Optimización dinámica de precios',
    'services.sales.feature4': 'Puntuación y priorización de leads',
    'services.sales.feature5': 'Recomendaciones personalizadas',
    'services.sales.benefit1': 'Aumenta las ventas hasta un 35%',
    'services.sales.benefit2': 'Mejora las tasas de conversión en un 50%',
    'services.sales.benefit3': 'Reduce los costos de adquisición de clientes',
    'services.sales.benefit4': 'Mejora el valor de vida del cliente',
    'services.sales.benefit5': 'Toma de decisiones basada en datos',
    'services.sales.process1': 'Análisis de datos de ventas',
    'services.sales.process2': 'Entrenamiento del modelo de IA',
    'services.sales.process3': 'Integración con CRM',
    'services.sales.process4': 'Capacitación del equipo de ventas',
    'services.sales.process5': 'Seguimiento del rendimiento',
    'services.sales.cta': 'Impulsa tus Ventas',
    
    // Service Details - Marketing
    'services.marketing.feature1': 'Generación automatizada de contenido',
    'services.marketing.feature2': 'Segmentación de audiencia',
    'services.marketing.feature3': 'Optimización del rendimiento de campañas',
    'services.marketing.feature4': 'Automatización multicanal',
    'services.marketing.feature5': 'Pruebas A/B a escala',
    'services.marketing.benefit1': 'Aumenta el ROI hasta un 45%',
    'services.marketing.benefit2': 'Reduce los costos de marketing en un 30%',
    'services.marketing.benefit3': 'Mejora las tasas de participación',
    'services.marketing.benefit4': 'Experiencias personalizadas para clientes',
    'services.marketing.benefit5': 'Optimización de campañas en tiempo real',
    'services.marketing.process1': 'Auditoría y análisis de marketing',
    'services.marketing.process2': 'Desarrollo de estrategia de IA',
    'services.marketing.process3': 'Integración de plataformas',
    'services.marketing.process4': 'Lanzamiento de campaña',
    'services.marketing.process5': 'Optimización continua',
    'services.marketing.cta': 'Transforma tu Marketing',
    
    // Service Details - Social Media
    'services.social.feature1': 'Programación automatizada de contenido',
    'services.social.feature2': 'Análisis de sentimiento',
    'services.social.feature3': 'Identificación de tendencias',
    'services.social.feature4': 'Optimización de participación',
    'services.social.feature5': 'Identificación de influencers',
    'services.social.benefit1': 'Aumenta la participación en un 70%',
    'services.social.benefit2': 'Ahorra más de 20 horas por semana',
    'services.social.benefit3': 'Presencia de marca consistente',
    'services.social.benefit4': 'Estrategia de contenido basada en datos',
    'services.social.benefit5': 'Mejores relaciones con clientes',
    'services.social.process1': 'Auditoría de redes sociales',
    'services.social.process2': 'Configuración de herramientas de IA',
    'services.social.process3': 'Desarrollo de estrategia de contenido',
    'services.social.process4': 'Implementación de automatización',
    'services.social.process5': 'Monitoreo del rendimiento',
    'services.social.cta': 'Optimiza Redes Sociales',
    
    // Service Details - Data Analysis
    'services.analysis.feature1': 'Análisis predictivo',
    'services.analysis.feature2': 'Reconocimiento de patrones',
    'services.analysis.feature3': 'Detección de anomalías',
    'services.analysis.feature4': 'Paneles en tiempo real',
    'services.analysis.feature5': 'Informes personalizados',
    'services.analysis.benefit1': 'Toma decisiones basadas en datos',
    'services.analysis.benefit2': 'Identifica oportunidades ocultas',
    'services.analysis.benefit3': 'Reduce riesgos',
    'services.analysis.benefit4': 'Mejora la precisión de pronósticos',
    'services.analysis.benefit5': 'Ventaja competitiva',
    'services.analysis.process1': 'Evaluación de datos',
    'services.analysis.process2': 'Configuración de análisis',
    'services.analysis.process3': 'Desarrollo de modelos',
    'services.analysis.process4': 'Creación de paneles',
    'services.analysis.process5': 'Entrega de insights',
    'services.analysis.cta': 'Desbloquea tus Datos',
    
    // Service Details - Integration
    'services.integration.feature1': 'Integración de API',
    'services.integration.feature2': 'Soluciones de IA personalizadas',
    'services.integration.feature3': 'Compatibilidad con sistemas heredados',
    'services.integration.feature4': 'Implementación en la nube',
    'services.integration.feature5': 'Cumplimiento de seguridad',
    'services.integration.benefit1': 'Mínima interrupción',
    'services.integration.benefit2': 'Implementación más rápida',
    'services.integration.benefit3': 'Soluciones escalables',
    'services.integration.benefit4': 'Integración rentable',
    'services.integration.benefit5': 'Tecnología a prueba de futuro',
    'services.integration.process1': 'Evaluación del sistema',
    'services.integration.process2': 'Planificación de integración',
    'services.integration.process3': 'Desarrollo y pruebas',
    'services.integration.process4': 'Implementación',
    'services.integration.process5': 'Soporte y mantenimiento',
    'services.integration.cta': 'Comienza la Integración',
    
    // Service Details - Web Development
    'services.webdev.feature1': 'Interfaces de usuario inteligentes',
    'services.webdev.feature2': 'Motores de personalización',
    'services.webdev.feature3': 'Integración de chatbot',
    'services.webdev.feature4': 'Optimización del rendimiento',
    'services.webdev.feature5': 'Funciones de accesibilidad',
    'services.webdev.benefit1': 'Experiencia de usuario mejorada',
    'services.webdev.benefit2': 'Mayores tasas de conversión',
    'services.webdev.benefit3': 'Tasas de rebote reducidas',
    'services.webdev.benefit4': 'SEO mejorado',
    'services.webdev.benefit5': 'Ventaja competitiva',
    'services.webdev.process1': 'Análisis de requisitos',
    'services.webdev.process2': 'Diseño y prototipado',
    'services.webdev.process3': 'Desarrollo',
    'services.webdev.process4': 'Pruebas y optimización',
    'services.webdev.process5': 'Lanzamiento y soporte',
    'services.webdev.cta': 'Construye Sitios Inteligentes',
    
    // Service Details - Web Optimization
    'services.webopt.feature1': 'Optimización SEO',
    'services.webopt.feature2': 'Optimización de velocidad',
    'services.webopt.feature3': 'Optimización de conversión',
    'services.webopt.feature4': 'Análisis del comportamiento del usuario',
    'services.webopt.feature5': 'Optimización de contenido',
    'services.webopt.benefit1': 'Mejora el ranking de búsqueda',
    'services.webopt.benefit2': 'Tiempos de carga más rápidos',
    'services.webopt.benefit3': 'Mayores tasas de conversión',
    'services.webopt.benefit4': 'Mejor experiencia de usuario',
    'services.webopt.benefit5': 'Mayores ingresos',
    'services.webopt.process1': 'Auditoría del sitio web',
    'services.webopt.process2': 'Estrategia de optimización',
    'services.webopt.process3': 'Implementación',
    'services.webopt.process4': 'Pruebas y refinamiento',
    'services.webopt.process5': 'Monitoreo continuo',
    'services.webopt.cta': 'Optimiza tu Sitio',
    
    // Service Details - Website Development
    'services.website.feature1': 'Diseño web personalizado',
    'services.website.feature2': 'Desarrollo responsive',
    'services.website.feature3': 'Frameworks modernos (React, Vue, Angular)',
    'services.website.feature4': 'Integración CMS',
    'services.website.feature5': 'Optimización del rendimiento',
    'services.website.benefit1': 'Presencia online profesional',
    'services.website.benefit2': 'Diseño adaptado a móviles',
    'services.website.benefit3': 'Tiempos de carga rápidos',
    'services.website.benefit4': 'Estructura lista para SEO',
    'services.website.benefit5': 'Arquitectura escalable',
    'services.website.process1': 'Recopilación de requisitos',
    'services.website.process2': 'Maquetas de diseño',
    'services.website.process3': 'Fase de desarrollo',
    'services.website.process4': 'Pruebas y QA',
    'services.website.process5': 'Lanzamiento y soporte',
    'services.website.cta': 'Inicia tu Proyecto',
    
    // Service Details - Shopify
    'services.shopify.feature1': 'Temas Shopify personalizados',
    'services.shopify.feature2': 'Desarrollo de aplicaciones',
    'services.shopify.feature3': 'Integración de pasarelas de pago',
    'services.shopify.feature4': 'Gestión de inventario',
    'services.shopify.feature5': 'Venta multicanal',
    'services.shopify.benefit1': 'Rápido tiempo de comercialización',
    'services.shopify.benefit2': 'Procesamiento seguro de pagos',
    'services.shopify.benefit3': 'Tiendas optimizadas para móviles',
    'services.shopify.benefit4': 'Funciones SEO integradas',
    'services.shopify.benefit5': 'Plataforma escalable',
    'services.shopify.process1': 'Planificación de la tienda',
    'services.shopify.process2': 'Personalización del tema',
    'services.shopify.process3': 'Integración de aplicaciones',
    'services.shopify.process4': 'Configuración de productos',
    'services.shopify.process5': 'Lanzamiento y capacitación',
    'services.shopify.cta': 'Construye tu Tienda',
    
    // Service Details - WooCommerce
    'services.woocommerce.feature1': 'Temas WooCommerce personalizados',
    'services.woocommerce.feature2': 'Desarrollo de plugins',
    'services.woocommerce.feature3': 'Integración de pagos',
    'services.woocommerce.feature4': 'Gestión de productos',
    'services.woocommerce.feature5': 'Integración con WordPress',
    'services.woocommerce.benefit1': 'Control total de personalización',
    'services.woocommerce.benefit2': 'Solución rentable',
    'services.woocommerce.benefit3': 'Plataforma amigable con SEO',
    'services.woocommerce.benefit4': 'Gran ecosistema de plugins',
    'services.woocommerce.benefit5': 'Listo para marketing de contenidos',
    'services.woocommerce.process1': 'Configuración de WordPress',
    'services.woocommerce.process2': 'Configuración de WooCommerce',
    'services.woocommerce.process3': 'Desarrollo del tema',
    'services.woocommerce.process4': 'Integración de plugins',
    'services.woocommerce.process5': 'Pruebas y lanzamiento',
    'services.woocommerce.cta': 'Comienza a Vender Online',
    
    // Service Details - BigCommerce
    'services.bigcommerce.feature1': 'Funciones empresariales',
    'services.bigcommerce.feature2': 'Arquitectura API-first',
    'services.bigcommerce.feature3': 'Capacidad multi-tienda',
    'services.bigcommerce.feature4': 'Funcionalidad B2B',
    'services.bigcommerce.feature5': 'Análisis avanzado',
    'services.bigcommerce.benefit1': 'Escalabilidad empresarial',
    'services.bigcommerce.benefit2': 'Sin tarifas de transacción',
    'services.bigcommerce.benefit3': 'Funciones B2B integradas',
    'services.bigcommerce.benefit4': 'Listo para comercio headless',
    'services.bigcommerce.benefit5': 'Capacidades de venta global',
    'services.bigcommerce.process1': 'Evaluación de la plataforma',
    'services.bigcommerce.process2': 'Planificación de arquitectura',
    'services.bigcommerce.process3': 'Desarrollo personalizado',
    'services.bigcommerce.process4': 'Configuración de integraciones',
    'services.bigcommerce.process5': 'Implementación empresarial',
    'services.bigcommerce.cta': 'Escala tu Negocio',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.whyAI': 'Por qué IA',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Transforma tu Negocio con Soluciones de IA',
    'hero.subtitle': 'Aprovecha el poder de la inteligencia artificial para optimizar operaciones, mejorar la toma de decisiones e impulsar la innovación.',
    'hero.cta': 'Comenzar',
    'hero.learnMore': 'Saber Más',
    'hero.efficiency': 'Eficiencia',
    'hero.support': 'Soporte',
    'hero.solutions': 'Soluciones',
    
    // Services Section
    'services.title': 'Nuestros Servicios de IA',
    'services.subtitle': 'Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio e impulsar el crecimiento',
    'services.viewAll': 'Ver Todos los Servicios',
    'services.learnMore': 'Saber más',
    
    'services.optimization.title': 'Optimización de Tareas Empresariales con IA',
    'services.optimization.desc': 'Optimiza las operaciones y automatiza tareas repetitivas con nuestras soluciones de optimización de flujo de trabajo impulsadas por IA.',
    
    'services.sales.title': 'Crecimiento de Ventas Mejorado con IA',
    'services.sales.desc': 'Aprovecha análisis predictivos e información del cliente para identificar oportunidades y aumentar las tasas de conversión.',
    
    'services.marketing.title': 'Estrategias de Marketing con IA',
    'services.marketing.desc': 'Crea campañas de marketing basadas en datos con contenido personalizado y optimización automática.',
    
    'services.social.title': 'Optimización de Redes Sociales con IA',
    'services.social.desc': 'Mejora tu presencia en redes sociales con creación de contenido y análisis de rendimiento impulsados por IA.',
    
    'services.analysis.title': 'Análisis Avanzado de Datos con IA',
    'services.analysis.desc': 'Transforma datos brutos en información accionable con nuestras soluciones avanzadas de análisis.',
    
    'services.integration.title': 'Servicios de Integración de IA',
    'services.integration.desc': 'Integra sin problemas las capacidades de IA en tus sistemas y flujos de trabajo existentes.',
    
    'services.webdev.title': 'Desarrollo Web con IA',
    'services.webdev.desc': 'Crea sitios web de vanguardia con herramientas de desarrollo asistidas por IA.',
    
    'services.webopt.title': 'Optimización de Sitios Web con IA',
    'services.webopt.desc': 'Mejora el rendimiento, SEO y tasas de conversión de tu sitio web existente.',
    
    'services.website.title': 'Desarrollo de Sitios Web',
    'services.website.desc': 'Desarrollo profesional de sitios web con tecnologías modernas, diseño responsive y rendimiento óptimo.',
    
    'services.shopify.title': 'Desarrollo E-commerce Shopify',
    'services.shopify.desc': 'Construye tiendas online potentes con Shopify, incluyendo temas personalizados, aplicaciones e integraciones.',
    
    'services.woocommerce.title': 'Desarrollo WooCommerce',
    'services.woocommerce.desc': 'Crea soluciones e-commerce flexibles basadas en WordPress con personalización WooCommerce.',
    
    'services.bigcommerce.title': 'Desarrollo BigCommerce',
    'services.bigcommerce.desc': 'Soluciones e-commerce a nivel empresarial con BigCommerce para negocios online escalables.',
    
    // All Services Page
    'allServices.title': 'Todos Nuestros Servicios',
    'allServices.subtitle': 'Soluciones integrales para transformar tu negocio con IA y tecnologías web modernas',
    'allServices.cta': 'Comienza con Nuestros Servicios',
    
    // Service Detail Pages
    'serviceDetail.backToServices': 'Volver a Servicios',
    'serviceDetail.keyFeatures': 'Características Clave',
    'serviceDetail.benefits': 'Beneficios',
    'serviceDetail.process': 'Nuestro Proceso',
    'serviceDetail.ready': '¿Listo para Comenzar?',
    'serviceDetail.discuss': 'Hablemos de cómo nuestro',
    'serviceDetail.transform': 'puede transformar tu negocio.',
    
    // Why AI Section
    'whyai.title': 'Por Qué Tu Negocio Necesita IA',
    'whyai.subtitle': 'El panorama empresarial está cambiando rápidamente. Las empresas que adopten la IA ahora prosperarán.',
    
    'whyai.advantage.title': 'Ventaja Competitiva',
    'whyai.advantage.desc': 'Las empresas que implementan soluciones de IA obtienen una ventaja significativa sobre los competidores, con el 63% de las empresas reportando mayores ingresos después de la adopción de IA.',
    
    'whyai.efficiency.title': 'Eficiencia Operacional',
    'whyai.efficiency.desc': 'La IA automatiza tareas repetitivas, reduciendo los costos operativos hasta en un 40% y permitiendo que tu equipo se centre en actividades estratégicas.',
    
    'whyai.decision.title': 'Toma de Decisiones Mejorada',
    'whyai.decision.desc': 'Los conocimientos basados en datos de la IA permiten mejores decisiones empresariales, con el 87% de los ejecutivos reportando una planificación estratégica más segura.',
    
    'whyai.experience.title': 'Experiencia del Cliente',
    'whyai.experience.desc': 'La personalización impulsada por IA aumenta la satisfacción del cliente en un 35% y mejora las tasas de retención a través de experiencias personalizadas y soporte 24/7.',
    
    // Why AI Features
    'whyai.features.title': 'Características Impulsadas por IA',
    'whyai.features.realtime': 'Procesamiento de datos en tiempo real',
    'whyai.features.predictive': 'Análisis predictivo',
    'whyai.features.automated': 'Flujos de trabajo automatizados',
    'whyai.features.smart': 'Recomendaciones inteligentes',
    'whyai.features.continuous': 'Aprendizaje continuo',
    'whyai.features.scalable': 'Soluciones escalables',
    'whyai.cta': 'Comienza tu Viaje con IA',
    
    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para transformar tu negocio con IA? Contáctanos hoy para discutir tus necesidades.',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito!',
    'contact.form.successDesc': 'Te contactaremos dentro de 24 horas.',
    'contact.form.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.form.messagePlaceholder': 'Cuéntanos sobre tu proyecto...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Chisinau, Moldavia',
    'contact.info.available': 'Disponible 24/7 para las necesidades de tu negocio',
    'contact.info.email': 'Correo',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Dirección',
    'contact.hours.title': 'Horario de Atención',
    'contact.hours.weekdays': 'Lunes - Viernes',
    'contact.hours.saturday': 'Sábado',
    'contact.hours.sunday': 'Domingo',
    'contact.hours.closed': 'Cerrado',
    'contact.quick.title': '¿Necesitas una respuesta rápida?',
    'contact.quick.desc': 'Para consultas urgentes, llámanos directamente o usa nuestro chat en vivo.',
    'contact.quick.cta': 'Iniciar Chat en Vivo',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  fr: {
    ...baseTranslations,
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.whyAI': 'Pourquoi l\'IA',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transformez Votre Entreprise avec des Solutions IA',
    'hero.subtitle': 'Exploitez la puissance de l\'intelligence artificielle pour optimiser les opérations et stimuler l\'innovation.',
    'hero.cta': 'Commencer',
    'hero.learnMore': 'En Savoir Plus',
    'hero.efficiency': 'Efficacité',
    'hero.support': 'Support',
    'hero.solutions': 'Solutions',
    
    // Services Section
    'services.title': 'Nos Services IA',
    'services.subtitle': 'Solutions IA complètes conçues pour transformer vos opérations commerciales et stimuler la croissance',
    'services.viewAll': 'Voir Tous les Services',
    'services.learnMore': 'En savoir plus',
    
    'services.optimization.title': 'Optimisation des Tâches d\'Entreprise avec IA',
    'services.optimization.desc': 'Rationalisez les opérations et automatisez les tâches répétitives avec nos solutions d\'optimisation de flux de travail alimentées par l\'IA.',
    
    'services.sales.title': 'Croissance des Ventes Améliorée par l\'IA',
    'services.sales.desc': 'Exploitez l\'analyse prédictive et les informations clients pour identifier les opportunités et augmenter les taux de conversion.',
    
    'services.marketing.title': 'Stratégies Marketing Alimentées par l\'IA',
    'services.marketing.desc': 'Créez des campagnes marketing basées sur les données avec du contenu personnalisé et une optimisation automatique.',
    
    'services.social.title': 'Optimisation des Médias Sociaux avec IA',
    'services.social.desc': 'Améliorez votre présence sur les réseaux sociaux avec la création de contenu et l\'analyse de performance alimentées par l\'IA.',
    
    'services.analysis.title': 'Analyse de Données Avancée avec IA',
    'services.analysis.desc': 'Transformez les données brutes en informations exploitables avec nos solutions d\'analyse avancées.',
    
    'services.integration.title': 'Services d\'Intégration IA',
    'services.integration.desc': 'Intégrez sans effort les capacités IA dans vos systèmes et flux de travail existants.',
    
    'services.webdev.title': 'Développement Web avec IA',
    'services.webdev.desc': 'Créez des sites web de pointe avec des outils de développement assistés par IA.',
    
    'services.webopt.title': 'Optimisation de Site Web avec IA',
    'services.webopt.desc': 'Améliorez les performances, le référencement et les taux de conversion de votre site web existant.',
    
    'services.website.title': 'Développement de Sites Web',
    'services.website.desc': 'Développement professionnel de sites web avec technologies modernes, design responsive et performance optimale.',
    
    'services.shopify.title': 'Développement E-commerce Shopify',
    'services.shopify.desc': 'Construisez des boutiques en ligne puissantes avec Shopify, incluant thèmes personnalisés, applications et intégrations.',
    
    'services.woocommerce.title': 'Développement WooCommerce',
    'services.woocommerce.desc': 'Créez des solutions e-commerce flexibles basées sur WordPress avec personnalisation WooCommerce.',
    
    'services.bigcommerce.title': 'Développement BigCommerce',
    'services.bigcommerce.desc': 'Solutions e-commerce au niveau entreprise avec BigCommerce pour des entreprises en ligne évolutives.',
    
    // All Services Page
    'allServices.title': 'Tous Nos Services',
    'allServices.subtitle': 'Solutions complètes pour transformer votre entreprise avec l\'IA et les technologies web modernes',
    'allServices.cta': 'Commencez avec Nos Services',
    
    // Service Detail Pages
    'serviceDetail.backToServices': 'Retour aux Services',
    'serviceDetail.keyFeatures': 'Caractéristiques Clés',
    'serviceDetail.benefits': 'Avantages',
    'serviceDetail.process': 'Notre Processus',
    'serviceDetail.ready': 'Prêt à Commencer?',
    'serviceDetail.discuss': 'Discutons comment notre',
    'serviceDetail.transform': 'peut transformer votre entreprise.',
    
    // Why AI Section
    'whyai.title': 'Pourquoi Votre Entreprise a Besoin de l\'IA',
    'whyai.subtitle': 'Le paysage commercial évolue rapidement. Les entreprises qui adoptent l\'IA maintenant prospéreront.',
    
    'whyai.advantage.title': 'Avantage Concurrentiel',
    'whyai.advantage.desc': 'Les entreprises qui mettent en œuvre des solutions IA obtiennent un avantage significatif sur leurs concurrents, avec 63% des entreprises signalant une augmentation des revenus après l\'adoption de l\'IA.',
    
    'whyai.efficiency.title': 'Efficacité Opérationnelle',
    'whyai.efficiency.desc': 'L\'IA automatise les tâches répétitives, réduisant les coûts opérationnels jusqu\'à 40% et permettant à votre équipe de se concentrer sur des activités stratégiques.',
    
    'whyai.decision.title': 'Prise de Décision Améliorée',
    'whyai.decision.desc': 'Les informations basées sur les données de l\'IA permettent de meilleures décisions commerciales, avec 87% des cadres signalant une planification stratégique plus confiante.',
    
    'whyai.experience.title': 'Expérience Client',
    'whyai.experience.desc': 'La personnalisation alimentée par l\'IA augmente la satisfaction client de 35% et améliore les taux de rétention grâce à des expériences sur mesure et un support 24/7.',
    
    // Why AI Features
    'whyai.features.title': 'Fonctionnalités Alimentées par l\'IA',
    'whyai.features.realtime': 'Traitement des données en temps réel',
    'whyai.features.predictive': 'Analyse prédictive',
    'whyai.features.automated': 'Flux de travail automatisés',
    'whyai.features.smart': 'Recommandations intelligentes',
    'whyai.features.continuous': 'Apprentissage continu',
    'whyai.features.scalable': 'Solutions évolutives',
    'whyai.cta': 'Commencez Votre Voyage IA',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à transformer votre entreprise avec l\'IA? Contactez-nous aujourd\'hui pour discuter de vos besoins.',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès!',
    'contact.form.successDesc': 'Nous vous répondrons dans les 24 heures.',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.form.messagePlaceholder': 'Parlez-nous de votre projet...',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Chisinau, Moldavie',
    'contact.info.available': 'Disponible 24/7 pour les besoins de votre entreprise',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.location': 'Adresse',
    'contact.hours.title': 'Heures d\'Ouverture',
    'contact.hours.weekdays': 'Lundi - Vendredi',
    'contact.hours.saturday': 'Samedi',
    'contact.hours.sunday': 'Dimanche',
    'contact.hours.closed': 'Fermé',
    'contact.quick.title': 'Besoin d\'une réponse rapide?',
    'contact.quick.desc': 'Pour les demandes urgentes, appelez-nous directement ou utilisez notre chat en direct.',
    'contact.quick.cta': 'Démarrer le Chat en Direct',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
  },
  de: {
    ...baseTranslations,
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.whyAI': 'Warum KI',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Transformieren Sie Ihr Unternehmen mit KI-Lösungen',
    'hero.subtitle': 'Nutzen Sie die Kraft der künstlichen Intelligenz zur Optimierung von Abläufen und zur Förderung von Innovationen.',
    'hero.cta': 'Jetzt Starten',
    'hero.learnMore': 'Mehr Erfahren',
    'hero.efficiency': 'Effizienz',
    'hero.support': 'Unterstützung',
    'hero.solutions': 'Lösungen',
    
    // Services Section
    'services.title': 'Unsere KI-Dienstleistungen',
    'services.subtitle': 'Umfassende KI-Lösungen zur Transformation Ihrer Geschäftsabläufe und Wachstumsförderung',
    'services.viewAll': 'Alle Dienstleistungen Anzeigen',
    'services.learnMore': 'Mehr erfahren',
    
    'services.optimization.title': 'KI-Geschäftsaufgabenoptimierung',
    'services.optimization.desc': 'Optimieren Sie Abläufe und automatisieren Sie wiederkehrende Aufgaben mit unseren KI-gestützten Workflow-Optimierungslösungen.',
    
    'services.sales.title': 'KI-verbessertes Umsatzwachstum',
    'services.sales.desc': 'Nutzen Sie prädiktive Analysen und Kundeneinblicke, um Chancen zu identifizieren und Konversionsraten zu erhöhen.',
    
    'services.marketing.title': 'KI-gestützte Marketingstrategien',
    'services.marketing.desc': 'Erstellen Sie datengesteuerte Marketingkampagnen mit personalisierten Inhalten und automatischer Optimierung.',
    
    'services.social.title': 'KI-Social-Media-Optimierung',
    'services.social.desc': 'Verbessern Sie Ihre Social-Media-Präsenz mit KI-gestützter Content-Erstellung und Leistungsanalyse.',
    
    'services.analysis.title': 'Erweiterte KI-Datenanalyse',
    'services.analysis.desc': 'Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse mit unseren fortschrittlichen Analyselösungen.',
    
    'services.integration.title': 'KI-Integrationsdienste',
    'services.integration.desc': 'Integrieren Sie KI-Funktionen nahtlos in Ihre bestehenden Systeme und Arbeitsabläufe.',
    
    'services.webdev.title': 'Webentwicklung mit KI',
    'services.webdev.desc': 'Erstellen Sie hochmoderne Websites mit KI-unterstützten Entwicklungstools.',
    
    'services.webopt.title': 'Website-Optimierung mit KI',
    'services.webopt.desc': 'Verbessern Sie die Leistung, SEO und Konversionsraten Ihrer bestehenden Website.',
    
    'services.website.title': 'Website-Entwicklung',
    'services.website.desc': 'Professionelle Website-Entwicklung mit modernen Technologien, responsivem Design und optimaler Leistung.',
    
    'services.shopify.title': 'Shopify E-Commerce-Entwicklung',
    'services.shopify.desc': 'Erstellen Sie leistungsstarke Online-Shops mit Shopify, einschließlich benutzerdefinierter Themes, Apps und Integrationen.',
    
    'services.woocommerce.title': 'WooCommerce-Entwicklung',
    'services.woocommerce.desc': 'Erstellen Sie flexible WordPress-basierte E-Commerce-Lösungen mit WooCommerce-Anpassung.',
    
    'services.bigcommerce.title': 'BigCommerce-Entwicklung',
    'services.bigcommerce.desc': 'E-Commerce-Lösungen auf Unternehmensebene mit BigCommerce für skalierbare Online-Geschäfte.',
    
    // All Services Page
    'allServices.title': 'Alle Unsere Dienstleistungen',
    'allServices.subtitle': 'Umfassende Lösungen zur Transformation Ihres Unternehmens mit KI und modernen Webtechnologien',
    'allServices.cta': 'Beginnen Sie mit Unseren Dienstleistungen',
    
    // Service Detail Pages
    'serviceDetail.backToServices': 'Zurück zu Dienstleistungen',
    'serviceDetail.keyFeatures': 'Hauptmerkmale',
    'serviceDetail.benefits': 'Vorteile',
    'serviceDetail.process': 'Unser Prozess',
    'serviceDetail.ready': 'Bereit zu Beginnen?',
    'serviceDetail.discuss': 'Lassen Sie uns besprechen, wie unser',
    'serviceDetail.transform': 'Ihr Unternehmen transformieren kann.',
    
    // Why AI Section
    'whyai.title': 'Warum Ihr Unternehmen KI Braucht',
    'whyai.subtitle': 'Die Geschäftslandschaft verändert sich schnell. Unternehmen, die jetzt KI einsetzen, werden erfolgreich sein.',
    
    'whyai.advantage.title': 'Wettbewerbsvorteil',
    'whyai.advantage.desc': 'Unternehmen, die KI-Lösungen implementieren, erlangen einen erheblichen Vorteil gegenüber Wettbewerbern, wobei 63% der Unternehmen nach der KI-Einführung höhere Einnahmen melden.',
    
    'whyai.efficiency.title': 'Betriebliche Effizienz',
    'whyai.efficiency.desc': 'KI automatisiert wiederkehrende Aufgaben, reduziert die Betriebskosten um bis zu 40% und ermöglicht es Ihrem Team, sich auf strategische Aktivitäten zu konzentrieren.',
    
    'whyai.decision.title': 'Verbesserte Entscheidungsfindung',
    'whyai.decision.desc': 'Datengestützte Erkenntnisse aus KI ermöglichen bessere Geschäftsentscheidungen, wobei 87% der Führungskräfte eine sicherere strategische Planung melden.',
    
    'whyai.experience.title': 'Kundenerfahrung',
    'whyai.experience.desc': 'KI-gestützte Personalisierung erhöht die Kundenzufriedenheit um 35% und verbessert die Bindungsraten durch maßgeschneiderte Erlebnisse und 24/7-Support.',
    
    // Why AI Features
    'whyai.features.title': 'KI-gestützte Funktionen',
    'whyai.features.realtime': 'Echtzeit-Datenverarbeitung',
    'whyai.features.predictive': 'Prädiktive Analytik',
    'whyai.features.automated': 'Automatisierte Arbeitsabläufe',
    'whyai.features.smart': 'Intelligente Empfehlungen',
    'whyai.features.continuous': 'Kontinuierliches Lernen',
    'whyai.features.scalable': 'Skalierbare Lösungen',
    'whyai.cta': 'Beginnen Sie Ihre KI-Reise',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie Uns',
    'contact.subtitle': 'Bereit, Ihr Unternehmen mit KI zu transformieren? Kontaktieren Sie uns heute, um Ihre Bedürfnisse zu besprechen.',
    'contact.form.title': 'Senden Sie uns eine Nachricht',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht Senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.successDesc': 'Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.',
    'contact.form.error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
    'contact.form.messagePlaceholder': 'Erzählen Sie uns von Ihrem Projekt...',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.address': 'Chisinau, Moldawien',
    'contact.info.available': 'Rund um die Uhr für Ihre Geschäftsbedürfnisse verfügbar',
    'contact.info.email': 'E-Mail',
    'contact.info.phone': 'Telefon',
    'contact.info.location': 'Adresse',
    'contact.hours.title': 'Geschäftszeiten',
    'contact.hours.weekdays': 'Montag - Freitag',
    'contact.hours.saturday': 'Samstag',
    'contact.hours.sunday': 'Sonntag',
    'contact.hours.closed': 'Geschlossen',
    'contact.quick.title': 'Benötigen Sie eine schnelle Antwort?',
    'contact.quick.desc': 'Für dringende Anfragen rufen Sie uns bitte direkt an oder nutzen Sie unseren Live-Chat.',
    'contact.quick.cta': 'Live-Chat Starten',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
  },
  ru: {
    ...baseTranslations,
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.whyAI': 'Почему ИИ',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Трансформируйте Ваш Бизнес с Решениями ИИ',
    'hero.subtitle': 'Используйте силу искусственного интеллекта для оптимизации операций, улучшения принятия решений и стимулирования инноваций.',
    'hero.cta': 'Начать',
    'hero.learnMore': 'Узнать Больше',
    'hero.efficiency': 'Эффективность',
    'hero.support': 'Поддержка',
    'hero.solutions': 'Решения',
    
    // Services Section
    'services.title': 'Наши Услуги ИИ',
    'services.subtitle': 'Комплексные решения ИИ, разработанные для трансформации ваших бизнес-операций и стимулирования роста',
    'services.viewAll': 'Посмотреть Все Услуги',
    'services.learnMore': 'Узнать больше',
    
    'services.optimization.title': 'Оптимизация Бизнес-Задач с ИИ',
    'services.optimization.desc': 'Оптимизируйте операции и автоматизируйте повторяющиеся задачи с помощью наших решений для оптимизации рабочих процессов на основе ИИ.',
    
    'services.sales.title': 'Рост Продаж с Помощью ИИ',
    'services.sales.desc': 'Используйте прогнозную аналитику и информацию о клиентах для выявления возможностей и увеличения коэффициента конверсии.',
    
    'services.marketing.title': 'Маркетинговые Стратегии на Основе ИИ',
    'services.marketing.desc': 'Создавайте маркетинговые кампании на основе данных с персонализированным контентом и автоматической оптимизацией.',
    
    'services.social.title': 'Оптимизация Социальных Сетей с ИИ',
    'services.social.desc': 'Улучшите свое присутствие в социальных сетях с помощью создания контента и анализа производительности на основе ИИ.',
    
    'services.analysis.title': 'Расширенный Анализ Данных с ИИ',
    'services.analysis.desc': 'Превратите необработанные данные в практические идеи с помощью наших передовых аналитических решений.',
    
    'services.integration.title': 'Услуги Интеграции ИИ',
    'services.integration.desc': 'Беспрепятственно интегрируйте возможности ИИ в ваши существующие системы и рабочие процессы.',
    
    'services.webdev.title': 'Веб-разработка с ИИ',
    'services.webdev.desc': 'Создавайте передовые веб-сайты с помощью инструментов разработки с поддержкой ИИ.',
    
    'services.webopt.title': 'Оптимизация Веб-сайта с ИИ',
    'services.webopt.desc': 'Улучшите производительность, SEO и коэффициент конверсии вашего существующего веб-сайта.',
    
    'services.website.title': 'Разработка Веб-сайтов',
    'services.website.desc': 'Профессиональная разработка веб-сайтов с современными технологиями, адаптивным дизайном и оптимальной производительностью.',
    
    'services.shopify.title': 'Разработка E-commerce Shopify',
    'services.shopify.desc': 'Создавайте мощные интернет-магазины с Shopify, включая пользовательские темы, приложения и интеграции.',
    
    'services.woocommerce.title': 'Разработка WooCommerce',
    'services.woocommerce.desc': 'Создавайте гибкие решения электронной коммерции на основе WordPress с настройкой WooCommerce.',
    
    'services.bigcommerce.title': 'Разработка BigCommerce',
    'services.bigcommerce.desc': 'Решения электронной коммерции корпоративного уровня с BigCommerce для масштабируемого онлайн-бизнеса.',
    
    // All Services Page
    'allServices.title': 'Все Наши Услуги',
    'allServices.subtitle': 'Комплексные решения для трансформации вашего бизнеса с помощью ИИ и современных веб-технологий',
    'allServices.cta': 'Начните с Наших Услуг',
    
    // Service Detail Pages
    'serviceDetail.backToServices': 'Назад к Услугам',
    'serviceDetail.keyFeatures': 'Ключевые Особенности',
    'serviceDetail.benefits': 'Преимущества',
    'serviceDetail.process': 'Наш Процесс',
    'serviceDetail.ready': 'Готовы Начать?',
    'serviceDetail.discuss': 'Давайте обсудим, как наш',
    'serviceDetail.transform': 'может трансформировать ваш бизнес.',
    
    // Why AI Section
    'whyai.title': 'Почему Вашему Бизнесу Нужен ИИ',
    'whyai.subtitle': 'Бизнес-ландшафт быстро меняется. Компании, которые внедряют ИИ сейчас, будут процветать.',
    
    'whyai.advantage.title': 'Конкурентное Преимущество',
    'whyai.advantage.desc': 'Компании, внедряющие решения ИИ, получают значительное преимущество перед конкурентами: 63% предприятий сообщают об увеличении доходов после внедрения ИИ.',
    
    'whyai.efficiency.title': 'Операционная Эффективность',
    'whyai.efficiency.desc': 'ИИ автоматизирует повторяющиеся задачи, снижая операционные расходы до 40% и позволяя вашей команде сосредоточиться на стратегической деятельности.',
    
    'whyai.decision.title': 'Улучшенное Принятие Решений',
    'whyai.decision.desc': 'Аналитика на основе данных ИИ обеспечивает лучшие бизнес-решения: 87% руководителей сообщают о более уверенном стратегическом планировании.',
    
    'whyai.experience.title': 'Клиентский Опыт',
    'whyai.experience.desc': 'Персонализация на основе ИИ повышает удовлетворенность клиентов на 35% и улучшает показатели удержания благодаря индивидуальному опыту и поддержке 24/7.',
    
    // Why AI Features
    'whyai.features.title': 'Функции на Основе ИИ',
    'whyai.features.realtime': 'Обработка данных в реальном времени',
    'whyai.features.predictive': 'Прогнозная аналитика',
    'whyai.features.automated': 'Автоматизированные рабочие процессы',
    'whyai.features.smart': 'Умные рекомендации',
    'whyai.features.continuous': 'Непрерывное обучение',
    'whyai.features.scalable': 'Масштабируемые решения',
    'whyai.cta': 'Начните Свой Путь с ИИ',
    
    // Contact Section
    'contact.title': 'Свяжитесь с Нами',
    'contact.subtitle': 'Готовы трансформировать ваш бизнес с помощью ИИ? Свяжитесь с нами сегодня, чтобы обсудить ваши потребности.',
    'contact.form.title': 'Отправьте нам сообщение',
    'contact.form.name': 'Ваше Имя',
    'contact.form.email': 'Электронная Почта',
    'contact.form.company': 'Компания',
    'contact.form.message': 'Сообщение',
    'contact.form.send': 'Отправить Сообщение',
    'contact.form.sending': 'Отправка...',
    'contact.form.success': 'Сообщение успешно отправлено!',
    'contact.form.successDesc': 'Мы свяжемся с вами в течение 24 часов.',
    'contact.form.error': 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
    'contact.form.messagePlaceholder': 'Расскажите нам о вашем проекте...',
    'contact.info.title': 'Контактная Информация',
    'contact.info.address': 'Кишинев, Молдова',
    'contact.info.available': 'Доступны 24/7 для ваших бизнес-потребностей',
    'contact.info.email': 'Электронная почта',
    'contact.info.phone': 'Телефон',
    'contact.info.location': 'Адрес',
    'contact.hours.title': 'Часы Работы',
    'contact.hours.weekdays': 'Понедельник - Пятница',
    'contact.hours.saturday': 'Суббота',
    'contact.hours.sunday': 'Воскресенье',
    'contact.hours.closed': 'Закрыто',
    'contact.quick.title': 'Нужен быстрый ответ?',
    'contact.quick.desc': 'Для срочных запросов звоните нам напрямую или используйте наш онлайн-чат.',
    'contact.quick.cta': 'Начать Онлайн-чат',
    
    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Использования',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
