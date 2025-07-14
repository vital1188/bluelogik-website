import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background3D from '../../components/Background3D';

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
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Service data mapping
  const services: Record<string, ServiceInfo> = {
    'business-optimization': {
      id: 'business-optimization',
      icon: () => null,
      title: 'AI Business Task Optimization',
      description: 'Transform your business operations with intelligent automation that streamlines workflows, reduces manual tasks, and maximizes efficiency.',
      features: [
        'Intelligent workflow automation',
        'Task prioritization algorithms',
        'Resource allocation optimization',
        'Real-time performance monitoring',
        'Predictive maintenance scheduling'
      ],
      benefits: [
        'Reduce operational costs by up to 40%',
        'Increase productivity by 60%',
        'Minimize human error',
        'Free up staff for strategic tasks',
        '24/7 automated operations'
      ],
      process: [
        'Initial business process assessment',
        'AI model customization',
        'Integration with existing systems',
        'Staff training and onboarding',
        'Continuous optimization'
      ],
      cta: 'Start Optimizing Today'
    },
    'sales-growth': {
      id: 'sales-growth',
      icon: () => null,
      title: 'AI-Enhanced Sales Growth',
      description: 'Leverage predictive analytics and customer insights to identify opportunities, optimize pricing strategies, and increase conversion rates.',
      features: [
        'Predictive sales forecasting',
        'Customer behavior analysis',
        'Dynamic pricing optimization',
        'Lead scoring and prioritization',
        'Personalized recommendations'
      ],
      benefits: [
        'Increase sales by up to 35%',
        'Improve conversion rates by 50%',
        'Reduce customer acquisition costs',
        'Enhanced customer lifetime value',
        'Data-driven decision making'
      ],
      process: [
        'Sales data analysis',
        'AI model training',
        'CRM integration',
        'Sales team training',
        'Performance tracking'
      ],
      cta: 'Boost Your Sales'
    },
    'marketing-strategies': {
      id: 'marketing-strategies',
      icon: () => null,
      title: 'AI-Powered Marketing Strategies',
      description: 'Create data-driven marketing campaigns with personalized content and automated optimization to maximize ROI and customer engagement.',
      features: [
        'Automated content generation',
        'Audience segmentation',
        'Campaign performance optimization',
        'Multi-channel automation',
        'A/B testing at scale'
      ],
      benefits: [
        'Increase ROI by up to 45%',
        'Reduce marketing costs by 30%',
        'Improve engagement rates',
        'Personalized customer experiences',
        'Real-time campaign optimization'
      ],
      process: [
        'Marketing audit and analysis',
        'AI strategy development',
        'Platform integration',
        'Campaign launch',
        'Continuous optimization'
      ],
      cta: 'Transform Your Marketing'
    },
    'social-media': {
      id: 'social-media',
      icon: () => null,
      title: 'AI Social Media Optimization',
      description: 'Enhance your social media presence with AI-powered content creation, scheduling, and performance analytics.',
      features: [
        'Automated content scheduling',
        'Sentiment analysis',
        'Trend identification',
        'Engagement optimization',
        'Influencer identification'
      ],
      benefits: [
        'Increase engagement by 70%',
        'Save 20+ hours per week',
        'Consistent brand presence',
        'Data-driven content strategy',
        'Improved customer relationships'
      ],
      process: [
        'Social media audit',
        'AI tool setup',
        'Content strategy development',
        'Automation implementation',
        'Performance monitoring'
      ],
      cta: 'Optimize Social Media'
    },
    'data-analysis': {
      id: 'data-analysis',
      icon: () => null,
      title: 'Advanced AI Data Analysis',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      features: [
        'Predictive analytics',
        'Pattern recognition',
        'Anomaly detection',
        'Real-time dashboards',
        'Custom reporting'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify hidden opportunities',
        'Reduce risks',
        'Improve forecasting accuracy',
        'Competitive advantage'
      ],
      process: [
        'Data assessment',
        'Analytics setup',
        'Model development',
        'Dashboard creation',
        'Insights delivery'
      ],
      cta: 'Unlock Your Data'
    },
    'integration': {
      id: 'integration',
      icon: () => null,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      features: [
        'API integration',
        'Custom AI solutions',
        'Legacy system compatibility',
        'Cloud deployment',
        'Security compliance'
      ],
      benefits: [
        'Minimal disruption',
        'Faster implementation',
        'Scalable solutions',
        'Cost-effective integration',
        'Future-proof technology'
      ],
      process: [
        'System assessment',
        'Integration planning',
        'Development and testing',
        'Deployment',
        'Support and maintenance'
      ],
      cta: 'Start Integration'
    },
    'web-development': {
      id: 'web-development',
      icon: () => null,
      title: 'AI-Powered Web Development',
      description: 'Build intelligent websites and applications with AI-enhanced features.',
      features: [
        'Smart user interfaces',
        'Personalization engines',
        'Chatbot integration',
        'Performance optimization',
        'Accessibility features'
      ],
      benefits: [
        'Enhanced user experience',
        'Higher conversion rates',
        'Reduced bounce rates',
        'Improved SEO',
        'Competitive edge'
      ],
      process: [
        'Requirements analysis',
        'Design and prototyping',
        'Development',
        'Testing and optimization',
        'Launch and support'
      ],
      cta: 'Build Smart Websites'
    },
    'web-optimization': {
      id: 'web-optimization',
      icon: () => null,
      title: 'AI Website Optimization',
      description: 'Optimize your website performance with AI-driven insights and automation.',
      features: [
        'SEO optimization',
        'Speed optimization',
        'Conversion optimization',
        'User behavior analysis',
        'Content optimization'
      ],
      benefits: [
        'Improve search rankings',
        'Faster load times',
        'Higher conversion rates',
        'Better user experience',
        'Increased revenue'
      ],
      process: [
        'Website audit',
        'Optimization strategy',
        'Implementation',
        'Testing and refinement',
        'Ongoing monitoring'
      ],
      cta: 'Optimize Your Site'
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
    <div className="min-h-screen text-gray-900 relative">
      <Background3D />
      <Navbar />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            to="/#services" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">{step}</p>
                  {index < service.process.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-400 mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our {service.title} can transform your business.
            </p>
            <Link 
              to="/#contact" 
              className="btn-primary inline-flex items-center"
            >
              {service.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
