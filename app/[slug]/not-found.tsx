import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold text-gray-300">404</div>
        <h1 className="text-4xl font-bold text-gray-900">Nicotine Pouch Not Found</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          The nicotine pouch you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            href="/products"
            className="inline-block luxury-gradient text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
          >
            Browse All Nicotine Pouches
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