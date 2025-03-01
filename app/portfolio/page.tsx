"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce SEO Transformation",
      category: "seo",
      client: "FashionHub",
      image: "/placeholder.svg?height=300&width=500&text=FashionHub",
      description:
        "Increased organic traffic by 150% and improved conversion rates for an online fashion retailer through comprehensive SEO strategies.",
      results: [
        "150% increase in organic traffic",
        "72% improvement in conversion rate",
        "35% reduction in bounce rate",
      ],
      link: "#",
    },
    {
      id: 2,
      title: "Social Media Growth Campaign",
      category: "social-media",
      client: "GreenEats",
      image: "/placeholder.svg?height=300&width=500&text=GreenEats",
      description:
        "Developed and executed a social media strategy that grew the following by 200K+ followers across platforms for a sustainable food brand.",
      results: ["200K+ new followers", "65% increase in engagement", "43% increase in website traffic from social"],
      link: "#",
    },
    {
      id: 3,
      title: "Content Marketing Strategy",
      category: "content",
      client: "TechSolutions",
      image: "/placeholder.svg?height=300&width=500&text=TechSolutions",
      description:
        "Created and implemented a comprehensive content strategy for a B2B tech company, resulting in increased lead generation and thought leadership.",
      results: [
        "120% increase in blog traffic",
        "87% increase in lead generation",
        "5 industry awards for content excellence",
      ],
      link: "#",
    },
    {
      id: 4,
      title: "PPC Campaign Optimization",
      category: "ppc",
      client: "HomeServices",
      image: "/placeholder.svg?height=300&width=500&text=HomeServices",
      description:
        "Optimized Google Ads and Facebook Ads campaigns for a home services company, reducing cost-per-lead while increasing conversion rates.",
      results: ["63% decrease in cost-per-lead", "91% increase in conversion rate", "135% increase in qualified leads"],
      link: "#",
    },
    {
      id: 5,
      title: "Email Marketing Automation",
      category: "email",
      client: "FitLife",
      image: "/placeholder.svg?height=300&width=500&text=FitLife",
      description:
        "Developed automated email sequences for a fitness brand, improving customer retention and increasing lifetime value.",
      results: [
        "45% increase in open rates",
        "38% increase in click-through rates",
        "27% improvement in customer retention",
      ],
      link: "#",
    },
    {
      id: 6,
      title: "Website Redesign & Development",
      category: "web-design",
      client: "ArtGallery",
      image: "/placeholder.svg?height=300&width=500&text=ArtGallery",
      description:
        "Redesigned and developed a responsive website for an art gallery, resulting in improved user experience and increased conversions.",
      results: [
        "56% increase in time on site",
        "42% decrease in bounce rate",
        "85% increase in online booking conversions",
      ],
      link: "#",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-600">
              Explore our successful projects and see how we've helped businesses achieve their digital marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-flow-col auto-cols-max gap-4">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="social-media">Social Media</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="ppc">PPC</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="web-design">Web Design</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <PortfolioCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>

            {["seo", "social-media", "content", "ppc", "email", "web-design"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <PortfolioCard key={item.id} item={item} index={index} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of digital marketing experts is ready to help you reach your business goals with customized
              strategies that deliver real results.
            </p>
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function PortfolioCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={500}
            height={300}
            className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>Client: {item.client}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div>
            <h4 className="font-medium mb-2">Results:</h4>
            <ul className="space-y-1">
              {item.results.map((result: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={item.link} className="text-primary hover:underline flex items-center gap-1">
            View Case Study <ExternalLink className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

