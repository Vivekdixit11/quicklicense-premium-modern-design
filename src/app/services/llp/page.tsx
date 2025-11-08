"use client";

import dynamicLoad from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import {
  FileText,
  CheckCircle2,
  Users,
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
  Download,
} from "lucide-react";

// Lazy load heavy components
const Footer = dynamicLoad(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamicLoad(() => import("@/components/WhatsAppButton"), { ssr: false });
const StickyContactForm = dynamicLoad(() => import("@/components/StickyContactForm"), { ssr: false });

const benefits = [
  {
    icon: Shield,
    title: "Limited Liability",
    desc: "Partners' personal assets are protected",
  },
  {
    icon: Users,
    title: "Flexible Management",
    desc: "Easy to manage with fewer compliances",
  },
  {
    icon: TrendingUp,
    title: "Separate Legal Entity",
    desc: "Independent existence from partners",
  },
  {
    icon: FileText,
    title: "Lower Costs",
    desc: "Minimal compliance and operational costs",
  },
];

const process = [
  { step: "1", title: "DSC & DPIN", desc: "Obtain Digital Signature and Designated Partner Identification Number", time: "1-2 Days" },
  { step: "2", title: "Name Approval", desc: "Reserve your LLP name with RoC", time: "1-2 Days" },
  { step: "3", title: "Document Preparation", desc: "Draft LLP Agreement and incorporation documents", time: "1 Day" },
  { step: "4", title: "File Incorporation", desc: "Submit Form FiLLiP to MCA", time: "2-3 Days" },
  { step: "5", title: "Certificate Issued", desc: "Receive Certificate of Incorporation", time: "1-2 Days" },
  { step: "6", title: "PAN & TAN", desc: "Get PAN and TAN for your LLP", time: "1 Day" },
];

const documents = [
  "PAN Card of all Partners",
  "Aadhaar Card of all Partners",
  "Passport Size Photographs",
  "Address Proof of Partners",
  "Registered Office Address Proof",
  "Rental Agreement (if applicable)",
  "NOC from Property Owner",
  "Utility Bills of Office",
];

const whoNeeds = [
  "Professional services firms",
  "Small and medium businesses",
  "Family businesses wanting flexibility",
  "Partnerships wanting limited liability",
  "Service-based businesses",
  "Consultancy firms",
];

const pricing = {
  price: "₹5,999",
  originalPrice: "₹8,499",
  includes: [
    "DSC for 2 Designated Partners",
    "DPIN for 2 Partners",
    "Name Approval & Reservation",
    "LLP Agreement Drafting",
    "Incorporation Certificate",
    "LLP PAN",
    "LLP TAN",
    "Partnership Deed",
    "Free Consultation",
    "Lifetime Support",
  ],
};

export default function LLPPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div



            >
              <Badge className="mb-6 px-4 py-2">Limited Liability Partnership</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
                <span className="gradient-text">LLP Registration</span> in 7 Days
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Get your Limited Liability Partnership registered with minimal compliance requirements. 
                Perfect for professionals and small businesses.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold gradient-text">{pricing.price}</span>
                <span className="text-2xl text-muted-foreground line-through">{pricing.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">Save 30%</Badge>
              </div>
              <Button size="lg" className="animated-gradient text-white font-semibold text-lg px-8 h-14">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div



              className="relative hidden lg:block"
            >
              <div className="relative glass-effect rounded-3xl p-8 hover-lift">
                <FileText className="w-full h-64 text-primary opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {/* What is LLP */}
              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  What is an <span className="gradient-text">LLP?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    A Limited Liability Partnership (LLP) is a hybrid business structure that combines the 
                    benefits of a partnership and a company. It offers limited liability protection to its 
                    partners while allowing flexibility in management and operations.
                  </p>
                  <p>
                    LLPs are ideal for professionals like CA firms, law firms, consultancies, and small 
                    businesses that want protection from personal liability without the compliance burden 
                    of a Private Limited Company.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div



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
              </div>

              {/* Who Needs This */}
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

              {/* Process */}
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
              </div>

              {/* Documents */}
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

              {/* Pricing */}
              <div



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
