import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import { ArrowRight, MessageSquare, Smartphone, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Technology Made Simple for Seniors</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Butler AI is your personal assistant that helps you navigate the digital world with ease. No more confusion,
            just simple conversations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton text="Try Butler Now" href="/auth/sign-up" />
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-lg text-gray-800 hover:text-gray-600 font-medium px-4 py-2"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">We Understand Your Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problems */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Common Frustrations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">Complicated technology with confusing interfaces</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">Feeling left behind in the digital age</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">Difficulty connecting with family through technology</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">Embarrassment when asking for help repeatedly</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">How Butler Helps</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 border-0"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">Simple conversations in plain language</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 border-0"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">Patient guidance through any digital task</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 border-0"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">Help with video calls, messaging, and staying connected</p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 border-0"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">Available 24/7 whenever you need assistance</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How Butler Makes Technology Easy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Simple Conversations</h3>
                <p className="text-lg text-gray-700">
                  Just talk to Butler like you would to a helpful friend or family member.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Device Guidance</h3>
                <p className="text-lg text-gray-700">
                  Get step-by-step help with your smartphone, tablet, or computer.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Connected</h3>
                <p className="text-lg text-gray-700">
                  Easily connect with loved ones through video calls and messages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Make Technology Simple?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Join thousands of seniors who are confidently using technology with Butler's help.
          </p>
          <CTAButton text="Try Butler For Free" href="/auth/sign-up" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
