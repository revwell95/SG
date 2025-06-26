import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@/components/layout/Header'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('Header', () => {
  it('renders the logo and site name', () => {
    render(<Header />)
    
    expect(screen.getByAltText('Study in Germany')).toBeInTheDocument()
    expect(screen.getByText('Study in Germany')).toBeInTheDocument()
  })

  it('renders navigation links on desktop', () => {
    render(<Header />)
    
    // Desktop navigation should be hidden on mobile (using CSS)
    const desktopNav = screen.getByText('Sign In').closest('div')
    expect(desktopNav).toHaveClass('hidden', 'lg:flex')
  })

  it('shows mobile menu button on mobile', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')
    expect(mobileMenuButton).toBeInTheDocument()
    expect(mobileMenuButton.closest('div')).toHaveClass('lg:hidden')
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')
    
    // Click to open menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Click to close menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders correct navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '/contact')
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu')
    expect(mobileMenuButton).toHaveAttribute('type', 'button')
    expect(mobileMenuButton).toHaveAttribute('aria-expanded')
  })
})