"use client";

import dynamicLoad from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
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

const pricing = {
  price: "₹4,999",
  originalPrice: "₹7,999",
  includes: [
    "Trademark Search Report",
    "Application Drafting",
    "Filing with IPO",
    "Government Fee Included (1 Class)",
    "Objection Handling (if any)",
    "TM Application Number",
    "Free Brand Consultation",
    "Status Updates",
    "Documentation Support",
    "Certificate Delivery",
  ],
};

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

      <HeroSection
        badge="Brand Protection"
        title="Trademark Registration"
        subtitle="Protect your brand identity and build consumer trust"
        description="Secure exclusive rights to your brand name and logo with our complete trademark registration service. We handle search, filing, and prosecution."
        highlights={[
          "Free Search Report",
          "Expert Assistance",
          "100% Online Process"
        ]}
        stats={{
          icon: <Award className="w-6 h-6 text-indigo-300" />,
          text: "5,000+ Trademarks Registered"
        }}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Register</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Trademark Registration</span>
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
                    <div className="bg-gradient-to-br from-indigo-50 to-violet-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-indigo-600" />
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
              Registration <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Timeline</span>
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
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-violet-600" />
                )}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {item.step}
                </div>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <Badge className="bg-indigo-100 text-indigo-700">
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
                Documents <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Needed</span>
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
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Badge className="mb-4">Ideal For</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Who Needs <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">This?</span>
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
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600" />
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-indigo-200 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                    Best Value
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">Complete Package</h2>
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {pricing.price}
                    </span>
                    <span className="text-2xl text-gray-400 line-through">
                      {pricing.originalPrice}
                    </span>
                  </div>
                  <p className="text-gray-600">All-inclusive trademark registration</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pricing.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold text-lg h-14">
                  Register Your Trademark <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Questions</span>
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses who trust us for their trademark registration needs
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold text-lg px-8 h-14">
            Start Your Registration <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyContactForm />
    </>
  );
}
