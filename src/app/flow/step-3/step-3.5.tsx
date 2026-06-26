import { CodeBlock } from '../utils/code-block'

export default function SingletonPrismaClient() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Membuat Prisma Client Singleton
      </h2>
      <p className="mt-3 text-gray-600">
        Di Next.js, hot‑reload bisa membuat banyak instance Prisma. Kita
        buat satu file pusat agar koneksi database hanya dibuat sekali.
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Buat file <code>src/lib/db.ts</code>:
      </p>
      <CodeBlock
        code={`import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db`}
        lang="ts"
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>{' '}
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>
            Gunakan <code>globalThis</code> agar kompatibel di semua environment.
          </li>
          <li>
            Pada mode development, log <code>query</code> membantu melihat query
            SQL yang dijalankan. Di production, cukup log <code>error</code>.
          </li>
          <li>
            Singleton ini mencegah koneksi database berlebih saat Next.js
            melakukan hot‑reload.
          </li>
        </ul>
        <p className="mt-2">
          Sekarang kamu bisa mengimpor <code>db</code> dari{' '}
          <code>@/lib/db</code> di file manapun.
        </p>
      </div>
    </li>
  )
}