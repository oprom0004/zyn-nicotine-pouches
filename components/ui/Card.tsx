'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', hover = false, ...props }, ref) => {
    const baseClasses = "rounded-lg transition-all duration-200"
    
    const variants = {
      default: "bg-white border border-gray-200",
      elevated: "bg-white shadow-lg border border-gray-100", 
      outlined: "bg-transparent border-2 border-gray-300",
      ghost: "bg-gray-50 border-0"
    }
    
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6", 
      lg: "p-8",
      xl: "p-10"
    }
    
    const hoverEffect = hover ? "hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1" : ""

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          hoverEffect,
          className
        )}
        {...props}
      />
    )
  }
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("pb-4 border-b border-gray-100 mb-4", className)}
      {...props}
    />
  )
)

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold text-gray-900 font-optimized", className)}
      {...props}
    />
  )
)

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-gray-600", className)}
      {...props}
    />
  )
)

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("pt-4 border-t border-gray-100 mt-4 flex items-center gap-3", className)}
      {...props}
    />
  )
)

Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardTitle.displayName = "CardTitle"
CardContent.displayName = "CardContent"
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardContent, CardFooter }