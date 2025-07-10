'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { CreditCard, Lock, Truck, Shield, MapPin, User, Mail, Phone } from 'lucide-react'

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Age Verification
    birthDate: '',
    ageVerified: false,
    
    // Shipping Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Same as Shipping
    billingSame: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: ''
  })

  const subtotal = getCartTotal()
  const shipping = subtotal > 50 ? 0 : 8.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateAge = () => {
    const birthDate = new Date(formData.birthDate)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 21
    }
    return age >= 21
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step === 1 && !validateAge()) {
      alert('You must be 21 or older to purchase nicotine pouches.')
      return
    }
    
    if (step === 3) {
      // Process payment
      alert('Order placed successfully!')
      clearCart()
      // Redirect to success page
    } else {
      setStep(step + 1)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some nicotine pouches to your cart to continue.</p>
          <button className="luxury-gradient text-white px-8 py-4 rounded-2xl font-bold">
            Shop Nicotine Pouches
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Secure <span className="gradient-text">Nicotine Pouches</span> Checkout
            </h1>
            <p className="text-gray-600">Complete your nicotine pouches order safely and securely</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[
                { num: 1, label: 'Age Verification', icon: User },
                { num: 2, label: 'Shipping Info', icon: Truck },
                { num: 3, label: 'Payment', icon: CreditCard }
              ].map((stepItem) => (
                <div key={stepItem.num} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    step >= stepItem.num 
                      ? 'luxury-gradient text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step > stepItem.num ? '✓' : stepItem.num}
                  </div>
                  <span className={`ml-3 font-medium ${
                    step >= stepItem.num ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {stepItem.label}
                  </span>
                  {stepItem.num < 3 && (
                    <div className={`w-16 h-1 mx-6 ${
                      step > stepItem.num ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="luxury-card p-8 rounded-3xl">
                {/* Step 1: Age Verification */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <Shield className="w-16 h-16 mx-auto mb-4 text-red-600" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Age Verification Required
                      </h2>
                      <p className="text-gray-600">
                        Nicotine pouches are restricted to adults 21 years of age and older
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                      <h3 className="font-bold text-red-900 mb-2">Important Notice</h3>
                      <p className="text-red-800 text-sm">
                        By proceeding, you confirm that you are at least 21 years old and 
                        understand that nicotine is addictive. Nicotine pouches are not 
                        intended for use by minors, pregnant or nursing women.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="ageVerified"
                        required
                        checked={formData.ageVerified}
                        onChange={(e) => handleInputChange('ageVerified', e.target.checked)}
                        className="mt-1"
                      />
                      <label htmlFor="ageVerified" className="text-sm text-gray-700">
                        I confirm that I am at least 21 years old and understand that 
                        nicotine pouches contain nicotine, which is addictive. I agree 
                        to the Terms of Service and Privacy Policy.
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <Truck className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Shipping Information
                      </h2>
                      <p className="text-gray-600">
                        Where should we deliver your nicotine pouches?
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <select
                          required
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          {/* Add more states */}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <Lock className="w-16 h-16 mx-auto mb-4 text-green-600" />
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Secure Payment
                      </h2>
                      <p className="text-gray-600">
                        Your payment information is encrypted and secure
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="glass-effect px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="ml-auto luxury-gradient text-white px-8 py-3 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300"
                  >
                    {step === 3 ? 'Complete Order' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="luxury-card p-8 rounded-3xl sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.quantity}`} className="flex items-center space-x-4">
                      <img 
                        src="https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=Zyn"
                        alt={item.name}
                        className="w-15 h-15 rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold text-gray-900">Total:</span>
                      <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Shield size={16} className="text-green-600" />
                    <span>SSL encrypted checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck size={16} className="text-blue-600" />
                    <span>Free shipping on orders $50+</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock size={16} className="text-purple-600" />
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}