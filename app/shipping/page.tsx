import { Metadata } from 'next'
import Link from 'next/link'
import { Truck, Clock, MapPin, Package, Shield, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping Information - Zyn Nicotine Pouches',
  description: 'Learn about our shipping policies, delivery times, and costs for Zyn nicotine pouches. Free shipping available on orders over $25.',
  keywords: ['shipping policy', 'delivery times', 'shipping costs', 'free shipping', 'zyn shipping', 'nicotine pouches delivery'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ShippingPage() {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '3-5 Business Days',
      cost: '$4.99',
      description: 'Reliable delivery via USPS or UPS',
      icon: Package
    },
    {
      name: 'Express Shipping',
      time: '2-3 Business Days',
      cost: '$9.99',
      description: 'Faster delivery via UPS or FedEx',
      icon: Clock
    },
    {
      name: 'Priority Shipping',
      time: '1-2 Business Days',
      cost: '$14.99',
      description: 'Express delivery for urgent orders',
      icon: Truck
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-medium">Shipping Information</span>
            </nav>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Truck className="text-blue-600" size={32} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shipping Information
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Fast, secure delivery of your nicotine pouches with tracking and age verification.
            </p>
            
            {/* Free Shipping Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="text-green-300 mr-2" size={20} />
                <span className="font-bold text-lg">FREE SHIPPING</span>
              </div>
              <p className="text-blue-100">On orders $25 and above</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Shipping Info */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Free Shipping on Orders $25+</h2>
              <p className="text-green-700 text-lg">
                Enjoy free standard shipping on all orders totaling $25 or more. 
                No promo code needed - discount applied automatically at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Shipping Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Shipping Options</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {shippingOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <option.icon className="text-blue-600" size={28} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{option.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{option.cost}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">{option.time}</div>
                    <p className="text-gray-600">{option.description}</p>
                    
                    {index === 0 && (
                      <div className="mt-4 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
                        FREE on orders $25+
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column */}
              <div className="space-y-8">
                
                {/* Processing Time */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="text-orange-600 mr-3" size={24} />
                    Processing Time
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Standard Orders</h3>
                        <p className="text-gray-600">1-2 business days for order processing and fulfillment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Age Verification</h3>
                        <p className="text-gray-600">Additional 1-3 days may be required for age verification process</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Peak Periods</h3>
                        <p className="text-gray-600">Extended processing during holidays and promotional events</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Order Cutoff:</strong> Orders placed before 2 PM EST on business days 
                      ship the same day (subject to age verification).
                    </p>
                  </div>
                </div>

                {/* Shipping Restrictions */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <MapPin className="text-red-600 mr-3" size={24} />
                    Shipping Restrictions
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                      <h3 className="font-semibold text-red-800 mb-2">Geographic Limitations</h3>
                      <p className="text-red-700">
                        We only ship within the United States to addresses where nicotine products are legal. 
                        Some states and municipalities have additional restrictions.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Restricted Shipping Locations</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>P.O. Boxes (adult signature required)</li>
                        <li>Military APO/FPO addresses</li>
                        <li>International addresses</li>
                        <li>Certain states with tobacco product restrictions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Address Verification</h3>
                      <p className="text-gray-600">
                        All shipping addresses are verified against billing information and public records. 
                        Orders may be delayed or canceled if addresses cannot be verified.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tracking Information */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Package className="text-green-600 mr-3" size={24} />
                    Package Tracking
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                      <p className="text-gray-600">
                        Once your order ships, you'll receive a tracking number via email. 
                        You can track your package directly through our shipping partners.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Delivery Notifications</h3>
                      <p className="text-gray-600">
                        Most carriers provide SMS and email notifications for delivery updates. 
                        You can opt-in for these notifications using your tracking number.
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h3 className="font-semibold text-yellow-800 mb-2">Delivery Attempts</h3>
                      <p className="text-yellow-700">
                        Adult signature may be required. If delivery fails, carriers typically make 
                        2-3 attempts before returning packages to sender.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Age Verification Requirements */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="text-purple-600 mr-3" size={24} />
                    Age Verification & Delivery
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                      <h3 className="font-semibold text-purple-800 mb-2">Adult Signature Required</h3>
                      <p className="text-purple-700">
                        All nicotine product deliveries require adult signature confirmation (21+). 
                        Someone of legal age must be present to receive the package.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Acceptable ID Forms</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                        <li>Valid driver's license</li>
                        <li>State-issued ID card</li>
                        <li>U.S. passport</li>
                        <li>Military ID</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Delivery Process</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>1. Carrier attempts delivery during business hours</p>
                        <p>2. Adult recipient presents valid ID</p>
                        <p>3. Carrier verifies age and identity</p>
                        <p>4. Package is delivered with signature confirmation</p>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-red-800 mb-2">Failed Delivery</h3>
                      <p className="text-red-700">
                        If no adult is available or ID cannot be verified, the package will be 
                        returned to the carrier facility for pickup or rescheduled delivery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shipping Carriers */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Carriers</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Primary Carriers</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">USPS</h4>
                          <p className="text-sm text-gray-600">Standard shipping</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">UPS</h4>
                          <p className="text-sm text-gray-600">Express delivery</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">FedEx</h4>
                          <p className="text-sm text-gray-600">Priority shipping</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">OnTrac</h4>
                          <p className="text-sm text-gray-600">Regional delivery</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Carrier Selection</h3>
                      <p className="text-gray-600">
                        We automatically select the best carrier based on your location, 
                        shipping speed preference, and current service availability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* International Shipping */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">International Shipping</h2>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <AlertTriangle className="text-red-600 mx-auto mb-3" size={32} />
                    <h3 className="font-semibold text-red-800 mb-2">Currently Not Available</h3>
                    <p className="text-red-700">
                      We do not currently ship internationally due to varying regulations 
                      on nicotine products in different countries.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Future Expansion</h3>
                    <p className="text-gray-600">
                      We are working to expand our shipping capabilities to select international 
                      markets where regulations permit. Sign up for our newsletter to be notified 
                      when international shipping becomes available.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Shipping Cost Calculator */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shipping Cost Calculator</h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Order Under $25</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">$4.99</p>
                    <p className="text-sm text-gray-600">Standard shipping rate applies</p>
                  </div>
                  
                  <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">Order $25 - $49</h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">FREE</p>
                    <p className="text-sm text-green-700">Free standard shipping</p>
                  </div>
                  
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Order $50+</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">FREE</p>
                    <p className="text-sm text-blue-700">Free upgrade to express available</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Expedited shipping options available for additional fee regardless of order total.
                  </p>
                  <Link 
                    href="/buy" 
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shipping FAQ</h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I change my shipping address after placing an order?</h3>
                  <p className="text-gray-600">
                    Address changes are only possible before the order ships. Contact customer service 
                    immediately if you need to modify your shipping address.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I'm not home for delivery?</h3>
                  <p className="text-gray-600">
                    Since adult signature is required, carriers will attempt delivery 2-3 times. 
                    You can usually schedule redelivery or pick up at a carrier facility.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Do you ship to Alaska and Hawaii?</h3>
                  <p className="text-gray-600">
                    Yes, we ship to all 50 states where nicotine products are legal. 
                    Additional shipping time may apply for Alaska and Hawaii.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I expedite an order that's already shipped?</h3>
                  <p className="text-gray-600">
                    Once an order has shipped, the delivery speed cannot be changed. 
                    Contact the carrier directly to explore delivery options.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What happens if my package is lost or damaged?</h3>
                  <p className="text-gray-600">
                    We'll work with the carrier to resolve any shipping issues. 
                    Contact us immediately if your package arrives damaged or doesn't arrive as expected.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Shipping Questions?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Customer Service</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> shipping@nicotinepoucheszyn.com</p>
                    <p><strong>Phone:</strong> 1-800-ZYN-POUCH</p>
                    <p><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold mb-3">Order Tracking</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Track Online:</strong> Use your tracking number</p>
                    <p><strong>Order Status:</strong> Check your account</p>
                    <p><strong>Updates:</strong> Automatic email notifications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Information</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/returns" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Returns Policy
                </Link>
                <Link href="/terms" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Support
                </Link>
                <Link href="/buy" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Shopping
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}