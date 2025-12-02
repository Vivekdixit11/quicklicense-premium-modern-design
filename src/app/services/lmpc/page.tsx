import { Metadata } from "next";
import LMPCPageClient from "./LMPCPageClient";

export const metadata: Metadata = {
  title: "LMPC Registration India 2025 | Legal Metrology Certificate | Quick License",
  description: "Get LMPC Certificate (Legal Metrology Packaged Commodities) registration in 7-15 days. Mandatory for importers & manufacturers. Govt fees ₹500 + Professional charges. Avoid ₹25,000 penalty. Apply online now!",
  keywords: "LMPC registration, Legal Metrology Certificate, LMPC certificate online, packaged commodities registration, import LMPC, Rule 27 registration, LMPC Delhi, LMPC India, Legal Metrology Act",
  openGraph: {
    title: "LMPC Registration India 2025 | Legal Metrology Certificate",
    description: "Get LMPC Certificate in 7-15 days. Mandatory for importers & manufacturers. Avoid ₹25,000 penalty. Expert assistance available.",
    url: "https://quicklicense.in/services/lmpc",
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
    title: "LMPC Registration India 2025 | Quick License",
    description: "Get LMPC Certificate in 7-15 days. Mandatory for importers & manufacturers.",
  },
  alternates: {
    canonical: "https://quicklicense.in/services/lmpc",
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

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://quicklicense.in/services/lmpc#service",
      name: "LMPC Registration Services",
      description: "Complete LMPC (Legal Metrology Packaged Commodities) registration services for importers, manufacturers, and packers in India.",
      provider: {
        "@type": "Organization",
        name: "Quick License",
        url: "https://quicklicense.in",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "LMPC Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Central LMPC Registration",
              description: "For importers - Lifetime validity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "State LMPC Registration",
              description: "For manufacturers and packers",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://quicklicense.in/services/lmpc#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is LMPC Registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LMPC stands for Legal Metrology Packaged Commodities. It is a mandatory registration under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011 for any entity dealing with pre-packaged goods in India.",
          },
        },
        {
          "@type": "Question",
          name: "Who needs LMPC Registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Importers of pre-packaged goods, manufacturers, packers, and e-commerce sellers displaying packaged products need LMPC registration.",
          },
        },
        {
          "@type": "Question",
          name: "What is the penalty for not having LMPC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-registration can result in a fine up to ₹25,000, goods seizure at customs, and business closure. Port detention charges can exceed ₹2,00,000.",
          },
        },
        {
          "@type": "Question",
          name: "How long does LMPC registration take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Central LMPC for importers takes 10-20 days. State LMPC for manufacturers takes 7-30 days. Fast-track processing available in 2-7 working days.",
          },
        },
        {
          "@type": "Question",
          name: "What is the validity of LMPC Certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Central LMPC (for importers) has lifetime validity unless business details change. State LMPC validity varies from 1-5 years depending on the state.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quicklicense.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quicklicense.in/services" },
        { "@type": "ListItem", position: 3, name: "LMPC Registration", item: "https://quicklicense.in/services/lmpc" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://quicklicense.in#business",
      name: "Quick License",
      description: "Business registration and licensing consultancy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "F-10/125 Sector-15 Rohini",
        addressLocality: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
      telephone: "+91-9891614601",
      email: "contact@quicklicense.in",
      priceRange: "₹₹",
    },
  ],
};

export default function LMPCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LMPCPageClient />
    </>
  );
}
