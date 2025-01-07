'use client'

import { Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

const instagramPosts = [
  'C96z3ivPiTV',
  'DDMACj8Pl4_',
  'DC8KGxuPwma',
  'DBkiaUQv71e',
  'C8f6OB2vtIz',
  'C8L3pJgPog2',
  'C7xtM1svt0R',
  'C7ibnpJPtnv',
  'C7L1fPWPBfC',
  'C6-HaUbvVjM'
]

export function InstagramSection() {
  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-tenor text-4xl tracking-wider text-[#6F5541] mb-4">
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="font-montserrat text-lg font-light text-[#A99074] mb-12">
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

        <div className="text-center">
          <Button 
            asChild
            className="bg-[#6F5541] text-white hover:bg-[#A99074]"
          >
            <a 
              href="https://www.instagram.com/adevaspa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

