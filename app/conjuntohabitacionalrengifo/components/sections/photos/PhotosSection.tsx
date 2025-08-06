import Image from 'next/image'
import { photosContent } from '@/rengifo/content/photos'
import { Title } from '@/rengifo/components/ui/Title'
import { YellowBar } from '@/rengifo/components/ui/YellowBar'
import { Card } from '@/rengifo/components/ui/Card'
import { OpenGalleryCard } from '@/rengifo/components/ui/OpenGalleryCard'

const cardsList = Object.values(photosContent.cards || {})

export const PhotosSection = () => {
  return (
    <div
      id={photosContent.id}
      className='bg-rengifo-azul-darker relative z-10 flex flex-col items-center overflow-clip pt-24 xl:-mt-20 xl:overflow-visible 2xl:h-[140dvh]'
    >
      <Image
        {...photosContent.utilityImages!.bg}
        sizes='100vw'
        className='pointer-events-none absolute z-0 -mt-32 h-full w-screen object-cover object-center select-none xl:h-auto'
      />
      <article className='relative z-10 container px-4 md:px-8'>
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
            {cardsList.slice(0, 3).map((card) => (
              <OpenGalleryCard key={card.id} {...card} />
            ))}
          </div>
          <div className='flex h-full min-h-48 flex-wrap justify-center gap-8 xl:flex-nowrap'>
            {cardsList.slice(3).map((card) => (
              <Card
                variant='link'
                href={card.href!}
                key={card.id}
                {...card}
                className='max-w-lg xl:max-w-full'
              />
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
