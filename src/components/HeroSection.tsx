"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  stats?: {
    icon: React.ReactNode;
    text: string;
  };
  showForm?: boolean;
}

export default function HeroSection({
  badge = "ISO 27001 Certified Platform",
  title,
  subtitle,
  description,
  highlights = [],
  stats,
  showForm = true,
}: HeroSectionProps) {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    city: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-indigo-900 via-violet-900 to-indigo-950 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-indigo-100">{badge}</span>
              <img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" alt="India" className="w-5 h-5" />
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl lg:text-2xl text-indigo-100 font-medium">
                {subtitle}
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg text-indigo-200 leading-relaxed">
                {description}
              </p>
            )}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="space-y-3 pt-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-indigo-100">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Stats */}
            {stats && (
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 w-fit">
                {stats.icon}
                <p className="text-lg font-semibold text-white">{stats.text}</p>
              </div>
            )}
          </div>

          {/* Right Form Section */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <span>🎉</span>
                  <span>November Festive Sale Offer</span>
                  <span>🎉</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Register Your Company Today
                </h3>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 text-base"
                  required
                />

                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="h-12 text-base"
                  required
                />

                <Input
                  type="text"
                  placeholder="City/Pincode"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="h-12 text-base"
                  required
                />

                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 px-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Service</option>
                  <option value="private-limited">Private Limited Company</option>
                  <option value="llp">LLP Registration</option>
                  <option value="fssai">FSSAI License</option>
                  <option value="drug-license">Drug License</option>
                  <option value="iso">ISO Certification</option>
                  <option value="trademark">Trademark Registration</option>
                  <option value="msme">MSME Registration</option>
                  <option value="iec">IEC Code</option>
                  <option value="startup-india">Startup India</option>
                </select>

                {/* WhatsApp Updates */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Get easy updates through</span>
                  <div className="flex items-center gap-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">Whatsapp</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
                >
                  Get Started Now
                </Button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">4.5/5 Google Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">MCA Approved Experts</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                    <span className="text-red-500">🚀</span>
                    <span className="font-semibold">10L+ Companies Registered</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
