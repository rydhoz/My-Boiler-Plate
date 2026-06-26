import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function GlobalErrorHandling() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          6
        </span>
        Global Error Handling & Notification
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan <strong>Sonner</strong> (yang sudah terintegrasi dengan Shadcn)
        untuk menampilkan notifikasi yang cantik dan konsisten di seluruh
        aplikasi.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Install</h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npx shadcn@latest add sonner" />
            <code>npx shadcn@latest add sonner</code>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Pasang Toaster di RootLayout
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Buka <code>src/app/layout.tsx</code>, tambahkan komponen{' '}
            <code>&lt;Toaster /&gt;</code> setelah semua provider.
          </p>
          <CodeBlock
            lang="tsx"
            code={`import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="...">
        <ThemeProvider ...>
          <QueryProvider>
            {children}
            <Toaster position="top-right" richColors />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}`}
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Cara Memanggil Notifikasi
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Di file manapun (Client Component atau Server Action), cukup impor{' '}
            <code>toast</code> dari <code>sonner</code>:
          </p>
          <CodeBlock
            lang="ts"
            code={`import { toast } from 'sonner'

// Contoh di dalam Server Action
toast.success('Data berhasil disimpan!')
toast.error('Terjadi kesalahan saat menyimpan data.')
toast.info('Mengunduh...')`}
          />
        </div>

        <div className="rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Best Practice:</strong> Gunakan Sonner untuk semua feedback ke
          pengguna. Jangan campur dengan <code>alert()</code> atau toast library
          lain agar pengalaman tetap seragam. Letakkan <code>&lt;Toaster /&gt;</code>{' '}
          sekali saja di root layout.
        </div>
      </div>
    </li>
  )
}