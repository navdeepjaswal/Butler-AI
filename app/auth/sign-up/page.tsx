import { SignUpForm } from "@/components/sign-up-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Simplified version */}
      <nav className="bg-gray-50 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">Butler AI</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Create Account</h1>
            <p className="text-gray-600">Join Butler AI and get started today</p>
          </div>
          <SignUpForm />
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Need help? <Link href="/contact" className="text-purple-600 hover:text-purple-700">Contact Support</Link></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-auto py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Butler AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
