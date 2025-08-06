import { Header } from '../components/Header'
import { HeroSection } from '../components/sections/hero/HeroSection'
import { Main } from '../components/Main'
import { ProjectSection } from '../components/sections/project/ProjectSection'
import { TeamSection } from '../components/sections/team/TeamSection'
import { ContactSection } from '../components/sections/contact/ContactSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header>
        <HeroSection />
      </Header>
      <Main>
        <ProjectSection />
        <TeamSection />
        <ContactSection />
      </Main>
      <Footer />
    </>
  )
}
