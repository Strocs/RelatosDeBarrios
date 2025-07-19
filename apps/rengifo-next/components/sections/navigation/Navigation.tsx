'use client'

import { useState, useEffect } from 'react'
import { navigationConfig } from '@relatos/content'
import { NavLogo } from './NavLogo'
import { cn } from '@relatos/utils'
import { HamburgerButton } from './HamburgerButton'
import { NavMenu } from './NavMenu'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setShowMenu(!showMenu)

    // If menu is being opened and we're at top, apply background
    if (!showMenu && window.scrollY === 0) {
      setIsScrolled(true)
    } else if (showMenu && window.scrollY === 0) {
      setIsScrolled(false)
    }
  }

  const { menu } = navigationConfig

  return (
    <nav
      className={cn(
        'container fixed left-0 right-0 top-4 z-50 mx-auto transition-[height] duration-300',
        isScrolled ? 'h-18' : 'h-24'
      )}
    >
      <div
        className={cn(
          'flex h-full items-center justify-between rounded-2xl px-8 transition-all duration-300',
          isScrolled && 'shadow-2xl',
          isScrolled ? 'bg-rengifo-azul/70 backdrop-blur-2xl' : 'bg-transparent'
        )}
      >
        <NavLogo />

        {/* Mobile Hamburger */}
        <div className='lg:hidden'>
          <HamburgerButton isOpen={showMenu} onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <NavMenu menu={menu} onSectionClick={toggleMenu} isMobile={true} />
        )}

        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <NavMenu menu={menu} isMobile={false} />
        </div>
      </div>
    </nav>
  )
}
