import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FAQSection from "@/components/home/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick License - EPR, LMPC & WPC Registration Services in India",
  description: "Get EPR Registration, LMPC Registration, and WPC Approval fast and hassle-free. India's trusted business licensing partner with 48-hour turnaround. Expert guidance for all compliance needs.",
  keywords: "EPR registration, LMPC registration, WPC approval, business license India, compliance services, quick license, extended producer responsibility, legal metrology, wireless planning coordination",
  openGraph: {
    title: "Quick License - Expert Business Registration & Compliance Services",
    description: "Your trusted partner for EPR, LMPC, WPC and all business licensing needs in India. Fast, reliable, and expert guidance.",
    type: "website",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: "https://www.quicklicense.in",
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <TrustBadgesSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}


