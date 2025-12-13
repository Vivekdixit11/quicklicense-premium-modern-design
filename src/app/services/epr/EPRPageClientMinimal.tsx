"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { submitContactForm } from "@/lib/api";
import { 
  Recycle,
  AlertTriangle,
  Phone,
  MessageCircle,
  Send,
  RefreshCcw,
  CheckCircle,
  FileText,
  Shield,
  Users,
  Star,
  ChevronDown,
  Package,
  Leaf,
  Battery,
  Laptop,
  Award
} from "lucide-react";

// Clean Hero Section
function MinimalHeroSection() {
  return (
    <section className="relative bg-white pt-4 sm:pt-20 pb-6 sm:pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <Recycle className="w-3 h-3" />
                EPR Registration Service
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                EPR Registration for Importers & Manufacturers
              </h1>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Extended Producer Responsibility (EPR) compliance for Plastic, E-Waste, Battery & Tyres.
                Avoid customs hold and penalties with proper registration.
              </p>

              {/* Mobile: show compact form immediately after heading */}
              <div className="block sm:hidden mb-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-sm">
                  <EPRRegistrationForm compact />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-xs text-gray-600 mt-1">Registrations</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-xs text-gray-600 mt-1">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Support</div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919891614601?text=Hi,%20I%20need%20EPR%20registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Now
                </a>
                <a
                  href="tel:+919891614601"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium transition"
                >
                  <Phone className="w-4 h-4" />
                  Call Expert
                </a>
              </div>
            </div>

            {/* Right: Clean Form (sticky on large screens, hidden on small to avoid duplicate) */}
            <div className="hidden sm:block bg-white border-2 border-gray-200 rounded-xl shadow-sm p-6 lg:sticky lg:top-24">
              <div className="mb-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Get Started Today</h2>
                <p className="text-sm text-gray-600">Fill in your details and our expert will contact you within 24 hours</p>
              </div>
              <EPRRegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Optimized Form Component - Fast submission with instant feedback
function EPRRegistrationForm({ compact }: { compact?: boolean } = {}) {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);

    // Basic client-side validation for instant feedback
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitContactForm({ 
        fullName: formData.name.trim(), 
        email: formData.email.trim(), 
        phone: formData.phone.trim(), 
        message: formData.message.trim() || "EPR Registration enquiry" 
      });

      // Immediate redirect on success
      const transactionId = result.data?.id || '';
      window.location.href = `/thank-you?tid=${transactionId}&service=epr`;
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
      // Auto-clear error after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 text-xs text-red-700 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      <div>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
          placeholder="Your Name *"
          required
        />
      </div>

      <div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
          placeholder="Email Address *"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none text-sm"
          placeholder="Phone Number *"
          pattern="[0-9]{10}"
          required
        />
      </div>

      <div>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none resize-none text-sm"
          rows={3}
          placeholder="Tell us about your requirements (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg font-medium text-sm transition"
      >
        {isSubmitting ? (
          <>
            <RefreshCcw className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get Free Consultation
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" />
        Your information is secure and will never be shared
      </p>
    </form>
  );
}

// About EPR Section - Minimal
function AboutEPRSection() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What is EPR?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Extended Producer Responsibility (EPR) is a mandatory environmental compliance 
            for importers and manufacturers of plastic packaging, electronic waste, batteries, 
            and tyres in India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            EPR registration is mandatory under CPCB (Central Pollution Control Board) guidelines. 
            Without EPR authorization, your goods will be detained at customs, leading to 
            demurrage charges and penalties.
          </p>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function EPRPageClientMinimal() {
  const [showMobileForm, setShowMobileForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <MinimalHeroSection />
        
        {/* EPR Certificate Sample */}
        <section className="py-4 sm:py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-sm sm:max-w-md mx-auto">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 text-center">Sample Certificate</h3>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <img 
                  src="/AMAN-ENTERPRISES/AMAN ENTERPRISES_pages-to-jpg-0001.jpg" 
                  alt="EPR Certificate Sample" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-1">Issued by CPCB</p>
            </div>
          </div>
        </section>

        <AboutEPRSection />

        {/* Quick Navigation */}
        <section id="offer" className="py-4 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center text-xs">
              <a href="#plastic" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Plastic</a>
              <a href="#battery" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Battery</a>
              <a href="#oil" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Oil</a>
              <a href="#customs" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Customs</a>
              <a href="#pricing" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Pricing</a>
              <a href="#calculator" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Calculator</a>
              <a href="#returns" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Returns</a>
              <a href="#documents-list" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Documents</a>
              <a href="#credits" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Credits</a>
              <a href="#legal" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">Legal</a>
              <a href="#about" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition">About</a>
            </div>
          </div>
        </section>

        {/* Overview (very basic) */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600 max-w-3xl">EPR (Extended Producer Responsibility) requires producers, importers and brand owners to responsibly manage end-of-life products. Registration under CPCB ensures legal compliance and avoids customs detention.</p>
          </div>
        </section>

        {/* Why Us */}
        <section id="pricing" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Us</h3>
            <ul className="grid sm:grid-cols-3 gap-4">
              <li className="p-4 bg-white rounded-lg border border-gray-100 text-sm">Experienced consultants with proven track record</li>
              <li className="p-4 bg-white rounded-lg border border-gray-100 text-sm">Fast submissions and document support</li>
              <li className="p-4 bg-white rounded-lg border border-gray-100 text-sm">Dedicated support for customs clearance</li>
            </ul>
          </div>
        </section>

        {/* Testimonials - horizontally scrollable with Indian names and avatars */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Testimonials</h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-4 items-start">
                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1507531173827-e1a1e53c5a74?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Karthik Kumar" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Karthik Kumar</div>
                      <div className="text-xs text-gray-500">Chennai</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Handled our EPR swiftly, no delays. Highly recommended.”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Anjali Nair" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Anjali Nair</div>
                      <div className="text-xs text-gray-500">Kochi</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Clear communication and timely filings — thank you!”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Venkatesh Rao" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Venkatesh Rao</div>
                      <div className="text-xs text-gray-500">Bengaluru</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Helped avoid a customs hold — expert guidance.”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Priya Menon" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Priya Menon</div>
                      <div className="text-xs text-gray-500">Trivandrum</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Very professional and fast — paperwork handled end-to-end.”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53e8e9cf17de?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Lakshmi Iyer" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Lakshmi Iyer</div>
                      <div className="text-xs text-gray-500">Coimbatore</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Fast response and excellent support during customs clearance.”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Suresh R" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Suresh R</div>
                      <div className="text-xs text-gray-500">Madurai</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Good guidance and quick EPR filing — satisfied.”</p>
                </article>

                <article className="min-w-[220px] flex-none bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c006ae30?w=80&h=80&fit=crop&crop=faces" alt="Avatar of Radhika Reddy" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold text-sm">Radhika Reddy</div>
                      <div className="text-xs text-gray-500">Hyderabad</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">“Handled documentation efficiently, kept us updated throughout.”</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section id="credits" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Services</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-2 bg-white border rounded-lg">LMPC</span>
              <span className="px-3 py-2 bg-white border rounded-lg">WPC</span>
              <span className="px-3 py-2 bg-white border rounded-lg">Company Registration</span>
              <span className="px-3 py-2 bg-white border rounded-lg">Trademark</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold">Who needs EPR?</div>
                <div className="text-gray-600">Producers, importers and brand owners of EPR-category products.</div>
              </div>
              <div>
                <div className="font-semibold">How long does it take?</div>
                <div className="text-gray-600">Typically 7–15 working days with complete documents.</div>
              </div>
              <div>
                <div className="font-semibold">What categories are covered?</div>
                <div className="text-gray-600">Plastic, E-Waste, Batteries and Tyres.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories of Plastic */}
        <section id="plastic" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories of Plastic</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden max-w-[150px] mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?w=300&h=300&fit=crop" 
                    alt="Rigid plastic packaging bottles and containers" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm font-medium text-center">Rigid Packaging</div>
                <div className="text-xs text-gray-600 text-center mt-1">Bottles, containers, jars</div>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden max-w-[150px] mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1608871087674-eea066827f54?w=300&h=300&fit=crop" 
                    alt="Flexible plastic packaging films and pouches" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm font-medium text-center">Flexible Packaging</div>
                <div className="text-xs text-gray-600 text-center mt-1">Films, pouches, wraps</div>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <div className="aspect-square bg-gray-200 rounded-lg mb-2 overflow-hidden max-w-[150px] mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop" 
                    alt="Multi-layered plastic packaging laminated films" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-sm font-medium text-center">Multi-layered Packaging</div>
                <div className="text-xs text-gray-600 text-center mt-1">Laminated films, sachets</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="battery" className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Legal compliance and faster customs clearance</li>
              <li>Avoid demurrage and penalty charges</li>
              <li>Expert support for documentation</li>
            </ul>
          </div>
        </section>

        {/* Oil & Customs Info */}
        <section id="oil" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Oil & Lubricants EPR</h3>
            <p className="text-sm text-gray-600">EPR compliance for used oil and lubricant waste management.</p>
          </div>
        </section>

        <section id="customs" className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customs Clearance Support</h3>
            <p className="text-sm text-gray-600">Expert guidance for smooth customs clearance with EPR authorization.</p>
          </div>
        </section>

        <section id="calculator" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">EPR Calculator</h3>
            <p className="text-sm text-gray-600">Calculate your EPR obligations based on product type and quantity.</p>
          </div>
        </section>

        <section id="returns" className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">EPR Returns Filing</h3>
            <p className="text-sm text-gray-600">Annual and quarterly EPR return filing support.</p>
          </div>
        </section>

        <section id="legal" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Framework</h3>
            <p className="text-sm text-gray-600">Governed by Plastic Waste Management Rules, E-Waste Rules, Battery Waste Rules, and other CPCB guidelines.</p>
          </div>
        </section>

        {/* Documents Required */}
        <section id="documents-list" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents Required</h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li className="bg-white p-3 rounded border">PAN Card</li>
              <li className="bg-white p-3 rounded border">GST Certificate</li>
              <li className="bg-white p-3 rounded border">Business Registration Proof</li>
              <li className="bg-white p-3 rounded border">Product details / HSN codes</li>
            </ul>
          </div>
        </section>

        {/* Small footer CTA spacing */}
        <div className="py-6" />
      </main>

      {/* Mobile fixed quick form button and sheet */}
      <div className="sm:hidden">
        <button
          onClick={() => setShowMobileForm(true)}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium"
        >
          Get Free Consultation
        </button>

        {showMobileForm && (
          <div className="fixed inset-0 z-[60] flex items-end">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileForm(false)} />
            <div className="relative w-full bg-white rounded-t-2xl p-5 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-900">Get Started</div>
                <button 
                  onClick={() => setShowMobileForm(false)} 
                  className="text-gray-600 hover:text-gray-900 p-1"
                  aria-label="Close form"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
              <EPRRegistrationForm />
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}


