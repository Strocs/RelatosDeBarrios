import { Header } from '@/components/Header'
import { Hero } from '@/components/home/Hero'
import { ProjectsNavigator } from '@/components/home/ProjectNavigator'

export default function Home() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <main className='container mx-auto grow content-center'>
        <ProjectsNavigator />
      </main>
    </>
  )
}
