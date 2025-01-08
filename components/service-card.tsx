'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Clock } from 'lucide-react'
import type { Service } from '../types/service'

interface ServiceCardProps {
  image: string
  title: string
  therapeuticNote: string
  isConsultation?: boolean
}

export function ServiceCard({ 
  image, 
  title, 
  therapeuticNote,
  isConsultation = false 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
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
        
        <div className="space-y-4">
          
          <p className="text-[#A99074] text-sm italic">
            *{therapeuticNote}
          </p>
        </div>

        {isConsultation && (
          <Button 
            asChild
            className="w-full group bg-[#6F5541] hover:bg-[#A99074] text-white transition-all duration-300"
          >
            <a 
              href="https://wa.me/+60128853836" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Your Tailored Aromatherapy Blend
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}
