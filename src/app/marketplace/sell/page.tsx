"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { AlertCircle, CheckCircle, Package } from "lucide-react";

export default function SellItemPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
  });

  function update(key: string, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Basic validation
    if (!form.title || !form.category || !form.condition || !form.price) {
      alert("Please fill all required fields.");
      return;
    }

    const priceNum = Number(form.price);
    if (Number.isNaN(priceNum) || priceNum <= 0) {
      alert("Price must be greater than 0");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.title.trim(),
        description: form.description.trim() || null,
        category: form.category.trim(),
        condition: form.condition.trim(),
        price: priceNum,
        imageUrls: [],
      }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data?.error || "Failed to create item");
      return;
    }

    setShowSuccess(true);
    setForm({ title: "", description: "", category: "", condition: "", price: "" });
    
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-500/10 via-teal-600/5 to-transparent blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-gradient-to-tl from-gray-700/10 to-transparent blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-emerald-500/10">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-medium">Listing created successfully!</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-xl mx-auto px-6 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/60 text-sm">Create Listing</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Sell
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text ml-3">
              Item
            </span>
          </h1>
          
          <p className="text-white/50 text-lg">
            List your item on the campus marketplace
          </p>
        </div>

        {/* Form Container */}
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/50">
          {/* User Info */}
          {session && (
            <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Listing as
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-black font-bold">
                  {session.user?.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-medium">{session.user?.email}</p>
                  <p className="text-white/40 text-sm">Verified Student</p>
                </div>
              </div>
            </div>
          )}

          {/* Required Fields Note */}
          <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm">Fields marked with * are required</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-white font-medium flex items-center gap-2">
                {/* <Package className="w-4 h-4 text-emerald-400" /> */}
                Title *
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all"
                placeholder="What are you selling?"
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-white font-medium">Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all resize-none min-h-[100px]"
                placeholder="Describe your item in detail..."
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-white font-medium">Category *</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all"
                placeholder="e.g., Textbook, Electronics, Furniture"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                required
              />
            </div>

            {/* Condition */}
            <div className="space-y-2">
              <label className="text-white font-medium">Condition *</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all"
                placeholder="New / Like New / Used / Fair"
                value={form.condition}
                onChange={(e) => update("condition", e.target.value)}
                required
              />
              <p className="text-white/40 text-xs">Help buyers understand the item&apos;s state</p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label className="text-white font-medium">Price *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all"
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={form.price}
                  onChange={(e) => update("price", e.target.value)}
                  required
                />
              </div>
              <p className="text-white/40 text-xs">Price must be greater than $0</p>
            </div>

            {/* Security Note */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Secure Campus Marketplace</p>
                  <p className="text-white/60 text-sm">
                    Your listing will only be visible to verified students from your campus.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-emerald-500/20"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Listing...
                </div>
              ) : (
                "Create Listing"
              )}
            </button>
          </form>
        </div>

        {/* Helper Text */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-sm">
            Need help? Contact campus support at support@campusvault.edu
          </p>
        </div>
      </div>
    </div>
  );
}