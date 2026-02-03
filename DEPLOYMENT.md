# Deployment Guide

Complete guide to deploying your Marilyn Rajesh portfolio to various platforms.

---

## 🚀 Vercel (Recommended - Easiest)

Vercel is built by the creators of Next.js and offers the best integration.

### Step 1: Push to GitHub

```bash
cd /Users/atharvgopaluni/marilynrajesh.com
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/marilynrajesh.com.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js
6. Click "Deploy"

**Done!** Your site is live in ~2 minutes.

### Custom Domain (Vercel)

1. Go to Project Settings → Domains
2. Add your domain (e.g., `marilynrajesh.com`)
3. Follow DNS configuration instructions
4. Wait for propagation (~24 hours)

---

## 🌊 Netlify

### Option A: GitHub Integration

1. Go to [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Deploy

### Option B: Manual Deploy

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

---

## ☁️ AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. "New app" → "Host web app"
3. Connect GitHub repository
4. Build settings (auto-detected for Next.js):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Save and deploy

---

## 🔷 Azure Static Web Apps

```bash
# Install Azure CLI
npm install -g @azure/static-web-apps-cli

# Build
npm run build

# Deploy
swa deploy
```

Follow prompts to configure and deploy.

---

## 🐳 Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t marilyn-portfolio .
docker run -p 3000:3000 marilyn-portfolio
```

---

## 📊 Google Cloud Run

```bash
# Install gcloud CLI
# https://cloud.google.com/sdk/docs/install

# Build
npm run build

# Deploy
gcloud run deploy marilyn-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## 🔧 Environment Variables

If you add environment variables later (e.g., form backend, analytics):

### Create `.env.local`:

```bash
NEXT_PUBLIC_API_KEY=your_key_here
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

### Add to deployment platform:

**Vercel**: Project Settings → Environment Variables
**Netlify**: Site Settings → Build & Deploy → Environment
**Others**: Follow platform documentation

---

## 🌐 Custom Domain Setup

### DNS Configuration

Point your domain to deployment platform:

**For Vercel:**
```
A Record:  @  →  76.76.21.21
CNAME:     www →  cname.vercel-dns.com
```

**For Netlify:**
```
A Record:  @  →  75.2.60.5
CNAME:     www →  yoursite.netlify.app
```

### SSL Certificate

All modern platforms provide free SSL automatically:
- Vercel: Auto-provisioned
- Netlify: Auto-provisioned via Let's Encrypt
- AWS/Azure/GCP: Can be configured in console

---

## 📈 Post-Deployment Checklist

### 1. Verify Functionality

- [ ] All sections load correctly
- [ ] Smooth scrolling works
- [ ] Animations trigger properly
- [ ] Forms submit successfully
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### 2. Performance Testing

Run these tests:

**Google Lighthouse**
```bash
npm install -g lighthouse
lighthouse https://your-site.com --view
```

**PageSpeed Insights**
Visit: [pagespeed.web.dev](https://pagespeed.web.dev)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

### 3. SEO Setup

Add to `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Marilyn Rajesh - Portfolio',
  description: 'Aspiring journalist. Musician. Media professional.',
  keywords: 'journalism, media, writing, photography, radio',
  authors: [{ name: 'Marilyn Rajesh' }],
  openGraph: {
    title: 'Marilyn Rajesh - Portfolio',
    description: 'Aspiring journalist. Musician. Media professional.',
    url: 'https://marilynrajesh.com',
    siteName: 'Marilyn Rajesh Portfolio',
    images: ['/images/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marilyn Rajesh - Portfolio',
    description: 'Aspiring journalist. Musician. Media professional.',
    images: ['/images/og-image.jpg'],
  },
}
```

### 4. Analytics Setup (Optional)

**Google Analytics:**

```bash
npm install @next/third-parties
```

In `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

**Vercel Analytics:**

```bash
npm install @vercel/analytics
```

```typescript
import { Analytics } from '@vercel/analytics/react'

// Add to layout
<Analytics />
```

---

## 🔄 Continuous Deployment

All Git-connected platforms auto-deploy on push:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Automatic deployment triggered!
```

---

## 🐛 Troubleshooting Deployment

### Build Fails

Check build logs for errors:
- Missing dependencies
- TypeScript errors
- Environment variables

Fix locally first:
```bash
npm run build
```

### Images Not Loading

Ensure images are in `/public/images/` and paths start with `/`:
```typescript
src="/images/photo.jpg"  // ✅ Correct
src="images/photo.jpg"   // ❌ Wrong
```

### Animations Not Working

Check browser console for errors. Ensure:
- Framer Motion installed
- Lenis initialized
- No conflicting CSS

### Domain Not Connecting

- Wait 24-48 hours for DNS propagation
- Verify DNS records with `dig` or `nslookup`
- Check platform documentation

---

## 📞 Platform Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **AWS**: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
- **Azure**: [docs.microsoft.com](https://docs.microsoft.com)

---

## 🎉 You're Live!

Once deployed, share your portfolio:
- Add to LinkedIn
- Share on social media
- Include in email signature
- Add to resume/CV

**Your professional portfolio is now live and accessible to the world!** 🚀
