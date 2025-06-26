import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import  Analytics  from '@/scripts/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Study in Germany - Your Gateway to German Higher Education',
    template: '%s | Study in Germany'
  },
  description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
  keywords: [
    'study in germany',
    'german universities',
    'international students',
    'germany education',
    'scholarships germany',
    'university germany',
    'study abroad'
  ],
  authors: [{ name: 'Study in Germany Team' }],
  creator: 'Study in Germany Team',
  publisher: 'Study in Germany',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://study-in-germany.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Study in Germany - Your Gateway to German Higher Education',
    description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
    siteName: 'Study in Germany',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Study in Germany - Your Gateway to German Higher Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Germany - Your Gateway to German Higher Education',
    description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning     /* ignore extension-injected attrs */
    >
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}