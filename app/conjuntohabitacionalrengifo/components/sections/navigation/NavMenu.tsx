'use client'

import { navigationContent } from '@/rengifo/content/navigation'
import { scrollTo } from '@/utils/dom'

export const NavMenu = () => {
  return (
    <ul className='hidden gap-5 lg:flex'>
      {navigationContent.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => scrollTo('#' + item.id)}
            className='hover:text-rengifo-amarillo cursor-pointer text-base text-white uppercase transition-colors duration-300'
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
