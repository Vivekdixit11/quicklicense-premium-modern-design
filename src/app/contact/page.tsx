"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/api";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["F-10/125 Sector-15 Rohini", "Delhi - 110085", "India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98916 14601", "Mon-Sat: 9 AM - 7 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["contact@quicklicense.in", "24/7 Support"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9 AM - 7 PM", "Saturday: 10 AM - 5 PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
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
        email: formData.email,
        phone: formData.mobile,
        message: `Service: ${formData.service || 'Not specified'}\n\n${formData.message}`,
      };

      await submitContactForm(contactData);
      setSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-terracotta/10 text-terracotta border-terracotta/20">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight mb-6">
              Let's <span className="text-terracotta">Connect</span>
            </h1>
            <p className="text-lg text-gray-warm leading-relaxed">
              Have questions? We're here to help. Reach out to our expert team for all your
              business registration needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
                  Send us a <span className="text-terracotta">Message</span>
                </h2>
                <p className="text-gray-warm">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-gold/20 shadow-sm">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-charcoal">Message Sent!</h4>
                      <p className="text-gray-warm">We have received your message and will contact you shortly.</p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        className="mt-4 border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-red-800 font-medium">Submission Failed</p>
                            <p className="text-sm text-red-700 mt-1">{error}</p>
                          </div>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-charcoal">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isLoading}
                            className="mt-1 border-gold/30 focus:border-terracotta"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-charcoal">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isLoading}
                            className="mt-1 border-gold/30 focus:border-terracotta"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="mobile" className="text-charcoal">Mobile Number *</Label>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="+91 98916 14601"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            required
                            disabled={isLoading}
                            className="mt-1 border-gold/30 focus:border-terracotta"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-charcoal">Service Interested In</Label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            disabled={isLoading}
                            className="w-full mt-1 px-3 py-2 border border-gold/30 rounded-lg bg-white text-charcoal focus:border-terracotta focus:outline-none"
                          >
                            <option value="">Select a service</option>
                            <option value="epr">EPR Registration</option>
                            <option value="lmpc">LMPC Registration</option>
                            <option value="wpc">WPC Approval</option>
                            <option value="private-limited">Private Limited Company</option>
                            <option value="llp">LLP Registration</option>
                            <option value="fssai">FSSAI License</option>
                            <option value="iso">ISO Certification</option>
                            <option value="msme">MSME Registration</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-charcoal">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          disabled={isLoading}
                          className="mt-1 border-gold/30 focus:border-terracotta"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold h-12"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
                  Contact <span className="text-terracotta">Information</span>
                </h2>
                <p className="text-gray-warm">
                  Reach out to us through any of these channels. We're always happy to help!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-terracotta flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-charcoal mb-1">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-warm text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="border-terracotta/30 bg-cream">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-charcoal text-lg mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-11 border-gold/30 text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta"
                      asChild
                    >
                      <a href="tel:+919891614601">
                        <Phone className="mr-3 w-4 h-4" />
                        Call Now: +91 98916 14601
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-11 border-gold/30 text-charcoal hover:bg-green-600 hover:text-white hover:border-green-600"
                      asChild
                    >
                      <a href="https://wa.me/919891614601" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 w-4 h-4" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-11 border-gold/30 text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta"
                      asChild
                    >
                      <a href="mailto:contact@quicklicense.in">
                        <Mail className="mr-3 w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
              Visit Our <span className="text-terracotta">Office</span>
            </h2>
            <p className="text-gray-warm max-w-2xl mx-auto">
              Our office is easily accessible and welcoming to all clients.
            </p>
          </div>

          <Card className="overflow-hidden border-gold/20">
            <div className="w-full h-80 bg-cream flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-terracotta mx-auto mb-3" />
                <p className="text-charcoal font-medium">F-10/125 Sector-15 Rohini</p>
                <p className="text-gray-warm text-sm mt-1">Delhi - 110085, India</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

