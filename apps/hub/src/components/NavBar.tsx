import { navigationContent } from '@relatos/content/hub'
import { NavButton } from './NavButton'

export const NavBar = () => {
  return (
    <nav className='bg-hub-background/0 fixed right-1/2 top-3 z-50 flex translate-x-1/2 gap-6 rounded-xl px-6 py-3 backdrop-blur-sm'>
      {navigationContent.map(({ id, label }) => (
        <NavButton
          key={id}
          navTo={'#' + id}
          className='hover:text-hub-primary text-hub-background lowercase transition-colors'
          aria-label={label}
        >
          {label}
        </NavButton>
      ))}
    </nav>
  )
}
