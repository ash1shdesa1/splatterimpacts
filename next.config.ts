import type { NextConfig } from 'next'

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' blob: data:
    https://images.unsplash.com
    https://*.stripe.com
    https://q.stripe.com;
  font-src 'self' https://fonts.gstatic.com;
  frame-src https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com;
  connect-src 'self' https://api.stripe.com https://checkout.stripe.com https://q.stripe.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\n/g, ' ').trim()

const securityHeaders = [
  // Prevents clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevents MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Forces HTTPS for 2 years, including subdomains — submitted to preload list
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Limits referrer info sent cross-origin
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restricts browser feature access
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  // XSS filter (legacy browsers)
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Prevents DNS prefetch leaking navigation intent
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Content Security Policy
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    // Our product artwork is first-party SVG in /public/images. Allow the
    // optimizer to serve it (safe because we author every file ourselves).
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
