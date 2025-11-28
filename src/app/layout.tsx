import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Quick License - Your One-Stop Digital Partner for Business Registration & Compliance in India",
  description: "Quick License is a comprehensive business registration and compliance platform for Indian entrepreneurs. Get Private Limited, LLP, FSSAI, ISO, MSME, IEC Code, Trademark registration with 48-hour turnaround. Technology-driven compliance tracking, automated tax filings, and expert support from startup lawyers to scale your business from startup to IPO-ready stage.",
  keywords: "quick license, business registration india, private limited company registration, LLP registration, FSSAI license, ISO certification, MSME registration, startup india registration, trademark registration india, IEC code, import export code, GST compliance, ROC filing, business compliance platform, automated tax filing, startup lawyers india, brand protection india",
  verification: {
    google: 'c7ebxUUWhzkkthPPhWpXYeGbPgJpE2Mjx1v_ZotWEXY',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: "Quick License - Complete Business Registration & Compliance Platform for India",
    description: "Your one-stop digital partner for business registration and compliance. 48-hour incorporation, automated compliance tracking, expert support. From startup to IPO-ready with bank-grade security.",
    type: "website",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D452PXC1G6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D452PXC1G6');
            gtag('config', 'AW-17758729737');
          `}
        </Script>
        
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

