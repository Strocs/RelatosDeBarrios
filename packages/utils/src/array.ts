/**
 * Array utility functions
 */

/**
 * Removes duplicates from an array
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Removes duplicates from an array based on a key function
 */
export function uniqueBy<T, K>(array: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>()
  return array.filter((item) => {
    const key = keyFn(item)
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

/**
 * Groups array elements by a key function
 */
export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce(
    (groups, item) => {
      const key = keyFn(item)
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(item)
      return groups
    },
    {} as Record<K, T[]>
  )
}

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) return []
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

/**
 * Flattens a nested array
 */
export function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

/**
 * Shuffles an array randomly
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = array.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Gets a random element from an array
 */
export function sample<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Gets multiple random elements from an array
 */
export function sampleSize<T>(array: T[], size: number): T[] {
  const shuffled = shuffle(array)
  return shuffled.slice(0, Math.min(size, array.length))
}

/**
 * Sorts an array by a key function
 */
export function sortBy<T>(array: T[], keyFn: (item: T) => any): T[] {
  return array.slice().sort((a, b) => {
    const aKey = keyFn(a)
    const bKey = keyFn(b)
    if (aKey < bKey) return -1
    if (aKey > bKey) return 1
    return 0
  })
}

/**
 * Finds the intersection of two arrays
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  const set2 = new Set(array2)
  return array1.filter((item) => set2.has(item))
}

/**
 * Finds the difference between two arrays (items in first but not in second)
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  const set2 = new Set(array2)
  return array1.filter((item) => !set2.has(item))
}

/**
 * Finds the union of two arrays (all unique items from both)
 */
export function union<T>(array1: T[], array2: T[]): T[] {
  return unique(array1.concat(array2))
}

/**
 * Checks if array is empty
 */
export function isArrayEmpty<T>(array: T[]): boolean {
  return array.length === 0
}

/**
 * Gets the last element of an array
 */
export function last<T>(array: T[]): T | undefined {
  return array[array.length - 1]
}

/**
 * Gets the first element of an array
 */
export function first<T>(array: T[]): T | undefined {
  return array[0]
}
