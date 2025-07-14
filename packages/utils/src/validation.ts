/**
 * Validation utility functions
 */

/**
 * Checks if a value is a valid email address
 */
export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

/**
 * Checks if a value is a valid URL
 */
export function isUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

/**
 * Checks if a value is a valid phone number (basic format)
 */
export function isPhone(value: string): boolean {
  const phoneRegex = /^[+]?([1-9][\d]{0,15})$/
  return phoneRegex.test(value.replace(/[\s\-()]/g, ''))
}

/**
 * Checks if a string contains only alphabetic characters
 */
export function isAlpha(value: string): boolean {
  const alphaRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
  return alphaRegex.test(value)
}

/**
 * Checks if a string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
  const alphanumericRegex = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]+$/
  return alphanumericRegex.test(value)
}

/**
 * Checks if a string is a valid hexadecimal color
 */
export function isHexColor(value: string): boolean {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexColorRegex.test(value)
}

/**
 * Checks if a value is numeric
 */
export function isNumeric(value: string | number): boolean {
  return !isNaN(Number(value)) && isFinite(Number(value))
}

/**
 * Checks if a value is an integer (accepts strings and numbers)
 */
export function isIntegerValue(value: string | number): boolean {
  return Number.isInteger(Number(value))
}

/**
 * Checks if a value is a positive number
 */
export function isPositive(value: number): boolean {
  return value > 0
}

/**
 * Checks if a value is a negative number
 */
export function isNegative(value: number): boolean {
  return value < 0
}

/**
 * Checks if a string matches a minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min
}

/**
 * Checks if a string doesn't exceed a maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.length <= max
}

/**
 * Checks if a number is within a range (inclusive)
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

/**
 * Checks if a value is not null or undefined
 */
export function isRequired(value: unknown): boolean {
  return value !== null && value !== undefined && value !== ''
}

/**
 * Checks if a password meets basic security requirements
 */
export function isStrongPassword(
  password: string,
  options: {
    minLength?: number
    requireUppercase?: boolean
    requireLowercase?: boolean
    requireNumbers?: boolean
    requireSpecialChars?: boolean
  } = {}
): boolean {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true,
  } = options

  if (password.length < minLength) return false
  if (requireUppercase && !/[A-Z]/.test(password)) return false
  if (requireLowercase && !/[a-z]/.test(password)) return false
  if (requireNumbers && !/\d/.test(password)) return false
  if (
    requireSpecialChars &&
    !/[!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]/.test(password)
  )
    return false

  return true
}

/**
 * Checks if a date string is in ISO format
 */
export function isISODate(value: string): boolean {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/
  return isoDateRegex.test(value) && !isNaN(Date.parse(value))
}

/**
 * Checks if a value is a valid JSON string
 */
export function isJSON(value: string): boolean {
  try {
    JSON.parse(value)
    return true
  } catch {
    return false
  }
}

/**
 * Validates a Spanish DNI (Documento Nacional de Identidad)
 */
export function isDNI(value: string): boolean {
  const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i
  if (!dniRegex.test(value)) return false

  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const number = parseInt(value.slice(0, 8), 10)
  const letter = value.slice(8).toUpperCase()

  return letters[number % 23] === letter
}

/**
 * Validates a Spanish NIE (Número de Identidad de Extranjero)
 */
export function isNIE(value: string): boolean {
  const nieRegex = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i
  if (!nieRegex.test(value)) return false

  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'
  const prefixMap: Record<string, string> = { X: '0', Y: '1', Z: '2' }

  const prefix = value.charAt(0).toUpperCase()
  const number = parseInt(prefixMap[prefix] + value.slice(1, 8), 10)
  const letter = value.slice(8).toUpperCase()

  return letters[number % 23] === letter
}
