import Image from 'next/image'
import { photosContent } from '@relatos/content/rengifo'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { Card } from '@/components/ui/Card'

export const PhotosSection = () => {
  return (
    <div
      id='archivo'
      className='bg-rengifo-azul-darker relative z-10 flex flex-col items-center overflow-clip pt-24 xl:-mt-20 xl:overflow-visible 2xl:h-[140dvh]'
    >
      <Image
        {...photosContent.utilityImages!.bg}
        sizes='100vw'
        className='pointer-events-none absolute z-0 -mt-32 h-full w-screen select-none object-cover object-center xl:h-auto'
      />
      <article className='container relative z-10 px-4 md:px-8'>
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
        <section className='space-y-12 py-10 md:py-20'>
          <div className='flex h-full min-h-72 flex-wrap justify-center gap-8 xl:flex-nowrap'>
            {photosContent.cards?.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                image={card.bgImage}
                subTitle={card.subTitle}
                disabled={card.disabled}
              />
            ))}
          </div>
          <div className='flex h-full min-h-48 flex-wrap justify-center gap-8 xl:flex-nowrap'>
            {photosContent.cards?.slice(3).map((card) => (
              <Card
                key={card.id}
                title={card.title}
                id={card.id}
                image={card.bgImage}
                subTitle={card.subTitle}
                disabled={card.disabled}
                className='max-w-lg xl:max-w-full'
              />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
