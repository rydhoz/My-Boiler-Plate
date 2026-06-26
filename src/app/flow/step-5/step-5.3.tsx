import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function IntegrationTanStackQuery() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Integrasi TanStack Query
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan TanStack Query untuk mengelola data yang sering berubah, caching,
        background refetch, dan update real‑time tanpa perlu reload halaman.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Install</h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npm install @tanstack/react-query @tanstack/react-query-devtools" />
            <code>
              npm install @tanstack/react-query
              <br />
              @tanstack/react-query-devtools
            </code>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Buat Provider (
            <code>src/components/providers/query-provider.tsx</code>)
          </h3>
          <CodeBlock
            lang="tsx"
            code={`'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,   // data dianggap fresh selama 1 menit
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}`}
          />
        </div>

        <div className="rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Integrasi:</strong> Bungkus <code>{`{children}`}</code> di{' '}
          <code>src/app/layout.tsx</code> dengan <code>QueryProvider</code>:
          <div className="font-mono text-xs bg-[#dde2e8] p-2 rounded-lg mt-1">
            {`<QueryProvider>{children}</QueryProvider>`}
          </div>
          <p className="mt-2">
            <strong>Devtools</strong> akan muncul sebagai ikon pojok kiri bawah
            saat development. Kamu bisa memonitor semua query dan cache.
          </p>
        </div>
      </div>
    </li>
  )
}