'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function GalleryHero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/gallery2.jpg"
        alt="Gallery hero image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-serif mb-4 text-white px-4 pt-30 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Glimpse of Our Blissful World
        </motion.h1>
      </div>
    </div>
  )
}

