'use client'

import { Product } from '@/types'
import { useCart } from '@/contexts/CartContext'
import { useNotificationHelpers } from '@/contexts/NotificationContext'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart()
  const { showSuccess } = useNotificationHelpers()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the button
    e.stopPropagation()
    
    if (!product.inStock) return
    
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    addToCart(product)
    showSuccess(`${product.name} added to cart!`)
    
    setIsLoading(false)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const discountPercentage = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/${product.slug}`} className="group">
      <div className={`card cursor-pointer animate-fade-in-up stagger-${(index % 4) + 1}`}>
        {/* Product Image */}
        <div className="relative mb-4">
          <div className="product-image">
            <span className="text-center px-4">{product.name}</span>
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            <span className={`badge ${product.inStock ? 'badge-success' : 'badge-warning'}`}>
              {product.inStock ? 'In Stock' : 'Low Stock'}
            </span>
            {product.featured && (
              <span className="badge badge-strength">Featured</span>
            )}
            {discountPercentage > 0 && (
              <span className="badge bg-red-500 text-white">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-zyn-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>

          {/* Badges - Strength & Flavor */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="badge badge-strength">{product.strength}</span>
            <span className="badge badge-flavor">{product.flavor}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || isLoading}
              className={`btn btn-primary flex items-center gap-2 ${
                !product.inStock 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-lg transform hover:scale-105'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {isLoading ? (
                <div className="loading w-4 h-4"></div>
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
              {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Quick View Overlay (appears on hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <span className="text-white font-semibold bg-zyn-primary px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </span>
        </div>
      </div>
    </Link>
  )
}

// Loading skeleton component for ProductCard
export function ProductCardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="product-image bg-gray-200"></div>
      <div className="space-y-3 mt-4">
        <div className="flex gap-2">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded w-12"></div>
          <div className="h-6 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-10 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  )
}