import Link from 'next/link'
import { site } from '@/config/config.json'

export const NavBar = () => {
  return (
    <nav className='bg-hub bg-hub-background/15 fixed right-1/2 top-3 z-50 flex translate-x-1/2 gap-6 rounded-xl px-6 py-3 backdrop-blur-sm'>
      {site.sections.map((section) => (
        <Link
          key={section.name}
          href={section.url}
          className='hover:text-hub-accent text-hub-primary lowercase transition-colors'
        >
          {section.name}
        </Link>
      ))}
    </nav>
  )
}
