'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';


export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Add intersection observer hook for animations
  const useInView = (options = {}) => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      if (!ref) return;

      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
      }, { threshold: 0.1, ...options });

      observer.observe(ref);

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }, [ref, options]);

    return [setRef, inView] as const;
  };

  const timelineMilestones = [
    {
      year: "1953",
      title: language === 'he' ? 'הקמת מחסן לב' : 'Establishment of M-Lev',
      text: language === 'he' 
        ? 'הקמת מחסן התחפושות בתל אביב על ידי לב לוריא, מוותיקי תיאטרון "האוהל". התחלת השאלת תלבושות ואביזרים לתיאטראות בישראל.'
        : 'Establishment of the costume warehouse in Tel Aviv by Lev Luria, a veteran of "HaOhel" Theater. Beginning of costume and accessory lending to theaters in Israel.'
    },
    {
      year: "1972",
      title: language === 'he' ? 'דור שני בהנהגה' : 'Second Generation Leadership',
      text: language === 'he'
        ? 'אברהם לוריא, בנו של לב ומוותיקי המפיקים והאמרגנים בארץ, לוקח את ניהול העסק. תחת הנהגתו המחסן מתחיל לגדול ולהתרחב.'
        : 'Avraham Luria, Lev\'s son and a veteran producer and impresario, takes over management. Under his leadership, the warehouse begins to grow and expand.'
    },
    {
      year: "2001",
      title: language === 'he' ? 'התרחבות משמעותית' : 'Significant Expansion',
      text: language === 'he'
        ? 'הרחבת הפעילות למגזר הפרטי, כולל אירועים, מסיבות פורים, צילומים מיוחדים וקרנבלים. התחלת שיתופי פעולה עם ערוצי טלוויזיה וחברות הפקה.'
        : 'Expansion into the private sector, including events, Purim parties, special photoshoots, and carnivals. Beginning of collaborations with television channels and production companies.'
    },
    {
      year: language === 'he' ? 'היום' : 'Present',
      title: language === 'he' ? 'דור רביעי למייסדים' : 'Fourth Generation',
      text: language === 'he'
        ? 'כיום המחסן מנוהל על ידי ארבעה דורות של משפחת לוריא, כולל הנכדה והנינה. האוסף הנדיר ממשיך לגדול מדי יום עם פריטים אותנטיים חדשים.'
        : 'Today, the warehouse is managed by four generations of the Luria family, including the granddaughter and great-granddaughter. The rare collection continues to grow daily with new authentic items.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Title */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{t.about.title}</h1>
      </section>

      {/* First Chunk - Founding */}
      <section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3 order-2 md:order-1">
              <div className="prose max-w-none space-y-6">
                <p className="text-lg text-gray-600">
                  {language === 'he'
                    ? 'מחסן לב הינו מחסן תחפושות והשכרת תלבושות אשר נוסד בשנות ה-50 בתל אביב. ע"י לב לוריא ז"ל מוותיקי תיאטרון "האוהל", שהחל דרכו בהשאלת תלבושות ואביזרים לתיאטראות בישראל.'
                    : 'M-Lev is a costume house and rental service established in the 1950s in Tel Aviv. Founded by the late Lev Luria, a veteran of "HaOhel" Theater, who began by lending costumes and accessories to theaters across Israel.'}
                </p>
                <p className="text-lg text-gray-600">
                  {language === 'he'
                    ? 'משנות ה-70 מנוהל העסק ע"י אברהם לוריא, בנו של לב. גם הוא מוותיקי המפיקים והאמרגנים בארץ. מאז המחסן גדל והתרחב ולאוסף הנדיר מתווספים מדי יום עשרות פריטים אותנטיים חדשים. כיום שותפות לניהול המחסן גם הנכדה והנינה, שהיא דור רביעי למייסדים.'
                    : 'Since the 1970s, the business has been managed by Avraham Luria, Lev\'s son and a veteran producer and impresario. The warehouse has grown significantly, with new authentic items added daily. Today, the granddaughter and great-granddaughter, representing the fourth generation, are also partners in managing the warehouse.'}
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center order-1 md:order-2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/20(1).jpeg"
                  alt="Lev Luria"
                  width={400}
                  height={600}
                  priority
                  className="w-auto h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Chunk - Present Day */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center order-2 md:order-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/990.JPG"
                  alt="Costume Collection"
                  width={400}
                  height={600}
                  className="w-auto h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <div className="prose max-w-none space-y-6">
                <p className="text-lg text-gray-600">
                  {language === 'he'
                    ? 'מחסן לב הוא הוותיק והגדול בישראל, בו ניתן לקבל בהשכרה בגדים ותלבושות מקוריים מכל תקופות ההיסטוריה.'
                    : 'M-Lev is the oldest and largest costume house in Israel, offering authentic period costumes from all historical eras for rental.'}
                </p>
                <p className="text-lg text-gray-600">
                  {language === 'he'
                    ? 'בשנים האחרונות התרחבה פעילות מחסן לב ובנוסף לקשריו עם גופים ומוסדות שונים, הוא פונה למגזר הפרטי בהשכרת תלבושות ותחפושות לאירועים, למסיבות פורים, לצילומים מיוחדים, לנוסעים לקרנבל התחפושות בוונציה ועוד ועוד...'
                    : 'In recent years, M-Lev has expanded its activities. In addition to its connections with various organizations and institutions, it now serves the private sector by renting costumes for events, Purim parties, special photoshoots, Venice Carnival travelers, and more...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Chunk - Clients */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3 order-2 md:order-1">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600">
                  {language === 'he'
                    ? 'עם לקוחותינו נמנים: ערוצי הטלויזיה השונים, חברות פרסום וקידום מכירות, בתי מלון תיאטראות, מפיקי סרטים ובמאים, מועדונים, מפיקי אירועים, חברות תיירות פנים וחוץ, קרנבלים בארץ ובחו"ל, וכן אלפי לקוחות פרטיים מרוצים.'
                    : 'Our clients include television channels, advertising companies, hotels, theaters, film producers, directors, clubs, event producers, tourism companies, carnivals in Israel and abroad, and thousands of satisfied private customers.'}
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center order-1 md:order-2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/1723.JPG"
                  alt="Historic Costumes"
                  width={400}
                  height={600}
                  className="w-auto h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            {language === 'he' ? 'ההיסטוריה שלנו' : 'Our History'}
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-200" />
            
            <div className="space-y-24">
              {timelineMilestones.map((milestone, index) => {
                const [ref, inView] = useInView({ threshold: 0.2 });
                return (
                  <div 
                    key={milestone.year} 
                    ref={ref}
                    className={`relative transition-all duration-700 transform
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  >
                    <div className="flex justify-between items-center">
                      {/* Left Content */}
                      <div className="w-[45%]">
                        {index % 2 === 0 && (
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mr-8">
                            <h3 className="font-semibold text-xl mb-3 text-gray-900">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {milestone.text}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center Year */}
                      <div className="w-[10%] relative">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {milestone.year}
                          </span>
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="w-[45%]">
                        {index % 2 === 1 && (
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 ml-8">
                            <h3 className="font-semibold text-xl mb-3 text-gray-900">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {milestone.text}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
