"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, ArrowRight, Building2, FileText, Utensils, Award, Briefcase, Rocket, Globe, PillBottle } from "lucide-react";

const pricingCategories = [
  {
    category: "Company Registration",
    services: [
      {
        icon: Building2,
        name: "Private Limited Company",
        price: "₹6,999",
        originalPrice: "₹9,999",
        duration: "7-10 Days",
        features: [
          "DSC for 2 Directors",
          "DIN for 2 Directors",
          "Name Approval",
          "MOA & AOA Drafting",
          "Incorporation Certificate",
          "PAN & TAN",
          "Free Consultation",
        ],
        popular: true,
      },
      {
        icon: FileText,
        name: "LLP Registration",
        price: "₹5,999",
        originalPrice: "₹8,499",
        duration: "7-10 Days",
        features: [
          "DSC for 2 Partners",
          "DPIN for 2 Partners",
          "Name Approval",
          "LLP Agreement",
          "Incorporation Certificate",
          "PAN & TAN",
          "Free Consultation",
        ],
        popular: false,
      },
      {
        icon: Building2,
        name: "One Person Company",
        price: "₹6,499",
        originalPrice: "₹8,999",
        duration: "7-10 Days",
        features: [
          "DSC for Director",
          "DIN for Director",
          "Name Approval",
          "MOA & AOA Drafting",
          "Incorporation Certificate",
          "PAN & TAN",
          "Nominee Declaration",
        ],
        popular: false,
      },
    ],
  },
  {
    category: "Licenses & Registrations",
    services: [
      {
        icon: Utensils,
        name: "FSSAI License",
        price: "₹2,499",
        originalPrice: "₹4,999",
        duration: "15-20 Days",
        features: [
          "Basic/State/Central License",
          "Application Filing",
          "Document Preparation",
          "Government Fee Included",
          "Certificate Delivery",
          "5 Year Validity",
          "Renewal Support",
        ],
        popular: true,
      },
      {
        icon: Award,
        name: "ISO Certification",
        price: "₹12,999",
        originalPrice: "₹19,999",
        duration: "20-25 Days",
        features: [
          "ISO 9001:2015",
          "Gap Analysis",
          "Documentation Support",
          "Audit Assistance",
          "Certificate Issuance",
          "3 Year Validity",
          "Surveillance Audit Support",
        ],
        popular: false,
      },
      {
        icon: Briefcase,
        name: "MSME Registration",
        price: "₹1,499",
        originalPrice: "₹2,999",
        duration: "3-5 Days",
        features: [
          "Udyam Registration",
          "Application Filing",
          "Document Verification",
          "Certificate Download",
          "Lifetime Validity",
          "Government Benefits Access",
          "Free Updates",
        ],
        popular: false,
      },
    ],
  },
  {
    category: "Startup & Export",
    services: [
      {
        icon: Rocket,
        name: "Startup India Registration",
        price: "₹3,999",
        originalPrice: "₹6,999",
        duration: "10-15 Days",
        features: [
          "DPIIT Recognition",
          "Certificate of Registration",
          "Tax Benefits Access",
          "IPR Benefits",
          "Government Scheme Access",
          "Self-Certification Benefits",
          "Consultation Support",
        ],
        popular: true,
      },
      {
        icon: Globe,
        name: "IEC Code",
        price: "₹2,999",
        originalPrice: "₹4,999",
        duration: "5-7 Days",
        features: [
          "IEC Application Filing",
          "Digital Signature",
          "Document Preparation",
          "DGFT Portal Access",
          "Certificate Issuance",
          "Lifetime Validity",
          "Import/Export Ready",
        ],
        popular: false,
      },
      {
        icon: PillBottle,
        name: "Drug License",
        price: "₹8,999",
        originalPrice: "₹14,999",
        duration: "30-45 Days",
        features: [
          "20B/21B License",
          "Application Filing",
          "Premises Inspection Support",
          "Documentation Assistance",
          "Certificate Issuance",
          "5 Year Validity",
          "Renewal Support",
        ],
        popular: false,
      },
    ],
  },
];

const additionalServices = [
  { name: "GST Registration", price: "₹999", duration: "3-5 Days" },
  { name: "Trademark Registration", price: "₹5,999", duration: "15-20 Days" },
  { name: "Professional Tax", price: "₹1,499", duration: "5-7 Days" },
  { name: "Shop Act License", price: "₹1,999", duration: "7-10 Days" },
  { name: "Partnership Firm", price: "₹4,999", duration: "5-7 Days" },
  { name: "Digital Signature", price: "₹999", duration: "1-2 Days" },
  { name: "EPF Registration", price: "₹2,499", duration: "10-15 Days" },
  { name: "ESIC Registration", price: "₹2,499", duration: "10-15 Days" },
];

export default function PricingPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2">Transparent Pricing</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Simple & <span className="gradient-text">Affordable</span> Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No hidden charges. No surprises. Get your business licensed at the best prices in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Categories */}
      {pricingCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`section-padding ${categoryIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                {category.category}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full hover-lift ${
                      service.popular
                        ? "border-2 border-primary shadow-xl relative"
                        : "border-2 hover:border-primary"
                    } smooth-transition`}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{service.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold gradient-text">{service.price}</span>
                        <span className="text-lg text-muted-foreground line-through">
                          {service.originalPrice}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {service.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      <Button
                        className={`w-full mt-6 ${
                          service.popular
                            ? "animated-gradient text-white"
                            : ""
                        }`}
                        size="lg"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
              Other <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground">Quick and affordable solutions for all your business needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover-lift cursor-pointer border-2 hover:border-primary smooth-transition">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-3">{service.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold gradient-text">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{service.duration}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="animated-gradient text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Need a Custom Package?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  We offer customized solutions for businesses with unique requirements. 
                  Contact us for a personalized quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 h-14">
                    Request Custom Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold text-lg px-8 h-14 border-white text-white hover:bg-white/10"
                  >
                    Talk to Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
