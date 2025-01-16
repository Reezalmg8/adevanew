'use client'

import { useState, useRef, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'
import { ServiceCard } from './service-card'
import { ChevronDown } from 'lucide-react'
import type { Category } from '../types/service'

const services: Category[] = [
  {
    category: 'ADEVA SOLE TREATMENTS',
    
    items: [
      {
        name: 'Himalayan Foot Massage',
        image: '/images/treatment-3.jpg',
        therapeuticNote: 'Therapeutic Himalayan salt stones help detoxify and stimulate the body\'s healing process, enhance muscle relaxation, alleviate stress, and boost blood circulation.',
       
      },
      {
        name: 'Bespoke Therapy',
        image: '/images/bespoketherapy.png',
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
        therapeuticNote: 'A fusion of Eastern meridian and Western classical massage techniques for relieving knots and untangling muscles to ease aches and pains.',
        
      },
      {
        name: 'Swedish Holistic Body Massage',
        image: '/images/swedishholistic.jpg',
        therapeuticNote: 'Classical massage techniques designed to relax tense muscles, increase oxygen flow in the blood, reduce stress and anxiety, and release toxins.',
        
      },
            {
        name: 'Intuitive Wellness Massage',
        image: '/images/spa-hero-2.jpg',
        therapeuticNote: 'Warm oil massage that improves skin health, relaxes muscles, and helps drain the lymphatic nodes.',
        
      },
      {
        name: 'Sports Massage',
        image: '/images/sport.png',
        therapeuticNote: 'Sports massage is a therapy that boosts athletic performance, prevents injuries, and aids recovery. It targets tense areas using deep pressure and stretching techniques to promote muscle tension relief, improved flexibility, and reduced soreness.',
        
      },
      {
        name: 'Ginger Cupping Bliss',
        image: '/images/gingercuping.png',
        therapeuticNote: 'Promotes pain relief, improves blood circulation, relaxation, detoxification, and respiratory support.',
        
      },
      {
        name: 'Harmony Himalayan Therapy',
        image: '/images/harmonyhimalayan.png',
        therapeuticNote: 'The therapeutic Himalayan salt stones promote gentle exfoliation, improve skin\'s glowing complexion, muscle relaxation, deep relaxation, detoxify the body, and stimulate the healing process.',
        
      },
      {
        name: 'Hilot Healing Hands',
        image: '/images/hilothealing.png',
        therapeuticNote: 'Experience the ancient Filipino healing tradition of Hilot with warm banana leaves infused with aromatherapy treatment oil. This treatment stimulates circulation, releases tension, boosts the immune system, promotes positive effect on the reproductive system, and detoxifies the body.',
        
      },
      {
        name: 'Lymphatic Drainage Therapy',
        image: '/images/lymp.jpeg',
        therapeuticNote: 'A gentle, rhythmic massage technique designed to stimulate lymphatic circulation, aiding the removal of toxins, waste products, and excess fluids from the body. This soothing stimulation helps reduce swelling, relieve discomfort associated with lymphedema, and encourage relaxation'
      },
      {
        name: 'Eco-Shape Treatment',
        image: '/images/ecoshape.jpeg',
        therapeuticNote: ' Experience a natural, non-invasive body shaping method using sustainable tools.Eco-Shape improves skin appearance while toning and sculpting the figure, targeting cellulite and stubborn fat at different depths. Enhanced with aromatherapy oil for a smooth application without any damage. But keep in mind - its all about contouring, not weight loss!',
        
      },
      {
        name: 'Healing Spa Treatment',
        image: '/images/adevahealingspatreatment.png',
        therapeuticNote: 'A personalized consultation to understand your specific needs,  a 10-minute Himalayan foot scrub to exfoliate and soften your feet , a 15-minute lymphatic dry brush treatment that will stimulate circulation,  detoxify the body, and make your skin feel soft,   soothing warm bath soak infused with magnesium flakes, synergy  aromatherapy oils, and fresh milk to relax and rejuvenate, Thermal therapy to ease muscle tension and promote relaxation, a 120-minute full-body massage of your choice:  Adeva Signature Massage or  Swedish Massage',
       
      },
      
    ],
  },
  {
    category: 'ADEVA AROMATHERAPY',
    items: [
      {
        name: 'Aromatherapy Consultation',
        image: '/images/consultation.jpg',
        therapeuticNote: 'Book a session with our certified IFA aromatherapists to create a bespoke synergy of essential oil blends tailored to your unique needs, enhancing your physical, emotional, and mental well-being.',
       
      },
    ],
  },
  
  {
    category: 'ADD ON TREATMENTS',
    items: [
      {
        name: ' Lymphatic Dry Brush',
        image: '/images/treatment-2.jpg',
        therapeuticNote: 'Lymphatic dry brushing is a technique that helps stimulate the lymphatic system, promoting better body detoxification and circulation. It can also exfoliate the skin, remove dead cells, and improve overall skin health',
       
      },
      {
        name: ' Foot Soak Therapy',
        image: '/images/product-6.jpg',
        therapeuticNote: 'A magnesium flake, milk, and essential oil foot soak pampers your feet with relaxation, softer skin, and potential relief from aches and dryness, Recommended for tired feet, dry skin, stress, or occasional foot discomfort',
        
      },
    ],
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(services[0].category)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#6F5541] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-[#A99074] max-w-2xl mx-auto mb-8">
            Experience Ultimate Relaxation at Adeva Holistic Aromatherapy Spa
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative mb-8" ref={dropdownRef}>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full px-4 py-3 bg-white rounded-lg shadow-sm flex items-center justify-between text-[#6F5541] border border-[#DED3B2]"
            >
              <span>{activeTab}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
              {isMobileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 overflow-hidden"
                >
                  {services.map((category) => (
                    <button
                      key={category.category}
                      onClick={() => {
                        setActiveTab(category.category)
                        setIsMobileDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-[#F8E3DA] transition-colors ${
                        activeTab === category.category ? 'bg-[#F8E3DA] text-[#6F5541]' : 'text-[#A99074]'
                      }`}
                    >
                      {category.category}
                    </button>
                  ))}
                </motion.div>
              )}
          </div>

          {/* Desktop Tabs */}
          <TabsList className="hidden md:flex w-full justify-center mb-12">
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

          {/* Content */}
          {services.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              {category.subtitle && (
                <p className="text-center text-[#A99074] italic mb-8">
                  {category.subtitle}
                </p>
              )}
              <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service, index) => (
                  <ServiceCard
                    key={index}
                    image={service.image}
                    title={service.name}
                    therapeuticNote={service.therapeuticNote}
                    isConsultation={service.name === 'Aromatherapy Consultation'}
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

