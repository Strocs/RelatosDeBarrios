# @relatos/utils

A comprehensive utility library for shared functionality across all Relatos de Barrios projects.

## Installation

```bash
bun add @relatos/utils
```

## Usage

```typescript
import {
  capitalize,
  formatCurrency,
  unique,
  isEmail,
  debounce,
  clamp,
} from '@relatos/utils'

// String utilities
const title = capitalize('hello world') // "Hello world"
const slug = slugify('Relatos de Barrios') // "relatos-de-barrios"

// Format utilities
const price = formatCurrency(1234.56) // "1.234,56 €"
const fileSize = formatBytes(1024) // "1 KB"

// Array utilities
const uniqueItems = unique([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]
const randomItem = sample(['a', 'b', 'c']) // Random item from array

// Validation utilities
const validEmail = isEmail('user@example.com') // true
const strongPassword = isStrongPassword('MyP@ssw0rd123') // true

// DOM utilities (browser only)
const scrollPosition = getScrollPosition()
copyToClipboard('Hello world')

// Math utilities
const rounded = roundTo(3.14159, 2) // 3.14
const randomNum = randomBetween(1, 10)

// Type guards
if (isString(value)) {
  // TypeScript now knows value is a string
  console.log(value.toUpperCase())
}
```

## Modules

### String Utilities (`string.ts`)

- `capitalize(str)` - Capitalizes first letter
- `capitalizeWords(str)` - Capitalizes each word
- `kebabCase(str)` - Converts to kebab-case
- `camelCase(str)` - Converts to camelCase
- `snakeCase(str)` - Converts to snake_case
- `truncate(str, length)` - Truncates with ellipsis
- `slugify(str)` - Creates URL-friendly slug
- `getInitials(name)` - Extracts initials
- `randomString(length)` - Generates random string

### Date Utilities (`date.ts`)

- `formatDate(date)` - Formats date for Spanish locale
- `formatDateTime(date)` - Formats date with time
- `getRelativeTime(date)` - Gets relative time (e.g., "2 hours ago")
- `isToday(date)` - Checks if date is today
- `isYesterday(date)` - Checks if date is yesterday
- `addDays(date, days)` - Adds days to date
- `diffInDays(date1, date2)` - Calculates difference in days

### Array Utilities (`array.ts`)

- `unique(array)` - Removes duplicates
- `uniqueBy(array, keyFn)` - Removes duplicates by key
- `groupBy(array, keyFn)` - Groups elements by key
- `chunk(array, size)` - Splits into chunks
- `shuffle(array)` - Randomly shuffles array
- `sample(array)` - Gets random element
- `sortBy(array, keyFn)` - Sorts by key function
- `intersection(arr1, arr2)` - Finds common elements
- `difference(arr1, arr2)` - Finds different elements

### Object Utilities (`object.ts`)

- `deepClone(obj)` - Deep clones object
- `deepMerge(...objects)` - Merges objects deeply
- `get(obj, path)` - Gets nested property (dot notation)
- `set(obj, path, value)` - Sets nested property
- `has(obj, path)` - Checks if nested property exists
- `omit(obj, keys)` - Creates object without specified keys
- `pick(obj, keys)` - Creates object with only specified keys
- `isEmpty(obj)` - Checks if object is empty

### Validation Utilities (`validation.ts`)

- `isEmail(value)` - Validates email format
- `isUrl(value)` - Validates URL format
- `isPhone(value)` - Validates phone number
- `isAlpha(value)` - Checks if alphabetic only
- `isNumeric(value)` - Checks if numeric
- `isStrongPassword(password, options)` - Validates password strength
- `isDNI(value)` - Validates Spanish DNI
- `isNIE(value)` - Validates Spanish NIE
- `minLength(value, min)` - Checks minimum length
- `maxLength(value, max)` - Checks maximum length

### Format Utilities (`format.ts`)

- `formatCurrency(amount, currency, locale)` - Formats as currency
- `formatNumber(number, locale)` - Formats with thousand separators
- `formatPercentage(number, decimals)` - Formats as percentage
- `formatBytes(bytes)` - Formats file size
- `formatPhone(phone, format)` - Formats phone number
- `formatName(name)` - Formats name to proper case
- `maskSensitive(value, start, end)` - Masks sensitive data
- `formatDuration(milliseconds)` - Formats duration
- `formatAddress(address)` - Formats address object

### DOM Utilities (`dom.ts`)

Browser-only utilities for DOM manipulation:

- `isBrowser()` - Checks if in browser environment
- `getElementById(id)` - Safe element selection
- `addClass/removeClass/toggleClass` - Class manipulation
- `getScrollPosition()` - Gets scroll position
- `scrollToElement(element)` - Scrolls to element
- `getViewportSize()` - Gets viewport dimensions
- `isElementInViewport(element)` - Checks visibility
- `copyToClipboard(text)` - Copies to clipboard
- `debounce(func, wait)` - Debounces function calls
- `throttle(func, limit)` - Throttles function calls

### Math Utilities (`math.ts`)

- `clamp(value, min, max)` - Clamps value between bounds
- `randomBetween(min, max)` - Random number in range
- `roundTo(number, decimals)` - Rounds to decimal places
- `distance(x1, y1, x2, y2)` - Calculates distance
- `percentage(value, total)` - Calculates percentage
- `lerp(start, end, factor)` - Linear interpolation
- `average(numbers)` - Calculates average
- `median(numbers)` - Calculates median
- `standardDeviation(numbers)` - Calculates std deviation
- `isPrime(num)` - Checks if number is prime
- `factorial(n)` - Calculates factorial
- `fibonacci(n)` - Calculates Fibonacci number

### Type Utilities (`types.ts`)

Type guards and utility types:

- `isString(value)` - Type guard for string
- `isNumber(value)` - Type guard for number
- `isArray(value)` - Type guard for array
- `isObject(value)` - Type guard for object
- `isDefined(value)` - Type guard for non-nullish
- `isEmpty(value)` - Checks if value is empty
- `hasProperty(obj, prop)` - Checks object property
- `assert(condition, message)` - Assertion function

Utility types:

- `PartialExcept<T, K>` - Partial except specified keys
- `RequiredExcept<T, K>` - Required except specified keys
- `DeepPartial<T>` - Deep partial type
- `DeepRequired<T>` - Deep required type
- `ValueOf<T>` - Get object values type

## Development

```bash
# Install dependencies
bun install

# Build the package
bun run build

# Watch mode for development
bun run dev

# Run linting
bun run lint

# Type checking
bun run check-types
```

## Features

- 🚀 **Tree-shakeable** - Import only what you need
- 📦 **TypeScript** - Full TypeScript support with type guards
- 🌐 **Spanish-first** - Locale defaults optimized for Spanish/European formats
- 🧪 **Well-tested** - Comprehensive utility functions
- 📱 **Browser-safe** - Safe DOM utilities with environment checks
- ⚡ **Performance** - Optimized utility functions

## License

MIT
