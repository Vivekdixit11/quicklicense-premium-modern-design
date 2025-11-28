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
  Radio,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  Wifi,
  AlertCircle,
  Award,
  Target,
  TrendingUp,
  HeadphonesIcon,
  FileCheck,
  Smartphone,
  Laptop,
  Signal,
  Satellite,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Legal Import/Sale",
    description: "Legally import and sell wireless devices in India with WPC approval",
  },
  {
    icon: Award,
    title: "DoT Certified",
    description: "Official approval from Department of Telecommunications, Government of India",
  },
  {
    icon: TrendingUp,
    title: "Market Access",
    description: "Access Indian market for wireless, bluetooth, and WiFi products",
  },
  {
    icon: Target,
    title: "Customs Clearance",
    description: "Smooth customs clearance for imported wireless equipment",
  },
];

const applicableProducts = [
  {
    category: "Wireless Devices",
    icon: Wifi,
    items: ["WiFi routers", "Wireless access points", "WiFi dongles", "Wireless modems", "WiFi cameras", "Smart home devices"],
  },
  {
    category: "Bluetooth Products",
    icon: Smartphone,
    items: ["Bluetooth speakers", "Wireless earphones", "Bluetooth headsets", "Smartwatches", "Fitness trackers", "Wireless keyboards"],
  },
  {
    category: "Communication Equipment",
    icon: Signal,
    items: ["Walkie talkies", "Two-way radios", "CB radios", "Satellite phones", "RF transmitters", "Wireless microphones"],
  },
  {
    category: "IoT & Smart Devices",
    icon: Satellite,
    items: ["IoT sensors", "GPS trackers", "Smart meters", "Drones", "Wireless surveillance", "Telemetry devices"],
  },
];

const documents = [
  "Company registration certificate (GST/Import-Export License)",
  "PAN and Aadhar of authorized signatory",
  "Product technical specifications and datasheet",
  "Test reports from NABL/BIS approved labs",
  "User manual and product brochure",
  "Frequency range and power output details",
  "Product images (front, back, label)",
  "Authorization letter from manufacturer (for importers)",
  "Previous WPC certificates (if any)",
];

const process = [
  {
    step: "01",
    title: "Product Testing",
    description: "Get product tested at NABL/TEC approved lab for compliance with WPC standards",
    duration: "7-10 days",
  },
  {
    step: "02",
    title: "Application Submission",
    description: "Submit WPC application on SARAL Sanchar portal with test reports and documents",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "DoT Review",
    description: "Department of Telecommunications reviews technical compliance and documentation",
    duration: "10-15 days",
  },
  {
    step: "04",
    title: "WPC/ETA Certificate",
    description: "Receive WPC Equipment Type Approval (ETA) certificate valid for 5 years",
    duration: "1-2 days",
  },
];

const wpcTypes = [
  {
    type: "WPC ETA",
    fullName: "Equipment Type Approval",
    description: "For wireless equipment operating in licensed frequency bands",
    validity: "5 years",
    color: "from-blue-500 to-[#23A8DD]",
  },
  {
    type: "WPC SES",
    fullName: "Standing Equipment Security",
    description: "For telecom security equipment and encryption devices",
    validity: "5 years",
    color: "from-[#E2F6F8]0 to-[#23A8DD]",
  },
];

const faqs = [
  {
    question: "What is WPC Approval?",
    answer: "WPC (Wireless Planning & Coordination) approval is mandatory certification from Department of Telecommunications for all wireless equipment operating in India. It ensures devices comply with Indian radio frequency standards and don't cause interference.",
  },
  {
    question: "Which products need WPC approval?",
    answer: "All wireless devices including WiFi routers, bluetooth speakers, wireless headphones, walkie-talkies, IoT devices, drones, GPS trackers, and any equipment using radio frequencies require WPC approval before import or sale in India.",
  },
  {
    question: "What is ETA certificate?",
    answer: "ETA (Equipment Type Approval) is the WPC certificate issued for wireless equipment. It's valid for 5 years and allows legal import, manufacture, and sale of approved wireless products in India.",
  },
  {
    question: "How long does WPC approval take?",
    answer: "WPC approval typically takes 20-30 days including product testing (7-10 days) and DoT processing (10-15 days). Timeline depends on product complexity and test report quality.",
  },
  {
    question: "Is product testing mandatory for WPC?",
    answer: "Yes, products must be tested at NABL/TEC approved labs for RF parameters, SAR values, and compliance with WPC standards. Test reports are mandatory for WPC application submission.",
  },
  {
    question: "Can I sell products without WPC approval?",
    answer: "No, selling wireless devices without WPC approval is illegal and can result in product seizure, penalties up to ₹5 lakhs, and imprisonment. All wireless products must have valid WPC certification.",
  },
];



export default function WPCPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Wireless Equipment"
        title="WPC Approval"
        subtitle="Starting at ₹11,999"
        description="Get Wireless Planning & Coordination approval from DoT for importing and selling wireless devices in India. Mandatory for Bluetooth, WiFi, RF products."
        highlights={[
          "DoT certified approval",
          "Legal import and sale",
          "Product testing support",
          "Lifetime product validity"
        ]}
        stats={[
          { value: "30-45", label: "Days" },
          { value: "Lifetime", label: "Validity" },
          { value: "2,000+", label: "Approved" }
        ]}
      />

      {/* WPC Types Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">WPC Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Types of <span className="gradient-text">WPC Certification</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {wpcTypes.map((wpc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${wpc.color} flex items-center justify-center mb-6`}>
                      <Radio className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{wpc.type}</h3>
                    <p className="text-sm text-[#23A8DD] font-medium mb-4">{wpc.fullName}</p>
                    <p className="text-muted-foreground mb-4">{wpc.description}</p>
                    <Badge variant="outline" className="text-[#083E6B] border-[#E2F6F8]">
                      <Clock className="w-3 h-3 mr-1" />
                      Validity: {wpc.validity}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Products */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Product Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Products Requiring <span className="gradient-text">WPC Approval</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All wireless equipment using radio frequencies need WPC certification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicableProducts.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#23A8DD] to-blue-600 flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-4">{category.category}</h3>
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
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Why WPC?</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Benefits of <span className="gradient-text">WPC Approval</span>
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E2F6F8] to-blue-100 flex items-center justify-center mx-auto mb-6">
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
      <section id="process" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              How to Get <span className="gradient-text">WPC Approval</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4-step process with lab testing and DoT approval
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E2F6F8] via-blue-300 to-[#E2F6F8] hidden md:block" />

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
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#23A8DD] to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
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
              <Badge className="mb-6 bg-[#E2F6F8] text-[#083E6B]">Documentation</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Documents for <span className="gradient-text">WPC Approval</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Keep these documents ready for WPC application
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
              <Card className="border-2 border-[#E2F6F8] bg-gradient-to-br from-[#E2F6F8] to-blue-50">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#23A8DD] to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <HeadphonesIcon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Testing Support</h3>
                    <p className="text-muted-foreground">
                      Complete lab testing coordination
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">NABL approved lab coordination</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">RF compliance testing</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">SAR testing (if applicable)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Complete test report preparation</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-[#23A8DD] hover:bg-[#083E6B]">
                    Get Testing Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
      <section className="section-padding bg-gradient-to-br from-[#23A8DD] via-blue-600 to-[#23A8DD] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Get WPC Approval?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Launch your wireless products in India with Quick License. 
              Complete testing support, fast DoT approval, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Your WPC Application
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


