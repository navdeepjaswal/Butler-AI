import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

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
            <h1 className="mb-3 text-3xl font-bold text-gray-900">Oops!</h1>
            <p className="text-gray-600">Something went wrong</p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium">Error Details</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-red-50 p-4">
                <p className="text-sm text-red-700">
                  {params?.error ? (
                    <>Error code: {params.error}</>
                  ) : (
                    <>An unexpected error occurred. Please try again.</>
                  )}
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <Button
                  asChild
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  <Link href="/auth/login">Return to Sign In</Link>
                </Button>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="text-sm text-purple-600 hover:text-purple-700"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need help?{" "}
              <Link
                href="/contact"
                className="text-purple-600 hover:text-purple-700"
              >
                Contact our support team
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
