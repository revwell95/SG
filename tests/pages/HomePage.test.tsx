import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock all section components
jest.mock('@/components/sections/HeroSection', () => ({
  HeroSection: () => <div data-testid="hero-section">Hero Section</div>,
}))

jest.mock('@/components/sections/StatsSection', () => ({
  StatsSection: () => <div data-testid="stats-section">Stats Section</div>,
}))

jest.mock('@/components/sections/FeaturesSection', () => ({
  FeaturesSection: () => <div data-testid="features-section">Features Section</div>,
}))

jest.mock('@/components/sections/UniversitiesSection', () => ({
  UniversitiesSection: () => <div data-testid="universities-section">Universities Section</div>,
}))

jest.mock('@/components/sections/TestimonialsSection', () => ({
  TestimonialsSection: () => <div data-testid="testimonials-section">Testimonials Section</div>,
}))

jest.mock('@/components/sections/CTASection', () => ({
  CTASection: () => <div data-testid="cta-section">CTA Section</div>,
}))

describe('HomePage', () => {
  it('renders all main sections', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('stats-section')).toBeInTheDocument()
    expect(screen.getByTestId('features-section')).toBeInTheDocument()
    expect(screen.getByTestId('universities-section')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument()
    expect(screen.getByTestId('cta-section')).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    render(<HomePage />)
    
    const sections = [
      screen.getByTestId('hero-section'),
      screen.getByTestId('stats-section'),
      screen.getByTestId('features-section'),
      screen.getByTestId('universities-section'),
      screen.getByTestId('testimonials-section'),
      screen.getByTestId('cta-section'),
    ]

    // Check that sections appear in the correct order in the DOM
    sections.forEach((section, index) => {
      if (index > 0) {
        expect(section.compareDocumentPosition(sections[index - 1])).toBe(
          Node.DOCUMENT_POSITION_PRECEDING
        )
      }
    })
  })
})