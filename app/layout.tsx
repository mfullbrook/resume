import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { PrintButton } from '@/components/PrintButton'
import { TooltipProvider } from '@/components/ui/tooltip'
import { header } from '@/data'

const inter = Inter({ subsets: ['latin'] })

const pageTitle = `${header.name} - ${header.shortTitle}`
const pageDescription = `CV of ${header.name}, ${header.title} based in ${header.location}. 20+ years building software products, scaling engineering teams and delivering AI platforms in regulated environments.`

export const metadata: Metadata = {
  metadataBase: new URL('https://fullbrook.cv'),
  title: pageTitle,
  description: pageDescription,
  authors: [{ name: header.name }],
  keywords: [
    'cv',
    'curriculum vitae',
    'technology leader',
    'engineering leadership',
    'generative ai',
    'platform architecture',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'profile',
    url: 'https://fullbrook.cv',
    siteName: pageTitle,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: 'summary',
    title: pageTitle,
    description: pageDescription,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="resume-theme"
        >
          <TooltipProvider delayDuration={200}>
            <ThemeToggle />
            <PrintButton />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <script
          data-collect-dnt="true"
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  )
}
