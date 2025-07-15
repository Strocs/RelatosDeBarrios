import { NavBar } from './NavBar'

interface HeaderProps {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className='container mx-auto w-full'>
      <NavBar />
      {children}
    </header>
  )
}
