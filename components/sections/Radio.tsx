'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { radioContent } from '@/config/content'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface RadioData {
  introText?: string
  ctaText?: string
  ctaLink?: string
  moments?: Array<{
    asset?: any
    alt: string
  }>
}

export default function Radio({ data }: { data?: RadioData | null }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const intro = data?.introText || radioContent.intro
  const ctaText = data?.ctaText || radioContent.ctaText
  const ctaLink = data?.ctaLink || radioContent.ctaLink
  const moments = data?.moments || radioContent.moments

  // Dynamic min-height based on moments count
  const sectionHeight = moments.length > 4 ? 'min-h-[120vh]' : 'min-h-[90vh]'

  return (
    <section
      id="radio"
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
            Radio
          </h2>
          <p className="text-secondary/80 text-lg lg:text-xl max-w-4xl leading-relaxed mb-12">
            {intro}
          </p>

          {/* CTA Button */}
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-tertiary/20 hover:bg-tertiary/30 text-secondary border border-tertiary/50 rounded-full transition-all duration-300 glow-tertiary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium text-lg">{ctaText}</span>
            <svg
              className="w-6 h-6 transition-transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Radio Moments Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
              className="relative aspect-square rounded-3xl overflow-hidden glass-card glow-subtle hover:glow-tertiary transition-all cursor-pointer"
            >
              {'asset' in moment ? (
                <Image
                  src={urlFor(moment).width(800).height(800).url()}
                  alt={moment.alt || `Radio moment ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-tertiary/30 via-secondary/20 to-secondary/30" />
                  <div className="absolute inset-0 flex items-center justify-center text-secondary/40 text-sm">
                    [Radio Moment {index + 1}]
                  </div>
                </>
              )}
              
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />
    </section>
  )
}
