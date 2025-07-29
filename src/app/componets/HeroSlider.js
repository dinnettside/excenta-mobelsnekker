'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['hero.webp', 'hero5.webp', 'hero6.webp'];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // bytt hvert 5. sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <img src="/images/hero1.webp" alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
}
