import { Card } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { resourcesContent } from '@relatos/content/rengifo'

export const ResourcesSection = () => {
  return (
    <section
      id='libro-documental'
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
          {resourcesContent.cards?.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              image={card.bgImage}
              className='min-h-38 xl:min-h-64! h-full max-w-lg'
            />
          ))}
        </section>
      </article>
    </section>
  )
}
