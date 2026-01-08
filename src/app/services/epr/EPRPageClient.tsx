"use client";

import { useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactForm from "@/components/StickyContactForm";
import { submitContactForm } from "@/lib/api";
import {
  FileText,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Building2,
  Globe,
  Package,
  AlertTriangle,
  Award,
  Users,
  FileCheck,
  MapPin,
  Mail,
  IndianRupee,
  RefreshCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Timer,
  BadgeCheck,
  Truck,
  ShoppingCart,
  Factory,
  Scale,
  BookOpen,
  ClipboardList,
  Send,
  Star,
  Leaf,
  Recycle,
  Battery,
  Laptop,
  Car,
  BarChart3,
  FileSpreadsheet,
  Target
} from "lucide-react";

// Hero Section (Cream/Terracotta theme matching homepage)
function HeroSection() {
  return (
    <section className="relative bg-cream-light overflow-hidden pt-20 pb-8 lg:pt-24 lg:pb-10">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-6 lg:py-8">
        {/* Disclaimer removed from here and moved to Office section as requested */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Recycle className="w-4 h-4" />
              EPR Compliance Expert
            </div>

            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 leading-tight">
              EPR Registration Consultancy for <span className="text-terracotta">Importers</span> & Manufacturers
            </h1>

            <p className="text-sm md:text-base text-charcoal/70 mb-4 leading-relaxed">
              Avoid <strong className="text-red-600">Customs Hold</strong> & <strong className="text-red-600">₹1 Lakh+ Penalties</strong>.
              Consultancy for Extended Producer Responsibility compliance. We guide you through the CPCB filing process for Plastic, E-Waste, Battery & Tyres.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold text-terracotta mb-0.5">5000+</div>
                <div className="text-xs text-charcoal/60">PIBOs Registered</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold text-terracotta mb-0.5">99.5%</div>
                <div className="text-xs text-charcoal/60">Success Rate</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold text-terracotta mb-0.5">Fast</div>
                <div className="text-xs text-charcoal/60">Express Service</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold text-terracotta mb-0.5">24/7</div>
                <div className="text-xs text-charcoal/60">Support</div>
              </div>
            </div>

            {/* Key Warning */}
            <div className="bg-red-50 border-l-4 border-red-600 p-3 mb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1 text-sm">Goods Stuck at Customs?</h3>
                  <p className="text-xs text-red-800">
                    Without EPR Authorization, your shipment will be detained. Detention charges can exceed ₹2,00,000.
                    <strong> Apply NOW before importing!</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#callback-form"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                Get Consultation
              </a>
              <a
                href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Expert
              </a>
              <a
                href="tel:+919891614601"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                +91 98916 14601
              </a>
            </div>
          </div>

          {/* Right Form - Visible on all devices */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-t-4 border-terracotta">
              <div className="text-center mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-2">Check Your EPR Requirement</h3>
                <p className="text-sm text-charcoal/60">Get callback from our EPR expert</p>
              </div>
              <HeroRightForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroRightForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setError('Enter valid 10-digit phone');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await submitContactForm({
        fullName: formData.name || "EPR Lead",
        phone: formData.phone,
        email: formData.email,
        message: formData.message || "EPR Registration enquiry"
      });
      // Redirect to thank you page with transaction ID
      const transactionId = result.data?.id || '';
      window.location.href = `/thank-you?tid=${transactionId}&service=epr`;
    } catch {
      setError('Enter valid 10-digit phone');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">    {error && (
      <div className="p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200 flex items-start gap-2">
        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold">Submission Failed</div>
          <div className="mt-1">{error}</div>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-xs underline hover:no-underline"
          >
            Dismiss
          </button>
        </div>
      </div>
    )}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">Phone Number *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => { const val = e.target.value.replace(/\D/g, '').slice(0, 15); setFormData({ ...formData, phone: val }); }}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="Phone Number"
          maxLength={15}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">Product Category</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none resize-none"
          rows={3}
          placeholder="E.g., Plastic packaging, Electronics, Batteries..."
        />
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-4 py-3 rounded-lg font-semibold transition-all"
        >
          {isSubmitting ? (
            <>
              <RefreshCcw className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Consult Experts
            </>
          )}
        </button>
        <a href="tel:+919891614601" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-charcoal px-4 py-3 rounded-lg font-semibold border border-charcoal/20">
          <Phone className="w-5 h-5" /> Call
        </a>
      </div>
    </form>
  );
}

// Trust & Certification Section
function TrustCertificationSection() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Award className="w-3 h-3" />
            Trusted & Experienced
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-2">
            EPR Compliance Specialist
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
          {/* EPR Expert */}
          <div className="bg-cream rounded-xl p-4 border border-terracotta/20 text-center">
            <Shield className="w-10 h-10 text-terracotta mx-auto mb-2" />
            <div className="font-semibold text-sm text-charcoal">EPR Expert</div>
            <div className="text-xs text-charcoal/60 mt-1">Compliance Consultant</div>
          </div>

          {/* ISO */}
          <div className="bg-cream rounded-xl p-4 border border-terracotta/20 text-center">
            <BadgeCheck className="w-10 h-10 text-terracotta mx-auto mb-2" />
            <div className="font-semibold text-sm text-charcoal">ISO 9001:2015</div>
            <div className="text-xs text-charcoal/60 mt-1">Quality Assured</div>
          </div>

          {/* Verified */}
          <div className="bg-cream rounded-xl p-4 border border-terracotta/20 text-center">
            <Award className="w-10 h-10 text-terracotta mx-auto mb-2" />
            <div className="font-semibold text-sm text-charcoal">Verified Business</div>
            <div className="text-xs text-charcoal/60 mt-1">Trusted Partner</div>
          </div>

          {/* Experience */}
          <div className="bg-cream rounded-xl p-4 border border-terracotta/20 text-center">
            <Star className="w-10 h-10 text-terracotta mx-auto mb-2" />
            <div className="font-semibold text-sm text-charcoal">10+ Years</div>
            <div className="text-xs text-charcoal/60 mt-1">Experience</div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-bold text-xl text-terracotta">5000+</div>
            <div className="text-xs text-charcoal/60">Clients</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl text-terracotta">99.5%</div>
            <div className="text-xs text-charcoal/60">Success</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl text-terracotta">24-48h</div>
            <div className="text-xs text-charcoal/60">Processing</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-xl text-terracotta">24/7</div>
            <div className="text-xs text-charcoal/60">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// What is EPR Section
function WhatIsEPRSection() {
  return (
    <section className="py-8 lg:py-12">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-3 py-1.5 rounded-full text-xs font-medium mb-4">
        <BookOpen className="w-3 h-3" />
        Understanding EPR
      </div>
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-4">
        What is EPR Registration?
      </h2>
      <div className="space-y-3 text-charcoal/70 text-base">
        <p>
          <strong>EPR (Extended Producer Responsibility)</strong> is a mandatory environmental compliance under
          the Plastic Waste Management Rules, E-Waste Management Rules, Battery Waste Management Rules,
          and Waste Tyre Rules in India.
        </p>
        <p>
          Any entity that produces, imports, or brands packaged products (PIBO - Producer, Importer, Brand Owner)
          must obtain EPR Authorization from the <strong>Central Pollution Control Board (CPCB)</strong>.
          This ensures you take responsibility for collecting and recycling the waste generated by your products.
        </p>
        <p id="customs">
          Without EPR, you cannot clear shipments at customs, sell on e-commerce platforms like Amazon/Flipkart,
          or legally operate as a manufacturer/importer in India.
        </p>
      </div>

      {/* Key Points */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Shield className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-charcoal mb-1">Mandatory for All PIBOs</h3>
            <p className="text-sm text-charcoal/60">Producers, Importers, and Brand Owners must register</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Globe className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-charcoal mb-1">Customs Clearance Requirement</h3>
            <p className="text-sm text-charcoal/60">No EPR = Shipment detention at port</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <BarChart3 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-charcoal mb-1">Annual Target Compliance</h3>
            <p className="text-sm text-charcoal/60">Meet recycling targets through credit purchase</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Award className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-charcoal mb-1">Valid Across India</h3>
            <p className="text-sm text-charcoal/60">Valid across India for pan-India operations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// EPR Categories Section
function EPRCategoriesSection() {
  const categories = [
    {
      icon: Package,
      title: "Plastic Waste EPR",
      description: "Mandatory for packaging, carry bags, multi-layered packaging, sachets, wrappers",
      portal: "eprplastic.cpcb.gov.in",
      threshold: "No threshold - All PIBOs must register",
      color: "terracotta"
    },
    {
      icon: Laptop,
      title: "E-Waste EPR",
      description: "For electronics, electrical equipment, IT hardware, consumer appliances",
      portal: "eprtewastecpcb.in",
      threshold: "Bulk consumers also covered",
      color: "charcoal"
    },
    {
      icon: Battery,
      title: "Battery Waste EPR",
      description: "Lead-acid, lithium-ion, EV batteries, inverter batteries",
      portal: "eprbattery.cpcb.gov.in",
      threshold: "All battery producers/importers",
      color: "cream"
    },
    {
      icon: Car,
      title: "Waste Tyres EPR",
      description: "Automotive tyres for cars, bikes, commercial vehicles",
      portal: "eprtyres.cpcb.gov.in",
      threshold: "Manufacturers & Importers",
      color: "terracotta"
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      {/* short anchors for quick deep-links requested by user */}
      <div id="plastic" />
      <div id="ewaste" />
      <div id="battery" />
      <div id="tyres" />
      <div className="mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
          4 EPR Categories in India
        </h2>
        <p className="text-lg text-charcoal/70">
          Choose your product category for registration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, index) => {
          const colorClasses = {
            terracotta: "bg-terracotta/10 border-terracotta/30 text-terracotta-dark",
            charcoal: "bg-charcoal/10 border-charcoal/30 text-charcoal",
            cream: "bg-cream border-charcoal/10 text-charcoal"
          };

          // create simple slug id for deep-links
          const slug = cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

          return (
            <div id={slug} key={index} className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 ${colorClasses[cat.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-4`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">{cat.title}</h3>
              <p className="text-charcoal/70 mb-4">{cat.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-charcoal/60">
                  <Globe className="w-4 h-4" />
                  <span className="font-mono text-xs">{cat.portal}</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal/60">
                  <CheckCircle2 className="w-4 h-4" />
                  {cat.threshold}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Important Note */}
      <div className="mt-8 bg-cream border-l-4 border-terracotta p-6 rounded-r-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-charcoal mb-2">Not Sure Which Category?</h3>
            <p className="text-charcoal/80 mb-3">
              Many importers need multiple EPR registrations. For example, a mobile phone importer needs
              BOTH E-Waste EPR (for the device) AND Plastic EPR (for packaging).
            </p>
            <a
              href="#callback-form"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold"
            >
              File Application with Experts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Who Needs EPR Section
function WhoNeedsEPRSection() {
  return (
    <section className="py-12 lg:py-16">
      {/* short anchors for services */}
      <div id="credits" />
      <div id="returns" />
      <div className="mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Who Needs EPR Authorization?
        </h2>
        <p className="text-lg text-charcoal/70">
          EPR is mandatory for these business entities
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-cream to-cream-light rounded-2xl p-6 border border-terracotta/20">
          <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Importers</h3>
          <ul className="space-y-2 text-charcoal/70">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Importing packaged goods from China, USA, Europe, etc.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Clearing shipments at customs requires EPR</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Must have IEC (Import Export Code)</span>
            </li>
          </ul>
        </div>

        <div className="bg-cream rounded-2xl p-6 border border-charcoal/10">
          <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center mb-4">
            <Factory className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Manufacturers</h3>
          <ul className="space-y-2 text-charcoal/70">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span>Producing packaged products in India</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span>Factories manufacturing electronics, batteries, tyres</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span>Annual return filing mandatory</span>
            </li>
          </ul>
        </div>

        <div className="bg-terracotta/10 rounded-2xl p-6 border border-terracotta/30">
          <div className="w-12 h-12 bg-terracotta rounded-xl flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-3">Brand Owners</h3>
          <ul className="space-y-2 text-charcoal/70">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Selling under your own brand name</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Amazon/Flipkart private label sellers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Responsible for product packaging</span>
            </li>
          </ul>
        </div>
      </div>

      {/* PIBO Explanation */}
      <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-charcoal/5">
        <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
          <Target className="w-7 h-7 text-terracotta" />
          What is PIBO?
        </h3>
        <p className="text-charcoal/70 mb-4">
          <strong>PIBO</strong> stands for <strong>Producer, Importer, Brand Owner</strong>.
          This is the standard terminology for entities required to obtain EPR Registration.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-cream rounded-xl">
            <h4 className="font-bold text-charcoal mb-2">Producer (P)</h4>
            <p className="text-sm text-charcoal/60">Manufactures products in India</p>
          </div>
          <div className="p-4 bg-cream rounded-xl">
            <h4 className="font-bold text-charcoal mb-2">Importer (I)</h4>
            <p className="text-sm text-charcoal/60">Brings goods from outside India</p>
          </div>
          <div className="p-4 bg-cream rounded-xl">
            <h4 className="font-bold text-charcoal mb-2">Brand Owner (BO)</h4>
            <p className="text-sm text-charcoal/60">Sells under registered brand/trademark</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// EPR Services Section
function EPRServicesSection() {
  const services = [
    {
      icon: FileCheck,
      title: "EPR Registration Services",
      description: "One-time setup and portal registration with CPCB",
      features: [
        "Gap Analysis (PIBO categorization)",
        "Portal setup on CPCB portals",
        "Documentation & KYC upload",
        "Final EPR Authorization Certificate"
      ],
      color: "terracotta"
    },
    {
      icon: BarChart3,
      title: "Target Calculation & Management",
      description: "Annual liability assessment based on sales/imports",
      features: [
        "EPR target calculation (kg/tons)",
        "Sales data structuring (state-wise)",
        "Invoice management for CPCB",
        "Liability tracking dashboard"
      ],
      color: "charcoal"
    },
    {
      icon: Recycle,
      title: "Credit Procurement & Trading",
      description: "Buy recycling certificates to meet compliance",
      features: [
        "EPR credit procurement from verified recyclers",
        "Credit transfer & wallet locking",
        "Vendor due diligence",
        "Certificate validation"
      ],
      color: "cream"
    },
    {
      icon: FileSpreadsheet,
      title: "Return Filing & Reporting",
      description: "Annual/quarterly compliance reporting to CPCB",
      features: [
        "Annual return preparation & filing",
        "Quarterly returns (where applicable)",
        "Fee calculation & payment",
        "Compliance certificate generation"
      ],
      color: "terracotta"
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
          <ClipboardList className="w-4 h-4" />
          Our Services
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Complete EPR Compliance Solutions
        </h2>
        <p className="text-lg text-charcoal/70">
          From registration to annual compliance - we handle everything
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const colorClasses = {
            terracotta: "from-terracotta/10 to-terracotta/5 border-terracotta/20",
            charcoal: "from-charcoal/10 to-charcoal/5 border-charcoal/20",
            cream: "from-cream to-cream-light border-charcoal/10"
          };
          // create id for anchor where useful
          const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

          return (
            <div id={slug} key={index} className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-2xl p-6 border`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <service.icon className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>
              <p className="text-charcoal/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IndianRupee className="w-4 h-4" />
            Government Fees
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            CPCB EPR Registration Fees
          </h2>
          <p className="text-lg text-charcoal/70">
            Government fees are fixed. Professional charges will be discussed based on your specific requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Plastic EPR */}
            <div className="bg-terracotta/10 border-2 border-terracotta/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-8 h-8 text-terracotta" />
                <h3 className="text-xl font-bold text-charcoal">Plastic Waste EPR</h3>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-terracotta mb-1">₹5,000</div>
                <div className="text-sm text-charcoal/60">Registration Fee (Annual Processing)</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  Portal: eprplastic.cpcb.gov.in
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  Mandatory for all packaging PIBOs
                </li>
              </ul>
            </div>

            {/* E-Waste EPR */}
            <div className="bg-charcoal/10 border-2 border-charcoal/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="w-8 h-8 text-charcoal" />
                <h3 className="text-xl font-bold text-charcoal">E-Waste EPR</h3>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-charcoal mb-1">₹10,000</div>
                <div className="text-sm text-charcoal/60">Registration Fee (Annual Processing)</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-charcoal flex-shrink-0 mt-0.5" />
                  Portal: eprtewastecpcb.in
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-charcoal flex-shrink-0 mt-0.5" />
                  For electronics & electrical goods
                </li>
              </ul>
            </div>

            {/* Battery EPR */}
            <div className="bg-cream border-2 border-charcoal/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="w-8 h-8 text-terracotta" />
                <h3 className="text-xl font-bold text-charcoal">Battery Waste EPR</h3>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-terracotta mb-1">₹7,500</div>
                <div className="text-sm text-charcoal/60">Registration Fee (Annual Processing)</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  Portal: eprbattery.cpcb.gov.in
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  Lead-acid, lithium-ion, EV batteries
                </li>
              </ul>
            </div>

            {/* Waste Tyres EPR */}
            <div className="bg-charcoal/10 border-2 border-charcoal/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-charcoal" />
                <h3 className="text-xl font-bold text-charcoal">Waste Tyres EPR</h3>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-charcoal mb-1">₹6,000</div>
                <div className="text-sm text-charcoal/60">Registration Fee (Annual Processing)</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-charcoal flex-shrink-0 mt-0.5" />
                  Portal: eprtyres.cpcb.gov.in
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-charcoal flex-shrink-0 mt-0.5" />
                  Automotive tyre manufacturers/importers
                </li>
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 bg-cream border-l-4 border-terracotta p-6 rounded-r-xl">
            <h3 className="font-bold text-charcoal mb-2">Professional Charges</h3>
            <p className="text-charcoal/80 mb-3">
              Our professional charges vary based on:
            </p>
            <ul className="space-y-1 text-charcoal/80">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Number of product categories</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Annual sales/import volume</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Ongoing compliance vs one-time registration</span>
              </li>
            </ul>
            <div className="mt-4">
              <a href="#callback-form" className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold">
                Get Custom Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple EPR Target Calculator
function EPRCalculatorSection() {
  const [category, setCategory] = useState('plastic');
  const [annualQty, setAnnualQty] = useState<number | ''>('');
  const [result, setResult] = useState<{ targetKg: number; estCost: number } | null>(null);

  const rates: Record<string, number> = {
    plastic: 0.05, // example: 5% of quantity as collection target
    'e-waste': 0.02,
    battery: 0.1,
    tyres: 0.08
  };

  const costPerKg = 10; // example cost per kg of credit in INR

  const calculate = () => {
    const qty = Number(annualQty) || 0;
    const rate = rates[category] || 0.05;
    const targetKg = +(qty * rate).toFixed(2);
    const estCost = +(targetKg * costPerKg).toFixed(2);
    setResult({ targetKg, estCost });
  };

  return (
    <section id="calculator" className="py-12 lg:py-16 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <BarChart3 className="w-3 h-3" />
            Quick Estimator
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-2">EPR Target Calculator</h2>
          <p className="text-charcoal/70">Estimate annual collection target and credit cost for planning (simple estimator).</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-charcoal/20">
                <option value="plastic">Plastic Packaging</option>
                <option value="e-waste">E-Waste</option>
                <option value="battery">Battery</option>
                <option value="tyres">Tyres</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Annual Quantity (kg)</label>
              <input type="number" min={0} value={annualQty as any} onChange={(e) => setAnnualQty(e.target.value === '' ? '' : Number(e.target.value))} className="w-full px-3 py-2 rounded-lg border border-charcoal/20" placeholder="Enter total annual weight in kg" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={calculate} className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-4 py-2 rounded-lg font-semibold">Calculate</button>
            <button onClick={() => { setAnnualQty(''); setResult(null); }} className="inline-flex items-center gap-2 bg-white border border-charcoal/20 text-charcoal px-4 py-2 rounded-lg">Reset</button>
          </div>

          {result && (
            <div className="mt-6 bg-cream rounded-lg p-4">
              <div className="text-sm text-charcoal/70">Estimated Annual Collection Target</div>
              <div className="text-2xl font-bold text-terracotta">{result.targetKg} kg</div>
              <div className="text-sm text-charcoal/70">Approx. Credit Cost</div>
              <div className="text-lg font-semibold">₹ {result.estCost}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Documents Section
function DocumentsSection() {
  const commonDocs = [
    { name: "GST Registration Certificate", mandatory: true },
    { name: "Company PAN Card", mandatory: true },
    { name: "Aadhar Card of Designated Signatory", mandatory: true },
    { name: "Import Export Code (IEC) - For Importers", mandatory: true },
    { name: "Product Catalog/HSN Codes", mandatory: true },
    { name: "Previous Year Sales/Import Data", mandatory: true },
    { name: "Brand Owner Authorization Letter (if applicable)", mandatory: false },
    { name: "Process Flow Diagram (for Manufacturers)", mandatory: false }
  ];

  return (
    <section id="documents-list" className="py-16 lg:py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Document Checklist
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Documents Required for EPR Registration
          </h2>
          <p className="text-lg text-charcoal/70">
            Keep these documents ready for seamless CPCB registration
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-terracotta" />
              Required Documents for All PIBOs
            </h3>
            <ul className="space-y-3">
              {commonDocs.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-cream/50 rounded-lg">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${doc.mandatory ? 'text-terracotta' : 'text-charcoal/40'}`} />
                  <div className="flex-1">
                    <span className="text-charcoal font-medium">{doc.name}</span>
                    {doc.mandatory && <span className="ml-2 text-xs bg-cream-light text-terracotta-dark px-2 py-0.5 rounded">Mandatory</span>}
                    {!doc.mandatory && <span className="ml-2 text-xs bg-charcoal/10 text-charcoal/60 px-2 py-0.5 rounded">Optional</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal-specific notes */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
              <h4 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-terracotta" />
                For Importers
              </h4>
              <p className="text-sm text-charcoal/70">
                IEC (Import Export Code) is mandatory. You'll also need customs clearance records
                and Bill of Entry for target calculation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5">
              <h4 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-terracotta" />
                For Manufacturers
              </h4>
              <p className="text-sm text-charcoal/70">
                Factory License and Process Flow Diagram showing production process
                are required for CPCB portal submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Free Gap Analysis",
      description: "Share your business & product details. We determine exact EPR requirements, PIBO category, and portal selection.",
      icon: Target,
      duration: "30 mins"
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Upload documents via our secure portal. We verify completeness and prepare for CPCB submission.",
      icon: FileText,
      duration: "1-2 days"
    },
    {
      step: "03",
      title: "Portal Registration",
      description: "We create your account on respective CPCB portal and upload all KYC documents.",
      icon: Globe,
      duration: "1 day"
    },
    {
      step: "04",
      title: "Application Acknowledgement",
      description: "CPCB reviews your application. We handle any queries or modifications required and track the approval process.",
      icon: CheckCircle2,
      duration: "Upon Govt approval"
    },
    {
      step: "05",
      title: "Ongoing Compliance",
      description: "Annual target calculation, credit procurement, and return filing to maintain compliance.",
      icon: RefreshCcw,
      duration: "Yearly"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            5-Step Process
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            How EPR Registration Works
          </h2>
          <p className="text-lg text-charcoal/70">
            From registration to annual compliance - fully managed by experts
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-terracotta to-terracotta/20" />
              )}

              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-terracotta rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
              </div>

              <div className="flex-1 bg-cream rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                  <span className="text-sm bg-terracotta/10 text-terracotta-dark px-3 py-1 rounded-full font-medium">
                    {item.duration}
                  </span>
                </div>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-terracotta to-terracotta-dark rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-white mb-1">24-48 hrs</div>
                <div className="text-sm text-white/80">Express Registration</div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">7-15 days</div>
                <div className="text-sm text-white/80">Standard Processing</div>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.5%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is EPR and why is it mandatory for my business?",
      answer: "EPR (Extended Producer Responsibility) is a mandatory environmental compliance framework in India. If you produce, import, or brand packaged products, you're legally responsible for managing the waste generated. Without EPR authorization from CPCB, you cannot clear customs, sell on e-commerce platforms, or legally operate. Penalties can exceed ₹1,00,000 plus product seizure."
    },
    {
      question: "Do I need EPR if I only import small quantities?",
      answer: "Yes. There is NO minimum threshold for most EPR categories. Even if you import 1 kg of plastic packaging or a single laptop, EPR registration is mandatory. The only exception is personal use imports (not for resale). For commercial imports of any volume, EPR authorization is required before customs clearance."
    },
    {
      question: "How long does EPR registration take?",
      answer: "Standard processing takes 7-15 working days after document submission. We offer express service for urgent customs clearance cases. The timeline depends on document completeness and portal response time. Most delays happen due to incomplete paperwork - we pre-verify everything to avoid this."
    },
    {
      question: "What's the difference between EPR Authorization and EPR Credits?",
      answer: "EPR Authorization is the initial certificate proving you're registered with CPCB. EPR Credits are recycling certificates you must purchase annually to meet your waste collection targets. Think of it as: Authorization = License to operate. Credits = Proof you met your recycling obligation. You need both for full compliance."
    },
    {
      question: "Can my goods be released from customs without EPR?",
      answer: "No. Customs will NOT release shipments without valid EPR Authorization. Your goods will be detained at the port, incurring demurrage charges (₹5,000-₹10,000 per day). After 30 days, goods may be auctioned or destroyed. Always obtain EPR BEFORE importing to avoid costly detention."
    },
    {
      question: "Do I need EPR for Amazon/Flipkart selling?",
      answer: "Yes, absolutely. E-commerce platforms require EPR certificates for listing packaged products. Amazon and Flipkart conduct regular compliance audits and will delist non-compliant sellers. You must upload your EPR Authorization certificate during product listing or risk account suspension."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            EPR Registration FAQs
          </h2>
          <p className="text-lg text-charcoal/70">
            Quick answers to common EPR compliance questions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-terracotta text-white' : 'bg-charcoal/10 text-charcoal'
                    }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-charcoal/10">
                      <p className="text-charcoal/70 leading-relaxed mt-4">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">More questions about EPR compliance?</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-orange hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Expert
              </a>
              <a
                href="#callback-form"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Request Callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Callback Form Section
function CallbackFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    productCategory: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await submitContactForm({
        fullName: formData.name || "EPR Callback Lead",
        phone: formData.phone,
        email: formData.email,
        message: `Business: ${formData.businessType || 'N/A'}, Products: ${formData.productCategory || 'N/A'}, Message: ${formData.message || 'EPR Registration enquiry'}`
      });
      // Redirect to thank you page with transaction ID
      const transactionId = result.data?.id || '';
      window.location.href = `/thank-you?tid=${transactionId}&service=epr`;
    } catch (err) {
      console.error('Callback form error:', err);
      const errorMessage = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(errorMessage);
      setTimeout(() => setError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="callback-form" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                Free Consultation
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
                File EPR Application with Experts
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Our EPR compliance consultant will call you within 15 minutes to help file your application.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Immediate Response</h3>
                    <p className="text-charcoal/60">Expert callback within 15 minutes during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">100% Confidential</h3>
                    <p className="text-charcoal/60">Your business information is secure and confidential</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-2xl shadow-xl p-8 border-t-4 border-terracotta">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Request Received!</h3>
                  <p className="text-charcoal/60">Our EPR expert will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200 flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold">Submission Failed</div>
                        <div className="mt-1">{error}</div>
                      </div>
                      <button
                        onClick={() => setError(null)}
                        className="text-red-700 hover:text-red-900"
                        type="button"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Name *</label>
                      <input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Phone *</label>
                      <input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="importer">Importer</option>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="brand-owner">Brand Owner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">EPR Category</label>
                      <select
                        value={formData.productCategory}
                        onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="plastic">Plastic Packaging</option>
                        <option value="e-waste">E-Waste</option>
                        <option value="battery">Battery</option>
                        <option value="tyres">Tyres</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none resize-none"
                      placeholder="Brief description of your EPR requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCcw className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        File Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section id="offer" className="py-16 lg:py-24 bg-gradient-to-br from-terracotta via-terracotta-dark to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Start Now
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't Let Your Shipment Get Stuck at Customs
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get EPR Registration with our fast-track service. Avoid penalties, detention charges, and business disruption.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-white/70">PIBOs Registered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">99.5%</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">24-48h</div>
              <div className="text-sm text-white/70">Express Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#callback-form"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream text-terracotta px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Get Consultation
            </a>
            <a
              href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration%20urgently"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-orange hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
            <a
              href="tel:+919891614601"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +91 98916 14601
            </a>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            Trusted by 5000+ Importers & Manufacturers across India | Professional Consultancy Service
          </p>
          <p className="mt-2 text-white/60 text-xs">
            Disclaimer: We are a private consultancy firm providing documentation assistance. We are not affiliated with any regulatory body or government agency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function EPRPageClient() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Disclaimer Banner */}
        <div className="bg-charcoal/5 border-b border-charcoal/10 py-2">
          <div className="container mx-auto px-4">
            <p className="text-xs text-charcoal/70 text-center">
              <strong>Disclaimer:</strong> Quick License is a private consultancy service. We provide documentation and filing assistance. We are not affiliated with any regulatory body or government agency.
            </p>
          </div>
        </div>

        <HeroSection />
        <TrustCertificationSection />
        {/* quick about anchor (links to about page can also use this) */}
        <div id="about" />

        {/* Two-column layout with sticky form */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content - Left Side */}
            <div className="flex-1 lg:max-w-[calc(100%-400px)]">
              <WhatIsEPRSection />
              <EPRCategoriesSection />
              <WhoNeedsEPRSection />
              <EPRServicesSection />
              <PricingSection />
              <EPRCalculatorSection />
              <DocumentsSection />
              <ProcessSection />
              {/* legal anchor for quick linking to legal/terms */}
              <div id="legal" />
              <FAQSection />
              {/* anchor for contact/quick deep-link */}
              <div id="contact" />
              <CallbackFormSection />
            </div>

            {/* Sticky Form - Right Side */}
            <div className="hidden lg:block w-[360px] flex-shrink-0">
              <div className="sticky top-24">
                <StickyContactForm />
              </div>
            </div>
          </div>
        </div>

        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
