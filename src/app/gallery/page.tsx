'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { translations } from '@/constants/translations';
import { categories, categoryTranslations } from '@/constants/galleryData';

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#f8f5f1]">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#2c1810] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h1 className="text-6xl font-bold mb-8 font-serif">{t.gallery.title}</h1>
          <p className="text-2xl text-gray-200 font-serif leading-relaxed">
            {t.gallery.intro}
          </p>
        </div>
      </section>

      {/* Gallery Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/gallery/${category.slug}`}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] shadow-xl transform transition-all duration-500 hover:-translate-y-2"
              >
                <Image
                  src={`/images/${category.folder}/${category.coverImage}`}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/90 via-[#2c1810]/50 to-transparent transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#2c1810]/20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500">
                  <h3 className="text-3xl font-bold mb-4 font-serif group-hover:translate-x-2">
                    {categoryTranslations[language][category.id].name}
                  </h3>
                  <p className="text-xl text-gray-200 font-serif group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {categoryTranslations[language][category.id].description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
