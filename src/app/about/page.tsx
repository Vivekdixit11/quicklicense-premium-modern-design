"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  ThumbsUp,
  Globe,
  Briefcase,
  Heart,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Clients", value: "10,000+" },
  { label: "Services Offered", value: "26+" },
  { label: "Success Rate", value: "99%" },
];

const values = [
  {
    icon: Target,
    title: "Client-Centric Approach",
    desc: "Your success is our priority. We tailor our services to meet your unique business needs.",
  },
  {
    icon: Shield,
    title: "100% Compliance",
    desc: "We ensure full compliance with all government regulations and legal requirements.",
  },
  {
    icon: ThumbsUp,
    title: "Transparency",
    desc: "No hidden charges, clear communication, and honest advice at every step.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "We understand the value of time and deliver your licenses on schedule.",
  },
];

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    desc: "15+ years in corporate law and business registrations",
  },
  {
    name: "Priya Mehta",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    desc: "Expert in streamlining registration processes",
  },
  {
    name: "Amit Kumar",
    role: "Chief Legal Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    desc: "Specializes in compliance and regulatory matters",
  },
  {
    name: "Sneha Patel",
    role: "Client Relations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    desc: "Dedicated to ensuring client satisfaction",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Started with a mission to simplify business registrations" },
  { year: "2016", title: "1000+ Clients", desc: "Reached our first major milestone" },
  { year: "2018", title: "Expanded Services", desc: "Added 15+ new registration services" },
  { year: "2020", title: "Digital Transformation", desc: "Launched fully online platform" },
  { year: "2023", title: "10,000+ Businesses", desc: "Helped thousands of entrepreneurs succeed" },
];

const certifications = [
  { icon: Award, title: "ISO 9001:2015 Certified", desc: "Quality management systems" },
  { icon: Shield, title: "Government Authorized", desc: "Licensed by MCA & FSSAI" },
  { icon: CheckCircle2, title: "Industry Recognition", desc: "Best service provider 2023" },
  { icon: Globe, title: "Pan-India Presence", desc: "Services across all states" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2">About Us</Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Empowering <span className="gradient-text">Entrepreneurs</span> Since 2014
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're on a mission to make business registration simple, fast, and accessible for everyone. 
              With 10 years of experience and 10,000+ satisfied clients, we're India's most trusted partner 
              for business compliance.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Building Trust, <span className="gradient-text">One Business at a Time</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, LegalEase was born out of a simple observation: entrepreneurs 
                  were spending too much time and money navigating complex registration processes, 
                  when they should be focusing on building their businesses.
                </p>
                <p>
                  Our founder, Rajesh Sharma, experienced these challenges firsthand while starting 
                  his first venture. He realized there was a need for a reliable, efficient, and 
                  transparent service that could handle all aspects of business registration and licensing.
                </p>
                <p>
                  Today, we've helped over 10,000 businesses get started, ranging from small startups 
                  to large enterprises. Our team of experts ensures that every client receives 
                  personalized attention and hassle-free service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative glass-effect rounded-3xl p-4 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Mission & Vision</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift border-2 hover:border-primary smooth-transition">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To simplify the business registration process and make entrepreneurship accessible 
                    to everyone. We strive to provide fast, reliable, and affordable services that 
                    help businesses focus on growth rather than compliance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full hover-lift border-2 hover:border-primary smooth-transition">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted and comprehensive platform for business services, 
                    empowering millions of entrepreneurs to turn their dreams into successful businesses 
                    with complete peace of mind regarding compliance and legal matters.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover-lift border-2 hover:border-primary smooth-transition">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of professionals brings decades of combined experience in 
              business registration, compliance, and legal services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Trust Indicators</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Certified & <span className="gradient-text">Recognized</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mx-auto mb-6">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              <span className="gradient-text">Milestones</span> That Matter
            </h2>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-lift border-l-4 border-l-primary">
                  <CardContent className="p-6 flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
