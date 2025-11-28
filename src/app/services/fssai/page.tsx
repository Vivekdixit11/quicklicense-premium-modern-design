"use client";

import dynamicLoad from "next/dynamic";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import {
  Utensils,
  CheckCircle2,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Phone,
} from "lucide-react";

// Lazy load heavy components
const Footer = dynamicLoad(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamicLoad(() => import("@/components/WhatsAppButton"), { ssr: false });
const StickyContactForm = dynamicLoad(() => import("@/components/StickyContactForm"), { ssr: false });

const benefits = [
  {
    icon: Shield,
    title: "Legal Compliance",
    desc: "Mandatory for all food businesses in India",
  },
  {
    icon: CheckCircle2,
    title: "Customer Trust",
    desc: "Build credibility and consumer confidence",
  },
  {
    icon: Utensils,
    title: "Quality Assurance",
    desc: "Ensure food safety standards are met",
  },
  {
    icon: FileText,
    title: "Business Growth",
    desc: "Required for scaling and partnerships",
  },
];

const process = [
  { step: "1", title: "Category Selection", desc: "Choose between Basic, State, or Central license", time: "1 Day" },
  { step: "2", title: "Document Collection", desc: "Gather all required documents and photos", time: "1-2 Days" },
  { step: "3", title: "Application Filing", desc: "Submit application on FSSAI portal", time: "1 Day" },
  { step: "4", title: "Inspection (if required)", desc: "FSSAI may conduct premises inspection", time: "5-10 Days" },
  { step: "5", title: "License Issuance", desc: "Receive FSSAI license certificate", time: "7-15 Days" },
];

const documents = [
  "Identity proof of proprietor/partners",
  "Passport size photographs",
  "Address proof of business premises",
  "List of food products/categories",
  "Layout plan of premises",
  "Partnership deed/incorporation certificate",
  "NOC from municipality/local authority",
  "Water test report (for manufacturers)",
];

const whoNeeds = [
  "Restaurants and cafes",
  "Food manufacturers and processors",
  "Food importers and exporters",
  "Food storage and warehouses",
  "Cloud kitchens and home bakers",
  "Food distributors and retailers",
  "Catering services",
  "E-commerce food businesses",
];

const licenseTypes = [
  {
    type: "Basic Registration",
    turnover: "Up to ₹12 Lakhs",
    price: "₹2,499",
    desc: "For small food businesses and petty retailers",
  },
  {
    type: "State License",
    turnover: "₹12 Lakhs - ₹20 Crores",
    price: "₹3,999",
    desc: "For medium-sized food businesses",
  },
  {
    type: "Central License",
    turnover: "Above ₹20 Crores",
    price: "₹6,999",
    desc: "For large-scale food businesses and importers",
  },
];

export default function FSSAIPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Food License"
        title="FSSAI License Registration"
        subtitle="Starting at ₹999"
        description="Get your FSSAI food license in 15-20 days. Mandatory for all food businesses in India with 100% online process."
        highlights={[
          "Legal compliance for all food businesses",
          "100% online process with expert support",
          "All license types - Basic, State, Central",
          "Lifetime renewal support included"
        ]}
        stats={[
          { value: "15-20", label: "Days" },
          { value: "10,000+", label: "Registered" },
          { value: "99%", label: "Success" }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  What is <span className="gradient-text">FSSAI License?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    FSSAI (Food Safety and Standards Authority of India) license is a mandatory 
                    registration/license for food businesses in India. It ensures that food products 
                    meet safety standards and are fit for human consumption.
                  </p>
                  <p>
                    Every food business operator, whether big or small, manufacturer, trader, or 
                    restaurant, must obtain FSSAI registration or license to legally operate in India.
                  </p>
                </div>
              </div>

              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Types of <span className="gradient-text">FSSAI License</span>
                </h2>
                <div className="grid gap-6">
                  {licenseTypes.map((license, index) => (
                    <Card key={index} className="hover-lift border-2 hover:border-primary smooth-transition">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-heading font-semibold text-xl mb-1">{license.type}</h3>
                            <p className="text-sm text-muted-foreground">{license.desc}</p>
                          </div>
                          <Badge className="text-lg px-4 py-2">{license.price}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <FileText className="w-4 h-4" />
                          Annual Turnover: {license.turnover}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div



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
              </div>

              <div



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
              </div>

              <div



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
              </div>

              <div



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
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                  Ready to Get Your <span className="gradient-text">FSSAI License?</span>
                </h2>
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-[#E2F6F8]0/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="font-heading font-semibold text-2xl mb-4">
                      Start Your FSSAI Registration Today
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our experts will guide you through the entire FSSAI license registration process. 
                      Get your food business compliant with all legal requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white font-semibold hover:shadow-lg smooth-transition" asChild>
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
              </div>
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


