"use client";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="w-full bg-bg text-primary">
        <SessionProvider>
          <Navbar />
          <main className="max-w-screen">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
