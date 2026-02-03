import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Only create client if credentials exist
export const client = projectId ? createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
}) : null

const builder = client ? imageUrlBuilder(client) : null

// Create a chainable fallback that mimics ImageUrlBuilder
const createFallbackBuilder = () => ({
  url: () => '',
  width: () => createFallbackBuilder(),
  height: () => createFallbackBuilder(),
})

export function urlFor(source: any) {
  if (!builder) return createFallbackBuilder()
  return builder.image(source)
}

// Check if Sanity is configured
export const isSanityConfigured = () => !!projectId
