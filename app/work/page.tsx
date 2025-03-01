"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingContact from "@/components/floating-contact"

export default function WorkPage() {
  const caseStudies = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Growth Strategy",
      client: "FashionHub",
      category: "E-commerce",
      description:
        "Increased online sales by 150% through a comprehensive digital marketing strategy including SEO, PPC, and social media marketing.",
      results: [
        "150% increase in online sales",
        "200% increase in organic traffic",
        "35% improvement in conversion rate",
        "45% reduction in customer acquisition cost",
      ],
      image: "/placeholder.svg?height=600&width=800&text=E-commerce+Case+Study",
    },
    {
      id: "b2b-lead-generation",
      title: "B2B Lead Generation Campaign",
      client: "TechSolutions Inc.",
      category: "B2B",
      description:
        "Developed and executed a multi-channel lead generation campaign that resulted in a 75% increase in qualified leads for a B2B software company.",
      results: [
        "75% increase in qualified leads",
        "120% increase in website traffic",
        "28% improvement in lead-to-customer conversion",
        "40% reduction in cost per lead",
      ],
      image: "/placeholder.svg?height=600&width=800&text=B2B+Case+Study",
    },
    {
      id: "local-business-growth",
      title: "Local Business Growth Strategy",
      client: "Metro Fitness",
      category: "Local Business",
      description:
        "Helped a local fitness center increase membership by 85% through local SEO, Google My Business optimization, and targeted social media advertising.",
      results: [
        "85% increase in new memberships",
        "95% increase in local search visibility",
        "65% increase in website traffic",
        "30% improvement in customer retention",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Local+Business+Case+Study",
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness Campaign",
      client: "GreenLife Products",
      category: "Consumer Goods",
      description:
        "Executed a comprehensive brand awareness campaign that increased brand recognition by 120% for a sustainable consumer goods company.",
      results: [
        "120% increase in brand recognition",
        "180% increase in social media engagement",
        "95% increase in website traffic",
        "65% increase in newsletter subscriptions",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Brand+Awareness+Case+Study",
    },
    {
      id: "app-launch",
      title: "Mobile App Launch Campaign",
      client: "HealthTrack",
      category: "Mobile App",
      description:
        "Developed and executed a successful app launch strategy that resulted in 100,000+ downloads in the first month for a health tracking application.",
      results: [
        "100,000+ downloads in first month",
        "Featured in App Store's 'New Apps We Love'",
        "85% user retention rate after 30 days",
        "4.8/5 average rating on app stores",
      ],
      image: "/placeholder.svg?height=600&width=800&text=App+Launch+Case+Study",
    },
    {
      id: "website-redesign",
      title: "Website Redesign & SEO",
      client: "LegalAdvice.com",
      category: "Professional Services",
      description:
        "Redesigned a law firm's website with a focus on user experience and SEO, resulting in a 200% increase in organic traffic and 75% increase in lead generation.",
      results: [
        "200% increase in organic traffic",
        "75% increase in lead generation",
        "65% improvement in page load speed",
        "45% reduction in bounce rate",
      ],
      image: "/placeholder.svg?height=600&width=800&text=Website+Redesign+Case+Study",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our case studies to see how we've helped businesses like yours achieve remarkable results through
              strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm text-primary font-semibold mb-2">Client: {caseStudy.client}</h3>
                    <h2 className="text-3xl font-bold">{caseStudy.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600">{caseStudy.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold">Results:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href={`/work/${caseStudy.id}`}>
                      <Button>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our digital marketing strategies can help your business grow and succeed in the digital
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}

