import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { header } from '@/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${header.name} - Professional Resume`,
  description: `Professional resume of ${header.name}, ${header.title} based in ${header.location}`,
  authors: [{ name: header.name }],
  keywords: [
    'resume',
    'curriculum vitae',
    'engineering manager',
    'generative ai',
    'software engineer',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="resume-theme"
        >
          <ThemeToggle />
          {children}
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
