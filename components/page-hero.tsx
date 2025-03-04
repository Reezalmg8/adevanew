"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  height?: "full" | "large" | "medium"
}

const heights = {
  full: "h-screen",
  large: "h-[90vh]",
  medium: "h-[70vh]", // Increased from 60vh
}

export function PageHero({ title, subtitle, backgroundImage, height = "medium" }: PageHeroProps) {
  return (
    <div className={`relative ${heights[height]} flex items-center justify-center overflow-hidden pt-24`}>
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative text-center text-white px-4 pt-30 mt-8"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-20 h-[1px] bg-white/80 mx-auto mb-6"
        />

        <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl mb-4">{title}</h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-20 h-[1px] bg-white/80 mx-auto mt-6"
        />
      </motion.div>
    </div>
  )
}

