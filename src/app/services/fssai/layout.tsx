import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FSSAI License Registration Online - Food License in 7 Days | ₹2,999",
  description: "Get FSSAI license for your food business online. Basic, State & Central license registration. Mandatory for restaurants, cafes, food manufacturers. Expert filing, fast approval. Starting ₹2,999.",
  keywords: "fssai license registration, food license india, fssai registration online, restaurant license, food business license, fssai basic license, fssai state license, food safety certificate",
  openGraph: {
    title: "FSSAI License Online - Food Safety Certificate in 7 Days | Quick License",
    description: "Mandatory food license for all food businesses. Basic/State/Central licenses. Expert support, quick approval.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/services/fssai",
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

export default function FSSAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


