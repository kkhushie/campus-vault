"use client";

import { useSession } from "next-auth/react";
import { Package, Users, Shield, TrendingUp } from "lucide-react";

export default function HomePage() {
  const { data: session } = useSession();

  const features = [
    {
      icon: Package,
      title: "Share Resources",
      description: "Post and discover textbooks, electronics, and study materials"
    },
    {
      icon: Users,
      title: "Campus Community",
      description: "Connect with verified students from your college only"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "College email verification ensures trusted transactions"
    },
    {
      icon: TrendingUp,
      title: "Exclusive Deals",
      description: "Access student discounts and special campus offers"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-500/10 via-teal-600/5 to-transparent blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-gradient-to-tl from-gray-700/10 to-transparent blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-sm">Your Campus Marketplace</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Campus&nbsp;
              <span className=" mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                Vault
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              A secure, campus-only platform for sharing items, offers, and resources among verified students.
            </p>

            {session ? (
              <div className="inline-block mt-8">
                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Welcome Back
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-black font-bold">
                      {session.user?.email?.charAt(0).toUpperCase()}
                    </div>
                    <p className="text-white font-medium">{session.user?.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <p className="text-white/40 text-sm mb-4">
                  Login using your college Google account to continue
                </p>
                <a 
                  href="/auth"
                  className="inline-block px-8 py-4 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300 font-bold shadow-2xl shadow-white/10"
                >
                  Get Started
                </a>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/40 text-sm">Verified Students</div>
              </div>
              <div className="text-center border-l border-r border-white/10">
                <div className="text-4xl font-bold text-white mb-2">Secure</div>
                <div className="text-white/40 text-sm">Campus Authentication</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/40 text-sm">Platform Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}