"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Marketing Officer, RTM",
    content: "My friends are saying 'Wow! He looks really good!' And I'm like 'thank you. Also why and how?'",
    rating: 5,
    avatar: "LA",
  },
  {
    id: 2,
    name: "Randy Elliot",
    role: "Marketing Officer, RTM",
    content: "Our team is available 24/7 to provide help and support. Without any hassle.",
    rating: 5,
    avatar: "RE",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "CEO, ImportExpress",
    content: "Quick License made our LMPC registration incredibly smooth. The team's expertise and responsiveness exceeded our expectations!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Director, GreenTech Solutions",
    content: "Got our EPR registration completed in record time. Their knowledge of compliance requirements is outstanding.",
    rating: 5,
    avatar: "AP",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-block bg-terracotta/10 text-terracotta text-sm font-bold px-4 py-2 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal">
                Hear What Our
                <br />
                <span className="text-terracotta">Customers</span> have to Say
              </h2>
            </div>
            <p className="text-gray-warm max-w-md lg:text-right">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Quick License.
            </p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'}`}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-terracotta" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-warm text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-accent-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-warm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-3">
              {['RA', 'PS', 'AM', 'VK'].map((initials, i) => (
                <div
                  key={initials}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? '#C45C3E' : '#D4A373'}, ${i % 2 === 0 ? '#E8A87C' : '#C45C3E'})`
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-charcoal">500+ Happy Clients</p>
              <p className="text-xs text-gray-warm">Trusted by businesses across India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
