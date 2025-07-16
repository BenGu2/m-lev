'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { type ReactNode } from 'react';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const valueCardsIcons = [
    <svg key="history" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    <svg key="reputation" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>,
    <svg key="collection" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ];

  const stepIcons = ['🔍', '✨', '📝', '↩️'];
  const enrichedSteps = t.home.rental.steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index] || '📍'
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.3),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-yellow-400 font-semibold tracking-wider">{t.home.welcome}</div>
            <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-xl leading-tight">
              {t.home.mainHeading}
            </h1>
            <p className="text-2xl text-white/95 mb-12 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
              {t.home.subHeading}
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="/projects"
                className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-xl hover:bg-yellow-300
                transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl
                font-bold text-lg group"
              >
                {t.home.cta.viewProjects}
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-xl
                hover:bg-white hover:text-purple-600 transition-all duration-300
                font-bold text-lg backdrop-blur-sm"
              >
                {t.home.cta.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {t.home.valueCards.map((card, index) => (
              <div
                key={card.title}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                          group relative overflow-hidden hover:-translate-y-1"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${index === 0 ? 'purple' : index === 1 ? 'yellow' : 'pink'}-50 rounded-bl-[100px] -z-10
                                group-hover:scale-150 transition-transform duration-500`} />
                <div className={`text-${index === 0 ? 'purple' : index === 1 ? 'yellow' : 'pink'}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {valueCardsIcons[index]}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{card.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Rental Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.home.rental.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {enrichedSteps.map((step) => (
              <div
                key={step.title}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl
                          transition-all duration-300 hover:-translate-y-1 border-t-4 border-yellow-400 group"
              >
                <div className="text-4xl mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
