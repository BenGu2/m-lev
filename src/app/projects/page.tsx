'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { useState } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'projects' | 'companies'>('projects');

  const { elementRef: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: contentRef, isIntersecting: contentVisible } = useIntersectionObserver({ threshold: 0.1 });

  type ProjectType = keyof typeof t.projects.projectTypes;

  const projects = [
    { 
      title: language === 'he' ? 'הלילה ה-12' : 'Twelfth Night',
      type: 'theater' as ProjectType,
      year: '2025',
      company: 'National Theater Company',
      description: language === 'he' ? 'קומדיה שייקספירית מרהיבה' : 'A vibrant Shakespearean comedy'
    },
    { 
      title: language === 'he' ? 'אגם הברבורים' : 'Swan Lake',
      type: 'ballet' as ProjectType,
      year: '2025',
      company: 'City Ballet',
      description: language === 'he' ? 'הפקה חדשה של הקלאסיקה האהובה' : 'A fresh take on the beloved classic'
    },
    { 
      title: language === 'he' ? 'מלכת הלילה' : 'Queen of the Night',
      type: 'opera' as ProjectType,
      year: '2024',
      company: 'Metropolitan Opera House',
      description: language === 'he' ? 'אופרה דרמטית מקורית' : 'An original dramatic opera'
    },
    { 
      title: language === 'he' ? 'זמנים עתיקים' : 'Ancient Times',
      type: 'film' as ProjectType,
      year: '2024',
      company: 'Heritage Films',
      description: language === 'he' ? 'דרמה היסטורית עטורת פרסים' : 'Award-winning historical drama'
    },
    { 
      title: language === 'he' ? 'מורשת המלוכה' : 'Royal Heritage',
      type: 'tvSeries' as ProjectType,
      year: '2024',
      company: 'Stellar Productions',
      description: language === 'he' ? 'סדרת דרמה תקופתית' : 'Period drama series'
    },
    { 
      title: language === 'he' ? 'נשף המסכות' : 'The Masquerade',
      type: 'event' as ProjectType,
      year: '2024',
      company: 'Grand Events Co.',
      description: language === 'he' ? 'אירוע תקופתי מפואר' : 'Luxurious period event'
    }
  ];

  const companies = [
    {
      name: 'National Theater Company',
      logo: '🎭',
      description: language === 'he' ? 'תיאטרון לאומי מוביל' : 'Leading national theater',
      projects: ['Twelfth Night', 'The Tempest', 'A Midsummer Night\'s Dream'],
      type: 'Theater'
    },
    {
      name: 'City Ballet',
      logo: '💃',
      description: language === 'he' ? 'להקת בלט עירונית' : 'Premier ballet company',
      projects: ['Swan Lake', 'The Nutcracker', 'Giselle'],
      type: 'Dance'
    },
    {
      name: 'Metropolitan Opera House',
      logo: '🎭',
      description: language === 'he' ? 'בית אופרה מוביל' : 'Leading opera house',
      projects: ['Queen of the Night', 'Carmen', 'La Traviata'],
      type: 'Opera'
    },
    {
      name: 'Heritage Films',
      logo: '🎬',
      description: language === 'he' ? 'הפקות קולנוע היסטוריות' : 'Historical film productions',
      projects: ['Ancient Times', 'The Crown Jewels', 'Royal Secrets'],
      type: 'Film'
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f1]">
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className="relative py-24 bg-[#2c1810] text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
        </div>
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-7xl font-bold text-center mb-8 font-serif">{t.projects.title}</h1>
          <p className="text-3xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed font-serif">
            {t.projects.intro}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section 
        ref={contentRef}
        className="py-24"
      >
        <div className="container mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-4 rounded-lg text-2xl font-serif transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-[#2c1810] text-white'
                    : 'text-[#2c1810] hover:bg-[#2c1810]/10'
                }`}
              >
                {t.projects.tabs.byProject}
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`px-8 py-4 rounded-lg text-2xl font-serif transition-all duration-300 ${
                  activeTab === 'companies'
                    ? 'bg-[#2c1810] text-white'
                    : 'text-[#2c1810] hover:bg-[#2c1810]/10'
                }`}
              >
                {t.projects.tabs.byCompany}
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`transition-all duration-500 ${
            activeTab === 'projects' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'
          }`}>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}>
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-4/3 bg-[#2c1810]/10 relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#2c1810]/20 text-6xl">
                      {project.type === 'theater' && '🎭'}
                      {project.type === 'ballet' && '💃'}
                      {project.type === 'opera' && '🎭'}
                      {project.type === 'film' && '🎬'}
                      {project.type === 'tvSeries' && '📺'}
                      {project.type === 'event' && '✨'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold font-serif text-[#2c1810] group-hover:text-[#8b4513] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-lg text-[#8b4513] font-serif">{project.year}</span>
                    </div>
                    <p className="text-xl text-gray-600 mb-4 font-serif">{project.description}</p>
                    <p className="text-lg text-[#8b4513] font-serif">{project.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Companies List */}
          <div className={`transition-all duration-500 ${
            activeTab === 'companies' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'
          }`}>
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              contentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}>
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#2c1810] text-white flex items-center justify-center text-3xl">
                      {company.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold font-serif text-[#2c1810]">{company.name}</h3>
                        <span className="text-lg text-[#8b4513] font-serif">{company.type}</span>
                      </div>
                      <p className="text-xl text-gray-600 mb-4 font-serif">{company.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2c1810] mb-2 font-serif">Recent Projects:</h4>
                        <ul className="space-y-2">
                          {company.projects.map((project) => (
                            <li key={project} className="text-lg text-[#8b4513] font-serif">{project}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#2c1810] font-serif">
              {language === 'he' ? 'רוצים לעבוד יחד?' : 'Want to Work Together?'}
            </h2>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-serif leading-relaxed">
              {language === 'he' 
                ? 'אנחנו תמיד נרגשים לשתף פעולה בפרויקטים חדשים ומעניינים.'
                : 'We are always excited to collaborate on new and interesting projects.'}
            </p>
            <a
              href="/contact"
              className="group relative inline-flex px-8 py-4 rounded-lg overflow-hidden"
            >
              {/* Main background */}
              <span className="absolute inset-0 bg-[#2c1810] transition-all duration-300 group-hover:bg-[#3a2218]" />
              
              {/* Animated borders */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8d5b8] to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#e8d5b8] to-transparent transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8d5b8] to-transparent transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />
              <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#e8d5b8] to-transparent transform translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000" />
              
              {/* Text */}
              <span className="relative z-10 text-2xl font-medium text-white font-serif">
                {language === 'he' ? 'צור קשר' : 'Get in Touch'}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
