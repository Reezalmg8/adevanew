'use client'

import { useState } from 'react'
import { EnhancedHeader } from '@/components/enhanced-header'
import { PageHero } from '@/components/page-hero'
import { ProductCatalog } from '@/components/product-catalog'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedHeader />
      <PageHero 
        title="Our Products" 
        subtitle="Discover our curated selection of premium aromatherapy products"
        backgroundImage="/images/product-hero.jpg"
      />
      <ProductCatalog />
      <ContactSection />
      <Footer />
    </div>
  )
}

