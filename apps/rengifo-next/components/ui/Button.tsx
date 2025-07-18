interface ButtonProps {
  text: string
  href: string
  type?: 'primary' | 'secondary'
  className?: string
}

export const Button = ({
  text,
  href,
  type = 'primary',
  className = '',
}: ButtonProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-block border-white bg-transparent text-white no-underline transition-all duration-300 hover:bg-white hover:text-[var(--color-rengifo-azul)] ${className} `}
      style={{
        border: '0.15em solid white',
        borderRadius: '0.5rem', // 0.8rem → 0.5rem conversion
        fontSize: 'var(--font-size-rengifo-parrafos)',
        letterSpacing: '0.5px',
      }}
    >
      <p
        className='font-semibold'
        style={{
          margin: '0.3em 1em',
          fontWeight: 600,
        }}
      >
        {text}
      </p>
    </a>
  )
}
