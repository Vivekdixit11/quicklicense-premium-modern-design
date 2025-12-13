import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Instant Help for Business Registration in India | Quick License",
  description: "Connect with Quick License experts in Delhi for business registration, licenses & compliance. Call +91 98916 14601 or visit our Rohini office. 24/7 support for all your business needs.",
  keywords: "contact quick license, business registration support delhi, compliance help india, quick license rohini, business registration contact number, startup support india",
  openGraph: {
    title: "Contact Quick License - Expert Business Registration Support",
    description: "Get instant help from 450+ business experts. Call now or visit our Delhi office for all registration needs.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/contact",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

