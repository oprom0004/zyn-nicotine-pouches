'use client'

import Script from 'next/script'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyn Nicotine Pouches",
    "alternateName": "Zyn Tobacco-Free Pouches",
    "url": "https://nicotinepoucheszyn.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nicotinepoucheszyn.com/logo.png",
      "width": 300,
      "height": 100
    },
    "description": "Premium tobacco-free nicotine pouches online store. Shop the best nicotine pouches with fast shipping. Adults 21+ only.",
    "founder": {
      "@type": "Organization",
      "name": "Zyn International"
    },
    "foundingDate": "2009",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-ZYN-POUCH",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Multiple States"
    },
    "sameAs": [
      "https://facebook.com/zynnicotinepouches",
      "https://instagram.com/zynnicotinepouches",
      "https://twitter.com/zynpouches",
      "https://linkedin.com/company/zyn-nicotine-pouches"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nicotine Pouches",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Zyn Mint Nicotine Pouches",
            "category": "Tobacco-Free Nicotine Products"
          }
        }
      ]
    }
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Zyn Nicotine Pouches Collection",
    "description": "Premium tobacco-free nicotine pouches available in multiple strengths (3mg, 6mg, 9mg, 12mg) and flavors (mint, citrus, berry, wintergreen). Smokeless nicotine pouches for adults 21+.",
    "category": "Tobacco-Free Nicotine Products",
    "brand": {
      "@type": "Brand",
      "name": "Zyn",
      "logo": "https://nicotinepoucheszyn.com/brand-logo.png"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Zyn International"
    },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 21
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "4.99",
      "highPrice": "12.99",
      "offerCount": "50",
      "availability": "https://schema.org/InStock",
      "url": "https://nicotinepoucheszyn.com/products",
      "seller": {
        "@type": "Organization",
        "name": "Zyn Nicotine Pouches"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1250",
      "ratingCount": "1250"
    },
    "additionalProperty": [
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
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are nicotine pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nicotine pouches are tobacco-free, smokeless products containing nicotine, flavorings, and plant-based materials. They provide a discreet way to consume nicotine without smoking or chewing tobacco."
        }
      },
      {
        "@type": "Question",
        "name": "How do you use nicotine pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Place the nicotine pouch under your upper lip and leave it there for 30-60 minutes. No need to chew or spit. Dispose of the used pouch responsibly."
        }
      },
      {
        "@type": "Question",
        "name": "Are nicotine pouches safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nicotine pouches are regulated tobacco products for adults 21+. While no tobacco product is completely risk-free, nicotine pouches eliminate combustion and many harmful chemicals found in cigarettes."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy nicotine pouches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy nicotine pouches online from our store or at authorized retailers. All purchases require age verification for adults 21 and older."
        }
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zyn Nicotine Pouches",
    "alternateName": "Zyn Tobacco-Free Pouches Store",
    "url": "https://nicotinepoucheszyn.com",
    "description": "Premium online store for tobacco-free nicotine pouches. Shop Zyn pouches in multiple flavors and strengths.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Zyn Nicotine Pouches"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://nicotinepoucheszyn.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
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
        "item": "https://nicotinepoucheszyn.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://nicotinepoucheszyn.com/about"
      }
    ]
  }

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Zyn Nicotine Pouches Online Store",
    "description": "Official online store for Zyn tobacco-free nicotine pouches. Fast shipping, secure checkout, age verification required.",
    "url": "https://nicotinepoucheszyn.com",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nicotine Pouches Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "By Strength",
          "itemListElement": [
            {"@type": "Offer", "name": "3mg Nicotine Pouches"},
            {"@type": "Offer", "name": "6mg Nicotine Pouches"},
            {"@type": "Offer", "name": "9mg Nicotine Pouches"},
            {"@type": "Offer", "name": "12mg Nicotine Pouches"}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "By Flavor",
          "itemListElement": [
            {"@type": "Offer", "name": "Mint Nicotine Pouches"},
            {"@type": "Offer", "name": "Citrus Nicotine Pouches"},
            {"@type": "Offer", "name": "Berry Nicotine Pouches"},
            {"@type": "Offer", "name": "Wintergreen Nicotine Pouches"}
          ]
        }
      ]
    },
    "acceptedPaymentMethod": [
      "http://purl.org/goodrelations/v1#ByBankTransferInAdvance",
      "http://purl.org/goodrelations/v1#ByInvoice",
      "http://purl.org/goodrelations/v1#Cash",
      "http://purl.org/goodrelations/v1#CheckInAdvance",
      "http://purl.org/goodrelations/v1#COD",
      "http://purl.org/goodrelations/v1#DirectDebit",
      "http://purl.org/goodrelations/v1#GoogleCheckout",
      "http://purl.org/goodrelations/v1#PayPal",
      "http://purl.org/goodrelations/v1#PaySwarm"
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="store-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}