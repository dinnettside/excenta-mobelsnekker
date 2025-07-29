'use client';

import { useState, useEffect } from 'react';
import HeroSlider from './components/HeroSlider';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth relative">
      {/* NAVIGASJON */}
      <nav className="w-full px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Excenta</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-xl">☰</span>
        </button>
        <ul className={`fixed top-[70px] left-0 w-full bg-white z-40 flex flex-col md:flex md:flex-row md:static md:w-auto md:bg-transparent transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}`}>
          {[
            { href: '#tjenester', label: 'Tjenester' },
            { href: '#prosjekter', label: 'Prosjekter' },
            { href: '#hvorfor', label: 'Hvorfor oss' },
            { href: '#kontakt', label: 'Kontakt' },
            { href: '/blogg', label: 'Blogg' },
          ].map(({ href, label }) => (
            <li key={label}>
              <a href={href} className="block px-6 py-3 text-gray-800 hover:text-blue-500" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO-SEKSJON */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-black text-white">
        <HeroSlider />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">Skreddersydd håndverk</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto drop-shadow">Kvalitet og håndverk tilpasset dine behov 🪚 laget lokalt.</p>
        </div>
      </section>

      {/* TJENESTER */}
      <section id="tjenester" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">Våre tjenester</h2>
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {[ 
            {
              bilde: 'tjeneste-bad.webp',
              tekst: 'Vi lager spesialtilpasset baderomsinnredning i MDF, eik finer og laminat, alltid tilpasset rommets mål og stil.'
            },
            {
              bilde: 'tjeneste-garderobe.webp',
              tekst: 'Vi designer og bygger garderober på mål som maksimerer lagringsplass og funksjonalitet.'
            },
            {
              bilde: 'tjeneste-kjokken.webp',
              tekst: 'Skreddersydde kjøkken i eik finer og laminat – bygget med fokus på funksjon, estetikk og varighet.'
            }
          ].map(({ bilde, tekst }, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-6 text-left">
              <img src={`/${bilde}`} alt="Tjeneste bilde" className="w-full md:w-1/2 rounded shadow" />
              <p className="md:w-1/2 text-gray-800 text-lg">{tekst}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROSJEKTER */}
      <section id="prosjekter" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">Prosjekter</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              bilde: 'images/kjokken1.webp',
              tekst: 'Et elegant kjøkken laget i eik finer, skreddersydd etter kundens mål.'
            },
            {
              bilde: 'images/skap1.webp',
              tekst: 'Plassbygd oppbevaringsløsning i malt MDF – perfekt tilpasset skråtak.'
            },
            {
              bilde: 'images/bad11.webp',
              tekst: 'Moderne baderomsinnredning med LED-speil og mørk, lun helhet.'
            },
          ].map(({ bilde, tekst }, i) => (
            <div key={i} className="text-left">
              <img src={`/${bilde}`} alt="Prosjekt bilde" className="w-full h-auto object-cover rounded shadow" />
              <p className="mt-4 text-gray-700 text-base">{tekst}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVORFOR OSS */}
      <section id="hvorfor" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Hvorfor velge oss</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          Vi holder prisene nede fordi vi ikke lager førstehåndstegninger. Du sender oss målene dine, vi kommer på befaring, lager produksjonstegninger du godkjenner – og setter i gang produksjon.
        </p>
        <ul className="list-disc text-left max-w-xl mx-auto text-gray-700 space-y-2">
          <li>Skreddersøm tilpasset ditt rom og behov</li>
          <li>Lokalt produsert i MDF, eik finer og laminat</li>
          <li>Kunden sender mål og skisser, vi lager produksjonstegninger</li>
          <li>Statusoppdateringer underveis og montering inkludert</li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Kontakt oss</h2>
        <p className="text-gray-700 mb-6">Ta kontakt for et gratis og uforpliktende møte – digitalt eller fysisk.</p>
        <p className="text-lg text-gray-800">📧 <a href="mailto:post@excenta.no" className="underline hover:text-blue-600">post@excenta.no</a></p>
        <p className="text-lg text-gray-800 mt-2">📞 <a href="tel:+4712345678" className="underline hover:text-blue-600">+47 12 34 56 78</a></p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-sm">© {new Date().getFullYear()} Excenta AS – laget av <a href="https://dinnettside.no" className="underline">dinnettside.no</a></p>
      </footer>
    </main>
  );
}
