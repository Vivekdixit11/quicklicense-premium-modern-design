"use client";

import dynamicLoad from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Shield,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  Award,
  Lock,
  Globe,
} from "lucide-react";

// Dynamically import heavy components
const StickyContactForm = dynamicLoad(() => import("@/components/StickyContactForm"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 rounded-xl animate-pulse" />
});

const benefits = [
  {
    icon: Shield,
    title: "Legal Protection",
    desc: "Exclusive rights to use your brand name and logo",
  },
  {
    icon: Lock,
    title: "Brand Security",
    desc: "Prevent others from copying your brand identity",
  },
  {
    icon: TrendingUp,
    title: "Brand Value",
    desc: "Increase your business valuation and credibility",
  },
  {
    icon: Globe,
    title: "Market Presence",
    desc: "Establish strong market presence and consumer trust",
  },
];

const process = [
  { step: "1", title: "Trademark Search", desc: "Comprehensive search to ensure your mark is unique", time: "1-2 Days" },
  { step: "2", title: "Application Drafting", desc: "Professional drafting of trademark application", time: "1 Day" },
  { step: "3", title: "Filing with IPO", desc: "Submit application to Intellectual Property Office", time: "1 Day" },
  { step: "4", title: "Examination", desc: "IPO examines the application for compliance", time: "6-8 Months" },
  { step: "5", title: "Publication", desc: "Mark published in Trademark Journal", time: "1-2 Months" },
  { step: "6", title: "Registration", desc: "Receive Trademark Registration Certificate", time: "2-3 Months" },
];

const documents = [
  "Applicant Details (Individual/Company)",
  "Logo/Wordmark (high resolution)",
  "Nature of Business/Goods & Services",
  "Address Proof",
  "Incorporation Certificate (for companies)",
  "Authorization Letter (if filed through agent)",
  "Priority Document (if claiming priority)",
  "PAN Card of Applicant",
];

const whoNeeds = [
  "Startups launching new brands",
  "Businesses with unique product names",
  "E-commerce stores",
  "Service providers with brand identity",
  "Manufacturers with product logos",
  "Anyone wanting to protect their brand",
];

const faqs = [
  {
    q: "What is a Trademark?",
    a: "A trademark is a unique symbol, word, or phrase legally registered to represent a company or product, protecting brand identity.",
  },
  {
    q: "How long does registration take?",
    a: "The entire process takes approximately 8-12 months from filing to registration, subject to no objections.",
  },
  {
    q: "What classes should I register under?",
    a: "It depends on your business type. We help you identify the right classes for maximum protection.",
  },
  {
    q: "Can I trademark a logo and name separately?",
    a: "Yes, you can register them separately or together as a composite mark. We recommend both for complete protection.",
  },
];

export default function TrademarkPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Brand Protection"
        title="Trademark Registration"
        subtitle="Starting at ₹4,999"
        description="Secure exclusive rights to your brand name and logo. Complete trademark registration service from search to certificate."
        highlights={[
          "Free comprehensive trademark search",
          "Expert assistance throughout process",
          "100% online filing and tracking",
          "Lifetime brand protection support"
        ]}
        stats={[
          { value: "8-12", label: "Months" },
          { value: "5,000+", label: "Registered" },
          { value: "98%", label: "Success" }
        ]}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Register</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">Trademark Registration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your brand identity and establish market dominance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-[#23A8DD]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Registration <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, transparent process from search to registration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-12 pb-12 last:pb-0 animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {idx !== process.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#23A8DD] to-[#23A8DD]" />
                )}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge className="bg-[#E2F6F8] text-[#083E6B]">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.time}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Requirements</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Documents <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">Needed</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Simple documentation to get started with your trademark registration
              </p>
              <ul className="space-y-4">
                {documents.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 animate-fadeIn"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#23A8DD] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Badge className="mb-4">Ideal For</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Who Needs <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">This?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Trademark registration is essential for various business types
              </p>
              <div className="space-y-4">
                {whoNeeds.map((item, idx) => (
                  <div
                    key={idx}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#23A8DD] to-[#23A8DD]" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white px-6 py-2 text-base">
              Professional Trademark Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Protect Your <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">Brand?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive trademark registration service. Our experts will guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                <span>Free Trademark Search</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                <span>Expert Legal Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                <span>100% Online Process</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] hover:from-[#083E6B] hover:to-[#083E6B] text-white font-semibold text-lg px-8 h-14">
                <a href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-[#23A8DD] text-[#23A8DD] hover:bg-[#E2F6F8] font-semibold text-lg px-8 h-14">
                <a href="tel:+919876543210">
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses who trust us for their trademark registration needs
          </p>
          <Button size="lg" className="bg-white text-[#23A8DD] hover:bg-gray-100 font-semibold text-lg px-8 h-14">
            Start Your Registration <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton />
      <StickyContactForm /> */}
    </>
  );
}


