import { DocsSection } from '@/components/sections/docs/DocsSection'
import { HeroSection } from '@/components/sections/hero/HeroSection'
import { Navigation } from '@/components/sections/navigation/Navigation'
import { PhotosSection } from '@/components/sections/photos/PhotosSection'
import { ResourcesSection } from '@/components/sections/resources/ResourcesSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <main className='min-h-screen'>
        <DocsSection />
        <PhotosSection />
        <ResourcesSection />
      </main>
    </>
  )
}
