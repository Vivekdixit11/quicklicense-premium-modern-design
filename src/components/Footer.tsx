import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import siteIndex from "@/lib/siteIndex";



// Note: no services are excluded from footer — show full services list

export default function Footer() {
  // derive services from the central site index so links stay in sync
  const services = siteIndex.filter((i) => i.type === 'service').map((s) => ({ href: s.href, name: s.title }));
  return (
    <footer className="relative bg-gradient-to-br from-[#010202] via-[#0a4d7a] to-[#083E6B] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#23A8DD]/40 to-[#81BCC9]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#81BCC9]/40 to-[#23A8DD]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#23A8DD]/20 to-[#81BCC9]/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 backdrop-blur-sm border border-[#d4d4dc]/20 flex items-center justify-center p-2 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="Quick License Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <span className="font-heading text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#84D3FF] via-[#81BCC9] to-white bg-clip-text text-transparent">
                Quick License
              </span> */}
            </div>
            <p className="text-[#84D3FF]/90 text-sm leading-relaxed mb-6">
              Your trusted partner for all business registration and licensing needs. We make compliance simple, fast, and hassle-free.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#23A8DD] hover:border-[#81BCC9] hover:scale-110 transition-all duration-300 shadow-lg">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#23A8DD] hover:border-[#81BCC9] hover:scale-110 transition-all duration-300 shadow-lg">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#23A8DD] hover:border-[#81BCC9] hover:scale-110 transition-all duration-300 shadow-lg">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#23A8DD] hover:border-[#81BCC9] hover:scale-110 transition-all duration-300 shadow-lg">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold mb-6 bg-gradient-to-r from-[#84D3FF] to-[#81BCC9] bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ Home</Link></li>
              <li><Link href="/about" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services (filtered per request) */}
          <div>
            <h3 className="font-heading text-base font-bold mb-6 bg-gradient-to-r from-[#84D3FF] to-[#81BCC9] bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#84D3FF] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">→ {s.name}</Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Sitemap (full) */}
          <div>
            <h3 className="font-heading text-base font-bold mb-6 bg-gradient-to-r from-[#84D3FF] to-[#E2F6F8] bg-clip-text text-transparent">Sitemap</h3>
            <div className="text-sm text-[#E2F6F8]">
              <h4 className="font-semibold text-[#E2F6F8] mb-2">Main</h4>
              <ul className="space-y-1 mb-4">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>

              {/* Services moved to the 'Our Services' column above */}

              <h4 className="font-semibold text-[#E2F6F8] mb-2">Other</h4>
              <ul className="space-y-1">
                <li><Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-base font-bold mb-6 bg-gradient-to-r from-[#84D3FF] to-[#E2F6F8] bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-[#E2F6F8] leading-relaxed">
                  F-10/125 Sector-15 Rohini, Delhi - 110085, India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919891614601" className="text-sm text-[#E2F6F8] hover:text-white transition-colors">
                  +91 98916 14601
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:enterpriserawal6@gmail.com" className="text-sm text-[#E2F6F8] hover:text-white transition-colors">
                  enterpriserawal6@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <div className="bg-white/5 border border-white/10 rounded-md p-4 text-sm text-[#E2F6F8] leading-relaxed">
            <strong className="font-semibold text-white">Disclaimer:</strong> We are a private consultancy firm and not a government agency. We provide assistance and advisory services for LMPC registration. Official government registration, certificates, and final approval must be obtained directly from the Legal Metrology Department. We do not issue government registrations or act as the official authority.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#E2F6F8] text-center md:text-left">
              © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-[#84D3FF] to-[#E2F6F8] bg-clip-text text-transparent">Quick License</span>. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#E2F6F8] hover:text-white transition-colors relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#81BCC9] to-[#23A8DD] group-hover:w-full transition-all duration-300" />
              </Link>
              <span className="text-[#81BCC9]">•</span>
              <Link href="/terms" className="text-sm text-[#E2F6F8] hover:text-white transition-colors relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#81BCC9] to-[#23A8DD] group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

