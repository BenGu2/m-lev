'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function VisitPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { elementRef: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      {/* Title */}
      <section 
        ref={headerRef}
        className="py-24 bg-[#2c1810] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
        </div>
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-7xl font-bold text-center mb-8 font-serif">{t.visit.title}</h1>
          <p className="text-3xl text-gray-300 text-center max-w-3xl mx-auto font-serif leading-relaxed">
            {t.visit.intro}
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-[#f8f5f1] relative">
        <div className="absolute inset-0 bg-[#2c1810] opacity-[0.03] pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(44,24,16,0.15)] transition-transform duration-300 hover:scale-[1.01]">
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
        </div>
      </section>

      {/* Address Block */}
      <section className="py-24 bg-[#2c1810] text-white relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div className={language === 'he' ? 'text-right' : 'text-left'}>
              <h2 className="text-4xl font-bold mb-6 font-serif">{t.visit.location.title}</h2>
              <address className="not-italic text-2xl text-gray-300 font-serif leading-relaxed">
                <p>{t.visit.location.address}</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-24 bg-[#f8f5f1]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-[#2c1810]/10">
            <h2 className="text-4xl font-bold mb-8 text-[#2c1810] font-serif">{t.visit.schedule.title}</h2>
            <ul className="space-y-4 text-2xl text-[#8b4513] font-serif">
              <li className="leading-relaxed">{t.visit.schedule.weekdays}: {t.visit.schedule.hours}</li>
              <li className="leading-relaxed">{t.visit.schedule.friday}: {t.visit.schedule.fridayHours}</li>
              <li className="leading-relaxed">{t.visit.schedule.saturday}: {t.visit.schedule.saturdayClosed}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
