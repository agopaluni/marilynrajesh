'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/content'

export default function BottomUI() {
  const [activeChapter, setActiveChapter] = useState('intro')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800)
      
      // Determine active chapter based on scroll position
      const sections = siteConfig.chapters.map(chapter => ({
        id: chapter.id,
        element: document.getElementById(chapter.id),
      }))

      // Find which section is currently most visible
      let currentSection = 'intro'
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          // Check if center of viewport is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section.id
          }
        }
      }

      setActiveChapter(currentSection)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Chapter Markers - Bottom Left */}
      <div className="fixed bottom-8 left-8 z-40">
        <div className="flex flex-col gap-2">
          {siteConfig.chapters.map((chapter) => (
            <motion.button
              key={chapter.id}
              onClick={() => scrollToSection(chapter.id)}
              className={`text-left text-sm font-medium transition-all duration-300 relative group ${
                activeChapter === chapter.id
                  ? 'text-secondary'
                  : 'text-secondary/40 hover:text-secondary/70'
              }`}
              whileHover={{ x: 4 }}
            >
              <span className="relative">
                {chapter.label}
                {activeChapter === chapter.id && (
                  <motion.span
                    layoutId="activeChapter"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-tertiary glow-tertiary z-10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Back to Top - Bottom Right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary hover:text-white transition-colors glow-subtle group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
