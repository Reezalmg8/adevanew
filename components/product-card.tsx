'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  image: string
  title: string
  description: string
  price: string
}

export function ProductCard({ image, title, description, price }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
      </div>
      
      <div className="p-8 space-y-6">
        <motion.h3 
          className="text-2xl font-serif text-[#6F5541]"
          initial={false}
          animate={{ color: isHovered ? '#A99074' : '#6F5541' }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-[#6F5541] leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-[#6F5541]">{price}</span>
          <Button 
            className="bg-[#6F5541] hover:bg-[#A99074] text-white transition-colors duration-300"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

