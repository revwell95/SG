const stats = [
  {
    number: '400+',
    label: 'Universities',
    description: 'Top-ranked institutions across Germany',
  },
  {
    number: '17,000+',
    label: 'Study Programs',
    description: 'From engineering to arts and humanities',
  },
  {
    number: '350,000+',
    label: 'International Students',
    description: 'Students from 195+ countries',
  },
  {
    number: '€0',
    label: 'Tuition Fees*',
    description: 'At most public universities',
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Germany by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why Germany is one of the world\'s top destinations for higher education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Small administrative fees may apply (€150-350 per semester)
          </p>
        </div>
      </div>
    </section>
  )
}