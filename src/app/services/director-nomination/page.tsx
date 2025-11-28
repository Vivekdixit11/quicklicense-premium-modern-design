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
  Users,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  AlertCircle,
  Award,
  Target,
  TrendingUp,
  HeadphonesIcon,
  FileCheck,
  UserPlus,
  Scale,
  Briefcase,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% ROC Compliant",
    description: "Fully compliant director appointments with proper MCA filings and documentation",
  },
  {
    icon: Award,
    title: "Professional Directors",
    description: "Access to qualified professionals with DIN and clean compliance records",
  },
  {
    icon: TrendingUp,
    title: "Quick Onboarding",
    description: "Fast director appointment process completed within 7-10 days",
  },
  {
    icon: Scale,
    title: "Legal Protection",
    description: "Proper indemnity agreements and director liability protection",
  },
];

const directorTypes = [
  {
    type: "Nominee Director",
    icon: UserPlus,
    description: "Professional director for companies requiring additional directors for compliance",
    useCases: ["Foreign companies", "Investor requirements", "Compliance needs", "Board strength"],
    color: "from-blue-500 to-[#23A8DD]",
  },
  {
    type: "Independent Director",
    icon: Scale,
    description: "Non-executive independent directors for corporate governance and board diversity",
    useCases: ["Listed companies", "Large corporates", "Governance requirements", "Audit committees"],
    color: "from-[#E2F6F8]0 to-[#23A8DD]",
  },
  {
    type: "Woman Director",
    icon: Users,
    description: "Mandatory woman director for specified companies as per Companies Act 2013",
    useCases: ["Paid-up capital ≥ ₹100 Cr", "Turnover ≥ ₹300 Cr", "Listed companies", "Large public companies"],
    color: "from-[#23A8DD] to-[#23A8DD]",
  },
  {
    type: "Additional Director",
    icon: Building2,
    description: "Temporary directors appointed by board between AGMs for specific purposes",
    useCases: ["Urgent requirements", "Specialist expertise", "Interim appointments", "Board vacancies"],
    color: "from-[#23A8DD] to-[#23A8DD]",
  },
];

const documents = [
  "PAN card of the director",
  "Aadhar card of the director",
  "Passport size photograph",
  "Address proof (bank statement/utility bill)",
  "DIN (Director Identification Number)",
  "DSC (Digital Signature Certificate)",
  "Consent letter for directorship",
  "Declaration of non-disqualification",
  "Company incorporation certificate",
  "Board resolution for appointment",
];

const process = [
  {
    step: "01",
    title: "Director Selection",
    description: "Choose qualified professional director or provide nominee director details",
    duration: "1-2 days",
  },
  {
    step: "02",
    title: "Documentation",
    description: "Collect KYC documents, DIN, DSC, and consent letter from the director",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Board Resolution",
    description: "Pass board resolution for director appointment and prepare necessary forms",
    duration: "1 day",
  },
  {
    step: "04",
    title: "ROC Filing",
    description: "File DIR-12 with MCA and update company records with new director",
    duration: "3-5 days",
  },
];

const responsibilities = [
  {
    duty: "Fiduciary Duties",
    description: "Act in good faith and in the best interests of the company",
  },
  {
    duty: "Compliance Oversight",
    description: "Ensure company complies with all applicable laws and regulations",
  },
  {
    duty: "Board Attendance",
    description: "Attend board meetings and actively participate in decision-making",
  },
  {
    duty: "Financial Review",
    description: "Review financial statements, audits, and approve annual accounts",
  },
  {
    duty: "Risk Management",
    description: "Identify business risks and implement appropriate mitigation strategies",
  },
  {
    duty: "Corporate Governance",
    description: "Maintain high standards of corporate governance and ethical practices",
  },
];

const faqs = [
  {
    question: "What is a Nominee Director?",
    answer: "A nominee director is a professional director appointed to represent the interests of investors, lenders, or to fulfill statutory requirements. They attend board meetings, sign documents, and ensure compliance while not being involved in day-to-day operations.",
  },
  {
    question: "Who needs a Woman Director?",
    answer: "Companies with paid-up capital of ₹100 crore or more, or turnover of ₹300 crore or more must appoint at least one woman director. Listed companies also require woman directors as per SEBI regulations.",
  },
  {
    question: "What is the difference between Independent and Nominee Director?",
    answer: "Independent directors are non-executive directors with no material relationship with the company, required for governance. Nominee directors represent specific stakeholders (investors, lenders) and may have material interests.",
  },
  {
    question: "How long does director appointment take?",
    answer: "Director appointment typically takes 7-10 days including documentation, board resolution, and MCA filing. Timeline depends on availability of director's DIN, DSC, and document completeness.",
  },
  {
    question: "Can a director resign anytime?",
    answer: "Yes, directors can resign by submitting written resignation to the board. The company must file DIR-11 with MCA within 30 days. We handle complete resignation formalities and ROC compliance.",
  },
  {
    question: "What are director's liabilities?",
    answer: "Directors are liable for company compliance, financial misstatements, fraud, and breach of fiduciary duties. Proper indemnity insurance and compliance management minimize personal liability risks.",
  },
];

export default function DirectorNominationPage() {
  return (
    <>
      <Header />

      <ServiceHeroWithForm
        badge="Company Compliance"
        title="Director Nomination"
        subtitle="Starting at ₹3,999"
        description="Get professional director appointment services for your company. Ensure 100% ROC compliance with qualified directors having clean records."
        highlights={[
          "100% ROC compliant",
          "Professional directors pool",
          "Quick DIN processing",
          "Form DIR-12 filing"
        ]}
        stats={[
          { value: "3-5", label: "Days" },
          { value: "100%", label: "Compliant" },
          { value: "1,500+", label: "Appointed" }
        ]}
      />

      {/* Director Types Section */}
      <section id="types" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Director Categories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Types of <span className="gradient-text">Director Appointments</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right director based on your company requirements
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {directorTypes.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${director.color} flex items-center justify-center mb-6`}>
                      <director.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">{director.type}</h3>
                    <p className="text-muted-foreground mb-6">{director.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Common Use Cases:</p>
                      {director.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[#23A8DD] flex-shrink-0" />
                          <span>{useCase}</span>
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

      {/* Director Responsibilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Key Responsibilities</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Director <span className="gradient-text">Duties & Obligations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding director responsibilities ensures proper governance and compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {responsibilities.map((resp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-2 hover:border-[#23A8DD] smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-heading font-bold">{resp.duty}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{resp.description}</p>
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
            <Badge className="mb-4 bg-[#E2F6F8] text-[#083E6B]">Why Choose Us?</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Benefits of Our <span className="gradient-text">Director Services</span>
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E2F6F8] to-purple-100 flex items-center justify-center mx-auto mb-6">
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
              How to <span className="gradient-text">Appoint a Director</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4-step hassle-free director appointment process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E2F6F8] via-purple-300 to-[#E2F6F8] hidden md:block" />

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
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
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
                Documents for <span className="gradient-text">Director Appointment</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Required documents for director onboarding and ROC filing
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
              <Card className="border-2 border-[#E2F6F8] bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">Professional Support</h3>
                    <p className="text-muted-foreground">
                      Complete director appointment assistance
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">DIN & DSC assistance</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Board resolution drafting</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">MCA form filing (DIR-12)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#23A8DD]" />
                      <span className="text-sm">Ongoing compliance support</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-[#23A8DD] hover:bg-[#083E6B]">
                    Get Expert Assistance
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
        <div className="container-custom">
          <Card className="border-2 border-[#23A8DD]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Need <span className="gradient-text">Professional Directors?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our expert team for director nomination services and ensure complete compliance with Companies Act requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white hover:from-[#083E6B] hover:to-purple-700" asChild>
                  <Link href="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+919891614601">Call Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
      <section className="section-padding bg-gradient-to-br from-[#23A8DD] via-[#23A8DD] to-[#23A8DD] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Appoint a Director?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get professional director nomination services with Quick License. 
              ROC compliant appointments, expert guidance, and ongoing support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Director Appointment
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


