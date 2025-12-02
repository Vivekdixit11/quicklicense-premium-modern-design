"use client";

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
];

const categories = [
  "All Categories",
  "Business Registration",
  "Licenses & Certifications",
  "Startup Resources",
  "Quality Standards",
  "Intellectual Property",
  "Business Growth",
];

const popularTags = [
  "EPR Registration",
  "LMPC",
  "WPC Approval",
  "Private Limited",
  "FSSAI",
  "Startup India",
  "Trademark",
  "MSME",
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-terracotta/20 text-terracotta border-terracotta/30">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-cream leading-tight mb-6">
              Business <span className="text-terracotta">Insights</span> & Guides
            </h1>
            <p className="text-lg text-cream/70 leading-relaxed mb-8">
              Expert advice, practical tips, and comprehensive guides to help you navigate business registration, compliance, and growth.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-warm" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-12 py-6 text-base bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-cream border-b border-gold/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 
                  ? "bg-terracotta hover:bg-terracotta-dark text-white" 
                  : "border-gold/30 text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group overflow-hidden border-gold/20 bg-white hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-terracotta border-0 text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-warm mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal mb-2 line-clamp-2 group-hover:text-terracotta transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-warm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-warm">By {post.author}</span>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="text-terracotta hover:bg-terracotta/10">
                            Read More
                            <ArrowRight className="ml-1 w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center gap-2">
                <Button variant="outline" size="sm" className="border-gold/30">Previous</Button>
                <Button size="sm" className="bg-terracotta hover:bg-terracotta-dark text-white">1</Button>
                <Button variant="outline" size="sm" className="border-gold/30">2</Button>
                <Button variant="outline" size="sm" className="border-gold/30">3</Button>
                <Button variant="outline" size="sm" className="border-gold/30">Next</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Tags */}
              <Card className="border-gold/20 bg-white">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-terracotta" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer border-gold/30 text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Post */}
              <Card className="border-gold/20 bg-cream">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-terracotta" />
                    Featured Article
                  </h3>
                  <div className="space-y-3">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-36 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <h4 className="font-semibold text-charcoal line-clamp-2">{blogPosts[0].title}</h4>
                    <p className="text-sm text-gray-warm line-clamp-2">{blogPosts[0].excerpt}</p>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button className="w-full bg-terracotta hover:bg-terracotta-dark text-white">
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-terracotta bg-terracotta text-white">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-2">
                    📧 Subscribe to Newsletter
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Get the latest business insights delivered to your inbox.
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-white text-terracotta hover:bg-cream">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-gold/20 bg-white">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-terracotta" />
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/epr" className="text-sm text-gray-warm hover:text-terracotta transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" />
                        EPR Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/lmpc" className="text-sm text-gray-warm hover:text-terracotta transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" />
                        LMPC Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/wpc" className="text-sm text-gray-warm hover:text-terracotta transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" />
                        WPC Approval
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/private-limited" className="text-sm text-gray-warm hover:text-terracotta transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" />
                        Private Limited Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-gray-warm hover:text-terracotta transition-colors flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5" />
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

