import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, TrendingUp, Megaphone, Share2, 
  BarChart3, Puzzle, Code2, Search,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'business-optimization',
      icon: Zap,
      titleKey: 'services.optimization.title',
      descKey: 'services.optimization.desc',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'sales-growth',
      icon: TrendingUp,
      titleKey: 'services.sales.title',
      descKey: 'services.sales.desc',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'marketing-strategies',
      icon: Megaphone,
      titleKey: 'services.marketing.title',
      descKey: 'services.marketing.desc',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'social-media',
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'data-analysis',
      icon: BarChart3,
      titleKey: 'services.analysis.title',
      descKey: 'services.analysis.desc',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'integration',
      icon: Puzzle,
      titleKey: 'services.integration.title',
      descKey: 'services.integration.desc',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'web-development',
      icon: Code2,
      titleKey: 'services.webdev.title',
      descKey: 'services.webdev.desc',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'web-optimization',
      icon: Search,
      titleKey: 'services.webopt.title',
      descKey: 'services.webopt.desc',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 card-hover"
            >
              <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {t(service.descKey)}
              </p>
              
              <Link
                to={`/services/${service.id}`}
                className={`inline-flex items-center text-sm font-medium ${service.color} hover:underline`}
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex items-center">
            View All Services
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
