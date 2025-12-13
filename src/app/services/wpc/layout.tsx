import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WPC/ETA Certificate - Wireless Product Approval India | DoT License",
  description: "Get WPC-ETA certificate for wireless products (Bluetooth, WiFi, RF devices) in India. DoT approval for import/sale. Mandatory for wireless equipment. Expert filing, testing support. From ₹12,999.",
  keywords: "wpc eta certificate, wireless product approval india, wpc registration, dot approval, bluetooth device certification, wifi product license, wireless equipment type approval, telecom equipment certification",
  openGraph: {
    title: "WPC Certificate - Wireless Device Approval & Import License India | Quick License",
    description: "WPC-ETA for Bluetooth, WiFi, RF products. DoT certified. Import/sell legally. Testing & approval support.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quicklicense.in/services/wpc",
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

export default function WPCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4CWLB4N');`}
      </Script>
      {/* End Google Tag Manager */}
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-K4CWLB4N"
          height="0" 
          width="0" 
          style={{display:'none',visibility:'hidden'}}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      {children}
    </>
  );
}


