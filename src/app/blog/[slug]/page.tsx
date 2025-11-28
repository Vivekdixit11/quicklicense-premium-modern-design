"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  User,
  Tag,
  ArrowRight,
} from "lucide-react";

export default function BlogPostPage() {
  const relatedPosts = [
    {
      title: "LLP vs Private Limited: Which is Right for Your Business?",
      slug: "llp-vs-private-limited-comparison",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "GST Registration: Complete Guide for New Businesses",
      slug: "gst-registration-guide",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#feda6a]/30 to-[#feda6a]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#d4d4dc]/30 to-[#d4d4dc]/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-[#feda6a] hover:text-[#d4d4dc] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-[#feda6a]/20 text-[#feda6a] border-[#feda6a]/30">
              Business Registration
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Complete Guide to Private Limited Company Registration in 2024
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Rajesh Kumar</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto -mt-16 relative z-20">
            <img
              src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1600&q=80&auto=format&fit=crop"
              alt="Private Limited Company Registration"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Starting a Private Limited Company is one of the most popular choices for entrepreneurs in India. 
                  This comprehensive guide will walk you through everything you need to know about Private Limited 
                  Company registration in 2024.
                </p>

                <h2>What is a Private Limited Company?</h2>
                <p>
                  A Private Limited Company is a type of business entity that is privately held by a small group of 
                  people. It offers limited liability protection to its shareholders while providing the flexibility 
                  to raise capital and expand operations. The company is governed by the Companies Act, 2013 and 
                  regulated by the Ministry of Corporate Affairs (MCA).
                </p>

                <h2>Key Features of Private Limited Company</h2>
                <ul>
                  <li><strong>Limited Liability:</strong> Shareholders' personal assets are protected from business debts and liabilities</li>
                  <li><strong>Separate Legal Entity:</strong> The company has its own legal identity, separate from its owners</li>
                  <li><strong>Perpetual Succession:</strong> Business continues to exist even if shareholders change</li>
                  <li><strong>Easy to Raise Funds:</strong> Can raise capital from investors, banks, and venture capitalists</li>
                  <li><strong>Tax Benefits:</strong> Lower tax rates compared to proprietorship and partnership firms</li>
                </ul>

                <h2>Requirements for Registration</h2>
                <p>To register a Private Limited Company in India, you need:</p>
                <ul>
                  <li>Minimum 2 Directors (Maximum 15)</li>
                  <li>Minimum 2 Shareholders (Maximum 200)</li>
                  <li>Registered Office Address in India</li>
                  <li>Minimum Capital: ₹1,00,000 (Authorized Capital)</li>
                  <li>Digital Signature Certificate (DSC) for all directors</li>
                  <li>Director Identification Number (DIN) for all directors</li>
                </ul>

                <h2>Documents Required</h2>
                <p>Prepare the following documents before starting the registration process:</p>
                <ul>
                  <li>PAN Card of all Directors and Shareholders</li>
                  <li>Aadhaar Card of all Directors</li>
                  <li>Passport-size photographs</li>
                  <li>Address Proof (Electricity Bill, Bank Statement, or Rental Agreement)</li>
                  <li>Rental Agreement or NOC from property owner (for registered office)</li>
                  <li>Bank Statement of last 3 months</li>
                </ul>

                <h2>Step-by-Step Registration Process</h2>
                
                <h3>Step 1: Obtain Digital Signature Certificate (DSC)</h3>
                <p>
                  All proposed directors need to obtain a Class 3 Digital Signature Certificate from authorized 
                  certifying agencies. This is required to file documents with MCA electronically.
                </p>

                <h3>Step 2: Apply for Director Identification Number (DIN)</h3>
                <p>
                  Each director must have a unique DIN issued by the Ministry of Corporate Affairs. Apply for DIN 
                  through Form DIR-3 on the MCA portal.
                </p>

                <h3>Step 3: Name Reservation (RUN Application)</h3>
                <p>
                  Reserve your company name through the Reserve Unique Name (RUN) application. Propose 2 unique 
                  names that comply with MCA naming guidelines. Approval typically takes 1-2 days.
                </p>

                <h3>Step 4: File Incorporation Documents</h3>
                <p>
                  File SPICe+ form (INC-32) along with MOA (Memorandum of Association) and AOA (Articles of Association). 
                  This integrated form also includes applications for PAN and TAN.
                </p>

                <h3>Step 5: Certificate of Incorporation</h3>
                <p>
                  Once MCA approves your application, you'll receive the Certificate of Incorporation along with 
                  company PAN and TAN. This typically takes 2-4 days after document submission.
                </p>

                <h3>Step 6: Post-Incorporation Compliances</h3>
                <p>After incorporation, complete these formalities:</p>
                <ul>
                  <li>Open a Current Bank Account</li>
                  <li>Issue Share Certificates to shareholders</li>
                  <li>Conduct First Board Meeting (within 30 days)</li>
                  <li>File INC-20A (Commencement of Business)</li>
                </ul>

                <h2>Cost of Registration</h2>
                <p>
                  The total cost for Private Limited Company registration varies based on authorized capital and 
                  professional fees. Government fees start from ₹4,500, and professional service packages typically 
                  range from ₹6,999 to ₹15,000.
                </p>

                <h2>Timeline</h2>
                <p>
                  With all documents ready, the entire registration process takes 7-10 working days. Name approval 
                  takes 1-2 days, and incorporation certificate is issued within 2-4 days of filing.
                </p>

                <h2>Annual Compliance Requirements</h2>
                <p>After incorporation, ensure timely compliance with:</p>
                <ul>
                  <li>Annual ROC Filing (AOC-4 and MGT-7)</li>
                  <li>Income Tax Returns</li>
                  <li>GST Returns (if applicable)</li>
                  <li>Board Meetings (minimum 4 per year)</li>
                  <li>Annual General Meeting (AGM)</li>
                  <li>Statutory Audit</li>
                </ul>

                <h2>Benefits of Professional Assistance</h2>
                <p>
                  While it's possible to register yourself, professional services offer several advantages:
                </p>
                <ul>
                  <li>Expert guidance on company structure and compliance</li>
                  <li>Faster processing with dedicated support</li>
                  <li>Error-free documentation</li>
                  <li>Post-incorporation support and reminders</li>
                  <li>Free consultation for ongoing compliance needs</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Registering a Private Limited Company is a strategic decision that offers numerous benefits including 
                  limited liability, tax advantages, and credibility. While the process may seem complex, with proper 
                  documentation and expert guidance, you can complete registration smoothly within 7-10 days.
                </p>
                <p>
                  Ready to start your business? Get expert assistance for Private Limited Company registration and 
                  ensure 100% compliance from day one.
                </p>

                <div className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl border-2 border-indigo-200">
                  <h3 className="text-2xl font-bold mb-4">Need Help with Company Registration?</h3>
                  <p className="text-gray-600 mb-6">
                    Get your Private Limited Company registered in just 7-10 days with expert support and 100% compliance guarantee.
                  </p>
                  <Link href="/services/private-limited">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                      Start Registration Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Share */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share Article
                      </h3>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" className="justify-start">
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Private Limited</Badge>
                        <Badge variant="outline">Company Registration</Badge>
                        <Badge variant="outline">MCA</Badge>
                        <Badge variant="outline">Business Setup</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="group overflow-hidden border-2 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn p-0">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
