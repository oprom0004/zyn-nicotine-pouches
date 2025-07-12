'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductFilter from '@/components/ProductFilter'
import { products } from '@/data/products'
import { Product, FilterState } from '@/types'
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react'

export default function NicotinePouchesClient() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [filters, setFilters] = useState<FilterState>({
    strength: null,
    category: null,
    search: '',
    priceRange: null,
    minRating: null,
    availability: null,
  })
  const [sortBy, setSortBy] = useState<string>('featured')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = [...products]

      // Apply filters
      if (filters.strength) {
        filtered = filtered.filter(p => p.strength === filters.strength)
      }
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category)
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(searchLower) ||
          p.flavor.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
        )
      }
      if (filters.priceRange) {
        const priceRanges = {
          'under-5': { min: 0, max: 5 },
          '5-10': { min: 5, max: 10 },
          '10-15': { min: 10, max: 15 },
          '15-plus': { min: 15, max: Infinity }
        }
        const range = priceRanges[filters.priceRange as keyof typeof priceRanges]
        if (range) {
          filtered = filtered.filter(p => p.price >= range.min && p.price < range.max)
        }
      }
      if (filters.minRating) {
        filtered = filtered.filter(p => p.rating >= filters.minRating!)
      }
      if (filters.availability) {
        if (filters.availability === 'in-stock') {
          filtered = filtered.filter(p => p.inStock)
        } else if (filters.availability === 'featured') {
          filtered = filtered.filter(p => p.featured)
        }
      }

      // Apply sorting
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        case 'reviews':
          filtered.sort((a, b) => b.reviews - a.reviews)
          break
        case 'featured':
          filtered.sort((a, b) => {
            if (a.featured && !b.featured) return -1
            if (!a.featured && b.featured) return 1
            return a.name.localeCompare(b.name)
          })
          break
        default:
          filtered.sort((a, b) => a.name.localeCompare(b.name))
      }

      setFilteredProducts(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [filters, sortBy])

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort)
  }

  const clearFilters = () => {
    setFilters({
      strength: null,
      category: null,
      search: '',
      priceRange: null,
      minRating: null,
      availability: null,
    })
  }

  // Calculate stats for social proof
  const totalReviews = products.reduce((sum, p) => sum + p.reviews, 0)
  const avgRating = products.reduce((sum, p) => sum + p.rating, 0) / products.length
  const inStockCount = products.filter(p => p.inStock).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buy Nicotine Pouches Online For Sale
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Premium tobacco-free nicotine pouches in multiple flavors & strengths
            </p>
            
            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex items-center text-white">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">{avgRating.toFixed(1)}</span>
                <span className="ml-1">({totalReviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center text-white">
                <ShoppingCart className="text-green-400 mr-2" size={20} />
                <span className="font-bold">{inStockCount}</span>
                <span className="ml-1">products in stock</span>
              </div>
              <div className="flex items-center text-white">
                <Truck className="text-blue-300 mr-2" size={20} />
                <span className="font-medium">FREE shipping over $25</span>
              </div>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Shield className="mr-2" size={20} />
                <span className="font-medium">Tobacco-Free</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Star className="mr-2" size={20} />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Truck className="mr-2" size={20} />
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <ProductFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              onSortChange={handleSortChange}
              sortBy={sortBy}
              productCount={filteredProducts.length}
              totalCount={products.length}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
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
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No nicotine pouches found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms to find the perfect nicotine pouches for sale
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-primary"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Results Summary */}
            {!isLoading && filteredProducts.length > 0 && (
              <div className="mt-8 text-center text-gray-600">
                Showing {filteredProducts.length} of {products.length} premium nicotine pouches for sale
              </div>
            )}

            {/* SEO Content Section */}
            {!isLoading && (
              <div className="mt-12 bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Buy Our Nicotine Pouches Online?
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    When you buy nicotine pouches online from our store, you're getting premium tobacco-free 
                    products designed for adult users 21+. Our nicotine pouches for sale include popular 
                    brands like Zyn in various flavors and strengths.
                  </p>
                  <p className="mb-4">
                    Shop our complete selection of nicotine pouches online with confidence. We offer mint, 
                    citrus, berry, and wintergreen flavors in 3mg, 6mg, and 9mg strengths. All products 
                    are genuine, fresh, and ship fast.
                  </p>
                  <p>
                    Looking to buy nicotine pouches online? Browse our collection above to find the perfect 
                    tobacco-free nicotine pouches for your needs. Free shipping on orders over $25.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}