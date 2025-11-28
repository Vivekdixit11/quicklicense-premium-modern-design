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
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await import("@/lib/api").then(async ({ submitContactForm }) => {
        await submitContactForm({
          fullName: "New User (Hero Form)", // Placeholder as name isn't in this form
          email: formData.email,
          phone: formData.mobile,
          message: `Service: ${formData.service || 'Not specified'}, City: ${formData.city}`,
        });
      });

      setSubmitted(true);
      setFormData({ email: "", mobile: "", city: "", service: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#083E6B] via-[#083E6B] to-indigo-950 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#23A8DD]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#23A8DD]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E2F6F8]0/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-8 h-8 bg-[#23A8DD] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-[#E2F6F8]">{badge}</span>
              <img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" alt="India" className="w-5 h-5" />
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl lg:text-2xl text-[#E2F6F8] font-medium">
                {subtitle}
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="text-lg text-[#E2F6F8] leading-relaxed">
                {description}
              </p>
            )}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="space-y-3 pt-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#81BCC9] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E2F6F8]">{highlight}</span>
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
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#23A8DD] to-[#083E6B] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  <span>🎉</span>
                  <span>November Festive Sale Offer</span>
                  <span>🎉</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Register Your Company Today
                </h3>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Thank You!</h4>
                  <p className="text-gray-600">We have received your request and will contact you shortly.</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Register Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
                      {error}
                    </div>
                  )}

                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base"
                    required
                    disabled={isLoading}
                  />

                  <Input
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="h-12 text-base"
                    required
                    disabled={isLoading}
                  />

                  <Input
                    type="text"
                    placeholder="City/Pincode"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="h-12 text-base"
                    required
                    disabled={isLoading}
                  />

                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-12 px-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-[#23A8DD]"
                    required
                    disabled={isLoading}
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
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#84D3FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#23A8DD]"></div>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 text-base font-semibold bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] hover:from-[#083E6B] hover:to-[#083E6B]"
                  >
                    {isLoading ? "Submitting..." : "Get Started Now"}
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="text-[#84D3FF]">⭐</span>
                      <span className="font-semibold">4.5/5 Google Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-[#23A8DD]" />
                      <span className="font-semibold">MCA Approved Experts</span>
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                      <span className="text-[#083E6B]">🚀</span>
                      <span className="font-semibold">10L+ Companies Registered</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

