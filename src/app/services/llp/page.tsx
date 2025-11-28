"use client";

import dynamicLoad from "next/dynamic";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
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

export default function LLPPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Partnership Structure"
        title="LLP Registration"
        subtitle="Starting at ₹6,999"
        description="Register your Limited Liability Partnership in 7-10 days. Perfect for professionals and small businesses with minimal compliance."
        highlights={[
          "Limited liability protection",
          "Flexible management structure",
          "Lower compliance than Pvt Ltd",
          "Perpetual succession"
        ]}
        stats={[
          { value: "7-10", label: "Days" },
          { value: "3,000+", label: "Registered" },
          { value: "100%", label: "Support" }
        ]}
      />

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

              {/* Get Started CTA */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Get Started with <span className="gradient-text">LLP Registration</span>
                </h2>
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-[#E2F6F8]">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-semibold text-2xl mb-4 text-center">Ready to Register Your LLP?</h3>
                    <p className="text-center text-muted-foreground mb-6">
                      Get expert assistance with complete LLP registration in just 7 days. Our professionals will handle all paperwork and compliance.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Complete documentation support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Expert legal consultation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Fast & hassle-free process</span>
                      </div>
                    </div>
                    <Button size="lg" asChild className="w-full animated-gradient text-white font-semibold h-14">
                      <a href="/contact">
                        Contact Us for Pricing <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
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


