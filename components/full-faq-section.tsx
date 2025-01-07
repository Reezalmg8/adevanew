'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fullFaqs = [
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
    question: "Can I request specific essential oils during my session?",
    answer: "We offer a range of synergy blends tailored to different needs, and you can choose your preferred blend or let your therapist recommend one for you."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "You don't need to bring anything except yourself! We provide everything you need for your treatment, including robes, towels, and slippers."
  },
  {
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking at least two days in advance to secure your preferred time and therapist, especially for signature treatments or group bookings."
  },
  {
    question: "Do you accommodate group bookings or special events?",
    answer: "Yes, we welcome groups and can customize packages for special occasions, such as birthdays, bridal showers, or corporate wellness retreats."
  },
  {
    question: "What should I do to prepare for my treatment?",
    answer: "Please arrive 15 minutes before your appointment to settle in and fill out any necessary forms. We recommend avoiding heavy meals or alcohol before your treatment."
  },
  {
    question: "Are your products available for purchase?",
    answer: "Yes! The products we use during your treatments, including aromatherapy oils and body care items, are available for purchase so you can enjoy the spa experience at home."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "We require at least 24 hours' notice for individual cancellations and 48 hours for group bookings. Failure to do so will result in the forfeiture of your deposit."
  },
  {
    question: "What if I have allergies or medical conditions?",
    answer: "Please inform us of any allergies, medical conditions, or sensitivities when booking so we can customize your treatment to ensure your safety and comfort."
  },
  {
    question: "Do you offer memberships or packages?",
    answer: "Yes, we offer memberships with exclusive discounts on treatments and packages. Speak to our reception team for details."
  },
  {
    question: "Is there an age limit for treatments?",
    answer: "We welcome guests aged 5 and above. Certain treatments may have additional age restrictions, so please consult our team for recommendations."
  },
  {
    question: "Do you offer at-home spa services?",
    answer: "Yes, we provide home spa services for your convenience. Contact us to learn more about our home massage options and availability."
  },
  {
    question: "Can I combine treatments during one visit?",
    answer: "Many of our clients enjoy pairing treatments, such as a massage and foot soak, for a complete wellness experience. Let us know your preferences when booking."
  }
]

export function FullFAQSection() {
  return (
    <section className="py-20 bg-[#F8E3DA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-[#6F5541] mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {fullFaqs.map((faq, index) => (
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
        </div>
      </div>
    </section>
  )
}

