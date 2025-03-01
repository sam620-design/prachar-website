"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingContact from "@/components/floating-contact"

export default function ClientsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc.",
      quote:
        "Working with Prachar has been a game-changer for our digital marketing strategy. Their team's expertise and dedication have helped us achieve remarkable results in a short period of time.",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GreenLife Products",
      quote:
        "Prachar's strategic approach to our brand awareness campaign exceeded our expectations. They truly understand our brand and have helped us connect with our target audience in meaningful ways.",
      image: "/placeholder.svg?height=100&width=100&text=MC",
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "FashionHub",
      quote:
        "The results we've seen since working with Prachar have been incredible. Our online sales have increased by 150%, and our customer acquisition cost has decreased significantly.",
      image: "/placeholder.svg?height=100&width=100&text=ER",
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "Metro Fitness",
      quote:
        "As a local business, we needed a partner who understood our unique challenges. Prachar delivered a tailored strategy that has helped us grow our membership and establish a strong online presence.",
      image: "/placeholder.svg?height=100&width=100&text=DK",
    },
    {
      name: "Jennifer Lee",
      role: "Marketing Manager",
      company: "HealthTrack",
      quote:
        "Prachar's expertise was instrumental in the successful launch of our mobile app. Their comprehensive marketing strategy helped us achieve 100,000+ downloads in the first month.",
      image: "/placeholder.svg?height=100&width=100&text=JL",
    },
    {
      name: "Robert Martinez",
      role: "Director of Operations",
      company: "LegalAdvice.com",
      quote:
        "The website redesign and SEO strategy implemented by Prachar has transformed our online presence. We've seen a significant increase in organic traffic and lead generation.",
      image: "/placeholder.svg?height=100&width=100&text=RM",
    },
  ]

  const clients = [
    "/placeholder.svg?height=80&width=200&text=BRAND1",
    "/placeholder.svg?height=80&width=200&text=BRAND2",
    "/placeholder.svg?height=80&width=200&text=BRAND3",
    "/placeholder.svg?height=80&width=200&text=BRAND4",
    "/placeholder.svg?height=80&width=200&text=BRAND5",
    "/placeholder.svg?height=80&width=200&text=BRAND6",
    "/placeholder.svg?height=80&width=200&text=BRAND7",
    "/placeholder.svg?height=80&width=200&text=BRAND8",
    "/placeholder.svg?height=80&width=200&text=BRAND9",
    "/placeholder.svg?height=80&width=200&text=BRAND10",
    "/placeholder.svg?height=80&width=200&text=BRAND11",
    "/placeholder.svg?height=80&width=200&text=BRAND12",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-orange-200/20 to-pink-200/20"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-lg text-gray-600 mb-8">
              We've had the privilege of working with amazing clients across various industries. Here's what they have
              to say about our partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-gray-600 relative z-10 pl-4">{testimonial.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-gray-600">
              We're proud to have worked with a diverse range of clients across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex justify-center"
              >
                <Image
                  src={client || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={200}
                  height={80}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ durationopacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              We have experience working with clients across a wide range of industries, each with their unique
              challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "E-commerce",
              "B2B Services",
              "Healthcare",
              "Finance",
              "Education",
              "Technology",
              "Real Estate",
              "Hospitality",
              "Non-Profit",
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{industry}</h3>
                <p className="text-gray-600">
                  Customized digital marketing strategies designed to address the unique challenges and opportunities in
                  the {industry.toLowerCase()} industry.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our digital marketing expertise can help your business achieve its goals and drive
              meaningful results.
            </p>
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}

