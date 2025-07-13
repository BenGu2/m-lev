import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" />
      
      {/* Image container */}
      <div 
        className="relative inline-block max-w-[95vw] max-h-[95vh] rounded-xl overflow-hidden shadow-2xl animate-scaleIn bg-black/40"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[95vh] w-auto h-auto object-contain animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
}
