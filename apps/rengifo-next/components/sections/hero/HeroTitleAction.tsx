'use client'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroAction } from '@relatos/content/rengifo'
import { useRef } from 'react'

interface HeroTitleActionProps {
  title: string
  actions: HeroAction[]
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const HeroTitleAction = ({ title, actions }: HeroTitleActionProps) => {
  const sectionRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current?.closest('header'),
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
        y: 800,
        ease: 'none',
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className='container mx-auto flex h-3/6 w-full items-center justify-end px-8 will-change-transform'
    >
      {/* Title Container with decorative bar */}
      <div className='relative flex w-fit flex-col items-end'>
        <div className='bg-rengifo-amarillo h-2 w-full' />
        <Title
          title={title}
          className='w-fit max-w-2xl text-right text-6xl'
          headingLevel='h1'
        />
        {/* Action Buttons */}
        <div className='mt-4 w-fit space-x-4'>
          {actions.map((action) => (
            <Button key={action.id} text={action.label} href={action.href} />
          ))}
        </div>
      </div>
    </section>
  )
}
