"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactForm from "@/components/StickyContactForm";
import { submitContactForm } from "@/lib/api";
import { trackLeadFormConversion } from "@/lib/googleAds";
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
  Wifi,
  Smartphone,
  Signal,
  Satellite,
  Radio,
  Waves,
  Target,
  TrendingUp
} from "lucide-react";

const certificateSvg = "data:image/svg+xml," + encodeURIComponent(`
<svg width="420" height="280" viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fdf4e3" />
      <stop offset="100%" stop-color="#f5dac4" />
    </linearGradient>
  </defs>
  <rect width="420" height="280" rx="24" fill="url(#grad)" />
  <rect x="24" y="24" width="372" height="232" rx="18" fill="#fff" stroke="#d7b49e" stroke-width="2" />
  <text x="210" y="70" font-family="'Georgia', serif" font-size="16" fill="#2c1a10" text-anchor="middle">Ministry of Communications</text>
  <text x="210" y="100" font-family="'Georgia', serif" font-size="22" fill="#a0522d" font-weight="bold" text-anchor="middle">Equipment Type Approval</text>
  <text x="210" y="128" font-family="'Segoe UI', sans-serif" font-size="12" fill="#4a3127" text-anchor="middle">Wireless Planning & Coordination Wing</text>
  <text x="60" y="160" font-family="'Segoe UI', sans-serif" font-size="11" fill="#4a3127">Certificate No.: ETA/WPC/QL-2045</text>
  <text x="60" y="180" font-family="'Segoe UI', sans-serif" font-size="11" fill="#4a3127">Applicant: Quick License (Consultancy)</text>
  <text x="60" y="200" font-family="'Segoe UI', sans-serif" font-size="11" fill="#4a3127">Product: RF/Bluetooth Module</text>
  <text x="60" y="220" font-family="'Segoe UI', sans-serif" font-size="11" fill="#4a3127">Bands Cleared: 2.4 GHz & 5 GHz ISM</text>
  <rect x="260" y="165" width="110" height="70" rx="10" fill="#fdf4e3" stroke="#d7b49e" />
  <text x="315" y="190" font-family="'Segoe UI', sans-serif" font-size="12" fill="#4a3127" text-anchor="middle">Official Seal</text>
  <text x="315" y="210" font-family="'Georgia', serif" font-size="14" fill="#a0522d" text-anchor="middle">WPC • ETA</text>
  <text x="315" y="228" font-family="'Segoe UI', sans-serif" font-size="10" fill="#4a3127" text-anchor="middle">Valid for 5 Years</text>
</svg>
`);

const heroPatternDataUri = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

// Hero Section (cream theme, modern design)
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-cream to-terracotta/5 overflow-hidden pt-20 lg:pt-24">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"" + heroPatternDataUri + "\")",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terracotta/10 backdrop-blur-sm px-4 py-2 rounded-full border border-terracotta/20">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-charcoal">Expert WPC Consultant</span>
            </div>

            {/* Title */}
            <h1 className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-charcoal">
              WPC Approval in India (ETA Certification)
            </h1>
            <p className="text-lg lg:text-xl text-terracotta font-medium">
              Fast-track clearance for every wireless, RFID & IoT product
            </p>

            {/* Description */}
            <p className="text-base text-charcoal/80 leading-relaxed max-w-2xl">
              Get fast and hassle-free approval for Bluetooth, Wi-Fi, RFID, RF modules and IoT devices.
              <span className="text-terracotta font-semibold"> Quick License handles documentation, lab testing and coordination</span>
              with the Ministry of Communications so you can launch in India without delays.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              {[
                "Equipment Type Approval (ETA) & Import License support",
                "RF testing coordination with accredited labs",
                "Daily follow-ups with WPC Wing until certificate is issued",
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-charcoal/10 shadow-sm w-fit">
              <Award className="w-5 h-5 text-terracotta" />
              <p className="text-lg font-semibold text-charcoal">2000+ ETA approvals • High success rate</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#callback-form"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <IndianRupee className="w-5 h-5" />
                Get ETA Approval
              </a>
              <a
                href="tel:+919891614601"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* Right Content: Themed Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-charcoal/5">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-charcoal">Get Free Consultation</h3>
              <p className="text-sm text-charcoal/60">Our expert will call you within 30 mins</p>
            </div>
            <HeroRightForm />
            <div className="mt-6 p-4 bg-cream/60 border border-terracotta/20 rounded-xl text-center">
              <p className="text-sm text-charcoal/70 font-semibold mb-3">Sample WPC ETA Certificate</p>
              <Image
                src={certificateSvg}
                alt="Sample WPC certificate preview"
                width={420}
                height={280}
                className="w-full h-auto rounded-lg border border-cream/60 shadow-sm"
                priority
                unoptimized
              />
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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await submitContactForm({ fullName: formData.name || "WPC Lead", phone: formData.phone, email: formData.email, message: formData.message || "WPC approval enquiry" });
      const transactionId = result.data?.id || '';
      trackLeadFormConversion(transactionId);
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParams = new URLSearchParams();
      redirectParams.set('tid', transactionId);
      redirectParams.set('service', 'wpc');
      if (urlParams.has('gclid')) redirectParams.set('gclid', urlParams.get('gclid')!);
      if (urlParams.has('utm_source')) redirectParams.set('utm_source', urlParams.get('utm_source')!);
      if (urlParams.has('utm_medium')) redirectParams.set('utm_medium', urlParams.get('utm_medium')!);
      if (urlParams.has('utm_campaign')) redirectParams.set('utm_campaign', urlParams.get('utm_campaign')!);
      window.location.href = "/thank-you?" + redirectParams.toString();
    } catch (err) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : "Failed to submit form";
      setError(errorMessage);
      setTimeout(() => setError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200 flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Submission Failed</div>
            <div className="mt-1">{error}</div>
            <button onClick={() => setError(null)} className="mt-2 text-xs underline hover:no-underline" type="button">
              Dismiss
            </button>
          </div>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Mobile Number</label>
        <input
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="10-digit mobile"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Email (optional)</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Brief Requirement</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none resize-none"
          rows={3}
          placeholder="Tell us about your wireless product"
        />
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-4 py-3 rounded-lg font-semibold transition-all"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>Get Free Consultation</>
          )}
        </button>
        <a href="tel:+919891614601" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-charcoal px-4 py-3 rounded-lg font-semibold">
          <Phone className="w-5 h-5" /> Call
        </a>
      </div>
    </form>
  );
}

// What is WPC Section
function WhatIsWPCSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
        <BookOpen className="w-4 h-4" />
        Understanding WPC
      </div>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
        What is WPC Approval?
      </h2>
      <div className="space-y-4 text-charcoal/70 text-lg">
        <p>
          <strong className="text-charcoal">WPC (Wireless Planning & Coordination)</strong> approval is the mandatory Equipment Type Approval (ETA)
          issued by the Ministry of Communications for any device that emits radio frequency signals in India.
        </p>
        <p>
          If your product communicates via Bluetooth, Wi-Fi, RFID, RF modules, LoRa, Zigbee, NFC or any other wireless protocol,
          you must secure ETA before importing, manufacturing or selling it in the Indian market.
        </p>
        <p>
          Approval confirms that the device operates within permitted frequency bands, follows the Indian Wireless Telegraphy Act, 1933,
          and will not interfere with national communication systems. Without ETA, shipments are stopped at customs and domestic sales are illegal.
        </p>
      </div>

      {/* Key Points */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Wifi className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Legal Compliance</h4>
            <p className="text-sm text-charcoal/60">Mandatory under Wireless Telegraphy Act</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Shield className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Product Safety</h4>
            <p className="text-sm text-charcoal/60">Ensures safe wireless products</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Globe className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Import Clearance</h4>
            <p className="text-sm text-charcoal/60">Required for customs clearance</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Award className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Market Access</h4>
            <p className="text-sm text-charcoal/60">Sell legally across India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Who Needs WPC Section
function WhoNeedsSection() {
  const categories = [
    {
      icon: Globe,
      title: "Importers",
      description: "Businesses importing wireless devices from foreign countries for sale in India",
      registration: "WPC ETA",
      validity: "5 Years",
      color: "terracotta"
    },
    {
      icon: Factory,
      title: "Manufacturers",
      description: "Companies manufacturing wireless products within India",
      registration: "WPC ETA",
      validity: "5 Years",
      color: "gold"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Sellers",
      description: "Online sellers listing wireless products on e-commerce platforms",
      registration: "WPC ETA",
      validity: "5 Years",
      color: "charcoal"
    },
    {
      icon: Package,
      title: "Distributors",
      description: "Wholesalers and distributors dealing with wireless equipment",
      registration: "WPC ETA",
      validity: "5 Years",
      color: "terracotta"
    }
  ];

  const devicesNeedingEta = [
    "RFID tags and readers",
    "Radio Frequency Identification (RFID) systems",
    "Remote key entry and access control devices",
    "Wireless headphones, earplugs and music players",
    "Radio frequency modules used inside IoT boards",
    "IoT gateways, telemetry nodes and smart controllers",
    "Bluetooth-enabled consumer electronics",
    "Wi-Fi, RF and Bluetooth transceiver modules",
    "Wireless patient monitoring & healthcare devices"
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Who Needs WPC Approval?</h2>
        <p className="text-lg text-charcoal/70">
          Every transmitter, transceiver and active wireless product entering India must carry an ETA certificate issued by the WPC Wing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
              cat.color === 'terracotta' ? 'bg-terracotta/10' :
              cat.color === 'gold' ? 'bg-gold/20' : 'bg-charcoal/10'
            }`}>
              <cat.icon className={`w-5 h-5 ${
                cat.color === 'terracotta' ? 'text-terracotta' :
                cat.color === 'gold' ? 'text-gold' : 'text-charcoal'
              }`} />
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-1">{cat.title}</h3>
            <p className="text-charcoal/60 text-xs mb-3">{cat.description}</p>
            <div className="flex items-center justify-between pt-3 border-t border-charcoal/10">
              <div>
                <p className="text-xs text-charcoal/50">Type</p>
                <p className="font-semibold text-charcoal text-xs">{cat.registration}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-charcoal/50">Validity</p>
                <p className="font-semibold text-terracotta text-xs">{cat.validity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg border border-charcoal/5 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Signal className="w-6 h-6 text-terracotta" />
          <h3 className="text-xl font-bold text-charcoal">Devices That Require ETA</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {devicesNeedingEta.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta mt-1" />
              <span className="text-sm text-charcoal/70">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-charcoal/70">
          <strong className="text-charcoal">Note:</strong> Only pure receivers (no transmitter or transceiver) are exempt from WPC/ETA approval.
        </p>
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-terracotta p-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Radio className="w-7 h-7" />WPC ETA Certificate</h3>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">For wireless equipment operating in India</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Issued by <strong>Wireless Planning & Coordination</strong> Wing</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70"><strong>5 years validity</strong> from date of issuance</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Valid across <strong>all Indian states</strong></span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Processing time: <strong>20-30 working days</strong></span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function MandatoryRequirementsSection() {
  const requirements = [
    "Operation strictly within India’s permitted RF bands",
    "RF test report issued by an accredited laboratory",
    "Equipment Type Approval (ETA) granted by WPC Wing",
    "Import License for wireless hardware that is shipped into India",
    "Safety, compliance and user documentation ready for inspection",
    "Proof that each transmitter / transceiver meets technical limits"
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Shield className="w-4 h-4" />
        Mandatory Requirements
      </div>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
        Regulatory Checklist for Wireless Products
      </h2>
      <p className="text-lg text-charcoal/70 mb-8">
        Whether you build locally or import finished goods, these conditions must be satisfied before the product hits the Indian market.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {requirements.map((item, index) => (
          <div key={index} className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-charcoal/5">
            <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
            <span className="text-sm text-charcoal/80">{item}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-charcoal/70">
        The rule applies to all transmitters, transceivers and wireless communication modules—only passive receivers are exempt.
      </p>
    </section>
  );
}

// Products Requiring WPC Section
function ProductsSection() {
  const productList = [
    "Tags and readers for warehouse or retail automation",
    "Radio Frequency Identification (RFID) equipment",
    "Remote key entry devices and smart access controllers",
    "Wireless headphones, earplugs and portable music players",
    "Radio frequency modules embedded inside IoT solutions",
    "Frequency identification RFID tags for inventory management",
    "Wireless devices used for patient monitoring inside hospitals",
    "Any transmitter operating on India’s unlicensed frequency bands"
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Package className="w-4 h-4" />
        Products That Need ETA
      </div>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
        Products That Require WPC Approval
      </h2>
      <p className="text-lg text-charcoal/70 mb-8">
        Because these devices transmit radio signals, the Ministry of Communications mandates Equipment Type Approval (ETA).
      </p>

      <div className="bg-cream rounded-3xl p-6 lg:p-10 border border-charcoal/5 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {productList.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-terracotta mt-1" />
              <span className="text-base text-charcoal/80">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-white rounded-xl border border-terracotta/30">
          <p className="text-sm text-charcoal/80">
            If the product is imported, an Import License may also be required depending on its RF category. All approvals and communication are
            managed through the WPC Wing (Coordination Branch).
          </p>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  const compliancePoints = [
    "Follow regulations issued by the Ministry of Communications for every RF band",
    "Undertake testing for radio frequency modules, RFID systems and Bluetooth devices",
    "Comply with mandatory requirements for all wireless products, transmitters and receivers entering India",
    "File for Equipment Type Approval (ETA) on the SARAL Sanchar portal",
    "Obtain an import license whenever hardware is sourced from outside India",
    "Submit supporting documents and clarifications to the Coordination WPC Wing",
    "Confirm that the product is not a pure receiver before filing (pure receivers are exempt)"
  ];

  return (
    <section className="py-12 lg:py-16 bg-cream">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Scale className="w-4 h-4" />
        Compliance Playbook
      </div>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
        Staying Compliant with India’s Wireless Rules
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {compliancePoints.map((item, index) => (
          <div key={index} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-charcoal/5 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-terracotta mt-1" />
            <span className="text-sm text-charcoal/80 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IndianRupee className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            WPC Approval Fees
          </h2>
          <p className="text-lg text-charcoal/70">
            Official fees are fixed. Professional charges are negotiable based on your requirements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-charcoal/5">
            {/* Registration Fee */}
            <div className="mb-8 pb-8 border-b border-charcoal/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-charcoal">Official Processing Fee</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-terracotta">Varies</div>
                  <p className="text-sm text-charcoal/60">By Category</p>
                </div>
              </div>
              <p className="text-charcoal/70 text-sm">
                WPC application fees vary based on equipment type and category. Testing charges are additional and depend on the lab selected.
              </p>
            </div>

            {/* Professional Fee */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-charcoal">Professional Charges</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-charcoal">Negotiable</div>
                  <p className="text-sm text-charcoal/60">Let's discuss</p>
                </div>
              </div>
              <p className="text-charcoal/70 text-sm mb-6">
                Our professional service charges are flexible and depend on your specific requirements, 
                number of products, testing needs, and additional services. We believe in fair pricing 
                and are always open to negotiations.
              </p>

              {/* Included Services */}
              <div className="bg-cream rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-charcoal mb-4">What's Included:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Document preparation & verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Lab testing coordination</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Application filing on SARAL portal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Follow-up with DoT authorities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Certificate delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Post-approval support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919891614601"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call for Best Quote
              </a>
              <a 
                href="https://wa.me/919891614601?text=Hi,%20I%20need%20WPC%20approval.%20Please%20share%20your%20best%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* Note */}
            <div className="mt-6 p-4 bg-terracotta/5 border border-terracotta/20 rounded-xl">
              <p className="text-sm text-charcoal/80 text-center">
                <strong className="text-terracotta">💡 We are ready for negotiations!</strong><br />
                Contact us to discuss your specific requirements and get a customized quote.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-charcoal/60 text-sm">
              <strong>Note:</strong> GST will be applicable as per regulatory requirements. Payment accepted via UPI, Card, or Bank Transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Documents Section
function DocumentsSection() {
  const documents = [
    { name: "Company KYC (Incorporation, GST, PAN)", mandatory: true },
    { name: "Product datasheet with technical specs", mandatory: true },
    { name: "RF test report from an accredited lab", mandatory: true },
    { name: "Detailed frequency and power output sheet", mandatory: true },
    { name: "User manual / installation guide", mandatory: true },
    { name: "Authorization letter from manufacturer (for importers)", mandatory: true },
    { name: "Optional supporting media (product photos, previous ETA)", mandatory: false }
  ];

  return (
    <section id="documents-list" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Document Checklist
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Documents Required for WPC Approval
          </h2>
          <p className="text-lg text-charcoal/70">
            Quick License prepares, verifies and files every document on your behalf
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-cream rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-terracotta p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <FileCheck className="w-6 h-6" />
                Required Documentation
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b border-charcoal/10 last:border-0">
                    <span className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-terracotta" />
                      <span className="text-charcoal/80">{doc.name}</span>
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      doc.mandatory ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {doc.mandatory ? 'Required' : 'Optional'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testing Requirements */}
          <div className="mt-8 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-8 border border-gold/30">
            <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <ClipboardList className="w-7 h-7 text-gold" />
              Testing Requirements
            </h3>
            <p className="text-charcoal/70 mb-6">
              Products must undergo testing at NABL/TEC approved laboratories for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "RF Parameter Testing",
                "SAR (Specific Absorption Rate) Testing",
                "EMI/EMC Compliance Testing",
                "Frequency Range Verification",
                "Power Output Measurement",
                "Antenna Gain Testing",
                "Modulation Testing",
                "Spurious Emission Testing"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                  <span className="w-6 h-6 rounded-full bg-gold/30 text-gold flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-charcoal/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    "100% ETA approval success rate across wireless categories",
    "Fast turnaround time with proactive follow-ups",
    "Complete coordination with the WPC Wing and DGFT",
    "Expert handling of RF test reports and technical clarifications",
    "Hassle-free filing, documentation and portal management",
    "Dedicated compliance manager for every product line"
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Why Choose Quick License
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Your Wireless Product Launch Partner
          </h2>
          <p className="text-lg text-charcoal/70">
            We ensure your hardware enters the Indian market legally and quickly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-charcoal/5 shadow-sm">
              <Star className="w-5 h-5 text-terracotta mt-1" />
              <span className="text-sm text-charcoal/80 leading-relaxed">{reason}</span>
            </div>
          ))}
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
      title: "RF Testing",
      description: "Your product is tested in an accredited NABL/TEC laboratory to capture RF emissions, SAR values and spurious limits.",
      icon: Radio,
      duration: "5-7 days"
    },
    {
      step: "02",
      title: "Document Preparation",
      description: "We prepare the RF report, product datasheet, user manual, authorization letter and frequency details in WPC-ready templates.",
      icon: ClipboardList,
      duration: "3 days"
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Complete ETA dossier is uploaded on the SARAL Sanchar portal along with the RF report and supporting documents.",
      icon: FileText,
      duration: "1 day"
    },
    {
      step: "04",
      title: "Frequency Validation",
      description: "The WPC Wing validates that the device works only within India’s permitted frequency bands and power limits.",
      icon: Target,
      duration: "5-7 days"
    },
    {
      step: "05",
      title: "ETA Approval Issued",
      description: "WPC releases the Equipment Type Approval certificate. We share the digital copy instantly so production can start.",
      icon: Award,
      duration: "1 day"
    },
    {
      step: "06",
      title: "Import License (If Needed)",
      description: "For imported hardware we coordinate with DGFT to secure the wireless import license tied to your ETA certificate.",
      icon: Truck,
      duration: "3-5 days"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Simple 5-Step Process
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            WPC/ETA Approval Process (Step-by-Step)
          </h2>
          <p className="text-lg text-charcoal/70">
            Follow these stages to move from RF testing to import license without delays
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-terracotta to-terracotta/20" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-terracotta flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                  <span className="text-sm bg-terracotta/10 text-terracotta px-3 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total Timeline */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <p className="text-cream/60 text-sm">Standard Processing</p>
                <p className="text-3xl font-bold text-cream">20-30 Days</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <p className="text-cream/60 text-sm">Express Processing</p>
                <p className="text-3xl font-bold text-gold">10-15 Days</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <p className="text-cream/60 text-sm">Success Rate</p>
                <p className="text-3xl font-bold text-terracotta">High</p>
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
      question: "What is WPC Approval?",
      answer: "It is a mandatory certification issued by the Ministry of Communications for wireless devices sold or imported in India. The Equipment Type Approval (ETA) confirms that your product works inside approved RF bands and will not interfere with national networks."
    },
    {
      question: "Which products need ETA approval?",
      answer: "Any transmitter — RFID tags, RF modules, wireless headphones, IoT gateways, Bluetooth gadgets, Wi‑Fi equipment and telemetry nodes — needs ETA before it enters the Indian market."
    },
    {
      question: "How long does the approval take?",
      answer: "Typical projects are cleared in 7–20 working days depending on documentation quality, RF testing timelines and WPC queue."
    },
    {
      question: "Do receivers need WPC approval?",
      answer: "Pure receivers do not require approval. Any device that transmits or contains a transceiver must secure ETA."
    },
    {
      question: "Can you import without ETA?",
      answer: "No. Customs will detain or reject shipments that lack a valid ETA certificate. Always finish ETA before dispatching goods."
    },
    {
      question: "Do all RFID products need approval?",
      answer: "Yes. RFID tags, readers and frequency identification modules all transmit RF energy, so each model needs ETA clearance."
    },
    {
      question: "What about wireless audio and access control products?",
      answer: "Remote keys, wireless headphones, earplugs and portable music players contain transmitters and therefore must obtain WPC approval."
    },
    {
      question: "Do medical products need ETA?",
      answer: "Any patient monitoring or healthcare device that sends wireless data must be certified before it can be used or imported in India."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Everything You Need to Know About WPC
          </h2>
          <p className="text-lg text-charcoal/70">
            Get answers to the most common questions about WPC Approval
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-cream rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-charcoal/5 transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-terracotta text-white' : 'bg-charcoal/10 text-charcoal'
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

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">Still have questions?</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="https://wa.me/919891614601?text=Hi,%20I%20have%20questions%20about%20WPC%20approval"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Ask on WhatsApp
              </a>
              <a 
                href="#callback-form"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
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
    productType: "",
    message: "",
    preferredTime: ""
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
        fullName: formData.name || "WPC Callback Lead",
        phone: formData.phone,
        email: formData.email,
        message: `Product: ${formData.productType || 'N/A'}, Preferred Time: ${formData.preferredTime || 'Anytime'}, Message: ${formData.message || 'WPC Approval enquiry'}`
      });
      const transactionId = result.data?.id || '';
      trackLeadFormConversion(transactionId);
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParams = new URLSearchParams();
      redirectParams.set('tid', transactionId);
      redirectParams.set('service', 'wpc');
      if (urlParams.has('gclid')) redirectParams.set('gclid', urlParams.get('gclid')!);
      if (urlParams.has('utm_source')) redirectParams.set('utm_source', urlParams.get('utm_source')!);
      if (urlParams.has('utm_medium')) redirectParams.set('utm_medium', urlParams.get('utm_medium')!);
      if (urlParams.has('utm_campaign')) redirectParams.set('utm_campaign', urlParams.get('utm_campaign')!);
      window.location.href = "/thank-you?" + redirectParams.toString();
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
    <section id="callback-form" className="py-16 lg:py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                Request Callback
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Get Expert Consultation
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                Fill this form and our WPC expert will call you at your preferred time. 
                Get all your queries answered for FREE.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Quick Response</h4>
                    <p className="text-charcoal/60 text-sm">Callback within 30 minutes during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Expert Guidance</h4>
                    <p className="text-charcoal/60 text-sm">Talk to experienced WPC consultants</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">No Obligation</h4>
                    <p className="text-charcoal/60 text-sm">Free consultation with no hidden commitments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Request Received!</h3>
                  <p className="text-charcoal/60 mb-6">
                    Our expert will call you within 30 minutes during business hours.
                  </p>
                  <a 
                    href="https://wa.me/919891614601?text=Hi,%20I%20submitted%20callback%20request%20for%20WPC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Or chat on WhatsApp for instant response
                  </a>
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Product Type</label>
                      <select
                        value={formData.productType}
                        onChange={(e) => setFormData({...formData, productType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="wifi">WiFi Products</option>
                        <option value="bluetooth">Bluetooth Products</option>
                        <option value="iot">IoT Devices</option>
                        <option value="rf">RF Equipment</option>
                        <option value="other">Other Wireless</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Preferred Time</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                      >
                        <option value="">Any time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Your Query</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Briefly describe your WPC requirement..."
                      className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        Request Callback
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-terracotta via-terracotta to-terracotta/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Final Call
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Launch Your Wireless Product in India – Get WPC Approval Today!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Quick License makes the ETA process simple, fast and fully compliant. We coordinate documentation, testing and every conversation with the WPC Wing so you stay focused on your product.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">2000+</div>
              <div className="text-sm text-white/70">Approvals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">High</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">20-30</div>
              <div className="text-sm text-white/70">Days Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#callback-form"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream text-terracotta px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Start Your Approval Process Now
            </a>
            <a 
              href="tel:+919891614601"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us: +91 98916 14601
            </a>
            <a 
              href="mailto:support@quicklicense.in"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Email: support@quicklicense.in
            </a>
          </div>

          {/* Trust Message */}
          <p className="mt-8 text-white/70 text-sm">
            Trusted by 2000+ businesses across India | Professional Consultancy Service
          </p>
          <p className="mt-2 text-white/60 text-xs">
            Disclaimer: We are a private consultancy firm providing documentation assistance. We are not affiliated with any government agency.
          </p>
        </div>
      </div>
    </section>
  );
}

// Export main component with all sections
export default function WPCPageClient() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Disclaimer Banner */}
        <div className="bg-charcoal/5 border-b border-charcoal/10 py-2">
          <div className="container mx-auto px-4">
            <p className="text-xs text-charcoal/70 text-center">
              <strong>Disclaimer:</strong> Quick License is a private consultancy service. We assist with documentation and filing. We are not a government agency and are not affiliated with any government department.
            </p>
          </div>
        </div>
        
        <HeroSection />
        
        {/* Two-column layout with sticky form */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content - Left Side */}
            <div className="flex-1 lg:max-w-[calc(100%-400px)]">
              <WhatIsWPCSection />
              <WhoNeedsSection />
              <MandatoryRequirementsSection />
              <ProcessSection />
              <ProductsSection />
              <ComplianceSection />
              <DocumentsSection />
              <WhyChooseSection />
              <PricingSection />
              <CallbackFormSection />
              <FAQSection />
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
