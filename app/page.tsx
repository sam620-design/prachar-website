"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Zap, BarChart2, Users, Award, Mail, Code, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingContactButton from "@/components/floating-contact"

export default function Home() {
  const featuredClientsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-enter")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const sections = [featuredClientsRef.current, statsRef.current, servicesRef.current, testimonialsRef.current]

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with animated background */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-purple-50 opacity-70"></div>

          {/* Animated circles */}
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-orange-200 opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-purple-200 opacity-20 animate-float"></div>

          {/* Animated floating shapes */}
          <div className="absolute top-1/4 right-1/5 w-20 h-20 rounded-lg bg-primary opacity-10 animate-spin-slow"></div>
          <div
            className="absolute bottom-1/3 left-1/5 w-32 h-32 rounded-full bg-secondary opacity-10 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgMS41QzE0LjI2IDEuNSAxLjUgMTQuMjYgMS41IDMwYzAgMTUuNzQgMTIuNzYgMjguNSAyOC41IDI4LjUgMTUuNzQgMCAyOC41LTEyLjc2IDI4LjUtMjguNSAwLTE1Ljc0LTEyLjc2LTI4LjUtMjguNS0yOC41eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your Brand with
                <span className="text-primary"> Strategic Digital Marketing</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Transform your online presence with our data-driven digital marketing strategies tailored to help your
                business grow, engage, and convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Our Services
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`/placeholder.svg?height=40&width=40&text=C${i}`}
                      alt="Client"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">500+</span> clients trust us
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Digital+Marketing"
                  alt="Digital Marketing"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ROI Increase</p>
                    <p className="text-2xl font-bold">250%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Conversion Rate</p>
                    <p className="text-2xl font-bold">35%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="bg-white py-10" ref={featuredClientsRef}>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=30&width=120&text=BRAND${i}`}
                alt={`Brand ${i}`}
                width={120}
                height={30}
                className="h-7 w-auto grayscale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with animated background */}
      <section className="py-20 relative overflow-hidden" ref={servicesRef}>
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gray-50"></div>

          {/* Animated patterns */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>

          {/* Animated dots pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #606060 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Floating circles */}
          <div
            className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-primary/5 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-secondary/5 animate-float"
            style={{ animationDelay: "1.2s" }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Digital Marketing Services</h2>
            <p className="text-gray-700">
              Comprehensive digital solutions designed to boost your online presence, engage your audience, and drive
              conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Search Engine Optimization",
                description:
                  "Improve your visibility in search results and drive organic traffic with our data-driven SEO strategies.",
                icon: <BarChart2 className="h-10 w-10 text-primary" />,
                delay: 0.1,
              },
              {
                title: "Social Media Marketing",
                description:
                  "Build brand awareness and engage with your audience through strategic social media campaigns.",
                icon: <Users className="h-10 w-10 text-primary" />,
                delay: 0.2,
              },
              {
                title: "Content Marketing",
                description: "Create valuable, relevant content that attracts and retains a clearly defined audience.",
                icon: <Zap className="h-10 w-10 text-primary" />,
                delay: 0.3,
              },
              {
                title: "Pay-Per-Click",
                description: "Drive targeted traffic to your website with our expertly managed PPC campaigns.",
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                delay: 0.4,
              },
              {
                title: "Email Marketing",
                description: "Nurture leads and boost conversions with personalized email marketing strategies.",
                icon: <Mail className="h-10 w-10 text-primary" />,
                delay: 0.5,
              },
              {
                title: "Web Design & Development",
                description: "Create stunning, user-friendly websites that convert visitors into customers.",
                icon: <Code className="h-10 w-10 text-primary" />,
                delay: 0.6,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-primary font-medium group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Prachar?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine data-driven insights with creative solutions to deliver exceptional results for your
                business.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Data-Driven Approach",
                    description: "We make decisions based on data and analytics to ensure measurable results.",
                  },
                  {
                    title: "Industry Expertise",
                    description: "Our team of experts has years of experience across various industries.",
                  },
                  {
                    title: "Tailored Strategies",
                    description: "We create customized solutions that align with your specific business goals.",
                  },
                  {
                    title: "Transparent Reporting",
                    description: "Regular detailed reports keeping you informed of your campaign's performance.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-primary/10 p-2 rounded-full h-fit">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Why+Choose+Us"
                  alt="Digital Marketing Team"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 right-10 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Years of Excellence</p>
                    <p className="text-2xl font-bold">10+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>

          {/* Animated wave pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute w-full min-w-[1440px] h-full animate-float"
              style={{ animationDuration: "20s" }}
            >
              <path
                fill="#FF6B35"
                fillOpacity="0.2"
                d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute w-full min-w-[1440px] h-full animate-float"
              style={{ animationDuration: "15s", animationDelay: "1s" }}
            >
              <path
                fill="#8A4FFF"
                fillOpacity="0.2"
                d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,122.7C672,117,768,171,864,186.7C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Floating particles */}
          <div
            className="particle absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-float"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="particle absolute top-1/2 left-3/4 w-3 h-3 rounded-full bg-secondary animate-float"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          ></div>
          <div
            className="particle absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-secondary animate-float"
            style={{ animationDuration: "7s", animationDelay: "2s" }}
          ></div>
          <div
            className="particle absolute top-1/3 left-2/3 w-2 h-2 rounded-full bg-primary animate-float"
            style={{ animationDuration: "9s", animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg opacity-90 mb-8">
              Get in touch with us today and let's create a customized digital marketing strategy that drives results
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactButton />
    </div>
  )
}

