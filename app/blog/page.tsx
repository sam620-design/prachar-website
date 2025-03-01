import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "digital-marketing-trends-2023",
      title: "Top Digital Marketing Trends to Watch in 2023",
      excerpt:
        "Stay ahead of the competition with these emerging digital marketing trends that are shaping the industry this year.",
      date: "March 15, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Trends",
    },
    {
      id: "social-media-strategy",
      title: "Building an Effective Social Media Strategy for Small Businesses",
      excerpt:
        "Learn how small businesses can leverage social media to build brand awareness and drive customer engagement without breaking the bank.",
      date: "February 28, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Social Media",
    },
    {
      id: "seo-best-practices",
      title: "SEO Best Practices: A Comprehensive Guide for 2023",
      excerpt:
        "Discover the latest SEO techniques and strategies to improve your website's visibility and drive organic traffic.",
      date: "January 20, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "SEO",
    },
    {
      id: "content-marketing-roi",
      title: "Measuring Content Marketing ROI: Metrics That Matter",
      excerpt:
        "Learn how to track and measure the effectiveness of your content marketing efforts with these key performance indicators.",
      date: "December 12, 2022",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Content",
    },
    {
      id: "email-marketing-automation",
      title: "Email Marketing Automation: Boost Conversions and Save Time",
      excerpt:
        "Discover how to implement email marketing automation to nurture leads, increase conversions, and save valuable time.",
      date: "November 5, 2022",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Email",
    },
    {
      id: "ppc-campaign-optimization",
      title: "PPC Campaign Optimization: Tips to Maximize Your Ad Spend",
      excerpt:
        "Learn how to optimize your pay-per-click campaigns to get the most out of your advertising budget and improve ROI.",
      date: "October 18, 2022",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "PPC",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideUp">Our Blog</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 animate-slideUp animation-delay-100">
            Insights, tips, and strategies to help you succeed in the digital marketing landscape.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-500 rounded-full text-sm font-medium mb-4">
                  Featured
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  The Future of Digital Marketing: AI and Machine Learning
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence and machine learning are revolutionizing digital marketing
                  strategies and what it means for businesses in the coming years.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>April 1, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 min read</span>
                  </div>
                </div>
                <Link href="/blog/future-of-digital-marketing">
                  <div className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                    Read article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-orange-500 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <div className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <span className="px-4 py-2 text-gray-400 border rounded-md">Previous</span>
              <span className="px-4 py-2 text-white bg-orange-500 border border-orange-500 rounded-md">1</span>
              <Link href="#" className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50">
                2
              </Link>
              <Link href="#" className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50">
                3
              </Link>
              <Link href="#" className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50">
                Next
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with the latest digital marketing trends, tips, and insights delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

