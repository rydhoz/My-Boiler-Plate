import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";


export default function SetupDarkMode() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Setup Dark Mode (next-themes)
      </h2>
      <p className="mt-3 text-gray-600">
        Dark mode adalah fitur wajib untuk aplikasi modern. Kita gunakan{' '}
        <code>next-themes</code> karena menangani pergantian tema tanpa
        menyebabkan &quot;flash&quot; (layar putih sekejap saat refresh).
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Install</h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-4 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npm install next-themes" />
            <code>npm install next-themes</code>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Buat Provider (
            <code>src/components/providers/theme-provider.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Karena provider ini butuh akses ke browser (Client), kita harus
            menggunakan <code>&apos;use client&apos;</code>.
          </p>
          <CodeBlock
            lang="tsx"
            code={`'use client'
            
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`}
          />
        </div>
      </div>
    </li>
  )
}