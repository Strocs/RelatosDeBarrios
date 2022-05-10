import { useState } from 'react'
import '../../styles/proyecto/TeamList.css'

export const TeamList = ({data}) => {
  const {id, name, cargo} = data

  const [showInfo, setShowInfo] = useState(false)

  return (

    <div className={`equipo ${id}`}>

      <p>{name}</p>
      <span>{cargo}</span>
      <div className='equipo__filter'></div>

      <img className='equipo__img-container' src={`../../../public/images/equipo/${id}.jpg`} alt={`${name}`} />
    </div>

  )
}
