'use client'

import { useState } from 'react'
import Image from 'next/image'
import { EnhancedHeader } from '@/components/enhanced-header'
import { GalleryHero } from '@/components/gallery-hero'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = {
  products: [
    { src: '/images/gp1.jpg', alt: 'Spa Product 1' },
    { src: '/images/gp2.jpg', alt: 'Spa Product 2' },
    { src: '/images/gp3.jpg', alt: 'Spa Product 3' },
    { src: '/images/gp4.jpg', alt: 'Spa Product 4' },
    { src: '/images/product-1.jpg', alt: 'Spa Product 5' },
    { src: '/images/gp6.jpg', alt: 'Spa Product 6' },
  ],
  treatments: [
    { src: '/images/treatment-1.jpg', alt: 'Spa Treatment 1' },
    { src: '/images/treatment-2.jpg', alt: 'Spa Treatment 2' },
    { src: '/images/treatment-3.jpg', alt: 'Spa Treatment 3' },
    { src: '/images/treatment-4.jpg', alt: 'Spa Treatment 4' },
    { src: '/images/treatment-5.jpg', alt: 'Spa Treatment 5' },
    { src: '/images/treatment-6.jpg', alt: 'Spa Treatment 6' },
  ],
  interior: [
    { src: '/images/interior-1.jpg', alt: 'Spa Interior 1' },
    { src: '/images/interior-2.jpg', alt: 'Spa Interior 2' },
    { src: '/images/interior-3.jpg', alt: 'Spa Interior 3' },
    { src: '/images/gallery3.jpg', alt: 'Spa Interior 4' },
    { src: '/images/interior-5.jpg', alt: 'Spa Interior 5' },
    { src: '/images/interior-6.jpg', alt: 'Spa Interior 6' },
  ],
}

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '', category: '', index: 0 })

  const openLightbox = (src: string, alt: string, category: string, index: number) => {
    setCurrentImage({ src, alt, category, index })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    const category = galleryImages[currentImage.category as keyof typeof galleryImages]
    const newIndex = (currentImage.index + 1) % category.length
    setCurrentImage({ ...category[newIndex], category: currentImage.category, index: newIndex })
  }

  const prevImage = () => {
    const category = galleryImages[currentImage.category as keyof typeof galleryImages]
    const newIndex = (currentImage.index - 1 + category.length) % category.length
    setCurrentImage({ ...category[newIndex], category: currentImage.category, index: newIndex })
  }

  return (
    <div className="min-h-screen bg-[#F8E3DA]">
      <EnhancedHeader />
      <GalleryHero />
      <main>
        <section className="bg-[#F8E3DA]">
          <div className="container mx-auto px-4 py-16">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="w-full flex justify-center mb-8">
                <TabsTrigger value="products" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074] focus:outline-none">
                  Products
                </TabsTrigger>
                <TabsTrigger value="treatments" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074] focus:outline-none">
                  Treatments
                </TabsTrigger>
                <TabsTrigger value="interior" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074] focus:outline-none">
                  Interior
                </TabsTrigger>
              </TabsList>
              {Object.entries(galleryImages).map(([category, images]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openLightbox(image.src, image.alt, category, index)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          <div className="relative w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#6F5541]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#6F5541]" />
            </button>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-[#6F5541]" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

