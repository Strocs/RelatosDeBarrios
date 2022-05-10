import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


import { NavLogo } from './nav/NavLogo'
import { NavMenu } from './nav/NavMenu'
import { HamburgerBtn } from './nav/HamburgerBtn'

import  { MENU_LIST } from './data/data'

import '../styles/Nav.css'

export const Nav = () => {
  const [navBackground, setNavBackground] = useState('')
  const [navHeight, setNavHeight] = useState('')
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [showNav])

  
  const handleWindowScroll = () => {
    let top = window.scrollY

    if (top > 0) {
      setNavBackground('nav__setBackground'), 
      setNavHeight('nav__setHeight')
    } else  {
      setNavBackground(''), 
      setNavHeight('')
    }
  }

  const handleShowNav = (state) => {
    state ? setShowNav(true) : setShowNav(false)
    let top = window.scrollY
    if (!showNav && top === 0) {
      setNavBackground('nav__setBackground'), 
      setNavHeight('nav__setHeight')
    } else if (showNav && top === 0) {
      setNavBackground(''), 
      setNavHeight('')
    }
  }


  //Media Queries
  const desktop = useMediaQuery({query: '(min-width: 1224px)'})
  const mobile = useMediaQuery({query: '(max-width: 1224px)'})

  return (
    <nav className={`nav ${navHeight}`}>
      <div className={`nav__container ${navBackground}`}>
        <NavLogo />

        {showNav && mobile && <NavMenu list={MENU_LIST} />}
        
        {mobile && <HamburgerBtn onClick={handleShowNav} />}
      </div>
    </nav>
  )

}