'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { Product } from '@/types'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState(query)
  const [isLoading, setIsLoading] = useState(false)

  // Search function
  const performSearch = (term: string) => {
    setIsLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      if (!term.trim()) {
        setSearchResults([])
        setIsLoading(false)
        return
      }

      const searchLower = term.toLowerCase()
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.flavor.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.strength.toLowerCase().includes(searchLower)
      )

      // Sort by relevance (exact matches first, then partial matches)
      filtered.sort((a, b) => {
        const aNameExact = a.name.toLowerCase() === searchLower ? 1 : 0
        const bNameExact = b.name.toLowerCase() === searchLower ? 1 : 0
        if (aNameExact !== bNameExact) return bNameExact - aNameExact

        const aNameStarts = a.name.toLowerCase().startsWith(searchLower) ? 1 : 0
        const bNameStarts = b.name.toLowerCase().startsWith(searchLower) ? 1 : 0
        if (aNameStarts !== bNameStarts) return bNameStarts - aNameStarts

        return a.name.localeCompare(b.name)
      })

      setSearchResults(filtered)
      setIsLoading(false)
    }, 300)
  }

  // Initial search on page load
  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
    
    // Debounce search
    const timer = setTimeout(() => {
      performSearch(newTerm)
    }, 300)

    return () => clearTimeout(timer)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Search Products
            </h1>
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for products, flavors, strengths..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-12 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Search Info */}
            {searchTerm && (
              <div className="mt-4 text-center">
                {isLoading ? (
                  <p className="text-gray-600">Searching...</p>
                ) : (
                  <p className="text-gray-600">
                    {searchResults.length > 0 
                      ? `Found ${searchResults.length} product${searchResults.length === 1 ? '' : 's'} for "${searchTerm}"`
                      : `No products found for "${searchTerm}"`
                    }
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-12">
        {!searchTerm ? (
          /* Popular Searches */
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Popular Searches</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Mint', 'Cool Mint', '6mg', 'Citrus', 'Berry', '3mg'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchTerm(term)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
            
            {/* Featured Products */}
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.filter(p => p.featured).slice(0, 8).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        ) : isLoading ? (
          /* Loading State */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="product-image bg-gray-200"></div>
                <div className="space-y-3 mt-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : searchResults.length === 0 ? (
          /* No Results */
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-8">
              Try searching for different terms or browse our collection
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="text-sm text-gray-500">Try searching for:</span>
                {['mint', 'citrus', '6mg', 'berry', 'cool mint'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setSearchTerm(suggestion)}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <Link 
                href="/products"
                className="inline-block btn btn-primary"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        ) : (
          /* Search Results */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loading w-8 h-8 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}