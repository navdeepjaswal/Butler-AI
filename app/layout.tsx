import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Butler",
  description: "AI assistant for seniors",
  icons: {
    icon: "/logo/Butler.PNG",
    apple: "/logo/Butler.PNG",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link rel="icon" href="/logo/Butler.PNG" type="image/png" />
      </head>
      <body className={`${geistSans.className} antialiased flex flex-col h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-[72px]">{children}</main>
          <footer className="py-4 px-6 bg-gray-100 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Butler. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
