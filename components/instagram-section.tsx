"use client"

import { useState } from "react"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

const instagramPosts = [
  "C96z3ivPiTV",
  "DDMACj8Pl4_",
  "DC8KGxuPwma",
  "DBkiaUQv71e",
  "C8f6OB2vtIz",
  "C8L3pJgPog2",
  "C7xtM1svt0R",
  "C7ibnpJPtnv",
  "C7L1fPWPBfC",
  "C6-HaUbvVjM",
]

export function InstagramSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            className="inline-block w-full max-w-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="https://www.instagram.com/adeva.spa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden px-12 py-4 rounded-lg group">
                {/* Background layer */}
                <div className="absolute inset-0 bg-[#6F5541] transform transition-transform duration-500 ease-out rounded-lg"></div>

                {/* Text container with flexbox for alignment */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:space-x-4">
                  <div className="font-['Tenor_Sans'] text-4xl tracking-[0.2em] text-white text-center">
                    <span className="block md:inline">FOLLOW</span> <span className="block md:inline">US ON</span>
                  </div>
                  <Instagram className="w-10 h-10 md:w-8 md:h-8 text-white mt-4 md:mt-0" />
                </div>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A99074] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#A99074] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#A99074] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#A99074] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#A99074] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-lg"></div>
              </div>
            </a>
          </motion.div>

          <p className="font-['Montserrat'] text-lg font-light text-[#A99074] mt-8 mb-12">
            Stay Inspired: Follow @adevaspa for the Latest Updates and Wellness Tips
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {instagramPosts.map((postId) => (
            <div key={postId} className="aspect-square w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://www.instagram.com/p/${postId}/embed/captioned`}
                className="w-full h-full border-none overflow-hidden"
                loading="lazy"
                scrolling="no"
              ></iframe>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

