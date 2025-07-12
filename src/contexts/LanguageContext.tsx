import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'ro' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
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
    
    // Services Section
    'services.title': 'Our AI Services',
    'services.subtitle': 'Comprehensive AI solutions designed to transform your business operations and drive growth',
    
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
    
    'services.learnMore': 'Learn more',
    
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
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ro: {
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
    
    // Services Section
    'services.title': 'Serviciile Noastre AI',
    'services.subtitle': 'Soluții AI complete concepute pentru a transforma operațiunile afacerii tale și a stimula creșterea',
    
    'services.optimization.title': 'Optimizare Sarcini de Afaceri cu AI',
    'services.optimization.desc': 'Eficientizează operațiunile și automatizează sarcinile repetitive cu soluțiile noastre de optimizare a fluxului de lucru bazate pe AI. Crește eficiența și reduce costurile operaționale.',
    
    'services.sales.title': 'Creștere Vânzări Îmbunătățită cu AI',
    'services.sales.desc': 'Valorifică analizele predictive și informațiile despre clienți pentru a identifica oportunități, optimiza strategiile de prețuri și crește ratele de conversie.',
    
    'services.marketing.title': 'Strategii de Marketing cu AI',
    'services.marketing.desc': 'Creează campanii de marketing bazate pe date cu conținut personalizat și optimizare automată pentru a maximiza ROI și implicarea clienților.',
    
    'services.social.title': 'Optimizare Social Media cu AI',
    'services.social.desc': 'Îmbunătățește-ți prezența pe rețelele sociale cu crearea de conținut, programare și analize de performanță bazate pe AI pentru a ajunge și implica publicul țintă.',
    
    'services.analysis.title': 'Analiză Avansată de Date cu AI',
    'services.analysis.desc': 'Transformă datele brute în informații acționabile cu soluțiile noastre avansate de analiză. Identifică modele, tendințe și oportunități ascunse în datele tale.',
    
    'services.integration.title': 'Servicii de Integrare AI',
    'services.integration.desc': 'Integrează fără probleme capacitățile AI în sistemele și fluxurile de lucru existente cu serviciile noastre personalizate de implementare și integrare.',
    
    'services.webdev.title': 'Dezvoltare Web cu AI',
    'services.webdev.desc': 'Creează site-uri web de ultimă generație cu instrumente de dezvoltare asistate de AI care optimizează codul, designul și experiența utilizatorului pentru performanță maximă.',
    
    'services.webopt.title': 'Optimizare Website cu AI',
    'services.webopt.desc': 'Îmbunătățește performanța, SEO și ratele de conversie ale site-ului tău existent folosind tehnici de analiză și optimizare bazate pe AI.',
    
    'services.learnMore': 'Află mai multe',
    
    // Why AI Section
    'whyai.title': 'De Ce Afacerea Ta Are Nevoie de AI',
    'whyai.subtitle': 'Peisajul afacerilor se schimbă rapid. Companiile care adoptă AI acum vor prospera – cele care nu o fac riscă să rămână în urmă.',
    
    'whyai.advantage.title': 'Avantaj Competitiv',
    'whyai.advantage.desc': 'Companiile care implementează soluții AI obțin un avantaj semnificativ față de concurenți, 63% dintre afaceri raportând venituri crescute după adoptarea AI.',
    
    'whyai.efficiency.title': 'Eficiență Operațională',
    'whyai.efficiency.desc': 'AI automatizează sarcinile repetitive, reducând costurile operaționale cu până la 40% și permițând echipei tale să se concentreze pe activități strategice de mare valoare.',
    
    'whyai.decision.title': 'Luare de Decizii Îmbunătățită',
    'whyai.decision.desc': 'Informațiile bazate pe date din AI permit decizii de afaceri mai bune, 87% dintre directori raportând o planificare strategică mai încrezătoare.',
    
    'whyai.experience.title': 'Experiența Clientului',
    'whyai.experience.desc': 'Personalizarea bazată pe AI crește satisfacția clienților cu 35% și îmbunătățește ratele de retenție prin experiențe personalizate și suport 24/7.',
    
    // Footer
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
  },
  es: {
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
    
    // Services Section
    'services.title': 'Nuestros Servicios de IA',
    'services.subtitle': 'Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio e impulsar el crecimiento',
    
    'services.optimization.title': 'Optimización de Tareas con IA',
    'services.optimization.desc': 'Optimiza operaciones y automatiza tareas repetitivas con nuestras soluciones de optimización de flujo de trabajo impulsadas por IA.',
    
    'services.sales.title': 'Crecimiento de Ventas con IA',
    'services.sales.desc': 'Aprovecha análisis predictivos e información del cliente para identificar oportunidades y aumentar las tasas de conversión.',
    
    'services.marketing.title': 'Estrategias de Marketing con IA',
    'services.marketing.desc': 'Crea campañas de marketing basadas en datos con contenido personalizado y optimización automática.',
    
    'services.social.title': 'Optimización de Redes Sociales con IA',
    'services.social.desc': 'Mejora tu presencia en redes sociales con creación de contenido, programación y análisis de rendimiento impulsados por IA.',
    
    'services.analysis.title': 'Análisis de Datos Avanzado con IA',
    'services.analysis.desc': 'Transforma datos en bruto en información accionable con nuestras soluciones de análisis avanzado.',
    
    'services.integration.title': 'Servicios de Integración de IA',
    'services.integration.desc': 'Integra sin problemas las capacidades de IA en tus sistemas y flujos de trabajo existentes.',
    
    'services.webdev.title': 'Desarrollo Web con IA',
    'services.webdev.desc': 'Crea sitios web de vanguardia con herramientas de desarrollo asistidas por IA.',
    
    'services.webopt.title': 'Optimización de Sitios Web con IA',
    'services.webopt.desc': 'Mejora el rendimiento, SEO y tasas de conversión de tu sitio web existente usando técnicas de IA.',
    
    'services.learnMore': 'Saber más',
    
    // Why AI Section
    'whyai.title': 'Por Qué Tu Negocio Necesita IA',
    'whyai.subtitle': 'El panorama empresarial está cambiando rápidamente. Las empresas que adopten la IA ahora prosperarán.',
    
    'whyai.advantage.title': 'Ventaja Competitiva',
    'whyai.advantage.desc': 'Las empresas que implementan soluciones de IA obtienen una ventaja significativa sobre los competidores.',
    
    'whyai.efficiency.title': 'Eficiencia Operativa',
    'whyai.efficiency.desc': 'La IA automatiza tareas repetitivas, reduciendo los costos operativos hasta en un 40%.',
    
    'whyai.decision.title': 'Mejor Toma de Decisiones',
    'whyai.decision.desc': 'Los conocimientos basados en datos de la IA permiten mejores decisiones empresariales.',
    
    'whyai.experience.title': 'Experiencia del Cliente',
    'whyai.experience.desc': 'La personalización impulsada por IA aumenta la satisfacción del cliente en un 35%.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
  fr: {
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
    
    // Services Section
    'services.title': 'Nos Services IA',
    'services.subtitle': 'Solutions IA complètes conçues pour transformer vos opérations commerciales',
    
    'services.optimization.title': 'Optimisation des Tâches avec IA',
    'services.optimization.desc': 'Rationalisez les opérations et automatisez les tâches répétitives avec nos solutions IA.',
    
    'services.sales.title': 'Croissance des Ventes avec IA',
    'services.sales.desc': 'Exploitez l\'analyse prédictive pour identifier les opportunités et augmenter les conversions.',
    
    'services.marketing.title': 'Stratégies Marketing avec IA',
    'services.marketing.desc': 'Créez des campagnes marketing basées sur les données avec du contenu personnalisé.',
    
    'services.social.title': 'Optimisation des Médias Sociaux avec IA',
    'services.social.desc': 'Améliorez votre présence sur les réseaux sociaux avec la création de contenu alimentée par l\'IA.',
    
    'services.analysis.title': 'Analyse de Données Avancée avec IA',
    'services.analysis.desc': 'Transformez les données brutes en informations exploitables avec nos solutions d\'analyse.',
    
    'services.integration.title': 'Services d\'Intégration IA',
    'services.integration.desc': 'Intégrez facilement les capacités IA dans vos systèmes existants.',
    
    'services.webdev.title': 'Développement Web avec IA',
    'services.webdev.desc': 'Créez des sites web de pointe avec des outils de développement assistés par IA.',
    
    'services.webopt.title': 'Optimisation de Sites Web avec IA',
    'services.webopt.desc': 'Améliorez les performances, le référencement et les taux de conversion de votre site web.',
    
    'services.learnMore': 'En savoir plus',
    
    // Why AI Section
    'whyai.title': 'Pourquoi Votre Entreprise a Besoin de l\'IA',
    'whyai.subtitle': 'Le paysage commercial évolue rapidement. Les entreprises qui adoptent l\'IA maintenant prospéreront.',
    
    'whyai.advantage.title': 'Avantage Concurrentiel',
    'whyai.advantage.desc': 'Les entreprises qui mettent en œuvre des solutions IA obtiennent un avantage significatif.',
    
    'whyai.efficiency.title': 'Efficacité Opérationnelle',
    'whyai.efficiency.desc': 'L\'IA automatise les tâches répétitives, réduisant les coûts opérationnels jusqu\'à 40%.',
    
    'whyai.decision.title': 'Prise de Décision Améliorée',
    'whyai.decision.desc': 'Les informations basées sur les données de l\'IA permettent de meilleures décisions commerciales.',
    
    'whyai.experience.title': 'Expérience Client',
    'whyai.experience.desc': 'La personnalisation alimentée par l\'IA augmente la satisfaction client de 35%.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
  },
  de: {
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
    
    // Services Section
    'services.title': 'Unsere KI-Dienstleistungen',
    'services.subtitle': 'Umfassende KI-Lösungen zur Transformation Ihrer Geschäftsabläufe',
    
    'services.optimization.title': 'KI-Geschäftsaufgabenoptimierung',
    'services.optimization.desc': 'Optimieren Sie Abläufe und automatisieren Sie repetitive Aufgaben mit unseren KI-Lösungen.',
    
    'services.sales.title': 'KI-gestütztes Umsatzwachstum',
    'services.sales.desc': 'Nutzen Sie prädiktive Analysen zur Identifizierung von Chancen und Steigerung der Konversionsraten.',
    
    'services.marketing.title': 'KI-gestützte Marketingstrategien',
    'services.marketing.desc': 'Erstellen Sie datengesteuerte Marketingkampagnen mit personalisierten Inhalten.',
    
    'services.social.title': 'KI-Social-Media-Optimierung',
    'services.social.desc': 'Verbessern Sie Ihre Social-Media-Präsenz mit KI-gestützter Content-Erstellung.',
    
    'services.analysis.title': 'Erweiterte KI-Datenanalyse',
    'services.analysis.desc': 'Verwandeln Sie Rohdaten in verwertbare Erkenntnisse mit unseren Analyselösungen.',
    
    'services.integration.title': 'KI-Integrationsdienste',
    'services.integration.desc': 'Integrieren Sie KI-Funktionen nahtlos in Ihre bestehenden Systeme.',
    
    'services.webdev.title': 'Webentwicklung mit KI',
    'services.webdev.desc': 'Erstellen Sie hochmoderne Websites mit KI-unterstützten Entwicklungstools.',
    
    'services.webopt.title': 'Website-Optimierung mit KI',
    'services.webopt.desc': 'Verbessern Sie die Leistung, SEO und Konversionsraten Ihrer Website mit KI.',
    
    'services.learnMore': 'Mehr erfahren',
    
    // Why AI Section
    'whyai.title': 'Warum Ihr Unternehmen KI Braucht',
    'whyai.subtitle': 'Die Geschäftslandschaft verändert sich schnell. Unternehmen, die jetzt KI einsetzen, werden florieren.',
    
    'whyai.advantage.title': 'Wettbewerbsvorteil',
    'whyai.advantage.desc': 'Unternehmen, die KI-Lösungen implementieren, erhalten einen erheblichen Vorteil.',
    
    'whyai.efficiency.title': 'Betriebliche Effizienz',
    'whyai.efficiency.desc': 'KI automatisiert repetitive Aufgaben und reduziert Betriebskosten um bis zu 40%.',
    
    'whyai.decision.title': 'Verbesserte Entscheidungsfindung',
    'whyai.decision.desc': 'Datengestützte Erkenntnisse aus KI ermöglichen bessere Geschäftsentscheidungen.',
    
    'whyai.experience.title': 'Kundenerfahrung',
    'whyai.experience.desc': 'KI-gestützte Personalisierung erhöht die Kundenzufriedenheit um 35%.',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.whyAI': 'Почему ИИ',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Трансформируйте Ваш Бизнес с Решениями ИИ',
    'hero.subtitle': 'Используйте силу искусственного интеллекта для оптимизации операций и стимулирования инноваций.',
    'hero.cta': 'Начать',
    'hero.learnMore': 'Узнать Больше',
    
    // Services Section
    'services.title': 'Наши Услуги ИИ',
    'services.subtitle': 'Комплексные решения ИИ для трансформации вашего бизнеса',
    
    'services.optimization.title': 'Оптимизация Бизнес-Задач с ИИ',
    'services.optimization.desc': 'Оптимизируйте операции и автоматизируйте повторяющиеся задачи с нашими решениями ИИ.',
    
    'services.sales.title': 'Рост Продаж с ИИ',
    'services.sales.desc': 'Используйте предиктивную аналитику для выявления возможностей и увеличения конверсии.',
    
    'services.marketing.title': 'Маркетинговые Стратегии с ИИ',
    'services.marketing.desc': 'Создавайте маркетинговые кампании на основе данных с персонализированным контентом.',
    
    'services.social.title': 'Оптимизация Социальных Сетей с ИИ',
    'services.social.desc': 'Улучшите свое присутствие в социальных сетях с помощью создания контента на основе ИИ.',
    
    'services.analysis.title': 'Расширенный Анализ Данных с ИИ',
    'services.analysis.desc': 'Превратите необработанные данные в полезную информацию с нашими решениями.',
    
    'services.integration.title': 'Услуги Интеграции ИИ',
    'services.integration.desc': 'Легко интегрируйте возможности ИИ в ваши существующие системы.',
    
    'services.webdev.title': 'Веб-разработка с ИИ',
    'services.webdev.desc': 'Создавайте передовые веб-сайты с инструментами разработки на основе ИИ.',
    
    'services.webopt.title': 'Оптимизация Веб-сайтов с ИИ',
    'services.webopt.desc': 'Улучшите производительность, SEO и коэффициенты конверсии вашего сайта.',
    
    'services.learnMore': 'Узнать больше',
    
    // Why AI Section
    'whyai.title': 'Почему Вашему Бизнесу Нужен ИИ',
    'whyai.subtitle': 'Бизнес-ландшафт быстро меняется. Компании, которые внедряют ИИ сейчас, будут процветать.',
    
    'whyai.advantage.title': 'Конкурентное Преимущество',
    'whyai.advantage.desc': 'Компании, внедряющие решения ИИ, получают значительное преимущество.',
    
    'whyai.efficiency.title': 'Операционная Эффективность',
    'whyai.efficiency.desc': 'ИИ автоматизирует повторяющиеся задачи, снижая операционные расходы до 40%.',
    
    'whyai.decision.title': 'Улучшенное Принятие Решений',
    'whyai.decision.desc': 'Аналитика на основе данных ИИ позволяет принимать лучшие бизнес-решения.',
    
    'whyai.experience.title': 'Клиентский Опыт',
    'whyai.experience.desc': 'Персонализация на основе ИИ увеличивает удовлетворенность клиентов на 35%.',
    
    // Footer
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия Использования',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
