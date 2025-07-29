'use client';
import { useState } from 'react';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <main className="min-h-screen relative">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Excenta</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-xl">☰</span>
        </button>
        <ul className={`fixed top-[70px] left-0 w-full bg-white z-40 flex flex-col md:flex-row md:static md:bg-transparent transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}`}>
          {[
            { href: '#tjenester', label: 'Tjenester' },
            { href: '#prosjekter', label: 'Prosjekter' },
            { href: '#hvorfor', label: 'Hvorfor oss' },
            { href: '#kontakt', label: 'Kontakt' },
            { href: '/blogg', label: 'Blogg' },
          ].map(({ href, label }) => (
            <li key={label}>
              <a href={href} className="block px-6 py-3 hover:text-blue-500" onClick={handleLinkClick}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
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
        <div className="space-y-20 max-w-6xl mx-auto">
          {/* BAD */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <img src="/tjeneste-bad.webp" alt="Baderomsinnredning" className="w-full md:w-1/2 rounded shadow" />
            <p className="md:w-1/2 text-gray-700">
              Vi lager spesialtilpasset baderomsinnredning i MDF, eik finer og laminat, alltid tilpasset rommets behov og stil.
            </p>
          </div>

          {/* GARDEROBE */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <img src="/tjeneste-garderobe.webp" alt="Plassbygde garderober" className="w-full md:w-1/2 rounded shadow" />
            <p className="md:w-1/2 text-gray-700">
              Vi designer og bygger garderober på mål som maksimerer lagringsplass og funksjonalitet – tilpasset både skråtak og nisjer.
            </p>
          </div>

          {/* KJØKKEN */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <img src="/tjeneste-kjoken.webp" alt="Skreddersydde kjøkken" className="w-full md:w-1/2 rounded shadow" />
            <p className="md:w-1/2 text-gray-700">
              Våre kjøkkenløsninger kombinerer funksjonalitet og design – laget i materialer som MDF, eik finer eller laminat etter ønske.
            </p>
          </div>
        </div>
      </section>

      {/* PROSJEKTER */}
      <section id="prosjekter" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">Tidligere prosjekter</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              bilde: 'kjokken1.webp',
              tekst: 'Eikekjøkken tilpasset en familie i Oslo – skreddersydd med plass til både barn og gjester.',
              alt: 'Skreddersydd kjøkken i eik'
            },
            {
              bilde: 'skap1.webp',
              tekst: 'Plassbygget oppbevaringsløsning i heltre, integrert i skråtak for optimal utnyttelse.',
              alt: 'Skapløsning under skråtak'
            },
            {
              bilde: 'bad11.webp',
              tekst: 'Moderne baderomsinnredning i minimalistisk stil med skyvedører og rene linjer.',
              alt: 'Moderne baderomsinnredning'
            },
          ].map(({ bilde, tekst, alt }, i) => (
            <div key={i} className="shadow rounded-lg overflow-hidden bg-white">
              <img src={`/${bilde}`} alt={alt} className="w-full h-auto object-cover" />
              <p className="mt-4 text-gray-700 text-sm px-4 pb-4">{tekst}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVORFOR OSS */}
      <section id="hvorfor" className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Hvorfor velge oss</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          Vi er et lite, dedikert team i Lierdalen AS som brenner for godt håndverk. Våre møbler bygges på mål med fokus på detaljer, kvalitet og god kommunikasjon underveis.
        </p>
        <ul className="list-disc text-left max-w-xl mx-auto text-gray-700 space-y-2">
          <li>Skreddersøm tilpasset ditt rom og behov</li>
          <li>Lokalt produsert i ekte materialer</li>
          <li>Bilder, mål og tegninger underveis</li>
          <li>Personlig oppfølging – du snakker direkte med snekkerne</li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Kontakt oss</h2>
        <p className="text-gray-700 mb-6">Ta kontakt for et gratis og uforpliktende møte – digitalt eller fysisk.</p>
        <p className="text-lg text-gray-800">📧 <a href="mailto:post@mobelsnekker.no" className="underline hover:text-blue-600">post@mobelsnekker.no</a></p>
        <p className="text-lg text-gray-800 mt-2">📞 <a href="tel:+4712345678" className="underline hover:text-blue-600">+47 12 34 56 78</a></p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-sm">© {new Date().getFullYear()} Møbelsnekker – Håndverk som varer. Laget av <a href="https://dinnettside.no" className="underline">DinNettside.no</a></p>
      </footer>
    </main>
  );
}
