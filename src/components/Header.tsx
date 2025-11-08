"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Phone, Mail } from "lucide-react";

const serviceCategories = [
  {
    category: "Start a Business",
    icon: "🚀",
    description: "Launch your venture with proper legal structure",
    services: [
      { name: "Private Limited Company", href: "/services/private-limited", icon: "🏢" },
      { name: "LLP Registration", href: "/services/llp", icon: "🤝" },
      { name: "Startup India", href: "/services/startup-india", icon: "💡" },
    ]
  },
  {
    category: "Licenses & Registration",
    icon: "📋",
    description: "Get all required licenses and registrations",
    services: [
      { name: "FSSAI License", href: "/services/fssai", icon: "🍴" },
      { name: "ISO Certification", href: "/services/iso", icon: "⭐" },
      { name: "MSME Registration", href: "/services/msme", icon: "🏭" },
      { name: "IEC Code", href: "/services/iec", icon: "🌍" },
      { name: "Drug License", href: "/services/drug-license", icon: "💊" },
    ]
  },
  {
    category: "Trademark & IP",
    icon: "®️",
    description: "Protect your brand and intellectual property",
    services: [
      { name: "Trademark Registration", href: "/services/trademark", icon: "™️" },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919891614601" className="flex items-center space-x-2 hover:text-indigo-100 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>+91 98916 14601</span>
              </a>
              <a href="mailto:enterpriserawal6@gmail.com" className="hidden sm:flex items-center space-x-2 hover:text-indigo-100 transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>enterpriserawal6@gmail.com</span>
              </a>
            </div>
            <div className="hidden md:block text-xs">
              ⚡ Fast-track your business licensing - Quick & Easy!
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group ml-4 sm:ml-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="/logo.png" 
                  alt="Quick License Logo" 
                  className="w-full h-full object-contain transition-transform group-hover:scale-110 relative z-10"
                />
              </div>
              {/* <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Quick License
                </span>
                <span className="text-xs sm:text-sm text-gray-500 -mt-1">Fast & Reliable Licensing</span>
              </div> */}
            </Link>

            {/* Desktop Navigation - Moved to Right */}
            <nav className="hidden lg:flex items-center space-x-1 ml-auto mr-6">
              {/* Individual Category Dropdowns */}
              {serviceCategories.map((category) => (
                <div 
                  key={category.category}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.category)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-indigo-50">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm">{category.category}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === category.category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-72 transition-all duration-300 ${
                    activeDropdown === category.category ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 backdrop-blur-lg">
                      {/* Category Header */}
                      <div className="pb-3 mb-3 border-b border-gray-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xl">{category.icon}</span>
                          <h3 className="font-bold text-gray-900 text-sm">
                            {category.category}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* Services List */}
                      <div className="space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="group flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-violet-50 transition-all duration-300"
                          >
                            <span className="text-lg">{service.icon}</span>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
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
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-indigo-50">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-indigo-50">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all">
                Get Started →
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    LegalEase
                  </Link>
                  
                  {/* Mobile Services */}
                  <div className="space-y-6">
                    {serviceCategories.map((category) => (
                      <div key={category.category} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{category.icon}</span>
                          <h3 className="font-bold text-gray-900 text-base">{category.category}</h3>
                        </div>
                        <div className="ml-7 space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                              <span className="text-lg">{service.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 text-sm">{service.name}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gray-200"></div>

                  <Link href="/about" className="text-lg font-semibold text-gray-700 hover:text-indigo-600">
                    About
                  </Link>
                  <Link href="/contact" className="text-lg font-semibold text-gray-700 hover:text-indigo-600">
                    Contact
                  </Link>

                  <div className="pt-4 space-y-3">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg">
                      Get Started →
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <a href="tel:+919891614601" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600">
                      <Phone className="h-4 w-4" />
                      <span>+91 98916 14601</span>
                    </a>
                    <a href="mailto:enterpriserawal6@gmail.com" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600">
                      <Mail className="h-4 w-4" />
                      <span>enterpriserawal6@gmail.com</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
