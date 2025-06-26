const testimonials = [
  {
    name: 'Maria Rodriguez',
    country: 'Spain',
    program: 'Master in Engineering',
    university: 'Technical University of Munich',
    quote: 'Studying in Germany opened doors I never imagined. The quality of education and research opportunities are exceptional.',
    avatar: '/avatars/maria.jpg',
  },
  {
    name: 'Raj Patel',
    country: 'India',
    program: 'PhD in Computer Science',
    university: 'RWTH Aachen University',
    quote: 'The multicultural environment and world-class facilities made my research journey incredibly rewarding.',
    avatar: '/avatars/raj.jpg',
  },
  {
    name: 'Sophie Chen',
    country: 'China',
    program: 'Bachelor in Business',
    university: 'University of Mannheim',
    quote: 'Germany\'s focus on practical learning and industry connections helped me land my dream job right after graduation.',
    avatar: '/avatars/sophie.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from international students who transformed their lives by studying in Germany
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.country} • {testimonial.program}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-sm text-gray-500">
                {testimonial.university}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"
                ></div>
              ))}
            </div>
            <span>Join 350,000+ international students in Germany</span>
          </div>
        </div>
      </div>
    </section>
  )
}