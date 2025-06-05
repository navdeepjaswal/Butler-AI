import { UpdatePasswordForm } from "@/components/update-password-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Simplified version */}
      <nav className="bg-gray-50 px-6 py-4 shadow-sm">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-800">
              Butler AI
            </span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-gray-900">
              Update Password
            </h1>
            <p className="text-gray-600">
              Choose a new password for your account
            </p>
          </div>
          <UpdatePasswordForm />
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need help?{" "}
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-700"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Butler AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
