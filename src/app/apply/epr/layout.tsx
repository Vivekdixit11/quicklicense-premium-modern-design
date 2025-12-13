import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPR Registration - Extended Producer Responsibility License Online | ₹7,999",
  description: "Get EPR (Extended Producer Responsibility) registration for plastic waste, e-waste, battery, tyre management. CPCB compliance for manufacturers, importers. Avoid ₹5 lakh penalty. From ₹7,999.",
  keywords: "epr registration india, extended producer responsibility, plastic waste management, e-waste registration, epr certificate, cpcb registration, environmental compliance india, producer responsibility",
  openGraph: {
    title: "EPR Certificate Online - Plastic & E-Waste Compliance India | Quick License",
    description: "EPR registration for plastic, e-waste, battery, tyres. CPCB compliance, avoid penalties. Expert filing from ₹7,999.",
    type: "website",
  },
};

export default function EPRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


