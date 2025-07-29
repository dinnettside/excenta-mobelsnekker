'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const heroImages = [
  "/images/hero.webp",
  "/images/hero5.webp",
  "/images/hero6.webp",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [imageFade, setImageFade] = useState(true);

  // Hero-bilde fade-effekt
  useEffect(() => {
    const interval = setInterval(() => {
      setImageFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setImageFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Observer for fade-in seksjoner
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <nav className={styles.menu}>
          <div className={styles.logo}>Excenta AS</div>
          <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={menuOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
            <li><a href="#omoss">Om oss</a></li>
            <li><a href="#tjenester">Tjenester</a></li>
            <li><a href="#prosjekter">Prosjekter</a></li>
            <li><a href="#hvorfoross">Hvorfor oss</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>

        <div className={`${styles.heroImage} ${imageFade ? styles.fadeIn : styles.fadeOut}`}>
          <Image
            src={heroImages[currentImage]}
            alt="Hero image"
            fill
            style={{ objectFit: "cover" }}
            priority
            placeholder="blur"
            blurDataURL="/images/hero.webp"
          />
          <div className={styles.heroOverlay} />
        </div>
      </div>

      <section
        id="omoss"
        className={`${styles.section} ${styles.fade} ${visibleSections["omoss"] ? styles.visible : ""}`}
      >
        <h2>Om oss</h2>
        <p>Excenta AS er en dedikert møbelsnekkerbedrift som spesialiserer seg på skreddersydde løsninger. Vi leverer kvalitet og presisjon – alltid tilpasset dine behov.</p>
      </section>

      <section
        id="tjenester"
        className={`${styles.section} ${styles.fade} ${visibleSections["tjenester"] ? styles.visible : ""}`}
      >
        <h2>Våre tjenester</h2>
        <div className={styles.service}>
          <Image src="/images/tjeneste-bad.webp" alt="Bad" width={600} height={400} placeholder="blur" blurDataURL="/images/tjeneste-bad.webp" />
          <p>Vi lager spesialtilpasset baderomsinnredning i MDF, eik finer og laminat, alltid tilpasset rommets dimensjoner og dine ønsker.</p>
        </div>
        <div className={styles.service}>
          <Image src="/images/tjeneste-garderobe.webp" alt="Garderobe" width={600} height={400} placeholder="blur" blurDataURL="/images/tjeneste-garderobe.webp" />
          <p>Vi designer og bygger garderober på mål som maksimerer lagringsplass og funksjonalitet.</p>
        </div>
        <div className={styles.service}>
          <Image src="/images/tjeneste-kjokken.webp" alt="Kjøkken" width={600} height={400} placeholder="blur" blurDataURL="/images/tjeneste-kjokken.webp" />
          <p>Skreddersydde kjøkken i slitesterke og elegante materialer. Kundens tegninger er vårt utgangspunkt.</p>
        </div>
      </section>

      <section
        id="prosjekter"
        className={`${styles.section} ${styles.fade} ${visibleSections["prosjekter"] ? styles.visible : ""}`}
      >
        <h2>Prosjekter</h2>
        <div className={styles.project}>
          <Image src="/images/kjokken1.webp" alt="Kjøkkenprosjekt" width={600} height={400} placeholder="blur" blurDataURL="/images/kjokken1.webp" />
          <p>Et elegant kjøkken laget i eik finer, skreddersydd etter kundens mål.</p>
        </div>
        <div className={styles.project}>
          <Image src="/images/skap1.webp" alt="Skapprosjekt" width={600} height={400} placeholder="blur" blurDataURL="/images/skap1.webp" />
          <p>Plassbygd oppbevaringsløsning i malt MDF – perfekt tilpasset skråtak.</p>
        </div>
        <div className={styles.project}>
          <Image src="/images/bad11.webp" alt="Badprosjekt" width={600} height={400} placeholder="blur" blurDataURL="/images/bad11.webp" />
          <p>Baderomsinnredning i laminat, med praktisk og stilrent uttrykk.</p>
        </div>
      </section>

      <section
        id="hvorfoross"
        className={`${styles.section} ${styles.fade} ${visibleSections["hvorfoross"] ? styles.visible : ""}`}
      >
        <h2>Hvorfor velge Excenta?</h2>
        <ul>
          <li>Skreddersydde løsninger etter dine tegninger</li>
          <li>Vi holder prisene lave ved å bruke kundens tegninger som utgangspunkt</li>
          <li>Gratis befaring og kontrollmåling</li>
          <li>Du godkjenner produksjonstegningene før vi starter</li>
          <li>Full oversikt over fremdrift og status</li>
          <li>Vi står for montering</li>
        </ul>
      </section>

      <footer id="kontakt">
        <p>Kontakt: post@excenta.no | Tlf: 46802748</p>
        <p>© {new Date().getFullYear()} Excenta AS – laget av <a href="https://dinnettside.no">dinnettside.no</a></p>
      </footer>
    </main>
  );
}
