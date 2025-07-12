'use client'

import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helper?: string
  options: SelectOption[]
  placeholder?: string
  variant?: 'default' | 'filled' | 'flushed'
  selectSize?: 'sm' | 'md' | 'lg'
  isInvalid?: boolean
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label,
    error,
    helper,
    options,
    placeholder,
    variant = 'default',
    selectSize = 'md',
    isInvalid = false,
    disabled,
    required,
    ...props 
  }, ref) => {
    const baseClasses = "w-full transition-all duration-200 font-medium focus:outline-none appearance-none bg-no-repeat bg-right"
    
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
      sm: "px-3 py-2 text-sm pr-8",
      md: "px-4 py-3 text-sm pr-10", 
      lg: "px-4 py-4 text-base pr-12"
    }

    const selectClasses = cn(
      baseClasses,
      variants[variant],
      sizes[selectSize],
      disabled && "opacity-50 cursor-not-allowed bg-gray-50",
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzY5NzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')]",
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
        
        {/* Select Container */}
        <div className="relative">
          <select
            className={selectClasses}
            ref={ref}
            disabled={disabled}
            required={required}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
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

Select.displayName = "Select"

export default Select