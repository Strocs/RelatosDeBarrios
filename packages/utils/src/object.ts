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
    return new Date(obj.getTime()) as T
  }

  if (Array.isArray(obj)) {
    return (obj as unknown as Array<unknown>).map((item) => deepClone(item)) as unknown as T
  }

  const clonedObj: Record<string, unknown> = {}
  for (const key in obj as object) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone((obj as Record<string, unknown>)[key])
    }
  }
  return clonedObj as T
}

/**
 * Merges multiple objects deeply
 */
export function deepMerge<T extends Record<string, unknown>>(
  ...objects: Partial<T>[]
): T {
  const result: Record<string, unknown> = {}
  for (const obj of objects) {
    for (const key in obj as object) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = (obj as Record<string, unknown>)[key]
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          result[key] = deepMerge(result[key] || {}, value)
        } else {
          result[key] = value
        }
      }
    }
  }
  return result as T
}

/**
 * Gets a nested property value using dot notation
 */
export function get<T = unknown>(obj: unknown, path: string, defaultValue?: T): T {
  const keys = path.split('.')
  let result: unknown = obj

  for (const key of keys) {
    if (result === null || result === undefined || typeof result !== 'object' || !(key in result)) {
      return defaultValue as T
    }
    result = (result as Record<string, unknown>)[key]
  }

  return result as T
}

/**
 * Sets a nested property value using dot notation
 */
export function set(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split('.')
  let current: Record<string, unknown> = obj

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  }

  current[keys[keys.length - 1]] = value
}

/**
 * Checks if an object has a nested property using dot notation
 */
export function has(obj: unknown, path: string): boolean {
  const keys = path.split('.')
  let current: unknown = obj

  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object' || !(key in current)) {
      return false
    }
    current = (current as Record<string, unknown>)[key]
  }

  return true
}

/**
 * Omits specified keys from an object
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result: Partial<Omit<T, K>> = {}
  const keysSet = new Set(keys)
  for (const key in obj as object) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keysSet.has(key as K)) {
      (result as Record<string, unknown>)[key] = obj[key as keyof T]
    }
  }
  return result as Omit<T, K>
}

/**
 * Picks specified keys from an object
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<Pick<T, K>> = {}
  for (const key of keys) {
    if (key in obj) {
      (result as Pick<T, K>)[key] = obj[key]
    }
  }
  return result as Pick<T, K>
}

/**
 * Gets all keys of an object (including nested keys with dot notation)
 */
export function getAllKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key
      keys.push(fullKey)
      const value = obj[key]
      if (
        value &&
        typeof value === 'object' &&
        !Array.isArray(value)
      ) {
        keys.push(...getAllKeys(value as Record<string, unknown>, fullKey))
      }
    }
  }
  return keys
}

