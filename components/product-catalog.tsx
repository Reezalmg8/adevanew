'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'

interface Product {
  name: string
  description: string
  image: string
}

const diffuserBlends: Product[] = [
  {
    name: "FEM BALANCE",
    description: "Reduces stress and promotes hormonal balance, creating a calming atmosphere.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "PEACE OF MIND",
    description: "Experience clarity and calm with this soothing aroma, leaving you refreshed and recharged.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "SWEET DREAM",
    description: "Eases stress and creates a serene atmosphere for a peaceful night's rest.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "PETRICHOR",
    description: "Let the serenity of nature fill your space with calming and peaceful blend.",
    image: "/placeholder.svg?height=300&width=300"
  }
]

const aromatherapyRollers: Product[] = [
  {
    name: "CELESTIAL HARMONY",
    description: "Spiritual Awareness and Grounding",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "MOON CYCLE",
    description: "Balances the Hormones and Regulates Menstrual Cycle",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "SLEEPEASE",
    description: "Calming and Soothing for a Restful Sleep",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "ZEN BREATHER",
    description: "Supports Respiratory Health",
    image: "/placeholder.svg?height=300&width=300"
  }
]

const treatmentBodyOils: Product[] = [
  {
    name: "FEM BALANCE",
    description: "Hormone Balancing and Rejuvenating",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "SWEET DREAM",
    description: "Eases Anxiety and Promotes Better Sleep",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "PAIN AWAY",
    description: "Relaxing and Soothing Muscle Pains",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "FLORA SERENITY",
    description: "Anti-ageing and Brightening",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "RAINFOREST",
    description: "Detox and Firming",
    image: "/placeholder.svg?height=300&width=300"
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#6F5541] mb-2">{product.name}</h3>
        <p className="text-[#A99074]">{product.description}</p>
      </div>
    </motion.div>
  )
}

export function ProductCatalog() {
  return (
    <section className="py-24 bg-[#FDF8F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#6F5541] mb-12">Our Products</h2>
        <Tabs defaultValue="diffuser-blends" className="w-full">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="diffuser-blends" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074]">
              Diffuser Blends
            </TabsTrigger>
            <TabsTrigger value="aromatherapy-rollers" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074]">
              Aromatherapy Rollers
            </TabsTrigger>
            <TabsTrigger value="treatment-body-oils" className="px-4 py-2 text-[#6F5541] hover:text-[#A99074]">
              Treatment Body Oils
            </TabsTrigger>
          </TabsList>
          <TabsContent value="diffuser-blends">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {diffuserBlends.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="aromatherapy-rollers">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aromatherapyRollers.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="treatment-body-oils">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentBodyOils.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

