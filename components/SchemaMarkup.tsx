'use client'

import Script from 'next/script'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyn Nicotine Pouches",
    "url": "https://zyn-nicotine-pouches.vercel.app",
    "logo": "https://zyn-nicotine-pouches.vercel.app/logo.png",
    "description": "Premium tobacco-free nicotine pouches online store. Shop the best nicotine pouches with fast shipping.",
    "sameAs": [
      "https://facebook.com/zynnicotinepouches",
      "https://instagram.com/zynnicotinepouches",
      "https://twitter.com/zynpouches"
    ]
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Zyn Nicotine Pouches",
    "description": "Premium tobacco-free nicotine pouches available in multiple strengths and flavors. Smokeless nicotine pouches for adults 21+.",
    "category": "Nicotine Pouches",
    "brand": {
      "@type": "Brand",
      "name": "Zyn"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "4.99",
      "highPrice": "6.99",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
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

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}