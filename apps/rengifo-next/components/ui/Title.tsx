import { cn } from '@relatos/utils'

interface TitleProps {
  children: React.ReactNode
  className?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({
  children,
  className,
  headingLevel = 'h1',
}: TitleProps) => {
  const Heading = headingLevel
  return (
    <Heading
      className={cn(
        'text-8xl font-black uppercase leading-none text-white',
        className
      )}
    >
      {children}
    </Heading>
  )
}
