import { SignUpForm } from "@/components/sign-up-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-gray-50">
      {/* Navigation Bar is in RootLayout */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-gray-900">
              Create Account
            </h1>
            <p className="text-gray-600">
              Join Butler and get started today
            </p>
          </div>
          <SignUpForm />
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

      {/* Footer is in RootLayout */}
    </div>
  );
}
