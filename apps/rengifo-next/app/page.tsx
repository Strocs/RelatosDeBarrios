import { Navigation } from '@/components/sections/navigation'
import { Header } from '@/components/sections/header'
import { ProjectSection } from '@/components/sections/proyecto'
import { PlanimetriasSection } from '@/components/sections/planimetrias'
import { ArchivoSection } from '@/components/sections/archivo'
import { LibroDocumentalSection } from '@/components/sections/libro-documental'

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <main className='min-h-screen'>
        <ProjectSection />
        <PlanimetriasSection />
        <ArchivoSection />
        <LibroDocumentalSection />
      </main>
    </>
  )
}
