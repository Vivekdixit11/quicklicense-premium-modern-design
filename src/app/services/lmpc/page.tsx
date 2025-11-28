import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LMPC Certificate Registration | Legal Metrology Consultant India",
  description: "Get LMPC Certificate for importers & packers quickly. End-to-end Legal Metrology (LMPC) registration services, pan-India support. Call +91 98916 14601 for a free consultation.",
  keywords: [
    "LMPC Certificate",
    "Legal Metrology Registration",
    "LMPC Registration",
    "Importer LMPC",
    "Packer LMPC",
    "Legal Metrology Consultant",
    "LMPC registration India",
    "LMPC consultant +91 98916 14601",
  ],
  openGraph: {
    title: "LMPC Certificate Registration | Fast & Compliant",
    description: "Secure your LMPC Certificate quickly. Avoid customs holds & fines. Call +91 98916 14601.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LMPC Certificate Registration",
  "provider": {
    "@type": "Organization",
    "name": "QuickLicense",
    "telephone": "+919891614601",
    "url": "https://quicklicense.in"
  },
  "description": "Professional consultancy for Legal Metrology (LMPC) registration for importers and packers.",
  "areaServed": "India",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+919891614601",
    "contactType": "customer service",
    "areaServed": "IN"
  }]
};

// removed next/image to reduce client bundle for this page
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceHeroWithForm from "@/components/ServiceHeroWithForm";
import StickyConsultationForm from "@/components/StickyConsultationForm";
import RightSideFaq from "@/components/RightSideFaq";
import RightSideDocs from "@/components/RightSideDocs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle2,
  FileCheck,
  FileText,
  Clock,
  Phone,
  Upload,
  Star,
  AlertCircle,
} from "lucide-react";

const whoNeedsLMPC = [
  {
    icon: CheckCircle2,
    title: "Importers of Pre-Packaged Goods",
    description: "Importers bringing pre-packed goods into India for sale or distribution",
  },
  {
    icon: FileText,
    title: "Packers and Manufacturers",
    description: "Entities that pack or manufacture pre-packaged commodities for retail or wholesale",
  },
  {
    icon: Award,
    title: "Retail Businesses with pre-printed labels",
    description: "Retailers who sell pre-packed products and display mandatory declarations",
  },
];

const servicesBenefits = [
  {
    icon: CheckCircle2,
    title: "Full Documentation Audit & Label Review",
    description: "We audit statutory records and review sample labels to ensure Rule 6 compliance",
  },
  {
    icon: FileCheck,
    title: "Online Application Filing",
    description: "We prepare and submit Form LM-1 and the required attachments on your behalf",
  },
  {
    icon: AlertCircle,
    title: "Follow-ups with Officers",
    description: "We handle queries and coordinate with inspectors until grant",
  },
  {
    icon: Clock,
    title: "Product Inspection Coordination",
    description: "We schedule and coordinate any required inspections to avoid delays",
  },
  {
    icon: Award,
    title: "Certificate Issuance Support",
    description: "Assistance in receiving the digital certificate and renewal calendar",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Consultation - Tell us product type, IEC & GST details",
    description: "We capture product categories, IEC, GST and advise next steps.",
  },
  {
    step: "2",
    title: "Upload Documents - Submit IEC, GST, PAN, product labels",
    description: "Securely upload scanned documents and label images for verification.",
  },
  {
    step: "3",
    title: "We File Application - We prepare, submit and track your application",
    description: "We complete Form LM-1, attach documents and follow up with the portal.",
  },
  {
    step: "4",
    title: "Certificate Issued - You receive LMPC with renewal calendar",
    description: "Receive the digital certificate and guidelines for renewal and labeling.",
  },
];

const mandatoryDocs = [
  "Import-Export Code (IEC) — copy",
  "GST Registration Certificate (GSTIN) — copy",
  "PAN of firm / entity",
  "Company registration proof (Incorporation certificate / partnership deed / proprietorship ID)",
  "Address proof of business premises (electricity bill / rent agreement / NOC)",
  "ID & address proof of authorized signatory (Aadhaar / passport / PAN)",
  "Label sample(s) / product packaging images showing declarations",
  "Product details: HS code, net weight, net quantity, ingredients (if applicable)",
  "Power of Attorney / Authorization letter (if filed by consultant)",
  "Processing fee receipt (varies, see Fees section)",
];

const optionalDocs = [
  "Photos of inventory/storage",
  "Manufacturing/packing agreement (if third party packs for you)",
];

const faqs = [
  {
    question: "What is LMPC and is it mandatory for imported goods?",
    answer:
      "LMPC stands for Legal Metrology (Packaged Commodities) registration. Under the Legal Metrology (Packaged Commodities) Rules, 2011, pre-packaged commodities require packaging declarations and registration under Rule 27. If you import pre-packaged goods intended for sale or distribution, you must register; otherwise goods can be detained.",
  },
  {
    question: "What documents are required to apply for an LMPC certificate?",
    answer:
      "Typical documents include IEC, GST certificate, PAN, company registration proof, address proof, label samples, and an authorization letter if a consultant applies on your behalf. Exact lists can vary by state.",
  },
  {
    question: "How long does LMPC registration take?",
    answer:
      "It depends on the state and whether inspection is needed. Many applicants receive certificates in 7–45 working days, but times can vary. We track and expedite where possible.",
  },
  {
    question: "What is the government fee for LMPC registration?",
    answer:
      "Many state SOPs list nominal fees (for example Rs. 500 under some SoPs) — the exact government fee depends on the portal and category. Consultant fees are separate.",
  },
  {
    question: "Does LMPC need renewal?",
    answer:
      "Yes — LMPC certificates have validity and require renewal. Some states issue 5-year certificates; confirm the expiry date on your certificate and renew before expiry.",
  },
  {
    question: "What happens if my packaging label isn't compliant?",
    answer:
      "The application may be returned for correction or the product could fail inspection. We review labels before submission to avoid rejections.",
  },
  {
    question: "Can I apply if I outsource packaging to another company?",
    answer:
      "Yes — the packer or manufacturer must be registered. If you import already-packed goods, the importer must register under Rule 27.",
  },
  {
    question: "Can you help with state-specific submission (e.g., Delhi, Maharashtra)?",
    answer:
      "Yes — we file on the relevant State Legal Metrology portal and coordinate local inspections if required. See our state filing services.",
  },
];

const testimonials = [
  {
    text: "We had a shipment stuck at Nhava Sheva — they resolved LMPC in 5 days and customs released goods.",
    author: "Importer, Mumbai",
    rating: 5,
  },
  {
    text: "Professional service, transparent pricing. Got our LMPC certificate within 10 days. Highly recommended!",
    author: "FMCG Manufacturer, Delhi",
    rating: 5,
  },
  {
    text: "They handled everything from documentation to follow-ups. Made the entire process stress-free.",
    author: "Cosmetics Importer, Bangalore",
    rating: 5,
  },
];

export default function LMPCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <ServiceHeroWithForm
        badge="Legal Metrology Certificate"
        title="Get Your LMPC Certificate — Fast & Compliant"
        subtitle="Secure LMPC Certificate in Days — Avoid Customs Holds & Fines"
        description="End-to-end LMPC registration for Importers, Packers & Manufacturers. Transparent fees, real-time updates, Pan-India service."
        highlights={[
          "100% Legal compliance with Legal Metrology Rules 2011",
          "Pan-India service with state portal expertise",
          "Fast processing - 7 to 45 working days",
          "Transparent fees, no hidden charges",
          "Full documentation audit & label review",
          "Certificate issuance support & renewal reminders"
        ]}
        stats={[
          { value: "7-45", label: "Working Days" },
          { value: "5 Years", label: "Validity" },
          { value: "1000+", label: "Registered" }
        ]}
      />

      {/* Certificate preview removed to improve page weight and performance */}

      {/* Main Content with Sticky Form Layout */}
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Why LMPC Matters */}
            <section id="why-lmpc">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">Authority + Mandate</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Why LMPC <span>Matters</span>
                </h2>
                <Card className="border-2 border-blue-200 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                        <AlertCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg leading-relaxed text-gray-700">
                          Every pre-packaged commodity sold or imported into India must comply with the{" "}
                          <strong>Legal Metrology (Packaged Commodities) Rules, 2011</strong>.
                          Importers, packers and manufacturers must register under Rule 27 before their
                          products are distributed; failure to register can lead to customs holds, fines and penalties.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Who Needs LMPC */}
            <section id="who-needs">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">Who Needs Registration</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Who needs an <span>LMPC certificate?</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-4">
                  {whoNeedsLMPC.map((item, index) => (
                    <div key={index}>
                      <Card className="h-full border-2">
                        <CardContent className="p-4 text-center">
                          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                            <item.icon className="w-7 h-7 text-blue-600" />
                          </div>
                          <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                <Card className="bg-blue-50 border-2 border-blue-200">
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Short example:</strong> If you import shampoo, spices, packaged snacks,
                      cosmetics, or other pre-packed goods, you need LMPC.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Our Service - What We Do */}
            <section id="our-service">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">Our Services</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  What We Do <span>For You</span>
                </h2>

                <div className="space-y-4">
                  {servicesBenefits.map((service, index) => (
                    <div key={index}>
                      <Card className="border-2">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-heading font-bold mb-2">{service.title}</h3>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Process - How It Works */}
            <section id="process">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">Simple Process</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Quick Process — <span>How It Works</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  4 simple steps to get your LMPC certificate
                </p>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-[#84D3FF] to-blue-200 hidden md:block" />

                  {processSteps.map((step, index) => (
                    <div key={index} className="relative mb-4 last:mb-0">
                      <div className="flex gap-6 items-start">
                          <div className="relative z-10 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shrink-0">
                          {step.step}
                        </div>
                        <Card className="flex-1 border-2">
                          <CardContent className="p-4">
                            <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Documents Checklist moved to right column */}
            <section id="documents">
              <div>
                <Card className="border-2 border-blue-200 bg-white">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-heading font-semibold mb-2">Documents Checklist</h3>
                    <p className="text-sm text-muted-foreground">
                      The interactive documents checklist has been moved to the right — use the checkboxes to mark
                      documents you already have. It will help speed up your application.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Fees, Validity & Timeline */}
            <section id="fees">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700">Pricing & Timeline</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Fees, Validity & <span>Typical Timeline</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-blue-200 bg-white">
                    <CardContent className="p-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Government Fee</h3>
                      <p className="text-sm text-muted-foreground">
                        Many states list nominal fees (e.g., Rs. 500) — exact fee depends on portal and category.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200 bg-white">
                    <CardContent className="p-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Validity</h3>
                      <p className="text-sm text-muted-foreground">
                        Many states issue 5-year certificates. Check your certificate for exact expiry and renewal terms.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200 bg-white">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Processing Time</h3>
                      <p className="text-sm text-muted-foreground">
                        Typically 7–45 working days depending on state and inspection requirements.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6 bg-blue-600 text-white">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      Our Professional Fee
                    </h3>
                    <p className="text-sm mb-4 opacity-90">
                      Contact us for exact quote — we offer volume discounts
                    </p>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100 text-sm px-4"
                      asChild
                    >
                      <a href="tel:+919891614601">
                        <Phone className="mr-2 w-5 h-5" />
                        Call +91 98916 14601
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ moved to right column: see `RightSideFaq` */}

            {/* Testimonials Section */}
            <section id="testimonials">
              <div className="text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-700">Client Success</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  What Our <span>Clients Say</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full max-w-sm mx-auto">
                        <Card className="h-full border-2">
                          <CardContent className="p-4 text-center">
                            <div className="flex justify-center gap-1 mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                            <p className="text-sm font-semibold text-blue-700">— {testimonial.author}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sticky Form (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <StickyConsultationForm />
            </div>

            {/* Right-side Documents checklist and FAQ */}
            <RightSideDocs mandatoryDocs={mandatoryDocs} optionalDocs={optionalDocs} />
            <RightSideFaq faqs={faqs} />
          </div>
        </div>
      </div>

      {/* LMPC certificate sample section removed to reduce page size and render time */}

      {/* Final CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Ready to Get Your LMPC Certificate?
            </h2>
            <p className="text-xl mb-4 opacity-90 max-w-3xl mx-auto">
              Start your Legal Metrology registration today — fast, transparent, 100% compliant.
              Avoid customs holds and penalties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg px-8"
                asChild
              >
                <a href="tel:+919891614601">
                  <Phone className="w-5 h-5" />
                  Call +91 98916 14601
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
                asChild
              >
                <a href="#apply">
                  <Upload className="w-5 h-5" />
                  Upload Documents & Apply
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
