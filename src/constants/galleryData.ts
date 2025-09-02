export type CategoryId = 'fairy-tales' | 'huge-dolls' | 'military' | 'periodic' | 'vintage' | 'studio';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  folder: string;
  description: string;
  coverImage: string;
}

export interface CategoryTranslation {
  name: string;
  description: string;
}

export interface CategoryTranslations {
  en: Record<CategoryId, CategoryTranslation>;
  he: Record<CategoryId, CategoryTranslation>;
}

export interface GalleryImage {
  id: string;
  filename: string;
  alt: string;
}

export const categoryTranslations: CategoryTranslations = {
  en: {
    'fairy-tales': {
      name: 'Fairy Tales',
      description: 'Enchanting costumes from beloved fairy tales'
    },
    'huge-dolls': {
      name: 'Huge Dolls',
      description: 'Larger than life costume creations'
    },
    'military': {
      name: 'Military',
      description: 'Historical military and uniform costumes'
    },
    'periodic': {
      name: 'Periodic',
      description: 'Historical period costume collection'
    },
    'vintage': {
      name: 'Vintage',
      description: 'Classic vintage costume designs'
    },
    'studio': {
      name: 'Studio',
      description: 'Professional studio costume collection'
    }
  },
  he: {
    'fairy-tales': {
      name: 'אגדות',
      description: 'תלבושות מקסימות מאגדות אהובות'
    },
    'huge-dolls': {
      name: 'בובות ענק',
      description: 'יצירות תלבושות גדולות מהחיים'
    },
    'military': {
      name: 'צבאי',
      description: 'תלבושות צבאיות ומדים היסטוריים'
    },
    'periodic': {
      name: 'תקופתי',
      description: 'אוסף תלבושות היסטוריות'
    },
    'vintage': {
      name: 'וינטאג׳',
      description: 'עיצובי תלבושות קלאסיות'
    },
    'studio': {
      name: 'סטודיו',
      description: 'אוסף תלבושות מקצועיות לסטודיו'
    }
  }
};

export const categories: Category[] = [
  {
    id: 'fairy-tales',
    name: categoryTranslations.en['fairy-tales'].name,
    slug: 'fairy-tales',
    folder: 'Fairy tales',
    description: categoryTranslations.en['fairy-tales'].description,
    coverImage: 'FT001.JPG'
  },
  {
    id: 'huge-dolls',
    name: categoryTranslations.en['huge-dolls'].name,
    slug: 'huge-dolls',
    folder: 'Huge Dolls',
    description: categoryTranslations.en['huge-dolls'].description,
    coverImage: 'HD004.JPG'
  },
  {
    id: 'military',
    name: categoryTranslations.en['military'].name,
    slug: 'military',
    folder: 'Military',
    description: categoryTranslations.en['military'].description,
    coverImage: 'M001.JPG'
  },
  {
    id: 'periodic',
    name: categoryTranslations.en['periodic'].name,
    slug: 'periodic',
    folder: 'Periodic',
    description: categoryTranslations.en['periodic'].description,
    coverImage: 'P001.JPG'
  },
  {
    id: 'vintage',
    name: categoryTranslations.en['vintage'].name,
    slug: 'vintage',
    folder: 'Vintage',
    description: categoryTranslations.en['vintage'].description,
    coverImage: 'V001.JPG'
  },
  {
    id: 'studio',
    name: categoryTranslations.en['studio'].name,
    slug: 'studio',
    folder: 'Studio',
    description: categoryTranslations.en['studio'].description,
    coverImage: 'S001.JPG'
  }
];

// Image mappings with new naming scheme
const categoryImages: Record<string, string[]> = {
  'fairy-tales': Array.from({length: 59}, (_, i) => `FT${String(i + 1).padStart(3, '0')}.JPG`),
  'huge-dolls': Array.from({length: 23}, (_, i) => `HD${String(i + 1).padStart(3, '0')}.JPG`),
  'military': Array.from({length: 39}, (_, i) => `M${String(i + 1).padStart(3, '0')}.JPG`),
  'periodic': Array.from({length: 102}, (_, i) => `P${String(i + 1).padStart(3, '0')}.JPG`),
  'vintage': Array.from({length: 71}, (_, i) => `V${String(i + 1).padStart(3, '0')}.JPG`),
  'studio': Array.from({length: 50}, (_, i) => `S${String(i + 1).padStart(3, '0')}.JPG`)
};
