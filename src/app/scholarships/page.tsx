import type { Metadata } from 'next'
import { ScholarshipList } from '@/components/sections/ScholarshipList'
import { ScholarshipFilters } from '@/components/sections/ScholarshipFilters'
import { ScholarshipGuide } from '@/components/sections/ScholarshipGuide'

export const metadata: Metadata = {
  title: 'Scholarships for Germany - Funding Your Education',
  description: 'Find scholarships to study in Germany. Discover DAAD scholarships, university funding, and private scholarships for international students.',
  openGraph: {
    title: 'Scholarships for Germany - Funding Your Education',
    description: 'Find scholarships to study in Germany. Discover DAAD scholarships, university funding, and private scholarships for international students.',
    url: '/scholarships',
  },
}

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Scholarships for Germany
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your German education dreams affordable. Explore hundreds of 
              scholarship opportunities from government programs, universities, 
              and private foundations.
            </p>
          </div>
          
          {/* Scholarship Types Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Scholarships</h3>
              <p className="text-gray-600">DAAD and other official programs</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">University Scholarships</h3>
              <p className="text-gray-600">Institution-specific funding programs</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Foundations</h3>
              <p className="text-gray-600">Corporate and philanthropic awards</p>
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
              <ScholarshipFilters />
            </div>
            
            {/* Scholarship List */}
            <div className="lg:col-span-3">
              <ScholarshipList />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Guide */}
      <ScholarshipGuide />
    </div>
  )
}