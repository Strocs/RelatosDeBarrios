import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import '../styles/globals.css'
import { cn } from '@relatos/utils'
import { rengifoSeoConfig } from '@relatos/content'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: rengifoSeoConfig.title,
    template: `%s | ${rengifoSeoConfig.title}`,
  },
  description: rengifoSeoConfig.description,
  keywords: [...rengifoSeoConfig.keywords],
  openGraph: {
    title: rengifoSeoConfig.openGraph.title,
    description: rengifoSeoConfig.openGraph.description,
    type: 'website',
    siteName: rengifoSeoConfig.openGraph.siteName,
    images: [{ url: rengifoSeoConfig.openGraph.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: rengifoSeoConfig.twitter.title,
    description: rengifoSeoConfig.twitter.description,
    images: [rengifoSeoConfig.twitter.image],
  },
  icons: {
    icon: rengifoSeoConfig.favicon,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'font-raleway overflow-x-hidden antialiased',
          raleway.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
