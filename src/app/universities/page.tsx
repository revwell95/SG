import type { Metadata } from 'next'
import { UniversityList } from '@/components/sections/UniversityList'
import { UniversityFilters } from '@/components/sections/UniversityFilters'
import { UniversitySearch } from '@/components/sections/UniversitySearch'

export const metadata: Metadata = {
  title: 'German Universities - Find Your Perfect Institution',
  description: 'Explore 400+ German universities. Find top-ranked institutions, compare programs, and discover your ideal university for studying in Germany.',
  openGraph: {
    title: 'German Universities - Find Your Perfect Institution',
    description: 'Explore 400+ German universities. Find top-ranked institutions, compare programs, and discover your ideal university for studying in Germany.',
    url: '/universities',
  },
}

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              German Universities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class institutions across Germany. From technical universities 
              to comprehensive research institutions, find the perfect match for your academic journey.
            </p>
          </div>
          
          <UniversitySearch />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <UniversityFilters />
            </div>
            
            {/* University List */}
            <div className="lg:col-span-3">
              <UniversityList />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}