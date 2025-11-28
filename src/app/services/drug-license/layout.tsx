import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug License Registration - Retailers & Medical Store License India | ₹8,999",
  description: "Get Drug License (Retail/Wholesale) for retailers, medical store, Ayurvedic shop in India. State drug authority approval. Expert filing, fast approval. Mandatory for Consumables / Wellness Items business. From ₹8,999.",
  keywords: "drug license india, retailers license registration, medical store license, retail drug license, wholesale drug license, retailers shop license, ayurvedic product license, healthcare-products license india",
  openGraph: {
    title: "Drug License Online - Open Retail/Medical Store Legally in India | Quick License",
    description: "Drug license for retail/wholesale Consumables / Wellness Items business. State authority approved. Expert support from ₹8,999.",
    type: "website",
  },
};

export default function DrugLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


