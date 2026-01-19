"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400" />
            </div>
            <span className="text-xl font-bold text-white">
              Campus Vault
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/marketplace/sell"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Marketplace
            </Link>

            {session ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-sm text-white/80">{session.user?.email}</span>
                </div>
                    
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all duration-300 group"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="px-6 py-2 rounded-xl cursor-pointer bg-white text-black hover:bg-gray-100 transition-all duration-300 font-semibold text-sm shadow-lg shadow-white/10"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}