import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // INSTANT LOADING - Optimize for fastest page loads
  
  // Faster page loads
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Performance optimizations
  productionBrowserSourceMaps: false,
  compress: true,
  // Reduce initial load time
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": {
  //       loaders: [LOADER]
  //     }
  //   }
  // },
  async headers() {
    return [
      {
        // Apply these headers to all routes.
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://slelguoygbfzlpylpxfs.supabase.co; script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://slelguoygbfzlpylpxfs.supabase.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.googletagservices.com https://fonts.gstatic.com https://images.pexels.com https://images.unsplash.com https://lottie.host https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.google.com https://*.doubleclick.net https://*.googleadservices.com https://*.google-analytics.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.googletagservices.com https://quick-server-brown.vercel.app https://lottie.host https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com; frame-ancestors 'none';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
