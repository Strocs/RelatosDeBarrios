import { TeamList } from "./TeamList"
import '../../styles/2_proyecto/Team.css'

export const Team = ({name, teamList}) => {

  return (
    <div className={`team__container`}>
      <h2 className={`team__title`}>
        {name}
      </h2>
      <div className={`team__list`}>
        {teamList.map(ppl => <TeamList data={ppl} key={ppl.id}/>)}
      </div>
    </div>
  )
}
