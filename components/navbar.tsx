"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     // 1) Immediately load any existing session on mount:
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setIsLoading(false);
    });

    // 2) Then listen for any future sign-in or sign-out events:
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // 3) Clean up the listener on unmount:
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  useEffect(() => {
    if (!isLoading && user && pathname !== "/dashboard") {
      router.push("/dashboard");
    }
  }, [user, isLoading, pathname, router]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Force a page reload to clear any client-side state
      window.location.href = '/';
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (isLoading) {
    return (
      <nav className="fixed w-full z-50 h-[72px] bg-gray-50/95 px-6 py-3 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/Butler.PNG"
              alt="Butler Logo"
              width={50}
              height={50}
            />
            <span className="text-3xl font-semibold text-gray-800">Butler</span>
          </Link>
          <div className="h-8 w-20 animate-pulse rounded bg-gray-200 md:block"></div>
        </div>
      </nav>
    );
  }

  // Show simplified navbar for authenticated users
  if (user) {
    return (
      <nav className="fixed w-full z-50 h-[72px] bg-gray-50/95 px-6 py-3 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-3">
            <Image
              src="/logo/Butler.PNG"
              alt="Butler Logo"
              width={50}
              height={50}
            />
            <span className="text-3xl font-semibold text-gray-800">Butler</span>
          </Link>
          <div className="flex items-center">
            <Button
              onClick={handleSignOut}
              variant="ghost"
              className="flex items-center space-x-2 text-gray-800 hover:bg-transparent hover:text-purple-700"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </nav>
    );
  }

  // Show full navbar for non-authenticated users
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-[72px] bg-gray-50/95 px-6 py-3 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo/Butler.PNG"
            alt="Butler Logo"
            width={50}
            height={50}
          />
          <span className="text-3xl font-semibold text-gray-800">Butler</span>
        </Link>

        <div className="hidden space-x-8 md:flex">
          <Link
            href="/"
            className={`text-lg text-gray-800 transition-colors hover:text-gray-600 ${
              pathname === "/" ? "text-purple-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-lg text-gray-800 transition-colors hover:text-gray-600 ${
              pathname === "/about" ? "text-purple-600" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className={`text-lg text-gray-800 transition-colors hover:text-gray-600 ${
              pathname === "/how-it-works" ? "text-purple-600" : ""
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/faq"
            className={`text-lg text-gray-800 transition-colors hover:text-gray-600 ${
              pathname === "/faq" ? "text-purple-600" : ""
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`text-lg text-gray-800 transition-colors hover:text-gray-600 ${
              pathname === "/contact" ? "text-purple-600" : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-purple-600 text-lg text-white hover:bg-purple-700"
          >
            <Link href="/auth/sign-up">Try Butler</Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-transparent text-lg font-medium text-gray-800 shadow-none hover:bg-transparent hover:text-gray-600"
          >
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <nav className="mt-10 flex flex-col gap-6">
              <Link
                href="/"
                className="mb-4 flex items-center space-x-3 px-4"
              >
                <Image
                  src="/logo/Butler.PNG"
                  alt="Butler Logo"
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-semibold text-gray-800">
                  Butler
                </span>
              </Link>
              <Link
                href="/"
                className={`text-xl text-gray-800 transition-colors hover:text-gray-600 ${
                  pathname === "/" ? "text-purple-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-xl text-gray-800 transition-colors hover:text-gray-600 ${
                  pathname === "/about" ? "text-purple-600" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className={`text-xl text-gray-800 transition-colors hover:text-gray-600 ${
                  pathname === "/how-it-works" ? "text-purple-600" : ""
                }`}
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className={`text-xl text-gray-800 transition-colors hover:text-gray-600 ${
                  pathname === "/faq" ? "text-purple-600" : ""
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={`text-xl text-gray-800 transition-colors hover:text-gray-600 ${
                  pathname === "/contact" ? "text-purple-600" : ""
                }`}
              >
                Contact
              </Link>
              <Button
                asChild
                className="w-full bg-purple-600 text-lg hover:bg-purple-700"
              >
                <Link href="/auth/sign-up">Try Butler</Link>
              </Button>
              <Button
                asChild
                variant="default"
                size="lg"
                className="text-lg font-medium text-gray-800 shadow-none hover:text-gray-600"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
