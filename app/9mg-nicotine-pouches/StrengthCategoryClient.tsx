'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle, Heart, Clock, Smile } from 'lucide-react'
import Link from 'next/link'

interface StrengthInfo {
  title: string
  description: string
  h1: string
  seoDescription: string
  strengthName: string
  benefits: string[]
  keywords: string[]
  lsiKeywords: string[]
}

interface StrengthCategoryClientProps {
  strength: string
  strengthInfo: StrengthInfo
  products: Product[]
}

export default function StrengthCategoryClient({ strength, strengthInfo, products }: StrengthCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null)
  const [showStickyFilter, setShowStickyFilter] = useState(false)

  // Scroll to products grid when filter is selected
  const scrollToProducts = () => {
    const productsGrid = document.getElementById('products-grid')
    if (productsGrid) {
      productsGrid.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  // Get available flavors for this strength
  const availableFlavors = Array.from(new Set(products.map(p => p.flavor))).sort()
  
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
  
  // Apply flavor filter
  if (selectedFlavor) {
    filteredProducts = filteredProducts.filter(p => p.flavor === selectedFlavor)
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

  // Get theme colors based on strength
  const getThemeColors = () => {
    switch (strength) {
      case '3mg':
        return {
          gradient: 'from-white to-green-50',
          primary: 'bg-green-600',
          secondary: 'from-green-50 to-blue-50',
          accent: 'text-green-600'
        }
      case '6mg':
        return {
          gradient: 'from-white to-blue-50',
          primary: 'bg-blue-600',
          secondary: 'from-blue-50 to-purple-50',
          accent: 'text-blue-600'
        }
      case '9mg':
        return {
          gradient: 'from-white to-red-50',
          primary: 'bg-red-600',
          secondary: 'from-red-50 to-orange-50',
          accent: 'text-red-600'
        }
      default:
        return {
          gradient: 'from-white to-gray-50',
          primary: 'bg-gray-600',
          secondary: 'from-gray-50 to-gray-100',
          accent: 'text-gray-600'
        }
    }
  }

  const theme = getThemeColors()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Conversion Elements - Compressed */}
      <section className={`py-4 bg-gradient-to-br ${theme.gradient}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{strengthInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {strengthInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {strengthInfo.description}
            </p>

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

      {/* Flavor Sub-Category Navigation */}
      <section className={`py-1 bg-gradient-to-r ${theme.secondary}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* All Flavors Card */}
              <div 
                onClick={() => setSelectedFlavor(null)}
                className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedFlavor
                    ? `border-${theme.primary.split('-')[1]}-500 ${theme.primary.replace('bg-', 'bg-').replace('600', '50')} shadow-lg`
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 ${theme.primary} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-lg">🌟</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">All Flavors</h3>
                  <div className="text-xs text-gray-600">
                    {products.length} products
                  </div>
                </div>
              </div>

              {availableFlavors.slice(0, 7).map((flavor) => {
                const flavorCount = products.filter(p => p.flavor === flavor).length
                const flavorEmoji = {
                  'Cool Mint': '🌿',
                  'Spearmint': '🍃',
                  'Menthol': '❄️',
                  'Citrus': '🍊',
                  'Lemon': '🍋',
                  'Berry': '🫐',
                  'Wintergreen': '🌲',
                  'Coffee': '☕',
                  'Espresso': '☕',
                  'Cinnamon': '🔥',
                  'Vanilla': '🍦'
                }[flavor] || '⭐'

                return (
                  <div 
                    key={flavor}
                    onClick={() => setSelectedFlavor(selectedFlavor === flavor ? null : flavor)}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedFlavor === flavor
                        ? `border-${theme.primary.split('-')[1]}-500 ${theme.primary.replace('bg-', 'bg-').replace('600', '50')} shadow-lg`
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">{flavorEmoji}</span>
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">{flavor}</h3>
                      <div className="text-xs text-gray-600">
                        {flavorCount} products
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
            {/* Flavor Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedFlavor(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedFlavor ? `${theme.primary} text-white` : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Flavors
              </button>
              {availableFlavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => {
                    setSelectedFlavor(selectedFlavor === flavor ? null : flavor)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedFlavor === flavor 
                      ? `${theme.primary} text-white`
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {flavor}
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
                <span className="font-medium text-gray-700">Filter by Flavor:</span>
                <button
                  onClick={() => setSelectedFlavor(null)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    !selectedFlavor 
                      ? `${theme.primary} text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Flavors
                </button>
                {availableFlavors.slice(0, 4).map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedFlavor === flavor
                        ? `${theme.primary} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.primary.split('-')[1]}-500 focus:border-${theme.primary.split('-')[1]}-500`}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element - Compact */}
            <div className={`bg-gradient-to-r ${theme.primary.replace('bg-', 'from-')} to-yellow-500 text-white p-2 rounded-lg mb-4 text-center`}>
              <div className="flex items-center justify-center text-sm">
                <TrendingUp className="mr-1" size={16} />
                <span className="font-bold">Popular Choice:</span>
                <span className="ml-1">{filteredProducts.filter(p => p.inStock).length} {strength} products selling fast this week!</span>
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
              Showing {filteredProducts.length} of {products.length} premium {strength} nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Strength Benefits Section - Moved After Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {strengthInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strengthInfo.benefits.map((benefit, index) => {
                const icons = [Heart, Clock, Smile, CheckCircle, Shield, Award]
                const IconComponent = icons[index % icons.length]
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                    <IconComponent className={`${theme.accent} mx-auto mb-4`} size={32} />
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
              Frequently Asked Questions About {strengthInfo.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Who should use {strength} nicotine pouches?
                </h3>
                <p className="text-gray-600">
                  {strength === '3mg' && 'Our 3mg nicotine pouches are perfect for beginners, light users, or those looking to reduce their nicotine intake. They provide a gentle introduction to nicotine pouches.'}
                  {strength === '6mg' && 'Our 6mg nicotine pouches are ideal for moderate users seeking a balanced nicotine experience. Perfect for daily use and most popular among our customers.'}
                  {strength === '9mg' && 'Our 9mg nicotine pouches are designed for experienced users who need a stronger nicotine delivery. Best for heavy users or those transitioning from traditional tobacco.'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What flavors are available in {strength}?
                </h3>
                <p className="text-gray-600">
                  We offer {strength} nicotine pouches in {availableFlavors.join(', ')} flavors. 
                  All flavors provide the same consistent {strength} nicotine strength with unique taste profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}