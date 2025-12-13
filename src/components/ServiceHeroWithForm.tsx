"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceHeroWithFormProps {
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  price?: string;
  stats?: { value: string; label: string }[];
}

export default function ServiceHeroWithForm({
  badge,
  title,
  subtitle,
  description,
  highlights,
  price,
  stats = [],
}: ServiceHeroWithFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { submitContactForm } = await import("@/lib/api");
      const result = await submitContactForm({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || `Inquiry from ${title} page`,
      });

      const userName = formData.name;
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Redirect immediately for lightning-fast UX
      setTimeout(() => {
        const transactionId = result.data?.id || '';
        window.location.href = `/thank-you?tid=${transactionId}&service=${encodeURIComponent(title)}&name=${encodeURIComponent(userName)}`;
      }, 500);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E2F6F8] via-white to-[#E2F6F8]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#23A8DD]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#083E6B]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Badge className="mb-6 px-4 py-2 bg-[#E2F6F8] text-[#083E6B] border-[#23A8DD]">
              {badge}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#1d1e22] leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl font-semibold text-[#23A8DD]">
                  {subtitle}
                </p>
              )}
              {price && (
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#083E6B]">{price}</span>
                  <span className="text-lg text-muted-foreground">+ Govt. Fees</span>
                </div>
              )}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#23A8DD] flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            {stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white border-2 border-[#E2F6F8]">
                    <div className="text-2xl font-bold text-[#083E6B]">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border-2 border-[#E2F6F8] p-6 lg:p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-[#1d1e22] mb-2">
                Get Started Today
              </h3>
              <p className="text-sm text-muted-foreground">
                Fill in your details and our expert will contact you within 24 hours
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
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
                  Send Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isLoading}
                    className="h-12 border-2 focus:border-[#23A8DD]"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isLoading}
                    className="h-12 border-2 focus:border-[#23A8DD]"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    disabled={isLoading}
                    className="h-12 border-2 focus:border-[#23A8DD]"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Tell us about your requirements (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isLoading}
                    className="min-h-[100px] border-2 focus:border-[#23A8DD] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full gap-2 bg-gradient-to-r from-[#083E6B] to-[#23A8DD] hover:from-[#23A8DD] hover:to-[#083E6B] text-white font-semibold h-12 text-base"
                >
                  {isLoading ? "Submitting..." : "Get Free Consultation"}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Your information is secure and will never be shared
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
