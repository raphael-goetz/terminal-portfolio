import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raphael Goetz',
  description: 'Raphael\'s portfolio-terminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}