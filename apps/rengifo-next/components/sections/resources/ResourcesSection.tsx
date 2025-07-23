import { Card } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { resourcesContent } from '@relatos/content/rengifo'

export const ResourcesSection = () => {
  return (
    <section
      id='libro-documental'
      className='to-rengifo-azul-darker relative -mt-60 min-h-screen bg-gradient-to-b from-transparent pt-24'
    >
      <article className='container mx-auto'>
        <div className='pb-20'>
          <Title headingLevel='h2' className='text-rengifo-amarillo z-10 w-fit'>
            {resourcesContent.title}
            <br />
            <span className='text-white'>{resourcesContent.subTitle}</span>
          </Title>
          <YellowBar />
        </div>
        <section className='flex h-full min-h-64 justify-around'>
          {resourcesContent.cards?.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              subTitle={card.subTitle}
              image={card.bgImage}
              className='max-w-lg'
            />
          ))}
        </section>
      </article>
    </section>
  )
}
