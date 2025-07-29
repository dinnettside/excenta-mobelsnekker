import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], variable: '--font-serif' });

export const metadata = {
  title: 'Excenta',
  description: 'Skreddersydde møbler på mål',
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#f8f6f1] text-black font-sans">{children}</body>
    </html>
  );
}
