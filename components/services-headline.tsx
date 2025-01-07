'use client'

import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Leaf } from 'lucide-react'

export function ServicesHeadline() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      style={{
        background: 'linear-gradient(to right, #F8E3DA, #DED3B2)'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/spa-bg.jpg)',
            filter: 'blur(8px) brightness(0.9)',
            transform: 'scale(1.1)'
          }}
        />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <Leaf className="w-12 h-12 mx-auto mb-6 text-[#6F5541] opacity-75" />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#6F5541] mb-6 leading-tight">
        Experience Ultimate Relaxation at Adeva Spa
        </h2>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#6F5541]/80 mb-8 leading-relaxed">
          Our holistic massage studio offers a sanctuary for your senses, where timeless traditions meet modern wellness practices. Let us guide you on a journey to restore harmony, relieve stress, and elevate your overall well-being with our thoughtfully curated services.
        </p>
        
        <Button 
          className="bg-[#6F5541] text-white hover:bg-[#A99074] transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg rounded-full shadow-lg"
        >
          Explore Our Services
        </Button>

        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Leaf className="w-24 h-24 text-[#6F5541]/10 transform -rotate-45" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Leaf className="w-24 h-24 text-[#6F5541]/10 transform rotate-45" />
        </div>
      </div>
    </section>
  )
}

