/**
 * Math utility functions
 */

/**
 * Clamps a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Generates a random number between min and max (inclusive)
 */
export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

/**
 * Generates a random integer between min and max (inclusive)
 */
export function randomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Rounds a number to a specified number of decimal places
 */
export function roundTo(number: number, decimals: number): number {
  const factor = Math.pow(10, decimals)
  return Math.round(number * factor) / factor
}

/**
 * Converts degrees to radians
 */
export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Converts radians to degrees
 */
export function radiansToDegrees(radians: number): number {
  return radians * (180 / Math.PI)
}

/**
 * Calculates the distance between two points
 */
export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

/**
 * Calculates the percentage of a value relative to a total
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0
  return (value / total) * 100
}

/**
 * Calculates the value from a percentage of a total
 */
export function percentageOf(percentage: number, total: number): number {
  return (percentage / 100) * total
}

/**
 * Linear interpolation between two values
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

/**
 * Inverse linear interpolation (finds the factor given start, end, and value)
 */
export function inverseLerp(start: number, end: number, value: number): number {
  if (start === end) return 0
  return (value - start) / (end - start)
}

/**
 * Maps a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

/**
 * Calculates the average of an array of numbers
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length
}

/**
 * Calculates the median of an array of numbers
 */
export function median(numbers: number[]): number {
  if (numbers.length === 0) return 0

  const sorted = numbers.slice().sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2
  } else {
    return sorted[middle]
  }
}

/**
 * Calculates the mode (most frequent value) of an array of numbers
 */
export function mode(numbers: number[]): number | null {
  if (numbers.length === 0) return null

  const frequency: Record<number, number> = {}
  let maxFreq = 0
  let modeValue = numbers[0]

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num]
      modeValue = num
    }
  }

  return modeValue
}

/**
 * Calculates the standard deviation of an array of numbers
 */
export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) return 0

  const avg = average(numbers)
  const squaredDiffs = numbers.map((num) => Math.pow(num - avg, 2))
  const avgSquaredDiff = average(squaredDiffs)

  return Math.sqrt(avgSquaredDiff)
}

/**
 * Finds the greatest common divisor of two numbers
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

/**
 * Finds the least common multiple of two numbers
 */
export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b)
}

/**
 * Checks if a number is prime
 */
export function isPrime(num: number): boolean {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }

  return true
}

/**
 * Calculates the factorial of a number
 */
export function factorial(n: number): number {
  if (n < 0) return 0
  if (n === 0 || n === 1) return 1

  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

/**
 * Calculates the Fibonacci number at position n
 */
export function fibonacci(n: number): number {
  if (n < 0) return 0
  if (n === 0) return 0
  if (n === 1) return 1

  let a = 0
  let b = 1

  for (let i = 2; i <= n; i++) {
    const temp = a + b
    a = b
    b = temp
  }

  return b
}
