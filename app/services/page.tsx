import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all major social platforms.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      description: "Improve your website's visibility in search results and drive organic traffic to your business.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "content",
      title: "Content Marketing",
      description:
        "Create valuable content that attracts and engages your target audience to drive profitable customer action.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ppc",
      title: "Pay-Per-Click Advertising",
      description: "Get immediate visibility and drive targeted traffic to your website with strategic PPC campaigns.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Connect directly with your customers and prospects through personalized email campaigns.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Gain valuable insights into your marketing performance with comprehensive analytics and reporting.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 animate-slideUp animation-delay-100">
            We offer a comprehensive range of digital marketing services to help your business grow and succeed in the
            digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                    <Button variant="link" className="text-orange-500 hover:text-orange-600 p-0">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our digital marketing services can help you achieve your business goals.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full">Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}

