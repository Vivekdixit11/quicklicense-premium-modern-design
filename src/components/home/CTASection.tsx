"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";

const ctaFeatures = [
  "Free Initial Consultation",
  "Expert Compliance Guidance",
  "Fast-Track Processing",
  "Dedicated Support Team",
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        {/* Decorative shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-20 h-20 border-2 border-terracotta/20 rounded-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-16 h-16 border-2 border-gold/30 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
              Get Started Today
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-6 leading-tight">
              If you are in
              <br />
              trouble our experts
              <br />
              <span className="text-terracotta">can guide you</span>
            </h2>
            <p className="text-gray-warm text-lg leading-relaxed mb-8 max-w-lg">
              We help startup employees get the expertise, planning, and cash to sit in a long established 
              fact that a reader will be distracted by the readable content.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {ctaFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-terracotta flex-shrink-0" />
                  <span className="text-charcoal font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-charcoal text-white font-bold px-8 py-4 rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span className="w-3 h-3 bg-terracotta group-hover:bg-white rounded-full" />
                <span>HIRE</span>
                <span className="font-semibold">EXPERT</span>
                <span className="text-white/50">—</span>
              </Link>
              
              <a
                href="tel:+919891614601"
                className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-terracotta transition-colors"
              >
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-terracotta" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-warm">Call us now</p>
                  <p className="font-bold">+91 98916 14601</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Professional Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background blob */}
              <div className="absolute -top-8 -right-8 w-80 h-80 bg-terracotta/80 rounded-full animate-blob" />
              
              {/* Main visual: professional image */}
              <div className="relative z-10 bg-cream-light rounded-3xl p-0 shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/34975698/pexels-photo-34975698.jpeg?auto=format&fit=crop&w=900&q=80"
                  alt="Professional advisor helping client"
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-warm">Approved Today</p>
                    <p className="font-bold text-charcoal">12 Licenses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-charcoal rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-white/60">
                Contact us today for a free consultation and let us handle your licensing needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end">
              <a
                href="tel:+919891614601"
                className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-semibold px-6 py-3 rounded-full hover:bg-terracotta-dark transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:contact@quicklicense.in"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
