import { rengifoHeaderConfig } from '@relatos/content'
import { Title } from '@/components/ui/Title'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const Header = () => {
  const { hero, actions, video, backgroundImage } = rengifoHeaderConfig

  return (
    <header id='inicio' className='relative h-[180dvh]'>
      {/* Content Container with GSAP Parallax placeholder */}
      <section className='h-3/7 container mx-auto flex size-full items-center justify-end px-8'>
        {/* Title Container with decorative bar */}
        <div className='relative flex w-fit flex-col items-end'>
          <div className='bg-rengifo-amarillo h-2 w-full' />
          <Title className='w-fit text-right text-6xl' headingLevel='h1'>
            {hero.title}
            <br />
            {hero.subTitle}
          </Title>
          <div className='mt-4 w-fit space-x-4'>
            {actions.map((action) => (
              <Button
                key={action.id}
                text={action.label}
                href={action.href}
                type={action.type}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
      </section>

      {/* Background Video */}
      <video
        loop={video.loop}
        muted={video.muted}
        autoPlay={video.autoplay}
        preload={video.preload}
        className='fixed inset-0 -z-10 aspect-video size-full object-cover'
      >
        <source src={video.src} type='video/mp4' />
      </video>

      {/* Bottom Background Image */}
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        width={backgroundImage.width}
        height={backgroundImage.height}
        className='absolute bottom-0 w-screen'
      />
    </header>
  )
}
