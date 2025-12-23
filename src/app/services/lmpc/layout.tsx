import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LMPC Licensing Consultancy India 2025 | Legal Metrology Expert Assistance | Quick License",
  description: "Professional LMPC Licensing Consultancy & Documentation Preparation. We help importers & manufacturers with compliance and filing process. Statutory fee ₹500 + Professional charges. Private consultancy service.",
  keywords: "LMPC registration services, Legal Metrology Certificate help, LMPC certificate assistance, packaged commodities registration help, import LMPC consultancy, Rule 27 registration, LMPC Delhi consultant, LMPC India service, Legal Metrology consultancy",
  openGraph: {
    title: "LMPC Licensing Consultancy India 2025 | Professional Assistance",
    description: "Professional LMPC Licensing Consultancy. Documentation help for importers & manufacturers. Private consultancy service.",
    url: "https://www.quicklicense.in/services/lmpc",
    siteName: "Quick License",
    images: [
      {
        url: "/og-lmpc.jpg",
        width: 1200,
        height: 630,
        alt: "LMPC Registration Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LMPC Registration Services India 2025 | Quick License",
    description: "Professional LMPC Licensing Consultancy. Documentation help for importers & manufacturers.",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/lmpc",
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

export default function LMPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager removed per request. */}
      {/* Add new tracking snippet here when provided. */}
      
      {children}
    </>
  );
}
