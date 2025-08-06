'use client'
import { TeamMember } from '@/types/core'
import { MemberCard } from './MemberCard'

export const MembersList = ({ members }: { members: TeamMember[] }) => {
  return (
    <div>
      <h3>Miembros del equipo</h3>
      <ul>
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </ul>
    </div>
  )
}
