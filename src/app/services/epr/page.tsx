import EPRPageUltraFast from "./EPRPageUltraFast";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPR Registration in India | CPCB EPR Authorization – QuickLicense",
  description: "Get EPR Registration & compliance support in India. CPCB-approved EPR for Plastic, E-Waste, Battery & Tyres. Fast & reliable service.",
  keywords: "EPR Registration in India, EPR Authorization CPCB, Extended Producer Responsibility India, EPR compliance services, Plastic EPR registration, E-waste EPR registration, Battery EPR registration, CPCB EPR consultants, EPR certificate for importers",
};

export default function EPRPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "EPR Registration and Compliance Services",
        "provider": {
          "@type": "Organization",
          "name": "QuickLicense",
          "url": "https://www.quicklicense.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description": "QuickLicense provides CPCB-approved EPR registration and compliance services for plastic, e-waste, battery, and tyre categories across India."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.quicklicense.in/services/epr#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is EPR Registration in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPR Registration is a mandatory authorization issued by CPCB for producers, importers, and brand owners to manage waste generated from their products."
            }
          },
          {
            "@type": "Question",
            "name": "Who needs EPR Authorization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Manufacturers, importers, and brand owners dealing in plastic packaging, electronics, batteries, or tyres must obtain EPR authorization."
            }
          },
          {
            "@type": "Question",
            "name": "Is EPR registration mandatory for importers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, importers introducing regulated products into India must obtain EPR authorization before customs clearance."
            }
          },
          {
            "@type": "Question",
            "name": "How long does EPR registration take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The timeline varies based on category and documentation, but professional handling helps reduce delays."
            }
          }
        ]
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
      <EPRPageUltraFast />
    </>
  );
}


