/**
 * DOM utility functions (for client-side use)
 */

/**
 * Checks if we're in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * Safely gets an element by ID
 */
export function getElementById(id: string): HTMLElement | null {
  if (!isBrowser()) return null
  return document.getElementById(id)
}

/**
 * Safely queries a selector
 */
export function querySelector<T extends Element>(selector: string): T | null {
  if (!isBrowser()) return null
  return document.querySelector<T>(selector)
}

/**
 * Safely queries multiple selectors
 */
export function querySelectorAll<T extends Element>(
  selector: string
): NodeListOf<T> {
  if (!isBrowser()) {
    // Return an empty NodeList using document.createDocumentFragment().childNodes
    return document.createDocumentFragment().childNodes as NodeListOf<T>
  }
  return document.querySelectorAll<T>(selector)
}

/**
 * Adds a class to an element
 */
export function addClass(element: Element | null, className: string): void {
  if (element) {
    element.classList.add(className)
  }
}

/**
 * Removes a class from an element
 */
export function removeClass(element: Element | null, className: string): void {
  if (element) {
    element.classList.remove(className)
  }
}

/**
 * Toggles a class on an element
 */
export function toggleClass(element: Element | null, className: string): void {
  if (element) {
    element.classList.toggle(className)
  }
}

/**
 * Checks if an element has a class
 */
export function hasClass(element: Element | null, className: string): boolean {
  return element ? element.classList.contains(className) : false
}

/**
 * Gets the scroll position
 */
export function getScrollPosition(): { x: number; y: number } {
  if (!isBrowser()) return { x: 0, y: 0 }
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
  }
}

/**
 * Scrolls to a specific position
 */
export function scrollTo(x: number, y: number, smooth = true): void {
  if (!isBrowser()) return
  window.scrollTo({
    left: x,
    top: y,
    behavior: smooth ? 'smooth' : 'auto',
  })
}

/**
 * Scrolls to an element
 */
export function scrollToElement(element: Element | null, smooth = true): void {
  if (!element || !isBrowser()) return
  element.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    block: 'start',
  })
}

/**
 * Gets the viewport size
 */
export function getViewportSize(): { width: number; height: number } {
  if (!isBrowser()) return { width: 0, height: 0 }
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  }
}

/**
 * Gets element dimensions
 */
export function getElementSize(element: Element | null): {
  width: number
  height: number
} {
  if (!element) return { width: 0, height: 0 }
  const rect = element.getBoundingClientRect()
  return {
    width: rect.width,
    height: rect.height,
  }
}

/**
 * Gets element position relative to viewport
 */
export function getElementPosition(element: Element | null): {
  x: number
  y: number
} {
  if (!element) return { x: 0, y: 0 }
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left,
    y: rect.top,
  }
}

/**
 * Checks if an element is in the viewport
 */
export function isElementInViewport(element: Element | null): boolean {
  if (!element || !isBrowser()) return false

  const rect = element.getBoundingClientRect()
  const viewport = getViewportSize()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= viewport.height &&
    rect.right <= viewport.width
  )
}

/**
 * Copies text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isBrowser()) return false

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const result = document.execCommand('copy')
      textArea.remove()
      return result
    }
  } catch {
    return false
  }
}

/**
 * Debounces a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttles a function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Creates a simple event emitter
 */
export function createEventEmitter<T extends Record<string, unknown[]>>() {
  const events: { [K in keyof T]?: Array<(...args: T[K]) => void> } = {}

  return {
    on<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
      if (!events[event]) events[event] = []
      events[event]!.push(listener)
    },

    off<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
      if (!events[event]) return
      events[event] = events[event]!.filter((l) => l !== listener)
    },

    emit<K extends keyof T>(event: K, ...args: T[K]) {
      if (!events[event]) return
      events[event]!.forEach((listener) => listener(...args))
    },
  }
}
