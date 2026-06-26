import { CodeBlock } from '../utils/code-block'

export default function BuildBasicLayout() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Membangun Layout Dasar
      </h2>
      <p className="mt-3 text-gray-600">
        Kita akan membuat komponen layout agar halaman-halaman kita konsisten.
      </p>

      {/* Prasyarat */}
      <div className="mt-4 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Prasyarat:</strong> Instal ikon{' '}
        <code>lucide-react</code> jika belum ada:{' '}
        <code className="font-mono">npm install lucide-react</code>
      </div>

      <div className="mt-4 space-y-4">
        {/* A. Navbar */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            A. Navbar (<code>src/components/layouts/navbar.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Navbar mengambang dengan efek neumorphism yang lembut.
          </p>
          <CodeBlock
            lang="tsx"
            code={`'use client'
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
}`}
          />
          <p className="mt-2 text-sm text-gray-600">
            Tombol dark mode dibuat dengan gaya neumorphism yang sama agar menyatu.
          </p>
        </div>

        {/* B. Footer */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            B. Footer (<code>src/components/layouts/footer.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Footer neumorphism yang menempel di bawah konten.
          </p>
          <CodeBlock
            lang="tsx"
            code={`export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4">
      <div className="rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] p-6">
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © ${new Date().getFullYear()} My Boilerplate. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}`}
          />
          <p className="mt-2 text-sm text-gray-600">
            Footer adalah <strong>Server Component</strong>, tanpa{' '}
            <code>&apos;use client&apos;</code>.
          </p>
        </div>

        {/* C. Sidebar (placeholder) */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            C. Sidebar (<code>src/components/layouts/sidebar.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Sidebar akan diimplementasikan nanti dengan <code>Sheet</code> dan{' '}
            <code>zustand</code>.
          </p>
        </div>
      </div>
    </li>
  )
}