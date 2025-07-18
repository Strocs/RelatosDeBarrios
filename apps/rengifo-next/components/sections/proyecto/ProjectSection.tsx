import { rengifoProjectConfig } from '@relatos/content/apps'
import Image from 'next/image'

export const ProjectSection = () => {
  return (
    <section
      id='proyecto'
      className='relative flex min-h-screen items-center justify-center overflow-hidden'
      style={{
        backgroundColor: 'var(--color-rengifo-pastel)',
      }}
    >
      {/* Background Image */}
      <Image
        src={rengifoProjectConfig.backgroundImage.src}
        alt={rengifoProjectConfig.backgroundImage.alt}
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 z-0'
        sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
      />

      {/* Content Container */}
      <div className='container relative z-10 mx-auto w-full px-8'>
        <section className='flex flex-wrap items-center justify-between gap-8'>
          {/* Left Column - Team */}
          <section className='flex w-full grow flex-col justify-center'></section>

          {/* Right Column - Description */}
          <article className='w-full text-pretty leading-relaxed'>
            <p>{rengifoProjectConfig.description}</p>
          </article>
        </section>
      </div>
    </section>
  )
}
