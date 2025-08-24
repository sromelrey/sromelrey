# EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Note down your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Message from {{name}} Hello Romel, You have received a new
message from your portfolio website: Name: {{name}} Email: {{email}} Message:
{{message}} Best regards, Your Portfolio Contact Form
```

4. **Note down your Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (e.g., `user_def456`)

### 5. Update Your Code

Replace the placeholders in `app/(sections)/contact-me.tsx`:

```typescript
const result = await emailjs.sendForm(
  "service_abc123", // Your Service ID
  "template_xyz789", // Your Template ID
  formRef.current!,
  "user_def456" // Your Public Key
);
```

## 🔧 Alternative Options

### Option 2: Formspree (Even Simpler)

If you prefer an even simpler solution:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint

```typescript
// Replace EmailJS with Formspree
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    setSubmitStatus({
      type: "error",
      message:
        "Sorry, there was an error sending your message. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 3: Netlify Forms (If Deploying to Netlify)

Add `data-netlify="true"` to your form:

```html
<form data-netlify="true" name="contact" method="POST">
  <!-- form fields -->
</form>
```

## 🎯 Features Added

✅ **Real email sending** - Messages actually reach your inbox  
✅ **Loading states** - Shows spinner while sending  
✅ **Success/Error messages** - User feedback  
✅ **Form validation** - Required fields  
✅ **Form reset** - Clears form after successful submission  
✅ **Disabled state** - Prevents multiple submissions  
✅ **Professional UX** - Smooth animations and transitions

## 🔒 Security Notes

- EmailJS public keys are safe to expose in frontend code
- Consider rate limiting for production use
- Monitor your email service quotas

## 🚀 Testing

1. Fill out the form with test data
2. Submit and check your email
3. Verify success/error messages display correctly
4. Test form reset functionality

## 💡 Pro Tips

- **Customize the email template** to match your brand
- **Add spam protection** with reCAPTCHA if needed
- **Set up email forwarding** to your preferred email client
- **Monitor form submissions** in EmailJS dashboard

Your contact form is now fully functional and will send real emails! 🎉
