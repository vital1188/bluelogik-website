import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ro' | 'ru';

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
  'whyai.advantage.stat': 'Revenue Increase',
  
  'whyai.efficiency.title': 'Operational Efficiency',
  'whyai.efficiency.desc': 'AI automates repetitive tasks, reducing operational costs by up to 40% and allowing your team to focus on high-value strategic activities.',
  'whyai.efficiency.stat': 'Cost Reduction',
  
  'whyai.decision.title': 'Enhanced Decision Making',
  'whyai.decision.desc': 'Data-driven insights from AI enable better business decisions, with 87% of executives reporting more confident strategic planning.',
  'whyai.decision.stat': 'Better Decisions',
  
  'whyai.experience.title': 'Customer Experience',
  'whyai.experience.desc': 'AI-powered personalization increases customer satisfaction by 35% and boosts retention rates through tailored experiences and 24/7 support.',
  'whyai.experience.stat': 'Satisfaction Boost',
  
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
  'contact.form.errorHelp': 'Please try again or contact us directly at hello@bluelogik.com',
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
    
    // Service Details - Business Optimization
    'services.optimization.feature1': 'Automatizare inteligentă a fluxului de lucru',
    'services.optimization.feature2': 'Algoritmi de prioritizare a sarcinilor',
    'services.optimization.feature3': 'Optimizarea alocării resurselor',
    'services.optimization.feature4': 'Monitorizare în timp real a performanței',
    'services.optimization.feature5': 'Programare predictivă a întreținerii',
    'services.optimization.benefit1': 'Reduce costurile operaționale cu până la 40%',
    'services.optimization.benefit2': 'Crește productivitatea cu 60%',
    'services.optimization.benefit3': 'Minimizează eroarea umană',
    'services.optimization.benefit4': 'Eliberează personalul pentru sarcini strategice',
    'services.optimization.benefit5': 'Operațiuni automatizate 24/7',
    'services.optimization.process1': 'Evaluarea inițială a proceselor de afaceri',
    'services.optimization.process2': 'Personalizarea modelului AI',
    'services.optimization.process3': 'Integrare cu sistemele existente',
    'services.optimization.process4': 'Instruirea personalului',
    'services.optimization.process5': 'Optimizare continuă',
    'services.optimization.cta': 'Începe Optimizarea Astăzi',
    
    // Service Details - Sales Growth
    'services.sales.feature1': 'Prognoză predictivă a vânzărilor',
    'services.sales.feature2': 'Analiza comportamentului clienților',
    'services.sales.feature3': 'Optimizare dinamică a prețurilor',
    'services.sales.feature4': 'Punctare și prioritizare lead-uri',
    'services.sales.feature5': 'Recomandări personalizate',
    'services.sales.benefit1': 'Crește vânzările cu până la 35%',
    'services.sales.benefit2': 'Îmbunătățește ratele de conversie cu 50%',
    'services.sales.benefit3': 'Reduce costurile de achiziție clienți',
    'services.sales.benefit4': 'Valoare îmbunătățită pe durata de viață a clientului',
    'services.sales.benefit5': 'Luare de decizii bazată pe date',
    'services.sales.process1': 'Analiza datelor de vânzări',
    'services.sales.process2': 'Antrenarea modelului AI',
    'services.sales.process3': 'Integrare CRM',
    'services.sales.process4': 'Instruirea echipei de vânzări',
    'services.sales.process5': 'Urmărirea performanței',
    'services.sales.cta': 'Stimulează-ți Vânzările',
    
    // Service Details - Marketing
    'services.marketing.feature1': 'Generare automată de conținut',
    'services.marketing.feature2': 'Segmentarea audiențelor',
    'services.marketing.feature3': 'Optimizarea performanței campaniilor',
    'services.marketing.feature4': 'Automatizare multi-canal',
    'services.marketing.feature5': 'Testare A/B la scară',
    'services.marketing.benefit1': 'Crește ROI cu până la 45%',
    'services.marketing.benefit2': 'Reduce costurile de marketing cu 30%',
    'services.marketing.benefit3': 'Îmbunătățește ratele de implicare',
    'services.marketing.benefit4': 'Experiențe personalizate pentru clienți',
    'services.marketing.benefit5': 'Optimizare în timp real a campaniilor',
    'services.marketing.process1': 'Audit și analiză marketing',
    'services.marketing.process2': 'Dezvoltare strategie AI',
    'services.marketing.process3': 'Integrare platforme',
    'services.marketing.process4': 'Lansare campanie',
    'services.marketing.process5': 'Optimizare continuă',
    'services.marketing.cta': 'Transformă-ți Marketingul',
    
    // Service Details - Social Media
    'services.social.feature1': 'Programare automată conținut',
    'services.social.feature2': 'Analiză sentiment',
    'services.social.feature3': 'Identificare tendințe',
    'services.social.feature4': 'Optimizare implicare',
    'services.social.feature5': 'Identificare influenceri',
    'services.social.benefit1': 'Crește implicarea cu 70%',
    'services.social.benefit2': 'Economisește peste 20 ore pe săptămână',
    'services.social.benefit3': 'Prezență consistentă a brandului',
    'services.social.benefit4': 'Strategie de conținut bazată pe date',
    'services.social.benefit5': 'Relații îmbunătățite cu clienții',
    'services.social.process1': 'Audit social media',
    'services.social.process2': 'Configurare instrumente AI',
    'services.social.process3': 'Dezvoltare strategie conținut',
    'services.social.process4': 'Implementare automatizare',
    'services.social.process5': 'Monitorizare performanță',
    'services.social.cta': 'Optimizează Social Media',
    
    // Service Details - Data Analysis
    'services.analysis.feature1': 'Analiză predictivă',
    'services.analysis.feature2': 'Recunoaștere tipare',
    'services.analysis.feature3': 'Detectare anomalii',
    'services.analysis.feature4': 'Dashboard-uri în timp real',
    'services.analysis.feature5': 'Raportare personalizată',
    'services.analysis.benefit1': 'Ia decizii bazate pe date',
    'services.analysis.benefit2': 'Identifică oportunități ascunse',
    'services.analysis.benefit3': 'Reduce riscurile',
    'services.analysis.benefit4': 'Îmbunătățește acuratețea prognozelor',
    'services.analysis.benefit5': 'Avantaj competitiv',
    'services.analysis.process1': 'Evaluare date',
    'services.analysis.process2': 'Configurare analiză',
    'services.analysis.process3': 'Dezvoltare modele',
    'services.analysis.process4': 'Creare dashboard-uri',
    'services.analysis.process5': 'Livrare insights',
    'services.analysis.cta': 'Deblochează-ți Datele',
    
    // Service Details - Integration
    'services.integration.feature1': 'Integrare API',
    'services.integration.feature2': 'Soluții AI personalizate',
    'services.integration.feature3': 'Compatibilitate sisteme legacy',
    'services.integration.feature4': 'Implementare cloud',
    'services.integration.feature5': 'Conformitate securitate',
    'services.integration.benefit1': 'Perturbare minimă',
    'services.integration.benefit2': 'Implementare mai rapidă',
    'services.integration.benefit3': 'Soluții scalabile',
    'services.integration.benefit4': 'Integrare cost-eficientă',
    'services.integration.benefit5': 'Tehnologie future-proof',
    'services.integration.process1': 'Evaluare sistem',
    'services.integration.process2': 'Planificare integrare',
    'services.integration.process3': 'Dezvoltare și testare',
    'services.integration.process4': 'Implementare',
    'services.integration.process5': 'Suport și mentenanță',
    'services.integration.cta': 'Începe Integrarea',
    
    // Service Details - Web Development
    'services.webdev.feature1': 'Interfețe utilizator inteligente',
    'services.webdev.feature2': 'Motoare de personalizare',
    'services.webdev.feature3': 'Integrare chatbot',
    'services.webdev.feature4': 'Optimizare performanță',
    'services.webdev.feature5': 'Funcții de accesibilitate',
    'services.webdev.benefit1': 'Experiență utilizator îmbunătățită',
    'services.webdev.benefit2': 'Rate de conversie mai mari',
    'services.webdev.benefit3': 'Rate de respingere reduse',
    'services.webdev.benefit4': 'SEO îmbunătățit',
    'services.webdev.benefit5': 'Avantaj competitiv',
    'services.webdev.process1': 'Analiză cerințe',
    'services.webdev.process2': 'Design și prototipare',
    'services.webdev.process3': 'Dezvoltare',
    'services.webdev.process4': 'Testare și optimizare',
    'services.webdev.process5': 'Lansare și suport',
    'services.webdev.cta': 'Construiește Site-uri Inteligente',
    
    // Service Details - Web Optimization
    'services.webopt.feature1': 'Optimizare SEO',
    'services.webopt.feature2': 'Optimizare viteză',
    'services.webopt.feature3': 'Optimizare conversie',
    'services.webopt.feature4': 'Analiză comportament utilizatori',
    'services.webopt.feature5': 'Optimizare conținut',
    'services.webopt.benefit1': 'Îmbunătățește clasamentul în căutări',
    'services.webopt.benefit2': 'Timpi de încărcare mai rapizi',
    'services.webopt.benefit3': 'Rate de conversie mai mari',
    'services.webopt.benefit4': 'Experiență utilizator mai bună',
    'services.webopt.benefit5': 'Venituri crescute',
    'services.webopt.process1': 'Audit website',
    'services.webopt.process2': 'Strategie optimizare',
    'services.webopt.process3': 'Implementare',
    'services.webopt.process4': 'Testare și rafinare',
    'services.webopt.process5': 'Monitorizare continuă',
    'services.webopt.cta': 'Optimizează-ți Site-ul',
    
    // Service Details - Website Development
    'services.website.feature1': 'Design website personalizat',
    'services.website.feature2': 'Dezvoltare responsive',
    'services.website.feature3': 'Framework-uri moderne (React, Vue, Angular)',
    'services.website.feature4': 'Integrare CMS',
    'services.website.feature5': 'Optimizare performanță',
    'services.website.benefit1': 'Prezență online profesională',
    'services.website.benefit2': 'Design adaptat pentru mobil',
    'services.website.benefit3': 'Timpi de încărcare rapizi',
    'services.website.benefit4': 'Structură pregătită pentru SEO',
    'services.website.benefit5': 'Arhitectură scalabilă',
    'services.website.process1': 'Colectare cerințe',
    'services.website.process2': 'Machete design',
    'services.website.process3': 'Fază dezvoltare',
    'services.website.process4': 'Testare și QA',
    'services.website.process5': 'Lansare și suport',
    'services.website.cta': 'Începe Proiectul Tău',
    
    // Service Details - Shopify
    'services.shopify.feature1': 'Teme Shopify personalizate',
    'services.shopify.feature2': 'Dezvoltare aplicații',
    'services.shopify.feature3': 'Integrare gateway plăți',
    'services.shopify.feature4': 'Gestionare inventar',
    'services.shopify.feature5': 'Vânzare multi-canal',
    'services.shopify.benefit1': 'Timp rapid de lansare pe piață',
    'services.shopify.benefit2': 'Procesare securizată a plăților',
    'services.shopify.benefit3': 'Magazine optimizate pentru mobil',
    'services.shopify.benefit4': 'Funcții SEO integrate',
    'services.shopify.benefit5': 'Platformă scalabilă',
    'services.shopify.process1': 'Planificare magazin',
    'services.shopify.process2': 'Personalizare temă',
    'services.shopify.process3': 'Integrare aplicații',
    'services.shopify.process4': 'Configurare produse',
    'services.shopify.process5': 'Lansare și instruire',
    'services.shopify.cta': 'Construiește-ți Magazinul',
    
    // Service Details - WooCommerce
    'services.woocommerce.feature1': 'Teme WooCommerce personalizate',
    'services.woocommerce.feature2': 'Dezvoltare plugin-uri',
    'services.woocommerce.feature3': 'Integrare plăți',
    'services.woocommerce.feature4': 'Gestionare produse',
    'services.woocommerce.feature5': 'Integrare WordPress',
    'services.woocommerce.benefit1': 'Control total de personalizare',
    'services.woocommerce.benefit2': 'Soluție cost-eficientă',
    'services.woocommerce.benefit3': 'Platformă prietenoasă cu SEO',
    'services.woocommerce.benefit4': 'Ecosistem mare de plugin-uri',
    'services.woocommerce.benefit5': 'Pregătit pentru marketing de conținut',
    'services.woocommerce.process1': 'Configurare WordPress',
    'services.woocommerce.process2': 'Configurare WooCommerce',
    'services.woocommerce.process3': 'Dezvoltare temă',
    'services.woocommerce.process4': 'Integrare plugin-uri',
    'services.woocommerce.process5': 'Testare și lansare',
    'services.woocommerce.cta': 'Începe să Vinzi Online',
    
    // Service Details - BigCommerce
    'services.bigcommerce.feature1': 'Funcții enterprise',
    'services.bigcommerce.feature2': 'Arhitectură API-first',
    'services.bigcommerce.feature3': 'Capacitate multi-magazin',
    'services.bigcommerce.feature4': 'Funcționalitate B2B',
    'services.bigcommerce.feature5': 'Analiză avansată',
    'services.bigcommerce.benefit1': 'Scalabilitate enterprise',
    'services.bigcommerce.benefit2': 'Fără taxe de tranzacție',
    'services.bigcommerce.benefit3': 'Funcții B2B integrate',
    'services.bigcommerce.benefit4': 'Pregătit pentru comerț headless',
    'services.bigcommerce.benefit5': 'Capacități de vânzare globală',
    'services.bigcommerce.process1': 'Evaluare platformă',
    'services.bigcommerce.process2': 'Planificare arhitectură',
    'services.bigcommerce.process3': 'Dezvoltare personalizată',
    'services.bigcommerce.process4': 'Configurare integrări',
    'services.bigcommerce.process5': 'Implementare enterprise',
    'services.bigcommerce.cta': 'Scalează-ți Afacerea',
    
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
    'whyai.advantage.stat': 'Creștere Venituri',
    
    'whyai.efficiency.title': 'Eficiență Operațională',
    'whyai.efficiency.desc': 'AI automatizează sarcinile repetitive, reducând costurile operaționale cu până la 40% și permițând echipei tale să se concentreze pe activități strategice.',
    'whyai.efficiency.stat': 'Reducere Costuri',
    
    'whyai.decision.title': 'Luare de Decizii Îmbunătățită',
    'whyai.decision.desc': 'Informațiile bazate pe date din AI permit decizii de afaceri mai bune, cu 87% dintre executivi raportând o planificare strategică mai încrezătoare.',
    'whyai.decision.stat': 'Decizii Mai Bune',
    
    'whyai.experience.title': 'Experiența Clientului',
    'whyai.experience.desc': 'Personalizarea bazată pe AI crește satisfacția clienților cu 35% și îmbunătățește ratele de retenție prin experiențe personalizate și suport 24/7.',
    'whyai.experience.stat': 'Creștere Satisfacție',
    
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
    'contact.form.errorHelp': 'Te rugăm să încerci din nou sau contactează-ne direct la hello@bluelogik.com',
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
    'whyai.advantage.stat': 'Augmentation des Revenus',
    
    'whyai.efficiency.title': 'Efficacité Opérationnelle',
    'whyai.efficiency.desc': 'L\'IA automatise les tâches répétitives, réduisant les coûts opérationnels jusqu\'à 40% et permettant à votre équipe de se concentrer sur des activités stratégiques.',
    'whyai.efficiency.stat': 'Réduction des Coûts',
    
    'whyai.decision.title': 'Prise de Décision Améliorée',
    'whyai.decision.desc': 'Les informations basées sur les données de l\'IA permettent de meilleures décisions commerciales, avec 87% des cadres signalant une planification stratégique plus confiante.',
    'whyai.decision.stat': 'Meilleures Décisions',
    
    'whyai.experience.title': 'Expérience Client',
    'whyai.experience.desc': 'La personnalisation alimentée par l\'IA augmente la satisfaction client de 35% et améliore les taux de rétention grâce à des expériences sur mesure et un support 24/7.',
    'whyai.experience.stat': 'Augmentation de la Satisfaction',
    
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
    'contact.form.errorHelp': 'Veuillez réessayer ou nous contacter directement à hello@bluelogik.com',
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
    
    // Service Details - Business Optimization
    'services.optimization.feature1': 'Интеллектуальная автоматизация рабочих процессов',
    'services.optimization.feature2': 'Алгоритмы приоритизации задач',
    'services.optimization.feature3': 'Оптимизация распределения ресурсов',
    'services.optimization.feature4': 'Мониторинг производительности в реальном времени',
    'services.optimization.feature5': 'Прогнозное планирование обслуживания',
    'services.optimization.benefit1': 'Снижение операционных расходов до 40%',
    'services.optimization.benefit2': 'Повышение производительности на 60%',
    'services.optimization.benefit3': 'Минимизация человеческих ошибок',
    'services.optimization.benefit4': 'Освобождение персонала для стратегических задач',
    'services.optimization.benefit5': 'Автоматизированные операции 24/7',
    'services.optimization.process1': 'Первоначальная оценка бизнес-процессов',
    'services.optimization.process2': 'Настройка модели ИИ',
    'services.optimization.process3': 'Интеграция с существующими системами',
    'services.optimization.process4': 'Обучение персонала',
    'services.optimization.process5': 'Непрерывная оптимизация',
    'services.optimization.cta': 'Начните Оптимизацию Сегодня',
    
    // Service Details - Sales Growth
    'services.sales.feature1': 'Прогнозирование продаж',
    'services.sales.feature2': 'Анализ поведения клиентов',
    'services.sales.feature3': 'Динамическая оптимизация цен',
    'services.sales.feature4': 'Оценка и приоритизация лидов',
    'services.sales.feature5': 'Персонализированные рекомендации',
    'services.sales.benefit1': 'Увеличение продаж до 35%',
    'services.sales.benefit2': 'Улучшение коэффициента конверсии на 50%',
    'services.sales.benefit3': 'Снижение затрат на привлечение клиентов',
    'services.sales.benefit4': 'Повышение пожизненной ценности клиента',
    'services.sales.benefit5': 'Принятие решений на основе данных',
    'services.sales.process1': 'Анализ данных о продажах',
    'services.sales.process2': 'Обучение модели ИИ',
    'services.sales.process3': 'Интеграция с CRM',
    'services.sales.process4': 'Обучение отдела продаж',
    'services.sales.process5': 'Отслеживание производительности',
    'services.sales.cta': 'Увеличьте Ваши Продажи',
    
    // Service Details - Marketing
    'services.marketing.feature1': 'Автоматическая генерация контента',
    'services.marketing.feature2': 'Сегментация аудитории',
    'services.marketing.feature3': 'Оптимизация эффективности кампаний',
    'services.marketing.feature4': 'Многоканальная автоматизация',
    'services.marketing.feature5': 'A/B тестирование в масштабе',
    'services.marketing.benefit1': 'Увеличение ROI до 45%',
    'services.marketing.benefit2': 'Снижение маркетинговых расходов на 30%',
    'services.marketing.benefit3': 'Улучшение показателей вовлеченности',
    'services.marketing.benefit4': 'Персонализированный клиентский опыт',
    'services.marketing.benefit5': 'Оптимизация кампаний в реальном времени',
    'services.marketing.process1': 'Маркетинговый аудит и анализ',
    'services.marketing.process2': 'Разработка стратегии ИИ',
    'services.marketing.process3': 'Интеграция платформ',
    'services.marketing.process4': 'Запуск кампании',
    'services.marketing.process5': 'Непрерывная оптимизация',
    'services.marketing.cta': 'Трансформируйте Ваш Маркетинг',
    
    // Service Details - Social Media
    'services.social.feature1': 'Автоматическое планирование контента',
    'services.social.feature2': 'Анализ настроений',
    'services.social.feature3': 'Определение трендов',
    'services.social.feature4': 'Оптимизация вовлеченности',
    'services.social.feature5': 'Идентификация инфлюенсеров',
    'services.social.benefit1': 'Увеличение вовлеченности на 70%',
    'services.social.benefit2': 'Экономия более 20 часов в неделю',
    'services.social.benefit3': 'Последовательное присутствие бренда',
    'services.social.benefit4': 'Стратегия контента на основе данных',
    'services.social.benefit5': 'Улучшенные отношения с клиентами',
    'services.social.process1': 'Аудит социальных сетей',
    'services.social.process2': 'Настройка инструментов ИИ',
    'services.social.process3': 'Разработка контент-стратегии',
    'services.social.process4': 'Внедрение автоматизации',
    'services.social.process5': 'Мониторинг производительности',
    'services.social.cta': 'Оптимизируйте Социальные Сети',
    
    // Service Details - Data Analysis
    'services.analysis.feature1': 'Прогнозная аналитика',
    'services.analysis.feature2': 'Распознавание паттернов',
    'services.analysis.feature3': 'Обнаружение аномалий',
    'services.analysis.feature4': 'Панели управления в реальном времени',
    'services.analysis.feature5': 'Пользовательская отчетность',
    'services.analysis.benefit1': 'Принимайте решения на основе данных',
    'services.analysis.benefit2': 'Выявляйте скрытые возможности',
    'services.analysis.benefit3': 'Снижайте риски',
    'services.analysis.benefit4': 'Улучшайте точность прогнозов',
    'services.analysis.benefit5': 'Конкурентное преимущество',
    'services.analysis.process1': 'Оценка данных',
    'services.analysis.process2': 'Настройка аналитики',
    'services.analysis.process3': 'Разработка моделей',
    'services.analysis.process4': 'Создание панелей управления',
    'services.analysis.process5': 'Предоставление инсайтов',
    'services.analysis.cta': 'Раскройте Потенциал Ваших Данных',
    
    // Service Details - Integration
    'services.integration.feature1': 'Интеграция API',
    'services.integration.feature2': 'Пользовательские решения ИИ',
    'services.integration.feature3': 'Совместимость с устаревшими системами',
    'services.integration.feature4': 'Облачное развертывание',
    'services.integration.feature5': 'Соответствие требованиям безопасности',
    'services.integration.benefit1': 'Минимальные нарушения работы',
    'services.integration.benefit2': 'Более быстрое внедрение',
    'services.integration.benefit3': 'Масштабируемые решения',
    'services.integration.benefit4': 'Экономически эффективная интеграция',
    'services.integration.benefit5': 'Технологии будущего',
    'services.integration.process1': 'Оценка системы',
    'services.integration.process2': 'Планирование интеграции',
    'services.integration.process3': 'Разработка и тестирование',
    'services.integration.process4': 'Развертывание',
    'services.integration.process5': 'Поддержка и обслуживание',
    'services.integration.cta': 'Начните Интеграцию',
    
    // Service Details - Web Development
    'services.webdev.feature1': 'Умные пользовательские интерфейсы',
    'services.webdev.feature2': 'Механизмы персонализации',
    'services.webdev.feature3': 'Интеграция чат-ботов',
    'services.webdev.feature4': 'Оптимизация производительности',
    'services.webdev.feature5': 'Функции доступности',
    'services.webdev.benefit1': 'Улучшенный пользовательский опыт',
    'services.webdev.benefit2': 'Более высокие коэффициенты конверсии',
    'services.webdev.benefit3': 'Снижение показателей отказов',
    'services.webdev.benefit4': 'Улучшенное SEO',
    'services.webdev.benefit5': 'Конкурентное преимущество',
    'services.webdev.process1': 'Анализ требований',
    'services.webdev.process2': 'Дизайн и прототипирование',
    'services.webdev.process3': 'Разработка',
    'services.webdev.process4': 'Тестирование и оптимизация',
    'services.webdev.process5': 'Запуск и поддержка',
    'services.webdev.cta': 'Создавайте Умные Веб-сайты',
    
    // Service Details - Web Optimization
    'services.webopt.feature1': 'SEO оптимизация',
    'services.webopt.feature2': 'Оптимизация скорости',
    'services.webopt.feature3': 'Оптимизация конверсии',
    'services.webopt.feature4': 'Анализ поведения пользователей',
    'services.webopt.feature5': 'Оптимизация контента',
    'services.webopt.benefit1': 'Улучшение поисковых рейтингов',
    'services.webopt.benefit2': 'Более быстрая загрузка',
    'services.webopt.benefit3': 'Более высокие коэффициенты конверсии',
    'services.webopt.benefit4': 'Лучший пользовательский опыт',
    'services.webopt.benefit5': 'Увеличение доходов',
    'services.webopt.process1': 'Аудит веб-сайта',
    'services.webopt.process2': 'Стратегия оптимизации',
    'services.webopt.process3': 'Внедрение',
    'services.webopt.process4': 'Тестирование и доработка',
    'services.webopt.process5': 'Постоянный мониторинг',
    'services.webopt.cta': 'Оптимизируйте Ваш Сайт',
    
    // Service Details - Website Development
    'services.website.feature1': 'Индивидуальный дизайн веб-сайта',
    'services.website.feature2': 'Адаптивная разработка',
    'services.website.feature3': 'Современные фреймворки (React, Vue, Angular)',
    'services.website.feature4': 'Интеграция CMS',
    'services.website.feature5': 'Оптимизация производительности',
    'services.website.benefit1': 'Профессиональное онлайн-присутствие',
    'services.website.benefit2': 'Мобильный дизайн',
    'services.website.benefit3': 'Быстрая загрузка',
    'services.website.benefit4': 'SEO-готовая структура',
    'services.website.benefit5': 'Масштабируемая архитектура',
    'services.website.process1': 'Сбор требований',
    'services.website.process2': 'Дизайн-макеты',
    'services.website.process3': 'Этап разработки',
    'services.website.process4': 'Тестирование и QA',
    'services.website.process5': 'Запуск и поддержка',
    'services.website.cta': 'Начните Ваш Проект',
    
    // Service Details - Shopify
    'services.shopify.feature1': 'Пользовательские темы Shopify',
    'services.shopify.feature2': 'Разработка приложений',
    'services.shopify.feature3': 'Интеграция платежных шлюзов',
    'services.shopify.feature4': 'Управление запасами',
    'services.shopify.feature5': 'Многоканальные продажи',
    'services.shopify.benefit1': 'Быстрый выход на рынок',
    'services.shopify.benefit2': 'Безопасная обработка платежей',
    'services.shopify.benefit3': 'Мобильно-оптимизированные магазины',
    'services.shopify.benefit4': 'Встроенные функции SEO',
    'services.shopify.benefit5': 'Масштабируемая платформа',
    'services.shopify.process1': 'Планирование магазина',
    'services.shopify.process2': 'Настройка темы',
    'services.shopify.process3': 'Интеграция приложений',
    'services.shopify.process4': 'Настройка продуктов',
    'services.shopify.process5': 'Запуск и обучение',
    'services.shopify.cta': 'Создайте Ваш Магазин',
    
    // Service Details - WooCommerce
    'services.woocommerce.feature1': 'Пользовательские темы WooCommerce',
    'services.woocommerce.feature2': 'Разработка плагинов',
    'services.woocommerce.feature3': 'Интеграция платежей',
    'services.woocommerce.feature4': 'Управление продуктами',
    'services.woocommerce.feature5': 'Интеграция с WordPress',
    'services.woocommerce.benefit1': 'Полный контроль настройки',
    'services.woocommerce.benefit2': 'Экономичное решение',
    'services.woocommerce.benefit3': 'SEO-дружественная платформа',
    'services.woocommerce.benefit4': 'Большая экосистема плагинов',
    'services.woocommerce.benefit5': 'Готовность к контент-маркетингу',
    'services.woocommerce.process1': 'Настройка WordPress',
    'services.woocommerce.process2': 'Конфигурация WooCommerce',
    'services.woocommerce.process3': 'Разработка темы',
    'services.woocommerce.process4': 'Интеграция плагинов',
    'services.woocommerce.process5': 'Тестирование и запуск',
    'services.woocommerce.cta': 'Начните Продавать Онлайн',
    
    // Service Details - BigCommerce
    'services.bigcommerce.feature1': 'Корпоративные функции',
    'services.bigcommerce.feature2': 'API-первая архитектура',
    'services.bigcommerce.feature3': 'Возможность мультимагазина',
    'services.bigcommerce.feature4': 'B2B функциональность',
    'services.bigcommerce.feature5': 'Расширенная аналитика',
    'services.bigcommerce.benefit1': 'Корпоративная масштабируемость',
    'services.bigcommerce.benefit2': 'Без комиссий за транзакции',
    'services.bigcommerce.benefit3': 'Встроенные B2B функции',
    'services.bigcommerce.benefit4': 'Готовность к headless коммерции',
    'services.bigcommerce.benefit5': 'Возможности глобальных продаж',
    'services.bigcommerce.process1': 'Оценка платформы',
    'services.bigcommerce.process2': 'Планирование архитектуры',
    'services.bigcommerce.process3': 'Пользовательская разработка',
    'services.bigcommerce.process4': 'Настройка интеграций',
    'services.bigcommerce.process5': 'Корпоративное развертывание',
    'services.bigcommerce.cta': 'Масштабируйте Ваш Бизнес',
    
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
    'whyai.advantage.stat': 'Увеличение Доходов',
    
    'whyai.efficiency.title': 'Операционная Эффективность',
    'whyai.efficiency.desc': 'ИИ автоматизирует повторяющиеся задачи, снижая операционные расходы до 40% и позволяя вашей команде сосредоточиться на стратегической деятельности.',
    'whyai.efficiency.stat': 'Снижение Затрат',
    
    'whyai.decision.title': 'Улучшенное Принятие Решений',
    'whyai.decision.desc': 'Аналитика на основе данных ИИ обеспечивает лучшие бизнес-решения: 87% руководителей сообщают о более уверенном стратегическом планировании.',
    'whyai.decision.stat': 'Лучшие Решения',
    
    'whyai.experience.title': 'Клиентский Опыт',
    'whyai.experience.desc': 'Персонализация на основе ИИ повышает удовлетворенность клиентов на 35% и улучшает показатели удержания благодаря индивидуальному опыту и поддержке 24/7.',
    'whyai.experience.stat': 'Повышение Удовлетворенности',
    
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
    'contact.form.errorHelp': 'Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую по адресу hello@bluelogik.com',
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

// Helper function to get saved language from localStorage
const getSavedLanguage = (): Language => {
  try {
    const saved = localStorage.getItem('bluelogik-language');
    if (saved && ['en', 'fr', 'ro', 'ru'].includes(saved)) {
      return saved as Language;
    }
  } catch (error) {
    console.error('Error reading language from localStorage:', error);
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  // Save language to localStorage whenever it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('bluelogik-language', lang);
    } catch (error) {
      console.error('Error saving language to localStorage:', error);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
