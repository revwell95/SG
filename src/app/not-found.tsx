import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <div className="text-2xl font-semibold text-gray-900 mb-4">
            Page not found
          </div>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            Perhaps you've mistyped the URL or the page has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              Go back home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/universities">
              Browse Universities
            </Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popular pages
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/universities" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Universities
            </Link>
            <Link 
              href="/programs" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Study Programs
            </Link>
            <Link 
              href="/scholarships" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Scholarships
            </Link>
            <Link 
              href="/guide" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Application Guide
            </Link>
            <Link 
              href="/contact" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}