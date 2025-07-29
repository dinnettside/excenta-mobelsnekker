'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
    '/hero1.webp',
    '/hero2.webp',
    '/hero3.webp',
    '/hero4.webp',
    '/hero5.webp',
];

export default function CardStackHero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-[#f8f6f1] overflow-hidden">
            <h1 className="text-[min(20vw,10rem)] leading-none font-light text-center tracking-tight">
                <span className="block font-light">CRAFTING</span>
                <span className="block">
                    <span className="font-light">LUXURY </span>
                    <span className="font-serif">SPACES</span>
                </span>
            </h1>

            <div className="relative w-[300px] h-[400px] mt-12">
                {images.map((src, index) => {
                    const rotate = scrollY > 50 ? (index - 2) * 15 : 0;
                    const translateX = scrollY > 50 ? (index - 2) * 100 : 0;
                    const zIndex = images.length - index;

                    return (
                        <motion.div
                            key={src}
                            className="absolute w-full h-full rounded-lg overflow-hidden shadow-xl"
                            style={{ zIndex }}
                            initial={{ rotate: 0, x: 0 }}
                            animate={{ rotate, x: translateX }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                        >
                            <Image
                                src={src}
                                alt="hero image"
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </motion.div>
                    );
                })}
            </div>

            <section className="w-full px-4 py-24 text-center">
                <h2 className="text-4xl font-serif mb-6">Våre tjenester</h2>
                <p className="max-w-xl mx-auto text-gray-700">
                    Vi tilbyr skreddersydde kjøkken, garderober og baderomsinnredninger laget i
                    malt MDF, eik finer og laminat.
                </p>
            </section>

            <section className="w-full px-4 py-24 text-center bg-blue-50">
                <h2 className="text-4xl font-serif mb-6">Tidligere prosjekter</h2>
                <p className="max-w-xl mx-auto text-gray-700">
                    Et utvalg av våre håndlagde møbelløsninger – hver og én tilpasset
                    kundens rom og behov.
                </p>
            </section>

            <footer className="w-full px-4 py-12 text-center bg-gray-900 text-white">
                <h2 className="text-xl font-serif mb-2">Kontakt oss</h2>
                <p className="text-sm">
                    © {new Date().getFullYear()} Excenta AS – Håndverk som varer
                </p>
            </footer>
        </section>
    );
}
