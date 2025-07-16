# Contact Form Setup Guide

The BlueLogik website contact form is production-ready and uses EmailJS for reliable email delivery in static deployments.

## 🚀 Production Deployment Setup (Netlify/Vercel)

### Step 1: EmailJS Account Setup

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (allows 200 emails/month)

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - For Gmail:
     - Enter your Gmail address
     - Use an App Password (not your regular password)
     - Generate App Password: Google Account → Security → 2-Step Verification → App passwords
   - Note your `Service ID` (e.g., `service_3zm9onf`)

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template ID will be generated (e.g., `template_fw7i97h`)
   
   **Template Configuration:**
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   Content:
   You have received a new message from your BlueLogik website contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from the BlueLogik contact form.
   Reply directly to: {{reply_to}}
   ```
   
   **Template Variables:**
   - `{{to_email}}` - Recipient (hello@bluelogik.com)
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to address

4. **Get Your Public Key**
   - Go to "Account" → "API Keys"
   - Copy your `Public Key` (e.g., `aB58jtG9njRM1RQFF`)

### Step 2: Netlify Environment Variables

1. **In Netlify Dashboard:**
   - Go to your site settings
   - Navigate to "Environment variables"
   - Add these variables:

   ```
   VITE_EMAILJS_SERVICE_ID=service_3zm9onf
   VITE_EMAILJS_TEMPLATE_ID=template_fw7i97h
   VITE_EMAILJS_PUBLIC_KEY=aB58jtG9njRM1RQFF
   VITE_CONTACT_EMAIL=hello@bluelogik.com
   ```

2. **Redeploy your site** after adding environment variables

### Step 3: Verification

1. **Test the contact form** on your live site
2. **Check EmailJS dashboard** for delivery status
3. **Verify email delivery** to hello@bluelogik.com

## 🛠️ Development Setup

For local development, create a `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_3zm9onf
VITE_EMAILJS_TEMPLATE_ID=template_fw7i97h
VITE_EMAILJS_PUBLIC_KEY=aB58jtG9njRM1RQFF
VITE_CONTACT_EMAIL=hello@bluelogik.com
```

## 📧 Email Template Setup Details

### Required Template Variables:
- `to_email` - Set to hello@bluelogik.com
- `from_name` - User's name from form
- `from_email` - User's email from form
- `company` - User's company (optional)
- `message` - User's message
- `reply_to` - Set to user's email for easy replies

### Template Settings:
- **To Email:** `{{to_email}}`
- **From Name:** BlueLogik Contact Form
- **From Email:** Your configured service email
- **Reply To:** `{{reply_to}}`

## 🔧 Features

- ✅ **Production Ready**: Works with static hosting (Netlify, Vercel)
- ✅ **Real Email Delivery**: Uses EmailJS service
- ✅ **Form Validation**: Client-side validation
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Error Handling**: Comprehensive error messages with fallback contact info
- ✅ **Success Feedback**: Confirmation message and form reset
- ✅ **Responsive Design**: Works on all devices
- ✅ **Accessibility**: Screen reader compatible

## 🚨 Troubleshooting

### Common Issues:

1. **"Contact form is currently being configured"**
   - Environment variables not set in Netlify
   - Solution: Add environment variables in Netlify dashboard

2. **"Email service configuration error"**
   - Invalid EmailJS credentials
   - Solution: Verify Service ID, Template ID, and Public Key

3. **"Network error"**
   - Internet connectivity issues
   - Solution: Check connection, try again

4. **Emails not received**
   - Check spam folder
   - Verify EmailJS service configuration
   - Check EmailJS dashboard for delivery logs

### Testing Checklist:

- [ ] EmailJS account created and configured
- [ ] Email service connected (Gmail/Outlook)
- [ ] Email template created with correct variables
- [ ] Environment variables set in Netlify
- [ ] Site redeployed after adding variables
- [ ] Contact form tested on live site
- [ ] Email received at hello@bluelogik.com

## 📊 EmailJS Limits

- **Free Plan**: 200 emails/month
- **Personal Plan**: $15/month for 1,000 emails
- **Professional Plan**: $70/month for 10,000 emails

## 🔒 Security

- ✅ **Public Key Safe**: EmailJS public key is safe to expose in frontend
- ✅ **No Backend Required**: Fully client-side solution
- ✅ **Rate Limiting**: EmailJS provides built-in rate limiting
- ✅ **Spam Protection**: Consider adding CAPTCHA for high-traffic sites

## 📞 Fallback Contact Methods

If the contact form fails, users are provided with direct contact information:
- **Email**: hello@bluelogik.com
- **Phone**: +373 784 70 679 (Moldova)
- **Phone**: +1 (202) 394-7341 (US)
- **Business Hours**: Monday-Friday 9:00 AM - 6:00 PM (Moldova time)

This ensures users can always reach BlueLogik regardless of technical issues.
