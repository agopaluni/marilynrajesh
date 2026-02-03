# Customization Guide

Complete guide to customizing every aspect of your portfolio.

---

## 📝 Content Customization

### Location: `/config/content.ts`

This is your **single source of truth** for all content.

### Site Information

```typescript
export const siteConfig = {
  name: "Your Name",  // Changes nav bar and footer
  navigation: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    // Add more nav items if needed
  ],
  chapters: [
    { id: "intro", label: "Intro" },
    // Modify chapter labels
  ],
}
```

### Hero Section

```typescript
export const introContent = {
  text: `Your intro text
Line breaks preserved
Three lines max recommended`,
  ctaText: "Your Button Text",
  ctaHref: "#section-id",
  heroImage: "/images/your-hero.jpg",  // Main photo
  auxiliaryImages: [
    "/images/aux-1.jpg",  // Floating image 1
    "/images/aux-2.jpg",  // Floating image 2
    "/images/aux-3.jpg",  // Floating image 3
  ],
}
```

### Writing Section

```typescript
export const writingContent = {
  intro: "Your intro paragraph...",
  pieces: [
    {
      title: "Article Title",
      blurb: "Short 1-2 sentence description",
      tags: ["Tag1", "Tag2"],
      link: "https://medium.com/@you/article",  // External link
    },
    // Add 3-10 pieces
  ],
}
```

### Photography Section

```typescript
export const photographyContent = {
  intro: "Your photography intro...",
  gallery: [
    { src: "/images/photo-1.jpg", alt: "Description" },
    // Add 6-15 photos for best effect
  ],
}
```

### Radio Section

```typescript
export const radioContent = {
  intro: "Your radio intro...",
  ctaText: "Listen Now",  // Button text
  ctaLink: "https://soundcloud.com/yourprofile",  // External link
  moments: [
    { src: "/images/radio-1.jpg", alt: "Radio moment" },
    // 2-4 photos recommended
  ],
}
```

### About Section

```typescript
export const aboutContent = {
  title: "ABOUT",  // Can customize heading
  paragraphs: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph...",
    // Add 2-5 paragraphs
  ],
}
```

### Contact Section

```typescript
export const contactContent = {
  title: "Let's Connect",
  subtitle: "Invitation message",
  socials: [
    { 
      label: "Instagram", 
      url: "https://instagram.com/username", 
      icon: "instagram" 
    },
    { 
      label: "LinkedIn", 
      url: "https://linkedin.com/in/username", 
      icon: "linkedin" 
    },
    { 
      label: "Email", 
      url: "mailto:you@example.com", 
      icon: "email" 
    },
    // Supported icons: instagram, linkedin, email
  ],
}
```

---

## 🎨 Visual Customization

### Colors

**Location**: `/tailwind.config.ts`

```typescript
colors: {
  primary: '#000000',    // Background color
  secondary: '#8daa9d',  // Main text & UI elements
  tertiary: '#931f1d',   // Accent color (used sparingly)
}
```

**Color Usage Guide:**
- `primary`: Background, main canvas
- `secondary`: All text, borders, UI elements, glows
- `tertiary`: Active states, accents, special highlights

### Typography

**Location**: `/tailwind.config.ts`

```typescript
fontFamily: {
  sans: ['Your Sans Font', 'system-ui', 'sans-serif'],
  serif: ['Your Serif Font', 'serif'],
}
```

**Available Google Fonts**: Change imports in `/app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Merriweather:wght@400;700&display=swap');
```

Popular combinations:
- **Modern**: Inter + Playfair Display (current)
- **Classic**: Roboto + Merriweather
- **Editorial**: Work Sans + Lora
- **Tech**: IBM Plex Sans + IBM Plex Serif

### Glow Effects

**Location**: `/app/globals.css`

```css
.glow-subtle {
  box-shadow: 0 0 20px rgba(141, 170, 157, 0.15);
  /* Increase last number for stronger glow */
}

.glow-tertiary {
  box-shadow: 0 0 15px rgba(147, 31, 29, 0.2);
  /* Adjust for accent glow strength */
}
```

**To add more glow variants:**

```css
.glow-strong {
  box-shadow: 0 0 30px rgba(141, 170, 157, 0.3);
}
```

Use in components:
```typescript
className="glow-strong"
```

---

## ✨ Animation Customization

### Scroll Speed

**Location**: `/components/SmoothScrollProvider.tsx`

```typescript
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration (lower = faster)
  // 0.8 = fast, 1.2 = medium, 1.6 = slow
  
  wheelMultiplier: 1,  // Mouse wheel sensitivity
  // 0.5 = slow, 1 = normal, 2 = fast
})
```

### Animation Timing

**In section components:**

```typescript
// Fade in duration
transition={{ duration: 0.8 }}
// Change 0.8 to 0.4 (faster) or 1.2 (slower)

// Stagger delay
transition={{ delay: 0.2 }}
// Adjust delay between elements

// Spring animations
transition={{ type: 'spring', stiffness: 300, damping: 30 }}
// stiffness: higher = snappier (100-500)
// damping: higher = less bounce (10-50)
```

### Parallax Effects

**Location**: Section components (e.g., `/components/sections/Hero.tsx`)

```typescript
// Parallax amount
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
// Change '50%' to '30%' (less) or '70%' (more)

// Fade out speed
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
// Adjust middle value: 0.8 (subtle) to 0.3 (dramatic)
```

### Hover Effects

```typescript
// In component
whileHover={{ scale: 1.05 }}  // Adjust scale
whileTap={{ scale: 0.95 }}    // Click effect

// Duration
transition={{ duration: 0.3 }}  // Faster or slower
```

---

## 📐 Layout Customization

### Section Spacing

**In section components:**

```typescript
className="py-32"  // Vertical padding
// Options: py-16 (less), py-32 (current), py-48 (more)

className="px-6 lg:px-8"  // Horizontal padding
// Keep consistent across sections
```

### Max Width

```typescript
className="max-w-7xl"  // Container width
// Options:
// max-w-4xl: narrow (about page)
// max-w-5xl: medium (contact)
// max-w-6xl: wide
// max-w-7xl: extra wide (default)
```

### Grid Layouts

**Writing section:**
```typescript
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// Change lg:grid-cols-3 to lg:grid-cols-2 (wider cards)
// or lg:grid-cols-4 (more columns)
```

---

## 🖼️ Image Customization

### Placeholder Gradients

While waiting for real images, customize placeholders:

**Location**: Section component files

```typescript
// Current
<div className="bg-gradient-to-br from-secondary/20 to-tertiary/20" />

// More vibrant
<div className="bg-gradient-to-br from-secondary/40 to-tertiary/40" />

// Reverse direction
<div className="bg-gradient-to-tl from-secondary/20 to-tertiary/20" />
```

### Image Aspect Ratios

```typescript
// Hero image
className="aspect-[3/4]"  // Portrait (current)
// Options: aspect-square, aspect-[4/3], aspect-[16/9]

// Photography gallery
className="w-80 h-64"  // Fixed dimensions
// Adjust: w-96 h-72 (larger), w-64 h-48 (smaller)
```

### Image Optimization

When ready to use real images:

```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-2xl"
  loading="lazy"  // Lazy load
  quality={85}    // Compression (60-100)
/>
```

---

## 🎯 Navigation Customization

### Top Navigation

**Location**: `/components/Navigation.tsx`

**Add more nav items:**
```typescript
// In config/content.ts
navigation: [
  { label: "Home", href: "#intro" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },  // New
  { label: "Contact", href: "#contact" },
]
```

**Change nav bar height:**
```typescript
className="h-20"  // Current
// Options: h-16 (shorter), h-24 (taller)
```

### Chapter Markers

**Location**: `/components/BottomUI.tsx`

**Position:**
```typescript
className="fixed bottom-8 left-8"
// Change to: bottom-12 left-12 (more space)
// or: bottom-4 left-4 (less space)
```

**Hide on mobile:**
```typescript
className="fixed bottom-8 left-8 hidden lg:flex"
// Adds hidden lg:flex
```

---

## 📱 Responsive Customization

### Breakpoint-Specific Styles

Tailwind breakpoints:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

**Example:**
```typescript
className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
// Different sizes at each breakpoint
```

### Mobile-Specific Changes

```typescript
// Hide on mobile
className="hidden md:block"

// Show only on mobile
className="block md:hidden"

// Different layout on mobile
className="flex-col md:flex-row"
```

---

## 🎛️ Advanced Customization

### Add New Section

1. **Create component**: `/components/sections/NewSection.tsx`

```typescript
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function NewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="newsection"
      ref={ref}
      className="relative min-h-screen py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-serif text-5xl font-bold text-secondary mb-16"
        >
          New Section
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. **Add to page**: `/app/page.tsx`

```typescript
import NewSection from '@/components/sections/NewSection'

// In the component
<NewSection />
```

3. **Add to navigation**: `/config/content.ts`

```typescript
navigation: [
  // ... existing items
  { label: "New", href: "#newsection" },
]

chapters: [
  // ... existing chapters
  { id: "newsection", label: "New" },
]
```

### Custom Animations

```typescript
// Define variants
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  },
}

// Use in component
<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

### Form Backend Integration

To connect contact form to a backend:

**Option 1: Formspree**

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Custom API**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setShowSuccess(true)
  }
}
```

---

## 🎨 Theme Variants

### Light Mode (Optional)

To add a light mode toggle:

1. Install next-themes:
```bash
npm install next-themes
```

2. Wrap app with theme provider
3. Add theme toggle button
4. Define light mode colors in Tailwind

---

## 📊 Performance Tuning

### Reduce Animation Complexity

```typescript
// Remove parallax
// const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
// style={{ y }}

// Simpler animations
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
// Instead of multi-property animations
```

### Optimize Images

```bash
# Install sharp for auto-optimization
npm install sharp

# Next.js will auto-optimize with next/image
```

---

## 💡 Tips & Tricks

1. **Test changes locally** before deploying
2. **Keep animations subtle** - less is more
3. **Maintain consistent spacing** across sections
4. **Use semantic HTML** for accessibility
5. **Test on multiple devices** and browsers
6. **Optimize images** before uploading
7. **Keep load time under 3 seconds**
8. **Use system fonts** as fallbacks

---

## 🔧 Troubleshooting Customization

**Styles not applying?**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

**Animations laggy?**
- Reduce animation complexity
- Use `will-change` CSS property
- Test on target devices

**Layout breaking?**
- Check Tailwind classes
- Verify responsive breakpoints
- Test in browser dev tools

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Happy customizing! Make this portfolio truly yours.** ✨
