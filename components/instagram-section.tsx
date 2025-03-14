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
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="https://www.instagram.com/adeva.spa"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden px-6 py-3 md:px-8 md:py-4 rounded-lg group bg-[#6F5541]">
                {/* Text container with flexbox for alignment */}
                <div className="relative z-10 flex items-center justify-center space-x-3">
                  <span className="font-['Tenor_Sans'] text-2xl md:text-3xl tracking-[0.2em] text-white">
                    INSTAGRAM
                  </span>
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A99074] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              </div>
            </a>
          </motion.div>

          <p className="font-['Montserrat'] text-lg font-light text-[#A99074] mt-8 mb-12">
            Stay Inspired: Follow @adeva.spa for the Latest Updates and Wellness Tips
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

        <div className="text-center">
          <a
            href="https://www.instagram.com/adeva.spa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#6F5541] hover:text-[#A99074] transition-colors font-medium"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

