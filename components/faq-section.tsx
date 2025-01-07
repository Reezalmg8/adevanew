'use client'

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What is aromatherapy, and how is it used in your treatments?",
    answer: "Aromatherapy involves the use of therapeutic-grade essential oils derived from plants to promote physical, emotional, and mental well-being. At Adeva, we incorporate aromatherapy into every treatment—from massages to foot soaks—to enhance relaxation, detoxification, and overall wellness."
  },
  {
    question: "Are your treatments suitable for pregnant women?",
    answer: "Yes, we offer treatments specifically designed for expectant mothers. Please inform our reception team about your pregnancy when booking so we can recommend the safest and most beneficial options."
  },
  {
    question: "How do I choose the right treatment for me?",
    answer: "Our experienced therapists will guide you during a personalized consultation to help determine the best treatment based on your wellness goals and preferences."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "You don't need to bring anything except yourself! We provide everything you need for your treatment, including robes, towels, and slippers."
  },
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking at least two days in advance to secure your preferred time and therapist, especially for signature treatments or group bookings."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 bg-[#F8E3DA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-[#6F5541] mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-[#6F5541] hover:text-[#A99074] text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#A99074] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center">
            <Button asChild className="bg-[#6F5541] text-white hover:bg-[#A99074]">
              <Link href="/help">See All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

