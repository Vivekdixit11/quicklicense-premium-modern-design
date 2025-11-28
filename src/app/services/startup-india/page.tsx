"use client";

import dynamicLoad from "next/dynamic";
import Link from "next/link";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
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
  Phone,
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

export default function StartupIndiaPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Government Recognition"
        title="Startup India Registration"
        subtitle="Free Government Registration"
        description="Get DPIIT recognition and unlock 3-year tax exemption, funding access, and government support. Fast-track your startup journey."
        highlights={[
          "3-year income tax exemption",
          "Access to government tenders",
          "Funding and mentorship programs",
          "IPR fast-track examination"
        ]}
        stats={[
          { value: "3 Years", label: "Tax Exempt" },
          { value: "Free", label: "Registration" },
          { value: "1,500+", label: "Certified" }
        ]}
      />

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

              <div



              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                  Ready to Get <span className="gradient-text">Startup India Recognition?</span>
                </h2>
                <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-[#23A8DD]/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="font-heading font-semibold text-2xl mb-4">
                      Start Your Startup India Registration
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Get DPIIT recognition and unlock tax exemptions, funding opportunities, and government benefits. 
                      Our experts will handle your complete registration process.
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


