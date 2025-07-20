'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.studio, href: '/studio' },
    { name: t.nav.visit, href: '/visit' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 relative">
        <div className="h-20 flex items-center">
          {/* Language Toggle and Contact - Always Left Side, Fixed Order */}
          <div style={{ position: 'absolute', left: '1rem', direction: 'ltr' }} className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Contact on WhatsApp"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.89 0-3.66-.525-5.168-1.438L3.707 20.707l2.145-3.125C4.525 15.66 4 13.89 4 12 4 7.582 7.582 4 12 4s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
            </a>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label={`Switch to ${language === 'en' ? 'Hebrew' : 'English'}`}
            >
              {language === 'en' ? 'עב' : 'EN'}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:block mx-auto px-20">
            <ul className="flex justify-center gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo - Always Right Side */}
          <div className="flex-shrink-0 absolute right-4">
            <Link href="/" className="block">
              <div className="w-24 h-20 relative">
                <Image
                  src="/images/mlevlogo.png"
                  alt="MLev Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
              aria-label={`Switch to ${language === 'en' ? 'Hebrew' : 'English'}`}
            >
              {language === 'en' ? 'עב' : 'EN'}
            </button>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="space-y-2 pb-3 pt-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg
                    className={`w-5 h-5 ${language === 'en' ? 'mr-2' : 'ml-2'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.89 0-3.66-.525-5.168-1.438L3.707 20.707l2.145-3.125C4.525 15.66 4 13.89 4 12 4 7.582 7.582 4 12 4s8 3.582 8 8-3.582 8-8 8z"/>
                  </svg>
                  {language === 'en' ? 'Contact Us' : 'צור קשר'}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
