import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/context/LangContext';

export const metadata: Metadata = {
  title: 'Josué Gallego — Multimedia Engineer',
  description: 'Portfolio of Josué Gallego, Multimedia Engineer, UI/UX Explorer & 3D Artist.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
