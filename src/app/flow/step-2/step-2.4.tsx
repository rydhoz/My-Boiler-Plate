import { CodeBlock } from "../utils/code-block";

export default function IntegrasiRootLayout() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Integrasi Root Layout
      </h2>
      <p className="mt-3 text-gray-600">
        Satukan semua komponen ke dalam <code>src/app/layout.tsx</code>.
      </p>

      {/* Prasyarat */}
      <div className="mt-4 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Prasyarat:</strong> File <code>src/app/globals.css</code> sudah
        berisi directive Tailwind dan CSS variables dari Shadcn. Jika belum,
        jalankan ulang <code>npx shadcn@latest init</code> dan pastikan
        <code>CSS variables</code> dipilih <strong>Yes</strong>.
      </div>

      <CodeBlock
        lang="tsx"
        code={`import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Boilerplate App',
  description: 'Professional Next.js Starter Kit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={\`$\{inter.className\} min-h-screen bg-background text-foreground antialiased\`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>{' '}
        <code>suppressHydrationWarning</code> wajib di{' '}
        <code>&lt;html&gt;</code> saat pakai next-themes agar tidak muncul
        error mismatch. Kombinasi <code>flex-col</code> pada wrapper dan{' '}
        <code>flex-1</code> pada <code>&lt;main&gt;</code> memastikan Footer
        selalu berada di bawah meskipun konten sedikit.
      </div>
    </li>
  )
}