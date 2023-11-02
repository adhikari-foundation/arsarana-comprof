/** @type {import('next').NextConfig} */
// import { withContentlayer } from 'next-contentlayer';
import './env.mjs';

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: false,
  swcMinify: true,

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },

  // Uncoment to add domain whitelist
  images: {
    // formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/jpg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lp-cms-production.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
