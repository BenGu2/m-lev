import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Costume Rental",
  description: "Your premier destination for costume rentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <LanguageProvider>
        <body className="antialiased font-sans min-h-screen flex flex-col bg-white text-gray-900">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </LanguageProvider>
    </html>
  );
}
