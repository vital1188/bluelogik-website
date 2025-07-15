# BlueLogik AI Chatbot - Usage Guide

## Quick Start

The BlueLogik AI chatbot is now fully functional with OpenAI integration! Here's how to use it:

### Running the Application

You have two options to run the application:

#### Option 1: Run Both Servers Separately (Recommended for Development)

1. **Start the backend API server:**
   ```bash
   npm run server
   ```
   This starts the Express server on `http://localhost:3001`

2. **In a new terminal, start the frontend:**
   ```bash
   npm run dev
   ```
   This starts the Vite dev server on `http://localhost:5173` (or next available port)

#### Option 2: Run Both Servers Together (Coming Soon)
```bash
npm run dev:full
```
*Note: This requires the `concurrently` package to be properly configured*

### Using the Chatbot

1. **Open your website** at `http://localhost:5173` (or the port shown in your terminal)

2. **Look for the blue chat button** in the bottom-right corner of the page

3. **Click the chat button** to open the AI assistant

4. **Ask questions** about BlueLogik's services, AI solutions, or business needs

5. **Get intelligent responses** powered by OpenAI's GPT-4o-mini model

### Example Questions to Try

- "What services do you offer?"
- "How can AI help my business grow?"
- "Tell me about your pricing"
- "What is business process optimization?"
- "How do I contact BlueLogik?"
- "What are your business hours?"

### Features

✅ **Real AI Responses**: Powered by OpenAI GPT-4o-mini  
✅ **BlueLogik Context**: Focused on company services and AI solutions  
✅ **Professional Tone**: Maintains helpful, knowledgeable responses  
✅ **Fallback System**: Uses mock responses if API fails  
✅ **Conversation History**: Maintains context throughout the chat  
✅ **Responsive Design**: Works on desktop and mobile  
✅ **Smooth Animations**: Professional UI with Framer Motion  

### Troubleshooting

**Chatbot not responding with AI answers?**
- Make sure the backend server is running (`npm run server`)
- Check that your OpenAI API key is set in the `.env` file
- Look for any error messages in the browser console or server terminal

**Backend server won't start?**
- Make sure you have installed all dependencies: `npm install`
- Check that your `.env` file contains the OpenAI API key
- Ensure port 3001 is not being used by another application

**Frontend not connecting to backend?**
- Verify the backend is running on `http://localhost:3001`
- Check browser console for CORS or network errors
- Make sure both servers are running simultaneously

### API Key Setup

Make sure your `.env` file contains:
```
VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### Production Deployment

For production deployment, you'll need to:
1. Deploy the backend server to a hosting service
2. Update the API endpoint URL in the frontend code
3. Set environment variables on your hosting platform
4. Ensure proper CORS configuration for your domain

---

**Need Help?** Contact the development team or refer to the detailed setup guide in `AI_CHATBOT_SETUP.md`
