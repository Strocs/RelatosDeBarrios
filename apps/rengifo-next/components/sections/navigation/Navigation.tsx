'use client'

import { useState, useEffect } from 'react'
import { NavLogo } from './NavLogo'
import { cn } from '@relatos/utils'
import { HamburgerButton } from './HamburgerButton'
import { NavMenu } from './NavMenu'
import { MobileNavMenu } from './MobileNavMenu'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div
        className={cn(
          'container fixed left-0 right-0 top-4 z-50 mx-auto px-2 transition-[height] duration-300 md:px-8',
          isScrolled ? 'h-18' : 'h-24'
        )}
      >
        <div
          className={cn(
            'flex h-full items-center justify-between rounded-2xl px-8 transition-all duration-300',
            isScrolled && 'shadow-2xl',
            isScrolled
              ? 'bg-rengifo-azul/70 backdrop-blur-2xl'
              : 'bg-transparent'
          )}
        >
          <NavLogo />

          {/* Mobile Hamburger */}
          <HamburgerButton />
          {/* Desktop Menu */}
          <NavMenu />
        </div>
      </div>
      <MobileNavMenu />
    </nav>
  )
}
