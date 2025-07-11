'use client'

import { X, ShoppingCart, Plus, Minus, Truck, Shield, Tag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { calculateShipping, isEligibleForFreeShipping, amountNeededForFreeShipping, formatCurrency } from '@/contexts/CartContext'
import Link from 'next/link'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, getCartSubtotal } = useCart()
  
  const subtotal = getCartSubtotal()
  const shipping = calculateShipping(subtotal)
  const total = subtotal + shipping
  const freeShippingEligible = isEligibleForFreeShipping(subtotal)
  const amountForFreeShipping = amountNeededForFreeShipping(subtotal)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <ShoppingCart size={24} className="mr-2" />
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
            <Link 
              href="/products"
              onClick={onClose}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Free Shipping Progress */}
            {!freeShippingEligible && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-blue-700">
                    <Truck size={16} className="mr-2" />
                    <span className="text-sm font-medium">Free Shipping at $25</span>
                  </div>
                  <span className="text-sm font-bold text-blue-900">{formatCurrency(amountForFreeShipping)} to go!</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{width: `${Math.min((subtotal / 25) * 100, 100)}%`}}
                  ></div>
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500 text-center px-1">{item.name.substring(0, 15)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.strength}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.flavor}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{formatCurrency(item.price)} each</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-1 bg-white rounded-lg border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-l-lg hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-r-lg hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <span>Shipping:</span>
                  {freeShippingEligible && <Shield size={14} className="ml-1 text-green-500" />}
                </div>
                <span className="font-medium">
                  {freeShippingEligible ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    formatCurrency(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-3">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
              </div>
              
              {/* Checkout Button */}
              <Link 
                href="/checkout"
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center mt-4"
              >
                Proceed to Checkout
              </Link>
              
              {/* Continue Shopping */}
              <button 
                onClick={onClose}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}