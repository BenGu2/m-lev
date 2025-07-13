# MLev Costume Gallery

A modern, responsive web application showcasing MLev's costume collection. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- 🖼️ Dynamic image gallery with categories
- 📱 Fully responsive design
- 🔍 Interactive image modal viewer
- ⚡ Fast image loading with Next.js Image optimization
- 🎨 Modern UI with Tailwind CSS
- 🌍 Prepared for internationalization
- ♿ Accessibility-focused development

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BenGu2/m-lev.git
cd m-lev
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create an `images` folder in the `public` directory and add your costume images in category subfolders:
```
public/
  images/
    Fairy tales/
    Huge Dolls/
    Military/
    Periodic/
    Studio/
    Vintage/
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── app/                    # Next.js 14 app directory
  │   ├── gallery/           # Gallery pages
  │   │   ├── [category]/    # Dynamic category routes
  │   │   └── page.tsx       # Gallery home page
  │   └── ...                # Other pages
  ├── components/            # Reusable React components
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── ImageModal.tsx
  │   └── ...
  └── constants/            # Constant data and configurations
      └── galleryData.ts    # Gallery categories and image data
```

## Main Features Implementation

### Gallery Categories
- Categories are defined in `src/constants/galleryData.ts`
- Each category has its own route under `/gallery/[category]`
- Images are loaded dynamically from the filesystem

### Image Modal
- Responsive image viewer
- Click anywhere outside the image to close
- ESC key support
- Smooth animations
- Maintains image aspect ratio

## Development

### Adding New Categories

1. Add images to a new folder in `public/images/`
2. Update `galleryData.ts` with the new category information:
```typescript
{
  id: 'category-id',
  name: 'Category Name',
  slug: 'category-id',
  folder: 'Folder Name',
  description: 'Category description',
  coverImage: 'cover.jpg'
}
```

### Modifying Styles

The project uses Tailwind CSS for styling. Main configuration is in:
- `tailwind.config.ts` - Tailwind configuration
- Individual component files - Component-specific styles

## License

This project is private and proprietary. All rights reserved.

## Contact

For any inquiries about this project, please reach out to [contact information].
