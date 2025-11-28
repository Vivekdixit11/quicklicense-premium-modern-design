import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Clear & Fair Service Agreement | Quick License",
  description: "Read Quick License terms of service for business registration and compliance services in India. Transparent conditions, user rights, and service agreements.",
  keywords: "quick license terms, service agreement india, business registration terms, compliance service conditions",
  openGraph: {
    title: "Terms of Service - Quick License India",
    description: "Fair and transparent terms for all our business registration and compliance services.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-muted/10 p-8 rounded-2xl border border-muted/20">
            <h1 className="text-4xl font-heading font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">
              These Terms of Service govern your use of Quick License's website and services. By accessing or using
              our services you agree to be bound by these terms.
            </p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">1. Use of Services</h2>
              <p className="text-sm text-muted-foreground">You agree to use our services in compliance with all applicable laws and not to misuse them.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">2. Accounts and Security</h2>
              <p className="text-sm text-muted-foreground">You are responsible for maintaining the confidentiality of account credentials and for all activities that occur under your account.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">3. Payment and Refunds</h2>
              <p className="text-sm text-muted-foreground">Paid services are subject to specific pricing and refund policies which will be communicated at the time of purchase.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
              <p className="text-sm text-muted-foreground">All content on the site is owned by Quick License or its licensors. You may not reproduce or distribute content without permission.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
              <p className="text-sm text-muted-foreground">To the maximum extent permitted by law, Quick License is not liable for indirect or consequential damages arising from the use of our services.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
              <p className="text-sm text-muted-foreground">If you have questions about these Terms, please contact us at <a href="mailto:enterpriserawal6@gmail.com" className="text-primary underline">enterpriserawal6@gmail.com</a>.</p>
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

