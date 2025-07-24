import { Card } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { resourcesContent } from '@relatos/content/rengifo'

export const ResourcesSection = () => {
  return (
    <section
      id='libro-documental'
      className='to-rengifo-azul-darker relative -mt-60 bg-gradient-to-b from-transparent to-50% pt-40 2xl:pt-24'
    >
      <article className='container mx-auto px-8'>
        <div>
          <Title headingLevel='h2' className='text-rengifo-amarillo z-10 w-fit'>
            {resourcesContent.title}
            <br />
            <span className='text-white'>{resourcesContent.subTitle}</span>
          </Title>
          <YellowBar className='-ml-10' />
        </div>
        <section className='flex justify-around py-20'>
          {resourcesContent.cards?.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              image={card.bgImage}
              className='min-h-64 max-w-lg'
            />
          ))}
        </section>
      </article>
    </section>
  )
}
