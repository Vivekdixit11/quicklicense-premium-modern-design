import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Your Data Security Matters | Quick License India",
  description: "Quick License privacy policy - Learn how we protect your business documents and personal data with bank-grade security. Transparent data practices for Indian entrepreneurs.",
  keywords: "quick license privacy policy, data protection india, business document security, secure registration platform india",
  openGraph: {
    title: "Privacy Policy - Quick License India",
    description: "Bank-grade security for your business data. Read our transparent privacy practices.",
    type: "website",
  },
  alternates: {
    canonical: "https://quicklicense.in/privacy",
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

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-muted/10 p-8 rounded-2xl border border-muted/20">
            <h1 className="text-4xl font-heading font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">
              At Quick License, we respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              and use our website.
            </p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li>Information you provide directly: name, email, phone, company details, and documents.</li>
                <li>Automatically collected data: IP address, device and browser information, and usage analytics.</li>
                <li>Cookies and similar technologies to improve your experience.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
              <p className="text-sm text-muted-foreground">We use the information for purposes such as:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li>Providing and improving our services.</li>
                <li>Responding to inquiries and communicating about your account or transactions.</li>
                <li>Personalizing content and delivering relevant marketing (where permitted).</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">3. Data Sharing and Disclosure</h2>
              <p className="text-sm text-muted-foreground">We may share data with:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li>Service providers who help operate the site and provide services (payment processors, analytics).</li>
                <li>When required by law or to protect rights and safety.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">4. Your Choices</h2>
              <p className="text-sm text-muted-foreground">You can opt out of marketing communications and manage cookie preferences through your browser.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">5. Security</h2>
              <p className="text-sm text-muted-foreground">We implement reasonable security measures to protect your information, but
              no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
              <p className="text-sm text-muted-foreground">If you have questions about this Privacy Policy, please reach out to us at <a href="mailto:contact@quicklicense.in" className="text-primary underline">contact@quicklicense.in</a>.</p>
            </section>

            <div className="mt-8">
              <Link href="/" className="text-sm text-primary">← Back to Home</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

