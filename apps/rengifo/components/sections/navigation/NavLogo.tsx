'use client'

import { Logo } from '@/components/ui/Logo'

export const NavLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className='flex items-center text-white'
      aria-label='Ir al inicio'
    >
      <Logo className='h-10 w-auto cursor-pointer' />
    </button>
  )
}
