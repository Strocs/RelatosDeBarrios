import { ImageType } from '@/types/general'
import Image from 'next/image'

type HeroLogoProps = ImageType

export const HeroLogo = (image: HeroLogoProps) => {
  return (
    <Image
      {...image}
      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
      className='w-full max-w-[40rem] mix-blend-luminosity md:-mb-10'
    />
  )
}
