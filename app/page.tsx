import Navigation from '@/components/Navigation'
import BottomUI from '@/components/BottomUI'
import FloatingBubbles from '@/components/FloatingBubbles'
import Hero from '@/components/sections/Hero'
import Writing from '@/components/sections/Writing'
import Photography from '@/components/sections/Photography'
import Radio from '@/components/sections/Radio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import { client, isSanityConfigured } from '@/lib/sanity'

// Disable caching for this page to ensure fresh Sanity data
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getContent() {
  // If Sanity is not configured, return null to use fallback content
  if (!isSanityConfigured() || !client) {
    console.log('Sanity not configured - using static content from config/content.ts')
    return null
  }

  try {
    // Fetch with explicit no-cache settings
    const [hero, writing, photography, radio, about, contact, floatingBubbles] = await Promise.all([
      client.fetch('*[_type == "heroSection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "writingSection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "photographySection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "radioSection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "aboutSection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "contactSection"][0]', {}, { cache: 'no-store' }),
      client.fetch('*[_type == "floatingBubbles"][0]', {}, { cache: 'no-store' }),
    ])
    
    console.log('✅ Fetched fresh content from Sanity:', {
      hero: !!hero,
      writing: !!writing,
      photography: !!photography,
      radio: !!radio,
      about: !!about,
      contact: !!contact,
      floatingBubbles: !!floatingBubbles
    })
    
    return { hero, writing, photography, radio, about, contact, floatingBubbles }
  } catch (error) {
    console.error('Failed to fetch content from Sanity - using static content:', error)
    return null
  }
}

export default async function Home() {
  const content = await getContent()

  return (
    <main className="relative min-h-screen">
      <Navigation />
      <BottomUI />
      <FloatingBubbles bubbles={content?.floatingBubbles?.bubbles} />
      
      <div className="relative">
        <Hero data={content?.hero} />
        
        {/* Work Section Container */}
        <section id="work" className="relative">
          <Writing data={content?.writing} />
          <Photography data={content?.photography} />
          <Radio data={content?.radio} />
        </section>
        
        <About data={content?.about} />
        <Contact data={content?.contact} />
      </div>
    </main>
  )
}
