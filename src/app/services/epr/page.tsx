import { Metadata } from "next";
import EPRPageClient from "./EPRPageClient";

export const metadata: Metadata = {
  title: "EPR Registration in India - Extended Producer Responsibility Certificate | Quick License",
  description: "Get EPR Registration Certificate for Plastic, E-Waste, Battery & Tyres. Expert PIBO compliance support with 100% approval guarantee. Fast EPR authorization, target calculation & credit trading services.",
  keywords: "EPR registration, extended producer responsibility, EPR certificate, PIBO registration, plastic EPR, e-waste EPR, battery EPR, tyre EPR, EPR authorization, CPCB registration, producer responsibility, waste management license, import EPR, manufacturer EPR, brand owner EPR, EPR compliance India",
  openGraph: {
    title: "EPR Registration Services - Extended Producer Responsibility Certificate",
    description: "Complete EPR Registration services for importers, manufacturers & brand owners. Expert guidance for Plastic, E-Waste, Battery & Tyre EPR compliance.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPR Registration in India | Quick License",
    description: "Fast & reliable EPR Registration for all waste categories. 100% approval guarantee with expert PIBO compliance support.",
  },
  alternates: {
    canonical: "https://quicklicense.in/services/epr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EPRPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://quicklicense.in/services/epr#service",
        "name": "EPR Registration Services",
        "description": "Complete Extended Producer Responsibility (EPR) Registration services for Plastic, E-Waste, Battery and Tyre compliance. Expert PIBO registration support with 100% approval guarantee.",
        "provider": {
          "@type": "Organization",
          "@id": "https://quicklicense.in/#organization",
          "name": "Quick License",
          "url": "https://quicklicense.in",
          "logo": "https://quicklicense.in/logo.png",
        },
        "serviceType": "EPR Registration and Compliance",
        "areaServed": {
          "@type": "Country",
          "name": "India",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "EPR Registration Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Plastic EPR Registration",
                "description": "EPR Registration for Plastic Waste Management compliance",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Waste EPR Registration",
                "description": "EPR Registration for E-Waste Management compliance",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Battery EPR Registration",
                "description": "EPR Registration for Battery Waste Management compliance",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tyre EPR Registration",
                "description": "EPR Registration for Tyre Waste Management compliance",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://quicklicense.in/services/epr#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is EPR Registration and who needs it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPR (Extended Producer Responsibility) Registration is mandatory for Producers, Importers, and Brand Owners (PIBOs) dealing in products that generate plastic waste, e-waste, batteries, or tyres. It ensures proper end-of-life product management and environmental compliance.",
            },
          },
          {
            "@type": "Question",
            "name": "How long does EPR Registration take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPR Registration typically takes 7-15 working days from the date of application submission with complete documents. We provide fast-track services with priority processing.",
            },
          },
          {
            "@type": "Question",
            "name": "What documents are required for EPR Registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key documents include: PAN Card, GST Certificate, Business Registration Proof, Authorized Signatory ID & Address Proof, Product Details with HSN Codes, Manufacturing/Import License, and Previous Year Turnover details if applicable.",
            },
          },
          {
            "@type": "Question",
            "name": "What are the different EPR categories?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPR is required for four main categories: 1) Plastic Waste Management, 2) E-Waste Management, 3) Battery Waste Management, and 4) Tyre Waste Management. Each category has specific rules and registration portals.",
            },
          },
          {
            "@type": "Question",
            "name": "Is EPR Registration mandatory for importers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, EPR Registration is mandatory for all importers bringing products into India that fall under EPR categories. Without EPR authorization, customs clearance will be denied, leading to detention and demurrage charges.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the cost of EPR Registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Government fees vary by category: Plastic EPR ₹5,000, E-Waste EPR ₹10,000, Battery EPR ₹7,500, and Tyre EPR ₹6,000. Professional service fees are discussed based on your specific requirements and complexity.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://quicklicense.in/services/epr#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://quicklicense.in",
              "name": "Home",
            },
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://quicklicense.in/services",
              "name": "Services",
            },
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://quicklicense.in/services/epr",
              "name": "EPR Registration",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://quicklicense.in/#organization",
        "name": "Quick License",
        "description": "India's trusted business licensing consultant specializing in EPR, LMPC, WPC and all compliance services",
        "url": "https://quicklicense.in",
        "logo": "https://quicklicense.in/logo.png",
        "image": "https://quicklicense.in/logo.png",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EPRPageClient />
    </>
  );
}


