import { Metadata } from "next";
import EPRPageClient from "./EPRPageClient";

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

export default function EPRPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.quicklicense.in/services/epr#service",
        "name": "EPR Registration Consultancy Services",
        "description": "Professional Extended Producer Responsibility (EPR) Registration assistance for Plastic, E-Waste, Battery and Tyre compliance. Expert PIBO registration support and documentation services. Private consultancy firm.",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.quicklicense.in/#organization",
          "name": "Quick License",
          "url": "https://www.quicklicense.in",
          "logo": "https://www.quicklicense.in/logo.png",
          "description": "Private business consultancy specializing in EPR compliance documentation",
        },
        "serviceType": "EPR Registration Consultancy and Documentation Support",
        "areaServed": {
          "@type": "Country",
          "name": "India",
        },
        "disclaimer": "Quick License is a private consultancy service. We are not affiliated with any regulatory body or government agency.",
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
        "@id": "https://www.quicklicense.in/services/epr#faq",
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
              "text": "Key documents include: PAN Card, GST Certificate, Business Registration Proof, Designated Signatory ID & Address Proof, Product Details with HSN Codes, Manufacturing/Import License, and Previous Year Turnover details if applicable.",
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
              "text": "Official registration fees vary by category: Plastic EPR ₹5,000, E-Waste EPR ₹10,000, Battery EPR ₹7,500, and Tyre EPR ₹6,000. Professional consultancy fees are discussed based on your specific requirements and complexity. We are a private consultancy service.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.quicklicense.in/services/epr#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://www.quicklicense.in",
              "name": "Home",
            },
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.quicklicense.in/services",
              "name": "Services",
            },
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://www.quicklicense.in/services/epr",
              "name": "EPR Registration",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.quicklicense.in/#organization",
        "name": "Quick License",
        "description": "India's trusted business licensing consultant specializing in EPR, LMPC, WPC and all compliance services",
        "url": "https://www.quicklicense.in",
        "logo": "https://www.quicklicense.in/logo.png",
        "image": "https://www.quicklicense.in/logo.png",
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


