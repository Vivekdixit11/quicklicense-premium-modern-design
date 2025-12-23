import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Registration Blog - Expert Guides for Indian Entrepreneurs | Quick License",
  description: "Read latest guides on company registration, GST, FSSAI, trademark, MSME & startup India. Expert tips for Indian business owners to navigate licenses and compliance easily.",
  keywords: "business registration blog india, company formation guides, startup tips india, FSSAI license guide, trademark registration tips, GST compliance articles, indian entrepreneur blog",
  openGraph: {
    title: "Quick License Blog - Your Guide to Business Success in India",
    description: "Expert insights on business registration, licenses, compliance & growth strategies for Indian startups.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

