"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";

export default function Footer() {
  const supabase = createClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setIsAuthenticated(!!session);
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Show minimal footer on dashboard
  if (pathname?.startsWith("/dashboard")) {
    return (
      <footer className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Butler. All rights reserved.
      </footer>
    );
  }

  // Show no footer when authenticated but not on dashboard
  if (isAuthenticated) {
    return null;
  }

  // Show full footer for non-authenticated pages
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:justify-self-center md:text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo/Butler.png"
                alt="Butler Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold text-gray-800">
                Butler
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Your personal AI assistant for all things tech.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-800">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-800">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-800">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-gray-800">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-800">
              Connect
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Butler. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="mt-4 flex md:justify-end text-center justify-center">
            <p className="text-sm text-gray-500">Mobile apps coming soon!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
