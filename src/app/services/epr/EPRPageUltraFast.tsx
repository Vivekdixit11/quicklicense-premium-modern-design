"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { submitContactForm } from "@/lib/api";

// Inline SVG Icons - No external dependencies for faster load
const Icons = {
  Recycle: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Send: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  Loader: () => (
    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Star: () => (
    <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

// Ultra-fast form component with original gray theme
function QuickForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!form.name || !form.email || !form.phone) {
      setError('Please fill all required fields');
      return;
    }
    if (form.phone.length !== 10) {
      setError('Enter valid 10-digit phone');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const result = await submitContactForm({
        fullName: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message || 'EPR Registration enquiry'
      });
      window.location.href = `/thank-you?tid=${result.data?.id || ''}&service=epr`;
    } catch {
      setError('Enter valid 10-digit phone');
      setStatus('idle');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <p className="text-xs text-red-600 bg-red-50 p-2 rounded">{error}</p>}
      <input
        type="text"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="Your Name *"
        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none"
        required
      />
      <input
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        placeholder="Email *"
        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none"
        required
      />
      <input
        type="tel"
        value={form.phone}
        onChange={e => { const val = e.target.value.replace(/\D/g, '').slice(0, 15); setForm({ ...form, phone: val }); }}
        placeholder="Phone *"
        maxLength={15}
        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none"
        required
      />
      {!compact && (
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          placeholder="Requirements (optional)"
          rows={2}
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none resize-none"
        />
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-medium text-sm transition-colors"
      >
        {status === 'loading' ? <><Icons.Loader /> Submitting...</> : <>Get Free Consultation <Icons.Send /></>}
      </button>
      <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
        <Icons.Shield /> Your data is secure
      </p>
    </form>
  );
}

// Testimonial data with real Indian photos
const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Mumbai",
    text: "QuickLicense made our EPR registration so smooth. Professional service and quick delivery!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    text: "Excellent support throughout the process. Helped us avoid customs issues with timely EPR authorization.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Amit Patel",
    city: "Ahmedabad",
    text: "Very knowledgeable team. They handled all documentation and we got our plastic EPR without hassle.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    text: "Highly recommend for e-waste EPR. Clear communication and transparent pricing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Vikram Singh",
    city: "Bangalore",
    text: "Fast and reliable service. Got our battery EPR authorization on time for our imports.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Anjali Nair",
    city: "Kochi",
    text: "Professional approach and great follow-up. Our tyre EPR was processed smoothly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
  },
];

// FAQ data
const faqs = [
  { 
    q: "Is EPR registration mandatory in India?", 
    a: "Yes. EPR is legally required for all eligible manufacturers, importers, and brand owners dealing with plastic packaging, electronics, batteries, or tyres." 
  },
  { 
    q: "Can customs stop my shipment without EPR?", 
    a: "Yes. Non-compliance can result in shipment holds or clearance rejection at Indian customs." 
  },
  { 
    q: "Is EPR a one-time registration?", 
    a: "No. EPR involves ongoing compliance, annual targets, and regular return filings to maintain authorization." 
  },
  { 
    q: "Can QuickLicense handle complete compliance?", 
    a: "Absolutely. We manage everything—from registration to annual compliance, target management, and return filings." 
  },
  { 
    q: "What is Extended Producer Responsibility?", 
    a: "EPR is an environmental compliance system that makes producers responsible for collection, recycling, and safe disposal of waste generated by their products after use." 
  },
  { 
    q: "Who needs EPR Authorization?", 
    a: "Importers, manufacturers, and brand owners introducing regulated products (plastic, electronics, batteries, tyres) into the Indian market must obtain EPR authorization." 
  },
];

// Documents data
const documents = [
  "Company PAN & GST Certificate",
  "Import Export Code (for importers)",
  "Product details and packaging composition",
  "Sales or import data of previous years",
  "Authorized signatory details",
  "Business registration documents",
];

export default function EPRPageUltraFast() {
  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section - KEEPING ORIGINAL DESIGN */}
      <section className="pt-4 pb-8 sm:pt-8 sm:pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">

              {/* Left Content */}
              <div>
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
                  <Icons.Recycle />
                  Simple, Reliable & CPCB-Approved
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  EPR Registration Services in India – Extended Producer Responsibility Compliance
                </h1>

                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  Extended Producer Responsibility (EPR) is no longer optional for businesses dealing with plastic packaging, electronics, batteries, or tyres in India. Get CPCB-approved EPR authorization smoothly—without confusing paperwork or delays.
                </p>

                {/* Mobile Form - Show immediately */}
                <div className="sm:hidden mb-5">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Get Free Consultation</h3>
                    <QuickForm compact />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">Registrations</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">Support</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Icons.WhatsApp /> WhatsApp
                  </a>
                  <a
                    href="tel:+919891614601"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Icons.Phone /> Call Now
                  </a>
                </div>

                {/* Google Rating */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <div className="flex">{[...Array(5)].map((_, i) => <Icons.Star key={i} />)}</div>
                  <span>4.9/5 from 500+ reviews</span>
                </div>
              </div>

              {/* Right - Desktop Form */}
              <div className="hidden sm:block">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
                  <div className="mb-5">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Get Started Today</h2>
                    <p className="text-sm text-gray-600">Fill in your details and our expert will contact you within 24 hours</p>
                  </div>
                  <QuickForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EPR Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Is Extended Producer Responsibility (EPR)?</h2>
            <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Extended Producer Responsibility (EPR) is an environmental compliance system that makes producers responsible for the collection, recycling, and safe disposal of waste generated by their products after use.
              </p>
              <p className="mb-4">Under Indian regulations, businesses must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Register on the CPCB portal</li>
                <li>Declare product and packaging data</li>
                <li>Fulfil recycling targets through authorized recyclers</li>
                <li>File periodic compliance returns</li>
              </ul>
              <p className="text-sm bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <strong>⚠️ Non-compliance can lead to:</strong> customs detention, monetary penalties, cancellation of licenses, or marketplace listing blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Must Obtain EPR */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Who Must Obtain EPR Registration?</h2>
            <p className="text-center text-gray-600 mb-8">You need EPR Authorization if you are:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Importer</h3>
                <p className="text-sm text-gray-600">Bringing packaged goods, electronics, batteries, or tyres into India</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturer</h3>
                <p className="text-sm text-gray-600">Producing regulated goods domestically within India</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Owner</h3>
                <p className="text-sm text-gray-600">Selling products under your own label (offline or online)</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6 bg-gray-50 p-4 rounded-lg">
              If your business introduces regulated products into the Indian market, EPR compliance is mandatory, <strong>regardless of company size or turnover.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* EPR Categories - Horizontal Scroll on Mobile */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">EPR Categories We Handle</h2>
          
          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              <div className="w-72 flex-shrink-0 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Plastic Waste EPR</h3>
                <p className="text-sm text-gray-600 mb-4">Mandatory for businesses using plastic packaging, carry bags, wrappers, or multi-layer packaging materials.</p>
                <div className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
              </div>
              <div className="w-72 flex-shrink-0 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Waste EPR</h3>
                <p className="text-sm text-gray-600 mb-4">Applicable to electronics such as laptops, mobile phones, IT equipment, appliances, and consumer electronics.</p>
                <div className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
              </div>
              <div className="w-72 flex-shrink-0 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Waste EPR</h3>
                <p className="text-sm text-gray-600 mb-4">Required for lead-acid batteries, lithium-ion batteries, EV batteries, and industrial batteries.</p>
                <div className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
              </div>
              <div className="w-72 flex-shrink-0 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth={2} />
                    <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tyre Waste EPR</h3>
                <p className="text-sm text-gray-600 mb-4">Compulsory for manufacturers and importers of vehicle tyres across all categories.</p>
                <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plastic Waste EPR</h3>
              <p className="text-sm text-gray-600 mb-4">Mandatory for businesses using plastic packaging, carry bags, wrappers, or multi-layer packaging materials.</p>
              <div className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Waste EPR</h3>
              <p className="text-sm text-gray-600 mb-4">Applicable to electronics such as laptops, mobile phones, IT equipment, appliances, and consumer electronics.</p>
              <div className="text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Battery Waste EPR</h3>
              <p className="text-sm text-gray-600 mb-4">Required for lead-acid batteries, lithium-ion batteries, EV batteries, and industrial batteries.</p>
              <div className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tyre Waste EPR</h3>
              <p className="text-sm text-gray-600 mb-4">Compulsory for manufacturers and importers of vehicle tyres across all categories.</p>
              <div className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full inline-block">CPCB Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete EPR Solutions */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Our Complete EPR Compliance Solutions</h2>
            <p className="text-center text-gray-600 mb-8">We provide end-to-end EPR services so you don't have to deal with regulatory complexity.</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">EPR Registration & Authorization</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• CPCB portal registration</li>
                      <li>• Application drafting and submission</li>
                      <li>• Query handling and approval follow-ups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Assessment & Planning</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Accurate EPR target calculation</li>
                      <li>• Year-wise compliance planning</li>
                      <li>• Category-specific strategy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Recycling Credit Management</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tie-ups with authorized recyclers</li>
                      <li>• Credit procurement and validation</li>
                      <li>• Transparent compliance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Check />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Return Filing & Ongoing Support</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quarterly and annual return filing</li>
                      <li>• Compliance monitoring</li>
                      <li>• CPCB updates and renewal support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose QuickLicense */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose QuickLicense for EPR Registration?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert-Led Compliance</h3>
                <p className="text-sm text-gray-600">Experienced professionals who understand CPCB processes</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Fast & Transparent Process</h3>
                <p className="text-sm text-gray-600">No hidden steps, no guesswork</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
                <p className="text-sm text-gray-600">Custom EPR plans based on your product and business model</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Pan-India Validity</h3>
                <p className="text-sm text-gray-600">Authorization applicable across India</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-sm text-gray-600">One-to-one assistance throughout the compliance lifecycle</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">Long-term Partnership</h3>
                <p className="text-sm text-gray-600">We don't just file applications—we ensure your business stays compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Sample */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Sample EPR Certificate</h3>
            <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden">
              <img
                src="/AMAN-ENTERPRISES/AMAN ENTERPRISES_pages-to-jpg-0001.jpg"
                alt="Sample EPR Certificate issued by CPCB"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Issued by Central Pollution Control Board (CPCB)</p>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Documents Required for EPR Registration</h2>
            <p className="text-center text-gray-600 mb-8">To begin the EPR process, you'll typically need:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center bg-white p-4 rounded-lg border border-gray-200">
              Our team assists you in preparing and verifying all documents to avoid rejection or delays.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">EPR Registration Process – How It Works</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Free Compliance Assessment", desc: "We evaluate your business and EPR category requirements." },
                { step: 2, title: "Document Collection & Review", desc: "All documents are checked for accuracy and completeness." },
                { step: 3, title: "CPCB Portal Filing", desc: "Application submission with correct data and declarations." },
                { step: 4, title: "Government Review & Approval", desc: "Query resolution and follow-ups until approval." },
                { step: 5, title: "Post-Approval Compliance", desc: "Target management, credit procurement, and return filing." }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scroll */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Client Testimonials</h2>
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-80 flex-shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={t.image}
                      alt={`${t.name} from ${t.city}`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.city}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">{[...Array(5)].map((_, i) => <Icons.Star key={i} />)}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <span className={`transform transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <Icons.ChevronDown />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Your EPR Authorization Without Delays</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Avoid penalties, shipment issues, and compliance stress. Let QuickLicense handle your EPR Registration and ongoing obligations while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Icons.WhatsApp /> WhatsApp: +91 98916 14601
            </a>
            <a
              href="tel:+919891614601"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Icons.Phone /> Call Now
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            📧 Email: <a href="mailto:contact@quicklicense.in" className="underline hover:text-white">contact@quicklicense.in</a>
          </p>
        </div>
      </section>

      {/* Mobile Fixed CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t shadow-lg z-50">
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium text-sm"
        >
          Get Free EPR Consultation
        </button>
      </div>

      {/* Mobile Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] sm:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowForm(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Get Free Consultation</h3>
              <button onClick={() => setShowForm(false)} className="p-1 text-gray-500">
                <Icons.ChevronDown />
              </button>
            </div>
            <QuickForm />
          </div>
        </div>
      )}

      {/* Spacing for mobile fixed CTA */}
      <div className="h-16 sm:hidden" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
