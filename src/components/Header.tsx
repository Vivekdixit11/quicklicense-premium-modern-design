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
    services: [
      { name: "Private Limited Company", href: "/services/private-limited" },
      { name: "LLP Registration", href: "/services/llp" },
      { name: "Startup India", href: "/services/startup-india" },
    ]
  },
  {
    category: "Licenses",
    services: [
      { name: "FSSAI License", href: "/services/fssai" },
      { name: "ISO Certification", href: "/services/iso" },
      { name: "MSME Registration", href: "/services/msme" },
      { name: "IEC Code", href: "/services/iec" },
      { name: "Drug License", href: "/services/drug-license" },
    ]
  },
  {
    category: "Compliance",
    services: [
      { name: "EPR Registration", href: "/services/epr" },
      { name: "LMPC Registration", href: "/services/lmpc" },
      { name: "WPC Approval", href: "/services/wpc" },
      { name: "Director Nomination", href: "/services/director-nomination" },
      { name: "GeM Registration", href: "/services/gem" },
    ]
  },
  {
    category: "Trademark",
    services: [
      { name: "Trademark Registration", href: "/services/trademark" },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openMenu = (key: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setActiveDropdown(null), 100);
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
      {/* Top Info Bar - Cream/Terracotta Theme */}
      <div className="bg-charcoal text-cream h-9 fixed top-0 left-0 right-0 z-[99999]">
        <div className="container mx-auto px-4 md:px-6 h-full">
          <div className="flex items-center justify-between h-full text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919891614601" className="flex items-center space-x-2 hover:text-terracotta transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">+91 98916 14601</span>
              </a>
              <a href="mailto:contact@quicklicense.in" className="hidden sm:flex items-center space-x-2 hover:text-terracotta transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium truncate max-w-[180px]">contact@quicklicense.in</span>
              </a>
            </div>
            <div className="hidden md:block text-xs font-medium text-cream/80">
              Fast-track your business licensing
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[84px]"></div>

      {/* Main Header - Slim, Fast, Cream Theme */}
      <header
        className={`fixed top-[36px] left-0 right-0 z-40 w-full transition-shadow duration-200 ${
          isScrolled
            ? "bg-cream shadow-md"
            : "bg-cream/95"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-12 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-28 h-8 md:w-36 md:h-10">
                <Image src="/logo.png" alt="Quick License Logo" fill className="object-contain" priority />
              </div>
            </Link>

            {/* Desktop Navigation - Slim & Fast */}
            <nav className="hidden lg:flex items-center space-x-1">
              {serviceCategories.map((category) => (
                <div 
                  key={category.category}
                  className="relative"
                  onMouseEnter={() => openMenu(category.category)}
                  onMouseLeave={scheduleClose}
                >
                  <button className={`flex items-center space-x-1 text-sm font-medium py-2 px-3 rounded transition-colors ${
                    activeDropdown === category.category 
                      ? 'text-terracotta' 
                      : 'text-charcoal hover:text-terracotta'
                  }`}>
                    <span>{category.category}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-150 ${activeDropdown === category.category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown - Fast, Simple */}
                  <div 
                    className={`absolute top-full left-0 pt-1 transition-opacity duration-100 ${
                      activeDropdown === category.category ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
                    style={{ zIndex: 9999 }}
                    onMouseEnter={() => openMenu(category.category)}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-terracotta transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/about" className="text-charcoal hover:text-terracotta text-sm font-medium px-3 py-2 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-charcoal hover:text-terracotta text-sm font-medium px-3 py-2 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-charcoal hover:text-terracotta text-sm font-medium px-3 py-2 transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="tel:+919891614601">
                <Button className="bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold px-4 py-2 h-9 rounded-full transition-colors">
                  <Phone className="h-3.5 w-3.5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="text-charcoal hover:bg-cream-light">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[350px] bg-cream p-0 border-l border-gold/20">
                <div className="p-4 border-b border-gold/20">
                  <Link href="/" className="flex items-center">
                    <div className="relative w-32 h-8">
                      <Image src="/logo.png" alt="Quick License Logo" fill className="object-contain" priority />
                    </div>
                  </Link>
                </div>

                <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
                  {serviceCategories.map((category) => (
                    <div key={category.category} className="border-b border-gold/10 pb-4">
                      <h3 className="font-semibold text-charcoal text-sm mb-2">{category.category}</h3>
                      <div className="space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block py-1.5 text-sm text-gray-warm hover:text-terracotta transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Link href="/about" className="text-sm font-medium text-charcoal hover:text-terracotta py-2 px-3 bg-cream-light rounded-lg transition-colors">
                      About
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-charcoal hover:text-terracotta py-2 px-3 bg-cream-light rounded-lg transition-colors">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-charcoal hover:text-terracotta py-2 px-3 bg-cream-light rounded-lg transition-colors">
                      Contact
                    </Link>
                  </div>

                  <a href="tel:+919891614601" className="block">
                    <Button className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold py-3 rounded-lg transition-colors">
                      <Phone className="h-4 w-4 mr-2" />
                      Call +91 98916 14601
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

