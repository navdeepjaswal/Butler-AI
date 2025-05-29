import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTAButton from "@/components/cta-button"
import { MessageSquare, Smartphone, Video, Mail, Calendar, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">How Butler Works</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Simple, friendly technology assistance whenever you need it.
          </p>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Using Butler Is Easy</h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-600">1</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download the App</h3>
                <p className="text-lg text-gray-700">
                  Get Butler on your smartphone, tablet, or computer. The app is designed to be easy to install with
                  large buttons and clear instructions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ask Any Question</h3>
                <p className="text-lg text-gray-700">
                  Simply speak or type your question about technology. For example, "How do I make a video call to my
                  grandson?" or "How do I send a photo in a text message?"
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-600">3</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get Clear Guidance</h3>
                <p className="text-lg text-gray-700">
                  Butler provides step-by-step instructions with large text and simple language. If you need more help,
                  just ask and Butler will explain differently.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-600">4</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay Connected</h3>
                <p className="text-lg text-gray-700">
                  With Butler's help, confidently use technology to connect with family and friends, access information,
                  and enjoy digital services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What You Can Do With Butler</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Video className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Video Calls</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Learn how to make and receive video calls with family and friends on any device.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Messaging</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Send text messages, photos, and videos to stay in touch with loved ones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Set up and manage email accounts, send and receive messages with attachments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Device Help</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Get assistance with your smartphone, tablet, or computer settings and features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Calendar</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Set up appointments, reminders, and manage your digital calendar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">General Help</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Get answers to any technology question in simple, easy-to-understand language.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Our Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 italic mb-6">
                  "Butler has changed my life. I can now video call my grandchildren without asking my son to help set
                  it up every time. The patience and clear instructions make all the difference."
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Margaret" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">Margaret, 78</p>
                    <p className="text-gray-600">Using Butler for 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 italic mb-6">
                  "I was always embarrassed to ask my children for help with my phone. With Butler, I can learn at my
                  own pace and feel independent again. Now I'm the one showing my friends how to use their devices!"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Robert" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">Robert, 72</p>
                    <p className="text-gray-600">Using Butler for 1 year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Make Technology Easy?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Start your journey with Butler today and discover how simple technology can be.
          </p>
          <CTAButton text="Try Butler For Free" href="/try-butler" />
        </div>
      </section>

      <Footer />
    </main>
  )
}
