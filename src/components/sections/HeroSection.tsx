import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="hero-gradient text-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Study in{' '}
            <span className="text-accent-400">Germany</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-slide-up">
            Unlock world-class education, cutting-edge research, and endless 
            opportunities in the heart of Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/universities">
                Find Universities
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <Link href="/programs">
                Browse Programs
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-80">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">400+</div>
              <div className="text-sm">Universities</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">17,000+</div>
              <div className="text-sm">Programs</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">350,000+</div>
              <div className="text-sm">Int'l Students</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">€0</div>
              <div className="text-sm">Tuition Fees*</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-bounce-slow"></div>
      </div>
    </section>
  )
}