'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Leaf, Heart, Shield, Hand } from 'lucide-react'

const features = [
  {
    title: "Holistic Wellness with Expert Care",
    description: "Our sanctuary blends ancient healing traditions with modern techniques, using premium essential oils and natural products for your well-being. Highly trained therapists tailor each massage session to relax, rejuvenate, and restore balance. Experience the perfect harmony of expert care and holistic healing.",
    icon: Heart
  },
  {
    title: "Exceptional Cleanliness and Safety",
    description: "Your safety and comfort are paramount. Our facilities are meticulously maintained with hospital-grade sanitization protocols. After each treatment, our therapists provide personalized wellness advice to extend the benefits of your experience at home.",
    icon: Shield
  },
  {
    title: "Certified IFA Aromatherapist",
    description: "Our in-house aromatherapists are certified by the International Federation of Aromatherapists (IFA), ensuring the highest standards of professional practice. With advanced training and a commitment to holistic wellness, they craft personalized treatments using therapeutic-grade essential oils to nurture your body, mind, and spirit.",
    icon: Leaf
  },
]

export function WhyChooseUs() {
  const controls = useAnimation()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#FDF8F5]"
    >
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="font-serif text-4xl tracking-wider text-[#6F5541] mb-4">
            Why Choose Our Spa
          </h2>
          <p className="text-lg text-[#A99074] max-w-2xl mx-auto">
            Experience the difference at Adeva Holistic Aromatherapy Spa, where your well-being is our top priority.
          </p>
        </motion.div>

        {/* Update: Changed `md:grid-cols-3` to `md:grid-cols-4` */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDF8F5] mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <feature.icon className="w-8 h-8 text-[#6F5541]" />
              </motion.div>
              <h3 className="font-serif text-xl tracking-wider text-[#6F5541] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#A99074] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
