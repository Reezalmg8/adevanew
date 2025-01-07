import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Clock } from 'lucide-react'

interface ServicePrice {
  duration: string
  member: string
  nonMember: string
}

interface ServiceCardProps {
  image: string
  title: string
  description: string
  pricing: ServicePrice[]
  onClick: () => void
}

export function FeaturedServiceCard({ image, title, description, pricing, onClick }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-3 text-[#6F5541]">{title}</h3>
        <p className="text-[#A99074] mb-6">{description}</p>
        
        <div className="space-y-3">
          {pricing.map((price, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-[#F8E3DA] rounded-lg">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#6F5541]" />
                <span className="text-sm font-medium text-[#6F5541]">{price.duration}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#6F5541]">Member: {price.member}</p>
                <p className="text-sm text-[#A99074]">Non-member: {price.nonMember}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={onClick}
          className="w-full mt-6 bg-[#6F5541] text-white hover:bg-[#A99074]"
        >
          Book Now
        </Button>
      </div>
    </div>
  )
}

