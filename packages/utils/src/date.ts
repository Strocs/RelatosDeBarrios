/**
 * Date utility functions
 */

/**
 * Formats a date to a readable string
 */
export function formatDate(
  date: Date | string | number,
  locale = 'es-ES'
): string {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString(locale)
}

/**
 * Formats a date with time
 */
export function formatDateTime(
  date: Date | string | number,
  locale = 'es-ES'
): string {
  const dateObj = new Date(date)
  return dateObj.toLocaleString(locale)
}

/**
 * Gets relative time (e.g., "2 hours ago", "in 3 days")
 */
export function getRelativeTime(
  date: Date | string | number,
  locale = 'es-ES'
): string {
  const dateObj = new Date(date)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2628000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ] as const

  for (const interval of intervals) {
    const count = Math.floor(Math.abs(diffInSeconds) / interval.seconds)
    if (count >= 1) {
      return rtf.format(diffInSeconds < 0 ? count : -count, interval.label)
    }
  }

  return rtf.format(0, 'second')
}

/**
 * Checks if a date is today
 */
export function isToday(date: Date | string | number): boolean {
  const dateObj = new Date(date)
  const today = new Date()
  return dateObj.toDateString() === today.toDateString()
}

/**
 * Checks if a date is yesterday
 */
export function isYesterday(date: Date | string | number): boolean {
  const dateObj = new Date(date)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return dateObj.toDateString() === yesterday.toDateString()
}

/**
 * Checks if a date is within the current week
 */
export function isThisWeek(date: Date | string | number): boolean {
  const dateObj = new Date(date)
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay())
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)

  return dateObj >= startOfWeek && dateObj <= endOfWeek
}

/**
 * Adds days to a date
 */
export function addDays(date: Date | string | number, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * Adds months to a date
 */
export function addMonths(date: Date | string | number, months: number): Date {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return result
}

/**
 * Gets the start of day (00:00:00)
 */
export function startOfDay(date: Date | string | number): Date {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  return result
}

/**
 * Gets the end of day (23:59:59)
 */
export function endOfDay(date: Date | string | number): Date {
  const result = new Date(date)
  result.setHours(23, 59, 59, 999)
  return result
}

/**
 * Calculates the difference between two dates in days
 */
export function diffInDays(
  date1: Date | string | number,
  date2: Date | string | number
): number {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2.getTime() - d1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
