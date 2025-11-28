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
  Recycle,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  AlertCircle,
  Award,
  Target,
  Zap,
  HeadphonesIcon,
  FileCheck,
  Package,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Legal Compliance",
    description: "Stay compliant with CPCB regulations and avoid penalties up to ₹1 lakh per violation",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Contribute to sustainable waste management and circular economy initiatives",
  },
  {
    icon: Award,
    title: "Government Recognition",
    description: "Get official CPCB certification for your environmental responsibility",
  },
  {
    icon: TrendingUp,
    title: "Market Advantage",
    description: "Build brand reputation and gain competitive edge with eco-friendly practices",
  },
];

const eprCategories = [
  {
    category: "Plastic Waste EPR",
    icon: Package,
    items: ["Plastic packaging", "Multi-layered plastics", "Carry bags", "Plastic commodities"],
    penalty: "₹1 lakh + imprisonment",
  },
  {
    category: "E-Waste EPR",
    icon: Zap,
    items: ["Electronics", "IT equipment", "Consumer appliances", "Batteries"],
    penalty: "₹1 lakh per violation",
  },
  {
    category: "Battery Waste EPR",
    icon: Target,
    items: ["Lithium batteries", "Lead-acid batteries", "Industrial batteries", "EV batteries"],
    penalty: "₹50,000 - ₹1 lakh",
  },
  {
    category: "Tyre Waste EPR",
    icon: Recycle,
    items: ["Vehicle tyres", "Industrial tyres", "Retreaded tyres", "Waste tyres"],
    penalty: "₹1 lakh per violation",
  },
];

const documents = [
  "Business registration certificate (GST/Company/LLP)",
  "PAN and Aadhar of authorized signatory",
  "Product details and packaging specifications",
  "Manufacturing/Import license",
  "List of products covered under EPR",
  "Waste management plan",
  "Previous year's production/import data",
  "Authorization from CPCB (if applicable)",
];

const process = [
  {
    step: "01",
    title: "Document Collection",
    description: "Submit business documents, product details, and waste management plan",
    duration: "1 day",
  },
  {
    step: "02",
    title: "Application Filing",
    description: "File EPR application on CPCB portal with complete documentation",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "CPCB Review",
    description: "Central Pollution Control Board reviews and verifies your application",
    duration: "7-15 days",
  },
  {
    step: "04",
    title: "EPR Certificate",
    description: "Receive EPR registration certificate and compliance guidelines",
    duration: "1 day",
  },
];

const faqs = [
  {
    question: "What is EPR Registration?",
    answer: "Extended Producer Responsibility (EPR) is a mandatory registration for producers, importers, and brand owners to manage end-of-life disposal of products. It ensures environmental compliance for plastic, e-waste, batteries, and tyres.",
  },
  {
    question: "Who needs EPR Registration?",
    answer: "Manufacturers, importers, brand owners dealing with plastic packaging, electronics, batteries, or tyres must obtain EPR registration. This includes e-commerce companies, retailers, and producers with annual turnover above prescribed limits.",
  },
  {
    question: "What is the penalty for non-compliance?",
    answer: "Non-compliance can result in penalties up to ₹1 lakh per violation, imprisonment up to 5 years, and business closure. Regular compliance is mandatory to avoid legal action by CPCB.",
  },
  {
    question: "How long does EPR registration take?",
    answer: "EPR registration typically takes 10-20 days from document submission. Timeline depends on CPCB processing and completeness of application. We ensure fastest approval with expert guidance.",
  },
  {
    question: "Is EPR registration mandatory for e-commerce?",
    answer: "Yes, e-commerce companies selling products in plastic packaging or electronics must obtain EPR registration. This applies to both domestic sellers and importers selling through online platforms.",
  },
];

export default function EPRPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Environmental Compliance"
        title="EPR Registration"
        subtitle="Starting at ₹7,999"
        description="Get Extended Producer Responsibility registration for plastic, e-waste, battery, or tire waste. Mandatory CPCB compliance to avoid ₹1 lakh penalty."
        highlights={[
          "CPCB compliance certification",
          "Avoid ₹1 lakh penalty",
          "Environmental sustainability",
          "Annual renewal support"
        ]}
        stats={[
          { value: "15-20", label: "Days" },
          { value: "1 Year", label: "Validity" },
          { value: "1,000+", label: "Compliant" }
        ]}
      />

      {/* EPR Categories Section */}
      <section id="categories" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">EPR Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Types of <span className="gradient-text">EPR Registration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the EPR category based on your products and ensure environmental compliance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {eprCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-2">{category.category}</h3>
                        <Badge variant="outline" className="text-xs text-[#083E6B] border-[#E2F6F8]">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Penalty: {category.penalty}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[#23A8DD] flex-shrink-0" />
                          <span>{item}</span>
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

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Why EPR?</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Benefits of <span className="gradient-text">EPR Registration</span>
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

      {/* Process Section */}
      <section id="process" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              How to Get <span className="gradient-text">EPR Registration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4-step hassle-free process with expert guidance at every stage
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
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

      {/* Documents Required */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-[#E2F6F8] text-[#083E6B]">Documentation</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Documents Required for <span className="gradient-text">EPR Registration</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Keep these documents ready for smooth and fast EPR registration process
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
                      <HeadphonesIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Need Help?</h3>
                    <p className="text-muted-foreground">
                      Our EPR experts are here to assist you
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Free consultation call</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Document preparation support</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Application filing assistance</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Post-registration compliance</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-[#23A8DD] hover:bg-[#083E6B]">
                    Talk to Expert Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
        <div className="container-custom">
          <Card className="border-2 border-[#23A8DD]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Get <span className="gradient-text">EPR Registration?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our expert team for personalized assistance with EPR registration and ensure complete compliance with CPCB regulations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white hover:from-[#083E6B] hover:to-[#083E6B]" asChild>
                  <Link href="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+919891614601">Call Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
              Ready to Get EPR Registered?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 1000+ businesses ensuring environmental compliance with Quick License. 
              Expert support, fast processing, and lifetime assistance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Your EPR Registration
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


