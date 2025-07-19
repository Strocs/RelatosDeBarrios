import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Background } from '@/components/Background'
import { cn } from '@relatos/utils'
import { seoConfig } from '@relatos/content/hub'
import { Footer } from '@/components/Footer'

const noto_sans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: { default: seoConfig.title, template: `%s | ${seoConfig.title}` },
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.url),
  openGraph: seoConfig.og,
  twitter: seoConfig.twitter,
  icons: {
    icon: seoConfig.favicon,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-hub-background font-noto relative flex h-full min-h-dvh flex-col px-4 antialiased',
          noto_sans.variable
        )}
      >
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  )
}
