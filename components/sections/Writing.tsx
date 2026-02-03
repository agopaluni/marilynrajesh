'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { writingContent } from '@/config/content'

interface WritingData {
  introText?: string
  pieces?: Array<{
    title: string
    blurb: string
    tags: string[]
    link: string
  }>
}

export default function Writing({ data }: { data?: WritingData | null }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const intro = data?.introText || writingContent.intro
  const pieces = data?.pieces || writingContent.pieces

  // Dynamic min-height based on content
  const sectionHeight = pieces.length > 4 ? 'min-h-[120vh]' : pieces.length > 2 ? 'min-h-screen' : 'min-h-[80vh]'

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="writing"
      ref={ref}
      className={`relative ${sectionHeight} py-32 px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-secondary mb-8 text-glow">
            Writing
          </h2>
          <p className="text-secondary/80 text-lg lg:text-xl max-w-4xl leading-relaxed">
            {intro}
          </p>
        </motion.div>

        {/* Writing Pieces Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pieces.map((piece, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card p-8 glow-subtle hover:glow-tertiary transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-3 group-hover:text-white transition-colors">
                {piece.title}
              </h3>
              <p className="text-secondary/70 mb-6 leading-relaxed">
                {piece.blurb}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {piece.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={piece.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors group/link"
              >
                <span className="font-medium">Read</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
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
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />
    </section>
  )
}
