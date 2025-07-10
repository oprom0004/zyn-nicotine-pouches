'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductFilter from '@/components/ProductFilter'
import { products } from '@/data/products'
import { Product, FilterState } from '@/types'

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [filters, setFilters] = useState<FilterState>({
    strength: null,
    category: null,
    search: '',
  })
  const [sortBy, setSortBy] = useState<string>('name')
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
          p.category.toLowerCase().includes(searchLower)
        )
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
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            All Products
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
            Explore our complete collection of premium nicotine pouches
          </p>
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
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
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
                Showing {filteredProducts.length} of {products.length} products
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}