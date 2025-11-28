"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Phone, Mail } from "lucide-react";

const serviceCategories = [
  {
    category: "Start a Business",
    description: "Launch your venture with proper legal structure",
    services: [
      { name: "Private Limited Company", href: "/services/private-limited" },
      { name: "LLP Registration", href: "/services/llp" },
      { name: "Startup India", href: "/services/startup-india" },
    ]
  },
  {
    category: "Licenses & Registration",
    description: "Get all required licenses and registrations",
    services: [
      { name: "FSSAI License", href: "/services/fssai" },
      { name: "ISO Certification", href: "/services/iso" },
      { name: "MSME Registration", href: "/services/msme" },
      { name: "IEC Code", href: "/services/iec" },
      { name: "Drug License", href: "/services/drug-license" },
    ]
  },
  {
    category: "Compliance & Certifications",
    description: "Product compliance and certification services",
    services: [
      { name: "EPR Registration", href: "/services/epr" },
      { name: "LMPC Registration", href: "/services/lmpc" },
      { name: "WPC Approval", href: "/services/wpc" },
      { name: "Director Nomination", href: "/services/director-nomination" },
      { name: "GeM Registration", href: "/services/gem" },
    ]
  },
  {
    category: "Trademark & IP",
    description: "Protect your brand and intellectual property",
    services: [
      { name: "Trademark Registration", href: "/services/trademark" },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const openMenu = (key: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setActiveDropdown(null), 180);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar - Sleek Modern Design */}
      <div className="bg-gradient-to-r from-[#083E6B] via-[#23A8DD] to-[#083E6B] text-white h-11 backdrop-blur-md fixed top-0 left-0 right-0 z-[99999] border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-4 md:space-x-8">
              <a href="tel:+919891614601" className="flex items-center space-x-2 hover:text-[#84D3FF] transition-all duration-300 hover:scale-105 group">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">+91 98916 14601</span>
              </a>
              <a href="mailto:enterpriserawal6@gmail.com" className="hidden sm:flex items-center space-x-2 hover:text-[#84D3FF] transition-all duration-300 hover:scale-105 group">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium truncate max-w-[200px]">enterpriserawal6@gmail.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs font-medium bg-white/10 px-4 py-1.5 rounded-full">
              <span className="animate-pulse">⚡</span>
              <span>Fast-track your business licensing - Quick & Easy!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[108px]"></div>

      {/* Main Header - Modern Glassmorphism Design */}
      <header
        className={`fixed top-[44px] left-0 right-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100/50"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex h-16 md:h-20 items-center justify-between relative">
            {/* Logo (only) - match footer style, no title/subtitle */}
            <Link href="/" className="flex items-center relative z-10 ml-0">
              <div className="relative w-32 h-10 md:w-36 md:h-12 lg:w-48 lg:h-14 min-w-[90px]">
                <Image src="/logo.png" alt="Quick License Logo" fill className="object-contain" priority />
              </div>
            </Link>

            {/* Desktop Navigation - Modern Pill Style */}
            <nav className="hidden lg:flex items-center space-x-1 ml-auto mr-4 relative z-30 bg-gray-50/50 rounded-full px-2 py-1.5 border border-gray-200/50">
              {/* Individual Category Dropdowns */}
              {serviceCategories.map((category) => (
                <div 
                  key={category.category}
                  className="relative"
                  ref={(el) => { buttonRefs.current[category.category] = el; }}
                  onMouseEnter={() => openMenu(category.category)}
                  onMouseLeave={scheduleClose}
                >
                  <button className={`flex items-center space-x-1.5 font-medium transition-all duration-300 py-2 px-3 rounded-full ${
                    activeDropdown === category.category 
                      ? 'bg-gradient-to-r from-[#083E6B] to-[#23A8DD] text-white shadow-lg shadow-[#23A8DD]/30' 
                      : 'text-gray-700 hover:text-[#083E6B] hover:bg-white hover:shadow-md'
                  }`}>
                    <span className="text-sm font-semibold whitespace-nowrap">{category.category}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === category.category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu - Enhanced Modern Design */}
                  <div 
                    className={`absolute top-full left-0 mt-3 w-80 transition-all duration-300 ${
                    activeDropdown === category.category ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
                  }`}
                    style={{ zIndex: 9999 }}
                    onMouseEnter={() => openMenu(category.category)}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-5 relative overflow-hidden">
                      {/* Gradient Background Effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#23A8DD]/10 to-[#81BCC9]/10 rounded-full blur-3xl -z-10"></div>
                      
                      {/* Category Header */}
                      <div className="pb-4 mb-4 border-b border-gray-200/50">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-2 h-8 rounded-full bg-gradient-to-b from-[#23A8DD] to-[#81BCC9]"></div>
                          <h3 className="font-bold text-gray-900 text-base">
                            {category.category}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed pl-1 ml-5">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* Services List */}
                      <div className="space-y-1.5">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#E2F6F8] hover:to-[#84D3FF]/20 transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
                          >
                            <ChevronDown className="w-4 h-4 text-[#083E6B] -rotate-90 transition-all duration-300 group-hover:translate-x-1" />
                            <span className="text-sm font-semibold text-[#083E6B] group-hover:text-[#23A8DD] transition-colors flex-1">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Other Navigation Links */}
              <Link href="/about" className="text-gray-700 hover:text-[#083E6B] hover:bg-white font-medium transition-all duration-300 text-sm px-3 py-2 rounded-full hover:shadow-md">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#083E6B] hover:bg-white font-medium transition-all duration-300 text-sm px-3 py-2 rounded-full hover:shadow-md">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#083E6B] hover:bg-white font-medium transition-all duration-300 text-sm px-3 py-2 rounded-full hover:shadow-md">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions - Phone CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+919891614601" aria-label="Call +91 98916 14601">
                <Button className="bg-[#083E6B] hover:bg-[#23A8DD] text-white font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#083E6B] hover:border-[#23A8DD] flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98916 14601</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu - Enhanced Design */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-gradient-to-r hover:from-[#E2F6F8] hover:to-[#84D3FF]/20 rounded-xl transition-all duration-300">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto bg-gradient-to-br from-white via-[#E2F6F8]/20 to-[#84D3FF]/10 p-0 border-l border-[#81BCC9]/30">
                {/* Header Section - Modern Gradient */}
                <div className="sticky top-0 z-10 ">
                  <Link href="/" className="flex items-center ml-0 md:ml-0">
                    <div className="relative w-36 h-9 md:w-40 md:h-10 min-w-[120px]">
                      <Image src="/logo.png" alt="Quick License Logo" fill className="object-contain" priority />
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col space-y-5 px-5 py-6">
                  {/* Mobile Services - Card Style */}
                  <div className="space-y-4">
                    {serviceCategories.map((category, catIndex) => (
                      <div key={category.category} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        {/* Category Header - Enhanced */}
                        <div className="bg-gradient-to-r from-[#E2F6F8] via-[#84D3FF]/20 to-[#E2F6F8] px-5 py-4 border-b border-gray-200/50">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#23A8DD] to-[#81BCC9]"></div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-base leading-tight">{category.category}</h3>
                              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{category.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Services List - Modern Style */}
                        <div className="p-3 space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group flex items-center space-x-3 p-3.5 rounded-xl hover:bg-gradient-to-r hover:from-[#E2F6F8] hover:to-[#84D3FF]/20 transition-all duration-300 active:scale-95 hover:shadow-md"
                            >
                              <ChevronDown className="w-5 h-5 text-[#083E6B] -rotate-90 transition-all duration-300 group-hover:translate-x-1" />
                              <div className="flex-1">
                                <div className="font-semibold text-[#083E6B] text-sm group-hover:text-[#23A8DD] transition-colors">{service.name}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Links - Modern Pills */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <Link href="/about" className="flex items-center justify-center space-x-2 bg-white/90 hover:bg-gradient-to-br hover:from-[#E2F6F8] hover:to-[#84D3FF]/30 text-gray-700 hover:text-[#083E6B] font-semibold py-4 px-4 rounded-2xl border border-gray-200/50 hover:border-[#81BCC9] transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95">
                      <span className="text-sm">About</span>
                    </Link>
                    <Link href="/blog" className="flex items-center justify-center space-x-2 bg-white/90 hover:bg-gradient-to-br hover:from-[#E2F6F8] hover:to-[#84D3FF]/30 text-gray-700 hover:text-[#083E6B] font-semibold py-4 px-4 rounded-2xl border border-gray-200/50 hover:border-[#81BCC9] transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95">
                      <span className="text-sm">Blog</span>
                    </Link>
                    <Link href="/contact" className="flex items-center justify-center space-x-2 bg-white/90 hover:bg-gradient-to-br hover:from-[#E2F6F8] hover:to-[#84D3FF]/30 text-gray-700 hover:text-[#083E6B] font-semibold py-4 px-4 rounded-2xl border border-gray-200/50 hover:border-[#81BCC9] transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95">
                      <span className="text-sm">Contact</span>
                    </Link>
                  </div>

                  {/* CTA Button - Enhanced */}
                  <div className="pt-3">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-gradient-to-r from-[#083E6B] via-[#23A8DD] to-[#083E6B] hover:from-[#062f50] hover:via-[#1b86b0] hover:to-[#062f50] shadow-xl shadow-[#23A8DD]/40 hover:shadow-2xl hover:shadow-[#23A8DD]/60 text-base py-7 rounded-2xl transition-all duration-500 active:scale-95 font-bold border border-white/20">
                        <span className="text-base">Get Started Now</span>
                        <span className="ml-2 text-lg">→</span>
                      </Button>
                    </Link>
                  </div>

                  {/* Contact Info - Modern Cards */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 space-y-3 border border-gray-200/50 shadow-lg">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#23A8DD] to-transparent rounded-full"></div>
                      <span>Contact Information</span>
                    </div>
                    <a href="tel:+919891614601" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#E2F6F8] hover:to-[#84D3FF]/20 transition-all duration-300 group active:scale-95 hover:shadow-md">
                      <div className="w-11 h-11 bg-gradient-to-br from-[#23A8DD] to-[#81BCC9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 font-medium mb-0.5">Call us now</div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-[#083E6B] transition-colors">+91 98916 14601</div>
                      </div>
                    </a>
                    <a href="mailto:enterpriserawal6@gmail.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#E2F6F8] hover:to-[#84D3FF]/20 transition-all duration-300 group active:scale-95 hover:shadow-md">
                      <div className="w-11 h-11 bg-gradient-to-br from-[#23A8DD] to-[#81BCC9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="text-xs text-gray-500 font-medium mb-0.5">Email us</div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-[#083E6B] truncate transition-colors">enterpriserawal6@gmail.com</div>
                      </div>
                    </a>
                  </div>

                  {/* Bottom Padding */}
                  <div className="pb-8"></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

