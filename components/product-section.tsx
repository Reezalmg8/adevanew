'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from '@/components/product-card'

const products = [
  {
    category: 'Essential Oils',
    items: [
      {
        name: 'Lavender Essential Oil',
        image: '/images/lavender-oil.jpg',
        description: 'Pure and calming lavender essential oil for relaxation and sleep.',
        price: 'RM 45.00'
      },
      {
        name: 'Peppermint Essential Oil',
        image: '/images/peppermint-oil.jpg',
        description: 'Refreshing peppermint oil for energy and focus.',
        price: 'RM 40.00'
      },
      // Add more essential oil products here
    ]
  },
  {
    category: 'Massage Oils',
    items: [
      {
        name: 'Relaxing Blend Massage Oil',
        image: '/images/relaxing-massage-oil.jpg',
        description: 'A soothing blend of lavender and chamomile for ultimate relaxation.',
        price: 'RM 55.00'
      },
      {
        name: 'Energizing Blend Massage Oil',
        image: '/images/energizing-massage-oil.jpg',
        description: 'Invigorating blend with peppermint and citrus for an energy boost.',
        price: 'RM 55.00'
      },
      // Add more massage oil products here
    ]
  },
  {
    category: 'Aromatherapy Diffusers',
    items: [
      {
        name: 'Ultrasonic Aromatherapy Diffuser',
        image: '/images/ultrasonic-diffuser.jpg',
        description: 'Silent operation diffuser with color-changing LED lights.',
        price: 'RM 120.00'
      },
      {
        name: 'Ceramic Aromatherapy Diffuser',
        image: '/images/ceramic-diffuser.jpg',
        description: 'Elegant ceramic diffuser for a touch of sophistication.',
        price: 'RM 95.00'
      },
      // Add more diffuser products here
    ]
  }
]

interface ProductSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function ProductSection({ activeCategory, setActiveCategory }: ProductSectionProps) {
  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-serif text-[#6F5541] mb-6">
            Our Products
          </h2>
          <p className="text-lg text-[#A99074] max-w-2xl mx-auto mb-8">
            Discover our carefully curated selection of premium aromatherapy products to enhance your well-being.
          </p>
        </motion.div>

        <Tabs defaultValue={products[0].category} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8 px-4">
            {products.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TabsTrigger
                  value={category.category}
                  className="px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 text-[#6F5541] hover:text-[#A99074] focus:outline-none transition-colors duration-300 mb-2 sm:mb-0"
                  onClick={() => setActiveCategory(category.category)}
                >
                  {category.category}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          {products.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {category.items.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

