import { OpenGalleryCard } from '@/components/ui/OpenGalleryCard'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { docsContent } from '@relatos/content/rengifo'
import Image from 'next/image'
import Markdown from 'react-markdown'

export const DocsSection = () => {
  return (
    <article
      id='planimetrias'
      className='bg-rengifo-azul relative z-30 flex min-h-[180dvh] flex-col items-center justify-end overflow-y-clip'
    >
      {/* Background Image */}
      <Image
        {...docsContent.utilityImages!.bg}
        sizes='100vw'
        className='pointer-events-none absolute -top-[50%] h-full w-full select-none object-cover md:-top-[40%]'
      />
      <section className='container z-10 px-4 md:px-8'>
        <div>
          <Title headingLevel='h2' className='max-w-4xl'>
            {docsContent.title}
          </Title>
          <YellowBar className='-ml-10 max-w-6xl' />
        </div>

        <section className='flex flex-col gap-8 py-10 md:py-20 xl:flex-row'>
          <div className='mx-auto flex w-full max-w-md flex-col gap-2'>
            <Markdown
              components={{
                p: ({ ...props }) => (
                  <p
                    className='font-light leading-tight text-white md:text-lg'
                    {...props}
                  ></p>
                ),
              }}
            >
              {docsContent.description}
            </Markdown>
          </div>
          <section className='not-landscape:flex-col flex w-full items-center gap-8 xl:items-stretch'>
            {docsContent.cards?.map((card) => (
              <OpenGalleryCard key={card.id} {...card} />
            ))}
          </section>
        </section>
      </section>
      <div className='relative z-10 h-auto w-full'>
        <Image
          {...docsContent.utilityImages!.bottom}
          sizes='100vw'
          className='pointer-events-none w-full select-none object-cover'
        />
        <div className='z-1 to-rengifo-pastel absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent from-60%'></div>
      </div>
    </article>
  )
}
