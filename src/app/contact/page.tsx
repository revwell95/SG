import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { FAQ } from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Guidance for Studying in Germany',
  description: 'Get personalized assistance for your German study journey. Contact our education consultants for university selection, applications, and visa guidance.',
  openGraph: {
    title: 'Contact Us - Get Expert Guidance for Studying in Germany',
    description: 'Get personalized assistance for your German study journey. Contact our education consultants for university selection, applications, and visa guidance.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Expert Guidance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your German study journey? Our education consultants 
              are here to help you every step of the way, from university selection 
              to visa applications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about studying in Germany
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Application?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't wait! Many programs have early deadlines. Get personalized 
            guidance and start your application process today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Download Application Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}