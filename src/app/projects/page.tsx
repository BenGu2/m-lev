'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  type ProjectType = keyof typeof t.projects.projectTypes;

  const projects: Array<{ title: string; type: ProjectType; year: string }> = [
    { title: language === 'he' ? 'רומיאו ויוליה' : 'Romeo & Juliet', type: 'theater', year: '2024' },
    { title: language === 'he' ? 'מפצח האגוזים' : 'The Nutcracker', type: 'ballet', year: '2024' },
    { title: language === 'he' ? 'דרמה היסטורית' : 'Historical Drama', type: 'film', year: '2023' },
    { title: language === 'he' ? 'גאלה אופרה' : 'Opera Gala', type: 'opera', year: '2023' },
    { title: language === 'he' ? 'תצוגת אופנה' : 'Fashion Show', type: 'event', year: '2023' },
    { title: language === 'he' ? 'דרמה תקופתית' : 'Period Drama', type: 'tvSeries', year: '2023' }
  ];

  return (
    <>
      {/* Page Title */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6">{t.projects.title}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.projects.intro}
        </p>
      </section>

      {/* Tabs Navigation */}
      <section className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8">
            <button className="border-b-2 border-gray-900 py-4 text-gray-900 font-medium">
              {t.projects.tabs.byProject}
            </button>
            <button className="py-4 text-gray-500 font-medium">
              {t.projects.tabs.byCompany}
            </button>
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="aspect-4/3 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">{t.projects.projectTypes[project.type]} • {project.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Companies List (Hidden by default) */}
      <section className="mb-20 hidden">
        <div className="space-y-12">
          {[
            { name: 'National Theater', logo: '🎭', projects: ['Project A', 'Project B'] },
            { name: 'City Opera House', logo: '🎼', projects: ['Project C', 'Project D'] },
            { name: 'Film Studios Inc.', logo: '🎬', projects: ['Project E', 'Project F'] },
            { name: 'Events Co.', logo: '✨', projects: ['Project G', 'Project H'] }
          ].map((company) => (
            <div key={company.name} className="flex items-start gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl">{company.logo}</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{company.name}</h3>
                <ul className="space-y-1 text-gray-600">
                  {company.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Work Together?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We're always excited to collaborate on new and interesting projects.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
