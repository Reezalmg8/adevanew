'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/adevahealingspatreatment.png"
        alt="Our Team"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <motion.h1 
          className="text-5xl md:text-6xl font-serif mb-1 px-4 pt-30 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Our Story of Holistic Healing
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A place to relax, refresh, and rejuvenate
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
      
        </motion.div>
      </div>
    </div>
  )
}

