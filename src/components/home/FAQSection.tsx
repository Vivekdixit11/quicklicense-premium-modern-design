"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is EPR Registration and why do I need it?",
    answer: "Extended Producer Responsibility (EPR) registration is mandatory for manufacturers, importers, and brand owners dealing with electronic waste, plastic waste, battery waste, or tyre waste in India. It makes producers responsible for environmentally sound management of their products throughout the product lifecycle.",
  },
  {
    question: "How long does LMPC Registration take?",
    answer: "LMPC (Legal Metrology Packaged Commodities) registration typically takes 15-30 working days after submission of complete documents. With our fast-track service, we can help expedite the process to as little as 7-10 days.",
  },
  {
    question: "What is WPC ETA Approval?",
    answer: "WPC (Wireless Planning and Coordination) ETA (Equipment Type Approval) is required for importing, manufacturing, or selling wireless equipment and radio frequency devices in India. This approval ensures your device meets Indian radio frequency standards.",
  },
  {
    question: "What documents are required for registration?",
    answer: "Documents vary by registration type but generally include: Company registration certificate, PAN card, GST registration, address proof, authorized signatory details, and product-specific documents. Our team will provide a detailed checklist based on your requirements.",
  },
  {
    question: "Do you provide nationwide services?",
    answer: "Yes, Quick License provides services across all states in India. We handle registrations with central government bodies as well as state-level authorities as needed.",
  },
  {
    question: "What is your success rate?",
    answer: "We maintain a 99.8% success rate for all applications. Our expert team ensures all documentation is perfect before submission, minimizing the chances of rejection or delays.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
              FAQs
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Frequently Asked
              <br />
              <span className="text-terracotta">Questions</span>
            </h2>
            <p className="text-gray-warm text-lg leading-relaxed mb-8">
              Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, 
              feel free to contact our support team.
            </p>

            <div className="bg-cream rounded-2xl p-6">
              <p className="text-sm text-gray-warm mb-4">Still have questions?</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-6 py-3 rounded-full hover:bg-terracotta transition-all duration-300"
              >
                <span>Contact Us</span>
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-cream-light rounded-2xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? 'border-terracotta shadow-lg' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className={`font-semibold text-base lg:text-lg pr-4 transition-colors ${
                    openIndex === index ? 'text-terracotta' : 'text-charcoal'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index ? 'bg-terracotta text-white' : 'bg-cream text-charcoal'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                    <p className="text-gray-warm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
