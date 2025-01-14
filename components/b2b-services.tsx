'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface Collaboration {
  name: string
  description: string
  image: string
  link?: string
}

const collaborations: Collaboration[] = [
  {
    name: "Adeva's Event Collab with Blendsmith",
    description: "A unique fusion of aromatherapy and mixology, perfect for corporate events that aim to engage all senses. This collaboration offers custom-crafted scents paired with bespoke cocktails, creating an unforgettable sensory experience for your guests.",
    image: "/images/gp2.jpg",
    link: "https://example.com/blendsmith-collab"
  },
  {
    name: "Business Event Sarawak (BES)",
    description: "Partnering with BES, we bring wellness and aromatherapy to Sarawak's premier business events. Our services enhance attendee experience, promote relaxation, and boost engagement throughout conferences and corporate gatherings.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Voodoo Retreat",
    description: "At the Voodoo Retreat, we offer immersive aromatherapy experiences tailored for corporate teams. Our programs focus on stress relief, team building, and enhancing creativity through the power of scent and holistic wellness practices.",
    image: "/placeholder.svg?height=400&width=600",
  }
]

function CollaborationCard({ collaboration }: { collaboration: Collaboration }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={collaboration.image}
          alt={collaboration.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-[#6F5541] mb-4">{collaboration.name}</h3>
        <p className="text-[#A99074] mb-6">{collaboration.description}</p>
        
      </div>
    </motion.div>
  )
}

export function B2BServices() {
  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-serif text-[#6F5541] mb-6">Our B2B Services</h2>
          <p className="text-lg text-[#A99074] max-w-3xl mx-auto">
            Adeva offers a range of bespoke aromatherapy services designed to elevate your corporate events, 
            team-building activities, and wellness programs. Our expert team creates immersive experiences 
            that engage the senses, reduce stress, and promote overall well-being for your employees and clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collaborations.map((collab, index) => (
            <CollaborationCard key={index} collaboration={collab} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h3 className="text-3xl font-serif text-[#6F5541] mb-6">What We Offer</h3>
          <ul className="list-disc list-inside space-y-4 text-[#A99074]">
            <li>Custom aromatherapy blends for your office or event space</li>
            <li>On-site massage and aromatherapy services for corporate wellness days</li>
            <li>Aromatherapy workshops and team-building activities</li>
            <li>Bespoke gift sets for client appreciation or employee rewards</li>
            <li>Aromatherapy consultations for stress management and productivity</li>
            <li>Scent branding services to enhance your corporate identity</li>
          </ul>
          <div className="mt-8">
            <Button 
              asChild
              className="bg-[#6F5541] hover:bg-[#A99074] text-white transition-colors duration-300"
            >
              <a href="https://wa.me/${whatsappNumber}?text=${whatsappMessage}">Contact Us for B2B Inquiries</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

