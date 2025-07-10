// Product Types
export interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  strength: string
  flavor: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  featured: boolean
  description: string
  ingredients: string[]
  imageUrl: string
  slug: string
}

// Cart Types
export interface CartItem extends Product {
  quantity: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

// Filter Types
export interface FilterState {
  strength: string | null
  category: string | null
  search: string
}

// Category Types
export interface Category {
  name: string
  filter: string
  value: string
  count: number
}

// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  phone?: string
  address?: Address
  preferences?: UserPreferences
  orders?: Order[]
  createdAt: string
  updatedAt: string
}

export interface UserPreferences {
  newsletter: boolean
  smsUpdates: boolean
  favoriteStrengths: string[]
  favoriteCategories: string[]
}

// Address Types
export interface Address {
  id?: string
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault?: boolean
}

// Order Types
export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: OrderStatus
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

export interface OrderStatus {
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  message: string
  timestamp: string
}

// Payment Types
export interface PaymentMethod {
  type: 'card' | 'paypal' | 'apple_pay' | 'google_pay'
  card?: {
    last4: string
    brand: string
    expiryMonth: number
    expiryYear: number
  }
  email?: string // for PayPal
}

export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: 'requires_payment_method' | 'requires_confirmation' | 'succeeded' | 'cancelled'
  clientSecret: string
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterForm {
  email: string
}

export interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  dateOfBirth: string
  agreeToTerms: boolean
  newsletterOptIn: boolean
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Search Types
export interface SearchResult {
  products: Product[]
  suggestions: string[]
  filters: {
    categories: { name: string; count: number }[]
    strengths: { name: string; count: number }[]
    priceRanges: { min: number; max: number; count: number }[]
  }
}

// Notification Types
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Analytics Types
export interface AnalyticsEvent {
  event: string
  properties: Record<string, any>
  timestamp: string
}

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface InputProps extends BaseComponentProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  label?: string
  required?: boolean
  disabled?: boolean
}

// Context Types
export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartSubtotal: () => number
  getCartTax: () => number
  getCartItemCount: () => number
}

export interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export interface UserContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: RegisterForm) => Promise<boolean>
  updateProfile: (userData: Partial<User>) => Promise<boolean>
  isLoading: boolean
  isAuthenticated: boolean
}

// Store Types (for future state management)
export interface AppState {
  user: UserState
  cart: CartState
  products: ProductState
  ui: UIState
}

export interface UserState {
  currentUser: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
  isLoading: boolean
}

export interface ProductState {
  products: Product[]
  filteredProducts: Product[]
  filters: FilterState
  isLoading: boolean
  error: string | null
}

export interface UIState {
  notifications: Notification[]
  modals: {
    search: boolean
    cart: boolean
    ageVerification: boolean
  }
  theme: 'light' | 'dark'
  sidebarOpen: boolean
}