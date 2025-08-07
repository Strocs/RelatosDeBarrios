import { Header } from '@/hub/components/Header'
import { HeroSection } from '@/hub/components/hero/HeroSection'
import { ProjectSection } from '@/hub/components/project/ProjectSection'
import { TeamSection } from '@/hub/components/team/TeamSection'
import { ContactSection } from '@/hub/components/contact/ContactSection'
import { Footer } from '@/hub/components/Footer'

export default function Home() {
  return (
    <>
      <Header>
        <HeroSection />
      </Header>
      <main className='mx-auto grow content-center'>
        <ProjectSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
