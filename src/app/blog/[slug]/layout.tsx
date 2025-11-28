import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Complete Guide to Private Limited Company Registration in 2024 - Quick License Blog",
    description: "Everything you need to know about registering a Private Limited Company in India - from documentation to post-incorporation steps. Expert guide with step-by-step process.",
    keywords: "private limited company registration, company registration india, pvt ltd registration, incorporation process, business registration 2024, MCA registration, ROC filing, company formation india",
    openGraph: {
      title: "Complete Guide to Private Limited Company Registration in 2024",
      description: "Step-by-step guide to Private Limited Company registration in India with expert tips and documentation requirements.",
      type: "article",
      images: ['https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1600&q=80&auto=format&fit=crop'],
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
