import Image from 'next/image'
import { footerContent } from '@relatos/content/rengifo'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

type IconMap = {
  [key: string]: LucideIcon
}

const ICONS: IconMap = {
  Instagram,
  Facebook,
  Youtube,
  Mail,
}

export const Footer = () => {
  return (
    <footer className='relative -mt-3 w-full overflow-clip'>
      <div
        aria-hidden
        className='to-rengifo-azul-darker z-1 absolute top-0 size-full bg-gradient-to-b from-transparent'
      ></div>
      <Image
        {...footerContent.utilityImages.bg}
        className='pointer-events-none absolute top-0 z-0 select-none object-cover object-top'
      />
      <section className='container relative z-10 mx-auto space-y-4 pb-8 pt-24'>
        {/* Logo */}
        <Logo className='text-rengifo-pastel mx-auto w-fit max-w-lg' />
        {/* Collaborators */}
        <ul className='flex flex-wrap items-center justify-center'>
          {footerContent.credits.collaborators.map((collaborator) => (
            <li key={collaborator.src} className='size-fit'>
              <Image {...collaborator} className='aspect-auto max-h-24 w-fit' />
            </li>
          ))}
        </ul>
        {/* Text */}
        <div className='text-center leading-tight text-white'>
          <p>{footerContent.title}</p>
          {/* Dev */}
          <Link
            href={footerContent.credits.developer?.href || '/'}
            target='_blank'
            rel='noopener noreferrer'
            className='text-rengifo-amarillo hover:text-rengifo-pastel transition-colors duration-300'
          >
            {footerContent.credits.developer?.text}
          </Link>
        </div>
        {/* RRSS */}
        <nav className='mx-auto flex w-fit gap-4 text-white'>
          {footerContent.socialLinks.map((socialLink) => {
            const IconComponent = ICONS[socialLink.icon]
            return (
              <Link
                aria-label={socialLink.name}
                href={socialLink.href}
                key={socialLink.id}
                rel='noopener noreferrer'
                target='_blank'
              >
                {IconComponent && (
                  <IconComponent
                    size={28}
                    strokeWidth={1.2}
                    className='hover:text-rengifo-amarillo transition-colors duration-150'
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </section>
    </footer>
  )
}
