'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Select from '@/components/ui/Select'
import Badge from '@/components/ui/Badge'

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
      {/* Hero Section with Conversion Elements - Compressed */}
      <section className="py-4 bg-gradient-to-br from-white to-pink-50">
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
      <section className="py-1 bg-gradient-to-r from-pink-50 to-purple-50">
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
                    ? 'border-pink-500 bg-pink-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-pink-600 rounded-full flex items-center justify-center">
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
                        ? 'border-pink-500 bg-pink-50 shadow-lg'
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
              <Button
                variant={!selectedStrength ? 'primary' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedStrength(null)
                  scrollToProducts()
                }}
              >
                All Strengths
              </Button>
              {availableStrengths.map((strength) => (
                <Button
                  key={strength}
                  variant={selectedStrength === strength ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedStrength(selectedStrength === strength ? null : strength)
                    scrollToProducts()
                  }}
                >
                  {strength}
                </Button>
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
            <Card variant="default" padding="md" className="mb-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap items-center gap-3 mb-3 lg:mb-0">
                  <span className="font-medium text-gray-700">Filter by Strength:</span>
                  <Button
                    variant={!selectedStrength ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => {
                      setSelectedStrength(null)
                      scrollToProducts()
                    }}
                  >
                    All Strengths
                  </Button>
                  {availableStrengths.map(strength => (
                    <Button
                      key={strength}
                      variant={selectedStrength === strength ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => {
                        setSelectedStrength(strength)
                        scrollToProducts()
                      }}
                    >
                      {strength}
                    </Button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    options={[
                      { value: 'popular', label: 'Most Popular' },
                      { value: 'rating', label: 'Highest Rated' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' }
                    ]}
                    selectSize="sm"
                  />
                </div>
              </div>
            </Card>

            {/* Urgency/Scarcity Element - Compact */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-lg mb-4 text-center">
              <div className="flex items-center justify-center text-sm">
                <TrendingUp className="mr-1" size={16} />
                <span className="font-bold">Sweet Treat:</span>
                <span className="ml-1">{filteredProducts.filter(p => p.inStock).length} sweet flavor products selling fast this week!</span>
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
              Showing {filteredProducts.length} of {products.length} premium sweet flavor nicotine pouches
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
                    <IconComponent className="text-pink-600 mx-auto mb-4" size={32} />
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
                  What makes sweet flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Our sweet flavor nicotine pouches offer gentle, dessert-like taste profiles 
                  that provide a smooth, pleasant experience perfect for those who prefer milder, sweeter flavors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What sweet varieties are available?
                </h3>
                <p className="text-gray-600">
                  We offer sweet nicotine pouches in Vanilla and other delightful sweet flavors, 
                  available in multiple nicotine strengths to suit different preferences and experience levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}