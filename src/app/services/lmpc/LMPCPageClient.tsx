"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { submitContactForm } from "@/lib/api";
import { Phone, MessageCircle, CheckCircle2, Shield, ChevronDown, Send, RefreshCcw, MapPin, Star, Globe, Users, Headphones, BadgeCheck, FileText, AlertTriangle, Clock } from "lucide-react";

// Compact Form
function QuickForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!form.name || !form.email || !form.phone) { setError('Please fill all fields'); return; }
    if (form.phone.length !== 10) { setError('Enter valid 10-digit phone'); return; }
    setStatus('loading');
    setError('');
    try {
      const result = await submitContactForm({ fullName: form.name, email: form.email, phone: form.phone, message: 'LMPC Registration enquiry' });
      window.location.href = `/thank-you?tid=${result.data?.id || ''}&service=lmpc`;
    } catch { setError('Enter valid 10-digit phone'); setStatus('idle'); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <p className="text-xs text-red-600 bg-red-50 p-2 rounded">{error}</p>}
      <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="w-full px-3 py-2.5 text-sm border border-charcoal/20 rounded-lg focus:border-terracotta outline-none" required />
      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email *" className="w-full px-3 py-2.5 text-sm border border-charcoal/20 rounded-lg focus:border-terracotta outline-none" required />
      <input type="tel" value={form.phone} onChange={e => { const val = e.target.value.replace(/\D/g, '').slice(0, 15); setForm({ ...form, phone: val }); }} placeholder="Phone *" maxLength={15} className="w-full px-3 py-2.5 text-sm border border-charcoal/20 rounded-lg focus:border-terracotta outline-none" required />
      <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white py-3 rounded-lg font-medium text-sm">
        {status === 'loading' ? <><RefreshCcw className="w-4 h-4 animate-spin" /> Submitting...</> : <>Get Consultation <Send className="w-4 h-4" /></>}
      </button>
      <p className="text-[10px] text-charcoal/50 text-center flex items-center justify-center gap-1"><Shield className="w-3 h-3" /> Your data is secure</p>
    </form>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-4 pb-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-xs font-medium mb-3"><Shield className="w-3 h-3" />LMPC Expert</div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-2 leading-tight">LMPC Registration for Importers & Manufacturers</h1>
            <p className="text-charcoal/70 text-sm mb-4">Legal Metrology registration for pre-packaged goods. Avoid customs detention.</p>
            <div className="lg:hidden mb-4"><div className="bg-white border border-charcoal/10 rounded-xl p-4 shadow-sm"><h3 className="font-semibold text-charcoal mb-3 text-sm">Get Free Consultation</h3><QuickForm /></div></div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 bg-cream rounded-lg"><div className="text-lg font-bold text-terracotta">5000+</div><div className="text-[10px] text-charcoal/60">Clients</div></div>
              <div className="text-center p-2 bg-cream rounded-lg"><div className="text-lg font-bold text-terracotta">99%</div><div className="text-[10px] text-charcoal/60">Success</div></div>
              <div className="text-center p-2 bg-cream rounded-lg"><div className="text-lg font-bold text-terracotta">24/7</div><div className="text-[10px] text-charcoal/60">Support</div></div>
            </div>
            <div className="flex gap-2">
              <a href="https://wa.me/919891614601?text=LMPC%20registration" className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium"><MessageCircle className="w-4 h-4" />WhatsApp</a>
              <a href="tel:+919891614601" className="flex-1 inline-flex items-center justify-center gap-2 bg-charcoal text-white px-3 py-2 rounded-lg text-sm font-medium"><Phone className="w-4 h-4" />Call</a>
            </div>
          </div>
          <div className="hidden lg:block"><div className="bg-white border-2 border-charcoal/10 rounded-xl p-5 shadow-sm"><div className="mb-3"><h2 className="text-lg font-semibold text-charcoal">Get Free Consultation</h2><p className="text-xs text-charcoal/60">Expert calls within 30 mins</p></div><QuickForm /></div></div>
        </div>
      </div>
    </section>
  );
}

// Certificate
function CertificateSection() {
  return (
    <section className="py-5 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-xs mx-auto">
          <h3 className="text-sm font-semibold text-center text-charcoal mb-2">Sample LMPC Certificate</h3>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden"><Image src="/MOULD-WELL-COMPOUND-INDUSTRIES/MOULD WELL COMPOUND INDUSTRIES_pages-to-jpg-0001.jpg" alt="LMPC Certificate" width={400} height={500} className="w-full h-auto" priority /></div>
        </div>
      </div>
    </section>
  );
}

// Why Professional Needed Section
// function WhyProfessionalSection() {
//   return (
//     <section className="py-8 bg-gradient-to-br from-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
//           <div className="relative">
//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-white relative overflow-hidden">
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute w-40 h-40 bg-white rounded-full -top-10 -left-10 animate-pulse" />
//                 <div className="absolute w-32 h-32 bg-white rounded-full -bottom-8 -right-8 animate-pulse" style={{ animationDelay: '1s' }} />
//               </div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
//                   <FileText className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">Quick License</h3>
//                 <p className="text-white/80 text-sm mb-4">Your trusted partner for all compliance needs</p>
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-xs font-bold">{i}</div>)}
//                   </div>
//                   <span className="text-sm">5000+ Happy Clients</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-charcoal mb-4">Why <span className="text-blue-600">Professional Help</span> is Needed?</h2>
//             <p className="text-charcoal/70 text-sm mb-6">LMPC registration involves complex documentation and compliance requirements. Professional assistance ensures:</p>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-charcoal/5">
//                 <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
//                 <div><h4 className="font-semibold text-charcoal text-sm">Avoid Rejection</h4><p className="text-xs text-charcoal/60">Incorrect documentation leads to delays & rejections</p></div>
//               </div>
//               <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-charcoal/5">
//                 <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
//                 <div><h4 className="font-semibold text-charcoal text-sm">100% Compliance</h4><p className="text-xs text-charcoal/60">Expert knowledge of Label Declarations & Rules</p></div>
//               </div>
//               <div className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-charcoal/5">
//                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"><Clock className="w-5 h-5 text-blue-600" /></div>
//                 <div><h4 className="font-semibold text-charcoal text-sm">Fast Processing</h4><p className="text-xs text-charcoal/60">Express service in 2-7 days</p></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Why Quick License
function WhyQuickLicenseSection() {
  const features = [
    { icon: Globe, title: "Complete Solutions", desc: "End-to-end registration" },
    { icon: MapPin, title: "PAN India", desc: "All states covered" },
    { icon: Users, title: "Free Guidance", desc: "Expert consultation" },
    { icon: BadgeCheck, title: "Google Verified", desc: "Trusted team" },
    { icon: Headphones, title: "24/7 Support", desc: "Always available" },
    { icon: Shield, title: "Refund Policy", desc: "Money-back assurance" }
  ];
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6"><h2 className="text-xl font-bold text-charcoal">Why <span className="text-terracotta">Quick License</span>?</h2><p className="text-charcoal/60 text-sm mt-1">Simplifying registrations & compliances for your business</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-cream rounded-xl border border-charcoal/5">
                <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0"><f.icon className="w-5 h-5 text-terracotta" /></div>
                <div><h3 className="font-semibold text-charcoal text-sm">{f.title}</h3><p className="text-xs text-charcoal/60">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Who Needs
function WhoNeedsSection() {
  return (
    <section className="py-6 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold text-charcoal mb-4 text-center">Who Needs LMPC?</h2>
        <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-3 text-center shadow-sm"><div className="text-xl mb-1">🌍</div><h3 className="font-semibold text-charcoal text-xs">Importers</h3><p className="text-[10px] text-charcoal/60">Lifetime validity</p></div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm"><div className="text-xl mb-1">🏭</div><h3 className="font-semibold text-charcoal text-xs">Manufacturers</h3><p className="text-[10px] text-charcoal/60">1-5 years</p></div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm"><div className="text-xl mb-1">📦</div><h3 className="font-semibold text-charcoal text-xs">Packers</h3><p className="text-[10px] text-charcoal/60">State LMPC</p></div>
        </div>
      </div>
    </section>
  );
}

// Documents
function DocumentsSection() {
  const docs = ["PAN Card", "GST Certificate", "IEC", "Business Proof", "Product Details", "Sample Labels"];
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold text-charcoal mb-4 text-center">Documents Required</h2>
        <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
          {docs.map((doc, i) => (<div key={i} className="flex items-center gap-2 p-2 bg-cream rounded-lg"><CheckCircle2 className="w-4 h-4 text-terracotta" /><span className="text-sm text-charcoal">{doc}</span></div>))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
    { name: "Rajesh Sharma", city: "Delhi", text: "Bahut accha kaam kiya! 10 din mein LMPC ho gaya.", image: "/testimonials/indian_man_1.png" },
    { name: "Priya Gupta", city: "Mumbai", text: "Very professional! Fastest response mila.", image: "/testimonials/indian_woman_1.png" },
    { name: "Sunil Agarwal", city: "Jaipur", text: "Goods customs pe ruka tha, 5 din mein solve!", image: "/testimonials/indian_man_2.png" },
    { name: "Neha Verma", city: "Noida", text: "First time import, har step guide kiya. Best!", image: "/testimonials/indian_woman_2.png" }
  ];
  return (
    <section className="py-6 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold text-charcoal mb-4 text-center">Client Reviews</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Image src={t.image} alt={t.name} width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
                <div><div className="font-semibold text-xs text-charcoal">{t.name}</div><div className="text-[10px] text-charcoal/60">{t.city}</div></div>
              </div>
              <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}</div>
              <p className="text-[11px] text-charcoal/70">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "What is LMPC?", a: "Mandatory registration for importers/manufacturers of pre-packaged goods under Legal Metrology Rules." },
    { q: "Who needs it?", a: "Importers, manufacturers, packers, and e-commerce sellers of packaged products." },
    { q: "How long does it take?", a: "Standard: 10-20 days. Express: 2-7 days." },
    { q: "What's the fee?", a: "₹500 statutory + service charges (negotiable)." },
    { q: "Central vs State LMPC?", a: "Central (Importers): Lifetime. State (Manufacturers): 1-5 years." },
    { q: "Penalties without LMPC?", a: "Customs detention, ₹2L+ charges, ₹25K fine." },
    { q: "Required for e-commerce?", a: "Yes, Amazon/Flipkart require LMPC compliance." },
    { q: "Documents needed?", a: "PAN, GST, IEC, business proof, product details, labels." }
  ];
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold text-charcoal mb-4 text-center">FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-cream rounded-lg overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-3 text-left">
                <span className="font-medium text-sm text-charcoal">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-charcoal transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <div className="px-3 pb-3 text-sm text-charcoal/70">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Office Photos Carousel
function OfficeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    "/office/2025-12-12.webp",
    "/office/2025-12-12 (1).webp",
    "/office/2025-12-15.webp",
    "/office/2025-12-15 (1).webp",
    "/office/2025-12-18.webp",
    "/office/2025-12-18 (1).webp",
    // "/office/office1.png",
    // "/office/office2.png",
    "/office/office3.png",
    "/office/office4.png"
  ];
  const maxIndex = Math.ceil(photos.length / 2) - 1;

  useEffect(() => {
    const timer = setInterval(() => { setCurrentIndex(prev => (prev + 1) % (maxIndex + 1)); }, 3000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="overflow-hidden rounded-xl">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Array.from({ length: Math.ceil(photos.length / 2) }).map((_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0 flex gap-2 p-1">
            {photos.slice(slideIndex * 2, slideIndex * 2 + 2).map((photo, i) => (
              <div key={i} className="w-1/2">
                <Image src={photo} alt={`Office ${slideIndex * 2 + i + 1}`} width={300} height={200} className="w-full h-32 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1 mt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${currentIndex === i ? 'bg-terracotta' : 'bg-charcoal/20'}`} />
        ))}
      </div>
    </div>
  );
}

// Office Section
function OfficeSection() {
  return (
    <section className="py-8 bg-gradient-to-br from-charcoal to-charcoal/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-white mb-4 text-center">Visit Our Office</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <OfficeCarousel />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-white" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Quick License Head Office</h3>
                  <p className="text-white/80 text-sm mb-3">Sector 15, Pocket 8, Sector 15F, Rohini, Delhi - 110089</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://maps.google.com/?q=Sector+15+Pocket+8+Rohini+Delhi+110089" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 bg-terracotta text-white px-3 py-1.5 rounded-lg text-xs font-medium"><MapPin className="w-3 h-3" />Directions</a>
                    <a href="tel:+919891614601" className="inline-flex items-center gap-1 bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/20"><Phone className="w-3 h-3" />+91 98916 14601</a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <div><div className="text-xl font-bold text-white">10+</div><div className="text-[10px] text-white/60">Years</div></div>
                <div><div className="text-xl font-bold text-white">5000+</div><div className="text-[10px] text-white/60">Clients</div></div>
                <div><div className="text-xl font-bold text-white">99%</div><div className="text-[10px] text-white/60">Success</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTASection() {
  return (
    <section className="py-10 bg-gradient-to-r from-terracotta to-terracotta-dark">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-white mb-3">Ready for LMPC Registration?</h2>
        <p className="text-white/80 mb-5 max-w-lg mx-auto text-sm">Avoid customs detention. Get your LMPC certificate fast.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/919891614601?text=LMPC%20registration" className="inline-flex items-center gap-2 bg-white text-terracotta px-5 py-2.5 rounded-lg font-semibold text-sm"><MessageCircle className="w-4 h-4" />WhatsApp</a>
          <a href="tel:+919891614601" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-5 py-2.5 rounded-lg font-semibold text-sm"><Phone className="w-4 h-4" />Call Now</a>
        </div>
        <p className="mt-4 text-white/50 text-[10px]">Private consultancy. Not affiliated with govt.</p>
      </div>
    </section>
  );
}

export default function LMPCPageClient() {
  const [showMobileForm, setShowMobileForm] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <CertificateSection />
        {/* <WhyProfessionalSection /> */}
        <WhyQuickLicenseSection />
        <WhoNeedsSection />
        <DocumentsSection />
        <TestimonialsSection />
        <FAQSection />
        <OfficeSection />
        <FinalCTASection />
      </main>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-2 bg-white border-t shadow-lg z-50">
        <button onClick={() => setShowMobileForm(true)} className="w-full bg-terracotta text-white py-2.5 rounded-lg font-semibold text-sm">Get Free Consultation</button>
      </div>
      {showMobileForm && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileForm(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3"><h3 className="text-lg font-semibold text-charcoal">Get Consultation</h3><button onClick={() => setShowMobileForm(false)} className="text-charcoal/50"><ChevronDown className="w-5 h-5" /></button></div>
            <QuickForm />
          </div>
        </div>
      )}
      <div className="h-14 lg:hidden" />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
