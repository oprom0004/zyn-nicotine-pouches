/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/buy',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/buy/:path*',
        permanent: true,
      },
      {
        source: '/nicotine-pouches',
        destination: '/buy',
        permanent: true,
      },
      {
        source: '/nicotine-pouches/:path*',
        destination: '/buy/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig