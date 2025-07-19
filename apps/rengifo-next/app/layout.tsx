import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import '../styles/globals.css'
import { cn } from '@relatos/utils'
import { seoConfig } from '@relatos/content/rengifo'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.title}`,
  },
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: 'website',
    siteName: seoConfig.openGraph.siteName,
    images: [{ url: seoConfig.openGraph.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: [seoConfig.twitter.image],
  },
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
