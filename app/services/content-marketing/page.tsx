import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContentMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Content Marketing</h1>
      <div className="flex items-center mb-6">
        <Zap className="h-10 w-10 text-primary mr-4" />
        <p className="text-xl">Create valuable, relevant content that attracts and retains your audience</p>
      </div>
      <p className="mb-6">
        Our content marketing services focus on creating and distributing valuable, relevant, and consistent content to
        attract and retain a clearly defined audience. We help you establish your brand as a thought leader in your
        industry and drive profitable customer action through strategic content creation and distribution.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Content Marketing Services Include:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Content strategy development</li>
        <li>Blog post and article writing</li>
        <li>Ebook and whitepaper creation</li>
        <li>Infographic design</li>
        <li>Video content production</li>
        <li>Content distribution and promotion</li>
        <li>Content performance analysis</li>
      </ul>
      <Button size="lg">Start Content Marketing</Button>
    </div>
  )
}

