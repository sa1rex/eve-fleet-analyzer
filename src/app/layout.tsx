import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EVE Fleet Analyzer',
  description: 'Analyze EVE Online fleet compositions',
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