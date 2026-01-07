import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admissions Resources | Oxbridge Admissions Consulting',
  description: 'Comprehensive guides and resources for Oxbridge, UK universities, and international students. Expert advice to help you navigate the admissions process.',
}

interface ResourceCategory {
  title: string
  description: string
  image: string
  href: string
  category: string
}

const resourceCategories: ResourceCategory[] = [
  {
    title: 'Oxbridge Guides and Resources',
    description: 'Expert insights and comprehensive guides specifically for Oxford and Cambridge applications. From personal statements to interview preparation.',
    image: '/oxbridge.png',
    href: '/blog?category=oxbridge',
    category: 'oxbridge'
  },
  {
    title: 'UK University Guides and Resources',
    description: 'Complete guides for all UK universities beyond Oxbridge. Course selection, application strategies, and insider tips for success.',
    image: '/dukes.png',
    href: '/blog?category=uk-universities',
    category: 'uk-universities'
  },
  {
    title: 'International Student Guides and Resources',
    description: 'Specialized resources for international applicants. Visa guidance, cultural adaptation, and strategies for studying in the UK.',
    image: '/ppl2.jpeg',
    href: '/blog?category=international',
    category: 'international'
  }
]

export default function AdmissionsResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Admissions Resources
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto w-1/2">
              Comprehensive guides, expert advice, and insider tips to help you navigate the competitive world of UK university admissions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category) => (
              <Link
                key={category.category}
                href={category.href}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200 hover:border-blue-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    <span>Explore Resources</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our expert consultants can provide tailored advice for your specific situation and goals.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
