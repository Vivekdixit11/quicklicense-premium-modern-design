import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import siteIndex from "@/lib/siteIndex";

export default function Footer() {
  const services = siteIndex.filter((i) => i.type === 'service').map((s) => ({ href: s.href, name: s.title }));
  
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-lg bg-cream/10 flex items-center justify-center p-2">
                <img 
                  src="/logo.png" 
                  alt="Quick License Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Your trusted partner for all business registration and licensing needs. We make compliance simple, fast, and hassle-free.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-cream/70 hover:text-terracotta transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-cream/70 hover:text-terracotta transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-cream/70 hover:text-terracotta transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-cream/70 hover:text-terracotta transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-cream/70 hover:text-terracotta transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-cream/70 hover:text-terracotta transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 8).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-cream/70 hover:text-terracotta transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="font-semibold text-gold mb-4">More Services</h3>
            <ul className="space-y-2">
              {services.slice(8).map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-cream/70 hover:text-terracotta transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-terracotta flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm text-cream/70 leading-relaxed">
                  F-10/125 Sector-15 Rohini, Delhi - 110085, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-terracotta flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="tel:+919891614601" className="text-sm text-cream/70 hover:text-terracotta transition-colors">
                  +91 98916 14601
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-terracotta flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="mailto:contact@quicklicense.in" className="text-sm text-cream/70 hover:text-terracotta transition-colors">
                  contact@quicklicense.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-cream/10">
          <div className="bg-cream/5 rounded-lg p-4 text-sm text-cream/60 leading-relaxed">
            <strong className="text-cream/80">Disclaimer:</strong> We are a private consultancy firm and not a government agency. We provide assistance and advisory services for LMPC registration. Official government registration, certificates, and final approval must be obtained directly from the Legal Metrology Department.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/60 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-gold">Quick License</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-cream/60 hover:text-terracotta transition-colors">
                Privacy Policy
              </Link>
              <span className="text-cream/30">•</span>
              <Link href="/terms" className="text-sm text-cream/60 hover:text-terracotta transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

