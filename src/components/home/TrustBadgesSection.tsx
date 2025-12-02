"use client";

import { motion } from "motion/react";
import { Shield, Award, Clock, Users } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Government Approved",
    subtitle: "Official Partner",
  },
  {
    icon: Award,
    title: "ISO Certified",
    subtitle: "Quality Assured",
  },
  {
    icon: Clock,
    title: "10+ Years",
    subtitle: "Industry Experience",
  },
  {
    icon: Users,
    title: "500+ Clients",
    subtitle: "Nationwide",
  },
];

export default function TrustBadgesSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-300">
                <badge.icon className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-semibold text-charcoal text-sm">{badge.title}</p>
                <p className="text-xs text-gray-warm">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
