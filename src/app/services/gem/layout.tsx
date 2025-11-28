import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeM Registration Online - Sell to Government on GeM Portal | ₹4,999",
  description: "Register on GeM (Government e-Marketplace) portal to sell products/services to govt departments. Access ₹4 lakh crore market. GeM seller registration, vendor onboarding. Expert support from ₹4,999.",
  keywords: "gem registration, government e marketplace, gem portal registration, sell to government india, gem vendor registration, gem seller account, govt tender portal, gem certificate",
  openGraph: {
    title: "GeM Portal Registration - Become Government Supplier in India | Quick License",
    description: "GeM registration for vendors. Sell to govt departments, access tenders, grow business. Expert filing from ₹4,999.",
    type: "website",
  },
};

export default function GeMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


