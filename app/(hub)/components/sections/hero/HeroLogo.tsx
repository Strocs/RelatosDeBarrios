import { ImageType } from '@/types/general'
import Image from 'next/image'

export const HeroLogo = (image: ImageType) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
      className='w-full max-w-[40rem] mix-blend-luminosity md:-mb-10'
    />
  )
}
