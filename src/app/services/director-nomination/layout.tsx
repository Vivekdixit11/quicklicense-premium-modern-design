import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Director Nomination Service - Professional Directors for Your Company | ₹12,999/year",
  description: "Hire professional nominee directors for your Private Limited/OPC company in India. ROC compliance, attend board meetings, expert governance. Avoid director vacancy penalties. From ₹12,999/year.",
  keywords: "nominee director india, director nomination service, professional director, roc compliance director, company director hire, board member services, director requirement india, corporate governance",
  openGraph: {
    title: "Nominee Director Services - Expert Directors for ROC Compliance India | Quick License",
    description: "Professional nominee directors for compliance. Board meetings, ROC filings, governance. Trusted experts from ₹12,999/year.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/services/director-nomination",
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

export default function DirectorNominationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


