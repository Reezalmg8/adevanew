import Image from 'next/image'

export function AboutUs() {
  return (
    <section className="py-20 bg-[#F8E3DA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/spa-interior-1.jpg"
                width={600}
                height={400}
                alt="Spa Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-[#6F5541]">
                About Us
              </h2>
              <p className="text-[#6F5541]">
                Welcome to Adeva Holistic Aromatherapy Spa, a haven of wellness where the natural power of aromatherapy takes center stage. We believe true well-being comes from harmony within, and our treatments are designed to nurture the mind, body, and soul in a holistic and personalized way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

