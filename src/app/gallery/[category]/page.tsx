'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories, type Category, categoryTranslations } from '@/constants/galleryData';
import { useLanguage } from '@/components/LanguageProvider';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ImageModal from '@/components/ImageModal';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const IMAGES_PER_PAGE = 12; // Number of images to load at once
export default function CategoryPage() {
  const { language } = useLanguage();
  const [allImages, setAllImages] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver();
  const params = useParams();
  const categorySlug = params.category as string;

  // Find the category
  const category: Category | undefined = categories.find(
    (cat) => cat.slug === categorySlug
  );

  // Handle 404 if category doesn't exist
  if (!category) {
    notFound();
  }

  // After notFound, TypeScript knows category is defined
  const { id, folder } = category;
  const { name, description } = categoryTranslations[language][id];

  useEffect(() => {
    async function loadImages() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/images?category=${encodeURIComponent(folder)}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        const images = data.images || [];
        setAllImages(images);
        setDisplayedImages(images.slice(0, IMAGES_PER_PAGE));
        setHasMore(images.length > IMAGES_PER_PAGE);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [folder]);

  // Load more images when intersection observer triggers
  useEffect(() => {
    if (isIntersecting && hasMore && !isLoading) {
      const currentLength = displayedImages.length;
      const nextImages = allImages.slice(
        currentLength,
        currentLength + IMAGES_PER_PAGE
      );
      setDisplayedImages(prev => [...prev, ...nextImages]);
      setHasMore(currentLength + IMAGES_PER_PAGE < allImages.length);
    }
  }, [isIntersecting, hasMore, isLoading, allImages, displayedImages.length]);

  return (
    <>
      <main className="min-h-screen bg-[#f8f5f1]">
        {/* Category Hero Section */}
        <section className="relative py-24 bg-[#2c1810] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/mlevlogo.png')] bg-center bg-no-repeat bg-contain opacity-30 transform scale-150 blur-sm" />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <h1 className="text-6xl font-bold mb-8 font-serif">{name}</h1>
            <p className="text-2xl text-gray-200 font-serif leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#2c1810] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedImages.map((filename: string, index: number) => (
                  <div
                    key={`${filename}-${index}`}
                    className="aspect-[3/4] relative rounded-xl overflow-hidden bg-[#2c1810]/5 group cursor-pointer shadow-xl transform transition-all duration-500 hover:-translate-y-2"
                    onClick={() => setSelectedImage(`/images/${folder}/${filename}`)}
                  >
                    <Image
                      src={`/images/${folder}/${filename}`}
                      alt={`${name} costume ${index + 1}`}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/60 via-[#2c1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Trigger */}
            {hasMore && !isLoading && (
              <div 
                ref={elementRef}
                className="h-20 flex items-center justify-center mt-8"
              >
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#2c1810] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt={`${name} costume`}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
