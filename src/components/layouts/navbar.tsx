'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex h-16 items-center justify-between px-6">
        <Link href="/" className="font-bold text-xl">Boilerplate</Link>
        <nav className="flex items-center gap-4">
          <Link href="/features" className="text-sm font-medium">Features</Link>
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
      </div>
    </header>
  )
}