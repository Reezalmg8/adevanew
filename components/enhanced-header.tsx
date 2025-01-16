'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, X, PackageIcon, Info, ImageIcon, HelpCircle, Sparkles, ChevronDown, ChevronRight } from 'lucide-react'

const navItems = [
  { 
    name: 'What We Offer',
    href: '#',
    icon: Sparkles,
    submenu: [
      { 
        name: 'Services', 
        href: '#',
        submenu: [
          { name: 'Treatments', href: '/services', description: 'Explore our range of spa treatments' },
          { name: 'B2B Services', href: '/services/b2b', description: 'Elevate your corporate events with our services' },
        ]
      },
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
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null)
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmenuEnter = (itemName: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    setActiveSubmenu(itemName)
  }

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 300)
  }

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') return
    e.preventDefault()
    setIsMenuOpen(false)
    window.location.href = href
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen || isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center"
          >
            <Link href="/" className="block">
              <div className="relative w-[150px] md:w-[200px] h-16 md:h-20">
                <Image
                  src="/images/adevanewlogo.png"
                  alt="Adeva Holistic Aromatherapy Spa"
                  fill
                  className="object-cover transition-all duration-300"
                  style={{ 
                    objectFit: 'contain',
                    transform: 'scale(2.0)',
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
                onMouseEnter={() => handleSubmenuEnter(item.name)}
                onMouseLeave={handleSubmenuLeave}
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
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>

                {/* Desktop submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-4 px-2"
                    onMouseEnter={() => handleSubmenuEnter(item.name)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group">
                        <Link
                          href={subItem.href}
                          className="block px-4 py-3 text-[#6F5541] hover:bg-[#F8E3DA] hover:text-[#A99074] transition-colors duration-200 rounded-md"
                        >
                          <div className="font-medium flex items-center justify-between">
                            {subItem.name}
                            {subItem.submenu && <ChevronRight className="w-4 h-4" />}
                          </div>
                        </Link>

                        {subItem.submenu && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full top-0 mt-0 w-64 bg-white rounded-md shadow-lg py-4 px-2 hidden group-hover:block"
                          >
                            {subItem.submenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.href}
                                className="block px-4 py-3 text-[#6F5541] hover:bg-[#F8E3DA] hover:text-[#A99074] transition-colors duration-200 rounded-md"
                              >
                                <div className="font-medium">{nestedItem.name}</div>
                                <div className="text-sm text-[#A99074]">{nestedItem.description}</div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ color: '#6F5541' }}>
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
                className="md:hidden fixed inset-0 top-16 bg-white z-40"
              >
                <nav className="flex flex-col items-start justify-start h-full p-6 space-y-6 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="w-full">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => {
                            if (item.submenu) {
                              setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                              setActiveNestedMenu(null)
                            } else if (item.href !== '#') {
                              setIsMenuOpen(false)
                              window.location.href = item.href
                            }
                          }}
                          className="text-lg text-[#6F5541] hover:text-[#A99074] transition-colors duration-300 flex items-center w-full"
                        >
                          <item.icon className="w-6 h-6 mr-2" />
                          {item.name}
                          {item.submenu && (
                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                              activeSubmenu === item.name ? 'rotate-180' : ''
                            }`} />
                          )}
                        </button>
                      </motion.div>
                      
                      <AnimatePresence>
                        {item.submenu && activeSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 ml-8 space-y-4"
                          >
                            {item.submenu.map((subItem) => (
                              <div key={subItem.name}>
                                <button
                                  onClick={() => {
                                    if (subItem.submenu) {
                                      setActiveNestedMenu(activeNestedMenu === subItem.name ? null : subItem.name)
                                    } else if (subItem.href !== '#') {
                                      setIsMenuOpen(false)
                                      window.location.href = subItem.href
                                    }
                                  }}
                                  className="flex items-center justify-between w-full text-[#A99074] hover:text-[#6F5541] py-2"
                                >
                                  <span>{subItem.name}</span>
                                  {subItem.submenu && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                                      activeNestedMenu === subItem.name ? 'rotate-180' : ''
                                    }`} />
                                  )}
                                </button>

                                <AnimatePresence>
                                  {subItem.submenu && activeNestedMenu === subItem.name && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="ml-4 mt-2 space-y-2"
                                    >
                                      {subItem.submenu.map((nestedItem) => (
                                        <button
                                          key={nestedItem.name}
                                          onClick={() => {
                                            setIsMenuOpen(false)
                                            window.location.href = nestedItem.href
                                          }}
                                          className="block w-full text-left text-[#A99074] hover:text-[#6F5541] py-2"
                                        >
                                          <div>{nestedItem.name}</div>
                                          <div className="text-sm text-[#A99074]">{nestedItem.description}</div>
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  
                  {/* Book Now Button in mobile menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full pt-4 mt-auto"
                  >
                    <Button 
                      asChild
                      className="w-full bg-[#6F5541] text-white hover:bg-[#A99074] transition-all duration-300"
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

