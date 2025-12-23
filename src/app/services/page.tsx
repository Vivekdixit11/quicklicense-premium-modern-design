import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
  Building2, 
  FileText, 
  Shield, 
  Award, 
  ArrowRight,
  Briefcase,
  Scale,
  Globe,
  Package,
  Truck,
  Leaf,
  Laptop,
  Factory,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Business Services - Registration, Licenses & Compliance | Quick License",
  description: "Complete range of business registration and licensing services in India. Private Limited, LLP, FSSAI, ISO, MSME, IEC, EPR, LMPC, WPC, Trademark & more. Fast processing with expert support.",
  keywords: "business services india, company registration services, licensing services, compliance services, FSSAI license, ISO certification, MSME registration, EPR registration, LMPC certificate, trademark registration",
  openGraph: {
    title: "Business Registration & Licensing Services India | Quick License",
    description: "One-stop solution for all business registration, licenses and compliance needs in India. Expert assistance with fast turnaround.",
    type: "website",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://quicklicense.in/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const serviceCategories = [
  {
    title: "Start a Business",
    description: "Register your business entity with proper legal structure",
    icon: Building2,
    services: [
      { name: "Private Limited Company", href: "/services/private-limited", description: "Most preferred business structure for startups" },
      { name: "LLP Registration", href: "/services/llp", description: "Limited liability with partnership flexibility" },
      { name: "Startup India Registration", href: "/services/startup-india", description: "Get DPIIT recognition and tax benefits" },
    ]
  },
  {
    title: "Licenses & Certifications",
    description: "Obtain mandatory licenses for your business operations",
    icon: FileText,
    services: [
      { name: "FSSAI License", href: "/services/fssai", description: "Food safety license for food businesses" },
      { name: "ISO Certification", href: "/services/iso", description: "International quality management standards" },
      { name: "MSME Registration", href: "/services/msme", description: "Udyam registration for MSMEs" },
      { name: "IEC Code", href: "/services/iec", description: "Import Export Code for international trade" },
      { name: "Drug License", href: "/services/drug-license", description: "License for pharmaceutical businesses" },
    ]
  },
  {
    title: "Compliance & Environmental",
    description: "Stay compliant with regulatory requirements",
    icon: Shield,
    services: [
      { name: "EPR Registration", href: "/services/epr", description: "Extended Producer Responsibility for waste management" },
      { name: "LMPC Registration", href: "/services/lmpc", description: "Legal Metrology for packaged commodities" },
      { name: "WPC Approval", href: "/services/wpc", description: "Wireless Planning & Coordination approval" },
      { name: "Director Nomination", href: "/services/director-nomination", description: "Resident director services" },
      { name: "GeM Registration", href: "/services/gem", description: "Government e-Marketplace seller registration" },
    ]
  },
  {
    title: "Intellectual Property",
    description: "Protect your brand and innovations",
    icon: Award,
    services: [
      { name: "Trademark Registration", href: "/services/trademark", description: "Protect your brand name and logo" },
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-cream via-cream to-terracotta/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Our <span className="text-terracotta">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">
              Complete range of business registration, licensing, and compliance services. 
              Expert assistance with fast turnaround and dedicated support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919891614601" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-lg font-semibold transition">
                Call Now: +91 98916 14601
              </a>
              <a href="https://wa.me/919891614601" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg font-semibold transition">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal">{category.title}</h2>
                    <p className="text-charcoal/70">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex} 
                      href={service.href}
                      className="group bg-cream/50 hover:bg-cream border border-gold/20 hover:border-terracotta/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-charcoal group-hover:text-terracotta transition-colors mb-2">
                            {service.name}
                          </h3>
                          <p className="text-sm text-charcoal/70">{service.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our experts are here to guide you. Get a free consultation and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919891614601" className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-lg font-semibold transition">
                Get Free Consultation
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition border border-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
