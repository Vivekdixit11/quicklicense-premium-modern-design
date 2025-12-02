"use client";

import { motion } from "motion/react";
import { ClipboardList, FileSearch, SendHorizonal, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit Application",
    description: "Fill out our simple online form with your business details and required documents.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Document Review",
    description: "Our experts review your application and verify all documentation for compliance.",
  },
  {
    number: "03",
    icon: SendHorizonal,
    title: "Government Filing",
    description: "We submit your application to the relevant government authorities on your behalf.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "License Approved",
    description: "Receive your official license certificate within the promised timeframe.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            How It <span className="text-terracotta">Works</span>
          </h2>
          <p className="text-gray-warm text-lg max-w-2xl mx-auto">
            Our streamlined process makes getting your business license simple and hassle-free. 
            We handle all the complexity so you can focus on your business.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-charcoal text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-cream group-hover:bg-terracotta rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-terracotta group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-terracotta/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white font-bold px-8 py-4 rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105"
          >
            <span>Start Your Application</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
