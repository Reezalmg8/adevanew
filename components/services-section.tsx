'use client'

import { useState, useRef, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'
import { ServiceCard } from './service-card'
import type { Category } from '../types/service'

const services: Category[] = [
  {
    category: 'ADEVA SOLE TREATMENTS',
    
    items: [
      {
        name: 'Himalayan Foot Massage',
        image: '/images/treatment-3.jpg',
        description: 'Aromatherapy Foot Massage + Himalayan Salt Hot stone + Gua Sha + Thermal Therapy\nSole Synergy Essential Oil Option: Peace of Mind or Sweet Dream',
        therapeuticNote: 'Therapeutic Himalayan salt stones help detoxify and stimulate the body\'s healing process, enhance muscle relaxation, alleviate stress, and boost blood circulation.',
       
      },
      {
        name: 'Bespoke Therapy',
        image: '/images/bespoketherapy.png',
        description: 'Aromatherapy Foot Massage, Head, Neck and Shoulder + Gua Sha + Thermal Therapy\nSynergy Essential Oil Option: Peace of Mind or Sweet Dream',
        therapeuticNote: 'Recommended for feet pampering and releasing shoulder tensions.',
       
      },
    ],
  },
  {
    category: 'ADEVA TREATMENTS',
    
    items: [
      {
        name: 'Indian Head Massage Therapy',
        image: '/images/headmassage.png',
        description: ' Head, Neck, Face, and Shoulder Massage + Thermal Therapy Synergy Essential Oil Option: Peace of Mind or Sweet Dream Facial Oil Option: Primrose Evening Oil / Rosehip Oil',
        therapeuticNote: ' It helps relieve migraines, headaches, insomnia, and fatigue, alleviate stress and tension, stimulate hair growth, detoxify through lymphatic drainage, enhance relaxation, improve overall well-being, and facilitate better rest',
        
      },
      
    ],
  },
  {
    category: 'ADEVA BODY TREATMENTS',
    items: [
      {
        name: 'Adeva Signature Body Massage',
        image: '/images/adevasignaturebodymsg.png',
        description: 'Whole Body Massage with Synergy Aromatherapy Massage Oil + Thermal Therapy',
        therapeuticNote: 'A fusion of Eastern meridian and Western classical massage techniques for relieving knots and untangling muscles to ease aches and pains.',
        
      },
      {
        name: 'Swedish Holistic Body Massage',
        image: '/images/swedishholistic.jpg',
        description: 'Whole Body Relaxation Massage with Synergy Aromatherapy Massage Oil + Thermal Therapy',
        therapeuticNote: 'Classical massage techniques designed to relax tense muscles, increase oxygen flow in the blood, reduce stress and anxiety, and release toxins.',
        
      },
            {
        name: 'Intuitive Wellness Massage',
        image: '/images/spa-hero-2.jpg',
        description: 'Whole Body Massage with Warm Synergy Aromatherapy Massage Oil + Thermal Therapy',
        therapeuticNote: 'Warm oil massage that improves skin health, relaxes muscles, and helps drain the lymphatic nodes.',
        
      },
      {
        name: 'Sports Massage',
        image: '/images/sport.png',
        description: 'Whole Body Massage + Thermal Therapy',
        therapeuticNote: 'Sports massage is a therapy that boosts athletic performance, prevents injuries, and aids recovery. It targets tense areas using deep pressure and stretching techniques to promote muscle tension relief, improved flexibility, and reduced soreness.',
        
      },
      {
        name: 'Ginger Cupping Bliss',
        image: '/images/gingercuping.png',
        description: 'Whole Body Massage with Synergy Aromatherapy Massage Oil + Ginger Cupping + Thermal Therapy',
        therapeuticNote: 'Promotes pain relief, improves blood circulation, relaxation, detoxification, and respiratory support.',
        
      },
      {
        name: 'Harmony Himalayan Therapy',
        image: '/images/harmonyhimalayan.png',
        description: 'Whole Body Massage with Synergy Aromatherapy Massage Oil + Himalayan Salt Hot Stone + Thermal Therapy',
        therapeuticNote: 'The therapeutic Himalayan salt stones promote gentle exfoliation, improve skin\'s glowing complexion, muscle relaxation, deep relaxation, detoxify the body, and stimulate the healing process.',
        
      },
      {
        name: 'Hilot Healing Hands',
        image: '/images/hilothealing.png',
        description: 'Whole Body Massage with Synergy Aromatherapy Massage Oil + Warm Banana Leaf + Thermal Therapy + Ginger Molasses Tea',
        therapeuticNote: 'Experience the ancient Filipino healing tradition of Hilot with warm banana leaves infused with aromatherapy treatment oil. This treatment stimulates circulation, releases tension, boosts the immune system, promotes positive effect on the reproductive system, and detoxifies the body.',
        
      },
      {
        name: 'Lymphatic Drainage Therapy',
        image: '/images/lymp.jpeg',
        description: 'Whole Body Massage with Detoxifying Aromatherapy Massage Oil + Thermal Therapy + Ginger Molasses Tea',
        therapeuticNote: 'A gentle, rhythmic massage technique designed to stimulate lymphatic circulation, aiding the removal of toxins, waste products, and excess fluids from the body. This soothing stimulation helps reduce swelling, relieve discomfort associated with lymphedema, and encourage relaxation'
      },
      {
        name: 'Eco-Shape Treatment',
        image: '/images/ecoshape.jpeg',
        description: ' Whole Body Massage with Synergy Aromatherapy Slimming Massage Oil + Wood Sculpting + Thermal Therapy + Ginger Molasses Tea',
        therapeuticNote: ' Experience a natural, non-invasive body shaping method using sustainable tools.Eco-Shape improves skin appearance while toning and sculpting the figure, targeting cellulite and stubborn fat at different depths. Enhanced with aromatherapy oil for a smooth application without any damage. But keep in mind - its all about contouring, not weight loss!',
        
      },
      {
        name: 'Healing Spa Treatment',
        image: '/images/adevahealingspatreatment.png',
        description: 'Enjoy a unique and revitalizing 3-hour experience at our exclusive Healing Spa',
        therapeuticNote: 'A personalized consultation to understand your specific needs,  A 10-minute Himalayan foot scrub to exfoliate and soften your feet , A 15-minute lymphatic dry brush treatment that will stimulate circulation,  detoxify the body, and make your skin feel soft,  A soothing warm bath soak infused with magnesium flakes, synergy  aromatherapy oils, and fresh milk to relax and rejuvenate, Thermal therapy to ease muscle tension and promote relaxation, A 120-minute full-body massage of your choice:  Adeva Signature Massage or  Swedish Massage',
       
      },
      
    ],
  },
  {
    category: 'ADEVA AROMATHERAPY',
    items: [
      {
        name: 'Aromatherapy Consultation',
        image: '/images/consultation.jpg',
        description: 'Book a session with our certified IFA aromatherapists to create a bespoke synergy of essential oil blends tailored to your unique needs, enhancing your physical, emotional, and mental well-being.',
        therapeuticNote: 'Our expert aromatherapists will assess your needs and create custom essential oil blends that support your wellness journey.',
       
      },
    ],
  },
  
  {
    category: 'ADD ON TREATMENTS',
    items: [
      {
        name: ' Lymphatic Dry Brush',
        image: '/images/treatment-2.jpg',
        description: 'whole Body Dry Brush + Body Treatment Oil',
        therapeuticNote: 'Lymphatic dry brushing is a technique that helps stimulate the lymphatic system, promoting better body detoxification and circulation. It can also exfoliate the skin, remove dead cells, and improve overall skin health',
       
      },
      {
        name: ' Foot Soak Therapy',
        image: '/images/product-6.jpg',
        description: 'Magnesium Flakes + Fresh Milk Synergy Essential Oil Option: Peace of Mind or Sweet Dream',
        therapeuticNote: 'A magnesium flake, milk, and essential oil foot soak pampers your feet with relaxation, softer skin, and potential relief from aches and dryness, Recommended for tired feet, dry skin, stress, or occasional foot discomfort',
        
      },
    ],
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.section-title')?.classList.add('active')
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-serif text-[#6F5541] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-[#A99074] max-w-2xl mx-auto mb-8">
            Experience Ultimate Relaxation at Adeva Holistic Aromatherapy Spa
          </p>
        </motion.div>

        <Tabs defaultValue={services[0].category} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-12">
            {services.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TabsTrigger
                  value={category.category}
                  className="px-6 py-3 text-[#6F5541] hover:text-[#A99074] focus:outline-none transition-colors duration-300"
                >
                  {category.category}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          {services.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center">
                {category.items.map((service, index) => (
                  <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.name}
                    description={service.description}
                    therapeuticNote={service.therapeuticNote}
                    isConsultation={service.name.includes('Consultation')}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
