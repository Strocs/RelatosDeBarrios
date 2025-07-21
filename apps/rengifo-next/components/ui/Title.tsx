import { cn } from '@relatos/utils'
import Markdown from 'react-markdown'

interface TitleProps {
  title: string
  className?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({
  title,
  className,
  headingLevel = 'h1',
}: TitleProps) => {
  const Heading = headingLevel
  return (
    <Markdown
      components={{
        [Heading]: ({ ...props }) => (
          <Heading
            {...props}
            className={cn(
              'text-8xl font-bold uppercase leading-none text-white',
              className
            )}
          />
        ),
      }}
    >
      {title}
    </Markdown>
  )
}
