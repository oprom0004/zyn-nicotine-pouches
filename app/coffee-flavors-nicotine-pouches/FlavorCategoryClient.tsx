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

export default function FlavorCategoryClient({ flavor, flavorInfo, products }: FlavorCategoryClientProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null)
  const [selectedCoffeeType, setSelectedCoffeeType] = useState<string | null>(null)
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

  // Get available strengths for this flavor
  const availableStrengths = Array.from(new Set(products.map(p => p.strength))).sort()
  
  // Get available coffee types
  const coffeeTypes = [
    { name: 'Coffee', value: 'Coffee', count: products.filter(p => p.flavor === 'Coffee').length },
    { name: 'Espresso', value: 'Espresso', count: products.filter(p => p.flavor === 'Espresso').length }
  ].filter(type => type.count > 0)

  // Handle scroll for sticky mobile filter
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky filter when scrolled past the hero section (around 400px)
      setShowStickyFilter(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Filter and sort products
  let filteredProducts = products
  
  // Apply citrus type filter
  if (selectedCoffeeType) {
    filteredProducts = filteredProducts.filter(p => p.flavor === selectedCoffeeType)
  }
  
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
      {/* Hero Section with Conversion Elements - Ultra Compressed */}
      <section className="py-4 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb for SEO */}
            <nav className="text-sm text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Social Proof Bar - Ultra Compressed */}
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
      {/* Citrus Sub-Category Navigation - Minimal Padding */}
      <section className="py-1 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* All Coffee Flavors Card */}
              <div 
                onClick={() => setSelectedCoffeeType(null)}
                className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  !selectedCoffeeType
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  {/* Icon placeholder for All Coffee */}
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🍊</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">All Coffee</h3>
                  <div className="text-xs text-gray-600">
                    {products.length} products
                  </div>
                </div>
              </div>

              {coffeeTypes.map((coffeeType) => (
                <div 
                  key={coffeeType.value}
                  onClick={() => setSelectedCoffeeType(selectedCoffeeType === coffeeType.value ? null : coffeeType.value)}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    selectedCoffeeType === coffeeType.value
                      ? 'border-orange-500 bg-orange-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    {/* Product images/icons */}
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center overflow-hidden">
                      {coffeeType.value === 'Citrus' && (
                        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                          <span className="text-white text-lg">🍊</span>
                        </div>
                      )}
                      {coffeeType.value === 'Lemon' && (
                        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                          <span className="text-white text-lg">🍋</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">{coffeeType.name}</h3>
                    <div className="text-xs text-gray-500 mb-1">
                      {coffeeType.value === 'Citrus' && 'Vibrant & zesty'}
                      {coffeeType.value === 'Lemon' && 'Bright & crisp'}
                    </div>
                    <div className="text-xs text-gray-600">
                      {coffeeType.count} products
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Filter Bar - Only show when scrolled */}
      {showStickyFilter && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white p-3 border-t shadow-lg animate-in slide-in-from-bottom duration-300">
          <div className="max-h-32 overflow-y-auto">
            {/* Type Pills */}
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => {
                  setSelectedCoffeeType(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedCoffeeType ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                All Coffee
              </button>
              {coffeeTypes.map((coffeeType) => (
                <button
                  key={coffeeType.value}
                  onClick={() => {
                    setSelectedCoffeeType(selectedCoffeeType === coffeeType.value ? null : coffeeType.value)
                    scrollToProducts()
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCoffeeType === coffeeType.value 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                  }`}
                >
                  {coffeeType.name}
                </button>
              ))}
            </div>
            
            {/* Strength Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  !selectedStrength ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'
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
                      ? 'bg-orange-600 text-white' 
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

      {/* Products Section with Conversion Optimization */}
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

              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Urgency/Scarcity Element - Compact */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg mb-4 text-center">
              <div className="flex items-center justify-center text-sm">
                <TrendingUp className="mr-1" size={16} />
                <span className="font-bold">High Demand:</span>
                <span className="ml-1">{filteredProducts.filter(p => p.inStock).length} citrus flavor products selling fast this week!</span>
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
              Showing {filteredProducts.length} of {products.length} premium citrus flavor nicotine pouches
            </div>
            
            {/* Debug Info - Remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <div className="text-center mt-4 text-xs text-gray-400">
                Debug: Total products passed: {products.length} | 
                Products: {products.map(p => p.name).join(', ')}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Citrus Flavors Section - Moved after products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Citrus Flavor Education Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Citrus Flavor Nicotine Pouches?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Citrus flavor nicotine pouches offer the perfect balance of energizing taste and nicotine satisfaction. 
              Our citrus flavor collection includes vibrant citrus and bright lemon varieties, each delivering 
              a unique zesty citrus flavor experience that lasts for hours.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you prefer the vibrant citrus blend or the crisp lemon sensation, our citrus flavor 
              nicotine pouches provide consistent quality and authentic taste. Every citrus flavor pouch is 
              tobacco-free and designed for adults seeking a premium fruity alternative.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About Citrus Flavor Nicotine Pouches
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes citrus flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Our citrus flavor nicotine pouches offer authentic mint taste with cooling sensation that provides 
                  long-lasting satisfaction. Each citrus flavor variety is crafted with premium ingredients and tobacco-free formulation 
                  for the ultimate citrus flavor experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What citrus flavor varieties are available?
                </h3>
                <p className="text-gray-600">
                  We offer citrus flavor nicotine pouches in cool mint, spearmint, and menthol varieties. 
                  Each citrus flavor type is available in {availableStrengths.join(', ')} strengths 
                  to suit different preferences and experience levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the citrus flavor last?
                </h3>
                <p className="text-gray-600">
                  Our citrus flavor nicotine pouches are designed to deliver consistent citrus flavor for 30-60 minutes. 
                  The citrus flavor intensity remains strong throughout use, providing fresh breath and cooling sensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Specific Citrus Flavors Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🍊 Explore Specific Citrus Flavors
              </h2>
              <p className="text-lg text-gray-600">
                Want a more targeted citrus experience? Explore our specialized citrus flavor collections
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Citrus Card */}
              <Link href="/citrus-nicotine-pouches" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍊</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Citrus</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Vibrant citrus blend with energizing zesty flavor
                    </p>
                    <div className="text-orange-600 text-sm font-medium">
                      {products.filter(p => p.flavor === 'Citrus').length} products available
                    </div>
                    <div className="mt-3 text-orange-600 group-hover:text-orange-800 font-medium">
                      Explore Citrus →
                    </div>
                  </div>
                </div>
              </Link>

              {/* Lemon Card */}
              <Link href="/lemon-nicotine-pouches" className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍋</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lemon</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Bright lemon flavor with crisp citrusy kick
                    </p>
                    <div className="text-yellow-600 text-sm font-medium">
                      {products.filter(p => p.flavor === 'Lemon').length} products available
                    </div>
                    <div className="mt-3 text-yellow-600 group-hover:text-yellow-800 font-medium">
                      Explore Lemon →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Each specialized collection offers unique citrus experiences tailored to your preferences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}