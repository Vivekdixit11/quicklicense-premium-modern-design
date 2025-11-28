"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { useState } from "react";

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
    details: ["enterpriserawal6@gmail.com", "24/7 Support"],
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2">Get In Touch</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions? We're here to help. Reach out to our expert team for all your
              business registration needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="+91 98916 14601"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interested In</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full mt-1 px-3 py-2 border border-input rounded-lg bg-background"
                        >
                          <option value="">Select a service</option>
                          <option value="private-limited">Private Limited Company</option>
                          <option value="llp">LLP Registration</option>
                          <option value="fssai">FSSAI License</option>
                          <option value="iso">ISO Certification</option>
                          <option value="msme">MSME Registration</option>
                          <option value="startup">Startup India</option>
                          <option value="iec">IEC Code</option>
                          <option value="drug">Drug License</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full animated-gradient text-white font-semibold h-14"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're always happy to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[#23A8DD] flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground text-sm">
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
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12"
                      asChild
                    >
                      <a href="tel:+919891614601">
                        <Phone className="mr-3 w-5 h-5" />
                        Call Now: +91 98916 14601
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12"
                      asChild
                    >
                      <a href="https://wa.me/919891614601" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-3 w-5 h-5" />
                        WhatsApp Chat
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start h-12"
                      asChild
                    >
                      <a href="mailto:enterpriserawal6@gmail.com">
                        <Mail className="mr-3 w-5 h-5" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Mumbai's business district, our office is easily accessible
              and welcoming to all clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Map Integration</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    F-10/125 Sector-15 Rohini<br />
                    Delhi - 110085, India
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

