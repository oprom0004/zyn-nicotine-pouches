import { products } from '@/data/products'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return {
      title: 'Product Not Found | Zyn Nicotine Pouches',
      description: 'The nicotine pouch product you are looking for was not found.'
    }
  }

  const title = `Buy Nicotine pouches ${product.flavor} ${product.strength} Online - Zyn, On premium flavor, perfect strength`
  const description = `Shop ${product.name} online. ${product.description} Premium tobacco-free nicotine pouches with ${product.strength} strength. Fast shipping. Adults 21+.`

  return {
    title,
    description,
    keywords: `nicotine pouches, ${product.flavor.toLowerCase()} nicotine pouches, ${product.strength} nicotine pouches, zyn nicotine pouches, tobacco-free nicotine pouches, buy nicotine pouches online`,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: product.imageUrl || '/products/default.jpg',
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.imageUrl || '/products/default.jpg'],
    },
  }
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}