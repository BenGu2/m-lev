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
        <h1 className="text-4xl font-bold text-center mb-12">{t.visit.title}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.visit.intro}
        </p>
      </section>

      {/* Map */}
      <section className="mb-16">
        <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.122019958292!2d34.77244777613006!3d32.092987718627676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bf54cecd189%3A0x6707c76da94d0f48!2z157Xl9eh16DXmSDXnNeR!5e0!3m2!1sen!2sil!4v1754549086878!5m2!1sen!2sil"
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
              <address className="not-italic text-gray-600">
                <p>{t.visit.location.address}</p>
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
    </>
  );
}
