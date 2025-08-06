import { TeamMember } from '@/types/core'

export const MemberCard = ({ name, description, role }: TeamMember) => {
  return (
    <li>
      <header>
        <h3>{name}</h3>
        <h4>{role}</h4>
      </header>
      <p>{description}</p>
    </li>
  )
}
