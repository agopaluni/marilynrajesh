# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
cd /Users/atharvgopaluni/marilynrajesh.com
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to: **http://localhost:3000**

---

## 📝 First Steps After Installation

### 1. Update Content

Edit **`/config/content.ts`** to customize:
- Hero text
- Writing pieces
- About section
- Contact information
- Social media links

### 2. Add Images

Place your images in **`/public/images/`** directory:
- `marilyn-hero.jpg` - Your hero photo
- `photo-1.jpg` through `photo-10.jpg` - Photography gallery
- `radio-1.jpg` through `radio-3.jpg` - Radio moments
- `aux-1.jpg`, `aux-2.jpg`, `aux-3.jpg` - Auxiliary floating images

### 3. Update Links

In **`/config/content.ts`**, replace placeholder `#` links with:
- Actual article URLs in `writingContent.pieces`
- Radio clips/playlist link in `radioContent.ctaLink`
- Social media URLs in `contactContent.socials`

---

## 🎨 Customization

### Change Colors

Edit **`/tailwind.config.ts`**:
```typescript
colors: {
  primary: '#000000',    // Background
  secondary: '#8daa9d',  // Main text
  tertiary: '#931f1d',   // Accent
}
```

### Adjust Scroll Speed

Edit **`/components/SmoothScrollProvider.tsx`**:
```typescript
duration: 1.2,  // Lower = faster, Higher = slower
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🚀 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms
Run `npm run build` and deploy the `.next` folder

---

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format, compress before upload
2. **Keep images under 500KB** for fast loading
3. **Test on mobile** devices regularly
4. **Use Chrome DevTools** Lighthouse for performance audits

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run lint
```

---

For detailed documentation, see **README.md**
