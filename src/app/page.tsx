import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { UniversitiesSection } from '@/components/sections/UniversitiesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study in Germany - Your Gateway to German Higher Education',
  description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
  openGraph: {
    title: 'Study in Germany - Your Gateway to German Higher Education',
    description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Study in Germany Homepage',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <UniversitiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}