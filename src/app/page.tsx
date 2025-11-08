export const dynamic = "force-static";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  ArrowRight,
  ShieldCheck,
  Rocket,
  FileText,
  Sparkles,
  Briefcase,
  Globe,
  Target,
  Zap,
  HeadphonesIcon,
  Play,
  CheckCircle2,
  BellRing,
  Layers,
  Cpu,
  Users,
  ArrowUpRight,
  BookOpen,
  Award,
  TrendingUp,
  Lock,
  Clock,
} from "lucide-react";

const trustBrands = [
  { name: "Google", logo: "🔷" },
  { name: "Amazon", logo: "🟧" },
  { name: "Flipkart", logo: "🔶" },
  { name: "Zomato", logo: "🔴" },
  { name: "Swiggy", logo: "🟠" },
  { name: "Paytm", logo: "🔵" }
];

const stageHighlights = [
  {
    title: "Start Smart",
    description: "Register your dream venture in record time with our dedicated launch squad.",
    items: ["Private Limited", "LLP", "OPC", "Startup India"],
    accent: "from-primary/10 to-blue-500/10",
  },
  {
    title: "Scale Fearlessly",
    description: "Stay compliant and ready for funding with proactive governance dashboards.",
    items: ["ROC Filings", "Cap Table", "Data Room", "Board Advisory"],
    accent: "from-purple-500/10 to-fuchsia-500/10",
  },
  {
    title: "Secure Continuity",
    description: "Protect brand, employees, and revenue with airtight legal operations.",
    items: ["Trademarks", "Contracts", "Labour", "GST"],
    accent: "from-cyan-500/10 to-emerald-500/10",
  },
];

const services = [
  { icon: Rocket, name: "Private Limited Company", href: "/services/private-limited", desc: "Launch a VC-ready company with complete compliance." },
  { icon: FileText, name: "LLP Registration", href: "/services/llp", desc: "Flexible partnership structure tailored for professionals." },
  { icon: Globe, name: "IEC Code", href: "/services/iec", desc: "Start importing & exporting in under 7 days." },
  { icon: ShieldCheck, name: "ISO Certification", href: "/services/iso", desc: "Win customer trust with globally benchmarked processes." },
  { icon: Briefcase, name: "MSME Registration", href: "/services/msme", desc: "Unlock government incentives & priority lending." },
  { icon: Target, name: "Startup India", href: "/services/startup-india", desc: "Government recognised startup status with expert guidance." },
  { icon: FileText, name: "FSSAI License", href: "/services/fssai", desc: "Serve safe with end-to-end food business licensing." },
  { icon: ShieldCheck, name: "Trademark", href: "/services/trademark", desc: "Protect your brand across India with zero surprises." },
];

const proofPoints = [
  { value: "10k+", label: "Businesses launched" },
  { value: "26+", label: "Compliance offerings" },
  { value: "99%", label: "Approval success" },
  { value: "4.9/5", label: "Client satisfaction" },
];

const growthMetrics = [
  {
    value: "48 hrs",
    label: "Average incorporation",
    description: "From KYC collection to Certificate of Incorporation delivered with expedited filings and guided paperwork.",
  },
  {
    value: "65%",
    label: "Faster compliance closure",
    description: "Workflow automation shortens approval cycles across ROC, GST, labour, and sectoral authorities for operating teams.",
  },
  {
    value: "450+",
    label: "Specialists on call",
    description: "Startup lawyers, CAs, CS, and industry consultants who plug directly into your stack whenever risk surfaces.",
  },
];

const aiHighlights = [
  {
    icon: BellRing,
    title: "Intelligent nudges",
    description: "Contextual reminders hit Slack, WhatsApp, and email so approvers sign off before the clock runs out.",
  },
  {
    icon: Layers,
    title: "Smart playbooks",
    description: "Digitised SOPs trace every step—capture, review, archive—across 26+ compliance journeys in one hub.",
  },
  {
    icon: Cpu,
    title: "Risk heuristics",
    description: "AI flags anomalies in filings, identity proof, and board documentation before they trigger downstream penalties.",
  },
];

const expertSquad = [
  {
    title: "Startup Lawyers",
    description: "Deal room structuring, term sheet review, and ESOP policy drafting tailored for fundraising-ready companies.",
    badge: "VC diligence ready",
  },
  {
    title: "Compliance Architects",
    description: "Monthly governance councils with ROC trackers, GST scorecards, and investor updates shipped automatically.",
    badge: "Ops command",
  },
  {
    title: "Payroll & HRMS Partners",
    description: "Integrations for onboarding, PF/ESI filings, and policy roll-outs that scale headcount without paperwork chaos.",
    badge: "People-first",
  },
];

const contactBenefits = [
  "Personalised compliance roadmap for your sector and stage",
  "360° review of filings, licences, and brand protection gaps",
  "Live platform walkthrough with automation recommendations",
];

const newsLogos = ["YourStory", "Inc42", "The Economic Times", "Mint", "Business Standard"];

const blogPosts = [
  {
    title: "Designing a compliance engine that scales beyond Series A",
    excerpt: "How modern startup teams reimagine compliance as a growth enabler rather than a cost centre.",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=1600&q=80&auto=format&fit=crop",
    href: "/blog/compliance-engine-series-a",
  },
  {
    title: "The ultimate incorporation checklist for founders in 2024",
    excerpt: "A week-by-week guide to paperwork, capital infusion, and board authorisations for new entities.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80&auto=format&fit=crop",
    href: "/blog/incorporation-checklist-2024",
  },
  {
    title: "Building investor-grade data rooms in under 10 days",
    excerpt: "Streamline due diligence with our templated folder structures, risk matrix, and audit-ready logs.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1600&q=80&auto=format&fit=crop",
    href: "/blog/investor-grade-data-room",
  },
];

const testimonials = [
  {
    quote: "The LegalEase dashboard is our compliance command centre. We closed our seed round in 30 days thanks to their data room.",
    name: "Rajesh Kumar",
    role: "Founder · TechStart Solutions",
  },
  {
    quote: "From FSSAI to GST, every renewal arrives on time with proactive nudges. The team feels like an extension of ours.",
    name: "Priya Sharma",
    role: "Owner · Food Delight Cafe",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Beautiful Animated Background */}
        <section className="relative overflow-hidden min-h-[95vh] flex items-center bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
          {/* Animated Gradient Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#feda6a]/30 to-[#feda6a]/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#d4d4dc]/30 to-[#d4d4dc]/20 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#feda6a]/20 to-[#d4d4dc]/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-40 right-1/4 w-72 h-72 bg-gradient-to-br from-[#feda6a]/25 to-[#feda6a]/15 rounded-full blur-3xl animate-float-slow" />
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(254, 218, 106, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(254, 218, 106, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'grid-flow 20s linear infinite'
          }} />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#feda6a]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-particle ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="container-custom relative z-10 py-16 lg:py-24">
            {/* Main Heading */}
            <div className="text-center space-y-8 max-w-6xl mx-auto mb-16">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#393f4d]/50 backdrop-blur-md border border-[#d4d4dc]/20 rounded-full shadow-lg animate-fade-in-down">
                <Sparkles className="w-5 h-5 text-[#feda6a] animate-pulse" />
                <span className="text-[#d4d4dc] font-semibold text-sm md:text-base">
                  Your Complete Legal & Compliance Partner
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] tracking-tight animate-fade-in-up">
                Empower Your Vision.
                <br />
                <span className="relative inline-block mt-3">
                  <span className="bg-gradient-to-r from-[#feda6a] via-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent animate-gradient-x">
                    Simplify Your Success.
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#feda6a] via-[#feda6a] to-[#d4d4dc] rounded-full animate-pulse" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#d4d4dc] font-light max-w-4xl mx-auto leading-relaxed animate-fade-in">
                India&apos;s Most Trusted Platform for Business Success
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#feda6a] via-[#d4d4dc] to-[#feda6a] rounded-full opacity-30 group-hover:opacity-50 blur-lg transition-all duration-500" />
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for any service... (e.g., Company Registration)"
                    className="w-full h-16 md:h-20 pl-7 pr-20 text-base md:text-xl rounded-full bg-white/98 backdrop-blur-sm border-2 border-[#d4d4dc]/60 shadow-2xl focus:ring-4 focus:ring-[#feda6a]/50 transition-all font-medium text-[#1d1e22] placeholder:text-[#393f4d]"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#feda6a] to-[#feda6a] hover:from-[#feda6a]/90 hover:to-[#feda6a]/90 text-[#1d1e22] rounded-full p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {[
                  { icon: "🏢", label: "Company Registration" },
                  { icon: "™️", label: "Trademark Registration" },
                  { icon: "📊", label: "GST Registration" },
                  { icon: "⚖️", label: "Legal Consultation" }
                ].map((service, idx) => (
                  <button
                    key={service.label}
                    className="group px-6 py-3 bg-[#393f4d]/50 hover:bg-[#feda6a]/90 backdrop-blur-md text-white hover:text-[#1d1e22] text-sm md:text-base font-semibold rounded-full border border-[#d4d4dc]/30 hover:border-[#feda6a] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="mr-2 group-hover:scale-110 inline-block transition-transform">{service.icon}</span>
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Three Stage Cards - Inspired by Vakilsearch */}
            <div className="relative max-w-6xl mx-auto perspective-1000">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1 - Start Your Business */}
                <div className="transform md:-rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border-t-4 border-[#feda6a] hover:shadow-[#feda6a]/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#feda6a] to-[#feda6a]/80 rounded-xl flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-[#1d1e22]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1d1e22]">Start Your Business ▸</h3>
                    </div>
                    <p className="text-[#393f4d] leading-relaxed mb-4">
                      Launch your business effortlessly with expert-guided incorporation, registrations, and licensing.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-[#393f4d]">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#feda6a]" />
                        Private Limited Company
                      </div>
                      <div className="flex items-center text-sm text-[#393f4d]">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#feda6a]" />
                        LLP Registration
                      </div>
                      <div className="flex items-center text-sm text-[#393f4d]">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-[#feda6a]" />
                        Startup India Registration
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Manage Your Business */}
                <div className="transform md:rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border-t-4 border-[#393f4d] hover:shadow-[#393f4d]/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#393f4d] to-[#1d1e22] rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1d1e22]">Manage Your Business ▸</h3>
                    </div>
                    <p className="text-[#393f4d] leading-relaxed mb-4">
                      Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-purple-600" />
                        GST Filing & Returns
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-purple-600" />
                        Annual Compliance
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-purple-600" />
                        Labour Law Compliance
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Protect Your Business */}
                <div className="transform md:-rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 h-full border-t-4 border-emerald-500 hover:shadow-emerald-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Protect Your Business ▸</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Secure your brand with trademark registration, contracts, and legal support from trusted experts.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                        Trademark Registration
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                        Legal Contracts & Agreements
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                        Expert Legal Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section - Logo Marquee */}
        <section className="bg-black py-4">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center">
                  {["HDFC BANK", "amazon", "OYO", "Swiggy", "bigbasket", "HDFC BANK", "amazon", "OYO"].map((brand, idx) => (
                    <div key={`${setIndex}-${idx}`} className="mx-8 flex items-center">
                      <span className="text-white/80 font-bold text-lg tracking-wider">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Journey Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-200 to-indigo-200 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-900">Your Success Journey</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 leading-tight">
                From Vision to
                <span className="block mt-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Market Leader
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                We support you at every stage of your entrepreneurial journey
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 max-w-6xl mx-auto">
              {stageHighlights.map((stage, idx) => (
                <div
                  key={stage.title}
                  className="group relative"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.accent} flex items-center justify-center shadow-md`}>
                        <div className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {idx + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-gray-900">{stage.title}</h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {stage.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {stage.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-xs font-medium text-blue-900 hover:from-blue-100 hover:to-purple-100 transition-all cursor-pointer"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Decorative Arrow */}
                    {idx < 2 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-purple-300">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-12 lg:py-16 bg-white overflow-hidden" id="services">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-900">Comprehensive Solutions</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
                Everything Your Business
                <span className="block mt-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Needs to Thrive
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                From registration to compliance, trademark to taxation
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {services.map((service, idx) => {
                const gradients = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-pink-500',
                  'from-emerald-500 to-teal-500',
                  'from-orange-500 to-red-500',
                  'from-indigo-500 to-blue-500',
                  'from-fuchsia-500 to-purple-500',
                  'from-cyan-500 to-blue-500',
                  'from-rose-500 to-pink-500',
                ];
                const gradient = gradients[idx % gradients.length];
                
                return (
                  <Link key={service.name} href={service.href} className="group">
                    <div className="relative h-full">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                      
                      {/* Card */}
                      <div className="relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-transparent h-full flex flex-col">
                        {/* Icon */}
                        <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="font-heading text-base font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-xs">
                            {service.desc}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center gap-2 text-indigo-600 font-semibold text-xs group-hover:gap-3 transition-all">
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA Banner */}
            <div className="mt-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-black/10" />
                <div className="grid lg:grid-cols-2 items-center relative z-10">
                  <div className="p-8 lg:p-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-xs">Quick & Easy Process</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white leading-tight">
                      Not Sure Where to Start?
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Let our experts guide you through the perfect compliance roadmap for your business.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-5 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        Get Free Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="relative h-full min-h-[280px] flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                        <HeadphonesIcon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-white">24/7</div>
                      <p className="text-lg font-semibold text-white">Expert Support</p>
                      <div className="flex justify-center gap-2 pt-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-[#d4d4dc]/10 via-white to-[#d4d4dc]/10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-[#feda6a]/20 to-[#feda6a]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-[#393f4d]/20 to-[#393f4d]/10 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#feda6a]/10 backdrop-blur-sm border border-[#feda6a]/30 rounded-full">
                    <Award className="w-4 h-4 text-[#feda6a]" />
                    <span className="text-xs font-semibold text-[#1d1e22]">Why Choose QuickLicense</span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-[#1d1e22] leading-tight">
                    Built for Modern
                    <span className="block mt-2 bg-gradient-to-r from-[#feda6a] to-[#393f4d] bg-clip-text text-transparent">
                      Entrepreneurs
                    </span>
                  </h2>
                  <p className="text-sm text-[#393f4d] leading-relaxed">
                    We combine cutting-edge technology with legal expertise to deliver a seamless compliance experience that scales with your ambition.
                  </p>
                </div>

                {/* Desktop View - Grid */}
                <div className="hidden md:grid gap-4">
                  {[
                    {
                      icon: Zap,
                      title: "Lightning Fast",
                      desc: "Average incorporation time of just 48 hours with our streamlined process and government integrations.",
                    },
                    {
                      icon: Lock,
                      title: "100% Secure",
                      desc: "Bank-grade encryption and secure document storage. Your data is protected with enterprise-level security.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth Ready",
                      desc: "From startup to scale-up, our solutions grow with you. IPO-ready compliance infrastructure from day one.",
                    }
                  ].map((feature, idx) => (
                    <div
                      key={feature.title}
                      className="group relative"
                      style={{ animationDelay: `${idx * 150}ms` }}
                    >
                      <div className="absolute inset-0 bg-[#feda6a]/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                      <div className="relative flex gap-4 p-4 rounded-xl bg-white border border-[#d4d4dc]/30 hover:shadow-lg hover:border-[#feda6a]/50 transition-all duration-500">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#feda6a] to-[#feda6a]/80 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <feature.icon className="w-6 h-6 text-[#1d1e22]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-base font-heading font-bold text-[#1d1e22]">{feature.title}</h3>
                          <p className="text-[#393f4d] leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile View - Carousel */}
                <div className="md:hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {[
                        {
                          icon: Zap,
                          title: "Lightning Fast",
                          desc: "Average incorporation time of just 48 hours with our streamlined process and government integrations.",
                        },
                        {
                          icon: Lock,
                          title: "100% Secure",
                          desc: "Bank-grade encryption and secure document storage. Your data is protected with enterprise-level security.",
                        },
                        {
                          icon: TrendingUp,
                          title: "Growth Ready",
                          desc: "From startup to scale-up, our solutions grow with you. IPO-ready compliance infrastructure from day one.",
                        }
                      ].map((feature, idx) => (
                        <CarouselItem key={feature.title}>
                          <div className="p-1">
                            <div className="relative flex gap-4 p-5 rounded-xl bg-white border border-[#d4d4dc]/30 shadow-lg">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#feda6a] to-[#feda6a]/80 flex items-center justify-center shadow-md flex-shrink-0">
                                <feature.icon className="w-6 h-6 text-[#1d1e22]" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <h3 className="text-base font-heading font-bold text-[#1d1e22]">{feature.title}</h3>
                                <p className="text-[#393f4d] leading-relaxed text-sm">{feature.desc}</p>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                  </Carousel>
                </div>
              </div>

              {/* Image Side */}
              <div className="relative lg:h-[450px]">
                {/* Main Image Grid */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Column 1 */}
                  <div className="space-y-4">
                    {/* Stats Card */}
                    <div className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                        <p className="text-white/90 font-semibold text-sm">Happy Clients</p>
                        <div className="mt-3 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Image Card */}
                    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                      <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-44 object-cover"
                      />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 pt-8">
                    {/* Image Card */}
                    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=90&auto=format&fit=crop"
                        alt="Professional team"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    {/* Success Rate Card */}
                    <div className="group relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                          <span className="text-white font-semibold text-sm">Guaranteed Results</span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">99.8%</div>
                        <p className="text-white/90 font-semibold text-sm">Success Rate</p>
                        <div className="mt-3 w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-white h-full rounded-full" style={{ width: '99.8%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-xl border-2 border-indigo-100 animate-float">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                    <span className="font-bold text-gray-900 text-sm">Industry Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <Badge className="mb-2 text-xs">People who make it happen</Badge>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-slate-900">Expert squads embedded with your team.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our specialists plug into board meetings, finance huddles, and HR cadences so you scale with precision and peace of mind.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {expertSquad.map((expert) => (
                <Card key={expert.title} className="border-0 shadow-[0_20px_60px_-40px_rgba(59,130,246,0.35)]">
                  <CardContent className="p-5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      <Users className="w-3 h-3" />
                      {expert.badge}
                    </div>
                    <h3 className="mt-3 text-base font-heading font-semibold text-slate-900">{expert.title}</h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{expert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_55%)]" />
          <div className="container-custom relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <Badge className="bg-white/10 text-white mb-4">Your command centre</Badge>
                <h2 className="text-2xl md:text-4xl font-heading font-bold">Numbers that inspire confidence.</h2>
                <p className="mt-4 text-sm text-slate-200 max-w-xl">
                  Join a community of founders, CFOs, and operations leaders who rely on LegalEase to forecast compliance workload, close funding rounds faster, and protect brand reputation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="bg-white/10 border-white/20 backdrop-blur-md text-left">
                      <CardContent className="p-6">
                        <p className="text-xs text-slate-100 leading-relaxed">“{testimonial.quote}”</p>
                        <div className="mt-4 text-xs font-semibold text-slate-200">{testimonial.name}</div>
                        <div className="text-[11px] text-slate-300">{testimonial.role}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding border-y border-slate-100 bg-white">
          <div className="container-custom">
            <div className="text-center">
              <Badge className="mb-4 text-xs">In the press</Badge>
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-semibold text-slate-400">
                {newsLogos.map((brand) => (
                  <span key={brand} className="uppercase tracking-[0.35em] hover:text-slate-600 transition-colors">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/40">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div>
                <Badge className="mb-2 text-xs">Insights & playbooks</Badge>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-slate-900">Resources to keep your team audit-ready.</h2>
              </div>
              <Link href="/blog" className="text-xs font-semibold text-primary inline-flex items-center gap-1">
                Explore all articles
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.title} className="overflow-hidden border-0 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
                  <div className="h-32 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      <BookOpen className="w-3 h-3" />
                      Deep dive
                    </div>
                    <h3 className="text-base font-heading font-semibold text-slate-900">{post.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Link href={post.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      Read article
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
              <div>
                <Badge className="mb-3 text-xs">Tailored guidance</Badge>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-slate-900">Speak with a compliance architect in minutes.</h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  Share your growth goals and regulatory to-do list. We will map the fastest route to approvals and streamline your compliance cockpit.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {contactBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary" />
                      <span className="text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-[10px] text-muted-foreground">
                  Average first response time: under 30 minutes during business hours.
                </div>
              </div>

              <Card className="border-0 shadow-[0_25px_60px_-35px_rgba(59,130,246,0.45)]">
                <CardContent className="p-5">
                  <form action="/contact" method="post" className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em]">Full name</label>
                        <Input id="name" name="name" placeholder="Lakshmi Patel" required className="text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em]">Work email</label>
                        <Input id="email" name="email" type="email" placeholder="you@company.com" required className="text-xs" />
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em]">Phone</label>
                        <Input id="phone" name="phone" type="tel" placeholder="(+91) 98916 14601" required className="text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="service" className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em]">Priority service</label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/60"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          {services.map((service) => (
                            <option key={service.name} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em]">Share your goals</label>
                      <Textarea id="message" name="message" rows={3} placeholder="Tell us about your current compliance stack and the milestones you want to hit." className="text-xs" />
                    </div>
                    <Button type="submit" size="lg" className="w-full animated-gradient text-white font-semibold text-sm">
                      Request strategy session
                    </Button>
                    <p className="text-[10px] text-muted-foreground text-center">
                      By submitting this form you agree to receive communication from LegalEase. We respect your inbox and privacy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-12">
          <div className="container-custom text-center">
            <Badge className="text-xs mb-3">Ready to move fast?</Badge>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-slate-900 max-w-2xl mx-auto">
              Your compliance success story starts today.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
              Speak to our specialists, get a personalised roadmap, and experience the platform that keeps ambitious founders ahead of every regulation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="animated-gradient text-white font-semibold px-6 text-sm">Book a strategy call</Button>
              </Link>
              <Link href="tel:+919891614601">
                <Button size="lg" variant="outline" className="font-semibold px-6 text-sm">Call +91 98916 14601</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
