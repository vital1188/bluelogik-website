import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceInfo {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: string[];
  cta: string;
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Service data mapping with translation keys
  const services: Record<string, ServiceInfo> = {
    'business-optimization': {
      id: 'business-optimization',
      icon: () => null,
      title: t('services.optimization.title'),
      description: t('services.optimization.desc'),
      features: [
        t('services.optimization.feature1'),
        t('services.optimization.feature2'),
        t('services.optimization.feature3'),
        t('services.optimization.feature4'),
        t('services.optimization.feature5')
      ],
      benefits: [
        t('services.optimization.benefit1'),
        t('services.optimization.benefit2'),
        t('services.optimization.benefit3'),
        t('services.optimization.benefit4'),
        t('services.optimization.benefit5')
      ],
      process: [
        t('services.optimization.process1'),
        t('services.optimization.process2'),
        t('services.optimization.process3'),
        t('services.optimization.process4'),
        t('services.optimization.process5')
      ],
      cta: t('services.optimization.cta')
    },
    'sales-growth': {
      id: 'sales-growth',
      icon: () => null,
      title: t('services.sales.title'),
      description: t('services.sales.desc'),
      features: [
        t('services.sales.feature1'),
        t('services.sales.feature2'),
        t('services.sales.feature3'),
        t('services.sales.feature4'),
        t('services.sales.feature5')
      ],
      benefits: [
        t('services.sales.benefit1'),
        t('services.sales.benefit2'),
        t('services.sales.benefit3'),
        t('services.sales.benefit4'),
        t('services.sales.benefit5')
      ],
      process: [
        t('services.sales.process1'),
        t('services.sales.process2'),
        t('services.sales.process3'),
        t('services.sales.process4'),
        t('services.sales.process5')
      ],
      cta: t('services.sales.cta')
    },
    'marketing-strategies': {
      id: 'marketing-strategies',
      icon: () => null,
      title: t('services.marketing.title'),
      description: t('services.marketing.desc'),
      features: [
        t('services.marketing.feature1'),
        t('services.marketing.feature2'),
        t('services.marketing.feature3'),
        t('services.marketing.feature4'),
        t('services.marketing.feature5')
      ],
      benefits: [
        t('services.marketing.benefit1'),
        t('services.marketing.benefit2'),
        t('services.marketing.benefit3'),
        t('services.marketing.benefit4'),
        t('services.marketing.benefit5')
      ],
      process: [
        t('services.marketing.process1'),
        t('services.marketing.process2'),
        t('services.marketing.process3'),
        t('services.marketing.process4'),
        t('services.marketing.process5')
      ],
      cta: t('services.marketing.cta')
    },
    'social-media': {
      id: 'social-media',
      icon: () => null,
      title: t('services.social.title'),
      description: t('services.social.desc'),
      features: [
        t('services.social.feature1'),
        t('services.social.feature2'),
        t('services.social.feature3'),
        t('services.social.feature4'),
        t('services.social.feature5')
      ],
      benefits: [
        t('services.social.benefit1'),
        t('services.social.benefit2'),
        t('services.social.benefit3'),
        t('services.social.benefit4'),
        t('services.social.benefit5')
      ],
      process: [
        t('services.social.process1'),
        t('services.social.process2'),
        t('services.social.process3'),
        t('services.social.process4'),
        t('services.social.process5')
      ],
      cta: t('services.social.cta')
    },
    'data-analysis': {
      id: 'data-analysis',
      icon: () => null,
      title: t('services.analysis.title'),
      description: t('services.analysis.desc'),
      features: [
        t('services.analysis.feature1'),
        t('services.analysis.feature2'),
        t('services.analysis.feature3'),
        t('services.analysis.feature4'),
        t('services.analysis.feature5')
      ],
      benefits: [
        t('services.analysis.benefit1'),
        t('services.analysis.benefit2'),
        t('services.analysis.benefit3'),
        t('services.analysis.benefit4'),
        t('services.analysis.benefit5')
      ],
      process: [
        t('services.analysis.process1'),
        t('services.analysis.process2'),
        t('services.analysis.process3'),
        t('services.analysis.process4'),
        t('services.analysis.process5')
      ],
      cta: t('services.analysis.cta')
    },
    'integration': {
      id: 'integration',
      icon: () => null,
      title: t('services.integration.title'),
      description: t('services.integration.desc'),
      features: [
        t('services.integration.feature1'),
        t('services.integration.feature2'),
        t('services.integration.feature3'),
        t('services.integration.feature4'),
        t('services.integration.feature5')
      ],
      benefits: [
        t('services.integration.benefit1'),
        t('services.integration.benefit2'),
        t('services.integration.benefit3'),
        t('services.integration.benefit4'),
        t('services.integration.benefit5')
      ],
      process: [
        t('services.integration.process1'),
        t('services.integration.process2'),
        t('services.integration.process3'),
        t('services.integration.process4'),
        t('services.integration.process5')
      ],
      cta: t('services.integration.cta')
    },
    'web-development': {
      id: 'web-development',
      icon: () => null,
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      features: [
        t('services.webdev.feature1'),
        t('services.webdev.feature2'),
        t('services.webdev.feature3'),
        t('services.webdev.feature4'),
        t('services.webdev.feature5')
      ],
      benefits: [
        t('services.webdev.benefit1'),
        t('services.webdev.benefit2'),
        t('services.webdev.benefit3'),
        t('services.webdev.benefit4'),
        t('services.webdev.benefit5')
      ],
      process: [
        t('services.webdev.process1'),
        t('services.webdev.process2'),
        t('services.webdev.process3'),
        t('services.webdev.process4'),
        t('services.webdev.process5')
      ],
      cta: t('services.webdev.cta')
    },
    'web-optimization': {
      id: 'web-optimization',
      icon: () => null,
      title: t('services.webopt.title'),
      description: t('services.webopt.desc'),
      features: [
        t('services.webopt.feature1'),
        t('services.webopt.feature2'),
        t('services.webopt.feature3'),
        t('services.webopt.feature4'),
        t('services.webopt.feature5')
      ],
      benefits: [
        t('services.webopt.benefit1'),
        t('services.webopt.benefit2'),
        t('services.webopt.benefit3'),
        t('services.webopt.benefit4'),
        t('services.webopt.benefit5')
      ],
      process: [
        t('services.webopt.process1'),
        t('services.webopt.process2'),
        t('services.webopt.process3'),
        t('services.webopt.process4'),
        t('services.webopt.process5')
      ],
      cta: t('services.webopt.cta')
    },
    'website-development': {
      id: 'website-development',
      icon: () => null,
      title: t('services.website.title'),
      description: t('services.website.desc'),
      features: [
        t('services.website.feature1'),
        t('services.website.feature2'),
        t('services.website.feature3'),
        t('services.website.feature4'),
        t('services.website.feature5')
      ],
      benefits: [
        t('services.website.benefit1'),
        t('services.website.benefit2'),
        t('services.website.benefit3'),
        t('services.website.benefit4'),
        t('services.website.benefit5')
      ],
      process: [
        t('services.website.process1'),
        t('services.website.process2'),
        t('services.website.process3'),
        t('services.website.process4'),
        t('services.website.process5')
      ],
      cta: t('services.website.cta')
    },
    'ecommerce-shopify': {
      id: 'ecommerce-shopify',
      icon: () => null,
      title: t('services.shopify.title'),
      description: t('services.shopify.desc'),
      features: [
        t('services.shopify.feature1'),
        t('services.shopify.feature2'),
        t('services.shopify.feature3'),
        t('services.shopify.feature4'),
        t('services.shopify.feature5')
      ],
      benefits: [
        t('services.shopify.benefit1'),
        t('services.shopify.benefit2'),
        t('services.shopify.benefit3'),
        t('services.shopify.benefit4'),
        t('services.shopify.benefit5')
      ],
      process: [
        t('services.shopify.process1'),
        t('services.shopify.process2'),
        t('services.shopify.process3'),
        t('services.shopify.process4'),
        t('services.shopify.process5')
      ],
      cta: t('services.shopify.cta')
    },
    'ecommerce-woocommerce': {
      id: 'ecommerce-woocommerce',
      icon: () => null,
      title: t('services.woocommerce.title'),
      description: t('services.woocommerce.desc'),
      features: [
        t('services.woocommerce.feature1'),
        t('services.woocommerce.feature2'),
        t('services.woocommerce.feature3'),
        t('services.woocommerce.feature4'),
        t('services.woocommerce.feature5')
      ],
      benefits: [
        t('services.woocommerce.benefit1'),
        t('services.woocommerce.benefit2'),
        t('services.woocommerce.benefit3'),
        t('services.woocommerce.benefit4'),
        t('services.woocommerce.benefit5')
      ],
      process: [
        t('services.woocommerce.process1'),
        t('services.woocommerce.process2'),
        t('services.woocommerce.process3'),
        t('services.woocommerce.process4'),
        t('services.woocommerce.process5')
      ],
      cta: t('services.woocommerce.cta')
    },
    'ecommerce-bigcommerce': {
      id: 'ecommerce-bigcommerce',
      icon: () => null,
      title: t('services.bigcommerce.title'),
      description: t('services.bigcommerce.desc'),
      features: [
        t('services.bigcommerce.feature1'),
        t('services.bigcommerce.feature2'),
        t('services.bigcommerce.feature3'),
        t('services.bigcommerce.feature4'),
        t('services.bigcommerce.feature5')
      ],
      benefits: [
        t('services.bigcommerce.benefit1'),
        t('services.bigcommerce.benefit2'),
        t('services.bigcommerce.benefit3'),
        t('services.bigcommerce.benefit4'),
        t('services.bigcommerce.benefit5')
      ],
      process: [
        t('services.bigcommerce.process1'),
        t('services.bigcommerce.process2'),
        t('services.bigcommerce.process3'),
        t('services.bigcommerce.process4'),
        t('services.bigcommerce.process5')
      ],
      cta: t('services.bigcommerce.cta')
    }
  };

  const service = services[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-purple-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            to="/#services" 
            className="inline-flex items-center text-xs md:text-sm text-gray-700 hover:text-blue-600 mb-6 md:mb-8 transition-colors font-medium"
            style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2" />
            <span>{t('serviceDetail.backToServices')}</span>
          </Link>

          {/* Hero Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-4 md:mb-6">
              <span className="gradient-text-blue">AI</span> {service.title.replace('AI ', '').replace('AI-', '')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-4 md:mb-6">
                <span className="gradient-text-blue">{t('serviceDetail.keyFeatures')}</span>
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-800 font-medium"
                          style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-light mb-4 md:mb-6">
                <span className="gradient-text-blue">{t('serviceDetail.benefits')}</span>
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-800 font-medium"
                          style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-light mb-6 md:mb-8 text-center">
              <span className="gradient-text-blue">{t('serviceDetail.process')}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="gradient-text-blue font-medium text-sm md:text-base">{index + 1}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700">{step}</p>
                  {index < service.process.length - 1 && (
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mx-auto mt-3 md:mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-gray-50 to-blue-50/20 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
            <h2 className="text-2xl md:text-3xl font-light mb-3 md:mb-4">
              <span className="gradient-text-blue">{t('serviceDetail.ready')}</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 px-4 md:px-0">
              {t('serviceDetail.discuss')} {service.title} {t('serviceDetail.transform')}
            </p>
            <div className="flex justify-center">
              <Link 
                to="/#contact" 
                className="btn-minimal-blue"
              >
                <span>{service.cta}</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
