'use client'
import { useGalleryStore } from '@/store/galleryStore'
import { type BaseCardProps, Card } from './Card'
import { getImagesById } from '@/utils/galleryUtils'

interface OpenGalleryCardProps extends BaseCardProps {
  id: string
}

export const OpenGalleryCard = ({
  id,
  title,
  subTitle,
  bgImage,
  className,
  disabled,
}: OpenGalleryCardProps) => {
  const openGallery = useGalleryStore((state) => state.openGallery)

  const handleOpenGallery = () => {
    const images = getImagesById(id)
    if (images.length > 0) {
      openGallery(images, 0, id)
    }
  }

  return (
    <Card
      variant='button'
      onClick={handleOpenGallery}
      title={title}
      subTitle={subTitle}
      bgImage={bgImage}
      className={className}
      disabled={disabled}
    />
  )
}
