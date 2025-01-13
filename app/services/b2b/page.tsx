'use client'

import { useState } from 'react'
import { EnhancedHeader } from '@/components/enhanced-header'
import { ServicesHero } from '@/components/services-hero'
import { B2BServices } from '@/components/b2b-services'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import Modal from '@/components/modaltab'

export default function B2BServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    name: string
    description: string
    pricing: { duration: string; member: string; nonMember: string }[]
  } | null>(null)

  const openModal = (service: {
    name: string
    description: string
    pricing: { duration: string; member: string; nonMember: string }[]
  }) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <EnhancedHeader />
      <ServicesHero />
      <B2BServices />
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

