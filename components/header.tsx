'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-6">
          <Link href="/" className="mb-6">
            <div className="text-center">
              <h1 className="font-['Tenor_Sans'] text-3xl tracking-[0.3em] text-[#6F5541]">
                adeva
              </h1>
              <p className="font-['Montserrat'] font-light tracking-[0.2em] text-sm text-[#6F5541]">
                HOLISTIC AROMATHERAPY SPA
              </p>
            </div>
          </Link>

          <nav className="flex items-center justify-center space-x-12">
            <Link 
              href="/services" 
              className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
            >
              About Us
            </Link>
            <Link 
              href="/gallery" 
              className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
            >
              Gallery
            </Link>
            <Link 
              href="/help" 
              className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
            >
              Help
            </Link>
            <Button 
              asChild
              className={`bg-[#6F5541] text-white hover:bg-[#A99074] uppercase font-light tracking-wider text-sm ${
                isScrolled ? 'bg-opacity-100' : 'bg-opacity-80 hover:bg-opacity-100'
              }`}
            >
              <a href="https://wa.me/+60128853836" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

