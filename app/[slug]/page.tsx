import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import ProductContent from './ProductContent'


export default async function ProductSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  return <ProductContent product={product} />
}

