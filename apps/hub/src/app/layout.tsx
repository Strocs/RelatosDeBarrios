import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Background } from '@/components/Background'
import { cn } from '@relatos/utils'
import site_data from '@/config/config.json'
import { Footer } from '@/components/Footer'

const noto_sans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: site_data.seo.title,
  description: site_data.seo.description,
  metadataBase: new URL(site_data.site.url),
  openGraph: {
    title: site_data.seo.title,
    description: site_data.seo.description,
    url: site_data.site.url,
    siteName: site_data.site.name,
    images: [
      {
        url: `${site_data.site.url}${site_data.site.logo}`,
        width: 1200,
        height: 630,
        alt: site_data.site.name,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    title: site_data.seo.title,
    description: site_data.seo.description,
    card: 'summary_large_image',
    creator: '@relatosdebarrios',
    images: [
      {
        url: `${site_data.site.url}${site_data.site.logo}`,
        width: 1200,
        height: 630,
        alt: site_data.site.name,
      },
    ],
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
          'bg-hub-background font-noto relative flex h-full min-h-dvh flex-col antialiased',
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
