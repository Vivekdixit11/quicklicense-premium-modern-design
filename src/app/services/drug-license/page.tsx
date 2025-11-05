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
  PillBottle,
  CheckCircle2,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Award,
  Building,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Legal Compliance",
    desc: "Mandatory for pharmaceutical businesses",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Ensures drug safety and quality standards",
  },
  {
    icon: Building,
    title: "Business Credibility",
    desc: "Build trust with customers and partners",
  },
  {
    icon: CheckCircle2,
    title: "Government Approved",
    desc: "State drug authority recognition",
  },
];

const process = [
  { step: "1", title: "Document Preparation", desc: "Gather all required documents and certificates", time: "3-5 Days" },
  { step: "2", title: "Application Filing", desc: "Submit Form 19/20/21 to State Drug Authority", time: "2-3 Days" },
  { step: "3", title: "Site Inspection", desc: "Drug inspector visits premises for verification", time: "10-15 Days" },
  { step: "4", title: "Compliance Check", desc: "Ensure all requirements are met", time: "5-7 Days" },
  { step: "5", title: "License Approval", desc: "State authority reviews and approves", time: "7-10 Days" },
  { step: "6", title: "License Issued", desc: "Receive drug license certificate", time: "3-5 Days" },
];

const documents = [
  "Rent agreement or ownership proof",
  "Layout plan of premises",
  "Qualification certificate of pharmacist",
  "Pharmacist registration certificate",
  "List of drugs to be stocked/manufactured",
  "Manufacturing license (if applicable)",
  "Proprietor/company documents",
  "NOC from owner/society",
  "Passport size photographs",
  "Affidavit on stamp paper",
];

const whoNeeds = [
  "Pharmaceutical manufacturers",
  "Medical stores and chemists",
  "Drug wholesalers and distributors",
  "Online pharmacy platforms",
  "Ayurvedic medicine manufacturers",
  "Cosmetic drug manufacturers",
  "Medical device companies",
  "Hospital pharmacies",
];

const licenseTypes = [
  {
    form: "Form 20B",
    type: "Retail Drug License",
    desc: "For medical stores selling medicines to end consumers",
    price: "₹8,999",
  },
  {
    form: "Form 21B",
    type: "Wholesale Drug License",
    desc: "For wholesalers and distributors of drugs",
    price: "₹9,999",
  },
  {
    form: "Form 25 & 28",
    type: "Manufacturing License",
    desc: "For pharmaceutical drug manufacturing units",
    price: "₹19,999",
  },
];

const pricing = {
  price: "₹8,999",
  originalPrice: "₹14,999",
  includes: [
    "Drug license consultation",
    "Document preparation",
    "Form filling (20B/21B)",
    "Application submission",
    "Inspection coordination",
    "Follow-up with authorities",
    "Compliance guidance",
    "License certificate",
    "5-year validity",
    "Renewal support",
    "Amendment assistance",
    "Expert support",
  ],
};

export default function DrugLicensePage() {
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
              <Badge className="mb-6 px-4 py-2">Pharmaceutical License</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
                <span className="gradient-text">Drug License</span> Registration
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Get your Drug License (Form 20B/21B) in 30-45 days. Mandatory for pharmacies, 
                medical stores, and pharmaceutical businesses.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold gradient-text">{pricing.price}</span>
                <span className="text-2xl text-muted-foreground line-through">{pricing.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">Save 40%</Badge>
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
                <PillBottle className="w-full h-64 text-primary opacity-10" />
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
                  What is a <span className="gradient-text">Drug License?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    A Drug License is a mandatory legal authorization required for any business involved in 
                    the sale, storage, or distribution of pharmaceutical drugs in India. It's issued by the 
                    State Drug Control Authority under the Drugs and Cosmetics Act, 1940.
                  </p>
                  <p>
                    The license ensures that the premises meet required standards, employ qualified pharmacists, 
                    and maintain proper storage conditions for medicines. Different forms (20B, 21B) are required 
                    for retail and wholesale drug businesses respectively.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Types of <span className="gradient-text">Drug Licenses</span>
                </h2>
                <div className="space-y-6">
                  {licenseTypes.map((license, index) => (
                    <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline">{license.form}</Badge>
                              <h3 className="font-heading font-semibold text-xl">{license.type}</h3>
                            </div>
                            <p className="text-muted-foreground">{license.desc}</p>
                          </div>
                          <div className="ml-6">
                            <div className="text-2xl font-bold gradient-text">{license.price}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
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
                  Registration <span className="gradient-text">Process</span>
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
