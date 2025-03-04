'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function FAQHero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/aipicspa2.jpeg"
        alt="FAQ hero image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-serif mb-1 text-white px-4 pt-30 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Your Questions, Answered.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find answers to common questions about our spa services and treatments
        </motion.p>
      </div>
    </div>
  )
}

