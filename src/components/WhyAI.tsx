import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Zap, Brain, Users,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyAI: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      titleKey: 'whyai.advantage.title',
      descKey: 'whyai.advantage.desc',
      stat: '63%',
      statLabel: 'Revenue Increase',
    },
    {
      icon: Zap,
      titleKey: 'whyai.efficiency.title',
      descKey: 'whyai.efficiency.desc',
      stat: '40%',
      statLabel: 'Cost Reduction',
    },
    {
      icon: Brain,
      titleKey: 'whyai.decision.title',
      descKey: 'whyai.decision.desc',
      stat: '87%',
      statLabel: 'Better Decisions',
    },
    {
      icon: Users,
      titleKey: 'whyai.experience.title',
      descKey: 'whyai.experience.desc',
      stat: '35%',
      statLabel: 'Happier Customers',
    },
  ];

  const features = [
    'Real-time data processing',
    'Predictive analytics',
    'Automated workflows',
    'Smart recommendations',
    'Continuous learning',
    'Scalable solutions',
  ];

  return (
    <section id="why-ai" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyai.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyai.subtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-gray-600 mb-3">
                  {t(benefit.descKey)}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-purple-600">
                    {benefit.stat}
                  </span>
                  <span className="text-sm text-gray-500">
                    {benefit.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            AI-Powered Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Start Your AI Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAI;
