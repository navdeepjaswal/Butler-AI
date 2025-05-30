import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/cta-button";
import {
  MessageSquare,
  Smartphone,
  Video,
  Mail,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            How Butler Works
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 md:text-2xl">
            Simple, friendly technology assistance whenever you need it.
          </p>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Using Butler Is Easy
          </h2>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex justify-center md:w-1/3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-3xl font-bold text-purple-600">1</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Download the App
                </h3>
                <p className="text-lg text-gray-700">
                  Get Butler on your smartphone, tablet, or computer. The app is
                  designed to be easy to install with large buttons and clear
                  instructions.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex justify-center md:w-1/3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Ask Any Question
                </h3>
                <p className="text-lg text-gray-700">
                  Simply speak or type your question about technology. For
                  example, "How do I make a video call to my grandson?" or "How
                  do I send a photo in a text message?"
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex justify-center md:w-1/3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-3xl font-bold text-purple-600">3</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Get Clear Guidance
                </h3>
                <p className="text-lg text-gray-700">
                  Butler provides step-by-step instructions with large text and
                  simple language. If you need more help, just ask and Butler
                  will explain differently.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex justify-center md:w-1/3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-3xl font-bold text-purple-600">4</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Stay Connected
                </h3>
                <p className="text-lg text-gray-700">
                  With Butler's help, confidently use technology to connect with
                  family and friends, access information, and enjoy digital
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            What You Can Do With Butler
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <Video className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Video Calls
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Learn how to make and receive video calls with family and
                  friends on any device.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <MessageSquare className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Messaging
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Send text messages, photos, and videos to stay in touch with
                  loved ones.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <Mail className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Set up and manage email accounts, send and receive messages
                  with attachments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <Smartphone className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Device Help
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Get assistance with your smartphone, tablet, or computer
                  settings and features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <Calendar className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Calendar
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Set up appointments, reminders, and manage your digital
                  calendar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center">
                  <HelpCircle className="mr-3 h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    General Help
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  Get answers to any technology question in simple,
                  easy-to-understand language.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <p className="mb-6 text-lg italic text-gray-700">
                  "Butler has changed my life. I can now video call my
                  grandchildren without asking my son to help set it up every
                  time. The patience and clear instructions make all the
                  difference."
                </p>
                <div className="flex items-center">
                  <Avatar className="mr-4 h-12 w-12">
                    <AvatarImage
                      src="/placeholder.svg?height=48&width=48"
                      alt="Margaret"
                    />
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
                <p className="mb-6 text-lg italic text-gray-700">
                  "I was always embarrassed to ask my children for help with my
                  phone. With Butler, I can learn at my own pace and feel
                  independent again. Now I'm the one showing my friends how to
                  use their devices!"
                </p>
                <div className="flex items-center">
                  <Avatar className="mr-4 h-12 w-12">
                    <AvatarImage
                      src="/placeholder.svg?height=48&width=48"
                      alt="Robert"
                    />
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
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Ready to Make Technology Easy?
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Start your journey with Butler today and discover how simple
            technology can be.
          </p>
          <CTAButton text="Try Butler For Free" href="/auth/sign-up" />
        </div>
      </section>
    </main>
  );
}
