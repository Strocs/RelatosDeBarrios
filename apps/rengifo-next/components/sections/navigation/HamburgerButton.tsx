import { cn } from '@relatos/utils'

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex h-8 w-8 flex-col items-center justify-center space-y-1.5'
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
    >
      <span
        className={cn(
          'block h-0.5 w-6 bg-white transition-all duration-300',
          isOpen ? 'translate-y-2 rotate-45' : ''
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-6 bg-white transition-all duration-300',
          isOpen ? 'opacity-0' : ''
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-6 bg-white transition-all duration-300',
          isOpen ? '-translate-y-2 -rotate-45' : ''
        )}
      />
    </button>
  )
}
