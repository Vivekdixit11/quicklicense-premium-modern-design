import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EPR Registration Services in India - Extended Producer Responsibility Assistance | Quick License",
  description: "Professional EPR Registration assistance for Plastic, E-Waste, Battery & Tyres. Expert PIBO compliance support. Fast documentation and filing services. Private consultancy.",
  keywords: "EPR registration services, extended producer responsibility assistance, EPR certificate help, PIBO registration support, plastic EPR consultancy, e-waste EPR service, battery EPR assistance, tyre EPR help, EPR authorization support, producer responsibility consultancy, waste management compliance, import EPR help, manufacturer EPR service, brand owner EPR support, EPR compliance India",
  openGraph: {
    title: "EPR Registration Services - Extended Producer Responsibility Assistance",
    description: "Professional EPR Registration assistance for importers, manufacturers & brand owners. Expert support for Plastic, E-Waste, Battery & Tyre EPR compliance.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPR Registration Services in India | Quick License",
    description: "Fast & reliable EPR Registration assistance for all waste categories. Expert PIBO compliance support. Private consultancy.",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/epr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EPRLayout({
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


