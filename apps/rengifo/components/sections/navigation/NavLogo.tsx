'use client'

import { Logo } from '@/components/ui/Logo'
import { scrollTo } from '@relatos/utils'

export const NavLogo = () => {
  return (
    <button
      onClick={() => scrollTo('top')}
      className='flex items-center text-white'
      aria-label='Ir al inicio'
    >
      <Logo className='h-10 w-auto cursor-pointer' />
    </button>
  )
}
