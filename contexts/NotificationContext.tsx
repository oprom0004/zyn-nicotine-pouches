'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { Notification, NotificationContextType } from '@/types'
import NotificationContainer from '@/components/NotificationContainer'

// Create Context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

// Generate unique ID for notifications
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Notification Provider Component
export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = generateId()
    const newNotification: Notification = {
      id,
      duration: 4000, // Default duration
      ...notification,
    }

    setNotifications(prev => [...prev, newNotification])

    // Auto-remove notification after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const clearNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  const contextValue: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
  }

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  )
}

// Custom Hook to use Notification Context
export function useNotification() {
  const context = useContext(NotificationContext)
  
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  
  return context
}

// Convenience hooks for specific notification types
export function useNotificationHelpers() {
  const { addNotification } = useNotification()

  const showSuccess = useCallback((title: string, message?: string) => {
    addNotification({
      type: 'success',
      title,
      message: message || '',
    })
  }, [addNotification])

  const showError = useCallback((title: string, message?: string) => {
    addNotification({
      type: 'error',
      title,
      message: message || '',
      duration: 6000, // Show errors longer
    })
  }, [addNotification])

  const showWarning = useCallback((title: string, message?: string) => {
    addNotification({
      type: 'warning',
      title,
      message: message || '',
    })
  }, [addNotification])

  const showInfo = useCallback((title: string, message?: string) => {
    addNotification({
      type: 'info',
      title,
      message: message || '',
    })
  }, [addNotification])

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}

// Helper functions for common notifications
export const NotificationHelpers = {
  // Cart notifications
  addedToCart: (productName: string) => ({
    type: 'success' as const,
    title: 'Added to cart',
    message: `${productName} has been added to your cart`,
  }),

  removedFromCart: (productName: string) => ({
    type: 'info' as const,
    title: 'Removed from cart',
    message: `${productName} has been removed from your cart`,
  }),

  cartCleared: () => ({
    type: 'info' as const,
    title: 'Cart cleared',
    message: 'All items have been removed from your cart',
  }),

  // Order notifications
  orderPlaced: (orderNumber: string) => ({
    type: 'success' as const,
    title: 'Order placed successfully',
    message: `Your order #${orderNumber} has been placed and you will receive a confirmation email shortly`,
    duration: 6000,
  }),

  orderShipped: (trackingNumber: string) => ({
    type: 'info' as const,
    title: 'Order shipped',
    message: `Your order has been shipped. Tracking number: ${trackingNumber}`,
    duration: 8000,
  }),

  // Account notifications
  loginSuccess: () => ({
    type: 'success' as const,
    title: 'Welcome back',
    message: 'You have been successfully logged in',
  }),

  logoutSuccess: () => ({
    type: 'info' as const,
    title: 'Logged out',
    message: 'You have been successfully logged out',
  }),

  accountCreated: () => ({
    type: 'success' as const,
    title: 'Account created',
    message: 'Your account has been created successfully',
  }),

  profileUpdated: () => ({
    type: 'success' as const,
    title: 'Profile updated',
    message: 'Your profile has been updated successfully',
  }),

  // Newsletter notifications
  newsletterSubscribed: () => ({
    type: 'success' as const,
    title: 'Subscribed to newsletter',
    message: 'You will receive our latest updates and exclusive offers',
  }),

  // Contact form notifications
  messageSent: () => ({
    type: 'success' as const,
    title: 'Message sent',
    message: 'We will get back to you soon',
  }),

  // Error notifications
  networkError: () => ({
    type: 'error' as const,
    title: 'Network error',
    message: 'Please check your internet connection and try again',
    duration: 6000,
  }),

  serverError: () => ({
    type: 'error' as const,
    title: 'Server error',
    message: 'Something went wrong on our end. Please try again later',
    duration: 6000,
  }),

  validationError: (message: string) => ({
    type: 'error' as const,
    title: 'Validation error',
    message,
    duration: 5000,
  }),

  // Age verification
  ageVerificationRequired: () => ({
    type: 'warning' as const,
    title: 'Age verification required',
    message: 'You must be 21 or older to purchase nicotine products',
    duration: 8000,
  }),

  ageVerificationFailed: () => ({
    type: 'error' as const,
    title: 'Age verification failed',
    message: 'You must be 21 or older to access this site',
    duration: 0, // Don't auto-dismiss
  }),

  // Inventory notifications
  lowStock: (productName: string) => ({
    type: 'warning' as const,
    title: 'Low stock',
    message: `Only a few ${productName} left in stock`,
  }),

  outOfStock: (productName: string) => ({
    type: 'error' as const,
    title: 'Out of stock',
    message: `${productName} is currently out of stock`,
  }),

  backInStock: (productName: string) => ({
    type: 'success' as const,
    title: 'Back in stock',
    message: `${productName} is now available`,
  }),
}