import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsApp } from 'lucide-react'

export function ContactSection() {
  const whatsappNumber = "+60104559113" // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello, I'd like to book a spa treatment.")

  return (
    <section className="py-16 bg-[#F8E3DA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-[#6F5541] mb-6">
            Book Your Spa Experience Today
          </h2>
          <p className="text-[#A99074] mb-8">
            Experience the ultimate relaxation and rejuvenation at Adeva Spa. Our expert therapists are ready to pamper you with our signature aromatherapy treatments.
          </p>
          <Button 
            asChild
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-4 px-8 rounded-full inline-flex items-center"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="w-6 h-6 mr-2" />
              Book via WhatsApp
            </a>
          </Button>
          <p className="mt-4 text-sm text-[#6F5541]">
            Our team is available to assist you from 11:00 AM to 11:00 PM daily.
          </p>
        </div>
      </div>
    </section>
  )
}

