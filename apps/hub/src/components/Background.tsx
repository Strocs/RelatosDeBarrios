export const Background = () => {
  return (
    <div aria-hidden className='fixed inset-0 -z-10 overflow-hidden'>
      <div className='from-hub-secondary to-hub-background absolute -top-1/3 left-0 right-0 mx-auto aspect-square w-screen rounded-full bg-gradient-to-b to-75% blur-2xl'></div>
      <svg className='opacity-25 mix-blend-difference' viewBox='0 0 600 600'>
        <filter id='noise-filter'>
          <feTurbulence baseFrequency='2'></feTurbulence>
        </filter>
        <rect width='100%' height='100%' filter='url(#noise-filter)'></rect>
      </svg>
    </div>
  )
}
