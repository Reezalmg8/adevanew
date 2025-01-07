'use client'

import { useState } from 'react'
import { EnhancedHeader } from '@/components/enhanced-header'
import { ServicesHero } from '@/components/services-hero'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import Modal from '@/components/modaltab'

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, ] = useState<{
    name: string
    description: string
    pricing: { duration: string; member: string; nonMember: string }[]
  } | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <EnhancedHeader />
      <ServicesHero />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService?.name || ''}
        serviceDescription={selectedService?.description || ''}
        pricing={selectedService?.pricing || []}
      />
    </div>
  )
}
