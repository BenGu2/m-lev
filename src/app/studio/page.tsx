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
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{t.studio.title}</h1>
        <Carousel images={studioCarouselImages} />
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          {t.studio.intro}
        </p>
      </section>

      {/* Unique Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.studio.experience.title}</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {t.studio.experience.desc}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.studio.experience.highlights.map((highlight) => (
              <div key={highlight.title} className="p-6 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.studio.journey.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.studio.journey.steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < t.studio.journey.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 start-1/2 w-full border-t-2 border-dashed border-blue-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.studio.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['1151.JPG', '1156.JPG', '1160.JPG', '1466.JPG', '1471.JPG', '1472.JPG', '1474.JPG', '1475.JPG'].map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(`/images/Studio/${image}`)}
                className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Image
                  src={`/images/Studio/${image}`}
                  alt={`Studio photo ${image}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/gallery/studio"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-base group mt-2"
            >
              {t.studio.cta.viewFullGallery}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
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
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t.studio.booking.title}</h2>
          <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6">
              {t.studio.booking.description}
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.89 0-3.66-.525-5.168-1.438L3.707 20.707l2.145-3.125C4.525 15.66 4 13.89 4 12 4 7.582 7.582 4 12 4s8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
              {t.studio.booking.whatsappButton}
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
