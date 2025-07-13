import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
      return NextResponse.json(
        { error: 'Category parameter is required' },
        { status: 400 }
      );
    }

    // Construct the path to the images directory
    const imagesDirectory = path.join(process.cwd(), 'public', 'images', category);

    try {
      // Read the directory
      const files = await fs.readdir(imagesDirectory);
      
      // Filter out any non-image files (optional)
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );

      return NextResponse.json({ images: imageFiles });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        // Directory doesn't exist
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }
      throw error; // Re-throw other errors
    }
  } catch (error) {
    console.error('Error in images API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
