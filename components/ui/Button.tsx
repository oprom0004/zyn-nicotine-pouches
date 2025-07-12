'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-sm hover:shadow-md",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-sm hover:shadow-md", 
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-gray-500",
      destructive: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-sm hover:shadow-md"
    }
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
      md: "px-4 py-2 text-sm rounded-lg gap-2", 
      lg: "px-6 py-3 text-base rounded-lg gap-2",
      xl: "px-8 py-4 text-lg rounded-xl gap-3"
    }

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          loading && "cursor-wait",
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button