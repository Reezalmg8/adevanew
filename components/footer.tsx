import Link from 'next/link'
import { Mail, Phone, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#F8E3DA] text-[#6F5541]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <div className="text-center md:text-left">
                <h1 className="font-['Tenor_Sans'] text-3xl tracking-[0.3em]">
                  adeva
                </h1>
                <p className="font-['Montserrat'] font-light tracking-[0.2em] text-sm">
                  HOLISTIC AROMATHERAPY SPA
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Discover your next relaxation experience with our holistic aromatherapy treatments.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="space-y-6 md:pl-16"> {/* Increased padding-left */}
          <h3 className="text-xl font-serif font-bold mb-6">GET IN TOUCH</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@adevaspa.com" className="text-sm hover:text-[#A99074] transition-colors">
                  info@adevaspa.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+60104559113" className="text-sm hover:text-[#A99074] transition-colors">
                  +60 10-4559113
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">
                Open  11am - 11pm
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-6 md:pl-16">
            <h3 className="text-xl font-serif font-bold mb-6">MENU</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm hover:text-[#A99074] transition-colors">
                HOME
              </Link>
              <Link href="/services" className="block text-sm hover:text-[#A99074] transition-colors">
                SERVICES
              </Link>
              <Link href="/about" className="block text-sm hover:text-[#A99074] transition-colors">
                ABOUT US
              </Link>
              <Link href="/gallery" className="block text-sm hover:text-[#A99074] transition-colors">
                GALLERY
              </Link>
              <Link href="/help" className="block text-sm hover:text-[#A99074] transition-colors">
                HELP
              </Link>
            </nav>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold mb-6">ADDRESS</h3>
            <p className="text-sm leading-relaxed mb-4">
              1st Floor, Lot 19786, Block 11,<br />
              Saradise Kuching, Off, Jalan Stutong,<br />
              93520 Kuching, Sarawak, Malaysia
            </p>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4805714753706!2d110.36175789999999!3d1.506035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba78e639817df%3A0x2b6b676a90434ff!2sAdeva%20Holistic%20Aromatherapy%20Spa!5e0!3m2!1sen!2smy!4v1703667551244!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#6F5541]/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All Rights Reserved Adeva Holistic Aromatherapy Spa | Powered by thestudio
          </p>
        </div>
      </div>
    </footer>
  )
}

