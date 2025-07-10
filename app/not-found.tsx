import Link from 'next/link'

export default function NotFound() {
  const popularProducts = [
    { name: 'Zyn Cool Mint 6mg', slug: 'zyn-cool-mint-6mg', price: '$4.99' },
    { name: 'Zyn Wintergreen 3mg', slug: 'zyn-wintergreen-3mg', price: '$4.99' },
    { name: 'Zyn Citrus 6mg', slug: 'zyn-citrus-6mg', price: '$5.49' },
    { name: 'Zyn Spearmint 9mg', slug: 'zyn-spearmint-9mg', price: '$5.99' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      <main className="container mx-auto px-4 py-16">
        {/* Error section */}
        <div className="text-center mb-16">
          <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The page you're looking for might have been moved, deleted, or doesn't exist. 
            Check out our premium tobacco-free nicotine pouches!
          </p>
          
          <div className="space-x-4 mb-12">
            <Link 
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all"
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

        {/* Popular products */}
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

        {/* Help section */}
        <section className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our support team for help finding the perfect nicotine pouches.
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
      </main>
    </div>
  )
}