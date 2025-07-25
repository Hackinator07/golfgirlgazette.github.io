import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TranslationWidget from '@/components/TranslationWidget';

export const metadata: Metadata = {
  title: 'Golf Girl Gazette',
  description: 'Your premier source for LPGA women\'s golf news, tournament coverage, and exclusive content.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <TranslationWidget />
      </body>
    </html>
  );
}
