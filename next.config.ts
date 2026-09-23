import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost', '127.0.0.1', '[::1]', '192.168.96.1'],
  images: {
    qualities: [75, 100],
    // Use custom Cloudinary loader when cloud name is configured
    // Falls back to default Next.js loader otherwise
    ...(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      ? {
          loader: 'custom',
          loaderFile: './src/lib/cloudinaryLoader.ts',
        }
      : {}),
    // Allow images from these domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
