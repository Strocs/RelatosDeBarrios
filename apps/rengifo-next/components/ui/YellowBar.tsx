import { cn } from '@relatos/utils'

interface YellowBarProps {
  className?: string
}

export const YellowBar = ({ className }: YellowBarProps) => {
  return <div className={cn('bg-rengifo-amarillo h-2.5 w-full', className)} />
}
