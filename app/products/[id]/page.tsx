import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  
  // 尝试按id查找产品
  let product = products.find(p => p.id === parseInt(id))
  
  // 如果按id找不到，尝试按slug查找
  if (!product) {
    product = products.find(p => p.slug === id)
  }

  if (!product) {
    return {
      title: 'Product Not Found | Zyn Nicotine Pouches',
      description: 'The nicotine pouch product you are looking for was not found.'
    }
  }

  const title = `Buy Nicotine pouches ${product.flavor} ${product.strength} Online - Zyn, on your best flavor need`
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

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // 尝试按id查找产品
  let product = products.find(p => p.id === parseInt(id))
  
  // 如果按id找不到，尝试按slug查找
  if (!product) {
    product = products.find(p => p.slug === id)
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link> 
              {' '}/{' '}
              <Link href="/products" className="hover:text-gray-900">Products</Link>
              {' '}/{' '}
              <span className="text-gray-900">{product.name}</span>
            </div>
          </nav>

          {/* Product Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <img
                  src="https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Zyn"
                  alt={product.name}
                  className="max-w-full h-auto rounded-lg mx-auto"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Zyn Nicotine pouches {product.flavor} {product.strength}
              </h1>
              
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {product.strength}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.flavor}
                </span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart - ${product.price}
                </button>
                
                <Link 
                  href="/products"
                  className="block w-full text-center bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  ← Back to Products
                </Link>
              </div>

              {/* Product Details */}
              <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 text-sm">
                  This product is intended for adults 21+ only. Contains nicotine which is addictive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}