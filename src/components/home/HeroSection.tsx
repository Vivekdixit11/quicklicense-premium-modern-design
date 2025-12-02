"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Award, CheckCircle, FileCheck, Scale, Radio } from "lucide-react";

const heroFeatures = [
  { icon: Shield, text: "100% Compliance Guaranteed" },
  { icon: Clock, text: "48-Hour Fast Track" },
  { icon: Award, text: "Government Approved" },
];

const mainServices = [
  { icon: FileCheck, name: "EPR Registration", color: "bg-terracotta" },
  { icon: Scale, name: "LMPC Registration", color: "bg-charcoal" },
  { icon: Radio, name: "WPC Approval", color: "bg-gold" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cream-light overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large terracotta blob */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] lg:w-[550px] lg:h-[550px]"
        >
          <div className="w-full h-full bg-terracotta/85 rounded-full animate-blob" />
        </motion.div>
        
        {/* Small decorative circles */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-[5%] right-[3%] w-20 h-20 lg:w-28 lg:h-28 bg-charcoal rounded-full"
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-[25%] left-[3%] w-12 h-12 lg:w-20 lg:h-20 bg-accent-orange rounded-full animate-float"
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-[15%] right-[15%] w-24 h-24 lg:w-40 lg:h-40 bg-gold/30 rounded-full animate-float-slow"
        />

        {/* Background text watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-heading font-bold text-charcoal/[0.02] whitespace-nowrap select-none">
          QUICK LICENSE
        </div>
      </div>

      <div className="container-custom relative z-10 pt-28 lg:pt-36 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 bg-charcoal text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                India&apos;s Trusted Licensing Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-charcoal">We Specialise</span>
              <br />
              <span className="text-charcoal">In All Aspects</span>
              <br />
              <span className="text-charcoal">Of Licensing</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-charcoal text-white font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:bg-terracotta transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <span>Get Started</span>
                <div className="w-7 h-7 lg:w-8 lg:h-8 bg-terracotta group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white group-hover:text-terracotta transition-colors" />
                </div>
              </Link>
              
              <span className="text-gray-warm font-medium hidden sm:inline">—</span>
              
              <Link
                href="/about"
                className="font-semibold text-charcoal hover:text-terracotta transition-colors underline underline-offset-4 decoration-2 decoration-terracotta/30 hover:decoration-terracotta"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-charcoal/10"
            >
              <p className="text-charcoal/70 text-sm lg:text-base leading-relaxed max-w-md font-medium">
                We offer flexible payment structures and hassle-free registration. 
                We are one of the most trusted business licensing consultants in India.
              </p>
            </motion.div>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {mainServices.map((service, index) => (
                <div
                  key={service.name}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                    index === 0 ? 'bg-terracotta text-white' : 
                    index === 1 ? 'bg-charcoal text-white' : 
                    'bg-gold/20 text-charcoal border border-gold'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{service.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Document/License Visual */}
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[480px]">
                <svg
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl"
                >
                  {/* Document/License representation */}
                  <rect x="80" y="100" width="240" height="320" rx="16" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2"/>
                  <rect x="100" y="130" width="200" height="20" rx="4" fill="#F5F0E8"/>
                  <rect x="100" y="160" width="160" height="12" rx="2" fill="#E8A87C"/>
                  <rect x="100" y="180" width="180" height="8" rx="2" fill="#E5E5E5"/>
                  <rect x="100" y="196" width="140" height="8" rx="2" fill="#E5E5E5"/>
                  <rect x="100" y="212" width="170" height="8" rx="2" fill="#E5E5E5"/>
                  
                  {/* Stamp/Seal */}
                  <circle cx="250" cy="320" r="45" fill="#C45C3E" fillOpacity="0.1" stroke="#C45C3E" strokeWidth="3"/>
                  <circle cx="250" cy="320" r="35" stroke="#C45C3E" strokeWidth="2"/>
                  <path d="M235 320L245 330L270 305" stroke="#C45C3E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Quick License Badge */}
                  <rect x="100" y="260" width="100" height="30" rx="6" fill="#1A1A1A"/>
                  <text x="120" y="280" fill="white" fontSize="10" fontWeight="bold">APPROVED</text>
                  
                  {/* Decorative elements */}
                  <circle cx="320" cy="80" r="30" fill="#C45C3E"/>
                  <circle cx="60" cy="400" r="20" fill="#E8A87C"/>
                </svg>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-2 lg:-left-4 top-1/4 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs text-gray-500">Success Rate</p>
                    <p className="font-bold text-charcoal text-sm lg:text-base">99.8%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-2 lg:-right-4 bottom-1/3 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-terracotta/10 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs text-gray-500">Fast Processing</p>
                    <p className="font-bold text-charcoal text-sm lg:text-base">48 Hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mt-8 lg:mt-12"
        >
          {heroFeatures.map((feature, index) => (
            <div
              key={feature.text}
              className={`flex items-center gap-3 lg:gap-4 p-4 lg:p-5 rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 ${
                index === 0 ? 'bg-charcoal text-white' : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center ${
                index === 0 ? 'bg-terracotta' : 'bg-cream'
              }`}>
                <feature.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${index === 0 ? 'text-white' : 'text-terracotta'}`} />
              </div>
              <span className={`font-semibold text-sm lg:text-base ${index === 0 ? 'text-white' : 'text-charcoal'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-12 lg:py-16 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-charcoal italic leading-relaxed">
              &ldquo;The virtue of compliance consists in
              <br className="hidden sm:block" />
              <span className="text-terracotta font-semibold"> moderation as regulated by wisdom&rdquo;</span>
            </p>
          </motion.div>
        </div>

        {/* Decorative gavel image area */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-0 w-32 h-32 lg:w-48 lg:h-48"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
            <ellipse cx="100" cy="100" rx="80" ry="80" fill="#D4A373"/>
            <rect x="60" y="90" width="80" height="20" rx="4" fill="#8B4513"/>
            <rect x="85" y="70" width="30" height="60" rx="4" fill="#6B3E26"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
