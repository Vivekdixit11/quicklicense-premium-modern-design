import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEC Code Registration - Import Export Code Online in 3 Days | ₹3,499",
  description: "Get IEC (Import Export Code) online for international trade in India. Mandatory for importers/exporters. DGFT registration, lifetime validity, no renewal. Quick approval in 3 days from ₹3,499.",
  keywords: "iec code registration, import export code india, iec online, dgft registration, iec code cost, export import license india, international trade license, customs clearance code",
  openGraph: {
    title: "IEC Code Online - Start Import Export Business in India | Quick License",
    description: "IEC registration in 3 days. Lifetime validity. Mandatory for global trade. Expert DGFT filing from ₹3,499.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/iec",
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

export default function IECLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


