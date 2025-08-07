import { TeamMember } from '@/types/core'

export const MemberCard = ({ name, description, role }: TeamMember) => {
  return (
    <li
      className="bg-hub-background border border-hub-border rounded-lg shadow p-4 flex flex-col items-center min-w-[180px] max-w-xs transition will-change-transform"
      data-animate="member-card"
    >
      <header className="w-full">
        <h3 className="text-hub-primary text-lg font-bold mb-1 text-center">{name}</h3>
        <h4 className="text-hub-secondary text-sm font-medium mb-2 text-center">{role}</h4>
      </header>
      <p className="text-hub-text text-sm text-center">{description}</p>
    </li>
  )
}
