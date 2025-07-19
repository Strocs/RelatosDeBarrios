import { ArchiveSection } from '@/components/sections/archive/ArchiveSection'
import { DownloadsSection } from '@/components/sections/downloads/DownloadsSection'
import { HeroSection } from '@/components/sections/hero/HeroSection'
import { Navigation } from '@/components/sections/navigation/Navigation'
import { PlansSection } from '@/components/sections/plans/PlansSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <main className='min-h-screen'>
        <PlansSection />
        <ArchiveSection />
        <DownloadsSection />
      </main>
    </>
  )
}
