import type { Metadata } from 'next'
import React from "react";

import './layout.scss'

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