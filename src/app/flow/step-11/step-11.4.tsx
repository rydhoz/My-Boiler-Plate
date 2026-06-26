import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function ServerLogging() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Server-side Logging (Pino)
      </h2>
      <p className="mt-3 text-gray-600">
        <code>console.log</code> tidak cukup di produksi. Gunakan Pino untuk
        log terstruktur (JSON). Install:
      </p>
      <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install pino pino-pretty" />
        <code>npm install pino pino-pretty</code>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600">
          Buat logger di <code>src/lib/logger.ts</code>
        </h3>
        <CodeBlock
          lang="ts"
          code={`import pino from 'pino'

export const logger = pino({
  transport: process.env.NODE_ENV === 'development' 
    ? { target: 'pino-pretty' } // Log berwarna di dev
    : undefined, // Log JSON di produksi
})`}
        />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-600">
          Contoh penggunaan di Server Action
        </h3>
        <CodeBlock
          lang="ts"
          code={`import { logger } from '@/lib/logger'

export async function registerUser(data: any) {
  try {
    // ... logika register
  } catch (error) {
    logger.error({ error }, 'Gagal mendaftarkan user')
    throw error
  }
}`}
        />
      </div>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Di Vercel, log akan otomatis dikirim ke
        dashboard Logs. Pino juga bisa diintegrasikan dengan layanan eksternal
        seperti Logtail atau Axiom untuk retensi jangka panjang.
      </div>
    </li>
  )
}