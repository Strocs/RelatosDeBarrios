import { cn } from '@/utils/css'

interface ButtonProps {
  text: string
  href: string
  className?: string
}

export const Button = ({ text, href, className = '' }: ButtonProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'hover:text-rengifo-azul inline-block border-white bg-transparent text-white no-underline transition-all duration-300 hover:bg-white',
        className
      )}
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
        }}
      >
        {text}
      </p>
    </a>
  )
}
