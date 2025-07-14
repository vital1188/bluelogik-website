import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, TrendingUp, Megaphone, Share2, 
  BarChart3, Puzzle, Code2, Search,
  ShoppingCart, Store, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AllServices: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'business-optimization',
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.desc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'sales-growth',
      icon: TrendingUp,
      title: t('services.sales.title'),
      description: t('services.sales.desc'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'marketing-strategies',
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'data-analysis',
      icon: BarChart3,
      title: t('services.analysis.title'),
      description: t('services.analysis.desc'),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'integration',
      icon: Puzzle,
      title: t('services.integration.title'),
      description: t('services.integration.desc'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'web-development',
      icon: Code2,
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'web-optimization',
      icon: Search,
      title: t('services.webopt.title'),
      description: t('services.webopt.desc'),
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      id: 'website-development',
      icon: Code2,
      title: t('services.website.title'),
      description: t('services.website.desc'),
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
    },
    {
      id: 'ecommerce-shopify',
      icon: ShoppingCart,
      title: t('services.shopify.title'),
      description: t('services.shopify.desc'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'ecommerce-woocommerce',
      icon: Store,
      title: t('services.woocommerce.title'),
      description: t('services.woocommerce.desc'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'ecommerce-bigcommerce',
      icon: Store,
      title: t('services.bigcommerce.title'),
      description: t('services.bigcommerce.desc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('allServices.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('allServices.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 card-hover"
            >
              <div className={`w-14 h-14 rounded-lg ${service.bgColor} flex items-center justify-center mb-6`}>
                <service.icon className={`h-7 w-7 ${service.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <Link
                to={`/services/${service.id}`}
                className={`inline-flex items-center font-medium ${service.color} hover:underline`}
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/#contact" className="btn-primary inline-flex items-center">
            {t('allServices.cta')}
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AllServices;
