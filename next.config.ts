import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Optimization settings
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    deviceSizes: [640, 768, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Handle sitemap at root level
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/services/face-prp', destination: '/services/face-prp-in-dubai/', permanent: true },
      { source: '/services/face-prp/', destination: '/services/face-prp-in-dubai/', permanent: true },
      { source: '/services/panchakarma-treatment', destination: '/services/panchakarma-treatment-dubai/', permanent: true },
      { source: '/services/panchakarma-treatment/', destination: '/services/panchakarma-treatment-dubai/', permanent: true },
      { source: '/services/skin-diseases-treatment', destination: '/services/skin-diseases-treatment-dubai/', permanent: true },
      { source: '/services/facial', destination: '/services/facial-dubai/', permanent: true },
      { source: '/services/facial/', destination: '/services/facial-dubai/', permanent: true },
      { source: '/services/polyclinic-in-jumeirah', destination: '/services/polyclinic-in-jumeirah-1/', permanent: true },
      { source: '/services/polyclinic-in-jumeirah/', destination: '/services/polyclinic-in-jumeirah-1/', permanent: true },
    ];
  },
};

export default nextConfig;
