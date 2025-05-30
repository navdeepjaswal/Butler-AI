// app/protected/layout.tsx
"use client"; // this file needs to run in the browser

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Butler",
  description: "AI assistant for seniors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
