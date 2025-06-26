export const SITE_CONFIG = {
  name: 'Study in Germany',
  description: 'Your gateway to German higher education',
  url: process.env.SITE_URL || 'https://study-in-germany.com',
  email: 'info@study-in-germany.com',
  phone: '+49 30 123 456 789',
  address: 'Berlin, Germany',
} as const

export const GERMAN_STATES = [
  'Baden-Württemberg',
  'Bavaria',
  'Berlin',
  'Brandenburg',
  'Bremen',
  'Hamburg',
  'Hesse',
  'Lower Saxony',
  'Mecklenburg-Vorpommern',
  'North Rhine-Westphalia',
  'Rhineland-Palatinate',
  'Saarland',
  'Saxony',
  'Saxony-Anhalt',
  'Schleswig-Holstein',
  'Thuringia',
] as const

export const STUDY_LEVELS = [
  'Foundation',
  'Bachelor',
  'Master',
  'PhD',
  'Diploma',
  'Certificate',
] as const

export const STUDY_FIELDS = [
  'Engineering & Technology',
  'Computer Science & IT',
  'Business & Economics',
  'Natural Sciences',
  'Medicine & Health',
  'Social Sciences',
  'Arts & Humanities',
  'Law',
  'Education',
  'Agriculture & Environment',
] as const

export const UNIVERSITY_TYPES = [
  'Public University',
  'Private University',
  'University of Applied Sciences',
  'Technical University',
  'Art & Music School',
] as const

export const LANGUAGE_REQUIREMENTS = {
  GERMAN: {
    A1: 'Basic (A1)',
    A2: 'Basic (A2)',
    B1: 'Intermediate (B1)',
    B2: 'Upper Intermediate (B2)',
    C1: 'Advanced (C1)',
    C2: 'Proficient (C2)',
  },
  ENGLISH: {
    IELTS: 'IELTS',
    TOEFL: 'TOEFL',
    CAMBRIDGE: 'Cambridge English',
    DUOLINGO: 'Duolingo English Test',
  },
} as const

export const SCHOLARSHIP_TYPES = [
  'DAAD Scholarship',
  'University Scholarship',
  'Government Scholarship',
  'Private Foundation',
  'Merit-Based',
  'Need-Based',
  'Research Grant',
] as const

export const APPLICATION_DEADLINES = {
  WINTER_SEMESTER: {
    start: 'October',
    deadline: 'July 15',
  },
  SUMMER_SEMESTER: {
    start: 'April',
    deadline: 'January 15',
  },
} as const

export const COST_OF_LIVING = {
  MAJOR_CITIES: {
    Munich: { min: 1200, max: 1800 },
    Hamburg: { min: 1100, max: 1600 },
    Frankfurt: { min: 1100, max: 1600 },
    Cologne: { min: 1000, max: 1500 },
    Berlin: { min: 1000, max: 1400 },
  },
  SMALLER_CITIES: {
    min: 800,
    max: 1200,
  },
} as const

export const CONTACT_TYPES = [
  'General Inquiry',
  'University Information',
  'Program Details',
  'Scholarship Question',
  'Application Help',
  'Visa Support',
  'Other',
] as const

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/studyingermany',
  twitter: 'https://twitter.com/studyingermany',
  linkedin: 'https://linkedin.com/company/studyingermany',
  instagram: 'https://instagram.com/studyingermany',
  youtube: 'https://youtube.com/studyingermany',
} as const

export const SEO_DEFAULTS = {
  title: 'Study in Germany - Your Gateway to German Higher Education',
  description: 'Discover opportunities to study in Germany. Find universities, programs, scholarships, and essential information for international students.',
  keywords: [
    'study in germany',
    'german universities',
    'international students',
    'germany education',
    'scholarships germany',
    'university germany',
    'study abroad',
  ],
} as const