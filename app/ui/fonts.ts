import { Inter, Lusitana } from 'next/font/google';
import { Sour_Gummy } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const sourGummy = Sour_Gummy({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sour-gummy',
});

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });