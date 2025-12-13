import LMPCPageClient from "./LMPCPageClient";

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.quicklicense.in/services/lmpc#service",
      name: "LMPC Registration Consultancy Services",
      description: "Professional consultancy services for LMPC (Legal Metrology Packaged Commodities) registration documentation and filing assistance for importers, manufacturers, and packers in India. We are a private consultancy firm providing documentation support.",
        provider: {
        "@type": "Organization",
        name: "Quick License",
        url: "https://www.quicklicense.in",
        description: "Private business consultancy firm specializing in documentation assistance",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "LMPC Consultancy Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Central LMPC Documentation Assistance",
              description: "Documentation and filing support for importers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "State LMPC Documentation Assistance",
              description: "Documentation and filing support for manufacturers and packers",
            },
          },
        ],
      },
      disclaimer: "Quick License is a private consultancy service. We are not a government agency and are not affiliated with any government department.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.quicklicense.in/services/lmpc#faq",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.quicklicense.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.quicklicense.in/services" },
        { "@type": "ListItem", position: 3, name: "LMPC Registration", item: "https://www.quicklicense.in/services/lmpc" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.quicklicense.in#business",
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
