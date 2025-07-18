import { Header } from '@/components/Header'
import { Hero } from '@/components/home/Hero'
import { ProjectsNavigator } from '@/components/home/ProjectNavigator'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Main>
        <ProjectsNavigator />
      </Main>
    </>
  )
}
