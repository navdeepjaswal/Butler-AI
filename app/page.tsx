import Link from "next/link";
import { ArrowRight, MessageSquare, Smartphone, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTAButton = ({ text, href }: { text: string; href: string }) => (
  <Button asChild size="lg" className="bg-purple-600 text-lg text-white hover:bg-purple-700">
    <Link href={href}>{text}</Link>
  </Button>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Technology Made Simple for Seniors
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-700 md:text-2xl">
            Butler AI is your personal assistant that helps you navigate the
            digital world with ease. No more confusion, just simple
            conversations.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton text="Try Butler Now" href="/auth/sign-up" />
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            We Understand Your Challenges
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Problems */}
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                  Common Frustrations
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Complicated technology with confusing interfaces
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Feeling left behind in the digital age
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Difficulty connecting with family through technology
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="destructive"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full"
                    >
                      ✗
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Embarrassment when asking for help repeatedly
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                  How Butler Helps
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full border-0 bg-green-100 text-green-600"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Simple conversations in plain language
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full border-0 bg-green-100 text-green-600"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Patient guidance through any digital task
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full border-0 bg-green-100 text-green-600"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Help with video calls, messaging, and staying connected
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Badge
                      variant="outline"
                      className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full border-0 bg-green-100 text-green-600"
                    >
                      ✓
                    </Badge>
                    <p className="text-lg text-gray-700">
                      Available 24/7 whenever you need assistance
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            How Butler Makes Technology Easy
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Simple Conversations
                </h3>
                <p className="text-lg text-gray-700">
                  Just talk to Butler like you would to a helpful friend or
                  family member.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Device Guidance
                </h3>
                <p className="text-lg text-gray-700">
                  Get step-by-step help with your smartphone, tablet, or
                  computer.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Stay Connected
                </h3>
                <p className="text-lg text-gray-700">
                  Easily connect with loved ones through video calls and
                  messages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Ready to Make Technology Simple?
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Join thousands of seniors who are confidently using technology with
            Butler's help.
          </p>
          <CTAButton text="Try Butler For Free" href="/auth/sign-up" />
        </div>
      </section>
    </main>
  );
}
