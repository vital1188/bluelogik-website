import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, TrendingUp, Megaphone, Share2, 
  BarChart3, Puzzle, Code2, Search,
  ShoppingCart, Store, ArrowRight
} from 'lucide-react';
const AllServices: React.FC = () => {

  const services = [
    {
      id: 'business-optimization',
      icon: Zap,
      title: 'AI Business Task Optimization',
      description: 'Streamline operations and automate repetitive tasks with our AI-powered workflow optimization solutions.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'sales-growth',
      icon: TrendingUp,
      title: 'AI-Enhanced Sales Growth',
      description: 'Leverage predictive analytics and customer insights to identify opportunities and increase conversion rates.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'marketing-strategies',
      icon: Megaphone,
      title: 'AI-Powered Marketing Strategies',
      description: 'Create data-driven marketing campaigns with personalized content and automated optimization.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'AI Social Media Optimization',
      description: 'Enhance your social media presence with AI-powered content creation and performance analytics.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'data-analysis',
      icon: BarChart3,
      title: 'Advanced AI Data Analysis',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'integration',
      icon: Puzzle,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'web-development',
      icon: Code2,
      title: 'AI-Powered Web Development',
      description: 'Build intelligent websites and applications with AI-enhanced features.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'web-optimization',
      icon: Search,
      title: 'AI Website Optimization',
      description: 'Optimize your website performance with AI-driven insights and automation.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      id: 'website-development',
      icon: Code2,
      title: 'Website Development',
      description: 'Professional website development with modern technologies, responsive design, and optimal performance.',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
    },
    {
      id: 'ecommerce-shopify',
      icon: ShoppingCart,
      title: 'Shopify E-commerce Development',
      description: 'Build powerful online stores with Shopify, including custom themes, apps, and integrations.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'ecommerce-woocommerce',
      icon: Store,
      title: 'WooCommerce Development',
      description: 'Create flexible WordPress-based e-commerce solutions with WooCommerce customization.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'ecommerce-bigcommerce',
      icon: Store,
      title: 'BigCommerce Development',
      description: 'Enterprise-level e-commerce solutions with BigCommerce for scalable online businesses.',
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
            All Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to transform your business with AI and modern web technologies
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
                Learn more
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
            Get Started with Our Services
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AllServices;
