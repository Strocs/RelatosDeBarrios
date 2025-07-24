import { Card } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { YellowBar } from '@/components/ui/YellowBar'
import { docsContent } from '@relatos/content/rengifo'
import Image from 'next/image'
import Markdown from 'react-markdown'

export const DocsSection = () => {
  return (
    <article
      id='planimetrias'
      className='bg-rengifo-azul relative flex min-h-[180dvh] flex-col items-center justify-end'
    >
      {/* Background Image */}
      <Image
        {...docsContent.utilityImages!.bg}
        className='pointer-events-none absolute select-none object-cover object-[center_-60vh]'
      />
      <section className='container z-10 px-8'>
        <div>
          <Title headingLevel='h2' className='max-w-4xl'>
            {docsContent.title}
          </Title>
          <YellowBar className='-ml-10 max-w-6xl' />
        </div>

        <section className='flex grow flex-wrap gap-8 py-20'>
          <div className='flex-1 space-y-2'>
            <Markdown
              components={{
                p: ({ ...props }) => (
                  <p
                    className='text-lg font-light leading-tight text-white'
                    {...props}
                  ></p>
                ),
              }}
            >
              {docsContent.description}
            </Markdown>
          </div>
          <section className='max-w-2/3 grid shrink-0 grow grid-cols-2 gap-8'>
            {docsContent.cards?.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                image={card.bgImage}
                subTitle={card.subTitle}
              />
            ))}
          </section>
        </section>
      </section>
      <div className='relative z-10 h-auto w-full'>
        <Image
          {...docsContent.utilityImages!.bottom}
          sizes='100vw'
          className='pointer-events-none select-none object-cover'
        />
        <div className='z-1 to-rengifo-pastel absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent from-60%'></div>
      </div>
    </article>
  )
}
