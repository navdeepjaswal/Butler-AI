"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setIsLoading(false);
    };
    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/'); 
  };

  const isDashboard = pathname?.startsWith('/dashboard');

  if (isLoading) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-sm px-6 py-3 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo/Butler.png" alt="Butler Logo" width={50} height={50} />
            <span className="text-3xl font-semibold text-gray-800">Butler</span>
          </Link>
          <div className="h-8 w-20 animate-pulse rounded bg-gray-200 md:block"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-sm px-6 py-3 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={user && isDashboard ? "/dashboard" : "/"} className="flex items-center space-x-3">
          <Image src="/logo/Butler.png" alt="Butler Logo" width={50} height={50} />
          <span className="text-3xl font-semibold text-gray-800">Butler</span>
        </Link>

        {user && isDashboard ? (
          <div className="flex items-center">
            <Button
              onClick={handleSignOut}
              variant="ghost"
              className="text-gray-800 hover:text-purple-700 hover:bg-transparent flex items-center space-x-2"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </Button>
          </div>
        ) : (
          <>
            <div className="hidden space-x-8 md:flex">
              <Link
                href="/"
                className="text-lg text-gray-800 transition-colors hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg text-gray-800 transition-colors hover:text-gray-600"
              >
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-lg text-gray-800 transition-colors hover:text-gray-600"
              >
                How It Works
              </Link>
              <Link
                href="/faq"
                className="text-lg text-gray-800 transition-colors hover:text-gray-600"
              >
                FAQ
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
                className="text-lg font-medium shadow-none text-gray-800 hover:text-gray-600"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
            </div>
          </>
        )}

        {!(user && isDashboard) && (
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <nav className="mt-10 flex flex-col gap-6">
                <Link href="/" className="flex items-center space-x-3 px-4 mb-4">
                  <Image src="/logo/Butler.png" alt="Butler Logo" width={40} height={40} />
                  <span className="text-2xl font-semibold text-gray-800">Butler</span>
                </Link>
                <Link
                  href="/"
                  className="text-xl text-gray-800 transition-colors hover:text-gray-600"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-xl text-gray-800 transition-colors hover:text-gray-600"
                >
                  About Us
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-xl text-gray-800 transition-colors hover:text-gray-600"
                >
                  How It Works
                </Link>
                <Link
                  href="/faq"
                  className="text-xl text-gray-800 transition-colors hover:text-gray-600"
                >
                  FAQ
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
                  className="text-lg font-medium shadow-none text-gray-800 hover:text-gray-600"
                >
                  <Link href="/auth/login">Login</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
