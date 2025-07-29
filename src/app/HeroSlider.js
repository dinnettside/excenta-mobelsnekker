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
    <div className="absolute inset-0 z-0">
      {images.map((img, i) => (
        <Image
          key={img}
          src={`/images/${img}`}
          alt={`Hero image ${i + 1}`}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Mørkt filter over bildet */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
