import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

import { Toaster } from 'sonner'
import { ThemeProvider } from './providers/ThemeProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lingo',
  description: 'The connected workspace where better, faster work happens.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            },
          }}
          position="bottom-right"
        />

        {children}
      </body>
    </html>
  )
}
