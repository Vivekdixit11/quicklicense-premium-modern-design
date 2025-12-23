"use client";

import { useEffect, useState } from 'react';
import { CheckCircle2, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ThankYouPageClient() {
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState<string>('');
  const [serviceName, setServiceName] = useState<string>('');

  useEffect(() => {
    // Get user name and service from URL params
    const name = searchParams.get('name') || '';
    const service = searchParams.get('service') || '';
    setUserName(name);
    setServiceName(service);

    // Track conversion via gtag on thank-you page
    const trackConversion = () => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        const urlParams = new URLSearchParams(window.location.search);
        const transactionId = urlParams.get('tid') || '';

        try {
          // Updated conversion label per request
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17758729737/BhQ1COeg19QbEInsgpRC',
            'value': 1.0,
            'currency': 'INR',
            'transaction_id': transactionId
          });
          console.log('✅ Google Ads conversion tracked on thank you page');
        } catch (e) {
          console.error('Failed to send thank-you conversion', e);
        }
      } else {
        console.warn('gtag not available on thank-you page');
      }
    };

    trackConversion();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {userName ? `Thank You, ${userName}!` : 'Thank You!'}
            </h1>
            <p className="text-lg text-charcoal/70">
              Your inquiry{serviceName ? ` for ${serviceName}` : ''} has been successfully submitted.
            </p>
          </div>

          {/* Message Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-terracotta/10">
            <h2 className="text-xl font-semibold text-charcoal mb-4">
              What happens next?
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Quick Response</h3>
                  <p className="text-charcoal/70">
                    Our expert team will review your inquiry and contact you within 2-4 hours during business hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Free Consultation</h3>
                  <p className="text-charcoal/70">
                    Get personalized guidance on your requirements and a transparent quote with no hidden charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Fast Processing</h3>
                  <p className="text-charcoal/70">
                    Once you approve, we'll start processing your application with 24-48 hour turnaround time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-terracotta/5 to-cream rounded-2xl p-6 mb-8 border border-terracotta/20">
            <h3 className="font-semibold text-charcoal mb-4">Need immediate assistance?</h3>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 98916 14601</span>
              </a>
              <a href="mailto:info@quicklicense.in" className="flex items-center gap-3 text-charcoal hover:text-terracotta transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@quicklicense.in</span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-terracotta text-terracotta rounded-xl font-semibold hover:bg-terracotta hover:text-white transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-terracotta text-white rounded-xl font-semibold hover:bg-terracotta-dark transition-all"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
