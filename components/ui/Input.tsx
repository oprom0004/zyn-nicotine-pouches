'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: 'default' | 'filled' | 'flushed'
  inputSize?: 'sm' | 'md' | 'lg'
  isInvalid?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    label,
    error,
    helper,
    leftIcon,
    rightIcon,
    variant = 'default',
    inputSize = 'md',
    isInvalid = false,
    disabled,
    required,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    
    const baseClasses = "w-full transition-all duration-200 font-medium focus:outline-none"
    
    const variants = {
      default: cn(
        "border rounded-lg bg-white",
        isInvalid || error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
        "focus:ring-2 focus:ring-opacity-20"
      ),
      filled: cn(
        "border-0 rounded-lg",
        isInvalid || error ? "bg-red-50 focus:bg-red-100" : "bg-gray-100 focus:bg-gray-200"
      ),
      flushed: cn(
        "border-0 border-b-2 rounded-none bg-transparent",
        isInvalid || error ? "border-red-500 focus:border-red-600" : "border-gray-300 focus:border-blue-500"
      )
    }
    
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-sm", 
      lg: "px-4 py-4 text-base"
    }
    
    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    }

    const inputClasses = cn(
      baseClasses,
      variants[variant],
      sizes[inputSize],
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      disabled && "opacity-50 cursor-not-allowed bg-gray-50",
      className
    )

    return (
      <div className="space-y-1">
        {/* Label */}
        {label && (
          <label className={cn(
            "block text-sm font-medium transition-colors duration-200",
            isInvalid || error ? "text-red-700" : "text-gray-700",
            required && "after:content-['*'] after:text-red-500 after:ml-1"
          )}>
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200",
              iconSizes[inputSize],
              isFocused && "text-blue-500",
              isInvalid || error ? "text-red-500" : ""
            )}>
              {leftIcon}
            </div>
          )}
          
          {/* Input Field */}
          <input
            type={type}
            className={inputClasses}
            ref={ref}
            disabled={disabled}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          
          {/* Right Icon */}
          {rightIcon && (
            <div className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200",
              iconSizes[inputSize],
              isFocused && "text-blue-500",
              isInvalid || error ? "text-red-500" : ""
            )}>
              {rightIcon}
            </div>
          )}
        </div>
        
        {/* Helper Text / Error */}
        {(helper || error) && (
          <p className={cn(
            "text-xs transition-colors duration-200",
            error ? "text-red-600" : "text-gray-500"
          )}>
            {error || helper}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input