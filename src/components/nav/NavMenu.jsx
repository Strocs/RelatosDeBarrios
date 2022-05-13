import { useTransition, animated } from 'react-spring'

import { NavMenuList } from "./NavMenuList"

import '../../styles/nav/NavMenu.css'

export const NavMenu = ({list, onClick, menuState}) => {
    
  const transition = useTransition(menuState, {
    from:  {opacity: 0,
            marginTop: 0},
    enter: {opacity: 1,
            marginTop: 90},
    delay: 20,
  })
   
  return ( 
    <>
      {transition((style, item) => 
        item &&     
        <animated.div className="nav__menu" style={style}>
          <ul onClick={() => {onClick()}} className="nav__menu-list">
            {list.map(e => <NavMenuList section={e} key={e} />)}
          </ul>
        </animated.div>
      )}
  
    </>

  )
}