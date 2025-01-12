'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function PrintButton() {
  const { theme, setTheme } = useTheme()

  const handlePrint = () => {
    const previousTheme = theme
    // Switch to light theme
    setTheme('light')
    
    // Wait for theme change to take effect
    setTimeout(() => {
      window.print()
      // Restore previous theme after print dialog closes
      setTimeout(() => {
        if (previousTheme) setTheme(previousTheme)
      }, 100)
    }, 100)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrint}
          className="fixed right-16 top-4 print:hidden"
        >
          <Download className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Print to PDF</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Print to PDF</p>
      </TooltipContent>
    </Tooltip>
  )
}
