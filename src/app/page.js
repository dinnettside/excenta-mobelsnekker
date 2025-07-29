'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Skreddersydd kjøkken i heltre eik',
    image: '/images/kjokken1.webp',
    alt: 'Eikekjøkken med svart benkeplate',
  },
  {
    title: 'Baderomsinnredning under skråtak',
    image: '/images/tjeneste-bad.webp',
    alt: 'Moderne bad med innebygd oppbevaring',
  },
  {
    title: 'Plassbygget skyvedørsgarderobe',
    image: '/images/tjeneste-garderobe.webp',
    alt: 'Skyvedørsgarderobe i sort',
  },
  {
    title: 'Hvitmalt vitrineseksjon',
    image: '/images/skap1.webp',
    alt: 'Vitrineskap med glass og innfelt lys',
  },
  {
    title: 'Sort eik i minimalistisk stil',
    image: '/images/hero5.webp',
    alt: 'Moderne sort kjøkken i eik',
  },
  {
    title: 'Spisebord på mål',
    image: '/images/bad1.webp',
    alt: 'Rundt spisebord i heltre',
  },
];

export default function Projects() {
  return (
    <section id="prosjekter" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Våre prosjekter
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ title, image, alt }, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
