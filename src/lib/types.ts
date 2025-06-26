export interface University {
  id: string
  name: string
  shortName?: string
  type: 'Public' | 'Private' | 'Applied Sciences' | 'Technical' | 'Art & Music'
  location: {
    city: string
    state: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  established: number
  students: {
    total: number
    international: number
    internationalPercentage: number
  }
  ranking: {
    national?: number
    global?: number
    qs?: number
    times?: number
  }
  website: string
  image?: string
  description: string
  specialties: string[]
  languages: ('German' | 'English')[]
  tuitionFees: {
    eu: number
    nonEu: number
    currency: 'EUR'
  }
  applicationDeadlines: {
    winterSemester: string
    summerSemester?: string
  }
}

export interface StudyProgram {
  id: string
  name: string
  level: 'Bachelor' | 'Master' | 'PhD' | 'Diploma'
  field: string
  university: {
    id: string
    name: string
  }
  duration: {
    years: number
    semesters: number
  }
  language: 'German' | 'English' | 'Both'
  tuitionFee: number
  applicationFee?: number
  requirements: {
    academicQualification: string
    languageRequirement: {
      german?: string
      english?: string
    }
    gpa?: number
    workExperience?: string
    other?: string[]
  }
  description: string
  curriculum: string[]
  careerProspects: string[]
  applicationDeadline: string
  startDate: string
}

export interface Scholarship {
  id: string
  name: string
  provider: string
  type: 'Full' | 'Partial' | 'Living Allowance' | 'Tuition Fee'
  amount: {
    value: number
    currency: 'EUR'
    period: 'Monthly' | 'Annually' | 'Total'
  }
  eligibility: {
    nationality?: string[]
    studyLevel: string[]
    field?: string[]
    gpa?: number
    age?: {
      min?: number
      max?: number
    }
  }
  requirements: string[]
  applicationDeadline: string
  description: string
  benefits: string[]
  website: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    bio?: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  featured?: boolean
  tags: string[]
  category: string
  readingTime: number
  image?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  country: string
  subject: string
  message: string
  type: 'General' | 'University' | 'Program' | 'Scholarship' | 'Application' | 'Visa' | 'Other'
  newsletter?: boolean
}

export interface SearchFilters {
  universities?: {
    type?: string[]
    location?: string[]
    ranking?: {
      min?: number
      max?: number
    }
    studentsRange?: {
      min?: number
      max?: number
    }
  }
  programs?: {
    level?: string[]
    field?: string[]
    language?: string[]
    duration?: {
      min?: number
      max?: number
    }
    tuitionFee?: {
      max?: number
    }
  }
  scholarships?: {
    type?: string[]
    amount?: {
      min?: number
      max?: number
    }
    eligibility?: {
      studyLevel?: string[]
      field?: string[]
    }
  }
}

export interface NewsletterSubscription {
  email: string
  preferences?: {
    universities?: boolean
    scholarships?: boolean
    applicationTips?: boolean
    events?: boolean
  }
  source?: string
}

export interface UserProfile {
  id: string
  email: string
  name: string
  country: string
  interests: {
    studyLevel: string[]
    fields: string[]
    preferredLocations: string[]
    languagePreference: 'German' | 'English' | 'Both'
  }
  savedUniversities: string[]
  savedPrograms: string[]
  savedScholarships: string[]
  applicationStatus: {
    universities: {
      universityId: string
      programId: string
      status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected'
      submittedAt?: string
    }[]
  }
  createdAt: string
  updatedAt: string
}