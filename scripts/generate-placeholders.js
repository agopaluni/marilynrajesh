#!/usr/bin/env node

/**
 * Placeholder Image Generator
 * 
 * This script creates simple placeholder images using canvas
 * Run: node scripts/generate-placeholders.js
 * 
 * Note: Install canvas first: npm install canvas
 */

const fs = require('fs')
const path = require('path')

// Check if canvas is installed
try {
  const { createCanvas } = require('canvas')
  
  const imagesDir = path.join(__dirname, '../public/images')
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }
  
  // Image specifications
  const images = [
    { name: 'marilyn-hero.jpg', width: 800, height: 1200, gradient: ['#8daa9d', '#931f1d'] },
    { name: 'aux-1.jpg', width: 300, height: 300, gradient: ['#8daa9d', '#6b8577'] },
    { name: 'aux-2.jpg', width: 300, height: 300, gradient: ['#931f1d', '#6b1410'] },
    { name: 'aux-3.jpg', width: 300, height: 300, gradient: ['#8daa9d', '#931f1d'] },
    ...Array.from({ length: 10 }, (_, i) => ({
      name: `photo-${i + 1}.jpg`,
      width: 800,
      height: 600,
      gradient: i % 2 === 0 ? ['#8daa9d', '#6b8577'] : ['#6b8577', '#8daa9d']
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
      name: `radio-${i + 1}.jpg`,
      width: 800,
      height: 800,
      gradient: ['#931f1d', '#8daa9d']
    })),
  ]
  
  // Generate images
  images.forEach(({ name, width, height, gradient }) => {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    
    // Create gradient
    const grd = ctx.createLinearGradient(0, 0, width, height)
    grd.addColorStop(0, gradient[0])
    grd.addColorStop(1, gradient[1])
    
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, width, height)
    
    // Add text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.font = 'bold 24px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name, width / 2, height / 2)
    
    // Save
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 })
    fs.writeFileSync(path.join(imagesDir, name), buffer)
    console.log(`✓ Generated ${name}`)
  })
  
  console.log('\n✅ All placeholder images generated!')
  console.log('📁 Location: /public/images/')
  console.log('\n⚠️  Replace these with your actual images before deploying.')
  
} catch (error) {
  console.log('⚠️  Canvas module not installed.')
  console.log('\nTo generate placeholder images:')
  console.log('1. Install canvas: npm install canvas')
  console.log('2. Run: node scripts/generate-placeholders.js')
  console.log('\nAlternatively, manually add your images to /public/images/')
}
