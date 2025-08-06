import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '../styles/globals.css'
import { cn } from '@relatos/utils'
import { seoContent } from '@relatos/content/rengifo'
import { Gallery } from '../components/ui/Gallery'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: seoContent.title,
    template: `%s | ${seoContent.title}`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  openGraph: seoContent.openGraph,
  twitter: seoContent.twitter,
  icons: seoContent.icons,
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
        <Gallery />
        {children}
      </body>
    </html>
  )
}
