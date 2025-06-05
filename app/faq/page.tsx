import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTAButton from "@/components/cta-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 md:text-2xl">
            Find answers to common questions about Butler AI.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                What is Butler AI?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Butler AI is a digital assistant designed specifically for
                seniors to help bridge the technology gap. It provides simple,
                clear guidance for using smartphones, tablets, computers, and
                various applications through friendly conversation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                Do I need to be tech-savvy to use Butler?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Not at all! Butler is designed specifically for people who find
                technology challenging. The app has a very simple interface, and
                you can just speak to Butler as you would to a helpful friend or
                family member.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                How much does Butler cost?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Butler offers a free basic plan that includes essential
                features. For more comprehensive assistance, we offer a Premium
                plan at $9.99 per month, which includes unlimited questions,
                priority support, and specialized guidance for various
                applications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                What devices does Butler work on?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Butler works on smartphones (iPhone and Android), tablets (iPad
                and Android tablets), and computers (Windows and Mac). The app
                adjusts its guidance based on the device you're using.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                Is my information safe with Butler?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Yes, we take privacy very seriously. Butler does not store your
                personal conversations, and all data is encrypted. We never
                share your information with third parties for marketing
                purposes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                Can Butler help me with specific apps like Facebook or WhatsApp?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Butler can guide you through using popular apps like Facebook,
                WhatsApp, Zoom, Gmail, and many others. Just ask how to perform
                a specific task, and Butler will provide step-by-step
                instructions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                What if I need human assistance?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Premium users have access to our support team who can provide
                additional assistance via phone or video call if needed. Basic
                users can upgrade to Premium for this service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-800 hover:no-underline">
                How do I get started with Butler?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-lg text-gray-700">
                Simply download the Butler app from the App Store (for
                iPhone/iPad) or Google Play Store (for Android devices). For
                computers, visit our website and click on "Download for
                Desktop." Once installed, open the app and follow the simple
                setup instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Still Have Questions?
          </h2>
          <p className="mb-10 text-xl text-gray-700">
            Our friendly support team is here to help you with any questions you
            might have.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Card className="flex-1">
              <CardContent className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="mb-4 text-lg text-gray-700">
                  Send us a message and we'll respond within 24 hours.
                </p>
                <p className="text-lg font-medium text-purple-600">
                  support@butlerai.com
                </p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                  Call Us
                </h3>
                <p className="mb-4 text-lg text-gray-700">
                  Speak with our support team directly.
                </p>
                <p className="text-lg font-medium text-purple-600">
                  (555) 123-4567
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
            Ready to Experience Butler?
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
