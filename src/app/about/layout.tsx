import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - India's Most Trusted Business Registration Partner | Quick License",
  description: "Discover why 10,000+ Indian entrepreneurs trust Quick License for business registration. 48-hour incorporation, 99% success rate, 450+ expert CAs & lawyers. From startup to IPO-ready - your complete compliance partner.",
  keywords: "about quick license, business registration company india, trusted compliance partner, startup registration experts, indian business services, company incorporation specialists",
  openGraph: {
    title: "About Quick License - Transforming Indian Business Registration Since 2014",
    description: "10,000+ businesses registered. 99% success rate. Meet India's leading business compliance platform with 450+ expert professionals.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

