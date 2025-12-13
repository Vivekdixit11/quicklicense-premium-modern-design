import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup India Registration - Get DPIIT Certificate & Tax Benefits | ₹4,999",
  description: "Register under Startup India scheme (DPIIT). Get 3-year tax holiday, IPR benefits, funding access, govt tenders. Free from angel tax. Expert filing, fast approval. Starting ₹4,999.",
  keywords: "startup india registration, dpiit registration, startup india certificate, startup tax benefits india, angel tax exemption, startup scheme benefits, dpiit recognition, startup india scheme",
  openGraph: {
    title: "Startup India Certificate - Tax Exemptions & Funding Benefits | Quick License",
    description: "DPIIT registration for startups. 3-year tax holiday, IPR benefits, no angel tax. Unlock govt schemes. From ₹4,999.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/startup-india",
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

export default function StartupIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


