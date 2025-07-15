import Link from 'next/link'
import data from '@/config/config.json'

export const NavBar = () => {
  return (
    <nav className='bg-hub-background/0 fixed right-1/2 top-3 z-50 flex translate-x-1/2 gap-6 rounded-xl px-6 py-3 backdrop-blur-sm'>
      {data.site.sections.map((section) => (
        <Link
          key={section.name}
          href={section.url}
          className='hover:text-hub-primary text-hub-background lowercase transition-colors'
        >
          {section.name}
        </Link>
      ))}
    </nav>
  )
}
