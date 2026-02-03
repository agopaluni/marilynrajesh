'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { photographyContent } from '@/config/content'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface PhotoData {
  asset?: any
  caption?: string
  alt: string
}

interface PhotographyData {
  introText?: string
  gallery?: PhotoData[]
}

export default function Photography({ data }: { data?: PhotographyData | null }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const intro = data?.introText || photographyContent.intro
  const gallery = data?.gallery || photographyContent.gallery

  // Dynamic min-height based on gallery size
  const sectionHeight = gallery.length > 6 ? 'min-h-[120vh]' : gallery.length > 4 ? 'min-h-screen' : 'min-h-[80vh]'

  return (
    <section
      id="photography"
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
            Photography
          </h2>
          <p className="text-secondary/80 text-lg lg:text-xl max-w-4xl leading-relaxed">
            {intro}
          </p>
        </motion.div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative -mx-8 lg:-mx-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-x-auto hide-scrollbar pb-8 px-8 lg:px-16"
            ref={scrollRef}
          >
            {/* Two rows stacked vertically, each scrolling horizontally */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex gap-6">
                {gallery.slice(0, Math.ceil(gallery.length / 2)).map((photo, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex-shrink-0 w-80 h-80 rounded-3xl overflow-hidden glass-card glow-subtle hover:glow-tertiary transition-all cursor-pointer"
                  >
                    {'asset' in photo ? (
                      <Image
                        src={urlFor(photo).width(800).height(600).url()}
                        alt={photo.alt || `Photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-tertiary/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-secondary/40 text-sm">
                          [Photo {index + 1}]
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            
              {/* Row 2 */}
              <div className="flex gap-6">
                {gallery.slice(Math.ceil(gallery.length / 2)).map((photo, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex-shrink-0 w-80 h-80 rounded-3xl overflow-hidden glass-card glow-subtle hover:glow-tertiary transition-all cursor-pointer"
                  >
                    {'asset' in photo ? (
                      <Image
                        src={urlFor(photo).width(800).height(600).url()}
                        alt={photo.alt || `Photo ${Math.ceil(gallery.length / 2) + index + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 via-secondary/20 to-secondary/30" />
                        <div className="absolute inset-0 flex items-center justify-center text-secondary/40 text-sm">
                          [Photo {Math.ceil(gallery.length / 2) + index + 1}]
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-3 text-secondary/60 text-sm mt-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Scroll horizontally to view more</span>
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-sm" />

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
