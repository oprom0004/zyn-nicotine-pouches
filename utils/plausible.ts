// Plausible Analytics utility functions

declare global {
  interface Window {
    plausible?: (eventName: string, options?: {
      props?: Record<string, any>
      revenue?: { currency: string; amount: number }
      callback?: () => void
    }) => void
  }
}

// Track custom events
export const trackEvent = (eventName: string, props?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props })
  }
}

// Track revenue events
export const trackRevenue = (
  eventName: string, 
  amount: number, 
  currency: string = 'USD',
  props?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, {
      revenue: { currency, amount },
      props
    })
  }
}

// Track file downloads
export const trackDownload = (fileName: string, fileType?: string) => {
  trackEvent('File Download', {
    'file_name': fileName,
    'file_type': fileType || fileName.split('.').pop() || 'unknown'
  })
}

// Track outbound link clicks
export const trackOutboundClick = (url: string, linkText?: string) => {
  trackEvent('Outbound Link', {
    'url': url,
    'link_text': linkText
  })
}

// Track product interactions
export const trackProductView = (productName: string, category: string, price?: number) => {
  trackEvent('Product View', {
    'product_name': productName,
    'category': category,
    'price': price
  })
}

export const trackAddToCart = (productName: string, category: string, price: number, quantity: number = 1) => {
  trackEvent('Add to Cart', {
    'product_name': productName,
    'category': category,
    'price': price,
    'quantity': quantity
  })
}

export const trackPurchase = (
  orderId: string, 
  totalAmount: number, 
  products: Array<{name: string; category: string; price: number; quantity: number}>
) => {
  trackRevenue('Purchase', totalAmount, 'USD', {
    'order_id': orderId,
    'product_count': products.length,
    'products': products.map(p => p.name).join(', ')
  })
}

// Track form interactions
export const trackFormSubmit = (formName: string, formType?: string) => {
  trackEvent('Form Submit', {
    'form_name': formName,
    'form_type': formType
  })
}

// Track search
export const trackSearch = (query: string, resultsCount?: number) => {
  trackEvent('Search', {
    'query': query,
    'results_count': resultsCount
  })
}

// Track age verification
export const trackAgeVerification = (verified: boolean) => {
  trackEvent('Age Verification', {
    'verified': verified
  })
}

// Track filter usage
export const trackFilterUsage = (filterType: string, filterValue: string, pageType?: string) => {
  trackEvent('Filter Used', {
    'filter_type': filterType,
    'filter_value': filterValue,
    'page_type': pageType
  })
}

// Track newsletter signup
export const trackNewsletterSignup = (source: string) => {
  trackEvent('Newsletter Signup', {
    'source': source
  })
}