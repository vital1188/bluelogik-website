import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, TrendingUp, Megaphone, Share2, 
  BarChart3, Puzzle, Code, Globe,
  ShoppingBag, Store, Package, CreditCard,
  ArrowLeft, ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AllServices: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    // AI Services
    {
      id: 'business-optimization',
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'sales-growth',
      icon: TrendingUp,
      title: t('services.sales.title'),
      description: t('services.sales.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'marketing-strategies',
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'data-analysis',
      icon: BarChart3,
      title: t('services.analysis.title'),
      description: t('services.analysis.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'integration',
      icon: Puzzle,
      title: t('services.integration.title'),
      description: t('services.integration.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'web-development',
      icon: Code,
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      category: 'AI Solutions',
    },
    {
      id: 'web-optimization',
      icon: Globe,
      title: t('services.webopt.title'),
      description: t('services.webopt.desc'),
      category: 'AI Solutions',
    },
    // E-commerce Services
    {
      id: 'website-development',
      icon: Globe,
      title: t('services.website.title'),
      description: t('services.website.desc'),
      category: 'Web Development',
    },
    {
      id: 'ecommerce-shopify',
      icon: ShoppingBag,
      title: t('services.shopify.title'),
      description: t('services.shopify.desc'),
      category: 'E-commerce',
    },
    {
      id: 'ecommerce-woocommerce',
      icon: Store,
      title: t('services.woocommerce.title'),
      description: t('services.woocommerce.desc'),
      category: 'E-commerce',
    },
    {
      id: 'ecommerce-bigcommerce',
      icon: Package,
      title: t('services.bigcommerce.title'),
      description: t('services.bigcommerce.desc'),
      category: 'E-commerce',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <Link to="/" className="inline-flex items-center text-xs md:text-sm text-gray-600 hover:text-gray-900 mb-6 md:mb-8 transition-colors">
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2" />
            Back to Home
          </Link>
          
          <h1 className="mb-4 md:mb-6">
            <span className="gradient-text-blue">All</span> {t('allServices.title').replace('All ', '')}
          </h1>
          <p className="text-base md:text-lg max-w-3xl">
            {t('allServices.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 mb-12 md:mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-6 md:p-8 group hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white transition-all duration-300 relative overflow-hidden"
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                <div className="flex flex-col h-full relative z-10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  {/* Category */}
                  <span className="text-xs text-gray-500 uppercase tracking-wider mb-3 md:mb-4">
                    {service.category}
                  </span>
                  
                  {/* Icon */}
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-150" />
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-base md:text-lg font-normal mb-2 md:mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <div className="flex items-center text-sm font-light group-hover:text-blue-600 transition-colors duration-300">
                    <span className="mr-2">{t('services.learnMore')}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">
            <span className="gradient-text-blue">{t('allServices.cta')}</span>
          </h2>
          <div className="flex justify-center">
            <Link to="/#contact" className="btn-minimal-blue">
              <span>{t('nav.contact')}</span>
              <ArrowUpRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllServices;
