# AI Chatbot Setup Guide

This guide explains how to set up and configure the AI chatbot for the BlueLogik website.

## Overview

The AI chatbot is designed to answer questions specifically about BlueLogik's services, AI solutions, and business offerings. It uses OpenAI's GPT-4o-mini model to provide intelligent responses while staying focused on company-related topics.

## Features

- **Floating chat button** - Appears in the bottom-right corner of all pages
- **Animated interface** - Smooth animations and transitions
- **Context-aware responses** - Maintains conversation history for better context
- **BlueLogik-focused** - Only answers questions related to the company and services
- **Professional tone** - Maintains a helpful and professional conversation style
- **Fallback responses** - Graceful error handling with contact information

## Setup Instructions

### 1. OpenAI API Key Configuration

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy the API key

### 2. Environment Variables

Add your OpenAI API key to your environment variables:

```bash
# In your .env file
VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
```

**Important**: Never commit your actual API key to version control. The `.env` file is already in `.gitignore`.

### 3. Backend API Endpoint (Production)

For production deployment, you'll need to create a backend API endpoint to handle OpenAI requests securely:

```javascript
// Example backend endpoint (Node.js/Express)
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    
    // Use the handleChatRequest function from src/api/chat.ts
    const response = await handleChatRequest({
      message,
      conversationHistory
    });
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ 
      message: "I'm experiencing technical difficulties. Please contact us directly." 
    });
  }
});
```

### 4. Current Implementation

The chatbot currently uses a mock response system for development/testing. To switch to the real OpenAI API:

1. Set up a backend API endpoint (as shown above)
2. Update the `sendMessage` function in `src/components/AIChatbot.tsx` to use the real API endpoint instead of `mockChatResponse`

## Customization

### Company Knowledge Base

The chatbot's knowledge is defined in `src/api/chat.ts` in the `BLUELOGIK_CONTEXT` constant. Update this section to modify what the chatbot knows about your company:

```typescript
const BLUELOGIK_CONTEXT = `
You are BlueLogik's AI assistant...
// Add or modify company information here
`;
```

### Styling

The chatbot uses Tailwind CSS classes and can be customized by modifying:
- `src/components/AIChatbot.tsx` - Main component styling
- Colors, animations, and layout can be adjusted in the component

### Response Behavior

Modify the mock responses in `src/api/chat.ts` in the `mockChatResponse` function for testing different scenarios.

## Security Considerations

1. **API Key Protection**: Never expose your OpenAI API key in client-side code
2. **Rate Limiting**: Implement rate limiting on your backend API
3. **Input Validation**: Validate and sanitize user inputs
4. **Error Handling**: Provide graceful fallbacks for API failures

## Testing

The chatbot includes several test scenarios in the mock response function:
- Service inquiries
- Contact information requests
- Pricing questions
- AI-related questions
- General fallback responses

## Deployment

1. Set up your backend API endpoint
2. Configure environment variables on your hosting platform
3. Update the chatbot to use the real API endpoint
4. Test thoroughly before going live

## Troubleshooting

### Common Issues

1. **Chatbot not responding**: Check API key configuration and network connectivity
2. **Generic responses**: Verify the company context is properly configured
3. **Styling issues**: Check Tailwind CSS classes and responsive design

### Error Messages

The chatbot provides helpful error messages and always includes contact information as a fallback.

## Support

For technical support with the chatbot implementation, contact the development team or refer to the OpenAI API documentation.
