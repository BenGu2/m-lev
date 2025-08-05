'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/* Page Title and Intro */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{t.about.title}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.about.intro}
        </p>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.about.story.title}</h2>
              <p className="text-gray-600 mb-4">
                {t.about.story.text1}
              </p>
              <p className="text-gray-600">
                {t.about.story.text2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.journey.title}</h2>
          <div className="space-y-12">
            {t.about.journey.milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="font-bold text-2xl text-gray-400">{milestone.year}</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Business */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Today's Business</h2>
          <p className="text-gray-600 max-w-3xl">
            Today, we operate from a 5000sqm facility with an in-house design team,
            alteration experts, and a dedicated customer service department. Our focus
            remains on providing exceptional quality costumes and outstanding service.
          </p>
        </div>
      </section>

      {/* Team/Warehouse Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Space & Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-2xl italic mb-4">
              "We believe that every costume tells a story, and every story deserves
              to be told with authenticity and passion."
            </p>
            <cite className="text-gray-400">— Sarah Cohen, Founder</cite>
          </blockquote>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '30K+', label: 'Costumes' },
              { number: '1000+', label: 'Productions' },
              { number: '50K+', label: 'Happy Customers' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
