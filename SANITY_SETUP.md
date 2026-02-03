# Sanity CMS Setup Guide

Complete guide for setting up Sanity CMS for the Marilyn Rajesh portfolio.

---

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn
- A Sanity account (free at [sanity.io](https://www.sanity.io))

---

## 🚀 Initial Setup

### Step 1: Install Dependencies

```bash
cd /Users/atharvgopaluni/marilynrajesh.com
npm install
```

This will install:
- `sanity` - Sanity Studio
- `@sanity/client` - Fetching data
- `@sanity/image-url` - Optimizing images
- `next-sanity` - Next.js integration
- `@sanity/vision` - Query testing tool

### Step 2: Initialize Sanity Project

```bash
npx sanity init
```

You'll be prompted:

1. **Login/Signup** - Use your Sanity account
2. **Create new project?** - Yes
3. **Project name** - "Marilyn Rajesh Portfolio"
4. **Use default dataset?** - Yes (production)
5. **Project output path** - Press Enter (current directory)
6. **Select project template** - Clean project

### Step 3: Copy Project Credentials

After initialization, you'll see:
```
Success! Your project ID is: abc123xyz
```

Copy this project ID.

### Step 4: Create Environment File

Create `.env.local` in your project root:

```bash
touch .env.local
```

Add your credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your-project-id-here` with your actual project ID from Step 3.

### Step 5: Configure CORS

Allow your website to fetch from Sanity:

```bash
npx sanity cors add http://localhost:3000 --credentials
npx sanity cors add https://your-production-domain.com --credentials
```

Replace `your-production-domain.com` with your actual domain.

---

## 📝 Adding Initial Content

### Step 1: Start Sanity Studio

```bash
npm run studio
```

This opens Sanity Studio at `http://localhost:3333`

### Step 2: Create Initial Documents

For each section, create one document:

1. **Hero Section**
   - Click "+ Create" → "Hero Section"
   - Fill in the fields
   - Click "Publish"

2. **Writing Section**
   - Click "+ Create" → "Writing Section"
   - Add your intro text
   - Add 3-6 writing pieces
   - Click "Publish"

3. **Photography Section**
   - Click "+ Create" → "Photography Section"
   - Add intro text
   - Upload 6-15 photos
   - Click "Publish"

4. **Radio Section**
   - Click "+ Create" → "Radio Section"
   - Add intro and link
   - Upload 2-4 photos
   - Click "Publish"

5. **About Section**
   - Click "+ Create" → "About Section"
   - Add 2-5 paragraphs
   - Click "Publish"

6. **Contact Section**
   - Click "+ Create" → "Contact Section"
   - Add social links
   - Click "Publish"

---

## 🌐 Deploying Sanity Studio

### Option 1: Deploy to Sanity's Hosting (Free)

```bash
npm run studio:deploy
```

This creates a URL like: `https://marilyn-portfolio.sanity.studio`

You can now access your studio from anywhere!

### Option 2: Use Built-in Studio Route

Your Next.js site already has Studio built-in at `/studio`:
- Local: `http://localhost:3000/studio`
- Production: `https://your-domain.com/studio`

No separate deployment needed!

---

## 🔒 Production Environment Variables

### For Vercel:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
   NEXT_PUBLIC_SANITY_DATASET = production
   ```
4. Redeploy

### For Netlify:

1. Site Settings → Build & Deploy → Environment
2. Add the same variables
3. Redeploy

### For Other Platforms:

Add the environment variables through your platform's dashboard.

---

## 🎨 Customizing Sanity Studio

### Change Studio Title

Edit `sanity.config.ts`:

```typescript
export default defineConfig({
  name: 'default',
  title: 'Marilyn\'s Portfolio Editor', // Change this
  // ...
})
```

### Change Themes/Colors

Add to `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Marilyn Rajesh Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  // Custom theme
  theme: {
    colors: {
      primary: '#8daa9d',
    },
  },
})
```

---

## 👥 Adding Team Members

### Via Sanity Dashboard:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Click "Members"
4. Click "Invite member"
5. Enter their email
6. Choose role: Admin or Editor
7. Send invite

**Roles:**
- **Admin** - Full control, can add members
- **Editor** - Can edit content only

---

## 🔍 Testing Queries

Use the Vision plugin (included) to test queries:

1. Open Studio
2. Click "Vision" in the top menu
3. Try queries like:
   ```groq
   *[_type == "heroSection"][0]
   ```
4. See results instantly

---

## 📊 Content Model Overview

### Document Types:

```
heroSection (single)
├── mainHeadline: string
├── subheadline: text
├── ctaText: string
├── heroImage: image
└── auxiliaryImages: array<image>

writingSection (single)
├── introText: text
└── pieces: array<object>
    ├── title: string
    ├── blurb: text
    ├── tags: array<string>
    ├── link: url
    └── coverImage: image

photographySection (single)
├── introText: text
└── gallery: array<image>
    ├── caption: string
    └── alt: string

radioSection (single)
├── introText: text
├── ctaText: string
├── ctaLink: url
└── moments: array<image>
    └── alt: string

aboutSection (single)
├── title: string
└── paragraphs: array<text>

contactSection (single)
├── title: string
├── subtitle: string
└── socials: array<object>
    ├── platform: string
    ├── label: string
    └── url: url
```

---

## 🛠️ Maintenance

### Updating Sanity

```bash
npm update sanity @sanity/client @sanity/image-url next-sanity @sanity/vision
```

### Backing Up Content

```bash
npx sanity dataset export production backup.tar.gz
```

### Restoring from Backup

```bash
npx sanity dataset import backup.tar.gz production
```

---

## 🐛 Troubleshooting

### "CORS Error"

Add your domain to CORS:
```bash
npx sanity cors add https://your-domain.com --credentials
```

### "Project not found"

Check `.env.local` has correct project ID:
```bash
cat .env.local
```

### Images not loading

1. Check image URLs are being generated
2. Verify `urlFor` is imported
3. Check Sanity project has images

### Content not updating

1. Check you clicked "Publish"
2. Wait 1-2 minutes
3. Clear browser cache
4. Check environment variables in production

### Studio won't load

1. Check dependencies installed: `npm install`
2. Check `.env.local` exists
3. Restart dev server

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Image URLs](https://www.sanity.io/docs/image-url)
- [Next.js + Sanity Guide](https://www.sanity.io/plugins/next-sanity)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Sanity project created
- [ ] `.env.local` configured locally
- [ ] Environment variables set in production
- [ ] CORS configured for production domain
- [ ] Initial content added to all sections
- [ ] Images uploaded and optimized
- [ ] Studio accessible (via `/studio` or separate URL)
- [ ] Test: Make a change in Studio, verify it appears on site
- [ ] Team members added (if applicable)
- [ ] Backup created

---

## 🎉 You're Ready!

Sanity CMS is now fully integrated. Content updates happen automatically without redeployment!

**Key Benefits:**
- ✅ No code changes needed for content
- ✅ Instant updates (no rebuild/redeploy)
- ✅ Image optimization built-in
- ✅ User-friendly interface
- ✅ Version history
- ✅ Multi-user support
- ✅ Free for small teams

**For Marilyn:**
See [HOW_TO_UPDATE.md](HOW_TO_UPDATE.md) for the nontechnical guide.
