'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigationItems = [
  {
    name: 'Universities',
    href: '/universities',
    description: 'Find top German universities',
    subItems: [
      { name: 'All Universities', href: '/universities' },
      { name: 'Top Rankings', href: '/universities/rankings' },
      { name: 'Technical Universities', href: '/universities/technical' },
      { name: 'Research Universities', href: '/universities/research' },
    ]
  },
  {
    name: 'Programs',
    href: '/programs',
    description: 'Explore study programs',
    subItems: [
      { name: 'All Programs', href: '/programs' },
      { name: 'Bachelor Programs', href: '/programs/bachelor' },
      { name: 'Master Programs', href: '/programs/master' },
      { name: 'PhD Programs', href: '/programs/phd' },
    ]
  },
  {
    name: 'Scholarships',
    href: '/scholarships',
    description: 'Financial aid opportunities',
    subItems: [
      { name: 'All Scholarships', href: '/scholarships' },
      { name: 'DAAD Scholarships', href: '/scholarships/daad' },
      { name: 'University Scholarships', href: '/scholarships/university' },
      { name: 'Private Scholarships', href: '/scholarships/private' },
    ]
  },
  {
    name: 'Guide',
    href: '/guide',
    description: 'Complete application guide',
    subItems: [
      { name: 'Application Process', href: '/guide' },
      { name: 'Visa Requirements', href: '/guide/visa' },
      { name: 'Living in Germany', href: '/guide/living' },
      { name: 'Language Requirements', href: '/guide/language' },
    ]
  },
]

export function NavigationMenu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            href={item.href}
            className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            {item.name}
          </Link>

          {/* Dropdown Menu */}
          {hoveredItem === item.name && (
            <div className="absolute top-full left-0 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
              <div className="py-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}