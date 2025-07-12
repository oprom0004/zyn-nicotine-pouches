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
        destination: '/nicotine-pouches',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/nicotine-pouches/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig