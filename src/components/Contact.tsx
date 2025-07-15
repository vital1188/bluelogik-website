import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Check if EmailJS credentials are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        // Fallback to form submission API if EmailJS is not configured
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'hello@bluelogik.com',
            from: formData.email,
            name: formData.name,
            company: formData.company,
            message: formData.message,
          }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to send message. Please try again.');
        }
      } else {
        // Use EmailJS if configured
        await emailjs.send(
          serviceId,
          templateId,
          {
            to_email: 'hello@bluelogik.com',
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not specified',
            message: formData.message,
            reply_to: formData.email,
          },
          publicKey
        );
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'hello@bluelogik.com',
      href: 'mailto:hello@bluelogik.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+373 784 70 679',
      href: 'tel:+37378470679',
      secondary: '+1 (202) 394-7341',
      secondaryHref: 'tel:+12023947341',
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: t('contact.info.address'),
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 md:mb-6">
              <span className="gradient-text-blue">Get</span> {t('contact.title').replace('Get ', '')}
            </h2>
            <p className="text-base md:text-lg mb-8 md:mb-12">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-gray-100 transition-all">
                    <info.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm text-gray-500 mb-1">
                      {info.label}
                    </h4>
                    <a 
                      href={info.href}
                      className="text-sm md:text-base text-gray-900 hover:text-blue-600 transition-colors block"
                    >
                      {info.value}
                    </a>
                    {'secondary' in info && info.secondary && (
                      <a 
                        href={info.secondaryHref}
                        className="text-sm md:text-base text-gray-900 block mt-1 hover:text-blue-600 transition-colors"
                      >
                        {info.secondary}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-gray-100 pt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-4 w-4 text-blue-500" />
                <h4 className="text-sm font-medium">{t('contact.hours.title')}</h4>
              </div>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">{t('contact.hours.weekdays')}</span>
                  <span className="text-gray-900 text-right">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">{t('contact.hours.saturday')}</span>
                  <span className="text-gray-900 text-right">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">{t('contact.hours.sunday')}</span>
                  <span className="text-gray-900 text-right">{t('contact.hours.closed')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/20 p-6 md:p-8 lg:p-12 relative overflow-hidden">
              {/* Gradient decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
              
              <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8">
                <span className="gradient-text-blue">{t('contact.form.title')}</span>
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 md:py-12"
                >
                  <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-600 mx-auto mb-3 md:mb-4" />
                  <h4 className="text-lg md:text-xl font-light mb-2">
                    {t('contact.form.success')}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    {t('contact.form.successDesc')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm text-gray-600 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-minimal"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm text-gray-600 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-minimal"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm text-gray-600 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-minimal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm text-gray-600 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-minimal resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                  
                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-red-800">{error}</p>
                        <p className="text-xs text-red-600 mt-1">
                          Please try again or contact us directly at hello@bluelogik.com
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-minimal-blue w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.send')}
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Response Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-8 p-4 md:p-6 gradient-border-blue"
            >
              <h4 className="text-xs md:text-sm font-medium mb-1 md:mb-2">
                {t('contact.quick.title')}
              </h4>
              <p className="text-xs md:text-sm text-gray-600">
                {t('contact.quick.desc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
