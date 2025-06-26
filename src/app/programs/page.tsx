import type { Metadata } from 'next'
import { ProgramList } from '@/components/sections/ProgramList'
import { ProgramFilters } from '@/components/sections/ProgramFilters'
import { ProgramSearch } from '@/components/sections/ProgramSearch'

export const metadata: Metadata = {
  title: 'Study Programs in Germany - 17,000+ Degree Options',
  description: 'Browse thousands of study programs in Germany. Find Bachelor, Master, and PhD programs in all fields from engineering to arts and humanities.',
  openGraph: {
    title: 'Study Programs in Germany - 17,000+ Degree Options',
    description: 'Browse thousands of study programs in Germany. Find Bachelor, Master, and PhD programs in all fields from engineering to arts and humanities.',
    url: '/programs',
  },
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Study Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore over 17,000 study programs across German universities. 
              From traditional degrees to innovative interdisciplinary programs, 
              find the perfect academic path for your career goals.
            </p>
          </div>
          
          <ProgramSearch />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600">8,500+</div>
              <div className="text-sm text-gray-600">Bachelor Programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">7,200+</div>
              <div className="text-sm text-gray-600">Master Programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">1,300+</div>
              <div className="text-sm text-gray-600">PhD Programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600">2,100+</div>
              <div className="text-sm text-gray-600">English-Taught</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProgramFilters />
            </div>
            
            {/* Program List */}
            <div className="lg:col-span-3">
              <ProgramList />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}