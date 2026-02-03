'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { siteConfig } from '@/config/content'
import { useTheme } from './ThemeProvider'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0)')
  const { theme, toggleTheme } = useTheme()
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollProgress = Math.min(window.scrollY / 100, 1)
      if (theme === 'dark') {
        setBgColor(`rgba(0, 0, 0, ${scrollProgress * 0.8})`)
      } else {
        setBgColor(`rgba(252, 231, 199, ${scrollProgress * 0.8})`)
      }
    }
    
    handleScroll() // Initial call
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [theme])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      style={{ backgroundColor: bgColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#intro')}
            className="font-serif text-xl font-semibold text-secondary hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {siteConfig.name}
          </motion.button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary hover:opacity-80 transition-opacity text-sm font-medium relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tertiary group-hover:w-full transition-all duration-300 z-10" />
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="text-secondary hover:opacity-80 transition-opacity p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
