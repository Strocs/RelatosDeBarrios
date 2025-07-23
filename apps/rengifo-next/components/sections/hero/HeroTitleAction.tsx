'use client'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroAction } from '@relatos/content/rengifo'
import { useRef } from 'react'
import { YellowBar } from '@/components/ui/YellowBar'

interface HeroTitleActionProps {
  title: string
  subTitle: string
  actions: HeroAction[]
}

gsap.registerPlugin(useGSAP, ScrollTrigger)

export const HeroTitleAction = ({
  title,
  subTitle,
  actions,
}: HeroTitleActionProps) => {
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
      className='container mx-auto flex h-1/2 w-full items-center justify-end px-8 will-change-transform'
    >
      {/* Title Container with decorative bar */}
      <div className='relative flex w-fit flex-col items-end'>
        <YellowBar />
        <Title
          className='w-fit max-w-2xl pt-4 text-right text-6xl font-bold'
          headingLevel='h1'
        >
          {title} <span className='font-black'>{subTitle}</span>
        </Title>
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
