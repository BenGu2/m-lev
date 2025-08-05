'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function VisitPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* Title */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{t.visit.title}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.visit.intro}
        </p>
      </section>

      {/* Map */}
      <section className="mb-16">
        <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src="about:blank"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Location map"
          ></iframe>
        </div>
      </section>

      {/* Address Block */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className={language === 'he' ? 'text-right' : 'text-left'}>
              <h2 className="text-xl font-semibold mb-4">{t.visit.location.title}</h2>
              <address className="not-italic text-gray-600 space-y-2">
                {t.visit.location.address.split(',').map((line, i) => (
                  <p key={i}>{line.trim()}</p>
                ))}
                <p className="mt-4 text-gray-500">{t.visit.location.directions}</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{t.visit.schedule.title}</h2>
            <ul className="space-y-2 text-gray-600">
              <li>{t.visit.schedule.weekdays}: {t.visit.schedule.hours}</li>
              <li>{t.visit.schedule.friday}: {t.visit.schedule.fridayHours}</li>
              <li>{t.visit.schedule.saturday}: {t.visit.schedule.saturdayClosed}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">{t.visit.booking.title}</h2>
        <p className="text-gray-600 mb-4">{t.visit.booking.info}</p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t.nav.contact}
        </a>
      </section>
    </>
  );
}
