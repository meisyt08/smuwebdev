import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pill, Users, Phone, AlertTriangle } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Take Control of Your Life
          <span className="block text-purple-600">Stay Drug-Free</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
          Understanding drug abuse is the first step toward prevention and recovery. Get informed, seek help,
          and support others in their journey to a healthier life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Learn More</Button>
          <Button size="lg" variant="outline">
            Get Support
          </Button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <AlertTriangle className="mb-4 h-12 w-12 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">Warning Signs</h3>
              <p className="text-muted-foreground">
                Learn to recognize the early signs of drug abuse and addiction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Users className="mb-4 h-12 w-12 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">Support Network</h3>
              <p className="text-muted-foreground">
                Connect with counselors and support groups in your area.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Phone className="mb-4 h-12 w-12 text-purple-600" />
              <h3 className="mb-2 text-xl font-semibold">24/7 Helpline</h3>
              <p className="text-muted-foreground">
                Professional help is always available when you need it most.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Impact of Drug Awareness</h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-purple-600">70%</div>
              <p className="mt-2 text-muted-foreground">Recovery success rate with proper support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <p className="mt-2 text-muted-foreground">Support availability nationwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">1000+</div>
              <p className="mt-2 text-muted-foreground">Support centers across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Emergency</h3>
              <p className="text-2xl font-bold text-purple-400">1-800-123-4567</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link className="hover:text-purple-400" href="#">Find Help</Link></li>
                <li><Link className="hover:text-purple-400" href="#">Prevention Guide</Link></li>
                <li><Link className="hover:text-purple-400" href="#">Support Groups</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Information</h3>
              <ul className="space-y-2">
                <li><Link className="hover:text-purple-400" href="#">About Us</Link></li>
                <li><Link className="hover:text-purple-400" href="#">Contact</Link></li>
                <li><Link className="hover:text-purple-400" href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest resources and support information.</p>
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 DrugAware. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

