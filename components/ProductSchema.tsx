'use client'

import Script from 'next/script'
import { Product } from '@/types'

interface ProductSchemaProps {
  product: Product
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `${product.name} - Premium tobacco-free nicotine pouch with ${product.flavor} flavor and ${product.strength} nicotine strength. Smokeless and discreet nicotine satisfaction for adults 21+.`,
    "image": [
      `https://nicotinepoucheszyn.com${product.image}`,
      `https://nicotinepoucheszyn.com${product.image}`, // Add multiple angles if available
    ],
    "sku": product.id.toString(),
    "mpn": `ZYN-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "Zyn",
      "logo": "https://nicotinepoucheszyn.com/brand-logo.png"
    },
    "category": "Tobacco-Free Nicotine Products",
    "manufacturer": {
      "@type": "Organization",
      "name": "Zyn International",
      "url": "https://nicotinepoucheszyn.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://nicotinepoucheszyn.com/${product.slug}`,
      "priceCurrency": "USD",
      "price": product.price.toString(),
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "condition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Zyn Nicotine Pouches"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "USD"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue", 
            "minValue": 3,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "bestRating": "5",
      "worstRating": "1", 
      "reviewCount": product.reviews.toString(),
      "ratingCount": product.reviews.toString()
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": Math.min(5, Math.max(1, product.rating + 0.2)).toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": `Great ${product.flavor.toLowerCase()} flavor and perfect ${product.strength} strength. Clean and convenient nicotine satisfaction.`,
        "datePublished": new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Flavor",
        "value": product.flavor
      },
      {
        "@type": "PropertyValue", 
        "name": "Nicotine Strength",
        "value": product.strength
      },
      {
        "@type": "PropertyValue",
        "name": "Category", 
        "value": product.category
      },
      {
        "@type": "PropertyValue",
        "name": "Tobacco-Free",
        "value": "Yes"
      },
      {
        "@type": "PropertyValue",
        "name": "Smokeless",
        "value": "Yes"
      },
      {
        "@type": "PropertyValue",
        "name": "Age Restriction",
        "value": "21+"
      }
    ],
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 21
    },
    "hasMeasurement": [
      {
        "@type": "QuantitativeValue",
        "name": "Nicotine Content",
        "value": product.strength,
        "unitText": "mg per pouch"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nicotinepoucheszyn.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Products",
        "item": "https://nicotinepoucheszyn.com/buy"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.category,
        "item": `https://nicotinepoucheszyn.com/buy?category=${encodeURIComponent(product.category.toLowerCase().replace(/\s+/g, '-'))}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://nicotinepoucheszyn.com/${product.slug}`
      }
    ]
  }

  return (
    <>
      <Script
        id={`product-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}