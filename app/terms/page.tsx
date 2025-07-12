import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, AlertTriangle, CheckCircle, Users, Scale, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Zyn Nicotine Pouches',
  description: 'Read our terms of service for purchasing Zyn nicotine pouches. Important legal information about age restrictions and usage.',
  keywords: ['terms of service', 'legal terms', 'age restrictions', 'nicotine pouches terms', 'zyn terms'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const lastUpdated = "January 1, 2024"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-300 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-medium">Terms of Service</span>
            </nav>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <FileText className="text-gray-900" size={32} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Please read these terms carefully before using our services or purchasing our products.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Age Restriction Warning */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-red-600 mr-3" size={24} />
                <h2 className="text-xl font-bold text-red-800">Important Age Restriction</h2>
              </div>
              <p className="text-red-700 font-medium text-lg">
                You must be 21 years of age or older to purchase or use nicotine products. 
                By using this website, you confirm that you meet this age requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Key Points Overview */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="text-green-600 mr-3" size={24} />
                Key Terms at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="text-blue-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">Age 21+</h3>
                  <p className="text-sm text-gray-600">Must be 21 years or older to purchase</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Scale className="text-purple-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">Legal Compliance</h3>
                  <p className="text-sm text-gray-600">Follow all local and federal laws</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="text-orange-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">Return Window</h3>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* Acceptance of Terms */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    By accessing and using this website (nicotinepoucheszyn.com) and purchasing our products, 
                    you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  
                  <p className="text-gray-600">
                    If you do not agree to abide by the above, please do not use this service or purchase our products.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium">
                      By completing a purchase, you acknowledge that you have read, understood, 
                      and agree to these terms of service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Age Verification and Restrictions */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Age Verification and Restrictions</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Minimum Age Requirement</h3>
                    <p className="text-red-700">
                      You must be at least 21 years of age to purchase, possess, or use nicotine products. 
                      This is required by federal and state law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Age Verification Process</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Valid government-issued photo identification required</li>
                      <li>Third-party age verification services may be used</li>
                      <li>Orders may be canceled if age cannot be verified</li>
                      <li>False information may result in account termination and legal action</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Geographic Restrictions</h3>
                    <p className="text-gray-600">
                      Our products may not be available in all jurisdictions. We comply with all applicable 
                      federal, state, and local laws regarding the sale and distribution of nicotine products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Product Information and Disclaimers</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Descriptions</h3>
                    <p className="text-gray-600">
                      We strive to provide accurate product descriptions, images, and specifications. 
                      However, we do not warrant that product descriptions or other content is accurate, 
                      complete, reliable, current, or error-free.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">Health Warnings</h3>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                      <li>Nicotine is an addictive chemical</li>
                      <li>Products not intended for use by minors, pregnant or nursing women</li>
                      <li>Not intended for individuals with heart conditions or high blood pressure</li>
                      <li>Consult your physician before use if you have health concerns</li>
                      <li>Keep out of reach of children and pets</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Intended Use</h3>
                    <p className="text-gray-600">
                      Our products are intended for adult tobacco users as an alternative to cigarettes and other tobacco products. 
                      They are not smoking cessation products and have not been tested as such.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ordering and Payment */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Ordering and Payment</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Acceptance</h3>
                    <p className="text-gray-600 mb-3">
                      All orders are subject to our acceptance. We reserve the right to refuse or cancel any order for any reason, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Product availability issues</li>
                      <li>Inability to verify age or identity</li>
                      <li>Errors in product or pricing information</li>
                      <li>Suspected fraudulent activity</li>
                      <li>Violation of these terms of service</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing and Payment</h3>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        All prices are in U.S. dollars and are subject to change without notice.
                      </p>
                      <p className="text-gray-600">
                        Payment must be made in full before order processing. We accept major credit cards and other approved payment methods.
                      </p>
                      <p className="text-gray-600">
                        You authorize us to charge your payment method for the total amount of your order, including applicable taxes and shipping fees.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Limits</h3>
                    <p className="text-gray-600">
                      We reserve the right to limit the quantity of products purchased per order, per day, or per customer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping and Delivery */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Shipping and Delivery</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Restrictions</h3>
                    <p className="text-gray-600">
                      We only ship to addresses within the United States where the sale of nicotine products is legal. 
                      Some states and localities may have additional restrictions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Confirmation</h3>
                    <p className="text-gray-600">
                      Adult signature may be required upon delivery. We are not responsible for packages left unattended 
                      or stolen after successful delivery confirmation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Times</h3>
                    <p className="text-gray-600">
                      Estimated shipping times are provided for convenience but are not guaranteed. 
                      Delays may occur due to weather, holidays, or other circumstances beyond our control.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800">
                      <strong>Note:</strong> Orders may be delayed for age verification or compliance checks. 
                      We appreciate your patience as we ensure all legal requirements are met.
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns and Refunds */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Returns and Refunds</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Return Policy</h3>
                    <p className="text-gray-600 mb-3">
                      Due to health and safety regulations, we have a limited return policy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Returns accepted within 30 days of purchase</li>
                      <li>Products must be unopened and in original packaging</li>
                      <li>Proof of purchase required</li>
                      <li>Return shipping costs may apply</li>
                      <li>Some products may not be eligible for return due to health regulations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Defective Products</h3>
                    <p className="text-gray-600">
                      If you receive a defective product, please contact us immediately. 
                      We will arrange for replacement or refund at no cost to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Processing</h3>
                    <p className="text-gray-600">
                      Approved refunds will be processed within 5-10 business days to the original payment method.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Accounts */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. User Accounts and Responsibilities</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Security</h3>
                    <p className="text-gray-600 mb-3">
                      You are responsible for maintaining the security of your account and password. You must:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Keep your password secure and confidential</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Update your information when changes occur</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                    <p className="text-gray-600 mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Provide false or misleading information</li>
                      <li>Use the account for any illegal purpose</li>
                      <li>Attempt to circumvent age verification</li>
                      <li>Resell products to minors</li>
                      <li>Violate any applicable laws or regulations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Termination</h3>
                    <p className="text-gray-600">
                      We reserve the right to terminate accounts that violate these terms or engage in suspicious activity. 
                      Terminated users may be banned from creating new accounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Intellectual Property</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    All content on this website, including text, graphics, logos, images, and software, 
                    is the property of Zyn Nicotine Pouches or its licensors and is protected by copyright 
                    and trademark laws.
                  </p>

                  <p className="text-gray-600">
                    You may not use, reproduce, distribute, or create derivative works from any content 
                    without our express written permission.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Trademarks:</strong> Zyn and related logos are trademarks. 
                      Unauthorized use is strictly prohibited.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">Important Legal Notice</h3>
                    <p className="text-red-700">
                      Our liability is limited to the maximum extent permitted by law. 
                      We are not liable for indirect, incidental, or consequential damages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Use</h3>
                    <p className="text-gray-600">
                      You use our products at your own risk. We do not guarantee any specific results 
                      or outcomes from product use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum Liability</h3>
                    <p className="text-gray-600">
                      Our total liability for any claim shall not exceed the amount you paid for the specific 
                      product giving rise to the claim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law and Disputes</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Jurisdiction</h3>
                    <p className="text-gray-600">
                      These terms are governed by the laws of the United States and the state where our 
                      business is incorporated, without regard to conflict of law principles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                    <p className="text-gray-600">
                      Any disputes arising from these terms or your use of our services will be resolved 
                      through binding arbitration rather than in courts of general jurisdiction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Class Action Waiver</h3>
                    <p className="text-gray-600">
                      You agree to resolve disputes individually and waive any right to participate in 
                      class action lawsuits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We reserve the right to modify these terms at any time. Changes will be effective 
                    immediately upon posting to this page.
                  </p>

                  <p className="text-gray-600">
                    Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800">
                      <strong>Stay Informed:</strong> We recommend reviewing these terms periodically. 
                      For significant changes, we may provide additional notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Legal Questions</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@nicotinepoucheszyn.com</p>
                      <p><strong>Phone:</strong> 1-800-ZYN-POUCH</p>
                      <p><strong>Response Time:</strong> Within 5 business days</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">General Support</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> support@nicotinepoucheszyn.com</p>
                      <p><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                      <p><strong>Response Time:</strong> Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Acknowledgment */}
            <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">By Using Our Services</h3>
              <p className="text-green-700">
                You acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                You also confirm that you are at least 21 years of age and legally able to enter into this agreement.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/privacy" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/shipping" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Shipping Info
                </Link>
                <Link href="/returns" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Returns Policy
                </Link>
                <Link href="/contact" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}