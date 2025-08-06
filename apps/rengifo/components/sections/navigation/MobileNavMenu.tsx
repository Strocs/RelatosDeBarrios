'use client'

import { navigationContent } from '@relatos/content/rengifo'
import { useNavigationMenuStore } from '@/store/navigationMenuStore'
import { cn, scrollTo } from '@relatos/utils'

export const MobileNavMenu = () => {
  const isMenuOpen = useNavigationMenuStore((state) => state.isMenuOpen)
  const setIsMenuOpen = useNavigationMenuStore((state) => state.setIsMenuOpen)

  const handleSectionClick = (href: string) => {
    scrollTo(href)
    setIsMenuOpen(false)
  }

  return (
    <ul
      className={cn(
        'bg-rengifo-azul fixed inset-0 z-40 flex w-full -translate-x-full flex-col items-center justify-center gap-4 transition-transform duration-300 lg:hidden',
        isMenuOpen && 'translate-x-0'
      )}
    >
      {navigationContent.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => handleSectionClick('#' + item.id)}
            className='hover:text-rengifo-amarillo cursor-pointer text-lg font-semibold uppercase leading-tight text-white transition-colors duration-300'
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
