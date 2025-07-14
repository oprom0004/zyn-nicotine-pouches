'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface FlavorInfo {
  title: string
  description: string
  h1: string
  seoDescription: string
  flavorName: string
  benefits: string[]
  keywords: string[]
  lsiKeywords: string[]
}

interface FlavorCategoryClientProps {
  flavor: string
  flavorInfo: FlavorInfo
  products: Product[]
}

export default function CoffeeFlavorCategoryClient({ flavor, flavorInfo, products }: FlavorCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)
  const [showStickyFilter, setShowStickyFilter] = useState(false)

  // Scroll to products grid when filter is selected (mobile only)
  const scrollToProducts = () => {
    if (window.innerWidth < 768) { // Only scroll on mobile
      const productsGrid = document.getElementById('products-grid')
      if (productsGrid) {
        productsGrid.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }
  }

  // Get available strengths for this flavor
  const availableStrengths = Array.from(new Set(products.map(p => p.strength))).sort()

  // Handle scroll for sticky mobile filter
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyFilter(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Filter and sort products
  let filteredProducts = products
  
  // Apply strength filter
  if (selectedStrength) {
    filteredProducts = filteredProducts.filter(p => p.strength === selectedStrength)
  }

  // Sort products based on selection
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    default: // popular
      filteredProducts.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.reviews - a.reviews
      })
  }

  // Calculate stats for social proof
  const totalReviews = products.reduce((sum, p) => sum + p.reviews, 0)
  const avgRating = products.reduce((sum, p) => sum + p.rating, 0) / products.length
  const inStockCount = products.filter(p => p.inStock).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-4 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <Link href="/coffee-flavors-nicotine-pouches" className="hover:text-blue-600">Coffee Flavors</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-3 p-3 bg-white rounded-lg shadow-sm">
              <div className="flex items-center text-gray-700">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">{avgRating.toFixed(1)}</span>
                <span className="ml-1">({totalReviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{inStockCount}</span>
                <span className="ml-1">products available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Truck className="text-green-600 mr-2" size={20} />
                <span className="font-medium">FREE shipping $25+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Navigation - Return to Coffee Flavors */}
      <section className="py-3 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Back to Coffee Flavors */}
              <Link 
                href="/coffee-flavors-nicotine-pouches"
                className="mb-3 md:mb-0 inline-flex items-center px-4 py-2 bg-white rounded-lg border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl mr-2">☕</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-amber-700">← Back to All Coffee Flavors</div>
                  <div className="text-xs text-gray-500">Explore Coffee & Espresso varieties</div>
                </div>
              </Link>

              {/* Related Coffee Flavor */}
              <Link 
                href="/espresso-nicotine-pouches"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-stone-50 to-gray-50 rounded-lg border-2 border-stone-200 hover:border-stone-300 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-xl mr-2">☕</span>
                <div>
                  <div className="font-medium text-gray-900 group-hover:text-stone-700">Try Espresso →</div>
                  <div className="text-xs text-gray-500">Bold & intense flavor</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Filter Bar */}
      {showStickyFilter && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-3 border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="max-h-32 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedStrength ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Strengths
              </button>
              {availableStrengths.map(strength => (
                <button
                  key={strength}
                  onClick={() => {
                    setSelectedStrength(strength)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedStrength === strength 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {strength}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-3 lg:mb-0">
                <span className="font-medium text-gray-700">Filter by Strength:</span>
                <button
                  onClick={() => setSelectedStrength(null)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    !selectedStrength 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.map(strength => (
                  <button
                    key={strength}
                    onClick={() => setSelectedStrength(strength)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedStrength === strength 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
              </div>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Summary */}
            <div className="text-center text-gray-600">
              <p>Showing {filteredProducts.length} of {products.length} coffee flavor nicotine pouches</p>
              {selectedStrength && (
                <p className="mt-2 text-sm">
                  Filtered by: <span className="font-medium text-amber-600">{selectedStrength} strength</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Flavor Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavorInfo.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Promise to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Return for full refund within 30 days.</p>
              </div>
              <div className="text-center">
                <Truck className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Fast Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over $25. Delivered in 2-3 days.</p>
              </div>
              <div className="text-center">
                <Award className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Tobacco-free, lab-tested, FDA-compliant products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About {flavorInfo.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coffee flavor nicotine pouches deliver the rich, warming taste of freshly roasted coffee with every use. 
              Our premium coffee pouches combine authentic coffee flavors with high-quality nicotine for a 
              satisfying and comforting experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Perfect for coffee enthusiasts and those who enjoy warm, rich flavors, our coffee nicotine pouches provide 
              long-lasting taste and nicotine satisfaction without tobacco. Each pouch is carefully 
              crafted to deliver consistent quality and authentic coffee flavor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes {flavorInfo.title.toLowerCase()} special?
                </h3>
                <p className="text-gray-600">
                  Coffee flavor pouches offer a rich, warming taste experience with authentic roasted coffee flavors 
                  and premium nicotine delivery, perfect for coffee lovers seeking a tobacco-free alternative.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the coffee flavor last?
                </h3>
                <p className="text-gray-600">
                  Our coffee pouches deliver consistent flavor for 30-60 minutes, with the rich roasted taste 
                  remaining satisfying throughout the entire experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are these nicotine pouches tobacco-free?
                </h3>
                <p className="text-gray-600">
                  Yes, all our coffee flavor nicotine pouches are completely tobacco-free, using premium 
                  synthetic nicotine and natural flavoring for a clean, satisfying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}