import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLP Registration Online in India - Limited Liability Partnership in 7 Days",
  description: "Register your LLP (Limited Liability Partnership) online in India. Low compliance, flexible structure, 2+ partners. Get DPIN, name approval & incorporation. Expert guidance from ₹7,999.",
  keywords: "LLP registration india, limited liability partnership, LLP registration cost, register LLP online, LLP benefits india, DPIN registration, LLP incorporation certificate",
  openGraph: {
    title: "LLP Registration India - Perfect for Professional Partnerships | Quick License",
    description: "Register your LLP in 7 days. Lower compliance than Pvt Ltd. Ideal for professionals & partners. Starting ₹7,999.",
    type: "website",
  },
};

export default function LLPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


