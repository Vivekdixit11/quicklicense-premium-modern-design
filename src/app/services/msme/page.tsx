"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactForm from "@/components/StickyContactForm";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Award,
  Percent,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Percent,
    title: "Easy Bank Loans",
    desc: "Priority lending at lower interest rates",
  },
  {
    icon: Award,
    title: "Government Subsidies",
    desc: "Access to various government schemes",
  },
  {
    icon: Shield,
    title: "Patent Benefits",
    desc: "80% subsidy on patent registration",
  },
  {
    icon: TrendingUp,
    title: "Tax Benefits",
    desc: "Various tax exemptions and benefits",
  },
];

const process = [
  { step: "1", title: "Aadhaar Verification", desc: "Verify your Aadhaar for Udyam registration", time: "1 Day" },
  { step: "2", title: "Business Details", desc: "Provide business information and investment details", time: "1 Day" },
  { step: "3", title: "Document Upload", desc: "Upload required business documents", time: "1 Day" },
  { step: "4", title: "Application Review", desc: "Our experts review your application", time: "1 Day" },
  { step: "5", title: "Certificate Issued", desc: "Receive Udyam registration certificate", time: "Instant" },
];

const documents = [
  "Aadhaar Card of proprietor/partner/director",
  "PAN Card of business",
  "Business name and address",
  "Bank account details",
  "Investment in plant & machinery",
  "Annual turnover details",
  "Employee information",
  "Business activity details",
];

const whoNeeds = [
  "Manufacturing businesses",
  "Service-based companies",
  "Small retailers and traders",
  "Startup companies",
  "Home-based businesses",
  "Export-oriented businesses",
];

const governmentBenefits = [
  "Collateral-free credit up to ₹1 crore",
  "Interest subsidy on loans",
  "Protection against delayed payments",
  "Lower interest rates (2-3% less)",
  "80% subsidy on patent costs",
  "50% subsidy on trademark",
  "One-time settlement of NPAs",
  "Priority in government tenders",
  "Exemption from direct tax laws",
  "ISO certification reimbursement",
  "Bar code registration subsidy",
  "Quality certification scheme benefits",
];

export default function MSMEPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Udyam Registration"
        title="MSME Registration"
        subtitle="Starting at ₹999"
        description="Get your Udyam registration in 3 days and unlock government benefits. Easy loans, tax benefits, and subsidy access for your business."
        highlights={[
          "Easy bank loan approvals",
          "Government tender priority",
          "Tax and subsidy benefits",
          "Lifetime validity"
        ]}
        stats={[
          { value: "3", label: "Days" },
          { value: "Free", label: "Govt Portal" },
          { value: "8,000+", label: "Registered" }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  What is <span className="gradient-text">MSME/Udyam Registration?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    MSME (Micro, Small and Medium Enterprises) Registration, now known as Udyam Registration, 
                    is a government registration that provides recognition and numerous benefits to small businesses 
                    in India.
                  </p>
                  <p>
                    The new Udyam Registration system is completely online, Aadhaar-based, and free of cost. 
                    It replaces the older Udyog Aadhaar system and provides instant registration with lifetime validity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Key <span className="gradient-text">Benefits</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-[#E2F6F8]0/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Government <span className="gradient-text">Benefits</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {governmentBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Who <span className="gradient-text">Needs This?</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {whoNeeds.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Registration <span className="gradient-text">Process</span>
                </h2>
                <div className="space-y-4">
                  {process.map((item, index) => (
                    <Card key={index} className="hover-lift border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#23A8DD] flex items-center justify-center text-white font-bold text-lg">
                              {item.step}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                              <Badge variant="outline" className="ml-4">
                                <Clock className="w-3 h-3 mr-1" />
                                {item.time}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Information <span className="gradient-text">Required</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{doc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download Complete Checklist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                  Ready to Get <span className="gradient-text">MSME Registered?</span>
                </h2>
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-blue-500/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="font-heading font-semibold text-2xl mb-4">
                      Start Your Udyam Registration Today
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Get MSME/Udyam registration and unlock government subsidies, easy loans, and tax benefits. 
                      Our experts will complete your registration in just 3 days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-[#23A8DD] text-white font-semibold hover:shadow-lg smooth-transition" asChild>
                        <Link href="/contact">
                          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="font-semibold" asChild>
                        <Link href="tel:+919876543210">
                          <Phone className="mr-2 w-5 h-5" /> Call Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <StickyContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}


