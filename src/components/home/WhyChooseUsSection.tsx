"use client";

import { motion } from "motion/react";
import { Users, Headphones, FileCheck, Clock, Shield, Award, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Lawyers",
    description: "One of the first things we will do is help you understand your compliance requirements thoroughly.",
  },
  {
    icon: FileCheck,
    title: "Allegations",
    description: "You have a right to know every detail of the registration process and requirements.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is available 24/7 to provide help and support. Without any hassle.",
  },
];

const whyUsPoints = [
  { icon: Clock, title: "Fast Processing", desc: "48-hour turnaround on most registrations" },
  { icon: Shield, title: "100% Compliance", desc: "Government-approved documentation" },
  { icon: Award, title: "Expert Team", desc: "Specialized compliance consultants" },
  { icon: Zap, title: "Streamlined Process", desc: "Simplified application procedures" },
  { icon: Heart, title: "Customer First", desc: "Dedicated support throughout" },
  { icon: FileCheck, title: "Documentation", desc: "Complete paperwork assistance" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cream rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-terracotta/10 rounded-full blur-3xl translate-x-1/4" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image/Visual Section */}
            <div className="relative">
              {/* Main visual container */}
              <div className="relative bg-cream rounded-3xl p-8 lg:p-12">
                {/* Decorative blob */}
                <div className="absolute top-8 right-8 w-48 h-48 bg-terracotta/80 rounded-full animate-blob" />
                
                {/* Professional image (replace placeholder SVG) */}
                <div className="relative z-10 aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/8112160/pexels-photo-8112160.jpeg?fit=crop&w=900&q=80"
                    alt="Professional compliance consultant"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* CTA Button */}
                <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-charcoal text-white px-6 py-3 rounded-full">
                  <span className="w-3 h-3 bg-terracotta rounded-full" />
                  <span className="font-bold">HIRE</span>
                  <span className="font-semibold">EXPERT</span>
                  <span className="text-terracotta">—</span>
                </div>
              </div>

              {/* Floating testimonial card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 max-w-xs border border-gray-100"
              >
                <p className="text-sm text-gray-warm italic mb-3">
                  &ldquo;Their team made our EPR registration incredibly smooth. Highly recommended!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-terracotta text-sm">RA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">Rahul Agarwal</p>
                    <p className="text-xs text-gray-warm">CEO, TechStart India</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                We are Ready
                <br />
                to Provide <span className="text-terracotta">Best</span>
                <br />
                Service for Our Client
              </h2>
              <p className="text-gray-warm leading-relaxed">
                Long established fact that a reader will be distracted by the readable content. 
                We provide comprehensive support throughout your licensing journey.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-cream transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-cream group-hover:bg-terracotta rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-terracotta group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-charcoal mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-warm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-3 bg-charcoal text-white px-6 py-3 rounded-full cursor-pointer hover:bg-terracotta transition-colors">
                <span className="w-3 h-3 bg-terracotta rounded-full" />
                <span className="font-bold">HIRE</span>
                <span className="font-semibold">EXPERT</span>
                <span className="text-white/50">—</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Us Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-charcoal">
              If you are in trouble, our <span className="text-terracotta">experts</span>
              <br />can guide you
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-cream hover:bg-charcoal rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-terracotta rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <point.icon className="w-6 h-6 text-terracotta group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-semibold text-charcoal group-hover:text-white text-sm mb-1 transition-colors duration-300">
                  {point.title}
                </h4>
                <p className="text-xs text-gray-warm group-hover:text-white/70 transition-colors duration-300">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
