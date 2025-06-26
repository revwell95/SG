'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  { name: 'Universities', href: '/universities' },
  { name: 'Programs', href: '/programs' },
  { name: 'Scholarships', href: '/scholarships' },
  { name: 'Application Guide', href: '/guide' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Blog', href: '/blog' },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="border-t px-4 py-6 space-y-3">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login" onClick={onClose}>
                Sign In
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={onClose}>
                Get Started
              </Link>
            </Button>
          </div>

          {/* Additional Links */}
          <div className="border-t px-4 py-4">
            <div className="flex justify-center space-x-6 text-sm">
              <Link
                href="/help"
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Help
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}