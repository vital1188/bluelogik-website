import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions: React.FC = () => {
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
            <span className="gradient-text-blue">Terms</span> & Conditions
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
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                By accessing and using BlueLogik's website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              2. Services Description
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                BlueLogik provides AI-powered business solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business process optimization</li>
                <li>Sales growth strategies</li>
                <li>Marketing automation</li>
                <li>Data analysis and insights</li>
                <li>Web development and optimization</li>
                <li>AI integration services</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services 
                at any time without prior notice.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              3. User Responsibilities
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of any login credentials</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              4. Payment Terms
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payments are due as specified in the service agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>All prices are subject to change with notice</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              5. Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                All content, features, and functionality of our services are owned by BlueLogik 
                and are protected by international copyright, trademark, and other intellectual 
                property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works of our 
                content without explicit written permission.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              6. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                BlueLogik shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability shall not exceed the amount paid by you for the specific 
                service giving rise to the claim.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              7. Confidentiality
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We understand the importance of confidentiality in business relationships. 
                Both parties agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep confidential information secure and protected</li>
                <li>Use confidential information only for the intended purpose</li>
                <li>Not disclose confidential information to third parties</li>
                <li>Return or destroy confidential information upon request</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              8. Termination
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                Either party may terminate services with appropriate notice as specified in 
                individual service agreements. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All rights and licenses granted will cease</li>
                <li>Outstanding payments become immediately due</li>
                <li>Confidentiality obligations continue</li>
                <li>Data may be deleted according to our data retention policy</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              9. Governing Law
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                These terms shall be governed by and construed in accordance with the laws of 
                Moldova. Any disputes arising from these terms shall be resolved through 
                appropriate legal channels in Moldova.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              10. Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services 
                constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
                style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)' }}>
              11. Contact Information
            </h2>
            <div className="space-y-4 text-gray-800 font-medium leading-relaxed"
                 style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.03)' }}>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
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
            Ready to get started with our services?
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

export default TermsConditions;
