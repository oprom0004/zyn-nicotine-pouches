'use client'

import { Product } from '@/types'
import { useCart } from '@/contexts/CartContext'
import { useNotificationHelpers } from '@/contexts/NotificationContext'
import { Star, Heart, ShoppingCart, Truck, Shield } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { StockBadge, DiscountBadge, FeaturedBadge, StrengthBadge, FlavorBadge } from '@/components/ui/Badge'
import SEOImage from '@/components/SEOImage'

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
      <Card 
        variant="default" 
        padding="md"
        hover={true}
        className={`cursor-pointer animate-fade-in-up stagger-${(index % 4) + 1} relative overflow-hidden`}
      >
        {/* Product Image */}
        <div className="relative mb-4">
          <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden">
            <SEOImage
              src={product.imageUrl || `/products/${product.slug}.jpg`}
              alt={`${product.name} - ${product.flavor} flavor nicotine pouches`}
              fill
              className="group-hover:scale-105 transition-transform duration-300"
              productName={product.name}
              flavor={product.flavor}
              strength={product.strength}
              brand="Zyn"
              priority={index < 4} // Priority load for first 4 products
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            <StockBadge inStock={product.inStock} />
            {product.featured && <FeaturedBadge />}
            {discountPercentage > 0 && <DiscountBadge discount={discountPercentage} />}
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

        <CardContent className="p-0">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-zyn-primary transition-colors duration-200 line-clamp-2 font-optimized mb-3">
            {product.name}
          </h3>

          {/* Badges - Strength & Flavor */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <StrengthBadge>{product.strength}</StrengthBadge>
            <FlavorBadge>{product.flavor}</FlavorBadge>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Purchase Guarantees */}
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 py-2 border-t border-gray-100 mb-4">
            <div className="flex items-center">
              <Truck size={12} className="mr-1 text-blue-600" />
              <span>FREE $25+</span>
            </div>
            <div className="flex items-center">
              <Shield size={12} className="mr-1 text-green-600" />
              <span>30-day return</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-0">
          <Button
            variant={product.inStock ? 'primary' : 'outline'}
            size="md"
            className="w-full"
            disabled={!product.inStock}
            loading={isLoading}
            onClick={handleAddToCart}
            leftIcon={<ShoppingCart className="w-4 h-4" />}
          >
            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </CardFooter>

        {/* Quick View Overlay (appears on hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <span className="text-white font-semibold bg-zyn-primary px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </span>
        </div>
      </Card>
    </Link>
  )
}

// Loading skeleton component for ProductCard
export function ProductCardSkeleton() {
  return (
    <Card variant="default" padding="md" className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <CardContent className="p-0">
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded-full w-12"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
        </div>
      </CardContent>
      <CardFooter className="p-0 mt-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </CardFooter>
    </Card>
  )
}