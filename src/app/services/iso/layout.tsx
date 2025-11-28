import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO Certification India - ISO 9001, 14001, 27001 in 15 Days | Quick License",
  description: "Get ISO 9001, ISO 14001, ISO 27001 certification for your business in India. Quality management, environmental & information security standards. Global recognition, expert consultants. From ₹12,999.",
  keywords: "iso certification india, iso 9001 certification, iso 14001, iso 27001, quality management certification, iso registration online, iso consultant india, iso certificate cost",
  openGraph: {
    title: "ISO Certification Online - Global Quality Standards for Indian Businesses",
    description: "ISO 9001/14001/27001 certification in 15 days. Boost credibility, win tenders, go global. Expert support from ₹12,999.",
    type: "website",
  },
};

export default function ISOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


