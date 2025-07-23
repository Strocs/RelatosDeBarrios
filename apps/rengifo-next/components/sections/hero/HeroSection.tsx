import { heroContent } from '@relatos/content/rengifo'
import Image from 'next/image'
import { HeroTitleAction } from './HeroTitleAction'

export const HeroSection = () => {
  const { title, subTitle, utilityImages, actions, video } = heroContent

  return (
    <header id='inicio' className='relative h-[160dvh]'>
      {/* Content Container with GSAP Parallax placeholder */}
      <HeroTitleAction title={title} subTitle={subTitle} actions={actions} />

      {/* Background Video */}
      <video
        loop={video.loop}
        muted={video.muted}
        autoPlay={video.autoplay}
        preload={video.preload}
        className='pointer-events-none fixed inset-0 -z-10 aspect-video size-full select-none object-cover'
      >
        <source src={video.src} type='video/mp4' />
      </video>

      {/* Bottom Background Image */}
      <Image
        {...utilityImages!.bg}
        className='pointer-events-none absolute -bottom-0 z-10 w-screen select-none'
      />
    </header>
  )
}
