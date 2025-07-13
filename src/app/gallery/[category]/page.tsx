'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { categories, type Category } from '@/constants/galleryData';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ImageModal from '@/components/ImageModal';

export default function CategoryPage() {
  const [imageFiles, setImageFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
  const { name, description, folder } = category;

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
        setImageFiles(data.images || []);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadImages();
  }, [folder]);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Loading images...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imageFiles.map((filename, index) => (
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
