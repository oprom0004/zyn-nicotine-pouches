import { Metadata } from 'next'
import Link from 'next/link'
import { RotateCcw, AlertTriangle, CheckCircle, Clock, Shield, DollarSign, Package, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Returns Policy - Zyn Nicotine Pouches',
  description: 'Learn about our return policy for Zyn nicotine pouches. 30-day return window with specific conditions for health and safety.',
  keywords: ['return policy', 'refund policy', 'product returns', 'zyn returns', 'nicotine pouches return'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: 'Contact Us',
      description: 'Email or call customer service within 30 days',
      icon: Mail
    },
    {
      step: 2,
      title: 'Get Authorization',
      description: 'Receive return authorization number (RMA)',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Package Items',
      description: 'Pack unopened items in original packaging',
      icon: Package
    },
    {
      step: 4,
      title: 'Ship & Track',
      description: 'Send package with tracking number',
      icon: RotateCcw
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-green-200 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-medium">Returns Policy</span>
            </nav>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <RotateCcw className="text-green-600" size={32} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Returns & Refunds
            </h1>
            <p className="text-xl text-green-100 mb-6">
              We stand behind our products with a customer-friendly return policy designed for your peace of mind.
            </p>
            
            {/* Key Policy Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-green-300 mr-2" size={20} />
                <span className="font-bold text-lg">30-Day Return Window</span>
              </div>
              <p className="text-green-100">Full refund for unopened products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Return Policy at a Glance</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Clock className="text-green-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">30 Days</h3>
                  <p className="text-gray-600">Return window from purchase date</p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Shield className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Unopened Only</h3>
                  <p className="text-gray-600">Products must be in original packaging</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <DollarSign className="text-purple-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Full Refund</h3>
                  <p className="text-gray-600">Original purchase price returned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-yellow-600 mr-3" size={24} />
                <h2 className="text-xl font-bold text-yellow-800">Important Health & Safety Notice</h2>
              </div>
              <p className="text-yellow-700 mb-4">
                Due to health and safety regulations for nicotine products, our return policy has specific requirements 
                to ensure product integrity and compliance with FDA guidelines.
              </p>
              <p className="text-yellow-700 font-medium">
                Only unopened, unused products in their original sealed packaging can be returned for health and safety reasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Return Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Return Your Order</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                {returnSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
                        <step.icon className="text-blue-600" size={28} />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {index < returnSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="space-y-8">
                
                {/* Eligible Returns */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={24} />
                    Eligible for Return
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Unopened Products</h3>
                        <p className="text-gray-600">Products in original, sealed packaging with all seals intact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Defective Products</h3>
                        <p className="text-gray-600">Manufacturing defects or damage during shipping</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Wrong Order</h3>
                        <p className="text-gray-600">Incorrect products shipped due to our error</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Duplicate Orders</h3>
                        <p className="text-gray-600">Accidental duplicate purchases</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">
                      <strong>Quality Guarantee:</strong> We inspect all returned items to ensure they meet our quality standards.
                    </p>
                  </div>
                </div>

                {/* Return Authorization */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Authorization (RMA)</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Before Returning</h3>
                      <p className="text-gray-600">
                        All returns require prior authorization. Do not ship items back without an RMA number, 
                        as unauthorized returns may not be processed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Get RMA</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">📧 <strong>Email:</strong> returns@nicotinepoucheszyn.com</p>
                        <p className="text-gray-600">📞 <strong>Phone:</strong> 1-800-ZYN-POUCH</p>
                        <p className="text-gray-600">⏰ <strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Needed</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Order number</li>
                        <li>Items to return</li>
                        <li>Reason for return</li>
                        <li>Preferred resolution (refund/exchange)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Response Time:</strong> RMA requests are typically processed within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Packaging & Shipping */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Packaging & Shipping Returns</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Packaging Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Use original packaging when possible</li>
                        <li>Secure items to prevent damage during transit</li>
                        <li>Include RMA number prominently on package</li>
                        <li>Include copy of original receipt or order confirmation</li>
                        <li>Remove or cover any original shipping labels</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Instructions</h3>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          <strong>Return Address:</strong> Will be provided with your RMA authorization
                        </p>
                        <p className="text-gray-600">
                          <strong>Shipping Method:</strong> Use trackable shipping method
                        </p>
                        <p className="text-gray-600">
                          <strong>Insurance:</strong> Recommended for high-value returns
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Return Shipping Costs:</strong> Customer is responsible for return shipping unless 
                        the return is due to our error or a defective product.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Non-Returnable Items */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="text-red-600 mr-3" size={24} />
                    Non-Returnable Items
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                      <h3 className="font-semibold text-red-800 mb-2">Opened Products</h3>
                      <p className="text-red-700">
                        Any product that has been opened, used, or has broken seals cannot be returned 
                        for health and safety reasons.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Non-Returnable Items</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li>Products returned after 30-day window</li>
                        <li>Items without original packaging</li>
                        <li>Products damaged by customer misuse</li>
                        <li>Custom or personalized orders</li>
                        <li>Gift cards or promotional items</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Damaged Returns</h3>
                      <p className="text-gray-600">
                        Returns that arrive damaged due to inadequate packaging may be subject to 
                        restocking fees or rejection.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-700 text-sm">
                        <strong>Questions?</strong> Contact customer service if you're unsure whether 
                        your item is eligible for return.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Refund Processing */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <DollarSign className="text-green-600 mr-3" size={24} />
                    Refund Processing
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Processing Timeline</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Item Received</span>
                          <span className="text-sm text-gray-600">1-2 business days</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Inspection & Approval</span>
                          <span className="text-sm text-gray-600">2-3 business days</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">Refund Issued</span>
                          <span className="text-sm text-gray-600">1-2 business days</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <span className="font-medium text-green-800">Total Time</span>
                          <span className="text-sm font-semibold text-green-800">5-10 business days</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Method</h3>
                      <p className="text-gray-600 mb-3">
                        Refunds are processed to the original payment method used for the purchase.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Credit cards: 3-5 business days to appear</li>
                        <li>Debit cards: 5-10 business days to appear</li>
                        <li>PayPal: 1-3 business days to appear</li>
                        <li>Bank transfers: 5-7 business days to appear</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Partial Refunds</h3>
                      <p className="text-gray-600">
                        Restocking fees may apply in some cases, such as items returned without original packaging 
                        or products that show signs of use.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Refund Confirmation:</strong> You'll receive email confirmation when your refund is processed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exchanges */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Policy</h3>
                      <p className="text-gray-600">
                        We offer exchanges for defective products or shipping errors. 
                        For other exchanges, we recommend processing a return and placing a new order.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Process</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">1. Contact customer service for exchange authorization</p>
                        <p className="text-gray-600">2. Send original item back with RMA number</p>
                        <p className="text-gray-600">3. Replacement item ships upon receipt</p>
                        <p className="text-gray-600">4. Price differences handled separately</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Limitations</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Subject to product availability</li>
                        <li>Must be equivalent or lower value</li>
                        <li>One exchange per original purchase</li>
                        <li>Same return conditions apply</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-800 text-sm">
                        <strong>Faster Option:</strong> For size or flavor changes, consider returning for 
                        refund and placing a new order for faster processing.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Customer Service */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Need Help with Your Return?</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Mail className="mx-auto mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm mb-2">returns@nicotinepoucheszyn.com</p>
                  <p className="text-xs opacity-80">Response within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <Package className="mx-auto mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm mb-2">1-800-ZYN-POUCH</p>
                  <p className="text-xs opacity-80">Mon-Fri 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="mx-auto mb-3" size={32} />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm mb-2">Available on website</p>
                  <p className="text-xs opacity-80">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="mb-4">Our customer service team is here to help make your return process as smooth as possible.</p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Customer Service
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Information</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/shipping" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Shipping Policy
                </Link>
                <Link href="/terms" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Support
                </Link>
                <Link href="/buy" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}