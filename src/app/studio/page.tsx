'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { Carousel } from '@/components/Carousel';
import ImageModal from '@/components/ImageModal';

const studioCarouselImages = ['1477.JPG', '1807.JPG', '1869.JPG', '1810.JPG', '1473.JPG', '1469.JPG'];

export default function StudioPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Title and Intro */}
      <section className="py-24 bg-[#2c1810] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl font-bold text-center mb-12 font-serif">{t.studio.title}</h1>
          <div className="max-w-5xl mx-auto mb-12"> {/* Added max width constraint for carousel */}
            <Carousel images={studioCarouselImages} />
          </div>
          <p className="text-3xl text-gray-300 text-center max-w-3xl mx-auto font-serif leading-relaxed">
            {t.studio.intro}
          </p>
        </div>
      </section>

      {/* Unique Experience */}
      <section className="py-24 bg-[#f8f5f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-8 text-[#2c1810] font-serif">{t.studio.experience.title}</h2>
          <p className="text-3xl text-[#8b4513] text-center max-w-3xl mx-auto mb-12 font-serif leading-relaxed">
            {t.studio.experience.desc}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.studio.experience.highlights.map((highlight) => (
              <div key={highlight.title} className="p-8 bg-white rounded-lg shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-serif text-[#2c1810] mb-4">{highlight.title}</h3>
                <p className="text-xl font-serif text-[#8b4513] leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-[#2c1810] font-serif">{t.studio.journey.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.studio.journey.steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-serif mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
                <p className="text-xl font-serif text-[#8b4513] leading-relaxed">{step.desc}</p>
                {index < t.studio.journey.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-blue-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-24 bg-[#2c1810] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center font-serif">{t.studio.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {['1151.JPG', '1156.JPG', '1160.JPG', '1466.JPG', '1471.JPG', '1472.JPG', '1474.JPG', '1475.JPG'].map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(`/images/Studio/${image}`)}
                className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#e8d5b8] group"
              >
                <Image
                  src={`/images/Studio/${image}`}
                  alt={`Studio photo ${image}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/gallery/studio"
              className="group relative inline-flex px-8 py-4 rounded-lg overflow-hidden"
            >
              {/* Main background */}
              <span className="absolute inset-0 bg-[#7d3f11] transition-all duration-300 group-hover:bg-[#914913]" />
              
              {/* Animated borders */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8d5b8] to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#e8d5b8] to-transparent transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#e8d5b8] to-transparent transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000" />
              <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#e8d5b8] to-transparent transform translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000" />
              
              {/* Text */}
              <span className="relative z-10 text-2xl font-medium text-white font-serif">
                {t.studio.cta.viewFullGallery}
              </span>
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Studio photo"
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* How to Book */}
      <section className="py-24 bg-[#f8f5f1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-[#2c1810] font-serif">{t.studio.booking.title}</h2>
          <div className="max-w-2xl mx-auto p-12 bg-white rounded-lg shadow-xl border border-[#2c1810]/10">
            <p className="text-3xl text-[#8b4513] mb-12 font-serif leading-relaxed">
              {t.studio.booking.description}
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
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
              <span className="relative z-10 text-2xl font-medium text-white font-serif inline-flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.89 0-3.66-.525-5.168-1.438L3.707 20.707l2.145-3.125C4.525 15.66 4 13.89 4 12 4 7.582 7.582 4 12 4s8 3.582 8 8-3.582 8-8 8z"/>
                </svg>
                {t.studio.booking.whatsappButton}
              </span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
