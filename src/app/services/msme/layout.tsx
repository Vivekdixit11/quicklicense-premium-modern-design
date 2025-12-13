import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME/Udyam Registration Online - Get Udyog Aadhaar in 24 Hours | Free",
  description: "Register your MSME/Udyam Aadhaar online for free. Get easy bank loans, govt subsidies, tax benefits. Mandatory for small businesses in India. Instant Udyam certificate. 100% online process.",
  keywords: "msme registration india, udyam registration online, udyog aadhaar, msme certificate, small business registration india, udyam aadhaar benefits, micro small medium enterprise",
  openGraph: {
    title: "MSME Registration Free - Unlock Benefits for Small Business India | Quick License",
    description: "Free Udyam/MSME registration in 24 hours. Get subsidies, loans, tax benefits. 15,000+ MSMEs registered.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/msme",
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

export default function MSMELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


