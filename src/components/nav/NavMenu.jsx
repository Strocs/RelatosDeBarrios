import { useSpring, animated } from 'react-spring'
import { useEffect, useState } from "react"

import { NavMenuList } from "./NavMenuList"

import '../../styles/nav/NavMenu.css'

export const NavMenu = ({list}) => {
  
  const [nav, setNav] = useState(false)

  useEffect(() => {
    setNav(!nav);
  }, [])
  
  const styleProp = useSpring({
    opacity: nav ? 1 : 0,
    marginTop: nav ? 90 : 0,
   })

  return (
    <animated.div className="nav__menu" style={styleProp}>
      <ul className="nav__menu-list">
        {list.map(e => <NavMenuList section={e} key={e} />)}
      </ul>
    </animated.div>
  )
}