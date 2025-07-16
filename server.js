import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

// BlueLogik company knowledge base
const BLUELOGIK_CONTEXT = `
You are BlueLogik's AI assistant. BlueLogik is an AI-powered business solutions company based in Chisinau, Moldova, specializing in transforming businesses through artificial intelligence and modern web technologies.

COMPANY INFORMATION:
- Company: BlueLogik
- Location: Chisinau, Moldova
- Contact: hello@bluelogik.com
- Phone: +373 784 70 679, +1 (202) 394-7341
- Website: bluelogik.com
- Mission: Transform businesses with AI solutions to optimize operations, enhance decision-making, and drive innovation

COMPREHENSIVE SERVICES OFFERED:

1. AI BUSINESS TASK OPTIMIZATION
   - Intelligent workflow automation to streamline operations
   - Task prioritization algorithms for better resource management
   - Resource allocation optimization to reduce waste
   - Real-time performance monitoring and analytics
   - Predictive maintenance scheduling
   - Benefits: Reduce operational costs by up to 40%, increase productivity by 60%, minimize human error, free up staff for strategic tasks, enable 24/7 automated operations

2. AI-ENHANCED SALES GROWTH
   - Predictive sales forecasting using machine learning
   - Customer behavior analysis and insights
   - Dynamic pricing optimization strategies
   - Lead scoring and prioritization systems
   - Personalized product recommendations
   - Benefits: Increase sales by up to 35%, improve conversion rates by 50%, reduce customer acquisition costs, enhance customer lifetime value

3. AI-POWERED MARKETING STRATEGIES
   - Automated content generation and optimization
   - Advanced audience segmentation and targeting
   - Campaign performance optimization in real-time
   - Multi-channel marketing automation
   - A/B testing at scale with AI insights
   - Benefits: Increase ROI by up to 45%, reduce marketing costs by 30%, improve engagement rates, deliver personalized customer experiences

4. AI SOCIAL MEDIA OPTIMIZATION
   - Automated content scheduling and posting
   - Sentiment analysis and brand monitoring
   - Trend identification and viral content prediction
   - Engagement optimization strategies
   - Influencer identification and outreach automation
   - Benefits: Increase engagement by 70%, save 20+ hours per week, maintain consistent brand presence, implement data-driven content strategies

5. ADVANCED AI DATA ANALYSIS
   - Predictive analytics for business forecasting
   - Pattern recognition in complex datasets
   - Anomaly detection for risk management
   - Real-time dashboards and visualization
   - Custom reporting and insights delivery
   - Benefits: Make data-driven decisions, identify hidden opportunities, reduce business risks, improve forecasting accuracy by 87%

6. AI INTEGRATION SERVICES
   - API integration with existing systems
   - Custom AI solution development
   - Legacy system compatibility and modernization
   - Cloud deployment and scaling
   - Security compliance and data protection
   - Benefits: Minimal business disruption, faster implementation, scalable solutions, cost-effective integration

7. WEB DEVELOPMENT WITH AI
   - Smart user interfaces with AI-powered personalization
   - Intelligent chatbot integration
   - Performance optimization using AI insights
   - Accessibility features and compliance
   - Modern frameworks: React, Vue, Angular
   - Benefits: Enhanced user experience, higher conversion rates, reduced bounce rates, improved SEO rankings

8. WEBSITE OPTIMIZATION WITH AI
   - SEO optimization using AI analysis
   - Speed optimization and performance tuning
   - Conversion rate optimization strategies
   - User behavior analysis and insights
   - Content optimization for better engagement
   - Benefits: Improve search rankings, faster load times, higher conversion rates, increased revenue

9. PROFESSIONAL WEBSITE DEVELOPMENT
   - Custom website design and development
   - Responsive design for all devices
   - Modern technology stack implementation
   - CMS integration (WordPress, Drupal, etc.)
   - Performance optimization and security
   - Benefits: Professional online presence, mobile-friendly design, fast loading times, SEO-ready structure

10. E-COMMERCE SOLUTIONS
    - Shopify: Custom themes, app development, payment integration, inventory management, multi-channel selling
    - WooCommerce: Custom themes, plugin development, WordPress integration, cost-effective solutions
    - BigCommerce: Enterprise features, API-first architecture, B2B functionality, global selling capabilities
    - Benefits: Quick time to market, secure payment processing, mobile optimization, scalable platforms

BUSINESS HOURS:
- Monday-Friday: 9:00 AM - 6:00 PM (Moldova time)
- Saturday: 10:00 AM - 4:00 PM (Moldova time)
- Sunday: Closed
- Available 24/7 for urgent business needs

KEY DIFFERENTIATORS:
- 63% of our clients report increased revenue after AI adoption
- Custom AI solutions tailored to specific business needs
- Data-driven approach with measurable ROI
- Comprehensive support from consultation to implementation
- Multilingual support (English, Romanian, French, Russian)
- Proven track record in AI business transformation

PRICING APPROACH:
- Customized pricing based on specific business needs and project scope
- Free initial consultation and business assessment
- Flexible payment options and project phases
- ROI-focused pricing with measurable outcomes
- Contact for detailed quotes and consultations

IMPORTANT GUIDELINES:
- Focus on BlueLogik's AI and web development services
- Emphasize the business benefits and ROI of AI adoption
- Encourage users to contact us for personalized consultations
- Highlight our expertise in AI business transformation
- Be professional, knowledgeable, and solution-oriented
- If asked about unrelated topics, politely redirect to our services
- Always provide specific contact information when requested
- Mention our multilingual capabilities when relevant
`;

// Mock response function for fallback
const mockChatResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
    return "BlueLogik offers comprehensive AI-powered business solutions: 1) AI Business Task Optimization - streamline operations and reduce costs by up to 40%, 2) AI-Enhanced Sales Growth - increase sales by up to 35%, 3) AI-Powered Marketing Strategies - boost ROI by up to 45%, 4) AI Social Media Optimization - increase engagement by 70%, 5) Advanced AI Data Analysis - make data-driven decisions, 6) AI Integration Services - seamlessly integrate AI into existing systems, 7) Web Development with AI - create intelligent websites, 8) Website Optimization with AI - improve performance and SEO, 9) Professional Website Development, and 10) E-commerce Solutions (Shopify, WooCommerce, BigCommerce). Which service interests you most?";
  }

  if (message.includes('contact') || message.includes('reach') || message.includes('phone') || message.includes('email')) {
    return "You can contact BlueLogik at hello@bluelogik.com or call us at +373 784 70 679 (Moldova) or +1 (202) 394-7341 (US). Our business hours are Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM (Moldova time). We're closed on Sundays but available 24/7 for urgent business needs. We also offer multilingual support in English, Romanian, French, and Russian.";
  }

  if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('quote')) {
    return "Our pricing is customized based on your specific business needs and project scope. We offer flexible payment options and project phases with ROI-focused pricing. We provide free initial consultations and business assessments to understand your requirements. For a detailed quote tailored to your business, please contact our team at hello@bluelogik.com or call +373 784 70 679.";
  }

  if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('benefits')) {
    return "AI can transform your business in multiple ways: automate repetitive tasks, provide predictive analytics for better decision-making, optimize operations to reduce costs by up to 40%, increase sales by up to 35%, improve marketing ROI by up to 45%, and enhance customer experiences. 63% of our clients report increased revenue after AI adoption. BlueLogik specializes in implementing custom AI solutions that deliver measurable ROI. What specific business challenges would you like AI to help solve?";
  }

  if (message.includes('optimization') || message.includes('automat')) {
    return "Our AI Business Task Optimization service helps streamline your operations through intelligent workflow automation, task prioritization algorithms, and resource allocation optimization. Benefits include reducing operational costs by up to 40%, increasing productivity by 60%, minimizing human error, and enabling 24/7 automated operations. We also provide real-time performance monitoring and predictive maintenance scheduling. Would you like to learn more about how this can transform your specific business processes?";
  }

  if (message.includes('sales') || message.includes('revenue') || message.includes('growth')) {
    return "Our AI-Enhanced Sales Growth service uses predictive sales forecasting, customer behavior analysis, dynamic pricing optimization, lead scoring, and personalized recommendations to increase your sales by up to 35% and improve conversion rates by 50%. We help reduce customer acquisition costs while enhancing customer lifetime value through data-driven strategies. Contact us at hello@bluelogik.com to discuss how we can boost your sales performance.";
  }

  if (message.includes('marketing') || message.includes('campaign') || message.includes('roi')) {
    return "Our AI-Powered Marketing Strategies include automated content generation, advanced audience segmentation, real-time campaign optimization, multi-channel automation, and A/B testing at scale. Clients typically see ROI increases of up to 45%, marketing cost reductions of 30%, and improved engagement rates through personalized customer experiences. Let's discuss how AI can transform your marketing efforts - contact hello@bluelogik.com.";
  }

  if (message.includes('social media') || message.includes('social') || message.includes('engagement')) {
    return "Our AI Social Media Optimization service provides automated content scheduling, sentiment analysis, trend identification, engagement optimization, and influencer identification. Benefits include increasing engagement by 70%, saving 20+ hours per week, maintaining consistent brand presence, and implementing data-driven content strategies. We help you reach and engage your target audience more effectively. Interested in optimizing your social media presence?";
  }

  if (message.includes('data') || message.includes('analytics') || message.includes('insights')) {
    return "Our Advanced AI Data Analysis service transforms raw data into actionable insights through predictive analytics, pattern recognition, anomaly detection, real-time dashboards, and custom reporting. This helps you make data-driven decisions, identify hidden opportunities, reduce business risks, and improve forecasting accuracy by up to 87%. We can help unlock the value hidden in your business data. What type of data challenges are you facing?";
  }

  if (message.includes('website') || message.includes('web') || message.includes('development')) {
    return "BlueLogik offers both AI-enhanced web development and traditional website development services. Our Web Development with AI includes smart user interfaces, personalization engines, chatbot integration, and performance optimization. We also provide Professional Website Development with custom design, responsive development, modern frameworks (React, Vue, Angular), and CMS integration. Additionally, we offer Website Optimization with AI for SEO, speed, and conversion improvements. Which type of web solution interests you?";
  }

  if (message.includes('ecommerce') || message.includes('e-commerce') || message.includes('shopify') || message.includes('woocommerce') || message.includes('bigcommerce') || message.includes('online store')) {
    return "We provide comprehensive e-commerce solutions: Shopify development with custom themes and app development, WooCommerce development for flexible WordPress-based solutions, and BigCommerce development for enterprise-level scalability. All our e-commerce solutions include payment integration, inventory management, mobile optimization, and SEO features. We help businesses achieve quick time to market with secure, scalable online stores. Which e-commerce platform are you considering?";
  }

  if (message.includes('integration') || message.includes('existing system') || message.includes('legacy')) {
    return "Our AI Integration Services help you seamlessly integrate AI capabilities into your existing systems with minimal business disruption. We provide API integration, custom AI solution development, legacy system compatibility, cloud deployment, and security compliance. Benefits include faster implementation, scalable solutions, and cost-effective integration. We ensure your current systems work harmoniously with new AI capabilities. What systems are you looking to enhance with AI?";
  }

  return "Thank you for your question! I'm BlueLogik's AI assistant, here to help you learn about our comprehensive AI-powered business solutions and web development services. We specialize in transforming businesses through AI optimization, sales growth, marketing automation, data analysis, and modern web technologies. Our clients typically see significant ROI improvements and operational efficiency gains. How can I help you transform your business with AI today?";
};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if OpenAI API key is configured
    if (!process.env.VITE_OPENAI_API_KEY) {
      return res.json({
        message: "I'm currently unavailable. Please contact us directly at hello@bluelogik.com or call +373 784 70 679 for immediate assistance with our AI solutions."
      });
    }

    // Prepare conversation history for OpenAI
    const messages = [
      {
        role: 'system',
        content: BLUELOGIK_CONTEXT
      }
    ];

    // Add conversation history (last 10 messages for context)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.slice(-10).forEach(msg => {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      });
    }

    // Add current user message
    messages.push({
      role: 'user',
      content: message
    });

    try {
      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const response = completion.choices[0]?.message?.content || 
        "I apologize, but I couldn't process your request. Please try again or contact us directly.";

      res.json({ message: response });

    } catch (openaiError) {
      console.error('OpenAI API error:', openaiError);
      
      // Fallback to mock response if OpenAI fails
      const fallbackResponse = mockChatResponse(message);
      res.json({ message: fallbackResponse });
    }

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: "I'm experiencing technical difficulties. Please contact us directly at hello@bluelogik.com or call +373 784 70 679 for immediate assistance with our AI solutions."
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'BlueLogik AI Chat API is running' });
});

app.listen(port, () => {
  console.log(`BlueLogik AI Chat API server running at http://localhost:${port}`);
});
