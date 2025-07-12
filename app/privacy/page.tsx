import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, Lock, UserCheck, Bell, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Zyn Nicotine Pouches',
  description: 'Learn how Zyn Nicotine Pouches protects your privacy and handles your personal information. Read our comprehensive privacy policy.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'zyn privacy', 'nicotine pouches privacy'],
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const lastUpdated = "July 13, 2025"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-medium">Privacy Policy</span>
            </nav>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Quick Overview */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="text-blue-600 mr-3" size={24} />
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Lock className="text-blue-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">Secure Data</h3>
                  <p className="text-sm text-gray-600">All personal information is encrypted and securely stored</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <UserCheck className="text-green-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">Your Control</h3>
                  <p className="text-sm text-gray-600">You control what data we collect and how it's used</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="text-purple-600 mx-auto mb-2" size={20} />
                  <h3 className="font-semibold text-gray-900 mb-1">GDPR Compliant</h3>
                  <p className="text-sm text-gray-600">We follow international privacy standards</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-3">When you create an account or make a purchase, we may collect:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Age verification information (must be 21+)</li>
                      <li>Payment information (processed securely by our payment providers)</li>
                      <li>Order history and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Website usage data (pages visited, time spent, clicks)</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Location information (if you enable location services)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Order Processing</h3>
                      <p className="text-gray-600">To process orders, arrange shipping, and provide customer support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Age Verification</h3>
                      <p className="text-gray-600">To ensure compliance with age restrictions for nicotine products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Communication</h3>
                      <p className="text-gray-600">To send order updates, promotional offers, and important notices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Website Improvement</h3>
                      <p className="text-gray-600">To analyze usage patterns and improve our website and services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Legal Compliance</h3>
                      <p className="text-gray-600">To comply with applicable laws and regulations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Not Sell Your Data</h3>
                    <p className="text-gray-600">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Sharing</h3>
                    <p className="text-gray-600 mb-3">We may share your information only in these circumstances:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>With shipping partners to deliver your orders</li>
                      <li>With payment processors to handle transactions</li>
                      <li>With age verification services as required by law</li>
                      <li>With legal authorities when required by law</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">We implement industry-standard security measures to protect your information:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Encryption</h3>
                      <p className="text-sm text-gray-600">All data is encrypted in transit and at rest using SSL/TLS protocols</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Access Controls</h3>
                      <p className="text-sm text-gray-600">Limited access to personal data on a need-to-know basis</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Regular Audits</h3>
                      <p className="text-sm text-gray-600">Routine security assessments and vulnerability testing</p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Secure Storage</h3>
                      <p className="text-sm text-gray-600">Data stored in secure, monitored data centers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Access and Update</h3>
                    <p className="text-gray-600">You can access and update your account information at any time</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-green-600 bg-green-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
                    <p className="text-gray-600">Request a copy of your personal data in a portable format</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-yellow-600 bg-yellow-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Marketing Opt-out</h3>
                    <p className="text-gray-600">Unsubscribe from marketing emails at any time</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-red-600 bg-red-50">
                    <h3 className="font-semibold text-gray-900 mb-2">Account Deletion</h3>
                    <p className="text-gray-600">Request deletion of your account and personal data</p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">We use cookies and similar technologies to enhance your experience:</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                      <p className="text-sm text-gray-600">Required for website functionality and security</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                      <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                      <p className="text-sm text-gray-600">Used to personalize ads and measure campaign effectiveness</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    You can control cookies through your browser settings, but some website features may not work properly if disabled.
                  </p>
                </div>
              </div>

              {/* Age Verification */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Age Verification and Compliance</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-3">
                    <Bell className="text-yellow-600 mr-2" size={20} />
                    <h3 className="font-semibold text-yellow-800">Important Notice</h3>
                  </div>
                  <p className="text-yellow-700">
                    Our products are intended for adults 21 years of age and older. We are required by law to verify your age before processing any orders.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">Age verification process:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Valid government-issued photo ID verification</li>
                    <li>Address verification against public records</li>
                    <li>Third-party age verification services</li>
                    <li>Ongoing monitoring for compliance</li>
                  </ul>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Policy Updates</h2>
                
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. When we make changes:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 mb-4">
                  <li>We'll post the updated policy on this page</li>
                  <li>We'll update the "Last updated" date</li>
                  <li>For significant changes, we'll notify you by email</li>
                  <li>Continued use of our services constitutes acceptance of changes</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Questions or Concerns?</h3>
                    <p className="text-gray-600 mb-4">
                      If you have questions about this privacy policy or how we handle your data, please contact us:
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <strong>Email:</strong> privacy@nicotinepoucheszyn.com
                      </p>
                      <p className="text-gray-600">
                        <strong>Phone:</strong> 1-800-ZYN-POUCH
                      </p>
                      <p className="text-gray-600">
                        <strong>Response Time:</strong> Within 30 days
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                    <p className="text-gray-600 mb-4">
                      For EU residents or complex privacy matters:
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <strong>Email:</strong> dpo@nicotinepoucheszyn.com
                      </p>
                      <p className="text-gray-600">
                        <strong>Jurisdiction:</strong> United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Links */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Pages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/terms" className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Terms of Service
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