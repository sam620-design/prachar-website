import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMediaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Social Media Marketing</h1>
      <div className="flex items-center mb-6">
        <Users className="h-10 w-10 text-primary mr-4" />
        <p className="text-xl">Build brand awareness and engage with your audience</p>
      </div>
      <p className="mb-6">
        Our social media marketing services are designed to help you build a strong presence on popular social
        platforms, engage with your target audience, and drive meaningful interactions that convert into business
        results. We create and execute tailored strategies that align with your brand voice and business goals.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Social Media Services Include:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Social media strategy development</li>
        <li>Content creation and curation</li>
        <li>Community management and engagement</li>
        <li>Paid social media advertising</li>
        <li>Influencer marketing campaigns</li>
        <li>Social media analytics and reporting</li>
        <li>Social listening and brand monitoring</li>
      </ul>
      <Button size="lg">Start Social Media Marketing</Button>
    </div>
  )
}

