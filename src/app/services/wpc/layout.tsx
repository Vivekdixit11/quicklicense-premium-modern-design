import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPC/ETA Certificate - Wireless Product Approval India | DoT License",
  description: "Get WPC-ETA certificate for wireless products (Bluetooth, WiFi, RF devices) in India. DoT approval for import/sale. Mandatory for wireless equipment. Expert filing, testing support. From ₹12,999.",
  keywords: "wpc eta certificate, wireless product approval india, wpc registration, dot approval, bluetooth device certification, wifi product license, wireless equipment type approval, telecom equipment certification",
  openGraph: {
    title: "WPC Certificate - Wireless Device Approval & Import License India | Quick License",
    description: "WPC-ETA for Bluetooth, WiFi, RF products. DoT certified. Import/sell legally. Testing & approval support.",
    type: "website",
  },
};

export default function WPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


