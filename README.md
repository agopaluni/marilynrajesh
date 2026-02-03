# Marilyn Rajesh Portfolio

A modern, Framer-style portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth scrolling powered by Lenis and content management via Sanity CMS.

## 🎨 Design Features

- **Dark, minimalist aesthetic** with premium motion design
- **Smooth scrolling** with Lenis for a buttery-smooth experience
- **Scroll-based animations** that reveal content as you navigate
- **Infinite scroll format** with clear chapter markers
- **Sticky navigation** with blur effects
- **Bottom UI** with chapter markers and back-to-top button
- **Responsive design** that works beautifully on all devices
- **Accessible** with keyboard navigation and focus states
- **Content Management System** - Update content without touching code

## 🎨 Color Palette

- **Primary**: `#000000` (Background)
- **Secondary**: `#8daa9d` (Main text and UI)
- **Tertiary**: `#931f1d` (Accent color for emphasis)

## 📁 Project Structure

```
marilynrajesh.com/
├── app/
│   ├── globals.css           # Global styles and fonts
│   ├── layout.tsx            # Root layout with Lenis provider
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero/Intro section
│   │   ├── Writing.tsx       # Writing work section
│   │   ├── Photography.tsx   # Photography gallery section
│   │   ├── Radio.tsx         # Radio section
│   │   ├── About.tsx         # About section
│   │   └── Contact.tsx       # Contact form section
│   ├── Navigation.tsx        # Sticky top navigation
│   ├── BottomUI.tsx          # Chapter markers & back-to-top
│   └── SmoothScrollProvider.tsx  # Lenis scroll configuration
├── config/
│   └── content.ts            # ⭐ EDIT THIS FILE to update all content
├── public/
│   └── images/               # Place your images here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Add your images:**
   - Place your images in the `/public/images/` directory
   - Update paths in `/config/content.ts`
   - See `/public/images/README.md` for recommended specifications

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ How Marilyn Updates the Website

**👋 For Marilyn (Non-Technical Content Updates)**

Your website can be updated in two ways:

### Current Method (Before Sanity CMS Setup)
Edit the content file directly at **`/config/content.ts`** and ask your developer to republish the site.

### Future Method (After Sanity CMS Setup - Recommended!)
Use a beautiful web interface at `/studio` to update everything instantly—no code, no Git, no technical knowledge required.

**📖 [Read the Complete Guide for Marilyn →](HOW_TO_UPDATE.md)**

This guide explains:
- How to access your content editor
- How to change text, photos, and links
- How to add new writing pieces or photos
- How updates appear instantly
- Common questions answered

---

## ✏️ Editing Content (For Developers)

All website content can be edited in a single file: **`/config/content.ts`**

### Update Site Information

```typescript
export const siteConfig = {
  name: "Marilyn Rajesh",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}
```

### Update Section Content

Each section has its own content object in `/config/content.ts`:

- `introContent` - Hero section text and images
- `writingContent` - Writing pieces and intro text
- `photographyContent` - Photo gallery images
- `radioContent` - Radio section with CTA link
- `aboutContent` - About section paragraphs
- `contactContent` - Contact section and social links

### Add/Remove Work Items

To add a writing piece:

```typescript
export const writingContent = {
  pieces: [
    {
      title: "Your Article Title",
      blurb: "A short description of the article.",
      tags: ["Tag1", "Tag2"],
      link: "https://link-to-article.com",
    },
    // Add more pieces...
  ],
}
```

### Update Social Links

```typescript
export const contactContent = {
  socials: [
    { label: "Instagram", url: "https://instagram.com/username", icon: "instagram" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
    { label: "Email", url: "mailto:email@example.com", icon: "email" },
  ],
}
```

## 🖼️ Image Management

### Adding Images

1. Place images in `/public/images/`
2. Update paths in `/config/content.ts`
3. Use relative paths: `/images/your-image.jpg`

### Image Specifications

- **Hero image**: 800×1200px (portrait)
- **Auxiliary images**: 300×300px (square)
- **Photography gallery**: 800×600px (landscape)
- **Radio moments**: 800×800px (square)

### Optimization

- Use WebP or optimized JPG formats
- Compress images before upload (TinyPNG, Squoosh)
- Keep file sizes under 500KB for best performance

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

Build the static site:

```bash
npm run build
```

The output will be in the `.next` folder. Deploy this folder to any Node.js hosting service.

## 🎨 Customization

### Change Colors

Edit `/tailwind.config.ts`:

```typescript
colors: {
  primary: '#000000',    // Background
  secondary: '#8daa9d',  // Main text
  tertiary: '#931f1d',   // Accent
}
```

### Adjust Animations

Animation settings are in individual component files. Look for:
- `framer-motion` props like `initial`, `animate`, `transition`
- `useScroll` and `useTransform` hooks for scroll-based animations

### Modify Smooth Scroll

Edit `/components/SmoothScrollProvider.tsx`:

```typescript
const lenis = new Lenis({
  duration: 1.2,        // Scroll duration
  easing: (t) => ...,   // Easing function
  smoothWheel: true,    // Enable smooth wheel scrolling
})
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Fonts**: Inter (sans-serif), Playfair Display (serif)

## 📝 Key Features Explained

### Sticky Navigation

The top navigation bar becomes translucent with a blur effect as you scroll down, maintaining visibility without obstructing content.

### Chapter Markers

The bottom-left chapter markers automatically update based on which section is currently in view using Intersection Observer.

### Smooth Scrolling

Lenis provides hardware-accelerated smooth scrolling that feels natural and responsive.

### Scroll Animations

Framer Motion's `useScroll` and `useTransform` hooks create parallax effects and scroll-triggered animations.

### Photography Gallery

Horizontal scrolling gallery with two rows of images that can be dragged or scrolled.

### Contact Form

Client-side form validation with success animation. The form doesn't connect to a backend by default—integrate your preferred form service (EmailJS, Formspree, etc.) as needed.

## 🤝 Support

For questions or issues, check the code comments or refer to the official documentation:

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lenis Docs](https://github.com/studio-freight/lenis)

## 📄 License

This project is for personal portfolio use.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
