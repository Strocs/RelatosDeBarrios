import { teamContent } from '@/app/(hub)/content/team'
import { MembersList } from './MembersList'

const { members, collaborators, participants } = teamContent.cards

export const TeamList = () => {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <MembersList members={members} />

      <div>
        <h3 className="text-hub-primary text-base font-semibold mb-1">Han participado:</h3>
        <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 items-center text-hub-text text-sm">
          {participants.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-hub-primary text-base font-semibold mb-1">Han colaborado:</h3>
        <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 items-center text-hub-text text-sm">
          {collaborators.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
