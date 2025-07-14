/**
 * Format utility functions
 */

/**
 * Formats a number as currency
 */
export function formatCurrency(
  amount: number,
  currency = 'EUR',
  locale = 'es-ES'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Formats a number with thousand separators
 */
export function formatNumber(number: number, locale = 'es-ES'): string {
  return new Intl.NumberFormat(locale).format(number)
}

/**
 * Formats a number as a percentage
 */
export function formatPercentage(
  number: number,
  decimals = 2,
  locale = 'es-ES'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number / 100)
}

/**
 * Formats bytes to human readable format
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * Formats a phone number
 */
export function formatPhone(phone: string, format = 'ES'): string {
  const cleaned = phone.replace(/\D/g, '')

  switch (format) {
    case 'ES':
      if (cleaned.length === 9) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
      }
      break
    case 'US':
      if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
      }
      break
    case 'INTERNATIONAL':
      return `+${cleaned}`
  }

  return phone
}

/**
 * Formats a name to proper case
 */
export function formatName(name: string): string {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Formats a credit card number with spaces
 */
export function formatCreditCard(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '')
  return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ')
}

/**
 * Masks sensitive information (like credit card numbers, SSN, etc.)
 */
export function maskSensitive(
  value: string,
  visibleStart = 4,
  visibleEnd = 4,
  maskChar = '*'
): string {
  if (value.length <= visibleStart + visibleEnd) {
    return value
  }

  const start = value.slice(0, visibleStart)
  const end = value.slice(-visibleEnd)
  const middle = maskChar.repeat(value.length - visibleStart - visibleEnd)

  return start + middle + end
}

/**
 * Formats a duration in milliseconds to human readable format
 */
export function formatDuration(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return `${days}d ${hours % 24}h ${minutes % 60}m`
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m`
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`
  } else {
    return `${seconds}s`
  }
}

/**
 * Formats a file size with appropriate units
 */
export function formatFileSize(bytes: number): string {
  return formatBytes(bytes)
}

/**
 * Formats a postal code based on country
 */
export function formatPostalCode(postalCode: string, country = 'ES'): string {
  const cleaned = postalCode.replace(/\D/g, '')

  switch (country) {
    case 'ES':
      return cleaned.padStart(5, '0')
    case 'US':
      if (cleaned.length === 9) {
        return cleaned.replace(/(\d{5})(\d{4})/, '$1-$2')
      }
      return cleaned.slice(0, 5)
    case 'CA':
      const upper = postalCode.toUpperCase().replace(/[^A-Z0-9]/g, '')
      if (upper.length === 6) {
        return upper.replace(/(\w{3})(\w{3})/, '$1 $2')
      }
      return upper
    default:
      return postalCode
  }
}

/**
 * Formats a social security number or similar ID
 */
export function formatSSN(ssn: string): string {
  const cleaned = ssn.replace(/\D/g, '')
  if (cleaned.length === 9) {
    return cleaned.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')
  }
  return ssn
}

/**
 * Formats an address for display
 */
export function formatAddress(address: {
  street?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
}): string {
  const parts = [
    address.street,
    address.city,
    address.state,
    address.postalCode,
    address.country,
  ].filter(Boolean)

  return parts.join(', ')
}
