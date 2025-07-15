import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-xs md:text-sm text-gray-700 hover:text-blue-600 mb-6 md:mb-8 transition-colors font-medium"
          style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}
        >
          <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6"
              style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
            <span className="gradient-text-blue">Privacy</span> Policy
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-medium"
             style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                At BlueLogik, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Request information about our services</li>
                <li>Engage with our customer support</li>
              </ul>
              <p>
                The types of information we may collect include your name, email address, phone number, 
                company information, and any other information you choose to provide.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              3. Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who assist us in operating our website and conducting business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              4. Data Security
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              5. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We use cookies and similar tracking technologies to collect and track information about 
                your use of our website. You can control cookies through your browser settings.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              6. Your Rights
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              7. Changes to This Policy
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              8. Contact Us
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: hello@bluelogik.com</li>
                <li>Phone: +373 784 70 679</li>
                <li>Address: Chisinau, Moldova</li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-700 mb-6 font-medium"
             style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
            Have questions about our privacy practices?
          </p>
          <Link 
            to="/#contact" 
            className="btn-minimal-blue"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
