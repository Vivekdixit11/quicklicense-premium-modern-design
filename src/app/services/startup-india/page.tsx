"use client";

import dynamicLoad from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import {
  Rocket,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  ArrowRight,
  Download,
  Award,
  Percent,
  Lightbulb,
} from "lucide-react";

// Lazy load heavy components
const Footer = dynamicLoad(() => import("@/components/Footer"), { ssr: true });
const WhatsAppButton = dynamicLoad(() => import("@/components/WhatsAppButton"), { ssr: false });
const StickyContactForm = dynamicLoad(() => import("@/components/StickyContactForm"), { ssr: false });

const benefits = [
  {
    icon: Percent,
    title: "Tax Benefits",
    desc: "3-year income tax exemption for eligible startups",
  },
  {
    icon: Award,
    title: "IPR Benefits",
    desc: "80% rebate on patent filing fees",
  },
  {
    icon: Shield,
    title: "Self Certification",
    desc: "Compliance under 6 labor & 3 environment laws",
  },
  {
    icon: Lightbulb,
    title: "Funding Access",
    desc: "Access to government funding schemes",
  },
];

const process = [
  { step: "1", title: "Incorporation", desc: "Complete company registration (Pvt Ltd/LLP)", time: "7-10 Days" },
  { step: "2", title: "DPIIT Application", desc: "Apply for recognition on Startup India portal", time: "1-2 Days" },
  { step: "3", title: "Document Upload", desc: "Upload pitch deck, business plan & documents", time: "1 Day" },
  { step: "4", title: "Review Process", desc: "DPIIT reviews application and validates", time: "3-5 Days" },
  { step: "5", title: "Certificate Issued", desc: "Receive Certificate of Recognition", time: "1-2 Days" },
];

const documents = [
  "Certificate of Incorporation",
  "Company PAN card",
  "Pitch deck (max 20 slides)",
  "Business plan or executive summary",
  "Website or product demo (if available)",
  "Innovation description",
  "Director/Partner details",
  "Recommendation letter (optional)",
];

const whoNeeds = [
  "Tech startups and SaaS companies",
  "Innovative product-based startups",
  "Service startups with innovation",
  "Companies less than 10 years old",
  "Startups with annual turnover < ₹100 Cr",
  "Businesses working on new solutions",
];

const eligibility = [
  "Company incorporated as Pvt Ltd, LLP, or Partnership",
  "Incorporated less than 10 years ago",
  "Annual turnover not exceeding ₹100 crores",
  "Working towards innovation, development, or improvement",
  "Not formed by splitting existing business",
  "Scalable business model with growth potential",
];

const governmentSchemes = [
  "Fund of Funds for Startups (₹10,000 Cr corpus)",
  "Credit Guarantee Scheme",
  "Startup India Seed Fund (₹945 Cr)",
  "Atal Innovation Mission grants",
  "Patent filing fee rebate (80%)",
  "Tax holiday for 3 consecutive years",
  "Easy public procurement norms",
  "Access to 50+ government schemes",
];

const pricing = {
  price: "₹3,999",
  originalPrice: "₹6,999",
  includes: [
    "DPIIT recognition certificate",
    "Startup India registration",
    "Pitch deck consultation",
    "Business plan review",
    "Application filing",
    "Document preparation",
    "Certificate download",
    "Government schemes access",
    "Tax benefit guidance",
    "Free updates & support",
  ],
};

export default function StartupIndiaPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div



            >
              <Badge className="mb-6 px-4 py-2">DPIIT Recognition</Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6">
                <span className="gradient-text">Startup India</span> Registration
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Get DPIIT recognition and unlock tax benefits, funding access, and government support. 
                Fast-track your startup journey with expert guidance.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl font-bold gradient-text">{pricing.price}</span>
                <span className="text-2xl text-muted-foreground line-through">{pricing.originalPrice}</span>
                <Badge className="bg-green-100 text-green-700">Save 43%</Badge>
              </div>
              <Button size="lg" className="animated-gradient text-white font-semibold text-lg px-8 h-14">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div



              className="relative hidden lg:block"
            >
              <div className="relative glass-effect rounded-3xl p-8 hover-lift">
                <Rocket className="w-full h-64 text-primary opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  What is <span className="gradient-text">Startup India?</span>
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Startup India is a flagship initiative by the Government of India to build a strong 
                    ecosystem for nurturing innovation and startups in the country. It provides recognition 
                    by DPIIT (Department for Promotion of Industry and Internal Trade).
                  </p>
                  <p>
                    Recognized startups get access to numerous benefits including tax exemptions, easier 
                    compliance, IPR benefits, and access to government funding schemes worth thousands of crores.
                  </p>
                </div>
              </div>

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

              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Government <span className="gradient-text">Schemes & Benefits</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {governmentSchemes.map((scheme, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{scheme}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Eligibility <span className="gradient-text">Criteria</span>
                </h2>
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {eligibility.map((item, index) => (
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
