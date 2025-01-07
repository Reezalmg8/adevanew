'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { EnhancedHeader } from './enhanced-header'
import { ServicesSection } from './services-section'
import { TestimonialSection } from './testimonial-section'
import { InstagramSection } from './instagram-section'
import { FAQSection } from './faq-section'
import { Footer } from './footer'
import { ContactSection } from './contact-section'
import { Button } from "@/components/ui/button"
import { AboutUs } from './about-us'
import { WhyChooseUs } from './why-choose-us'

const heroImages = [
  '/images/spa-hero-1.jpg',
  '/images/spa-hero-2.jpg',
  '/images/spa-hero-3.jpg',
]

export function LandingPageComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const controls = useAnimation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    name: string
    description: string
    pricing: { duration: string; member: string; nonMember: string }[]
  } | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }


  return (
    <div className="min-h-screen bg-white text-[#6F5541] font-sans">
      <EnhancedHeader />

      <main>
        <section className="relative h-screen w-full overflow-hidden">
          {heroImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={src}
                alt={`Spa ambiance ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div 
            className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.span 
              className="font-light tracking-[0.2em] text-sm sm:text-base mb-4"
              variants={fadeInUp}
            >
              WELCOME TO
            </motion.span>
            <motion.h1 
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl leading-tight"
              variants={fadeInUp}
            >
              ADEVA HOLISTIC AROMATHERAPY SPA
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl font-light"
              variants={fadeInUp}
            >
              Discover the Art of Holistic Healing
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                asChild
                className="bg-white text-[#6F5541] hover:bg-[#6F5541] hover:text-white transition-colors px-8 py-3 text-lg animate-pulse-subtle"
              >
                <a 
                  href="https://wa.me/+60128853836" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >BOOK NOW</a>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <AboutUs />
        <WhyChooseUs />
        <ServicesSection/>
        <TestimonialSection />
        <InstagramSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      
    </div>
  )
}

