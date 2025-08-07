'use client'
import { TeamMember } from '@/types/core'
import { MemberCard } from './MemberCard'

export const MembersList = ({ members }: { members: TeamMember[] }) => {
  return (
    <div>
      <h3 className="sr-only">Miembros del equipo</h3>
      <ul className="flex flex-row flex-wrap justify-center gap-6 w-full">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </ul>
    </div>
  )
}
