'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
  fallback?: React.ReactNode
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false,
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  fallback
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Fallback image if original fails to load
  const fallbackSrc = '/images/placeholder-product.webp'

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  if (imageError && fallback) {
    return <>{fallback}</>
  }

  return (
    <div className={`relative overflow-hidden ${!fill ? '' : 'w-full h-full'} ${className}`}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      <Image
        src={imageError ? fallbackSrc : src}
        alt={alt}
        {...(fill ? { fill: true } : { width: width!, height: height! })}
        className={`transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'} ${fill ? 'object-cover' : ''}`}
        priority={priority}
        sizes={sizes}
        loading={loading}
        quality={85}
        onLoad={handleImageLoad}
        onError={handleImageError}
        // SEO和性能优化
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  )
}