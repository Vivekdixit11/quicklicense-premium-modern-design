"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function StickyContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="lg:sticky lg:top-24">
      <Card className="border-2 border-primary/20 hover:border-primary smooth-transition shadow-xl">
        <CardHeader className="bg-gradient-to-br from-[#083E6B] to-[#23A8DD] text-white rounded-t-xl">
          <CardTitle className="text-2xl font-heading">Get Free Consultation</CardTitle>
          <p className="text-sm opacity-90">Our experts will call you back within 24 hours</p>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="contact-name">Full Name *</Label>
              <Input
                id="contact-name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="contact-mobile">Mobile Number *</Label>
              <Input
                id="contact-mobile"
                type="tel"
                placeholder="+91 98916 14601"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="contact-email">Email Address *</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="contact-message">Message (Optional)</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full animated-gradient text-white font-semibold h-12">
              Request Callback
            </Button>
          </form>

          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium">Call Us Now</div>
                <a href="tel:+919891614601" className="text-muted-foreground hover:text-primary">
                  +91 98916 14601
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium">Email Us</div>
                <a href="mailto:enterpriserawal6@gmail.com" className="text-muted-foreground hover:text-primary">
                  enterpriserawal6@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium">WhatsApp</div>
                <a href="https://wa.me/919876543210" className="text-muted-foreground hover:text-primary">
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust Badges */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-[#E2F6F8] flex items-center justify-center flex-shrink-0">
            <span className="text-[#23A8DD] font-bold">✓</span>
          </div>
          <div className="text-sm">
            <div className="font-semibold">99% Success Rate</div>
            <div className="text-muted-foreground">10,000+ Happy Clients</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-bold">🔒</span>
          </div>
          <div className="text-sm">
            <div className="font-semibold">100% Secure</div>
            <div className="text-muted-foreground">Your data is safe with us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

