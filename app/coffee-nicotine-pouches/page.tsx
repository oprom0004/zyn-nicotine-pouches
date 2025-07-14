import { Metadata } from 'next'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Star, Shield, Truck, Award, TrendingUp, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const flavorInfo = {
  title: "Coffee Nicotine Pouches",
  description: "Experience the rich coffee flavor nicotine pouches with authentic roasted taste and warming satisfaction. Premium tobacco-free coffee pouches.",
  h1: "Premium Coffee Flavor Nicotine Pouches",
  seoDescription: "Shop coffee flavor nicotine pouches with rich roasted taste. Tobacco-free, premium quality coffee pouches in multiple strengths. Free shipping over $25.",
  flavorName: "coffee",
  benefits: [
    "Rich Coffee Flavor",
    "Authentic Roasted Taste", 
    "Warming Experience",
    "Perfect for Coffee Lovers",
    "Premium Quality Ingredients",
    "Various Nicotine Strengths"
  ],
  keywords: [
    "coffee nicotine pouches",
    "coffee flavor pouches", 
    "coffee zyn alternatives",
    "tobacco-free coffee",
    "premium coffee pouches",
    "rich coffee taste"
  ],
  lsiKeywords: [
    "coffee taste nicotine pouches",
    "roasted coffee flavored pouches",
    "coffee lover experience",
    "authentic coffee flavor",
    "coffee nicotine satisfaction",
    "morning coffee alternative"
  ]
}

// Filter products for coffee flavor
const coffeeProducts = products.filter(product => 
  product.category === 'coffee' && ['Coffee'].includes(product.flavor)
)

export const metadata: Metadata = {
  title: `${flavorInfo.title} | Premium Tobacco-Free Collection`,
  description: flavorInfo.seoDescription,
  keywords: flavorInfo.keywords.join(', '),
  openGraph: {
    title: flavorInfo.title,
    description: flavorInfo.seoDescription,
    type: 'website',
    url: 'https://nicotinepoucheszyn.com/coffee-nicotine-pouches',
  },
  alternates: {
    canonical: 'https://nicotinepoucheszyn.com/coffee-nicotine-pouches'
  }
}

export default function CoffeePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-white to-amber-50">
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
                <span className="font-bold">4.6</span>
                <span className="ml-1">(1,542 reviews)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="text-blue-600 mr-2" size={20} />
                <span className="font-bold">{coffeeProducts.length}</span>
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
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200"
            >
              Shop Coffee Pouches
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8" id="products-grid">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Premium Coffee Flavor Collection
            </h2>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-8 text-gray-600">
              Showing {coffeeProducts.length} premium coffee flavor nicotine pouches
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Coffee Section */}
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

      {/* Coffee Education Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Coffee Flavor Nicotine Pouches
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Coffee flavor nicotine pouches deliver the rich, warming taste of freshly roasted coffee with every use. 
              Our premium coffee pouches combine authentic coffee flavors with high-quality nicotine for a 
              satisfying and comforting experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Perfect for coffee enthusiasts and those who enjoy warm, rich flavors, our coffee nicotine pouches provide 
              long-lasting taste and nicotine satisfaction without tobacco. Each pouch is carefully 
              crafted to deliver consistent quality and authentic coffee flavor.
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
                  What makes coffee flavor nicotine pouches special?
                </h3>
                <p className="text-gray-600">
                  Coffee flavor pouches offer a rich, warming taste experience with authentic roasted coffee flavors 
                  and premium nicotine delivery, perfect for coffee lovers seeking a tobacco-free alternative.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the coffee flavor last?
                </h3>
                <p className="text-gray-600">
                  Our coffee pouches deliver consistent flavor for 30-60 minutes, with the rich roasted taste 
                  remaining satisfying throughout the entire experience.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are coffee nicotine pouches tobacco-free?
                </h3>
                <p className="text-gray-600">
                  Yes, all our coffee flavor nicotine pouches are completely tobacco-free, using premium 
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