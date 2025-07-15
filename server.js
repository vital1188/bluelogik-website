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
You are BlueLogik's AI assistant. BlueLogik is an AI-powered business solutions company based in Chisinau, Moldova.

COMPANY INFORMATION:
- Company: BlueLogik
- Location: Chisinau, Moldova
- Contact: hello@bluelogik.com
- Phone: +373 784 70 679, +1 (202) 394-7341
- Website: bluelogik.com

SERVICES OFFERED:
1. AI Business Optimization - Streamline operations and boost efficiency with intelligent automation
2. AI Sales Growth - Accelerate revenue with data-driven sales strategies and predictive analytics
3. AI Marketing Strategies - Maximize ROI with personalized campaigns and automated customer journeys
4. AI Social Media Management - Engage audiences with intelligent content creation and scheduling
5. AI Data Analysis - Transform raw data into actionable insights for strategic decision-making
6. AI Integration Services - Seamlessly integrate AI solutions into existing business workflows
7. AI Web Development - Build intelligent, responsive websites with AI-enhanced user experiences
8. AI Website Optimization - Improve performance and user engagement through AI-driven insights
9. Website Development - Professional website creation and development services
10. E-commerce Solutions - Shopify, WooCommerce, and BigCommerce development and optimization

KEY FEATURES:
- Custom AI solutions tailored to business needs
- Data-driven insights and analytics
- Automated workflows and processes
- Scalable and secure implementations
- 24/7 support and maintenance
- ROI-focused approach

BUSINESS HOURS:
- Monday-Friday: 9:00 AM - 6:00 PM
- Saturday: 10:00 AM - 4:00 PM
- Sunday: Closed

IMPORTANT GUIDELINES:
- Only answer questions related to BlueLogik, AI, business solutions, and our services
- If asked about unrelated topics, politely redirect to BlueLogik services
- Be helpful, professional, and knowledgeable
- Encourage users to contact us for detailed consultations
- Highlight the benefits of AI for business transformation
- Always maintain a professional and friendly tone
`;

// Mock response function for fallback
const mockChatResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  if (message.includes('service') || message.includes('what do you do')) {
    return "BlueLogik offers AI-powered business solutions including business optimization, sales growth strategies, marketing automation, data analysis, web development, and AI integration services. We help businesses transform their operations with intelligent automation and data-driven insights. Would you like to know more about any specific service?";
  }

  if (message.includes('contact') || message.includes('reach')) {
    return "You can contact BlueLogik at hello@bluelogik.com or call us at +373 784 70 679 (Moldova) or +1 (202) 394-7341 (US). Our business hours are Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM. We're closed on Sundays.";
  }

  if (message.includes('price') || message.includes('cost')) {
    return "Our pricing varies based on your specific needs and project scope. We offer customized AI solutions tailored to your business requirements. I'd recommend contacting our team at hello@bluelogik.com for a detailed consultation and personalized quote.";
  }

  if (message.includes('ai') || message.includes('artificial intelligence')) {
    return "AI can transform your business by automating processes, providing data-driven insights, improving customer experiences, and increasing operational efficiency. BlueLogik specializes in implementing AI solutions that deliver measurable ROI. What specific business challenges are you looking to solve with AI?";
  }

  return "Thank you for your question! I'm here to help you learn about BlueLogik's AI-powered business solutions. We offer services in business optimization, sales growth, marketing automation, data analysis, and web development. How can I assist you in transforming your business with AI?";
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
