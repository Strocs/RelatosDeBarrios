/**
 * Type utility functions and type guards
 */

/**
 * Type guard for checking if a value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Type guard for checking if a value is a number
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * Type guard for checking if a value is a boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Type guard for checking if a value is an object (but not null or array)
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

/**
 * Type guard for checking if a value is an array
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value)
}

/**
 * Type guard for checking if a value is null
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Type guard for checking if a value is undefined
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * Type guard for checking if a value is null or undefined
 */
export function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined
}

/**
 * Type guard for checking if a value is defined (not null or undefined)
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Type guard for checking if a value is a Date object
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime())
}

/**
 * Type guard for checking if a value is a RegExp
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

/**
 * Type guard for checking if a value is a Promise
 */
export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return (
    value instanceof Promise ||
    (isObject(value) &&
      typeof (value as { then?: unknown }).then === 'function' &&
      typeof (value as { catch?: unknown }).catch === 'function')
  )
}

/**
 * Type guard for checking if a value is a primitive type
 */
export function isPrimitive(
  value: unknown
): value is string | number | boolean | null | undefined {
  return (
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Type guard for checking if a value is empty
 */
export function isEmpty(value: unknown): boolean {
  if (isNullish(value)) return true
  if (isString(value)) return value.length === 0
  if (isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

/**
 * Type guard for checking if an object has a specific property
 */
export function hasProperty<T extends string>(
  obj: unknown,
  prop: T
): obj is Record<T, unknown> {
  return isObject(obj) && prop in obj
}

/**
 * Safely gets the type of a value as a string
 */
export function getType(value: unknown): string {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  if (Array.isArray(value)) return 'array'
  if (value instanceof Date) return 'date'
  if (value instanceof RegExp) return 'regexp'
  if (value instanceof Error) return 'error'
  return typeof value
}

/**
 * Type guard for checking if a value is a non-negative number
 */
export function isNonNegativeNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value) && value >= 0
}

/**
 * Type guard for checking if a value is an integer
 */
export function isInteger(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value)
}

/**
 * Creates a type guard for checking enum values
 */
export function isEnumValue<T extends Record<string, string | number>>(
  enumObject: T
) {
  const values = Object.values(enumObject)
  return (value: unknown): value is T[keyof T] => {
    return values.includes(value as T[keyof T])
  }
}

/**
 * Utility types for better type safety
 */

// Make all properties optional except specified ones
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

// Make all properties required except specified ones
export type RequiredExcept<T, K extends keyof T> = Required<T> &
  Partial<Pick<T, K>>

// Extract the awaited type from a Promise
export type Awaited<T> = T extends Promise<infer U> ? U : T

// Create a type with only the specified keys
export type Only<T, K extends keyof T> = Pick<T, K>

// Create a type without the specified keys
export type Without<T, K extends keyof T> = Omit<T, K>

// Make nested properties optional
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
  ? DeepPartial<U>[]
  : T[P] extends object
  ? DeepPartial<T[P]>
  : T[P]
}

// Make nested properties required
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends (infer U)[]
  ? DeepRequired<U>[]
  : T[P] extends object
  ? DeepRequired<T[P]>
  : T[P]
}

// Get the values of an object type
export type ValueOf<T> = T[keyof T]

// Create a union type from an array of strings
export type UnionFromArray<T extends readonly string[]> = T[number]
