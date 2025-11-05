"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyContactForm from "@/components/StickyContactForm";
import {
  Award,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Recognition",
    desc: "Internationally accepted quality standard",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    desc: "Increase credibility and win more tenders",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Improve processes and product quality",
  },
  {
    icon: Award,
    title: "Competitive Advantage",
    desc: "Stand out from competitors in market",
  },
];

const process = [
  { step: "1", title: "Gap Analysis", desc: "Assess current systems vs ISO requirements", time: "2-3 Days" },
  { step: "2", title: "Documentation", desc: "Prepare quality manuals and procedures", time: "5-7 Days" },
  { step: "3", title: "Implementation", desc: "Implement ISO system in your organization", time: "7-10 Days" },
  { step: "4", title: "Internal Audit", desc: "Conduct internal audit and corrections", time: "2-3 Days" },
  { step: "5", title: "Certification Audit", desc: "External audit by certification body", time: "2-3 Days" },
  { step: "6", title: "Certificate Issued", desc: "Receive ISO 9001:2015 certificate", time: "1-2 Days" },
];

const documents = [
  "Company incorporation certificate",
  "PAN card of the company",
  "GST registration certificate",
  "Company profile and brochure",
  "List of products/services",
  "Organization structure",
  "Existing quality procedures (if any)",
  "List of clients and projects",
];

const whoNeeds = [
  "Manufacturing companies",
  "Service providers",
  "IT and software companies",
  "Healthcare organizations",
  "Educational institutions",
  "Government contractors",
  "Export-oriented businesses",
  "Companies bidding for tenders",
];

const isoTypes = [
  {
    type: "ISO 9001:2015",
    desc: "Quality Management System",
    price: "₹12,999",
  },
  {
    type: "ISO 14001:2015",
    desc: "Environmental Management",
    price: "₹14,999",
  },
  {
    type: "ISO 45001:2018",
    desc: "Occupational Health & Safety",
    price: "₹14,999",
  },
  {
    type: "ISO 27001:2013",
    desc: "Information Security Management",
    price: "₹16,999",
  },
];

const pricing = {
  price: "₹12,999",
  originalPrice: "₹19,999",
  includes: [
    "Gap analysis and consultation",
    "Quality manual preparation",
    "Process documentation",
    "Procedure writing",
    "Internal audit support",
    "Management review meeting",
    "Certification body coordination",
    "External audit support",
    "ISO 9001:2015 certificate",
    "3-year validity",
    "Surveillance audit support",
    "Free amendments",
  ],
};

export default function ISOPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2">Quality Certification</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
                <span className="gradient-text">ISO Certification</span> Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Get ISO 9001:2015 certified in 20-25 days. Boost credibility, win tenders, 
                and achieve global recognition for your business.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold gradient-text">{pricing.price}</span>
                <span className="text-2xl text-muted-foreground line-through">{pricing.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">Save 35%</Badge>
              </div>
              <Button size="lg" className="animated-gradient text-white font-semibold text-lg px-8 h-14">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative glass-effect rounded-3xl p-8 hover-lift">
                <Award className="w-full h-64 text-primary opacity-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                  What is <span className="gradient-text">ISO Certification?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    ISO (International Organization for Standardization) certification demonstrates 
                    that your organization meets internationally recognized quality management standards. 
                    ISO 9001:2015 is the most widely adopted quality management system standard globally.
                  </p>
                  <p>
                    ISO certification helps businesses improve their processes, increase efficiency, 
                    and demonstrate their commitment to quality to customers and stakeholders worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Types of <span className="gradient-text">ISO Standards</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {isoTypes.map((iso, index) => (
                    <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-lg mb-1">{iso.type}</h3>
                            <p className="text-sm text-muted-foreground">{iso.desc}</p>
                          </div>
                          <Badge className="ml-4">{iso.price}</Badge>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
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
                  Key <span className="gradient-text">Benefits</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-4">
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
                  Certification <span className="gradient-text">Process</span>
                </h2>
                <div className="space-y-4">
                  {process.map((item, index) => (
                    <Card key={index} className="hover-lift border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
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
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Pricing <span className="gradient-text">Breakdown</span>
                </h2>
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-5xl font-bold gradient-text">{pricing.price}</span>
                      <span className="text-2xl text-muted-foreground line-through">{pricing.originalPrice}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-4">Package Includes:</h3>
                    <div className="space-y-3">
                      {pricing.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="w-full mt-8 animated-gradient text-white font-semibold h-14">
                      Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
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
