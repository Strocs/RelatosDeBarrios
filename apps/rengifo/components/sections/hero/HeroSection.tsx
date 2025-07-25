import Image from 'next/image'
import { heroContent } from '@relatos/content/rengifo'
import { HeroTitleAction } from './HeroTitleAction'

export const HeroSection = () => {
  return (
    <header id='inicio' className='relative h-screen landscape:h-[160dvh]'>
      <HeroTitleAction
        title={heroContent.title}
        subTitle={heroContent.subTitle}
        actions={heroContent.actions}
      />

      <video
        loop={heroContent.video.loop}
        muted={heroContent.video.muted}
        autoPlay={heroContent.video.autoplay}
        preload={heroContent.video.preload}
        className='pointer-events-none fixed inset-0 -z-10 aspect-video h-screen w-screen origin-center select-none object-cover'
      >
        <source src={heroContent.video.src} type='video/mp4' />
      </video>

      <Image
        {...heroContent.utilityImages!.bg}
        className='pointer-events-none absolute -bottom-0 z-10 w-screen select-none'
      />
    </header>
  )
}
