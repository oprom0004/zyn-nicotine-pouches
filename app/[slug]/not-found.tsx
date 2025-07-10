import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold text-gray-300">404</div>
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          The product you're looking for doesn't exist.
        </p>
        <div className="space-y-4">
          <Link 
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all"
          >
            Browse All Products
          </Link>
          <div>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}