import type { University, StudyProgram, Scholarship, BlogPost, SearchFilters } from './types'

// Mock data - In production, this would connect to a real API
const mockUniversities: University[] = [
  {
    id: 'tum',
    name: 'Technical University of Munich',
    shortName: 'TUM',
    type: 'Technical',
    location: {
      city: 'Munich',
      state: 'Bavaria',
    },
    established: 1868,
    students: {
      total: 45000,
      international: 12000,
      internationalPercentage: 27,
    },
    ranking: {
      national: 1,
      global: 50,
      qs: 50,
    },
    website: 'https://www.tum.de',
    description: 'Leading technical university in Germany with excellence in engineering and natural sciences.',
    specialties: ['Engineering', 'Computer Science', 'Natural Sciences', 'Medicine'],
    languages: ['German', 'English'],
    tuitionFees: {
      eu: 0,
      nonEu: 0,
      currency: 'EUR',
    },
    applicationDeadlines: {
      winterSemester: 'July 15',
      summerSemester: 'January 15',
    },
  },
  // Add more mock universities...
]

const mockPrograms: StudyProgram[] = [
  {
    id: 'cs-master-tum',
    name: 'Master of Science in Computer Science',
    level: 'Master',
    field: 'Computer Science & IT',
    university: {
      id: 'tum',
      name: 'Technical University of Munich',
    },
    duration: {
      years: 2,
      semesters: 4,
    },
    language: 'English',
    tuitionFee: 0,
    requirements: {
      academicQualification: 'Bachelor degree in Computer Science or related field',
      languageRequirement: {
        english: 'IELTS 6.5 or TOEFL 88',
      },
      gpa: 2.5,
    },
    description: 'Advanced computer science program focusing on algorithms, AI, and software engineering.',
    curriculum: ['Advanced Algorithms', 'Machine Learning', 'Software Engineering', 'Computer Vision'],
    careerProspects: ['Software Engineer', 'Data Scientist', 'Research Scientist', 'Tech Lead'],
    applicationDeadline: 'March 31',
    startDate: 'October 1',
  },
  // Add more mock programs...
]

const mockScholarships: Scholarship[] = [
  {
    id: 'daad-masters',
    name: 'DAAD Masters Scholarship',
    provider: 'DAAD',
    type: 'Full',
    amount: {
      value: 861,
      currency: 'EUR',
      period: 'Monthly',
    },
    eligibility: {
      studyLevel: ['Master'],
      gpa: 2.5,
      age: { max: 32 },
    },
    requirements: [
      'Bachelor degree with above-average results',
      'Two years of professional experience',
      'Strong motivation letter',
    ],
    applicationDeadline: 'October 31',
    description: 'Comprehensive scholarship for international master students in Germany.',
    benefits: [
      'Monthly stipend',
      'Health insurance',
      'Travel allowance',
      'Study materials allowance',
    ],
    website: 'https://www.daad.de',
  },
  // Add more mock scholarships...
]

// API functions
export async function getUniversities(filters?: SearchFilters['universities']): Promise<University[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  let filteredUniversities = [...mockUniversities]
  
  if (filters) {
    if (filters.type?.length) {
      filteredUniversities = filteredUniversities.filter(uni => 
        filters.type!.includes(uni.type)
      )
    }
    
    if (filters.location?.length) {
      filteredUniversities = filteredUniversities.filter(uni =>
        filters.location!.some(loc => 
          uni.location.city.includes(loc) || uni.location.state.includes(loc)
        )
      )
    }
  }
  
  return filteredUniversities
}

export async function getUniversityById(id: string): Promise<University | null> {
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockUniversities.find(uni => uni.id === id) || null
}

export async function getPrograms(filters?: SearchFilters['programs']): Promise<StudyProgram[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  let filteredPrograms = [...mockPrograms]
  
  if (filters) {
    if (filters.level?.length) {
      filteredPrograms = filteredPrograms.filter(program => 
        filters.level!.includes(program.level)
      )
    }
    
    if (filters.field?.length) {
      filteredPrograms = filteredPrograms.filter(program =>
        filters.field!.includes(program.field)
      )
    }
    
    if (filters.language?.length) {
      filteredPrograms = filteredPrograms.filter(program =>
        filters.language!.includes(program.language) || 
        (filters.language!.includes('Both') && program.language === 'Both')
      )
    }
  }
  
  return filteredPrograms
}

export async function getProgramById(id: string): Promise<StudyProgram | null> {
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockPrograms.find(program => program.id === id) || null
}

export async function getScholarships(filters?: SearchFilters['scholarships']): Promise<Scholarship[]> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  let filteredScholarships = [...mockScholarships]
  
  if (filters) {
    if (filters.type?.length) {
      filteredScholarships = filteredScholarships.filter(scholarship => 
        filters.type!.includes(scholarship.type)
      )
    }
    
    if (filters.eligibility?.studyLevel?.length) {
      filteredScholarships = filteredScholarships.filter(scholarship =>
        scholarship.eligibility.studyLevel.some(level =>
          filters.eligibility!.studyLevel!.includes(level)
        )
      )
    }
  }
  
  return filteredScholarships
}

export async function getScholarshipById(id: string): Promise<Scholarship | null> {
  await new Promise(resolve => setTimeout(resolve, 300))
  return mockScholarships.find(scholarship => scholarship.id === id) || null
}

export async function getBlogPosts(featured?: boolean): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 400))
  
  // Mock blog posts
  const mockPosts: BlogPost[] = [
    {
      id: 'guide-to-german-universities',
      title: 'Complete Guide to German Universities',
      slug: 'complete-guide-to-german-universities',
      excerpt: 'Everything you need to know about choosing the right German university for your studies.',
      content: '/* Full blog content would go here */',
      author: {
        name: 'Sarah Johnson',
        bio: 'Education consultant with 10+ years of experience',
      },
      publishedAt: '2024-01-15',
      featured: true,
      tags: ['Universities', 'Guide', 'International Students'],
      category: 'Education',
      readingTime: 8,
    },
    // Add more mock posts...
  ]
  
  return featured ? mockPosts.filter(post => post.featured) : mockPosts
}

export async function searchAll(query: string): Promise<{
  universities: University[]
  programs: StudyProgram[]
  scholarships: Scholarship[]
}> {
  await new Promise(resolve => setTimeout(resolve, 600))
  
  const lowerQuery = query.toLowerCase()
  
  const universities = mockUniversities.filter(uni =>
    uni.name.toLowerCase().includes(lowerQuery) ||
    uni.specialties.some(spec => spec.toLowerCase().includes(lowerQuery))
  )
  
  const programs = mockPrograms.filter(program =>
    program.name.toLowerCase().includes(lowerQuery) ||
    program.field.toLowerCase().includes(lowerQuery)
  )
  
  const scholarships = mockScholarships.filter(scholarship =>
    scholarship.name.toLowerCase().includes(lowerQuery) ||
    scholarship.provider.toLowerCase().includes(lowerQuery)
  )
  
  return { universities, programs, scholarships }
}