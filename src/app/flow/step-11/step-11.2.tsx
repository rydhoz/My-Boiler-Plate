import { CodeBlock } from "../utils/code-block";

export default function CustomErrorPage() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Custom Error Page (error.tsx)
      </h2>
      <p className="mt-3 text-gray-600">
        Error boundary Next.js: jika terjadi crash di satu halaman, aplikasi
        tidak mati total. Buat <code>src/app/error.tsx</code>:
      </p>
      <CodeBlock
        lang="tsx"
        code={`'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import * as Sentry from '@sentry/nextjs'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Melaporkan error secara manual ke Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Ups! Terjadi Kesalahan</h2>
      <p className="text-muted-foreground mb-6">
        Maaf, terjadi sesuatu yang tidak terduga. Tim kami sudah diberitahu.
      </p>
      <Button onClick={() => reset()}>
        Coba Lagi
      </Button>
    </div>
  )
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> File ini hanya menangkap error di level
        halaman. Untuk error di root layout, buat{' '}
        <code>src/app/global-error.tsx</code> dengan struktur yang sama.
      </div>
    </li>
  )
}