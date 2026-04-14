/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - The eslint property is removed in newer Next.js types
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
