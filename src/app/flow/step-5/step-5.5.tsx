import { CodeBlock } from "../utils/code-block";

export default function RouteHandlers() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Route Handlers (API Publik)
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan Route Handler hanya jika aplikasi perlu diakses oleh pihak luar
        (mobile app, webhook dari layanan lain, atau API publik). Untuk
        keperluan internal, utamakan Server Components dan Server Actions.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Contoh: endpoint status
          </h3>
          <p className="text-sm text-gray-600">
            Buat file <code>src/app/api/public/status/route.ts</code>:
          </p>
          <CodeBlock
            lang="ts"
            code={`import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString(),
  })
}`}
          />
        </div>

        <div className="rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Kapan tidak perlu Route Handler?</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Mengambil data untuk ditampilkan di halaman → gunakan Server Component langsung.</li>
            <li>Mutasi data dari form → gunakan Server Actions.</li>
            <li>Internal API antar modul → panggil service layer langsung.</li>
          </ul>
          <p className="mt-2">
            Route Handler hanya untuk kebutuhan <strong>eksternal</strong> yang
            tidak bisa diakomodasi oleh Server Components atau Server Actions.
          </p>
        </div>
      </div>
    </li>
  )
}