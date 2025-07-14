import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, TrendingUp, Megaphone, Share2, 
  BarChart3, Puzzle, Code, Globe,
  ShoppingBag, CreditCard, Package, Store,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'business-optimization',
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.desc'),
      category: 'AI',
    },
    {
      id: 'sales-growth',
      icon: TrendingUp,
      title: t('services.sales.title'),
      description: t('services.sales.desc'),
      category: 'AI',
    },
    {
      id: 'marketing-strategies',
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      category: 'AI',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      category: 'AI',
    },
    {
      id: 'data-analysis',
      icon: BarChart3,
      title: t('services.analysis.title'),
      description: t('services.analysis.desc'),
      category: 'AI',
    },
    {
      id: 'integration',
      icon: Puzzle,
      title: t('services.integration.title'),
      description: t('services.integration.desc'),
      category: 'AI',
    },
    {
      id: 'web-development',
      icon: Code,
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      category: 'AI',
    },
    {
      id: 'web-optimization',
      icon: Globe,
      title: t('services.webopt.title'),
      description: t('services.webopt.desc'),
      category: 'AI',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4">{t('services.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 relative overflow-hidden"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-300"
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <service.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-normal mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center text-sm font-light group-hover:text-blue-600 transition-colors duration-300">
                    <span className="mr-2">{t('services.learnMore')}</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-minimal">
            {t('services.viewAll')}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
