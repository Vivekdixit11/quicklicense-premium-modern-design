"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, FileCheck, Scale, Radio, Building2, Briefcase, Shield } from "lucide-react";

const mainServices = [
  {
    id: "epr",
    title: "EPR Registration",
    subtitle: "Extended Producer Responsibility",
    description: "Complete EPR registration services for e-waste, plastic waste, battery waste, and more. Stay compliant with environmental regulations.",
    icon: FileCheck,
    href: "/services/epr",
    color: "terracotta",
    features: ["E-Waste EPR", "Plastic Waste EPR", "Battery Waste EPR", "Tyre Waste EPR"],
  },
  {
    id: "lmpc",
    title: "LMPC Registration",
    subtitle: "Legal Metrology Packaged Commodities",
    description: "Get your LMPC registration done quickly. Mandatory for all pre-packaged commodities sold in India.",
    icon: Scale,
    href: "/services/lmpc",
    color: "charcoal",
    features: ["Import Registration", "Manufacturer License", "Packer License", "Dealer Registration"],
  },
  {
    id: "wpc",
    title: "WPC Approval",
    subtitle: "Wireless Planning & Coordination",
    description: "WPC ETA approval for wireless equipment import. Essential for all radio frequency devices in India.",
    icon: Radio,
    href: "/services/wpc",
    color: "gold",
    features: ["ETA Approval", "Import License", "Dealer License", "Frequency Allocation"],
  },
];

const additionalServices = [
  { title: "FSSAI License", icon: Building2, href: "/services/fssai" },
  { title: "ISO Certification", icon: Shield, href: "/services/iso" },
  { title: "Trademark", icon: Briefcase, href: "/services/trademark" },
  { title: "MSME Registration", icon: FileCheck, href: "/services/msme" },
  { title: "IEC Code", icon: Scale, href: "/services/iec" },
  { title: "Private Limited", icon: Building2, href: "/services/private-limited" },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
            Our Core Services
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            Expert Licensing
            <br />
            <span className="text-terracotta">Solutions</span>
          </h2>
          <p className="text-gray-warm text-lg max-w-2xl mx-auto">
            We specialize in EPR, LMPC, and WPC registrations with industry-leading expertise and fastest turnaround times.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className={`relative h-full p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                  service.color === 'terracotta' 
                    ? 'bg-terracotta text-white' 
                    : service.color === 'charcoal'
                    ? 'bg-charcoal text-white'
                    : 'bg-white border-2 border-gold/30 text-charcoal'
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.color === 'gold' 
                      ? 'bg-gold/20' 
                      : 'bg-white/20'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'gold' ? 'text-terracotta' : 'text-white'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-medium mb-4 ${
                    service.color === 'gold' ? 'text-gray-warm' : 'text-white/70'
                  }`}>
                    {service.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    service.color === 'gold' ? 'text-gray-warm' : 'text-white/80'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'gold' ? 'bg-terracotta' : 'bg-white/60'
                        }`} />
                        <span className={service.color === 'gold' ? 'text-charcoal' : 'text-white/90'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-4 ${
                    service.color === 'gold' ? 'text-terracotta' : 'text-white'
                  }`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                    service.color === 'gold' ? 'bg-terracotta' : 'bg-white'
                  }`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal mb-2">
                More Services
              </h3>
              <p className="text-gray-warm">
                Complete range of business registration and compliance services
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-6 py-3 rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-cream transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-cream group-hover:bg-terracotta/10 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-terracotta" />
                  </div>
                  <span className="font-semibold text-sm text-charcoal group-hover:text-terracotta transition-colors">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
