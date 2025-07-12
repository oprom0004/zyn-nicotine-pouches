'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'strength' | 'flavor'
  size?: 'sm' | 'md' | 'lg'
  pill?: boolean
  icon?: React.ReactNode
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', pill = false, icon, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200"
    
    const variants = {
      default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
      success: "bg-green-100 text-green-800 hover:bg-green-200",
      warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      danger: "bg-red-100 text-red-800 hover:bg-red-200",
      info: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
      strength: "bg-blue-500 text-white hover:bg-blue-600 shadow-sm",
      flavor: "bg-purple-100 text-purple-800 hover:bg-purple-200"
    }
    
    const sizes = {
      sm: "px-2 py-0.5 text-xs gap-1",
      md: "px-2.5 py-1 text-xs gap-1.5",
      lg: "px-3 py-1.5 text-sm gap-2"
    }
    
    const radius = pill ? "rounded-full" : "rounded-md"

    return (
      <span
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          radius,
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"

// Predefined badge variants for common use cases
export const StrengthBadge = ({ children, ...props }: Omit<BadgeProps, 'variant'>) => (
  <Badge variant="strength" pill {...props}>
    {children}
  </Badge>
)

export const FlavorBadge = ({ children, ...props }: Omit<BadgeProps, 'variant'>) => (
  <Badge variant="flavor" pill {...props}>
    {children}
  </Badge>
)

export const StockBadge = ({ inStock, ...props }: { inStock: boolean } & Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge variant={inStock ? "success" : "warning"} pill {...props}>
    {inStock ? 'In Stock' : 'Low Stock'}
  </Badge>
)

export const DiscountBadge = ({ discount, ...props }: { discount: number } & Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge variant="danger" pill {...props}>
    -{discount}%
  </Badge>
)

export const NewBadge = ({ ...props }: Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge variant="success" pill {...props}>
    NEW
  </Badge>
)

export const FeaturedBadge = ({ ...props }: Omit<BadgeProps, 'variant' | 'children'>) => (
  <Badge variant="strength" pill {...props}>
    Featured
  </Badge>
)

export default Badge