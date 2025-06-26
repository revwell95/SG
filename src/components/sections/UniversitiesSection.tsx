import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const featuredUniversities = [
  {
    name: 'Technical University of Munich',
    ranking: '#1 in Germany',
    location: 'Munich, Bavaria',
    specialties: ['Engineering', 'Computer Science', 'Natural Sciences'],
    students: '45,000+',
    image: '/universities/tum.jpg',
  },
  {
    name: 'University of Heidelberg',
    ranking: '#2 in Germany',
    location: 'Heidelberg, Baden-Württemberg',
    specialties: ['Medicine', 'Life Sciences', 'Humanities'],
    students: '30,000+',
    image: '/universities/heidelberg.jpg',
  },
  {
    name: 'RWTH Aachen University',
    ranking: '#3 in Engineering',
    location: 'Aachen, North Rhine-Westphalia',
    specialties: ['Engineering', 'Technology', 'Business'],
    students: '47,000+',
    image: '/universities/rwth.jpg',
  },
  {
    name: 'Ludwig Maximilian University',
    ranking: '#4 in Germany',
    location: 'Munich, Bavaria',
    specialties: ['Liberal Arts', 'Social Sciences', 'Medicine'],
    students: '52,000+',
    image: '/universities/lmu.jpg',
  },
]

export function UniversitiesSection() {
  return (
    <section id="universities" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top German Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of Germany\'s most prestigious institutions, known worldwide 
            for their academic excellence and research contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredUniversities.map((university, index) => (
            <div
              key={university.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <div className="text-sm font-medium bg-primary-600 px-2 py-1 rounded">
                    {university.ranking}
                  </div>
                </div>
                {/* Placeholder for university image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {university.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {university.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  📍 {university.location}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-2">
                    {university.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    👥 {university.students} students
                  </span>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/universities">
              Explore All Universities
            </Link>
          </Button>
          <p className="mt-4 text-gray-600">
            Browse 400+ universities across Germany
          </p>
        </div>
      </div>
    </section>
  )
}