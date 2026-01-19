"use client";
import "./globals.css";
import { Raleway, Bricolage_Grotesque } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});


import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`w-full bg-bg text-primary ${raleway.variable} ${bricolage.variable}`}>

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
