'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { introContent } from '@/config/content'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { useTheme } from '@/components/ThemeProvider'

interface HeroData {
  mainHeadline?: string
  subheadline?: string
  ctaText?: string
  heroImage?: any
  auxiliaryImages?: any[]
}

export default function Hero({ data }: { data?: HeroData | null }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const aux1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const aux2Y = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const aux3Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  // Use Sanity data if available, otherwise fall back to config
  const mainHeadline = data?.mainHeadline || introContent.text.split('\n')[0]
  const subheadline = data?.subheadline || introContent.text.split('\n').slice(1).join('\n')
  const ctaText = data?.ctaText || introContent.ctaText
  const heroImage = data?.heroImage
  const auxiliaryImages = data?.auxiliaryImages || []

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-serif font-bold text-secondary leading-tight text-glow text-5xl lg:text-6xl xl:text-7xl"
              >
                {mainHeadline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-serif font-bold text-secondary leading-tight text-glow text-3xl lg:text-4xl xl:text-5xl whitespace-pre-line"
              >
                {subheadline}
              </motion.p>
            </div>

            <motion.button
              onClick={() => scrollToSection(introContent.ctaHref)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 rounded-full transition-all duration-300 glow-subtle hover:glow-tertiary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="font-medium">{ctaText}</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ scale }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass-card glow-subtle">
              {heroImage ? (
                <Image
                  src={urlFor(heroImage).width(800).height(1200).url()}
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-secondary/10 to-tertiary/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-secondary/50 text-sm">
                    [Hero Image: Replace with {introContent.heroImage}]
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Auxiliary Floating Elements */}
      {auxiliaryImages && auxiliaryImages[0] && (
        <motion.div
          style={{ y: aux1Y }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-32 left-8 w-32 h-32 rounded-full overflow-hidden hero-bubble"
        >
          <Image
            src={urlFor(auxiliaryImages[0]).width(300).height(300).url()}
            alt="Auxiliary 1"
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {auxiliaryImages && auxiliaryImages[1] && (
        <motion.div
          style={{ y: aux2Y }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 right-16 w-40 h-40 rounded-full overflow-hidden hero-bubble"
        >
          <Image
            src={urlFor(auxiliaryImages[1]).width(300).height(300).url()}
            alt="Auxiliary 2"
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {auxiliaryImages && auxiliaryImages[2] && (
        <motion.div
          style={{ y: aux3Y }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-32 left-1/4 w-36 h-36 rounded-full overflow-hidden hero-bubble"
        >
          <Image
            src={urlFor(auxiliaryImages[2]).width(300).height(300).url()}
            alt="Auxiliary 3"
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Gradient Overlay - Only show in dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary pointer-events-none" />
      )}
    </section>
  )
}
