import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Zyn Nicotine Pouches - Premium Tobacco-Free Products',
  description: 'Sorry, the page you\'re looking for doesn\'t exist. Browse our premium collection of tobacco-free nicotine pouches with various strengths and flavors.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Page Not Found | Zyn Nicotine Pouches',
    description: 'The page you\'re looking for doesn\'t exist. Explore our premium nicotine pouches collection.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zyn-nicotine-pouches.vercel.app/404',
  },
}

export default function NotFound() {
  const popularProducts = [
    { name: 'Zyn Cool Mint 6mg', slug: 'zyn-cool-mint-6mg', price: '$4.99' },
    { name: 'Zyn Wintergreen 3mg', slug: 'zyn-wintergreen-3mg', price: '$4.99' },
    { name: 'Zyn Citrus 6mg', slug: 'zyn-citrus-6mg', price: '$5.49' },
    { name: 'Zyn Spearmint 9mg', slug: 'zyn-spearmint-9mg', price: '$5.99' },
  ]

  const helpfulLinks = [
    { title: 'All Nicotine Pouches', href: '/products', description: 'Browse our complete collection' },
    { title: 'About Zyn', href: '/about', description: 'Learn about our tobacco-free products' },
    { title: 'Contact Support', href: '/contact', description: 'Get help from our team' },
    { title: 'Home Page', href: '/', description: 'Return to our homepage' },
  ]

  return (
    <>
      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "description": "404 error page for Zyn Nicotine Pouches website",
            "url": "https://zyn-nicotine-pouches.vercel.app/404",
            "mainEntity": {
              "@type": "Organization",
              "name": "Zyn Nicotine Pouches",
              "description": "Premium tobacco-free nicotine pouches"
            }
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header with navigation */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Zyn Nicotine Pouches
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main 404 content */}
        <main className="container mx-auto px-4 py-16">
          {/* Error section */}
          <div className="text-center mb-16">
            <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Nicotine Pouch Page Not Found
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Don't worry - we have plenty of premium tobacco-free nicotine pouches to explore!
            </p>
            
            {/* Primary CTA */}
            <div className="space-x-4 mb-12">
              <Link 
                href="/products"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                Browse All Nicotine Pouches
              </Link>
              <Link 
                href="/"
                className="inline-block bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-all"
              >
                Return Home
              </Link>
            </div>
          </div>

          {/* Popular products section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Popular Nicotine Pouches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 rounded-lg p-4 mb-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">ZYN</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">Premium tobacco-free nicotine pouch</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <Link 
                      href={`/${product.slug}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Helpful links section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Find What You're Looking For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpfulLinks.map((link, index) => (
                <Link key={index} href={link.href} className="group">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all group-hover:bg-blue-50">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Search section */}
          <section className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our customer support team for help with finding the perfect nicotine pouches for you.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/about"
                className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Learn About Zyn
              </Link>
            </div>
          </section>

          {/* SEO content section */}
          <section className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About Zyn Nicotine Pouches
              </h2>
              <div className="text-gray-600 space-y-4 text-left">
                <p>
                  <strong>Zyn nicotine pouches</strong> are premium tobacco-free products designed for adult users seeking 
                  a clean, smokeless nicotine experience. Our range includes various strengths from 3mg to 9mg and 
                  multiple flavors including Cool Mint, Wintergreen, Citrus, and Spearmint.
                </p>
                <p>
                  Each <strong>tobacco-free nicotine pouch</strong> is crafted with pharmaceutical-grade nicotine and 
                  natural plant fibers, providing consistent satisfaction without the need for smoking or spitting. 
                  Perfect for discreet use anywhere.
                </p>
                <p>
                  Browse our complete collection of <strong>nicotine pouches</strong> to find the perfect strength 
                  and flavor combination for your needs. All products are intended for adults 21+ only.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold text-blue-400 mb-4 block">
                Zyn Nicotine Pouches
              </Link>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Premium tobacco-free nicotine pouches for adults 21+. Experience the clean, 
                smokeless satisfaction of Zyn nicotine products.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 mb-6">
              <Link href="/products" className="text-gray-400 hover:text-white">All Products</Link>
              <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              <Link href="/products" className="text-gray-400 hover:text-white">Nicotine Pouches</Link>
            </div>
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                ⚠️ This product contains nicotine. Nicotine is an addictive chemical. 
                For use by adults 21+ only.
              </p>
              <p>© 2025 Zyn Nicotine Pouches. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}