import { cn } from '@/utils/css'

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        'text-hub-primary mx-auto max-w-prose text-center text-8xl font-bold tracking-tight lowercase md:text-8xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
