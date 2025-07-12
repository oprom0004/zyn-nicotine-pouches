'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SEOImageProps {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
  quality?: number
  fallbackSrc?: string
  productName?: string
  flavor?: string
  strength?: string
  brand?: string
}

export default function SEOImage({ 
  src, 
  alt, 
  title,
  width, 
  height, 
  fill = false,
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  quality = 85,
  fallbackSrc = '/images/placeholder-product.webp',
  productName,
  flavor,
  strength,
  brand = 'Zyn'
}: SEOImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  // Generate SEO-optimized alt text if product info is provided
  const generateAltText = () => {
    if (productName && flavor && strength) {
      return `${brand} ${productName} - ${flavor} flavor nicotine pouches, ${strength} strength - Premium tobacco-free smokeless nicotine product for adults 21+`
    }
    return alt
  }

  // Generate title attribute for additional SEO context
  const generateTitle = () => {
    if (title) return title
    if (productName && flavor && strength) {
      return `Shop ${brand} ${productName} ${flavor} ${strength} nicotine pouches online - Tobacco-free smokeless alternative`
    }
    return alt
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  // Convert image format to WebP for better performance if supported
  const optimizeImageSrc = (originalSrc: string) => {
    if (imageError) return fallbackSrc
    
    // If it's already WebP or a placeholder, return as-is
    if (originalSrc.includes('.webp') || originalSrc.includes('placeholder')) {
      return originalSrc
    }
    
    // Convert to WebP for better compression
    const extension = originalSrc.split('.').pop()
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
      return originalSrc.replace(`.${extension}`, '.webp')
    }
    
    return originalSrc
  }

  const optimizedAlt = generateAltText()
  const optimizedTitle = generateTitle()
  const optimizedSrc = optimizeImageSrc(src)

  return (
    <div className={cn(
      'relative overflow-hidden',
      fill ? 'w-full h-full' : '',
      className
    )}>
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      <Image
        src={optimizedSrc}
        alt={optimizedAlt}
        title={optimizedTitle}
        {...(fill ? { fill: true } : { width: width!, height: height! })}
        className={cn(
          'transition-opacity duration-300',
          imageLoading ? 'opacity-0' : 'opacity-100',
          fill ? 'object-cover' : ''
        )}
        priority={priority}
        sizes={sizes}
        loading={loading}
        quality={quality}
        onLoad={handleImageLoad}
        onError={handleImageError}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        // 添加图片的结构化数据属性
        itemProp="image"
        data-product={productName}
        data-flavor={flavor}
        data-strength={strength}
        data-brand={brand}
      />
      
      {/* JSON-LD for image SEO */}
      {productName && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "url": `https://nicotinepoucheszyn.com${optimizedSrc}`,
              "name": optimizedTitle,
              "description": optimizedAlt,
              "contentUrl": `https://nicotinepoucheszyn.com${optimizedSrc}`,
              "width": width || "400",
              "height": height || "400",
              "encodingFormat": "image/webp",
              "about": {
                "@type": "Product",
                "name": `${brand} ${productName}`,
                "brand": brand,
                "category": "Tobacco-Free Nicotine Products"
              },
              "license": "https://nicotinepoucheszyn.com/terms",
              "acquireLicensePage": "https://nicotinepoucheszyn.com/contact"
            })
          }}
        />
      )}
    </div>
  )
}