"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactForm from "@/components/StickyContactForm";
import {
  Globe,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Plane,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Import/Export Freedom",
    desc: "Legally import and export goods worldwide",
  },
  {
    icon: Shield,
    title: "Lifetime Validity",
    desc: "One-time registration, valid forever",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Access international markets and suppliers",
  },
  {
    icon: Plane,
    title: "Customs Clearance",
    desc: "Essential for customs documentation",
  },
];

const process = [
  { step: "1", title: "Digital Signature", desc: "Obtain Class 3 Digital Signature Certificate", time: "1 Day" },
  { step: "2", title: "Company Documents", desc: "Prepare company and address documents", time: "1 Day" },
  { step: "3", title: "DGFT Application", desc: "File application on DGFT portal", time: "1 Day" },
  { step: "4", title: "Document Verification", desc: "DGFT verifies submitted documents", time: "1-2 Days" },
  { step: "5", title: "IEC Code Issued", desc: "Receive 10-digit IEC number", time: "1-2 Days" },
];

const documents = [
  "PAN Card of the company/proprietor",
  "Aadhaar Card (for proprietorship)",
  "Passport size photograph",
  "Bank certificate or cancelled cheque",
  "Registered office address proof",
  "Current account IFSC code",
  "Email ID and mobile number",
  "Digital Signature Certificate",
];

const whoNeeds = [
  "Import/export businesses",
  "E-commerce sellers (cross-border)",
  "Manufacturing companies",
  "Trading companies",
  "Service exporters",
  "Freelancers receiving foreign payments",
];

export default function IECPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Import Export Code"
        title="IEC Code Registration"
        subtitle="Starting at ₹2,499"
        description="Get your Import Export Code in 3-5 days. Mandatory for international trade with lifetime validity and PAN-based digital IEC."
        highlights={[
          "Lifetime validity - One time only",
          "PAN-based digital IEC available",
          "Mandatory for customs clearance",
          "100% online process"
        ]}
        stats={[
          { value: "3-5", label: "Days" },
          { value: "Lifetime", label: "Validity" },
          { value: "2,000+", label: "Issued" }
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
                  What is <span className="gradient-text">IEC Code?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Import Export Code (IEC) is a 10-digit unique business identification number issued by the 
                    Directorate General of Foreign Trade (DGFT). It's mandatory for any business or individual 
                    who wants to import or export goods and services from India.
                  </p>
                  <p>
                    IEC is a lifetime registration and doesn't require any renewal. Once obtained, the code can 
                    be used for all import/export transactions throughout the business lifetime.
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
                  Documents <span className="gradient-text">Required</span>
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
                  Ready to Get Your <span className="gradient-text">IEC Code?</span>
                </h2>
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-blue-500/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="font-heading font-semibold text-2xl mb-4">
                      Start Your IEC Registration Today
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Get your Import Export Code and start trading internationally. Our experts will handle 
                      the entire registration process for you.
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


