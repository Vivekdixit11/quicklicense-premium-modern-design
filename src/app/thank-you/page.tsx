import { Metadata } from 'next';
import ThankYouPageClient from './ThankYouPageClient';

export const metadata: Metadata = {
  title: 'Thank You - Quick License',
  description: 'Thank you for contacting Quick License. Our team will reach out to you shortly.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ThankYouPage() {
  return <ThankYouPageClient />;
}
