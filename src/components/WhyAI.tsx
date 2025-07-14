import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Zap, Brain, Users,
  CheckCircle, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyAI: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: t('whyai.advantage.title'),
      description: t('whyai.advantage.desc'),
      stat: '63%',
      statLabel: 'Revenue Increase',
    },
    {
      icon: Zap,
      title: t('whyai.efficiency.title'),
      description: t('whyai.efficiency.desc'),
      stat: '40%',
      statLabel: 'Cost Reduction',
    },
    {
      icon: Brain,
      title: t('whyai.decision.title'),
      description: t('whyai.decision.desc'),
      stat: '87%',
      statLabel: 'Better Decisions',
    },
    {
      icon: Users,
      title: t('whyai.experience.title'),
      description: t('whyai.experience.desc'),
      stat: '35%',
      statLabel: 'Satisfaction Boost',
    },
  ];

  const features = [
    t('whyai.features.realtime'),
    t('whyai.features.predictive'),
    t('whyai.features.automated'),
    t('whyai.features.smart'),
    t('whyai.features.continuous'),
    t('whyai.features.scalable'),
  ];

  return (
    <section id="why-ai" className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="mb-6">{t('whyai.title')}</h2>
          <p className="text-lg">
            {t('whyai.subtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-normal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-thin">{benefit.stat}</span>
                  <span className="text-sm text-gray-500">{benefit.statLabel}</span>
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
          className="border-t border-gray-200 pt-20"
        >
          <h3 className="text-2xl font-light mb-12 text-center">
            {t('whyai.features.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
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
          className="text-center mt-20"
        >
          <a href="#contact" className="btn-minimal-blue group">
            {t('whyai.cta')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAI;
