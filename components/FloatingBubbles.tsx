'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface BubbleImage {
  asset?: any
  alt?: string
}

interface FloatingBubblesProps {
  bubbles?: BubbleImage[] | null
}

// Placeholder bubbles for when Sanity isn't populated
const placeholderBubbles: BubbleImage[] = [
  { alt: 'Placeholder 1' },
  { alt: 'Placeholder 2' },
  { alt: 'Placeholder 3' },
  { alt: 'Placeholder 4' },
  { alt: 'Placeholder 5' },
  { alt: 'Placeholder 6' },
]

export default function FloatingBubbles({ bubbles }: FloatingBubblesProps) {
  const [randomizedBubbles, setRandomizedBubbles] = useState<BubbleImage[]>([])

  useEffect(() => {
    // Get bubbles to display
    const sourceBubbles = bubbles && bubbles.length > 0 ? bubbles : placeholderBubbles
    
    // Shuffle and take exactly 6
    const shuffled = [...sourceBubbles].sort(() => Math.random() - 0.5)
    setRandomizedBubbles(shuffled.slice(0, 6))
  }, [bubbles])

  if (randomizedBubbles.length === 0) return null

  // Generate random positions and sizes for each bubble
  const generateRandomSize = () => {
    const baseSize = 20 + Math.random() * 12 // 20-32 in Tailwind units (80-128px)
    return Math.round(baseSize)
  }

  const positions = [
    { top: '15%', left: '5%', size: generateRandomSize(), scrollRange: [0, 1000] },
    { top: '30%', right: '8%', size: generateRandomSize(), scrollRange: [800, 2000] },
    { top: '50%', left: '3%', size: generateRandomSize(), scrollRange: [1600, 2800] },
    { top: '65%', right: '5%', size: generateRandomSize(), scrollRange: [2400, 3600] },
    { top: '80%', left: '7%', size: generateRandomSize(), scrollRange: [3200, 4400] },
    { top: '40%', right: '10%', size: generateRandomSize(), scrollRange: [4000, 5200] },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {randomizedBubbles.map((bubble, index) => {
        const position = positions[index]
        if (!position) return null

        return (
          <Bubble
            key={index}
            bubble={bubble}
            position={position}
            index={index}
          />
        )
      })}
    </div>
  )
}

function Bubble({
  bubble,
  position,
  index,
}: {
  bubble: BubbleImage
  position: any
  index: number
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate if bubble should be visible based on scroll position
  const [minScroll, maxScroll] = position.scrollRange
  const isInRange = scrollY >= minScroll && scrollY <= maxScroll
  
  // Calculate opacity based on position within range
  const rangeSize = maxScroll - minScroll
  const fadeInEnd = minScroll + rangeSize * 0.2
  const fadeOutStart = maxScroll - rangeSize * 0.2
  
  let opacity = 0
  if (scrollY >= minScroll && scrollY <= fadeInEnd) {
    // Fade in
    opacity = (scrollY - minScroll) / (fadeInEnd - minScroll) * 0.6
  } else if (scrollY > fadeInEnd && scrollY < fadeOutStart) {
    // Fully visible
    opacity = 0.6
  } else if (scrollY >= fadeOutStart && scrollY <= maxScroll) {
    // Fade out
    opacity = (maxScroll - scrollY) / (maxScroll - fadeOutStart) * 0.6
  }

  return (
    <motion.div
      animate={{ 
        opacity: opacity,
        y: [0, -20, 0, 20, 0],
        x: [0, 15, -8, 12, 0],
        rotate: [0, 3, -2, 5, 0],
      }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeOut' },
        y: { duration: 15 + index * 2, repeat: Infinity, ease: 'easeInOut' },
        x: { duration: 12 + index * 2, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 18 + index * 2, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{
        position: 'absolute',
        width: `${position.size * 4}px`,
        height: `${position.size * 4}px`,
        ...position,
      }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden glass-card glow-subtle">
        {bubble.asset ? (
          <Image
            src={urlFor(bubble.asset).width(400).height(400).url()}
            alt={bubble.alt || 'Floating bubble'}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-secondary/30 to-tertiary/40 backdrop-blur-sm" />
        )}
      </div>
    </motion.div>
  )
}
