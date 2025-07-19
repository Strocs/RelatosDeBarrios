import { Title } from '@/components/ui/Title'
import { archiveConfig } from '@relatos/content/rengifo'
import Image from 'next/image'

export const PlansSection = () => {
  return (
    <section
      id='proyecto'
      className='bg-rengifo-azul relative flex min-h-[140dvh] items-center justify-center overflow-hidden'
    >
      {/* Background Image */}
      <Image
        src={archiveConfig.backgroundImage.src}
        alt={archiveConfig.backgroundImage.alt}
        layout='fill'
        className='absolute z-0 object-cover object-[center_150%]'
      />
      <section className='container'>
        <div>
          <Title headingLevel='h2'>{archiveConfig.title}</Title>
          <div></div>
        </div>

        <div>
          <p className='text-lg text-white'>{archiveConfig.description}</p>
          <div>
            {archiveConfig.cards.map((card) => (
              <div></div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
