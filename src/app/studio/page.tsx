'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function StudioPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* Title and Intro */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{t.studio.title}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.studio.intro}
        </p>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.studio.perfectFor.title}</h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {t.studio.perfectFor.items.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.studio.whatsIncluded.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.studio.whatsIncluded.items.map((service) => (
              <div key={service.title} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Studio Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Book Your Session</h2>
          <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6">
              Contact us via WhatsApp or email to schedule your photo session.
              We'll help you plan the perfect shoot for your needs.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.89 0-3.66-.525-5.168-1.438L3.707 20.707l2.145-3.125C4.525 15.66 4 13.89 4 12 4 7.582 7.582 4 12 4s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
