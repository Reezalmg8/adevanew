'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Christina Chang",
    date: "2 weeks ago",
    text: "One of the best and most relaxing massage I’ve ever experienced! The hot stone massage is a must try!",
    rating: 5
  },
  {
    name: "See Neng Lim",
    date: "6 months ago",
    text: "Ambience was great! Enjoyed the massage too with decent pressure. My 2nd visit for the 2nd consecutive day! Definitely will come again.",
    rating: 5
  },
  {
    name: "Terence Siew",
    date: "3 months ago",
    text: "Went for adeva signature massage for 90mins. Masseuse demonstrated excellent technique and attention and could feel extra work focused on required areas. Overall best massage I have experienced in Kuching, very comfortable environment. The thermal bed was enjoyable as well. Highly recommended!",
    rating: 5
  },
  {
    name: "Patrick Lim",
    date: "1 month ago",
    text: "Very detailed 120 mins massage. And I was offered member price. The chair is very comfortable and heated. The therapist massage is to the point.",
    rating: 5
  },
  {
    name: "Codilia Jalin",
    date: "2 months ago",
    text: "As a spa junkie, Adeva gave me multiple elements of surprises! I start with the ambience. Aesthetic, pleasant, tranquil and very expensive vibe. My fav part, I can choose my EO and heated bed. My first time here and I have the best experience with the masseur. She was so attentive, her hand so delicate. I requested medium on body and light on head. I've never felt this relaxed before. Absolutely will repeat again and become my fav spa!",
    rating: 5
  },
  {
    name: "Pui Wei Tan",
    date: "4 months ago",
    text: "New pleasant place for relax in Saradise! Good essential oil selection. Nice ambience and good receptions! Will come again :)",
    rating: 5
  },
  {
    name: "Foofans Foo",
    date: "3 weeks ago",
    text: "Great massage place especially the hot stone deep tissue massage to help me relieve the muscle tension at shoulder.",
    rating: 5
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl tracking-wider text-[#6F5541] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#A99074] mb-2">Our customers love Adeva Spa</p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[300px]">
          <AnimatePresence initial={false} custom={currentIndex}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, x: 300 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : -300,
                  scale: currentIndex === index ? 1 : 0.8
                }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`bg-white rounded-lg p-8 shadow-md absolute top-0 left-0 w-full ${
                  currentIndex === index ? 'z-10' : 'z-0'
                }`}
              >
                <div className="mb-4">
                  <h3 className="font-serif font-medium text-[#6F5541] text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-[#A99074]">{testimonial.date}</p>
                </div>
                <p className="text-[#6F5541] mb-4 italic">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#6F5541]' : 'bg-[#DED3B2]'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

