'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { products } from '@/data/products'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    if (pathSegments.length === 0) {
      return [{ label: 'Home', href: '/', current: true }]
    }

    // Handle different routes
    if (pathSegments[0] === 'products') {
      breadcrumbs.push({ label: 'Products', href: '/products' })
      
      if (pathSegments[1]) {
        // This might be a product ID or category
        const productId = pathSegments[1]
        breadcrumbs.push({ 
          label: `Product ${productId}`, 
          href: `/products/${productId}`,
          current: true 
        })
      } else {
        breadcrumbs[breadcrumbs.length - 1].current = true
      }
    } else if (pathSegments[0] === 'about') {
      breadcrumbs.push({ label: 'About', href: '/about', current: true })
    } else if (pathSegments[0] === 'contact') {
      breadcrumbs.push({ label: 'Contact', href: '/contact', current: true })
    } else if (pathSegments[0] === 'search') {
      breadcrumbs.push({ label: 'Search', href: '/search', current: true })
    } else if (pathSegments[0] === 'checkout') {
      breadcrumbs.push({ label: 'Checkout', href: '/checkout', current: true })
    } else if (pathSegments[0] === 'buy') {
      breadcrumbs.push({ label: 'Buy Nicotine Pouches', href: '/buy', current: true })
    } else if (pathSegments[0] === 'privacy') {
      breadcrumbs.push({ label: 'Privacy Policy', href: '/privacy', current: true })
    } else if (pathSegments[0] === 'terms') {
      breadcrumbs.push({ label: 'Terms of Service', href: '/terms', current: true })
    } else if (pathSegments[0] === 'shipping') {
      breadcrumbs.push({ label: 'Shipping Information', href: '/shipping', current: true })
    } else if (pathSegments[0] === 'returns') {
      breadcrumbs.push({ label: 'Returns Policy', href: '/returns', current: true })
    } else if (pathSegments[0].includes('flavors-nicotine-pouches')) {
      // Handle flavor category pages
      const flavorName = pathSegments[0].replace('-flavors-nicotine-pouches', '').replace('-', ' ')
      const capitalizedFlavor = flavorName.charAt(0).toUpperCase() + flavorName.slice(1)
      breadcrumbs.push({ label: 'Buy Nicotine Pouches', href: '/buy' })
      breadcrumbs.push({ label: `${capitalizedFlavor} Flavors`, href: `/${pathSegments[0]}`, current: true })
    } else if (pathSegments[0].includes('mg-nicotine-pouches')) {
      // Handle strength category pages
      const strength = pathSegments[0].replace('-nicotine-pouches', '')
      breadcrumbs.push({ label: 'Buy Nicotine Pouches', href: '/buy' })
      breadcrumbs.push({ label: `${strength.toUpperCase()} Nicotine Pouches`, href: `/${pathSegments[0]}`, current: true })
    } else {
      // Check if it's a product slug
      const product = products.find(p => p.slug === pathSegments[0])
      if (product) {
        breadcrumbs.push({ label: 'Products', href: '/products' })
        breadcrumbs.push({ 
          label: product.name, 
          href: `/${product.slug}`,
          current: true 
        })
      } else {
        // Generic fallback
        pathSegments.forEach((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
          breadcrumbs.push({ 
            label, 
            href, 
            current: index === pathSegments.length - 1 
          })
        })
      }
    }

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null
  }

  // Generate JSON-LD structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.label,
      "item": `https://nicotinepoucheszyn.com${breadcrumb.href}`
    }))
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    size={16} 
                    className="text-gray-400 mx-2" 
                    aria-hidden="true"
                  />
                )}
                
                {breadcrumb.current ? (
                  <span 
                    className="text-gray-900 font-medium"
                    aria-current="page"
                  >
                    {index === 0 && <Home size={16} className="inline mr-1" />}
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                  >
                    {index === 0 && <Home size={16} className="inline mr-1" />}
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}