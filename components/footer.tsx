import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Butler AI</h3>
            <p className="text-gray-700">Your friendly AI assistant, helping bridge the technology gap for seniors.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-gray-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-700 hover:text-gray-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-700 hover:text-gray-600 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
            <p className="text-gray-700 mb-2">Need help? We're here for you.</p>
            <p className="text-gray-700">Email: help@butlerai.com</p>
            <p className="text-gray-700">Phone: (555) 123-4567</p>
          </div>
        </div>

        <Separator className="my-8" />
        <p className="text-center text-gray-700">© {new Date().getFullYear()} Butler AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
