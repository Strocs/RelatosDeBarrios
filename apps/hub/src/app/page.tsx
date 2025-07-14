import { Header } from '@/components/Header'
import { BarrioCard } from '@/components/BarrioCard'
import { NewBadge } from '@/components/NewBadge'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Header />
      <section className='relative flex gap-20'>
        <BarrioCard
          href={'/'}
          title='Conjunto Habitacional Rengifo'
          imageSrc='/images/rengifo-image.png'
        />
        <BarrioCard href='/' title='Villa Covico' badge={<NewBadge />} />
      </section>
    </main>
  )
}
