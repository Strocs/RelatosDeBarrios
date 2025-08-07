import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      {children}
      <Analytics />
    </html>
  )
}
