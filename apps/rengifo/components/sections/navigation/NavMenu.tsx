'use client'

import { navigationContent } from '@relatos/content/rengifo'
import { scrollTo } from '@relatos/utils'

export const NavMenu = () => {
  return (
    <ul className='hidden gap-5 lg:flex'>
      {navigationContent.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => scrollTo('#' + item.id)}
            className='hover:text-rengifo-amarillo cursor-pointer text-base uppercase text-white transition-colors duration-300'
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
