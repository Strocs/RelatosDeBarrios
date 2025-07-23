import Image from 'next/image'
import { photosContent } from '@relatos/content/rengifo'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { Card } from '@/components/ui/Card'

export const PhotosSection = () => {
  return (
    <div
      id='archivo'
      className='bg-rengifo-pastel relative -mt-20 flex h-[140dvh] flex-col items-center pt-24'
    >
      <Image
        {...photosContent.utilityImages!.bg}
        sizes='100vw'
        className='pointer-events-none absolute z-0 -mt-32 w-screen select-none'
      />
      <article className='container relative z-10'>
        <section className='relative flex w-full flex-col items-end'>
          <Title
            headingLevel='h2'
            className='text-rengifo-azul z-10 w-fit text-right'
          >
            {photosContent.title}
            <br />
            <span className='text-rengifo-gris'>{photosContent.subTitle}</span>
          </Title>
          <YellowBar className='-mr-10 max-w-7xl' />
        </section>
        <section className='space-y-12 py-20'>
          <div className='flex h-full min-h-72 gap-8'>
            {photosContent.cards?.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                title={card.title}
                image={card.bgImage}
                subTitle={card.subTitle}
              />
            ))}
          </div>
          <div className='flex h-full min-h-48 gap-8'>
            {photosContent.cards?.slice(3).map((card) => (
              <Card
                key={card.id}
                title={card.title}
                image={card.bgImage}
                subTitle={card.subTitle}
              />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
