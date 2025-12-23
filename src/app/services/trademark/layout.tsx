import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration India - Protect Your Brand Name & Logo | ₹4,999",
  description: "Register your trademark online in India. Protect brand name, logo & slogan for 10 years. Free trademark search, expert filing with IPO. Get TM certificate in 12-18 months. Starting ₹4,999.",
  keywords: "trademark registration india, brand name registration, logo trademark, TM registration online, intellectual property india, trademark search india, IPO trademark filing, brand protection",
  openGraph: {
    title: "Trademark Registration - Secure Your Brand Identity in India | Quick License",
    description: "Protect your brand legally. Free TM search, expert IPO filing, 10-year protection. 5,000+ trademarks registered.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/services/trademark",
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

export default function TrademarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


