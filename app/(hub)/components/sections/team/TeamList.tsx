import { teamContent } from '@/app/(hub)/content/team'
import { MembersList } from './MembersList'

const { members, collaborators, participants } = teamContent.cards

export const TeamList = () => {
  return (
    <section className='flex flex-col gap-4'>
      <MembersList members={members} />

      <div>
        <h3>Han participado:</h3>
        <ul>
          {participants.map((collaborator) => (
            <p key={collaborator}>{collaborator}</p>
          ))}
        </ul>
      </div>

      <div>
        <h3>Han colaborado:</h3>
        <ul>
          {collaborators.map((collaborator) => (
            <p key={collaborator}>{collaborator}</p>
          ))}
        </ul>
      </div>
    </section>
  )
}
