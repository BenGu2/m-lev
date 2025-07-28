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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((filename: string, index: number) => (
              <div
                key={`${filename}-${index}`}
                className="aspect-[3/4] relative rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
                onClick={() => setSelectedImage(`/images/${folder}/${filename}`)}
              >
                <Image
                  src={`/images/${folder}/${filename}`}
                  alt={`${name} costume ${index + 1}`}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        )}

        {hasMore && !isLoading && (
          <div 
            ref={elementRef}
            className="text-center py-12"
          >
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        )}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Enlarged costume view"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
