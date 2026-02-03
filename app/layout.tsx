import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Marilyn Rajesh - Portfolio',
  description: 'Aspiring journalist. Musician. Media professional. Endlessly curious.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="lenis">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Safari-specific color fixes */
            @supports not (color: rgb(0 0 0 / 0.5)) {
              :root {
                --bg-hex: #fce7c7;
                --text-hex: #576b54;
                --accent-hex: #931f1d;
              }
              [data-theme='dark'] {
                --bg-hex: #000000;
                --text-hex: #8daa9d;
                --accent-hex: #931f1d;
              }
              html, body {
                background-color: var(--bg-hex) !important;
                color: var(--text-hex) !important;
              }
              .text-secondary {
                color: var(--text-hex) !important;
              }
              .bg-tertiary {
                background-color: var(--accent-hex) !important;
              }
              .border-tertiary\/50 {
                border-color: var(--accent-hex) !important;
                opacity: 0.5;
              }
            }
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
