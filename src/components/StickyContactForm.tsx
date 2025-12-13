"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/lib/api";

export default function StickyContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
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
      const contactData: ContactFormData = {
        fullName: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message || "Contact form inquiry",
      };

      const result = await submitContactForm(contactData);
      const userName = formData.name;
      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });
      
      // Redirect immediately for lightning-fast UX
      setTimeout(() => {
        const transactionId = result.data?.id || '';
        window.location.href = `/thank-you?tid=${transactionId}&service=Contact&name=${encodeURIComponent(userName)}`;
      }, 500);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:sticky lg:top-24">
      <Card className="border-2 border-terracotta/30 hover:border-terracotta shadow-2xl smooth-transition overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-terracotta to-terracotta-dark text-white rounded-t-xl p-6">
          <CardTitle className="text-2xl font-heading font-bold">Get Free Consultation</CardTitle>
          <p className="text-sm opacity-95 mt-1">Our experts will call you back within 24 hours</p>
        </CardHeader>
        <CardContent className="p-6 bg-cream-light space-y-4">
          {submitted ? (
            <div className="text-center py-8 bg-white rounded-lg">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-charcoal">Thank You!</h3>
              <p className="text-sm text-charcoal/70">
                We'll contact you shortly
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-red-800 font-medium">Submission Failed</p>
                    <p className="text-xs text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              )}
              <div>
                <Label htmlFor="contact-name" className="text-charcoal font-medium">Full Name *</Label>
                <Input
                  id="contact-name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isLoading}
                  className="mt-1.5 border-charcoal/20 focus:border-terracotta focus:ring-terracotta/20 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="contact-mobile" className="text-charcoal font-medium">Mobile Number *</Label>
                <Input
                  id="contact-mobile"
                  type="tel"
                  placeholder="+91 98916 14601"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                  disabled={isLoading}
                  className="mt-1.5 border-charcoal/20 focus:border-terracotta focus:ring-terracotta/20 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="text-charcoal font-medium">Email Address *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isLoading}
                  className="mt-1.5 border-charcoal/20 focus:border-terracotta focus:ring-terracotta/20 bg-white"
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="text-charcoal font-medium">Message (Optional)</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  disabled={isLoading}
                  className="mt-1.5 border-charcoal/20 focus:border-terracotta focus:ring-terracotta/20 bg-white resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold h-12 text-base shadow-lg hover:shadow-xl transition-all rounded-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5 mr-2" />
                    Request Callback
                  </>
                )}
              </Button>
            </form>
          )}

          <div className="pt-4 border-t border-charcoal/10 space-y-3">
            <div className="flex items-center gap-3 text-sm bg-white p-3 rounded-lg">
              <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <div className="font-semibold text-charcoal">Call Us Now</div>
                <a href="tel:+919891614601" className="text-charcoal/70 hover:text-terracotta transition-colors">
                  +91 98916 14601
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm bg-white p-3 rounded-lg">
              <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <div className="font-semibold text-charcoal">Email Us</div>
                <a href="mailto:contact@quicklicense.in" className="text-charcoal/70 hover:text-terracotta transition-colors text-xs">
                  contact@quicklicense.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm bg-white p-3 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-charcoal">WhatsApp</div>
                <a href="https://wa.me/919891614601" className="text-charcoal/70 hover:text-green-600 transition-colors">
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust Badges */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 p-4 bg-white border border-charcoal/10 rounded-lg shadow-sm">
          <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-terracotta" />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-charcoal">99% Success Rate</div>
            <div className="text-charcoal/60">10,000+ Happy Clients</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white border border-charcoal/10 rounded-lg shadow-sm">
          <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
            <span className="text-terracotta font-bold text-lg">🔒</span>
          </div>
          <div className="text-sm">
            <div className="font-semibold text-charcoal">100% Secure</div>
            <div className="text-charcoal/60">Your data is safe with us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

