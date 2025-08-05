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
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">{t.gallery.title}</h1>
        <p className="text-xl text-gray-600">
          {t.gallery.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.slug}
            href={`/gallery/${category.slug}`}
            className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-100"
          >
            <Image
              src={`/images/${category.folder}/${category.coverImage}`}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                {categoryTranslations[language][category.id].name}
              </h3>
              <p className="text-white/90 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                {categoryTranslations[language][category.id].description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
