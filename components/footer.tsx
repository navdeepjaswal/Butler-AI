"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const supabase = createClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  // Don't show footer on dashboard
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (isAuthenticated) {
    return null;
  }

  return (
    <footer className="mt-16 bg-gray-100 px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Butler
            </h3>
            <p className="text-gray-700">
              Your friendly AI assistant, helping bridge the technology gap for
              seniors.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 transition-colors hover:text-gray-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 transition-colors hover:text-gray-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-700 transition-colors hover:text-gray-600"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 transition-colors hover:text-gray-600"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Contact
            </h3>
            <p className="mb-2 text-gray-700">Need help? We're here for you.</p>
            <p className="text-gray-700">Email: help@butlerai.com</p>
            <p className="text-gray-700">Phone: (555) 123-4567</p>
          </div>
        </div>

        <Separator className="my-8" />
        <p className="text-center text-gray-700">
          © {new Date().getFullYear()} Butler. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
