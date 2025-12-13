"use client";

import { useState } from "react";
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
  Star
} from "lucide-react";

// Hero Section (cream theme, modern design)
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-cream via-cream to-terracotta/5 overflow-hidden pt-20 lg:pt-24">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-terracotta/10 backdrop-blur-sm px-4 py-2 rounded-full border border-terracotta/20">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-charcoal"> Expert LMPC Consultant</span>
            </div>

            {/* Title */}
            <h1 className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-charcoal">
              LMPC Licensing Consultancy
            </h1>
            <p className="text-lg lg:text-xl text-terracotta font-medium">Made Simple & Fast</p>

            {/* Description */}
            <p className="text-base text-charcoal/80 leading-relaxed max-w-2xl">
              LMPC Compliance & Document Preparation for Legal Metrology Packaged Commodities.
              <span className="text-terracotta font-semibold"> Expert Assistance for Application Filing</span>. Mandatory for importers,
              manufacturers & packers of pre-packaged goods in India.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              {[
                "Central & State LMPC handled end-to-end",
                "Label compliance guidance (Rule 6)",
                "Proven Track Record with authorities",
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
              <p className="text-lg font-semibold text-charcoal">5000+ Registrations • High Success Rate</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <IndianRupee className="w-5 h-5" />
                Get Consultation
              </a>
              <a
                href="https://wa.me/919891614601?text=Hi,%20I%20need%20help%20with%20LMPC%20Registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
              <a
                href="tel:+919891614601"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
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
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await submitContactForm({ fullName: formData.name || "LMPC Lead", phone: formData.phone, email: formData.email, message: formData.message || "LMPC enquiry" });
      // Track conversion for Google Ads
      const transactionId = result.data?.id || '';
      trackLeadFormConversion(transactionId);
      // Redirect to thank you page with transaction ID and preserve URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParams = new URLSearchParams();
      redirectParams.set('tid', transactionId);
      redirectParams.set('service', 'lmpc');
      // Preserve Google Ads parameters
      if (urlParams.has('gclid')) redirectParams.set('gclid', urlParams.get('gclid')!);
      if (urlParams.has('utm_source')) redirectParams.set('utm_source', urlParams.get('utm_source')!);
      if (urlParams.has('utm_medium')) redirectParams.set('utm_medium', urlParams.get('utm_medium')!);
      if (urlParams.has('utm_campaign')) redirectParams.set('utm_campaign', urlParams.get('utm_campaign')!);
      window.location.href = `/thank-you?${redirectParams.toString()}`;
    } catch (err) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : "Failed to submit form";
      setError(errorMessage);
      // Auto-clear error after 8 seconds
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
            <button
              onClick={() => setError(null)}
              className="mt-2 text-xs underline hover:no-underline"
              type="button"
            >
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
          placeholder="Tell us about your product or import"
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

// What is LMPC Section
function WhatIsLMPCSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
        <BookOpen className="w-4 h-4" />
        Understanding LMPC
      </div>
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
        What is LMPC Registration?
      </h2>
      <div className="space-y-4 text-charcoal/70 text-lg">
        <p>
          <strong className="text-charcoal">LMPC</strong> stands for <strong className="text-terracotta">Legal Metrology Packaged Commodities</strong>. 
          It is a mandatory registration under <strong>Rule 27</strong> of the Legal Metrology (Packaged Commodities) Rules, 2011.
        </p>
        <p>
          Any business entity that imports, manufactures, packs, or sells pre-packaged commodities in India 
          must obtain LMPC registration. This ensures consumer protection by mandating accurate labeling 
          of quantity, weight, price, and manufacturer details.
        </p>
        <p>
          The registration is required under the Legal Metrology (Packaged Commodities) Rules, 2011 
          for compliance with packaging and labeling standards in India.
        </p>
      </div>

      {/* Key Points */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Scale className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Legal Compliance</h4>
            <p className="text-sm text-charcoal/60">Mandatory under Legal Metrology Act</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
          <Shield className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-charcoal">Consumer Protection</h4>
            <p className="text-sm text-charcoal/60">Ensures fair trade practices</p>
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

// Personal Import Section (ID: personal-import)
function PersonalImportSection() {
  return (
    <section id="personal-import" className="py-12 lg:py-16 scroll-mt-20">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Truck className="w-4 h-4" />
          Import Guidelines
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
          Personal Import vs Commercial Import
        </h2>
        <p className="text-lg text-charcoal/70">
          Understanding when LMPC is required for your imports
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Import */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Personal Import</h3>
            <p className="text-charcoal/70 mb-6">
              When you import goods for personal use only (not for resale), LMPC registration 
              is <strong className="text-green-600">NOT mandatory</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Gifts received from abroad</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Personal belongings during relocation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Items for personal consumption</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Samples for testing (with declaration)</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-green-100/50 rounded-xl">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Personal imports may still require a declaration at customs 
                stating goods are for personal use only.
              </p>
            </div>
          </div>

          {/* Commercial Import */}
          <div className="bg-terracotta/5 border-2 border-terracotta/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-terracotta" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Commercial Import</h3>
            <p className="text-charcoal/70 mb-6">
              When importing goods for resale, distribution, or commercial purposes, LMPC 
              is <strong className="text-terracotta">MANDATORY</strong>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Products for retail sale</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Goods for wholesale distribution</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">E-commerce products</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/70">Items for commercial use</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-terracotta/10 rounded-xl">
              <p className="text-sm text-terracotta">
                <strong>Important:</strong> Without LMPC, goods will be held at customs. 
                Detention charges can exceed ₹2,00,000!
              </p>
            </div>
          </div>
        </div>

        {/* 90 Days Clause */}
        <div className="mt-8 col-span-full">
          <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Timer className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cream mb-2">The 90 Days Clause</h3>
                <p className="text-cream/80 mb-4 text-sm">
                  As per Rule 5 of Legal Metrology (Packaged Commodities) Rules, 2011, pre-packaged 
                  commodities imported into India must comply with Indian labeling requirements 
                  <strong className="text-gold"> within 90 days</strong> of arrival at the port.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gold mb-1">90</div>
                    <div className="text-xs text-cream/70">Days Grace</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gold mb-1">₹25K</div>
                    <div className="text-xs text-cream/70">Penalty</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-gold mb-1">High</div>
                    <div className="text-xs text-cream/70">Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

// Who Needs LMPC Section
function WhoNeedsSection() {
  const categories = [
    {
      icon: Globe,
      title: "Importers",
      description: "Businesses importing pre-packaged goods from foreign countries for sale in India",
      registration: "Central LMPC",
      validity: "Lifetime",
      color: "terracotta"
    },
    {
      icon: Factory,
      title: "Manufacturers",
      description: "Companies manufacturing pre-packaged products within India",
      registration: "State LMPC",
      validity: "1-5 Years",
      color: "gold"
    },
    {
      icon: Package,
      title: "Packers",
      description: "Entities that pack commodities for retail sale in standard quantities",
      registration: "State LMPC",
      validity: "1-5 Years",
      color: "charcoal"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Sellers",
      description: "Online sellers listing pre-packaged products on e-commerce platforms",
      registration: "Central/State",
      validity: "Varies",
      color: "terracotta"
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="mb-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">Who Needs LMPC Registration?</h2>
        <p className="text-lg text-charcoal/70">LMPC is mandatory for these business categories dealing with pre-packaged commodities</p>
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

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-terracotta p-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3"><Globe className="w-7 h-7" />Central LMPC</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">For <strong>Importers</strong> bringing goods from outside India</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Issued by <strong>Central Controller</strong> of Legal Metrology</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70"><strong>Lifetime validity</strong> (unless business details change)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Valid across <strong>all Indian states</strong></span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-terracotta" /><span className="text-charcoal/70">Processing time: <strong>10-20 working days</strong></span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-charcoal p-6">
            <h3 className="text-2xl font-bold text-cream flex items-center gap-3"><Building2 className="w-7 h-7" />State LMPC</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-charcoal" /><span className="text-charcoal/70">For <strong>Manufacturers & Packers</strong> within India</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-charcoal" /><span className="text-charcoal/70">Issued by <strong>State Controller</strong> of Legal Metrology</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-charcoal" /><span className="text-charcoal/70">Validity: <strong>1-5 years</strong> (varies by state)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-charcoal" /><span className="text-charcoal/70">Valid in <strong>issuing state only</strong></span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-charcoal" /><span className="text-charcoal/70">Processing time: <strong>7-30 working days</strong></span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section (ID: pricing)
function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IndianRupee className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            LMPC Registration Fees
          </h2>
          <p className="text-lg text-charcoal/70">
            Government fees are fixed. Professional charges are negotiable based on your requirements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-cream rounded-2xl p-8 lg:p-10 shadow-lg border border-charcoal/5">
            {/* Registration Fee */}
            <div className="mb-8 pb-8 border-b border-charcoal/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-charcoal">Official Registration Fee</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-terracotta">₹500</div>
                  <p className="text-sm text-charcoal/60">Statutory Fee</p>
                </div>
              </div>
              <p className="text-charcoal/70 text-sm">
                This is the prescribed registration fee for LMPC certification, applicable for both Central and State registrations.
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
                number of products, urgency, and additional services needed. We believe in fair pricing 
                and are always open to negotiations.
              </p>

              {/* Included Services */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-charcoal mb-4">What's Included:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Document preparation & verification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Application filing & submission</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Label compliance guidance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Follow-up with authorities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Certificate delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">Post-registration support</span>
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
                href="https://wa.me/919891614601?text=Hi,%20I%20need%20LMPC%20registration.%20Please%20share%20your%20best%20quote."
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

// Documents List Section (ID: documents-list)
function DocumentsSection() {
  const importerDocs = [
    { name: "Import Export Code (IEC)", mandatory: true },
    { name: "GST Registration Certificate", mandatory: true },
    { name: "Company PAN Card", mandatory: true },
    { name: "Business Registration Certificate", mandatory: true },
    { name: "Product Catalog/Brochure", mandatory: true },
    { name: "Sample Labels (for all products)", mandatory: true },
    { name: "Authorization Letter (if applicable)", mandatory: false },
    { name: "Proforma Invoice from Supplier", mandatory: false }
  ];

  const manufacturerDocs = [
    { name: "Factory License/Registration", mandatory: true },
    { name: "GST Registration Certificate", mandatory: true },
    { name: "Company PAN Card", mandatory: true },
    { name: "Udyam Registration (MSME)", mandatory: false },
    { name: "Product Specifications", mandatory: true },
    { name: "Sample Labels", mandatory: true },
    { name: "Address Proof of Factory", mandatory: true },
    { name: "ID Proof of Designated Signatory", mandatory: true }
  ];

  return (
    <section id="documents-list" className="py-16 lg:py-24 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Document Checklist
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Documents Required for LMPC
          </h2>
          <p className="text-lg text-charcoal/70">
            Keep these documents ready for quick and hassle-free registration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Importer Documents */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-terracotta p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Globe className="w-6 h-6" />
                For Importers (Central LMPC)
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {importerDocs.map((doc, index) => (
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

          {/* Manufacturer Documents */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-charcoal p-6">
              <h3 className="text-xl font-bold text-cream flex items-center gap-3">
                <Factory className="w-6 h-6" />
                For Manufacturers (State LMPC)
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {manufacturerDocs.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b border-charcoal/10 last:border-0">
                    <span className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-charcoal" />
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
        </div>

        {/* Label Requirements */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl p-8 border border-gold/30">
            <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <ClipboardList className="w-7 h-7 text-gold" />
              Mandatory Label Declarations (Rule 6)
            </h3>
            <p className="text-charcoal/70 mb-6">
              Every pre-packaged commodity must display the following information on the label:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Name & Address of Manufacturer/Importer/Packer",
                "Country of Origin (for imports)",
                "Common/Generic Name of Product",
                "Net Quantity in Standard Units",
                "Month & Year of Manufacture/Packing",
                "Maximum Retail Price (MRP) inclusive of all taxes",
                "Consumer Care Details",
                "Best Before/Use By Date (if applicable)"
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

// Process Steps Section
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Share your business details & product information. Our expert analyzes your requirements and suggests the right registration type.",
      icon: Phone,
      duration: "15 mins"
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Submit required documents through our secure portal. We verify and prepare all paperwork for submission.",
      icon: FileText,
      duration: "1-2 days"
    },
    {
      step: "03",
      title: "Application Filing",
      description: "We file your LMPC application with the Legal Metrology authorities along with prescribed fees.",
      icon: ClipboardList,
      duration: "1 day"
    },
    {
      step: "04",
      title: "Label Verification",
      description: "Authorities verify your product labels for compliance with Legal Metrology rules. We assist with any modifications.",
      icon: CheckCircle2,
      duration: "3-7 days"
    },
    {
      step: "05",
      title: "Certificate Issuance",
      description: "Upon approval, LMPC certificate is issued. We deliver the digital copy immediately and physical copy within 7 days.",
      icon: Award,
      duration: "5-10 days"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Simple 5-Step Process
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            How LMPC Registration Works
          </h2>
          <p className="text-lg text-charcoal/70">
            Our streamlined process ensures you get your LMPC certificate without any hassle
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
              <div className="flex-1 bg-cream rounded-2xl p-6 shadow-sm">
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
                <p className="text-3xl font-bold text-cream">10-20 Days</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden md:block" />
              <div>
                <p className="text-cream/60 text-sm">Express Processing</p>
                <p className="text-3xl font-bold text-gold">2-7 Days</p>
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

// Penalties & Exemptions Section
function PenaltiesSection() {
  const penalties = [
    { violation: "Non-registration under Rule 27", penalty: "Up to ₹25,000", severity: "high" },
    { violation: "Incorrect declaration on label", penalty: "Up to ₹10,000", severity: "medium" },
    { violation: "MRP overcharging", penalty: "Up to ₹1,00,000", severity: "high" },
    { violation: "Short weight/measure", penalty: "Up to ₹50,000", severity: "high" },
    { violation: "Missing mandatory declarations", penalty: "Up to ₹10,000", severity: "medium" },
    { violation: "Repeat offense (any violation)", penalty: "Double penalty + Jail", severity: "critical" }
  ];

  const exemptions = [
    "Packages for industrial/institutional consumers (not retail)",
    "Packages exported out of India",
    "Bulk packages sold by number (e.g., fruits, vegetables)",
    "Fast food items sold for immediate consumption",
    "Packages containing more than 25 kg/25 liters",
    "Packages with net quantity less than 5 grams/5 ml"
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Penalties */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Know the Risks
            </div>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
              Penalties for Non-Compliance
            </h2>
            <p className="text-charcoal/70 mb-8">
              Under the Jan Vishwas (Amendment of Provisions) Act, 2023, penalties have been updated. 
              Don't risk your business - get registered now!
            </p>

            <div className="space-y-4">
              {penalties.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.severity === 'critical' ? 'bg-purple-600' :
                      item.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                    <span className="text-charcoal/80">{item.violation}</span>
                  </div>
                  <span className={`font-bold ${
                    item.severity === 'critical' ? 'text-purple-600' :
                    item.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {item.penalty}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 text-sm">
                <strong>⚠️ Port Detention Warning:</strong> Goods held at customs due to missing LMPC 
                can incur detention charges exceeding <strong>₹2,00,000</strong>. Apply before importing!
              </p>
            </div>
          </div>

          {/* Exemptions */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Exempted Categories
            </div>
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4">
              LMPC Exemptions
            </h2>
            <p className="text-charcoal/70 mb-8">
              Certain categories of packages are exempted from LMPC registration requirements. 
              Check if your products qualify.
            </p>

            <div className="space-y-4">
              {exemptions.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 text-sm">
                <strong>💡 Not sure if you're exempt?</strong> Contact our experts for a free 
                assessment of your products and business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Refund Policy Section (ID: refund-policy)
function RefundPolicySection() {
  return (
    <section id="refund-policy" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
              <RefreshCcw className="w-4 h-4" />
              Our Commitment
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Transparent Refund Policy
            </h2>
            <p className="text-lg text-charcoal/70">
              Your trust matters to us. We offer a clear and fair refund policy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full Refund Cases */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Full Refund</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Application not filed within 7 days of document submission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Service cancelled before application filing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Duplicate payment made by mistake</span>
                </li>
              </ul>
            </div>

            {/* Partial Refund Cases */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <RefreshCcw className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Partial Refund (50%)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <RefreshCcw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Cancellation after application filing but before approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCcw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Client unable to provide required documents within 30 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCcw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/70">Change in business decision after process initiation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* No Refund Cases */}
          <div className="mt-8 bg-charcoal/5 border-2 border-charcoal/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-charcoal" />
              No Refund Applicable
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-charcoal/70">
                  <span className="text-charcoal">•</span>
                  Official registration fees once submitted
                </li>
                <li className="flex items-start gap-2 text-charcoal/70">
                  <span className="text-charcoal">•</span>
                  Application rejected due to ineligibility (informed beforehand)
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-charcoal/70">
                  <span className="text-charcoal">•</span>
                  Service completed and certificate issued
                </li>
                <li className="flex items-start gap-2 text-charcoal/70">
                  <span className="text-charcoal">•</span>
                  False information provided by client
                </li>
              </ul>
            </div>
          </div>

          {/* Refund Process */}
          <div className="mt-8 text-center">
            <p className="text-charcoal/60 mb-4">
              Refunds are processed within <strong className="text-charcoal">5-7 working days</strong> to the original payment method.
            </p>
            <a 
              href="#callback-form"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta/80 font-semibold"
            >
              Have questions about refunds? Contact us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// WhatsApp Section removed - using button from layout

// Callback Form Section (ID: callback-form)
function CallbackFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    productCategory: "",
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
        fullName: formData.name || "LMPC Callback Lead",
        phone: formData.phone,
        email: formData.email,
        message: `Business: ${formData.businessType || 'N/A'}, Products: ${formData.productCategory || 'N/A'}, Preferred Time: ${formData.preferredTime || 'Anytime'}, Message: ${formData.message || 'LMPC Registration enquiry'}`
      });
      // Track conversion for Google Ads
      const transactionId = result.data?.id || '';
      trackLeadFormConversion(transactionId);
      // Redirect to thank you page with transaction ID and preserve URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const redirectParams = new URLSearchParams();
      redirectParams.set('tid', transactionId);
      redirectParams.set('service', 'lmpc');
      // Preserve Google Ads parameters
      if (urlParams.has('gclid')) redirectParams.set('gclid', urlParams.get('gclid')!);
      if (urlParams.has('utm_source')) redirectParams.set('utm_source', urlParams.get('utm_source')!);
      if (urlParams.has('utm_medium')) redirectParams.set('utm_medium', urlParams.get('utm_medium')!);
      if (urlParams.has('utm_campaign')) redirectParams.set('utm_campaign', urlParams.get('utm_campaign')!);
      window.location.href = `/thank-you?${redirectParams.toString()}`;
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
                Fill this form and our LMPC expert will call you at your preferred time. 
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
                    <p className="text-charcoal/60 text-sm">Talk to experienced Legal Metrology consultants</p>
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
                    href="#whatsapp-chat"
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
                      <label className="block text-sm font-medium text-charcoal mb-2">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="importer">Importer</option>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="packer">Packer</option>
                        <option value="ecommerce">E-Commerce Seller</option>
                        <option value="other">Other</option>
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
                      placeholder="Briefly describe your LMPC requirement..."
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

// Export the main component
export default function LMPCPageClient() {
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
              <WhatIsLMPCSection />
              <PersonalImportSection />
              <WhoNeedsSection />
              <PricingSection />
              <DocumentsSection />
              <ProcessSection />
              <PenaltiesSection />
              <RefundPolicySection />
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
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is LMPC Registration and why is it mandatory?",
      answer: "LMPC (Legal Metrology Packaged Commodities) Registration is a mandatory certification under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011. It's required for any entity that imports, manufactures, packs, or sells pre-packaged commodities in India. The registration ensures consumer protection by mandating accurate labeling of quantity, weight, price, and manufacturer details. Without LMPC, businesses cannot legally sell packaged goods in India, and imported goods will be held at customs."
    },
    {
      question: "Who needs to obtain LMPC Registration?",
      answer: "LMPC Registration is mandatory for: 1) Importers bringing pre-packaged goods into India for commercial sale, 2) Manufacturers producing pre-packaged products domestically, 3) Packers who pack commodities in standard quantities for retail sale, 4) E-commerce sellers listing pre-packaged products on online platforms, 5) Distributors and wholesalers dealing with packaged goods. If your business falls into any of these categories, you must obtain LMPC registration before commencing operations."
    },
    {
      question: "What is the difference between Central LMPC and State LMPC?",
      answer: "Central LMPC is issued by the Central Controller of Legal Metrology for importers bringing goods from outside India. It has lifetime validity and is valid across all Indian states. State LMPC is issued by respective State Controllers for manufacturers and packers operating within India. The validity varies from 1-5 years depending on the state, and it's primarily valid in the issuing state. Importers need Central LMPC, while domestic manufacturers need State LMPC from the state where their factory is located."
    },
    {
      question: "How long does LMPC Registration take?",
      answer: "The processing time varies based on registration type: Central LMPC (for importers) typically takes 10-20 working days for standard processing and 2-7 days for express/fast-track processing. State LMPC (for manufacturers) takes 7-30 working days depending on the state and document completeness. At Quick License, we offer express processing services that can significantly reduce these timelines. Complete documentation and accurate label designs help expedite the process."
    },
    {
      question: "What documents are required for LMPC Registration?",
      answer: "For Importers (Central LMPC): IEC (Import Export Code), GST Registration, Company PAN Card, Business Registration Certificate, Product Catalog/Brochure, Sample Labels, Authorization Letter (if applicable), and Proforma Invoice. For Manufacturers (State LMPC): Factory License/Registration, GST Registration, Company PAN Card, Udyam Registration (optional), Product Specifications, Sample Labels, Address Proof of Factory, and ID Proof of Designated Signatory. All documents should be clear, current, and in PDF/JPG format."
    },
    {
      question: "What are the mandatory label declarations under Rule 6?",
      answer: "Every pre-packaged commodity must display: 1) Name & Complete Address of Manufacturer/Importer/Packer, 2) Country of Origin (mandatory for imports), 3) Common/Generic Name of the Product, 4) Net Quantity in Standard Units of Weight/Measure/Number, 5) Month & Year of Manufacture or Packing, 6) Maximum Retail Price (MRP) inclusive of all taxes, 7) Consumer Care Details (phone/email/address), 8) Best Before/Use By Date (for perishable goods). All declarations must be in Hindi and English, clearly visible and indelible."
    },
    {
      question: "What is the 90 Days Clause for imported goods?",
      answer: "As per Rule 5 of Legal Metrology (Packaged Commodities) Rules, 2011, pre-packaged commodities imported into India are given a grace period of 90 days from the date of arrival at the Indian port to comply with all Indian labeling requirements. During this period, importers can affix sticker labels with mandatory declarations. After 90 days, products must have permanent printed labels meeting all Legal Metrology requirements. It's advisable to get labels prepared before import to avoid delays."
    },
    {
      question: "What are the penalties for not having LMPC Registration?",
      answer: "Non-compliance with LMPC requirements can result in severe penalties under the Jan Vishwas (Amendment of Provisions) Act, 2023: Non-registration under Rule 27 attracts a fine of up to ₹25,000. Incorrect or missing label declarations can result in fines up to ₹10,000. MRP overcharging can lead to penalties up to ₹1,00,000. Short weight/measure violations attract fines up to ₹50,000. Repeat offenses can result in double penalties and even imprisonment. Additionally, goods without LMPC at ports can incur detention charges exceeding ₹2,00,000."
    },
    {
      question: "What products are exempted from LMPC Registration?",
      answer: "Certain categories are exempt from LMPC requirements: 1) Packages meant for industrial or institutional consumers (not retail sale), 2) Packages exported out of India, 3) Bulk packages containing more than 25 kg or 25 liters, 4) Packages with net quantity less than 5 grams or 5 ml, 5) Fast food items sold for immediate consumption, 6) Fruits, vegetables, and similar items sold by number, 7) Products sold in loose form without packaging. However, if you're unsure about exemption eligibility, consult our experts for a free assessment."
    },
    {
      question: "Can I sell on Amazon/Flipkart without LMPC?",
      answer: "No, you cannot legally sell pre-packaged products on e-commerce platforms like Amazon, Flipkart, or Meesho without proper LMPC Registration. These platforms have strict compliance requirements and may delist products or suspend seller accounts for non-compliance with Legal Metrology rules. All product images and listings must show labels with mandatory declarations including MRP, manufacturer details, net quantity, and country of origin. We recommend obtaining LMPC before listing products online."
    },
    {
      question: "Is LMPC required for products sold only in one state?",
      answer: "Yes, LMPC is required even if you sell only in one state. For manufacturers operating within India, you need State LMPC from the state where your manufacturing facility is located. The registration ensures your products comply with Legal Metrology rules, which apply uniformly across India. Whether you sell locally or nationally, proper labeling and registration are mandatory legal requirements."
    },
    {
      question: "How much does LMPC Registration cost?",
      answer: "The cost of LMPC Registration includes official registration fees and professional charges. For Central LMPC (Importers): Registration fee is ₹500, and professional charges start from ₹4,999 (total ₹5,499+). For State LMPC (Manufacturers): Registration fee varies by state, and professional charges start from ₹3,999 (total ₹4,499+). Express/Fast-track processing is available at ₹10,499+ with 2-7 days delivery. GST is applicable on professional charges. We offer transparent pricing with no hidden costs."
    },
    {
      question: "What is the validity period of LMPC Certificate?",
      answer: "Central LMPC (for importers) has lifetime validity as long as your business details remain unchanged. If there are changes to company name, address, or designated signatory, you need to apply for amendments. State LMPC (for manufacturers) has varying validity periods depending on the state – typically 1-5 years. You'll need to renew before expiry to continue operations legally. We provide renewal reminders to ensure you never miss the deadline."
    },
    {
      question: "Can I apply for LMPC before starting my business?",
      answer: "Yes, you can and should apply for LMPC before commencing commercial operations. For importers, it's essential to obtain LMPC before your goods arrive at Indian ports to avoid detention. For manufacturers, you can apply once your factory setup is complete and you have all required documents. We recommend starting the LMPC process at least 3-4 weeks before your planned launch date to account for any processing delays."
    },
    {
      question: "Do I need separate LMPC for each product?",
      answer: "No, you don't need separate LMPC registration for each product. One LMPC certificate covers your business entity for all products you import, manufacture, or pack. However, you must ensure each product has proper labels with mandatory declarations specific to that product. The LMPC certificate number remains the same across all your products. If you add new product categories later, no separate registration is needed – just ensure proper labeling."
    },
    {
      question: "What happens if my LMPC application is rejected?",
      answer: "LMPC applications are rarely rejected if submitted with complete and accurate documentation. Common reasons for rejection include: incomplete documents, non-compliant label designs, incorrect business details, or mismatch in information. If rejected, the authorities typically provide reasons and opportunity to rectify issues. At Quick License, we pre-verify all documents and labels before submission to minimize rejections. If any issues arise, we handle rectifications at no additional cost."
    },
    {
      question: "Can Quick License help with label design and compliance?",
      answer: "Yes, we provide comprehensive label compliance services including: Review of existing labels for Legal Metrology compliance, Guidance on mandatory declarations and format, Sample label templates for your product category, Pre-submission label verification to avoid rejections, Amendments and corrections if required by authorities, and Ongoing compliance support for new products. Our experts ensure your labels meet all Rule 6 requirements before submission, minimizing delays and rejections."
    },
    {
      question: "How do I track my LMPC application status?",
      answer: "When you apply through Quick License, you get: Dedicated case manager with direct contact, Real-time status updates via WhatsApp, Email notifications at each stage, Online tracking portal access, and Proactive communication about any requirements. We keep you informed throughout the process from document submission to certificate delivery. You can also reach our support team 24/7 via WhatsApp for instant updates on your application status."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Everything You Need to Know About LMPC
          </h2>
          <p className="text-lg text-charcoal/70">
            Get answers to the most common questions about LMPC Registration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
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
                href="#whatsapp-chat"
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
            Start Today
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Your LMPC Certificate?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let compliance issues hold back your business. Get your LMPC registration 
            done by experienced professionals.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-white/70">Registrations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">High</div>
              <div className="text-sm text-white/70">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">7-15</div>
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
              Get Free Consultation
            </a>
            <a 
              href="https://wa.me/919891614601?text=Hi,%20I%20need%20LMPC%20registration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <IndianRupee className="w-5 h-5" />
              Get Consultation
            </a>
          </div>

          {/* Trust Message */}
          <p className="mt-8 text-white/70 text-sm">
            Trusted by 5000+ businesses across India | Professional Consultancy Service
          </p>
          <p className="mt-2 text-white/60 text-xs">
            Disclaimer: We are a private consultancy firm providing documentation assistance. We are not affiliated with any government agency.
          </p>
        </div>
      </div>
    </section>
  );
}

