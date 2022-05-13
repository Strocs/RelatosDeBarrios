import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


import { NavLogo } from './nav/NavLogo'
import { NavMenu } from './nav/NavMenu'
import { HamburgerBtn } from './nav/HamburgerBtn'

import  { MENU_LIST as menu } from '../data/menu.data'

import '../styles/Nav.css'

export const Nav = () => {
  const [navStyle, setNavStyle] = useState({
    height: '',
    background: ''
  })

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [showMenu])

  const handleWindowScroll = () => {
    let top = window.scrollY

    top > 0 
      ? setNavStyle({
          height: 'nav__setHeight',
          background: 'nav__setBackground'
        }) 
      : setNavStyle({
          height: '',
          background: ''
        })
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)

    let top = window.scrollY

    if (!showMenu && top === 0) {
      setNavStyle({
        height: 'nav__setHeight',
        background: 'nav__setBackground'
      }) 
    } else if (showMenu && top === 0) {
      setNavStyle({
        height: '',
        background: ''
      })
    }
  }

  //Media Queries
  const desktop = useMediaQuery({query: '(min-width: 1224px)'})
  const mobile = useMediaQuery({query: '(max-width: 1224px)'})

  return (
    <nav className={`nav ${navStyle.height}`}>
      <div className={`nav__container ${navStyle.background}`}>
        <NavLogo />

        { mobile && 
            <HamburgerBtn 
              onClick={toggleMenu} 
              menuState={showMenu}
            />}

        { showMenu && 
          mobile && 
            <NavMenu 
              list={menu}
              onClick={toggleMenu}
              menuState={showMenu}
            />}
      </div>
    </nav>
  )

}