'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { CartItem, Product, CartContextType } from '@/types'

// Cart Action Types
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

// Cart Reducer
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...state, { ...action.payload, quantity: 1 }]
      }
    }
    
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload)
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      
      if (quantity <= 0) {
        return state.filter(item => item.id !== id)
      }
      
      return state.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    }
    
    case 'CLEAR_CART':
      return []
    
    case 'LOAD_CART':
      return action.payload
    
    default:
      return state
  }
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Local Storage Key
const CART_STORAGE_KEY = 'zyn-cart'

// Cart Provider Component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [cart])

  // Cart Functions
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartTax = () => {
    const subtotal = getCartSubtotal()
    return subtotal * 0.08 // 8% tax rate
  }

  const getCartTotal = () => {
    return getCartSubtotal() + getCartTax()
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartSubtotal,
    getCartTax,
    getCartItemCount,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

// Custom Hook to use Cart Context
export function useCart() {
  const context = useContext(CartContext)
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  
  return context
}

// Helper function to calculate shipping
export function calculateShipping(subtotal: number): number {
  if (subtotal >= 25) return 0 // Free shipping over $25
  return 5.99 // Standard shipping
}

// Helper function to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

// Helper function to calculate discount
export function calculateDiscount(cart: CartItem[]): number {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  
  // Volume discounts
  if (itemCount >= 10) return 0.15 // 15% discount for 10+ items
  if (itemCount >= 5) return 0.10 // 10% discount for 5+ items
  if (itemCount >= 3) return 0.05 // 5% discount for 3+ items
  
  return 0
}

// Helper function to check if eligible for free shipping
export function isEligibleForFreeShipping(subtotal: number): boolean {
  return subtotal >= 25
}

// Helper function to calculate amount needed for free shipping
export function amountNeededForFreeShipping(subtotal: number): number {
  if (isEligibleForFreeShipping(subtotal)) return 0
  return 25 - subtotal
}