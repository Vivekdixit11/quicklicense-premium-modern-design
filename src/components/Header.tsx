"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Private Limited Company", href: "/services/private-limited" },
  { name: "LLP Registration", href: "/services/llp" },
  { name: "FSSAI License", href: "/services/fssai" },
  { name: "ISO Certification", href: "/services/iso" },
  { name: "MSME Registration", href: "/services/msme" },
  { name: "Startup India", href: "/services/startup-india" },
  { name: "IEC Code", href: "/services/iec" },
  { name: "Drug License", href: "/services/drug-license" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setConsultOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-lg py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-heading text-lg font-bold gradient-text hidden sm:inline-block">
                LegalEase
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary smooth-transition">
                Home
              </Link>
              
              <div className="relative group">
                <button className="text-sm font-medium hover:text-primary smooth-transition flex items-center gap-1">
                  Services
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-xs hover:bg-accent smooth-transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about" className="text-sm font-medium hover:text-primary smooth-transition">
                About Us
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-primary smooth-transition">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary smooth-transition">
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-xs font-medium hover:text-primary smooth-transition">
                <Phone className="w-3 h-3" />
                <span>+91 98765 43210</span>
              </a>
              
              <Dialog open={consultOpen} onOpenChange={setConsultOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="animated-gradient text-white font-semibold text-xs px-4">
                    Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-heading">Get Free Consultation</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleConsultSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="name" className="text-xs">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" required className="mt-1 text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="mobile" className="text-xs">Mobile Number</Label>
                      <Input id="mobile" type="tel" placeholder="+91 98765 43210" required className="mt-1 text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required className="mt-1 text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-xs">Service Interested In</Label>
                      <select id="service" className="w-full mt-1 px-3 py-2 border border-input rounded-lg bg-background text-sm">
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.href} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Button type="submit" className="w-full animated-gradient text-white font-semibold text-sm">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium hover:text-primary smooth-transition">
                    Home
                  </Link>
                  
                  <div>
                    <button 
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-base font-medium hover:text-primary smooth-transition flex items-center gap-2 w-full"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-xs text-muted-foreground hover:text-primary py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium hover:text-primary smooth-transition">
                    About Us
                  </Link>
                  <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium hover:text-primary smooth-transition">
                    Pricing
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium hover:text-primary smooth-transition">
                    Contact
                  </Link>

                  <div className="pt-4 border-t border-border space-y-3">
                    <a href="tel:+919876543210" className="flex items-center gap-2 text-xs font-medium">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </a>
                    <Button onClick={() => { setMobileMenuOpen(false); setConsultOpen(true); }} className="w-full animated-gradient text-white font-semibold text-sm">
                      Free Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}