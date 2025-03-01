import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "Top Digital Marketing Trends to Watch in 2023",
    date: "March 15, 2023",
    readTime: "5 min read",
    author: "Jane Smith",
    authorRole: "Digital Marketing Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Digital marketing is constantly evolving, with new technologies, platforms, and strategies emerging every year. As we move further into 2023, it's essential for businesses to stay ahead of the curve and adapt to the latest trends to remain competitive in the digital landscape.</p>
      
      <h2>1. AI-Powered Marketing</h2>
      <p>Artificial Intelligence (AI) continues to revolutionize digital marketing in 2023. From chatbots and virtual assistants to predictive analytics and personalized recommendations, AI is helping marketers automate tasks, analyze data, and deliver more personalized experiences to their audiences.</p>
      <p>AI-powered tools can analyze customer behavior, preferences, and interactions to create highly targeted marketing campaigns. This level of personalization can significantly improve engagement rates and conversions, making AI an invaluable asset for digital marketers.</p>
      
      <h2>2. Video Marketing Dominance</h2>
      <p>Video content continues to dominate social media platforms and digital marketing strategies in 2023. With the rise of TikTok, Instagram Reels, and YouTube Shorts, short-form video content has become increasingly popular among users and marketers alike.</p>
      <p>Live streaming is also gaining traction, with brands using platforms like Instagram Live, Facebook Live, and Twitch to connect with their audiences in real-time. Video content is more engaging, shareable, and memorable than text or images, making it an essential component of any digital marketing strategy.</p>
      
      <h2>3. Voice Search Optimization</h2>
      <p>With the increasing popularity of smart speakers and voice assistants like Amazon Alexa, Google Assistant, and Apple's Siri, voice search optimization has become a crucial aspect of SEO in 2023. Voice searches tend to be more conversational and question-based than text searches, requiring marketers to adapt their content accordingly.</p>
      <p>To optimize for voice search, focus on long-tail keywords, natural language, and question-based content. Creating FAQ pages and content that directly answers common questions in your industry can help improve your visibility in voice search results.</p>
      
      <h2>4. Influencer Marketing Evolution</h2>
      <p>Influencer marketing continues to evolve in 2023, with a shift towards micro and nano influencers. These smaller influencers typically have more engaged and loyal audiences, resulting in higher conversion rates for brands.</p>
      <p>Authenticity and long-term partnerships are becoming increasingly important in influencer marketing. Consumers are more likely to trust influencers who genuinely use and believe in the products they promote, rather than those who simply post sponsored content for a paycheck.</p>
      
      <h2>5. Privacy-First Marketing</h2>
      <p>With increasing concerns about data privacy and the phasing out of third-party cookies, marketers are shifting towards privacy-first strategies in 2023. This includes focusing on first-party data collection, transparent data practices, and building direct relationships with customers.</p>
      <p>Contextual advertising, which targets users based on the content they're currently viewing rather than their browsing history, is making a comeback as a privacy-friendly alternative to behavioral targeting.</p>
      
      <h2>Conclusion</h2>
      <p>As digital marketing continues to evolve, staying updated with the latest trends and technologies is essential for businesses looking to maintain a competitive edge. By embracing AI, video content, voice search optimization, authentic influencer partnerships, and privacy-first marketing strategies, brands can effectively reach and engage their target audiences in 2023 and beyond.</p>
    `,
    relatedPosts: [
      {
        id: "social-media-strategy",
        title: "Building an Effective Social Media Strategy for Small Businesses",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "seo-best-practices",
        title: "SEO Best Practices: A Comprehensive Guide for 2023",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "content-marketing-roi",
        title: "Measuring Content Marketing ROI: Metrics That Matter",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <main className="min-h-screen py-12">
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </header>

          {/* Author */}
          <div className="flex items-center p-6 bg-gray-50 rounded-xl mb-8">
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold">{post.author}</h3>
              <p className="text-gray-500 text-sm">{post.authorRole}</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Share */}
          <div className="border-t border-b py-6 mb-12">
            <div className="flex flex-wrap items-center justify-between">
              <span className="font-medium">Share this article:</span>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Share on Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-400">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Share on Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-700">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all">
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-orange-500 transition-colors">{relatedPost.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

