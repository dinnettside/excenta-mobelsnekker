'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = ['hero.webp', 'hero5.webp', 'hero6.webp'];

export default function HeroSlider() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <img src="/images/hero1.webp" alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
}
