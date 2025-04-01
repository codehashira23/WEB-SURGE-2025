/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['diu.iiitvadodara.ac.in'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'diu.iiitvadodara.ac.in',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
