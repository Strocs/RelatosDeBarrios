/**
 * Object utility functions
 */

/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as unknown as T
  }

  if (typeof obj === 'object') {
    const clonedObj = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }

  return obj
}

/**
 * Merges multiple objects deeply
 */
export function deepMerge<T extends Record<string, any>>(
  ...objects: Partial<T>[]
): T {
  const result = {} as T

  for (const obj of objects) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          ;(result as any)[key] = deepMerge((result as any)[key] || {}, value)
        } else {
          ;(result as any)[key] = value
        }
      }
    }
  }

  return result
}

/**
 * Gets a nested property value using dot notation
 */
export function get<T = any>(obj: any, path: string, defaultValue?: T): T {
  const keys = path.split('.')
  let result = obj

  for (const key of keys) {
    if (result === null || result === undefined || !(key in result)) {
      return defaultValue as T
    }
    result = result[key]
  }

  return result
}

/**
 * Sets a nested property value using dot notation
 */
export function set(obj: any, path: string, value: any): void {
  const keys = path.split('.')
  let current = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key]
  }

  current[keys[keys.length - 1]] = value
}

/**
 * Checks if an object has a nested property using dot notation
 */
export function has(obj: any, path: string): boolean {
  const keys = path.split('.')
  let current = obj

  for (const key of keys) {
    if (current === null || current === undefined || !(key in current)) {
      return false
    }
    current = current[key]
  }

  return true
}

/**
 * Omits specified keys from an object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = {} as Omit<T, K>
  const keysSet = new Set(keys)

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keysSet.has(key as unknown as K)) {
      ;(result as any)[key] = obj[key]
    }
  }

  return result
}

/**
 * Picks specified keys from an object
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }

  return result
}

/**
 * Gets all keys of an object (including nested keys with dot notation)
 */
export function getAllKeys(obj: any, prefix = ''): string[] {
  const keys: string[] = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key
      keys.push(fullKey)

      if (
        obj[key] &&
        typeof obj[key] === 'object' &&
        !Array.isArray(obj[key])
      ) {
        keys.push(...getAllKeys(obj[key], fullKey))
      }
    }
  }

  return keys
}

/**
 * Checks if an object is empty
 */
export function isObjectEmpty(obj: any): boolean {
  if (obj === null || obj === undefined) return true
  if (Array.isArray(obj)) return obj.length === 0
  if (typeof obj === 'object') return Object.keys(obj).length === 0
  return false
}

/**
 * Inverts the keys and values of an object
 */
export function invert<T extends Record<string, string | number>>(
  obj: T
): Record<string, string> {
  const result: Record<string, string> = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[String(obj[key])] = key
    }
  }
  return result
}

/**
 * Maps over object values while preserving keys
 */
export function mapValues<T, U>(
  obj: Record<string, T>,
  mapper: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = mapper(obj[key], key)
    }
  }
  return result
}
