import { BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SEOPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Search Engine Optimization (SEO)</h1>
      <div className="flex items-center mb-6">
        <BarChart2 className="h-10 w-10 text-primary mr-4" />
        <p className="text-xl">Improve your visibility in search results and drive organic traffic</p>
      </div>
      <p className="mb-6">
        Our data-driven SEO strategies are designed to boost your website's ranking on search engine results pages,
        increasing your online visibility and driving more organic traffic to your site. We use the latest techniques
        and best practices to ensure your website is optimized for both search engines and users.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our SEO Services Include:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Comprehensive website audit and analysis</li>
        <li>Keyword research and optimization</li>
        <li>On-page and technical SEO improvements</li>
        <li>Content strategy and creation</li>
        <li>Link building and outreach</li>
        <li>Local SEO optimization</li>
        <li>Regular performance reporting and analytics</li>
      </ul>
      <Button size="lg">Get Started with SEO</Button>
    </div>
  )
}

