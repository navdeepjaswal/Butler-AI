import { ForgotPasswordForm } from "@/components/forgot-password-form";
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
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Reset Password</h1>
            <p className="text-gray-600">Enter your email to reset your password</p>
          </div>
          <ForgotPasswordForm />
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Remember your password? <Link href="/auth/login" className="text-purple-600 hover:text-purple-700">Sign in</Link></p>
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
