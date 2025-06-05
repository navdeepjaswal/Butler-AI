import { Mail, Phone, AlertCircle, Key, UserCircle2, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Need Help?</h1>
          <p className="text-xl text-gray-600">
            We're here to assist you with any issues you might be experiencing.
          </p>
        </div>

        {/* Common Issues Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-purple-600" />
              Common Account Issues
            </CardTitle>
            <CardDescription>
              Before contacting support, try these common troubleshooting steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="forgot-password">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-gray-600" />
                    Forgot Password
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 list-disc space-y-2 text-gray-600">
                    <li>Click on the "Login" button in the navigation bar</li>
                    <li>Select "Forgot Password?" below the login form</li>
                    <li>Enter your email address to receive a reset link</li>
                    <li>Check your email (including spam folder) for instructions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="account-access">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <UserCircle2 className="h-5 w-5 text-gray-600" />
                    Can't Access Account
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 list-disc space-y-2 text-gray-600">
                    <li>Ensure you're using the correct email address</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Try using a different browser</li>
                    <li>Check if your email address was verified</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="session-issues">
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-gray-600" />
                    Session Issues
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-8 list-disc space-y-2 text-gray-600">
                    <li>Sign out and sign back in</li>
                    <li>Ensure your internet connection is stable</li>
                    <li>Update your browser to the latest version</li>
                    <li>Disable VPN if you're using one</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-purple-600" />
              Contact Information
            </CardTitle>
            <CardDescription>
              Still need help? Our support team is ready to assist you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-700">Email Support</p>
                  <a
                    href="mailto:support@butlerai.com"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    support@butlerai.com
                  </a>
                  <p className="mt-1 text-sm text-gray-500">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-700">Phone Support</p>
                  <p className="text-gray-600">Available Monday to Friday</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM EST</p>
                  <a
                    href="tel:1-800-BUTLER"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    1-800-BUTLER
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 