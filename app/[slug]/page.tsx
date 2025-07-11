import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProductContent from './ProductContent'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested nicotine pouch product could not be found.',
    }
  }

  const discountPercent = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return {
    title: `${product.name} | ${product.flavor} ${product.strength} Nicotine Pouches`,
    description: `Buy ${product.name} - ${product.flavor} flavored ${product.strength} nicotine pouches. ${product.description} ${discountPercent > 0 ? `Save ${discountPercent}%!` : ''} Free shipping over $25. Adults 21+.`,
    keywords: [
      product.name.toLowerCase(),
      `${product.flavor.toLowerCase()} nicotine pouches`,
      `${product.strength} nicotine pouches`,
      `${product.category.toLowerCase()} nicotine pouches`,
      'tobacco-free pouches',
      'smokeless nicotine',
      `buy ${product.name.toLowerCase()}`,
      `${product.name.toLowerCase()} review`,
      `${product.name.toLowerCase()} price`,
      'premium nicotine pouches'
    ].join(', '),
    openGraph: {
      title: `${product.name} | Premium ${product.flavor} Nicotine Pouches`,
      description: `${product.description} Available in ${product.strength}. ${discountPercent > 0 ? `Save ${discountPercent}%!` : ''}`,
      url: `https://nicotinepoucheszyn.com/${product.slug}`,
      type: 'website',
      images: [
        {
          url: product.imageUrl || '/og-product-default.jpg',
          width: 800,
          height: 600,
          alt: `${product.name} - ${product.flavor} ${product.strength} Nicotine Pouches`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ${product.flavor} Nicotine Pouches`,
      description: `${product.description} - ${product.strength} strength.`,
      images: [product.imageUrl || '/og-product-default.jpg'],
    },
    alternates: {
      canonical: `https://nicotinepoucheszyn.com/${product.slug}`,
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': 'USD',
      'product:availability': product.inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:brand': 'Zyn',
      'product:category': product.category,
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  return <ProductContent product={product} />
}

