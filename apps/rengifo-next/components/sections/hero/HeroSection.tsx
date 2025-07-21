import { heroConfig } from '@relatos/content/rengifo'
import Image from 'next/image'
import { HeroTitleAction } from './HeroTitleAction'

export const HeroSection = () => {
  const { hero, actions, video, backgroundImage } = heroConfig

  return (
    <header id='inicio' className='relative h-[160dvh]'>
      {/* Content Container with GSAP Parallax placeholder */}
      <HeroTitleAction title={hero.title} actions={actions} />

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
        className='absolute -bottom-[20dvh] w-screen'
      />
    </header>
  )
}
