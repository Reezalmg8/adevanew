'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X, PackageIcon, Info, ImageIcon, HelpCircle, Sparkles } from 'lucide-react'

const navItems = [
  { 
    name: 'What We Offer',
    href: '#',
    icon: Sparkles,
    submenu: [
      { name: 'Services', href: '/services' },
      { name: 'Product', href: '/product' },
  
    ]
  },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Gallery', href: '/gallery', icon: ImageIcon },
  { name: 'Help', href: '/help', icon: HelpCircle }
]

export function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') return
    e.preventDefault()
    setIsMenuOpen(false)
    window.location.href = href
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <Link href="/" className="block">
              <div className="relative w-[200px] h-20">
                <Image
                  src={isScrolled ? "/images/adevanewlogo.png" : "/images/adevanewlogo.png"}
                  alt="Adeva Holistic Aromatherapy Spa"
                  fill
                  className="object-cover transition-all duration-300"
                  style={{ 
                    objectFit: 'contain',
                    transform: 'scale(1.5)',
                    transformOrigin: 'left center'
                  }}
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="relative group"
                onMouseEnter={() => {
                  if (item.submenu) {
                    setTimeout(() => setActiveSubmenu(item.name), 100)
                  }
                }}
                onMouseLeave={() => {
                  setTimeout(() => setActiveSubmenu(null), 300)
                }}
              >
                <Link 
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`relative inline-flex items-center py-2 ${
                    isScrolled ? 'text-[#6F5541]' : 'text-white'
                  } hover:text-[#A99074] transition-colors duration-300`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A99074] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-[#6F5541] hover:bg-[#F8E3DA] hover:text-[#A99074] transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Book Now Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              asChild
              className={`transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-[#6F5541] text-white hover:bg-[#A99074] shadow-md' 
                  : 'bg-white/80 text-[#6F5541] hover:bg-white shadow-lg'
              }`}
            >
              <a 
                href="https://wa.me/+60128853836" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book a Treatment
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ 
                color: isMenuOpen 
                  ? '#6F5541'
                  : isScrolled 
                    ? '#6F5541'
                    : '#ffffff'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
                className="md:hidden fixed inset-0 top-24 bg-white/95 backdrop-blur-md z-40"
              >
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link 
                          href={item.href}
                          onClick={(e) => {
                            if (item.submenu) {
                              e.preventDefault()
                              setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                            } else {
                              handleNavigation(e, item.href)
                            }
                          }}
                          className="text-lg text-[#6F5541] hover:text-[#A99074] transition-colors duration-300 flex items-center"
                        >
                          <item.icon className="w-6 h-6 mr-2" />
                          {item.name}
                        </Link>
                      </motion.div>
                      
                      {/* Mobile Submenu */}
                      {item.submenu && activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4 space-y-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-[#A99074] hover:text-[#6F5541] py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      asChild
                      className="bg-[#6F5541] text-white hover:bg-[#A99074] transition-all duration-300"
                    >
                      <a 
                        href="https://wa.me/+60128853836" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book a Treatment
                      </a>
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

