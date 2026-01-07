import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        // This applies the header to all paths in your application
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // 'self' allows your own domain to iframe the app
            // Add other domains separated by a space
            value: "frame-ancestors 'self' https://xmapps.sitecorecloud.io",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
