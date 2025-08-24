# Environment Variables Setup

## 🔐 Secure Your EmailJS Credentials

### 1. Create Environment File

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 2. Update Contact Form

Replace the hardcoded values in `app/(sections)/contact-me.tsx`:

```typescript
const result = await emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formRef.current!,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

### 3. Add to .gitignore

Make sure `.env.local` is in your `.gitignore`:

```gitignore
# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### 4. Deployment Setup

For production deployment, add these environment variables to your hosting platform:

- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **Railway**: Add in Project Settings → Variables

## 🚨 Important Notes

- Use `NEXT_PUBLIC_` prefix for client-side environment variables
- Never commit `.env.local` to version control
- Keep your credentials secure and private
