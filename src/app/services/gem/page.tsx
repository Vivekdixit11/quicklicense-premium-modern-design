"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Target,
  HeadphonesIcon,
  FileCheck,
  IndianRupee,
  Briefcase,
  Package,
  Globe,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Pan-India Market Access",
    description: "Reach all central & state government departments and PSUs across India",
  },
  {
    icon: IndianRupee,
    title: "Direct Government Business",
    description: "Sell directly to government buyers without intermediaries",
  },
  {
    icon: TrendingUp,
    title: "Priority to MSMEs",
    description: "Exclusive benefits and preference for micro, small & medium enterprises",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description: "Fair bidding system with complete transparency and timely payments",
  },
];

const sellerCategories = [
  {
    category: "MSE Seller",
    icon: Briefcase,
    description: "Micro and Small Enterprises with Udyam registration get priority",
    benefits: ["No registration fee", "Tender preference", "Early payment release", "No EMD required"],
    color: "from-[#23A8DD] to-[#23A8DD]",
  },
  {
    category: "Startup Seller",
    icon: TrendingUp,
    description: "DPIIT recognized startups with special procurement benefits",
    benefits: ["Relaxed criteria", "Startup exemptions", "Innovation support", "Special categories"],
    color: "from-blue-500 to-[#23A8DD]",
  },
  {
    category: "Women Entrepreneur",
    icon: Users,
    description: "Women-owned businesses with special government procurement support",
    benefits: ["Priority listing", "Special tenders", "Financial assistance", "Skill development"],
    color: "from-[#23A8DD] to-[#23A8DD]",
  },
  {
    category: "General Seller",
    icon: Package,
    description: "All other businesses including large enterprises and traders",
    benefits: ["Wide product range", "Volume business", "PSU orders", "Repeat purchases"],
    color: "from-[#E2F6F8]0 to-[#23A8DD]",
  },
];

const documents = [
  "PAN card of the business",
  "GST registration certificate",
  "Business registration documents",
  "Bank account details & cancelled cheque",
  "Udyam/MSME certificate (if applicable)",
  "Startup recognition certificate (if applicable)",
  "Product catalogs and specifications",
  "Quality certifications (ISO, BIS, etc.)",
  "Digital signature certificate (DSC)",
  "Aadhar card of authorized signatory",
];

const process = [
  {
    step: "01",
    title: "Initial Registration",
    description: "Create GeM account with basic business details and upload required documents",
    duration: "1 day",
  },
  {
    step: "02",
    title: "OEM/Seller Profile",
    description: "Complete seller profile, add product categories, and get brand approvals",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Product Catalog",
    description: "Upload products with detailed specifications, images, and pricing",
    duration: "3-5 days",
  },
  {
    step: "04",
    title: "Verification & Activation",
    description: "GeM team verifies documents and products, then activates seller account",
    duration: "5-7 days",
  },
];

const productCategories = [
  {
    name: "Office & Stationery",
    items: ["Furniture", "Computers & IT", "Office supplies", "Electronics"],
  },
  {
    name: "Automotive",
    items: ["Vehicles", "Spare parts", "Lubricants", "Batteries"],
  },
  {
    name: "Healthcare",
    items: ["Medical equipment", "Healthcare Products", "Laboratory items", "Consumables"],
  },
  {
    name: "Infrastructure",
    items: ["Construction materials", "Tools", "Safety equipment", "Machinery"],
  },
  {
    name: "Textiles & Apparel",
    items: ["Uniforms", "Fabrics", "PPE", "Footwear"],
  },
  {
    name: "Hospitality",
    items: ["Catering items", "Housekeeping", "Kitchen equipment", "Crockery"],
  },
];

const faqs = [
  {
    question: "What is GeM Portal?",
    answer: "GeM (Government e-Marketplace) is a national procurement portal for government buyers to purchase goods and services directly from sellers. It's a transparent, efficient online platform for government procurement launched by Government of India.",
  },
  {
    question: "Who can register as GeM seller?",
    answer: "Any business registered in India with valid PAN, GST, and bank account can register. This includes manufacturers, traders, service providers, MSMEs, startups, and large enterprises. Women entrepreneurs and MSEs get additional benefits.",
  },
  {
    question: "Is GeM registration free?",
    answer: "Yes, GeM registration is completely free for MSE (Micro & Small Enterprise) sellers with valid Udyam registration. Other sellers may need to pay nominal registration fees for certain categories.",
  },
  {
    question: "How long does GeM registration take?",
    answer: "Complete GeM registration typically takes 10-15 days including account creation, document verification, product catalog upload, and final approval from GeM team. Timeline depends on document readiness and product complexity.",
  },
  {
    question: "What products can I sell on GeM?",
    answer: "GeM covers 5000+ product categories and 300+ service categories including office supplies, IT equipment, furniture, vehicles, medical equipment, textiles, construction materials, and professional services. Check GeM portal for complete list.",
  },
  {
    question: "Do I need quality certifications for GeM?",
    answer: "Quality certifications like ISO, BIS, CE, or industry-specific certifications are required for certain product categories, especially electronics, medical equipment, and safety products. Our team helps identify required certifications for your products.",
  },
];

const biddingProcess = [
  {
    title: "Direct Purchase",
    description: "Government buyers purchase directly from your catalog at listed prices",
  },
  {
    title: "L1 Bidding",
    description: "Lowest price bidding where L1 (lowest bidder) wins the order",
  },
  {
    title: "Reverse Auction",
    description: "Real-time bidding where sellers compete to offer best price",
  },
  {
    title: "RA with Caution Money",
    description: "Reverse auction with earnest money deposit (EMD) for high-value orders",
  },
];

export default function GeMPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Government e-Marketplace"
        title="GeM Registration"
        subtitle="Starting at ₹4,999"
        description="Register on Government e-Marketplace and access ₹1 lakh crore market. Sell to 50,000+ government offices across India."
        highlights={[
          "Access to pan-India government market",
          "Transparent bidding process",
          "Guaranteed timely payments",
          "No tender fees or commissions"
        ]}
        stats={[
          { value: "50,000+", label: "Buyers" },
          { value: "₹1L Cr", label: "Market" },
          { value: "5,000+", label: "Sellers" }
        ]}
      />

      {/* Seller Categories Section */}
      <section id="categories" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Seller Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              GeM <span className="gradient-text">Seller Types</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right seller category based on your business profile
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {sellerCategories.map((seller, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${seller.color} flex items-center justify-center mb-6`}>
                      <seller.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{seller.category}</h3>
                    <p className="text-muted-foreground mb-6">{seller.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Key Benefits:</p>
                      {seller.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[#23A8DD] flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Product Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What You Can Sell on <span className="gradient-text">GeM Portal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              5000+ product categories available for government procurement
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-[#23A8DD]" />
                      {category.name}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#23A8DD]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Why GeM?</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Benefits of <span className="gradient-text">GeM Registration</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8] flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-[#23A8DD]" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bidding Process */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Bidding Options</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              GeM <span className="gradient-text">Bidding Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple bidding options for government procurement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {biddingProcess.map((bid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-3">{bid.title}</h3>
                    <p className="text-sm text-muted-foreground">{bid.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Registration Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              How to <span className="gradient-text">Register on GeM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4-step streamlined GeM registration process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E2F6F8] via-[#84D3FF] to-[#E2F6F8] hidden md:block" />

              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                      {step.step}
                    </div>
                    <Card className="flex-1 hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                          <Badge variant="outline" className="text-[#083E6B] border-[#E2F6F8]">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-[#E2F6F8] text-[#083E6B]">Required Documents</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Documents for <span className="gradient-text">GeM Registration</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Keep these documents ready for smooth GeM seller registration
              </p>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#E2F6F8] border border-[#E2F6F8]"
                  >
                    <FileCheck className="w-5 h-5 text-[#23A8DD] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-2 border-[#E2F6F8] bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center mx-auto mb-4">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Complete GeM Support</h3>
                    <p className="text-muted-foreground">
                      End-to-end assistance for GeM portal
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Account creation & verification</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Product catalog management</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Bidding strategy & support</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Order fulfillment guidance</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-[#23A8DD] hover:bg-[#083E6B]">
                    Get GeM Expert Help
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="section-padding bg-gradient-to-b from-gray-50 to-[#E2F6F8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Ready to Register on <span className="gradient-text">GeM Portal?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start selling to government departments and PSUs across India with our expert GeM registration support
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#23A8DD] bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Complete GeM Registration Services
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our experts will help you with account creation, product catalog setup, bidding strategies, 
                  and complete compliance. Get access to government procurement opportunities across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white font-semibold hover:shadow-lg smooth-transition" asChild>
                    <Link href="/contact">
                      Start GeM Registration <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold" asChild>
                    <Link href="tel:+919876543210">
                      <Phone className="mr-2 w-5 h-5" /> Call Expert
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-3 flex items-start gap-3">
                      <span className="text-[#23A8DD] flex-shrink-0">Q.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#23A8DD] via-[#23A8DD] to-[#23A8DD] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Start Selling to Government?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Register on GeM portal with Quick License. Expert assistance for seller registration, 
              product catalog, bidding, and order fulfillment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start GeM Registration
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white text-white hover:bg-white hover:text-[#23A8DD]">
                <HeadphonesIcon className="w-5 h-5" />
                Talk to Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}


