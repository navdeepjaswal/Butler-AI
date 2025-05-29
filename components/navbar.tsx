"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <nav className="bg-gray-50 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-gray-800">Butler AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
            About Us
          </Link>
          <Link href="/how-it-works" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
            How It Works
          </Link>
          <Link href="/faq" className="text-lg text-gray-800 hover:text-gray-600 transition-colors">
            FAQ
          </Link>
        </div>

        {/* Try Butler Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild variant="default" size="lg" className="bg-purple-600 text-white hover:bg-purple-700 text-lg">
            <Link href="/auth/sign-up">Try Butler</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-xl text-gray-800 hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-xl text-gray-800 hover:text-gray-600 transition-colors">
                About Us
              </Link>
              <Link href="/how-it-works" className="text-xl text-gray-800 hover:text-gray-600 transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="text-xl text-gray-800 hover:text-gray-600 transition-colors">
                FAQ
              </Link>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-lg">
                <Link href="/auth/sign-up">Try Butler</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
