'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const images = [
  '/hero1.webp',
  '/hero2.webp',
  '/hero3.webp',
  '/hero4.webp',
  '/hero5.webp',
];

export default function Hero() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-[#f7f5ef] text-black overflow-hidden"
      ref={containerRef}
    >
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-7xl font-light tracking-tight leading-tight">
          CRAFTING <br />
          <span className="font-serif text-6xl md:text-8xl">LUXURY SPACES</span>
        </h1>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px]">
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="absolute top-0 left-1/2 -translate-x-1/2"
            initial={{ rotate: 0, x: 0, y: 0 }}
            animate={
              hasAnimated
                ? {
                    rotate: [-10 + i * 5, -15 + i * 10],
                    x: [-10 + i * 20, -100 + i * 80],
                    y: [-10 + i * 10, -30 + i * 20],
                    transition: { duration: 1, delay: i * 0.1 },
                  }
                : {}
            }
          >
            <Image
              src={src}
              alt=""
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
