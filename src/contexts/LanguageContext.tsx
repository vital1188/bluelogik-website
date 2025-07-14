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
  'contact.form.error': 'Failed to send message. Please try again.',
  'contact.info.title': 'Contact Information',
  'contact.info.address': 'Chisinau, Moldova',
  'contact.info.available': 'Available 24/7 for your business needs',
  
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
    
    // Why AI Section
    'whyai.title': 'De Ce Afacerea Ta Are Nevoie de AI',
    'whyai.subtitle': 'Peisajul afacerilor se schimbă rapid. Companiile care adoptă AI acum vor prospera.',
    
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
    'contact.form.error': 'Eroare la trimiterea mesajului. Te rugăm să încerci din nou.',
    'contact.info.title': 'Informații de Contact',
    'contact.info.address': 'Chișinău, Moldova',
    'contact.info.available': 'Disponibili 24/7 pentru nevoile afacerii tale',
    
    // Footer
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
  },
  es: {
    ...baseTranslations,
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
    
    // Why AI Section
    'whyai.title': 'Por Qué Tu Negocio Necesita IA',
    'whyai.subtitle': 'El panorama empresarial está cambiando rápidamente. Las empresas que adopten la IA ahora prosperarán.',
    
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
    'contact.form.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Chisinau, Moldavia',
    'contact.info.available': 'Disponible 24/7 para las necesidades de tu negocio',
    
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
    'services.subtitle': 'Solutions IA complètes conçues pour transformer vos opérations commerciales',
    'services.viewAll': 'Voir Tous les Services',
    'services.learnMore': 'En savoir plus',
    
    // Why AI Section
    'whyai.title': 'Pourquoi Votre Entreprise a Besoin de l\'IA',
    'whyai.subtitle': 'Le paysage commercial évolue rapidement. Les entreprises qui adoptent l\'IA maintenant prospéreront.',
    
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
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Chisinau, Moldavie',
    'contact.info.available': 'Disponible 24/7 pour les besoins de votre entreprise',
    
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
    'services.subtitle': 'Umfassende KI-Lösungen zur Transformation Ihrer Geschäftsabläufe',
    'services.viewAll': 'Alle Dienstleistungen Anzeigen',
    'services.learnMore': 'Mehr erfahren',
    
    // Why AI Section
    'whyai.title': 'Warum Ihr Unternehmen KI Braucht',
    'whyai.subtitle': 'Die Geschäftslandschaft verändert sich schnell. Unternehmen, die jetzt KI einsetzen, werden erfolgreich sein.',
    
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
    'contact.form.error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.address': 'Chisinau, Moldawien',
    'contact.info.available': 'Rund um die Uhr für Ihre Geschäftsbedürfnisse verfügbar',
    
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
    
    // Why AI Section
    'whyai.title': 'Почему Вашему Бизнесу Нужен ИИ',
    'whyai.subtitle': 'Бизнес-ландшафт быстро меняется. Компании, которые внедряют ИИ сейчас, будут процветать.',
    
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
    'contact.form.error': 'Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.',
    'contact.info.title': 'Контактная Информация',
    'contact.info.address': 'Кишинев, Молдова',
    'contact.info.available': 'Доступны 24/7 для ваших бизнес-потребностей',
    
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
