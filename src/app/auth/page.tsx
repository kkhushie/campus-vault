"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Shield, CheckCircle2, Sparkles } from "lucide-react";

export default function AuthPage() {
  const { data: session } = useSession();
  
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-black">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-emerald-500/20 via-teal-600/10 to-transparent blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-700/15 to-transparent blur-[100px] animate-pulse" />
      
      {/* Animated Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Enhanced Decorative elements */}
      <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" />
      <div className="absolute top-28 left-20 w-20 h-px bg-gradient-to-r from-emerald-400/30 to-transparent" />
      
      <div className="absolute bottom-32 right-24 w-px h-40 bg-gradient-to-b from-transparent via-teal-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-44 right-24 w-24 h-px bg-gradient-to-l from-teal-400/30 to-transparent" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-emerald-500/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-teal-500/20 rounded-br-3xl" />
      
      {/* Glass card container */}
      <div className="relative max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Glow effect behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl rounded-3xl" />
        
        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 rounded-3xl p-10 shadow-2xl shadow-emerald-500/10">
          {/* Header */}
          <div className="mb-8">
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center mb-6 group hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/50" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-4xl font-bold text-white">
                  Authentication
                </h2>
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Secure access to Campus Vault
              </p>
            </div>
          </div>
          
          {session ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              {/* Success indicator */}
              <div className="flex items-center gap-2 text-emerald-400 mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Successfully Connected</span>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 shadow-lg backdrop-blur-sm">
                <p className="text-emerald-400/80 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  Connected Account
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-emerald-500/30">
                    {session.user?.email?.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate text-lg">{session.user?.email}</p>
                    <p className="text-white/40 text-xs mt-1">Verified Student</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50" />
                </div>
              </div>
              
              <button
                onClick={() => signOut()}
                className="w-full py-4 px-6 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 font-semibold group relative overflow-hidden shadow-lg hover:shadow-red-500/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Disconnect Account
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              {/* Benefits */}
              <div className="space-y-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-400/10 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Connect using your verified college Google account
                  </p>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-teal-400/20 to-teal-400/10 border border-teal-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Access exclusive campus resources and offers
                  </p>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-400/10 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Join a trusted community of verified students
                  </p>
                </div>
              </div>
              
              {/* Google Sign In Button */}
              <button
                onClick={() => signIn("google")}
                className="w-full py-4 px-6 rounded-2xl bg-white text-black hover:bg-gray-50 transition-all duration-300 font-bold shadow-2xl shadow-white/20 group relative overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              {/* Security badge */}
              <div className="flex items-center justify-center gap-2 text-white/30 text-xs pt-2">
                <Shield className="w-3 h-3" />
                <span>256-bit SSL encryption</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Bottom note with icon */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
          <p className="text-center text-white/30 text-xs">
            Secured by campus authentication
          </p>
          <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
        </div>
      </div>
    </div>
  );
}