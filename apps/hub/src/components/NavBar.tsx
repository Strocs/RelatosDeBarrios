import Link from 'next/link'
import { hubConfig } from '@relatos/content/hub'

export const NavBar = () => {
  const navSections = Object.entries(hubConfig.sections)
  return (
    <nav className='bg-hub-background/0 fixed right-1/2 top-3 z-50 flex translate-x-1/2 gap-6 rounded-xl px-6 py-3 backdrop-blur-sm'>
      {navSections.map(([name, { title, slug, description }]) => (
        <Link
          key={name}
          href={slug}
          className='hover:text-hub-primary text-hub-background lowercase transition-colors'
          aria-label={description}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}
