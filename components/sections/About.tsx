'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { aboutContent } from '@/config/content'

interface AboutData {
  title?: string
  paragraphs?: string[]
}

export default function About({ data }: { data?: AboutData | null }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const title = data?.title || aboutContent.title
  const paragraphs = data?.paragraphs || aboutContent.paragraphs

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-32 px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl lg:text-5xl font-bold text-secondary mb-16 text-glow"
        >
          {title}
        </motion.h2>

        {/* Content */}
        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="text-secondary/80 text-lg lg:text-xl leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
        />
      </div>

      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-8 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none"
      />
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />
    </section>
  )
}
