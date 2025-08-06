import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { resourcesContent } from '@relatos/content/rengifo'
import { Card } from '@/components/ui/Card'

const { book, documentary } = resourcesContent.cards!

export const ResourcesSection = () => {
  return (
    <section
      id={resourcesContent.id}
      className='bg-rengifo-azul-darker to-50% xl:pt-40 2xl:-mt-60 2xl:pt-24'
    >
      <article className='container relative z-20 mx-auto px-4 md:px-8'>
        <div>
          <Title headingLevel='h2' className='text-rengifo-amarillo z-10 w-fit'>
            {resourcesContent.title}
            <br />
            <span className='text-white'>{resourcesContent.subTitle}</span>
          </Title>
          <YellowBar className='-ml-10' />
        </div>
        <section className='flex flex-wrap justify-around gap-8 py-10 md:py-20'>
          <Card
            variant='link'
            key={book.id}
            target='_blank'
            rel='noopener noreferrer'
            href={book.href!}
            {...book}
            className='min-h-38 xl:min-h-64! h-full max-w-lg'
          />

          <Card
            variant='link'
            key={documentary.id}
            target='_blank'
            rel='noopener noreferrer'
            href={documentary.href!}
            {...documentary}
            className='min-h-38 xl:min-h-64! h-full max-w-lg'
          />
        </section>
      </article>
    </section>
  )
}
