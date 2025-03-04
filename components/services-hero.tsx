'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ServicesHero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/swedishholistic.png"
        alt="Spa Services"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <motion.h1 
          className="text-5xl md:text-6xl font-serif mb-4 px-4 pt-30 mt-9 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Signature Spa Services
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
Indulge in our carefully curated aromatherapy treatments        </motion.p>
      </div>
    </div>
  )
}

