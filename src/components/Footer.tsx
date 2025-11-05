import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-heading text-lg font-bold gradient-text">
                LegalEase
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Your trusted partner for all business registration and licensing needs. We make compliance simple and hassle-free.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-white smooth-transition">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-white smooth-transition">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-white smooth-transition">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-white smooth-transition">
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs text-muted-foreground hover:text-primary smooth-transition">Home</Link></li>
              <li><Link href="/about" className="text-xs text-muted-foreground hover:text-primary smooth-transition">About Us</Link></li>
              <li><Link href="/pricing" className="text-xs text-muted-foreground hover:text-primary smooth-transition">Pricing</Link></li>
              <li><Link href="/contact" className="text-xs text-muted-foreground hover:text-primary smooth-transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary smooth-transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-muted-foreground hover:text-primary smooth-transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-xs text-muted-foreground hover:text-primary smooth-transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-muted-foreground">
                  123 Business Street, Corporate Hub, Mumbai - 400001, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-xs text-muted-foreground hover:text-primary smooth-transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@legalease.com" className="text-xs text-muted-foreground hover:text-primary smooth-transition">
                  info@legalease.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} LegalEase. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary smooth-transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary smooth-transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}