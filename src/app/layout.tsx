import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quicklicense.in'),
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
    siteName: "Quick License",
    locale: "en_IN",
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Quick License - Business Registration Services India',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick License - Business Registration & Compliance Platform India",
    description: "Your trusted partner for business registration, licenses & compliance in India. Fast, expert, affordable.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17758729737"
          strategy="afterInteractive"
          async
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17758729737');
          `}
        </Script>
        {/* End Google tag */}
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "uon5rur93a");`}
        </Script>
        {/* End Microsoft Clarity */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager removed per request. */}
        {/*
          Add new Tag Manager or analytics snippet here if/when provided.
        */}
        
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
        
        {/* AI Chat Widget */}
        <Script
          src="https://airag-bot.vercel.app/widget.js?company=quicklicense"
          strategy="lazyOnload"
          async
        />
      </body>
    </html>
  );
}

