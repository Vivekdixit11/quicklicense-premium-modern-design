"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  TrendingUp,
  FileText,
  Users,
  BookOpen,
} from "lucide-react";

const blogPosts = [
  {
    title: "Complete Guide to Private Limited Company Registration in 2024",
    excerpt: "Everything you need to know about registering a Private Limited Company in India - from documentation to post-incorporation steps.",
    slug: "private-limited-company-guide-2024",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1600&q=80&auto=format&fit=crop",
    category: "Business Registration",
    date: "November 15, 2024",
    readTime: "8 min read",
    author: "Rajesh Kumar",
  },
  {
    title: "FSSAI License: Everything Food Business Owners Must Know",
    excerpt: "A comprehensive guide to FSSAI registration, license types, documentation requirements, and compliance guidelines for food businesses.",
    slug: "fssai-license-complete-guide",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80&auto=format&fit=crop",
    category: "Licenses & Certifications",
    date: "November 10, 2024",
    readTime: "10 min read",
    author: "Priya Sharma",
  },
  {
    title: "Startup India Registration Benefits and Process",
    excerpt: "Discover how to get recognized as a Startup India entity and unlock tax benefits, funding opportunities, and government support.",
    slug: "startup-india-registration-benefits",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80&auto=format&fit=crop",
    category: "Startup Resources",
    date: "November 5, 2024",
    readTime: "7 min read",
    author: "Amit Verma",
  },
  {
    title: "ISO Certification: Types, Benefits, and Application Process",
    excerpt: "Learn about different ISO standards, certification process, benefits for your business, and how to maintain compliance.",
    slug: "iso-certification-guide",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&auto=format&fit=crop",
    category: "Quality Standards",
    date: "November 1, 2024",
    readTime: "9 min read",
    author: "Sneha Patel",
  },
  {
    title: "Trademark Registration: Protect Your Brand Identity",
    excerpt: "Step-by-step guide to trademark registration in India, including search process, application filing, and enforcement strategies.",
    slug: "trademark-registration-guide",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80&auto=format&fit=crop",
    category: "Intellectual Property",
    date: "October 28, 2024",
    readTime: "11 min read",
    author: "Rajesh Kumar",
  },
  {
    title: "MSME Registration: Unlock Government Benefits",
    excerpt: "Discover how MSME/Udyam registration can help your business access subsidies, credit facilities, and preferential treatment.",
    slug: "msme-registration-benefits",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80&auto=format&fit=crop",
    category: "Business Growth",
    date: "October 25, 2024",
    readTime: "6 min read",
    author: "Priya Sharma",
  },
  {
    title: "IEC Code: Your Gateway to Import-Export Business",
    excerpt: "Complete guide to obtaining Import Export Code (IEC) from DGFT, including eligibility, documents required, and online application process.",
    slug: "iec-code-import-export-guide",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80&auto=format&fit=crop",
    category: "Import-Export",
    date: "October 20, 2024",
    readTime: "8 min read",
    author: "Amit Verma",
  },
  {
    title: "LLP vs Private Limited: Which is Right for Your Business?",
    excerpt: "Detailed comparison of LLP and Private Limited Company structures, covering compliance, taxation, liability, and suitability for different business types.",
    slug: "llp-vs-private-limited-comparison",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop",
    category: "Business Structure",
    date: "October 15, 2024",
    readTime: "12 min read",
    author: "Sneha Patel",
  },
  {
    title: "GST Registration: Complete Guide for New Businesses",
    excerpt: "Everything you need to know about GST registration - eligibility criteria, required documents, online process, and compliance requirements.",
    slug: "gst-registration-guide",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80&auto=format&fit=crop",
    category: "Tax & Compliance",
    date: "October 10, 2024",
    readTime: "10 min read",
    author: "Rajesh Kumar",
  },
];

const categories = [
  "All Categories",
  "Business Registration",
  "Licenses & Certifications",
  "Startup Resources",
  "Quality Standards",
  "Intellectual Property",
  "Business Growth",
  "Import-Export",
  "Business Structure",
  "Tax & Compliance",
];

const popularTags = [
  "Private Limited",
  "FSSAI",
  "Startup India",
  "ISO Certification",
  "Trademark",
  "MSME",
  "IEC Code",
  "LLP",
  "GST",
  "Business Registration",
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#feda6a]/30 to-[#feda6a]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#d4d4dc]/30 to-[#d4d4dc]/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 bg-[#feda6a]/20 text-[#feda6a] border-[#feda6a]/30">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Business <span className="bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent">Insights</span> & Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Expert advice, practical tips, and comprehensive guides to help you navigate business registration, compliance, and growth.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles, guides, and resources..."
                  className="pl-12 pr-4 py-6 text-lg bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400 rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-[#23A8DD] to-[#23A8DD] text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-2 hover:border-[#23A8DD] transition-all duration-300 hover:shadow-xl h-full">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 backdrop-blur-sm text-[#23A8DD] border-0">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#23A8DD] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="group/btn">
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="default" className="bg-gradient-to-r from-[#23A8DD] to-[#23A8DD]">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#23A8DD]" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#E2F6F8] hover:text-[#23A8DD] hover:border-[#23A8DD] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Post */}
              <Card className="border-2 bg-gradient-to-br from-[#E2F6F8] to-[#E2F6F8]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#23A8DD]" />
                    Featured Article
                  </h3>
                  <div className="space-y-3">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h4 className="font-bold text-lg line-clamp-2">{blogPosts[0].title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{blogPosts[0].excerpt}</p>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button className="w-full bg-gradient-to-r from-[#23A8DD] to-[#23A8DD]">
                        Read Featured Article
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-2 bg-gradient-to-br from-[#23A8DD] to-[#23A8DD] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    📧 Subscribe to Newsletter
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get the latest business insights, guides, and updates delivered to your inbox every week.
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-white text-[#23A8DD] hover:bg-white/90">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#23A8DD]" />
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/private-limited" className="text-gray-600 hover:text-[#23A8DD] transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Private Limited Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/fssai" className="text-gray-600 hover:text-[#23A8DD] transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        FSSAI License
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/startup-india" className="text-gray-600 hover:text-[#23A8DD] transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Startup India Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/trademark" className="text-gray-600 hover:text-[#23A8DD] transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-[#23A8DD] transition-colors flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Contact Expert Team
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

