import { useState } from 'react'
import { useSpring, animated } from 'react-spring'


export const HamburgerBtn = ({ onClick = null }) => {
  const [clicked, setClicked] = useState(false)


  const firstBar = useSpring({
    transform: clicked
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  })

  const secondBar = useSpring({
    transform: clicked
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  })

  const thirdBar = useSpring({
    transform: clicked
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  })


  return (
    <>
      <div onClick={() => {onClick(!clicked), setClicked(!clicked)}}>
        <svg
          cursor='pointer'
          height="32"
          viewBox="0 0 44 44"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect width="40" height="4" style={firstBar} />
          <animated.rect width="40" height="4" style={secondBar} />
          <animated.rect width="40" height="4" style={thirdBar} />
        </svg>
      </div>
      

    </>
  )
}