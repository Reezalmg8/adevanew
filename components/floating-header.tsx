'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function FloatingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight // Height of hero section

      // Update visibility based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Update background color based on scroll position
      setIsScrolled(currentScrollY > heroHeight * 0.8)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          {/* Logo */}
          <Link href="/" className="mb-4">
            <div className="text-center">
              <h1 className="font-['Tenor_Sans'] text-3xl tracking-[0.3em] text-[#6F5541]">
                adeva
              </h1>
              <p className="font-['Montserrat'] font-light tracking-[0.2em] text-sm text-[#6F5541]">
                HOLISTIC AROMATHERAPY SPA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-12">
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-4 top-4 text-[#6F5541]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/services" 
                className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/gallery" 
                className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/help" 
                className="text-[#6F5541] hover:text-[#A99074] transition-colors uppercase font-light tracking-wider text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <Button 
                asChild
                className="w-full bg-[#6F5541] text-white hover:bg-[#A99074] uppercase font-light tracking-wider text-sm"
              >
                <a 
                  href="https://wa.me/+60128853836" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

