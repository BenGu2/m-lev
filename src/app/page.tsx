'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';
import { translations } from '@/constants/translations';
import { useLanguage } from '@/components/LanguageProvider';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const { elementRef: heroRef, isIntersecting: isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: categoriesRef, isIntersecting: categoriesVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: processRef, isIntersecting: processVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: aboutRef, isIntersecting: aboutVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { elementRef: projectsRef, isIntersecting: projectsVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Logo Overlay */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/224.JPG"
            alt="Costume Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/90 to-[#4a2c1d]/90" />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
        </div>
        
        {/* Main content */}
        <div className={`relative z-10 text-center transition-all duration-1000 px-4 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="text-7xl font-bold mb-8 text-white font-serif">
            {t.home.mainHeading}
          </h1>
          <p className="text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-serif">
            {t.home.subHeading}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Gallery Button */}
            <a
              href="/gallery"
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
                {t.nav.gallery}
              </span>
            </a>

            {/* Studio Button */}
            <a
              href="/studio"
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
                {t.nav.studio}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section 
        ref={categoriesRef}
        className="py-24 bg-[#f8f5f1] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${
            categoriesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
          }`}>
            <div className="relative bg-white p-10 rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#2c1810] text-white flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-3 font-serif text-[#8b4513]">{t.home.milestones.uniqueCostumes.number}</h3>
              <h4 className="text-2xl font-semibold mb-4 text-[#2c1810] font-serif">{t.home.milestones.uniqueCostumes.title}</h4>
              <p className="text-xl text-gray-600 font-serif leading-relaxed">{t.home.milestones.uniqueCostumes.description}</p>
            </div>

            <div className="relative bg-white p-10 rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#2c1810] text-white flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-3 font-serif text-[#8b4513]">{t.home.milestones.legacy.number}</h3>
              <h4 className="text-2xl font-semibold mb-4 text-[#2c1810] font-serif">{t.home.milestones.legacy.title}</h4>
              <p className="text-xl text-gray-600 font-serif leading-relaxed">{t.home.milestones.legacy.description}</p>
            </div>

            <div className="relative bg-white p-10 rounded-lg shadow-xl transform transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#2c1810] text-white flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-3 font-serif text-[#8b4513]">{t.home.milestones.productions.number}</h3>
              <h4 className="text-2xl font-semibold mb-4 text-[#2c1810] font-serif">{t.home.milestones.productions.title}</h4>
              <p className="text-xl text-gray-600 font-serif leading-relaxed">{t.home.milestones.productions.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#2c1810] font-serif">{t.home.rental.title}</h2>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            processVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
          }`}>
            {t.home.rental.steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 font-serif">{step.title}</h3>
                <p className="text-xl text-gray-600 font-serif leading-relaxed">{step.text}</p>
                {index < t.home.rental.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-blue-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section 
        ref={aboutRef}
        className="py-24 bg-[#2c1810] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            aboutVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div>
              <h2 className="text-5xl font-bold mb-8 font-serif">{t.about.story.title}</h2>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-serif">
                {t.about.story.text1}
              </p>
              <a
                href="/about"
                className="group relative inline-flex px-8 py-4 rounded-lg overflow-hidden"
              >
                {/* Main background */}
                <span className="absolute inset-0 bg-[#7d3f11] transition-all duration-300 group-hover:bg-[#914913]" />
                
                {/* Animated borders */}
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />
                <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent transform translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000" />
                
                {/* Text */}
                <span className="relative z-10 text-2xl font-medium text-white font-serif">
                  {t.nav.about}
                </span>
              </a>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/20(1).jpeg"
                alt="Our Story"
                width={700}
                height={525}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Studio Experience */}
      <section 
        ref={projectsRef}
        className="py-24 bg-[#f8f5f1] relative"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${
            projectsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
          }`}>
            <div className="absolute inset-0">
              <Image
                src="/images/Studio/1477.JPG"
                alt="Photo Studio Experience"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#2c1810]/90 to-transparent" />
            </div>
            <div className="relative z-10 py-24 px-8 md:px-16 lg:px-24">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold mb-6 text-white font-serif">{t.studio.title}</h2>
                <p className="text-2xl text-gray-200 mb-8 leading-relaxed font-serif">
                  {t.studio.experience.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {t.studio.experience.highlights.map((highlight, index) => (
                    <div key={highlight.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-2xl font-semibold mb-2 text-white font-serif">{highlight.title}</h3>
                      <p className="text-lg text-gray-200 font-serif">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="/studio"
                  className="group relative inline-flex px-8 py-4 rounded-lg overflow-hidden"
                >
                  {/* Main background */}
                  <span className="absolute inset-0 bg-[#7d3f11] transition-all duration-300 group-hover:bg-[#914913]" />
                  
                  {/* Animated borders */}
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                  <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent transform translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000" />
                  
                  {/* Text */}
                  <span className="relative z-10 text-2xl font-medium text-white font-serif">
                    {t.nav.studio}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}