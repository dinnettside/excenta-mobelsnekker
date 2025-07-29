import './globals.css';
import Navbar from './components/Navbar'; // ✅ riktig


export const metadata = {
  title: 'Mitt Prosjekt – Skreddersydd design',
  description: 'Vi lager vakre og raske nettsider som gir deg flere kunder.',
  keywords: ['nettside', 'design', 'håndverk', 'møbelsnekker', 'Next.js'],
  openGraph: {
    title: 'Mitt Prosjekt – Skreddersydd design',
    description: 'Nettsider som faktisk konverterer.',
    url: 'https://dittdomene.no',
    siteName: 'Mitt Prosjekt',
    images: [
      {
        url: '/images/preview.webp',
        width: 1200,
        height: 630,
        alt: 'Nettside forhåndsvisning',
      },
    ],
    locale: 'nb_NO',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
