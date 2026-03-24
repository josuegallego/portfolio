import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/context/LangContext';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Josué Gallego — Multimedia Engineer',
  description: 'Portfolio of Josué Gallego, Multimedia Engineer, UI/UX Explorer & 3D Artist.',
  icons: {
    icon: '/sticker.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="antialiased font-sans">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
