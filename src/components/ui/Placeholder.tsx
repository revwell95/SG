// Placeholder components for missing sections
// These would be implemented fully in a real project

export function UniversityList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Universities (400+)</h2>
        <div className="text-sm text-gray-500">Showing 1-20 of 400+ results</div>
      </div>
      <div className="grid gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Sample University {i + 1}
            </h3>
            <p className="text-gray-600 mb-4">
              Located in Munich, Bavaria • Established 1868 • 45,000+ students
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                Engineering
              </span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
                Computer Science
              </span>
            </div>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function UniversityFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filter Universities</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            University Type
          </label>
          <div className="space-y-2">
            {['Public', 'Private', 'Technical', 'Applied Sciences'].map(type => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select className="w-full p-2 border rounded-md">
            <option>All States</option>
            <option>Bavaria</option>
            <option>Berlin</option>
            <option>Baden-Württemberg</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export function UniversitySearch() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search universities, programs, or locations..."
          className="w-full px-4 py-3 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
}

export function ProgramList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Study Programs (17,000+)</h2>
        <div className="text-sm text-gray-500">Showing 1-20 of 17,000+ results</div>
      </div>
      <div className="grid gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Master of Science in Computer Science
              </h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                English
              </span>
            </div>
            <p className="text-gray-600 mb-3">
              Technical University of Munich • 2 years • No tuition fees
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Advanced computer science program focusing on algorithms, AI, and software engineering...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Application deadline: March 31</span>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProgramFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filter Programs</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Study Level
          </label>
          <div className="space-y-2">
            {['Bachelor', 'Master', 'PhD'].map(level => (
              <label key={level} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{level}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Field of Study
          </label>
          <select className="w-full p-2 border rounded-md">
            <option>All Fields</option>
            <option>Engineering</option>
            <option>Computer Science</option>
            <option>Business</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export function ProgramSearch() {
  return <UniversitySearch />
}

export function ScholarshipList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Available Scholarships</h2>
        <div className="text-sm text-gray-500">Showing active opportunities</div>
      </div>
      <div className="grid gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                DAAD Masters Scholarship
              </h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                Full Funding
              </span>
            </div>
            <p className="text-gray-600 mb-3">
              €861/month + health insurance + travel allowance
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Comprehensive scholarship for international master students from developing countries...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-red-600 font-medium">
                Deadline: October 31, 2025
              </span>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Apply Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScholarshipFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filter Scholarships</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scholarship Type
          </label>
          <div className="space-y-2">
            {['Full Funding', 'Partial', 'Living Allowance'].map(type => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Study Level
          </label>
          <select className="w-full p-2 border rounded-md">
            <option>All Levels</option>
            <option>Bachelor</option>
            <option>Master</option>
            <option>PhD</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export function ScholarshipGuide() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">
          Scholarship Application Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Research', desc: 'Find scholarships that match your profile' },
            { step: '2', title: 'Prepare', desc: 'Gather required documents and write essays' },
            { step: '3', title: 'Apply', desc: 'Submit applications before deadlines' },
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-gray-600">info@study-in-germany.com</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-gray-600">+49 30 123 456 789</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM - 6:00 PM (CET)</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 2:00 PM (CET)</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const faqs = [
    {
      q: 'Do German universities charge tuition fees?',
      a: 'Most public universities in Germany charge no tuition fees for both domestic and international students. However, small administrative fees (€150-350 per semester) may apply.'
    },
    {
      q: 'Can I study in English in Germany?',
      a: 'Yes! There are over 2,100 English-taught programs in Germany, particularly at the master\'s level. Many universities also offer bilingual programs.'
    },
    {
      q: 'What are the admission requirements?',
      a: 'Requirements vary by program and university. Generally, you need relevant academic qualifications, language proficiency (German or English), and sometimes entrance exams or interviews.'
    },
  ]
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {faq.q}
            </h3>
            <p className="text-gray-600">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}