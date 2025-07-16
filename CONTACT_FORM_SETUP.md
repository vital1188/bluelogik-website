# Contact Form Setup Guide

The BlueLogik website contact form is production-ready and supports two methods for sending emails:

## Method 1: EmailJS (Recommended for Frontend-Only)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your `Service ID`

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:

   **Subject:** New Contact Form Submission from {{from_name}}
   
   **Content:**
   ```
   You have received a new message from your website contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   
   Message:
   {{message}}
   
   ---
   Reply directly to: {{reply_to}}
   ```
   
   - Set "To Email" to: {{to_email}}
   - Note your `Template ID`

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your `Public Key`

5. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Method 2: Backend API (For Production)

If EmailJS is not configured, the form will automatically fall back to sending a POST request to `/api/contact`.

### Backend Implementation Example (Node.js/Express):

```javascript
app.post('/api/contact', async (req, res) => {
  const { to, from, name, company, message } = req.body;
  
  // Use your preferred email service (SendGrid, Nodemailer, etc.)
  try {
    await sendEmail({
      to: to, // hello@bluelogik.com
      from: 'noreply@bluelogik.com',
      replyTo: from,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${from}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});
```

## Features

- ✅ Real email sending (not simulation)
- ✅ EmailJS integration for frontend-only deployment
- ✅ Automatic fallback to backend API
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Automatic form reset after submission
- ✅ Responsive design
- ✅ Accessibility compliant

## Testing

1. Fill out the form with test data
2. Submit the form
3. Check the configured email (hello@bluelogik.com) for the message
4. If using EmailJS, check your EmailJS dashboard for email history

## Security Notes

- Never commit `.env` files to version control
- EmailJS public key is safe to expose in frontend code
- For production, consider implementing rate limiting
- Add CAPTCHA for spam prevention if needed
