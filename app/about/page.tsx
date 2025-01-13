import { EnhancedHeader } from '@/components/enhanced-header'
import { AboutHero } from '@/components/about-hero'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedHeader />
      <AboutHero />
      <section className="py-20 bg-[#F8E3DA]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src="/images/spa-interior-1.jpg"
                    width={600}
                    height={400}
                    alt="Spa Interior"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="translate-x-8">
                  <Image
                    src="/images/spa-treatment-1.jpg"
                    width={300}
                    height={400}
                    alt="Spa Treatment"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="-translate-y-8">
                  <Image
                    src="/images/spa-hero-3.jpg"
                    width={300}
                    height={400}
                    alt="Spa hero"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-serif font-bold text-[#6F5541]">
                  About Us
                </h1>
                <div className="space-y-4 text-[#6F5541]">
                  <p>
                    Welcome to Adeva Holistic Aromatherapy Spa, a haven of wellness where the natural power of aromatherapy takes center stage. We believe true well-being comes from harmony within, and our treatments are designed to nurture the mind, body, and soul in a holistic and personalized way.
                  </p>
                  <p>
                    Aromatherapy is at the heart of everything we do. By using pure, high-quality essential oils sourced from nature, we create treatments that do not just relax but also heal and rejuvenate. Each blend is carefully crafted to address specific needs, whether it&apos;s calming lavender for relaxation, uplifting peppermint for mental clarity, or soothing Frankincense to promote emotional balance.
                  </p>
                  <p>
                    Located in Saradise Kuching, our spa is a peaceful retreat where you can escape the stress of daily life. Here, we combine natural elements, personalized attention, and sustainable practices to create an environment that feels both luxurious and grounding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  )
}

