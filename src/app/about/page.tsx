"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Target,
  Eye,
  Award,
  Shield,
  Clock,
  ThumbsUp,
  Globe,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "10,000+" },
  { label: "Services Offered", value: "26+" },
  { label: "Success Rate", value: "99%" },
];

const values = [
  {
    icon: Target,
    title: "Speed & Efficiency",
    desc: "48-hour average incorporation with expedited filings and automated workflows.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "Your documents and data are protected with enterprise-level encryption.",
  },
  {
    icon: ThumbsUp,
    title: "Technology-Driven",
    desc: "Smart dashboards, AI-powered risk detection, and automated compliance tracking.",
  },
  {
    icon: Clock,
    title: "Expert Support 24/7",
    desc: "450+ specialists including startup lawyers, CAs, and compliance architects.",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Started with a mission to simplify business registrations" },
  { year: "2016", title: "1000+ Clients", desc: "Reached our first major milestone" },
  { year: "2018", title: "Expanded Services", desc: "Added 15+ new registration services" },
  { year: "2020", title: "Digital Transformation", desc: "Launched fully online platform" },
  { year: "2023", title: "10,000+ Businesses", desc: "Helped thousands of entrepreneurs succeed" },
];

const certifications = [
  { icon: Award, title: "ISO 9001:2015 Certified", desc: "Quality management systems" },
  { icon: Shield, title: "Government Authorized", desc: "Licensed by MCA & FSSAI" },
  { icon: CheckCircle2, title: "Industry Recognition", desc: "Best service provider 2023" },
  { icon: Globe, title: "Pan-India Presence", desc: "Services across all states" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-terracotta/10 text-terracotta border-terracotta/20">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight mb-6">
              Your One-Stop <span className="text-terracotta">Digital Partner</span> for Business Success
            </h1>
            <p className="text-lg text-gray-warm leading-relaxed">
              Quick License is a comprehensive business registration and compliance platform designed specifically 
              for Indian entrepreneurs. We handle all your legal, regulatory, and compliance needs so you can focus 
              on building your business.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-terracotta mb-1">{stat.value}</div>
                <div className="text-sm text-gray-warm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-6">
                Technology Meets <span className="text-terracotta">Expertise</span>
              </h2>
              <div className="space-y-4 text-gray-warm leading-relaxed">
                <p>
                  Quick License transforms how Indian businesses handle registration and compliance. 
                  We combine cutting-edge technology with expert legal support to deliver services 
                  that were traditionally complex, time-consuming, and expensive.
                </p>
                <p>
                  Our platform offers automated compliance tracking, smart dashboards, real-time alerts, 
                  and direct access to startup lawyers, CAs, and compliance architects. With 48-hour 
                  average incorporation time and bank-grade security, we're redefining speed and trust 
                  in business services.
                </p>
                <p>
                  From first-time entrepreneurs to companies preparing for funding or international expansion, 
                  Quick License provides scalable solutions that grow with your business.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-terracotta/10 text-terracotta border-terracotta/20">Mission & Vision</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal">
              What <span className="text-terracotta">Drives Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-gold/20 shadow-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-terracotta flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">Our Mission</h3>
                <p className="text-gray-warm leading-relaxed">
                  To be India's most comprehensive business registration and compliance platform, 
                  empowering entrepreneurs with technology-driven solutions that eliminate legal and 
                  regulatory barriers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gold/20 shadow-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">Our Vision</h3>
                <p className="text-gray-warm leading-relaxed">
                  To become the default operating system for Indian business compliance—where every 
                  entrepreneur relies on Quick License for seamless registration and strategic legal 
                  support throughout their business lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal">
              What We <span className="text-terracotta">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-cream border-gold/10 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-warm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-terracotta/10 text-terracotta border-terracotta/20">Trust Indicators</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal">
              Certified & <span className="text-terracotta">Recognized</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white border-gold/10 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-charcoal mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-warm">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal">
              <span className="text-terracotta">Milestones</span> That Matter
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-terracotta shadow-sm">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-1">{milestone.title}</h3>
                    <p className="text-gray-warm">{milestone.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

