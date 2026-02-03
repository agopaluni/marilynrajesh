# Project Architecture

## 📐 Architecture Overview

This portfolio site uses a modern **single-page application (SPA)** architecture with **server-side rendering (SSR)** capabilities via Next.js.

### Tech Stack

```
┌─────────────────────────────────────────┐
│          Next.js 14 (App Router)        │
│  ┌─────────────────────────────────┐   │
│  │     React 18 + TypeScript       │   │
│  │  ┌──────────────────────────┐  │   │
│  │  │   Framer Motion          │  │   │
│  │  │   (Animations)           │  │   │
│  │  └──────────────────────────┘  │   │
│  │  ┌──────────────────────────┐  │   │
│  │  │   Lenis                  │  │   │
│  │  │   (Smooth Scrolling)     │  │   │
│  │  └──────────────────────────┘  │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │     Tailwind CSS                │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 🗂️ File Structure

```
marilynrajesh.com/
│
├── 📁 app/                          # Next.js App Router
│   ├── globals.css                  # Global styles, fonts, utilities
│   ├── layout.tsx                   # Root layout with providers
│   └── page.tsx                     # Main page (home)
│
├── 📁 components/                   # React components
│   ├── 📁 sections/                 # Page sections
│   │   ├── Hero.tsx                 # Hero/Intro with parallax
│   │   ├── Writing.tsx              # Writing portfolio grid
│   │   ├── Photography.tsx          # Horizontal scroll gallery
│   │   ├── Radio.tsx                # Radio section with CTA
│   │   ├── About.tsx                # About content
│   │   └── Contact.tsx              # Contact form + socials
│   │
│   ├── Navigation.tsx               # Sticky top nav bar
│   ├── BottomUI.tsx                 # Chapter markers + back-to-top
│   └── SmoothScrollProvider.tsx     # Lenis configuration
│
├── 📁 config/                       # Configuration files
│   └── content.ts                   # ⭐ ALL EDITABLE CONTENT HERE
│
├── 📁 public/                       # Static assets
│   └── 📁 images/                   # Image files
│       └── README.md                # Image specifications
│
├── 📄 package.json                  # Dependencies
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 tailwind.config.ts            # Tailwind customization
├── 📄 next.config.js                # Next.js configuration
├── 📄 postcss.config.js             # PostCSS setup
├── 📄 .eslintrc.js                  # ESLint rules
├── 📄 .gitignore                    # Git ignore patterns
├── 📄 README.md                     # Full documentation
└── 📄 QUICKSTART.md                 # Quick start guide
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────┐
│                  config/content.ts                   │
│         (Single source of truth for all content)     │
└────────────────────┬────────────────────────────────┘
                     │
                     │ Import
                     │
         ┌───────────┴───────────┐
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│  Navigation.tsx │    │   Section       │
│  BottomUI.tsx   │    │   Components    │
└─────────────────┘    └─────────────────┘
         │                       │
         │                       │
         └───────────┬───────────┘
                     │
                     ▼
         ┌─────────────────────┐
         │     app/page.tsx    │
         │   (Main Assembly)   │
         └─────────────────────┘
                     │
                     ▼
         ┌─────────────────────┐
         │   app/layout.tsx    │
         │  (Root + Providers) │
         └─────────────────────┘
```

---

## 🎬 Animation System

### Scroll-Based Animations

```typescript
// Using Framer Motion's useScroll hook
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', 'end start']
})

// Transform scroll progress to values
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
```

### Reveal Animations

```typescript
// Using IntersectionObserver via react-intersection-observer
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
})

// Animate when in view
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
/>
```

---

## 🎯 Component Responsibilities

### Layout Components

**`app/layout.tsx`**
- Wraps entire app
- Provides Lenis smooth scroll
- Sets up HTML structure

**`app/page.tsx`**
- Assembles all sections
- Defines scroll anchors
- Provides section grouping

### UI Components

**`Navigation.tsx`**
- Sticky top navigation
- Smooth scroll to sections
- Dynamic background blur

**`BottomUI.tsx`**
- Chapter progress tracking
- Active section highlighting
- Back-to-top button

### Section Components

Each section is self-contained:
- Hero, Writing, Photography, Radio, About, Contact
- Import their own content from `config/content.ts`
- Handle their own animations
- Manage local state (e.g., form in Contact)

---

## 🎨 Styling Architecture

### Tailwind CSS Setup

```
globals.css
├── @tailwind base      → Reset + base styles
├── @tailwind components → Custom components (.glass-card, .glow-subtle)
└── @tailwind utilities  → Utility classes

Custom Classes:
- .glass-card: Glassmorphism effect
- .glow-subtle: Soft secondary glow
- .glow-tertiary: Accent glow
- .text-glow: Text shadow effect
```

### Color System

```typescript
// tailwind.config.ts
colors: {
  primary: '#000000',    // Background
  secondary: '#8daa9d',  // Text + UI
  tertiary: '#931f1d',   // Accent
}

// Usage in components
className="bg-primary text-secondary border-tertiary"
```

---

## 🔧 Key Technologies Explained

### Lenis Smooth Scroll

Lenis provides momentum-based smooth scrolling:
- Hardware accelerated
- Customizable easing functions
- Works with Framer Motion

### Framer Motion

Powers all animations:
- **useScroll**: Track scroll position
- **useTransform**: Map scroll to values
- **motion components**: Animate any element
- **AnimatePresence**: Exit animations

### Intersection Observer

Detects when sections enter viewport:
- Used for chapter markers
- Triggers reveal animations
- Optimized performance

---

## 📱 Responsive Design

Mobile-first approach using Tailwind breakpoints:

```typescript
// Tailwind breakpoints
sm:  640px   // Small devices
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large screens

// Usage
className="text-4xl lg:text-5xl xl:text-7xl"
```

---

## 🚀 Performance Optimizations

1. **Image Placeholders**: Gradients instead of loading heavy images initially
2. **Lazy Loading**: Components only animate when in view
3. **CSS Optimization**: Tailwind purges unused CSS in production
4. **React Optimization**: Proper use of hooks and memoization
5. **Smooth Scroll**: Hardware acceleration via Lenis

---

## 🔐 Type Safety

TypeScript ensures type safety throughout:
- Props validation
- Content structure
- Event handlers
- API responses (if added)

---

## 📦 Build Process

```
Development:
npm run dev → Next.js dev server with HMR

Production:
npm run build → Optimized production build
  ├── Static pages pre-rendered
  ├── CSS purged and minified
  ├── JavaScript bundled and optimized
  └── Images optimized (when using Next/Image)

npm start → Serve production build
```

---

## 🎯 Editing Workflow

1. **Content Changes**: Edit `config/content.ts`
2. **Style Changes**: Edit Tailwind classes or `globals.css`
3. **Animation Changes**: Edit individual component files
4. **Structure Changes**: Edit `app/page.tsx`

All changes are hot-reloaded instantly in development mode.

---

This architecture ensures:
✅ Easy content management
✅ Smooth performance
✅ Maintainable codebase
✅ Type-safe development
✅ Production-ready output
