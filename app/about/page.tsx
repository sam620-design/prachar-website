"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Users, Target, Clock, CheckCircle, Eye, Lightbulb, Shield } from "lucide-react"
import { Twitter, Linkedin, Mail } from "lucide-react"

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Prachar</h1>
            <p className="text-lg text-gray-600">
              We're a team of digital enthusiasts on a mission to help businesses thrive in the digital world through
              innovative marketing strategies and data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013, Prachar began with a simple mission: to help businesses navigate the increasingly
                complex digital landscape and achieve meaningful results through strategic marketing solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of three passionate digital marketers has grown into a full-service digital
                marketing agency with a team of over 30 specialists dedicated to delivering exceptional results for our
                clients.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped hundreds of businesses across various industries establish their digital
                presence, connect with their audience, and achieve sustainable growth through innovative marketing
                strategies.
              </p>
              <p className="text-gray-600">
                Today, we continue to evolve with the ever-changing digital landscape, staying ahead of trends and
                leveraging the latest technologies to ensure our clients remain at the forefront of their industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Our+Story"
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital marketing strategies that drive measurable results, foster
                meaningful connections with their audience, and ensure sustainable growth in an ever-evolving digital
                landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital marketing agency known for our innovative approach, exceptional client
                service, and ability to deliver transformative results that help businesses thrive in the digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do and shape our approach to digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new ideas and technologies to stay ahead of digital trends.",
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                delay: 0.1,
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical practices in all our dealings.",
                icon: <Shield className="h-8 w-8 text-primary" />,
                delay: 0.2,
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, delivering high-quality results.",
                icon: <Award className="h-8 w-8 text-primary" />,
                delay: 0.3,
              },
              {
                title: "Client-Focused",
                description: "We prioritize our clients' success and build lasting relationships based on trust.",
                icon: <Users className="h-8 w-8 text-primary" />,
                delay: 0.4,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: value.delay }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our talented team of digital marketing experts is dedicated to helping your business succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Thompson",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300&text=AT",
                delay: 0.1,
              },
              {
                name: "Sarah Johnson",
                position: "Marketing Director",
                image: "/placeholder.svg?height=300&width=300&text=SJ",
                delay: 0.2,
              },
              {
                name: "Michael Roberts",
                position: "SEO Specialist",
                image: "/placeholder.svg?height=300&width=300&text=MR",
                delay: 0.3,
              },
              {
                name: "Emily Chen",
                position: "Content Strategist",
                image: "/placeholder.svg?height=300&width=300&text=EC",
                delay: 0.4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.delay }}
                className="bg-white rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        {[Twitter, Linkedin, Mail].map((Icon, i) => (
                          <a key={i} href="#" className="text-white hover:text-primary transition-colors">
                            <Icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "10+",
                label: "Years of Experience",
                icon: <Clock className="h-8 w-8 text-primary" />,
                delay: 0.1,
              },
              {
                value: "500+",
                label: "Clients Served",
                icon: <Users className="h-8 w-8 text-primary" />,
                delay: 0.2,
              },
              {
                value: "1000+",
                label: "Projects Completed",
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                delay: 0.3,
              },
              {
                value: "30+",
                label: "Team Members",
                icon: <Award className="h-8 w-8 text-primary" />,
                delay: 0.4,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

