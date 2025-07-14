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
  parentCategory?: {
    name: string
    url: string
    description: string
    bgColor: string
    textColor: string
    hoverColor: string
  }
}

interface FlavorCategoryClientProps {
  flavor: string
  flavorInfo: FlavorInfo
  products: Product[]
}

export default function FlavorCategoryClient({ flavor, flavorInfo, products }: FlavorCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)
  const [showStickyFilter, setShowStickyFilter] = useState(false)

  // Scroll to products grid when filter is selected (mobile only)
  const scrollToProducts = () => {
    if (window.innerWidth < 768) {
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
      {/* Hero Section with Conversion Elements - Compressed */}
      <section className="py-4 bg-gradient-to-br from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb for SEO with parent category connection */}
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href={flavorInfo.parentCategory?.url || "/mint-flavors-nicotine-pouches"} className="hover:text-blue-600">
                {flavorInfo.parentCategory?.name || "Mint Flavors"}
              </Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Connection to parent category */}
            <div className={`mb-4 p-3 rounded-lg ${flavorInfo.parentCategory?.bgColor || 'bg-emerald-100'}`}>
              <p className={`text-sm ${flavorInfo.parentCategory?.textColor || 'text-emerald-800'}`}>
                <span className="font-medium">Part of our {flavorInfo.parentCategory?.name || "Mint"} Collection:</span> 
                <Link href={flavorInfo.parentCategory?.url || "/mint-flavors-nicotine-pouches"} className={`ml-1 underline ${flavorInfo.parentCategory?.hoverColor || 'hover:text-emerald-600'}`}>
                  {flavorInfo.parentCategory?.description || "Explore all mint flavors including Cool Mint & Menthol →"}
                </Link>
              </p>
            </div>

            {/* Social Proof Bar - Compressed */}
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

      {/* Strength Sub-Category Navigation */}
      <section className="py-1 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* All Strengths Card */}
              <div 
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
                className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedStrength
                    ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🌟</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">All Strengths</h3>
                  <div className="text-xs text-gray-600">
                    {products.length} products
                  </div>
                </div>
              </div>

              {availableStrengths.slice(0, 7).map((strength) => {
                const strengthCount = products.filter(p => p.strength === strength).length
                const strengthEmoji = {
                  '3mg': '💚',
                  '6mg': '💙', 
                  '9mg': '❤️'
                }[strength] || '⭐'

                return (
                  <div 
                    key={strength}
                    onClick={() => {
                      setSelectedStrength(selectedStrength === strength ? null : strength)
                      scrollToProducts()
                    }}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedStrength === strength
                        ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">{strengthEmoji}</span>
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">{strength}</h3>
                      <div className="text-xs text-gray-600">
                        {strengthCount} products
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Filter Bar */}
      {showStickyFilter && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-3 border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="max-h-32 overflow-y-auto">
            {/* Strength Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedStrength ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Strengths
              </button>
              {availableStrengths.map((strength) => (
                <button
                  key={strength}
                  onClick={() => {
                    setSelectedStrength(selectedStrength === strength ? null : strength)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedStrength === strength 
                      ? 'bg-emerald-600 text-white' 
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

      {/* Products Section with Conversion Optimization - Moved Up */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-3 lg:mb-0">
                <span className="font-medium text-gray-700">Filter by Strength:</span>
                <button
                  onClick={() => {
                    setSelectedStrength(null)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    !selectedStrength 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Strengths
                </button>
                {availableStrengths.slice(0, 4).map(strength => (
                  <button
                    key={strength}
                    onClick={() => {
                      setSelectedStrength(strength)
                      scrollToProducts()
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedStrength === strength
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element - Compact */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-2 rounded-lg mb-4 text-center">
              <div className="flex items-center justify-center text-sm">
                <TrendingUp className="mr-1" size={16} />
                <span className="font-bold">Classic Choice:</span>
                <span className="ml-1">{filteredProducts.filter(p => p.inStock).length} spearmint flavor products selling fast this week!</span>
              </div>
            </div>

            {/* Products Grid */}
            <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {filteredProducts.length} of {products.length} premium spearmint flavor nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Benefits Section - Moved After Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavorInfo.benefits.map((benefit, index) => {
                const icons = [CheckCircle, Shield, Award, TrendingUp, Users, Star]
                const IconComponent = icons[index % icons.length]
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                    <IconComponent className="text-emerald-600 mx-auto mb-4" size={32} />
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Guarantees */}
      <section className="py-12 bg-white">
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

      {/* FAQ Section for SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About {flavorInfo.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes spearmint different from other mint flavors?
                </h3>
                <p className="text-gray-600">
                  Spearmint offers a classic, gentle mint flavor that's milder and more refined than menthol, 
                  with a naturally sweet undertone that makes it perfect for all-day use and ideal for those who prefer subtle freshness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What strengths are available in spearmint pouches?
                </h3>
                <p className="text-gray-600">
                  We offer spearmint nicotine pouches in {availableStrengths.join(' and ')} strengths, 
                  allowing you to choose the perfect nicotine level for your preferences and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}