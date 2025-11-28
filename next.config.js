// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes.
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'none';",
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
    // Enable React strict mode and other optimizations.
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
