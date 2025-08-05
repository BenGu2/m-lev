'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { useLanguage } from '@/components/LanguageProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang="he" dir="rtl" className={inter.variable}>
        <body className="antialiased font-sans min-h-screen flex flex-col bg-white text-gray-900">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </LanguageProvider>
  );
}
