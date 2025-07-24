import { heroContent } from '@relatos/content/rengifo'
import Image from 'next/image'
import { HeroTitleAction } from './HeroTitleAction'

export const HeroSection = () => {
  const { title, subTitle, utilityImages, actions, video } = heroContent

  return (
    <header id='inicio' className='relative h-screen md:h-[160dvh]'>
      {/* Content Container with GSAP Parallax placeholder */}
      <HeroTitleAction title={title} subTitle={subTitle} actions={actions} />

      {/* Background Video */}
      <video
        loop={video.loop}
        muted={video.muted}
        autoPlay={video.autoplay}
        preload={video.preload}
        className='not-landscape:h-screen pointer-events-none fixed inset-0 -z-10 aspect-video select-none object-cover landscape:w-screen'
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
