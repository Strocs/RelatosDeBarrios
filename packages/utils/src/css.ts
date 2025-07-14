/**
 * CSS and styling utility functions
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines clsx and tailwind-merge for optimal class name handling
 * 
 * This utility function:
 * - Uses clsx for conditional class names
 * - Uses tailwind-merge to merge conflicting Tailwind classes intelligently
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500', 'text-white')
 * // "px-4 py-2 bg-blue-500 text-white"
 * 
 * // Conditional classes
 * cn('px-4 py-2', isActive && 'bg-blue-500', !isActive && 'bg-gray-500')
 * 
 * // Merges conflicting Tailwind classes (last one wins)
 * cn('px-4 px-6', 'py-2 py-4') 
 * // "px-6 py-4"
 * 
 * // Works with objects and arrays
 * cn(['px-4', 'py-2'], { 'bg-blue-500': isActive }, undefined, null)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Creates a variant-based class name utility
 * 
 * @example
 * ```tsx
 * const buttonVariants = createVariants({
 *   base: 'px-4 py-2 rounded font-medium',
 *   variants: {
 *     variant: {
 *       default: 'bg-blue-500 text-white hover:bg-blue-600',
 *       destructive: 'bg-red-500 text-white hover:bg-red-600',
 *       outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
 *     },
 *     size: {
 *       sm: 'px-3 py-1.5 text-sm',
 *       md: 'px-4 py-2',
 *       lg: 'px-6 py-3 text-lg',
 *     },
 *   },
 *   defaultVariants: {
 *     variant: 'default',
 *     size: 'md',
 *   },
 * })
 * 
 * // Usage
 * buttonVariants() // base + default variants
 * buttonVariants({ variant: 'destructive', size: 'lg' })
 * buttonVariants({ variant: 'outline' }, 'custom-class')
 * ```
 */
export function createVariants<T extends Record<string, Record<string, string>>>(
  config: {
    base?: string
    variants?: T
    defaultVariants?: {
      [K in keyof T]?: keyof T[K]
    }
  }
) {
  return function (
    props: {
      [K in keyof T]?: keyof T[K]
    } = {},
    ...classes: ClassValue[]
  ): string {
    const { base = '', variants = {} as T, defaultVariants = {} } = config

    // Merge props with defaults
    const mergedProps = { ...defaultVariants, ...props }

    // Get variant classes
    const variantClasses = Object.entries(mergedProps)
      .map(([key, value]) => {
        const variantGroup = variants[key as keyof T]
        if (variantGroup && value && typeof value === 'string') {
          return variantGroup[value] || ''
        }
        return ''
      })
      .filter(Boolean)

    return cn(base, ...variantClasses, ...classes)
  }
}

/**
 * Utility for focus ring styles that respect reduced motion preferences
 */
export function focusRing(options?: {
  offset?: boolean
  color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow'
}): string {
  const { offset = false, color = 'blue' } = options || {}

  const colorClasses = {
    blue: 'focus-visible:ring-blue-500 focus-visible:border-blue-500',
    gray: 'focus-visible:ring-gray-500 focus-visible:border-gray-500',
    red: 'focus-visible:ring-red-500 focus-visible:border-red-500',
    green: 'focus-visible:ring-green-500 focus-visible:border-green-500',
    yellow: 'focus-visible:ring-yellow-500 focus-visible:border-yellow-500',
  }

  return cn(
    'focus:outline-none focus-visible:ring-2',
    offset && 'focus-visible:ring-offset-2',
    colorClasses[color]
  )
}

/**
 * Utility for responsive breakpoint classes
 */
export function responsive(
  mobile: string,
  tablet?: string,
  desktop?: string,
  wide?: string
): string {
  return cn(
    mobile,
    tablet && `md:${tablet}`,
    desktop && `lg:${desktop}`,
    wide && `xl:${wide}`
  )
}

/**
 * Utility for dark mode variant classes
 */
export function darkMode(lightClass: string, darkClass: string): string {
  return cn(lightClass, `dark:${darkClass}`)
}

/**
 * Utility for hover and active states
 */
export function interactive(
  base: string,
  hover?: string,
  active?: string,
  disabled?: string
): string {
  return cn(
    base,
    hover && `hover:${hover}`,
    active && `active:${active}`,
    disabled && `disabled:${disabled}`
  )
}

/**
 * Utility for transition classes with common presets
 */
export function transition(
  preset: 'none' | 'colors' | 'opacity' | 'shadow' | 'transform' | 'all' = 'all',
  duration: 'fast' | 'normal' | 'slow' = 'normal'
): string {
  const presets = {
    none: '',
    colors: 'transition-colors',
    opacity: 'transition-opacity',
    shadow: 'transition-shadow',
    transform: 'transition-transform',
    all: 'transition-all',
  }

  const durations = {
    fast: 'duration-150',
    normal: 'duration-200',
    slow: 'duration-300',
  }

  return cn(
    presets[preset],
    presets[preset] && durations[duration],
    presets[preset] && 'ease-in-out'
  )
}
