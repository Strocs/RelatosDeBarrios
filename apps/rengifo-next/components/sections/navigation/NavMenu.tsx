interface NavMenuProps {
  menu: ReadonlyArray<{
    readonly id: string
    readonly label: string
    readonly href: string
  }>
  onSectionClick?: () => void
  isMobile: boolean
}

export const NavMenu = ({ menu, onSectionClick, isMobile }: NavMenuProps) => {
  const handleSectionClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (onSectionClick) {
      onSectionClick()
    }
  }

  if (isMobile) {
    return (
      <div className='animate-in slide-in-from-top-2 absolute left-0 top-0 -z-10 w-screen duration-300'>
        <ul
          className='mx-8 mt-[5.625rem] flex list-none flex-col items-end gap-[1.25rem] rounded-2xl p-[1.25rem] shadow-[0_0.1rem_5rem_black]'
          style={{ backgroundColor: 'var(--color-rengifo-azul)' }}
        >
          {menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleSectionClick(item.href)}
                className='cursor-pointer uppercase text-white transition-colors duration-300 hover:text-yellow-300'
                style={{
                  fontSize: 'var(--font-size-rengifo-parrafos)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    'var(--color-rengifo-amarillo)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <ul className='flex list-none flex-row gap-[1.25rem]'>
      {menu.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => handleSectionClick(item.href)}
            className='cursor-pointer text-base uppercase text-white transition-colors duration-300'
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--color-rengifo-amarillo)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
