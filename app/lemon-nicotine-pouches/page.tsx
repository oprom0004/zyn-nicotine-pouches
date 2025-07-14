import { Metadata } from 'next'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const flavorInfo = {
  title: "Lemon Nicotine Pouches",
  description: "Experience the bright lemon flavor nicotine pouches with crisp citrusy kick and refreshing satisfaction. Premium tobacco-free lemon pouches.",
  h1: "Premium Lemon Flavor Nicotine Pouches",
  seoDescription: "Shop lemon flavor nicotine pouches with bright citrusy taste. Tobacco-free, premium quality lemon pouches in multiple strengths. Free shipping over $25.",
  flavorName: "lemon",
  benefits: [
    "Bright Lemon Flavor",
    "Crisp Citrusy Kick", 
    "Refreshing Taste Experience",
    "Long-Lasting Brightness",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "lemon nicotine pouches",
    "lemon flavor pouches", 
    "lemon zyn alternatives",
    "tobacco-free lemon",
    "premium lemon pouches",
    "bright lemon taste"
  ],
  lsiKeywords: [
    "lemon taste nicotine pouches",
    "citrus lemon flavored pouches",
    "bright lemon experience",
    "crisp lemon flavor",
    "lemon lovers nicotine",
    "authentic lemon satisfaction"
  ]
}

// Filter products for lemon flavor
const lemonProducts = products.filter(product => 
  product.category === 'citrus' && ['Lemon'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/lemon-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/lemon-nicotine-pouches'
  }
}

export default function LemonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-white to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/buy" className="hover:text-blue-600">Buy Nicotine Pouches</Link>
              <span className="mx-2">/</span>
              <span className="capitalize font-medium">{flavorInfo.title}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {flavorInfo.h1}
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {flavorInfo.description}
            </p>

            {/* Social Proof Bar */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center text-gray-700">
                <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                <span className="font-bold">4.7</span>
                <span className="ml-1">(1,823 reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{lemonProducts.length}</span>
                <span className="ml-1">products available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Truck className="text-green-600 mr-2" size={20} />
                <span className="font-medium">FREE shipping $25+</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="#products-grid"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            >
              Shop Lemon Pouches
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8" id="products-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Premium Lemon Flavor Collection
            </h2>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lemonProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {lemonProducts.length} premium lemon flavor nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lemon Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose {flavorInfo.title}?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flavorInfo.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Promise to You
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
                <p className="text-gray-600">Not satisfied? Return for full refund within 30 days.</p>
              </div>
              <div className="text-center">
                <Truck className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Fast Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over $25. Delivered in 2-3 days.</p>
              </div>
              <div className="text-center">
                <Award className="text-purple-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Tobacco-free, lab-tested, FDA-compliant products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lemon Education Section */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Lemon Flavor Nicotine Pouches
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lemon flavor nicotine pouches deliver a bright, crisp citrusy kick with every use. 
              Our premium lemon pouches combine natural citrus flavors with high-quality nicotine for a 
              refreshing and invigorating experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Perfect for those who enjoy sharp, bright flavors, our lemon nicotine pouches provide 
              long-lasting taste and nicotine satisfaction without tobacco. Each pouch is carefully 
              crafted to deliver consistent quality and authentic lemon flavor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What makes lemon flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Lemon flavor pouches offer a bright, crisp taste experience with natural citrus flavors 
                  and premium nicotine delivery, perfect for those seeking a refreshing tobacco-free alternative.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the lemon flavor last?
                </h3>
                <p className="text-gray-600">
                  Our lemon pouches deliver consistent flavor for 30-60 minutes, with the bright citrusy taste 
                  remaining crisp throughout the entire experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are lemon nicotine pouches tobacco-free?
                </h3>
                <p className="text-gray-600">
                  Yes, all our lemon flavor nicotine pouches are completely tobacco-free, using premium 
                  synthetic nicotine and natural flavoring for a clean, satisfying experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}