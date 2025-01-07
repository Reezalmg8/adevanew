import { EnhancedHeader } from '@/components/enhanced-header'
import { FAQHero } from '@/components/faq-hero'
import { FullFAQSection } from '@/components/full-faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedHeader />
      <FAQHero />
      <FullFAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

