"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Building2,
  FileText,
  Utensils,
  Award,
  Briefcase,
  Rocket,
  Globe,
  PillBottle,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Zap,
  Target,
  HeadphonesIcon,
  ThumbsUp,
  Play,
} from "lucide-react";

const services = [
  { icon: Building2, name: "Private Limited Company", href: "/services/private-limited", desc: "Complete company registration" },
  { icon: FileText, name: "LLP Registration", href: "/services/llp", desc: "Limited Liability Partnership" },
  { icon: Utensils, name: "FSSAI License", href: "/services/fssai", desc: "Food safety certification" },
  { icon: Award, name: "ISO Certification", href: "/services/iso", desc: "International standards" },
  { icon: Briefcase, name: "MSME Registration", href: "/services/msme", desc: "Micro, Small & Medium" },
  { icon: Rocket, name: "Startup India", href: "/services/startup-india", desc: "Government recognition" },
  { icon: Globe, name: "IEC Code", href: "/services/iec", desc: "Import Export Code" },
  { icon: PillBottle, name: "Drug License", href: "/services/drug-license", desc: "Pharmaceutical licensing" },
  { icon: ShieldCheck, name: "GST Registration", href: "/services/gst", desc: "Tax registration" },
  { icon: FileText, name: "Trademark Registration", href: "/services/trademark", desc: "Brand protection" },
  { icon: Award, name: "Professional Tax", href: "/services/professional-tax", desc: "PT registration" },
  { icon: Building2, name: "Shop Act License", href: "/services/shop-act", desc: "Shop establishment" },
  { icon: FileText, name: "Partnership Firm", href: "/services/partnership", desc: "Partnership registration" },
  { icon: Building2, name: "One Person Company", href: "/services/opc", desc: "OPC registration" },
  { icon: Award, name: "Digital Signature", href: "/services/digital-signature", desc: "DSC certificate" },
  { icon: FileText, name: "Labour License", href: "/services/labour-license", desc: "Labour compliance" },
  { icon: ShieldCheck, name: "EPF Registration", href: "/services/epf", desc: "Employee provident fund" },
  { icon: FileText, name: "ESIC Registration", href: "/services/esic", desc: "Employee insurance" },
  { icon: Globe, name: "Import License", href: "/services/import-license", desc: "Import permissions" },
  { icon: Award, name: "Export License", href: "/services/export-license", desc: "Export permissions" },
  { icon: Utensils, name: "Food License", href: "/services/food-license", desc: "Food business license" },
  { icon: PillBottle, name: "Cosmetic License", href: "/services/cosmetic-license", desc: "Cosmetic registration" },
  { icon: ShieldCheck, name: "Pollution License", href: "/services/pollution-license", desc: "Environmental clearance" },
  { icon: FileText, name: "BIS Certification", href: "/services/bis", desc: "Bureau of Indian Standards" },
  { icon: Award, name: "Barcode Registration", href: "/services/barcode", desc: "Product barcode" },
  { icon: Building2, name: "NBFC Registration", href: "/services/nbfc", desc: "Non-banking finance" },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Get your licenses in record time with our streamlined process",
  },
  {
    icon: Target,
    title: "100% Compliance",
    desc: "Stay compliant with all government regulations and laws",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    desc: "Dedicated team of experts available 24/7 for assistance",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is what you pay",
  },
];

const steps = [
  { number: "01", title: "Choose Service", desc: "Select the license or registration you need" },
  { number: "02", title: "Submit Documents", desc: "Upload required documents through our secure portal" },
  { number: "03", title: "Expert Review", desc: "Our team reviews and processes your application" },
  { number: "04", title: "Get Licensed", desc: "Receive your certificate and start your business" },
];

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechStart Solutions",
    rating: 5,
    text: "QuickLicense made company registration incredibly simple. Got my Private Limited company registered in just 7 days!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Owner, Food Delight Cafe",
    rating: 5,
    text: "Excellent service for FSSAI license. The team was professional and handled everything smoothly.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "CEO, Export House",
    rating: 5,
    text: "Got IEC code and all export licenses hassle-free. Highly recommend their services!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const faqs = [
  {
    question: "How long does it take to register a Private Limited Company?",
    answer: "Typically, it takes 7-10 business days to complete the registration process, subject to government processing times and document verification.",
  },
  {
    question: "What documents are required for FSSAI license?",
    answer: "You'll need identity proof, address proof, food category list, and premises documents. Our team will guide you through the complete document checklist.",
  },
  {
    question: "Is MSME registration mandatory?",
    answer: "While not mandatory, MSME registration offers numerous benefits including easier loans, government subsidies, and tax benefits. It's highly recommended for small businesses.",
  },
  {
    question: "Can I track my application status?",
    answer: "Yes! We provide real-time updates on your application status through email, SMS, and our client portal.",
  },
  {
    question: "What if my application gets rejected?",
    answer: "We offer 100% refund if your application is rejected due to our error. Our expert review process ensures 99% approval rate.",
  },
  {
    question: "Do you provide post-registration support?",
    answer: "Absolutely! We provide comprehensive post-registration support including annual compliance, filings, and ongoing consultation.",
  },
];

const trustLogos = [
  "Google", "Amazon", "Flipkart", "Zomato", "Swiggy", "Paytm"
];

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-3 px-2.5 py-0.5 text-[10px] bg-primary/10 text-primary hover:bg-primary/20">
                🚀 India's #1 Business Registration Platform
              </Badge>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight mb-3">
                Build Your Business with Passion
                <span className="gradient-text block">Build it Smart with QuickLicense</span>
              </h1>
              
              <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                Get all your business licenses and registrations done in one place. 
                Fast, reliable, and 100% compliant with government regulations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
                <Button size="sm" className="animated-gradient text-white font-semibold text-xs px-5 group">
                  Get Started Now
                  <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="sm" variant="outline" className="font-semibold text-xs px-5 group">
                  <Play className="mr-2 w-3.5 h-3.5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <div className="text-xl font-bold gradient-text">10,000+</div>
                  <div className="text-[10px] text-muted-foreground">Businesses Registered</div>
                </div>
                <div>
                  <div className="text-xl font-bold gradient-text">26+</div>
                  <div className="text-[10px] text-muted-foreground">Services Offered</div>
                </div>
                <div>
                  <div className="text-xl font-bold gradient-text">99%</div>
                  <div className="text-[10px] text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative glass-effect rounded-2xl p-6 hover-lift">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                  alt="Business Registration"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Trusted By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-center text-[10px] text-muted-foreground mb-4">Trusted by 10,000+ businesses across India</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {trustLogos.map((logo, i) => (
                <div key={i} className="text-base font-bold text-muted-foreground/40 hover:text-muted-foreground/60 smooth-transition">
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-2 text-[10px]">Our Services</Badge>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              26+ Business Licenses & <span className="gradient-text">Registrations</span>
            </h2>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start and grow your business, all under one roof
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover-lift cursor-pointer group border-2 hover:border-primary smooth-transition">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-2.5 group-hover:scale-110 smooth-transition">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xs mb-1.5 group-hover:text-primary smooth-transition">
                        {service.name}
                      </h3>
                      <p className="text-[10px] text-muted-foreground">{service.desc}</p>
                      <div className="mt-2 flex items-center text-primary text-[10px] font-medium opacity-0 group-hover:opacity-100 smooth-transition">
                        Learn More <ArrowRight className="w-2.5 h-2.5 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-2 text-[10px]">Why Choose Us</Badge>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Why <span className="gradient-text">10,000+ Businesses</span> Trust Us
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover-lift border-2 hover:border-primary smooth-transition">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-3 shine-effect">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1.5">{benefit.title}</h3>
                    <p className="text-[10px] text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-2 text-[10px]">Simple Process</Badge>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Get your business license in 4 simple steps
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: '20%' }} />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="text-center h-full hover-lift bg-card">
                  <CardContent className="p-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-3 shine-effect relative z-10">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1.5">{step.title}</h3>
                    <p className="text-[10px] text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="animated-gradient text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <CardContent className="p-8 md:p-10 text-center relative z-10">
                <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">
                  Ready to Launch Your Business?
                </h2>
                <p className="text-xs md:text-sm mb-5 opacity-90 max-w-2xl mx-auto">
                  Join 10,000+ successful businesses. Get started today with free consultation
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                  <Button size="sm" variant="secondary" className="font-semibold text-xs px-5 group">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="sm" variant="outline" className="font-semibold text-xs px-5 border-white text-white hover:bg-white/10">
                    Call Now: +91 98765 43210
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-2 text-[10px]">Testimonials</Badge>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-5">
                    <div className="flex gap-0.5 mb-2.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-2.5">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-xs">{review.name}</div>
                        <div className="text-[10px] text-muted-foreground">{review.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Badge className="mb-2 text-[10px]">FAQ</Badge>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-2.5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-effect rounded-lg px-4 border-2 hover:border-primary smooth-transition"
                >
                  <AccordionTrigger className="text-left text-xs font-semibold hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[10px] text-muted-foreground pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}