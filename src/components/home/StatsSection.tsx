"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Registrations Completed" },
  { value: 60, suffix: "+", label: "Years Combined Experience" },
  { value: 99.8, suffix: "%", label: "Success Rate" },
  { value: 48, suffix: "hrs", label: "Average Turnaround" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-terracotta/20 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
            Our Track Record
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            Numbers That Speak for <span className="text-terracotta">Themselves</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Our lawyers have over 60 years of combined legal experience. 
            We have defended clients in over 10,000 cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Decorative accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-terracotta rounded-full" />
                
                <div className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 text-sm lg:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
