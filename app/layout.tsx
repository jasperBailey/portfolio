import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Profile from '@/components/organisms/Profile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Jasper Bailey',
  description: 'Portfolio website generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"lg:flex lg:justify-between lg:flex-row lg:py-0 lg:px-24 px-6 py-12 min-h-screen max-w-screen-xl mx-auto text-slate-400 " + inter.className}>

        <Profile/>
        
        <main className="flex flex-col justify-between py-12 lg:py-24 lg:min-h-screen lg:w-1/2" >
          {children}
          <footer className="text-xs max-w-sm text-slate-500 mt-3">
            <p>
              Website built in Visual Studio Code using Next.js and Tailwind by me, deployed with Vercel. Icons are from FontAwesome.
            </p>
          </footer>
        </main>
        
      </body>
    </html>
  )
}
