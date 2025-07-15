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
      statLabel: t('whyai.advantage.stat'),
    },
    {
      icon: Zap,
      title: t('whyai.efficiency.title'),
      description: t('whyai.efficiency.desc'),
      stat: '40%',
      statLabel: t('whyai.efficiency.stat'),
    },
    {
      icon: Brain,
      title: t('whyai.decision.title'),
      description: t('whyai.decision.desc'),
      stat: '87%',
      statLabel: t('whyai.decision.stat'),
    },
    {
      icon: Users,
      title: t('whyai.experience.title'),
      description: t('whyai.experience.desc'),
      stat: '35%',
      statLabel: t('whyai.experience.stat'),
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
    <section id="why-ai" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 md:mb-20"
        >
          <h2 className="mb-4 md:mb-6">
            <span className="gradient-text-blue">{t('whyai.title').split(' ')[0]}</span> {t('whyai.title').split(' ').slice(1).join(' ')}
          </h2>
          <p className="text-base md:text-lg">
            {t('whyai.subtitle')}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <benefit.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl font-thin gradient-text-blue">{benefit.stat}</span>
                  <span className="text-xs md:text-sm text-gray-500">{benefit.statLabel}</span>
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
          className="border-t border-blue-100 pt-12 md:pt-20"
        >
          <h3 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-center">
            <span className="gradient-text-blue">{t('whyai.features.title')}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 md:gap-3"
              >
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">{feature}</span>
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
          className="flex justify-center mt-12 md:mt-20"
        >
          <a href="#contact" className="btn-minimal-blue">
            <span>{t('whyai.cta')}</span>
            <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAI;
