'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="mx-4 mt-4">
      <div className="flex h-16 items-center justify-between rounded-xl border border-gray-200 bg-white px-6 shadow-sm transition-colors duration-200 dark:border-gray-800 dark:bg-gray-900">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          Boilerplate
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/features"
            className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Features
          </Link>
          <Link
            href="/flow"
            className="text-sm font-medium text-gray-600 transition-colors duration-150 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Flow
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg text-gray-600 transition-all duration-150 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </nav>
      </div>
    </header>
  )
}
