import { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import '../../styles/proyecto/TeamList.css'

export const TeamList = ({data}) => {
  const {id, name, cargo} = data

  const [showInfo, setShowInfo] = useState(false)

  const transition = useTransition(showInfo, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    delay: 1,
  })

  return (

    <div onClick={() => setShowInfo(!showInfo)} className={`equipo ${id}`}>
      
      {transition((style, item) => 
        item &&         
        <animated.div style={style}>
          <p>{name}</p>
          <span>{cargo}</span>
          <div className='equipo__filter'></div> 
        </animated.div>
      )}

      <img className='equipo__img-container' src={`/images/equipo/${id}.jpg`} alt={`${name}`} />
    </div>

  )
}
