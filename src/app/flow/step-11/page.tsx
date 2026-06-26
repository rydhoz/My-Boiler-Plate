// src/app/flow/step-11/page.tsx
import Link from 'next/link'
import IntegrasiSentry from './step-11.1'
import CustomErrorPage from './step-11.2'
import AnalyticsSetup from './step-11.3'
import ServerLogging from './step-11.4'
import Step11Checklist from './step-11-checklist'

export default function Step11Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 11 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Monitoring, Error Tracking & Analytics
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menjaga kesehatan aplikasi di produksi dengan Sentry, custom error
          page, analytics ringan, dan logging terstruktur.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        <IntegrasiSentry />
        <CustomErrorPage />
        <AnalyticsSetup />
        <ServerLogging />
      </ol>

      {/* Kesimpulan Akhir (tetap di halaman utama) */}
      <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🎯</span> Kesimpulan Akhir: Perjalanan
          Boilerplate Kamu
        </h2>
        <p className="mb-4 text-gray-600">
          Kamu baru saja menyelesaikan Siklus Hidup Pengembangan Perangkat Lunak
          (SDLC) yang lengkap:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Setup Dasar</h3>
            <p className="text-xs text-gray-500">
              TS, Prettier, Husky → Menjaga kualitas kode.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Design System</h3>
            <p className="text-xs text-gray-500">
              Shadcn, Theme → Menjaga konsistensi visual.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Data Layer</h3>
            <p className="text-xs text-gray-500">
              Prisma, SQLite → Menjaga integritas data.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Security</h3>
            <p className="text-xs text-gray-500">
              Auth.js, Middleware → Menjaga privasi user.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Fetching Strategy</h3>
            <p className="text-xs text-gray-500">
              TanStack Query, Server Actions → Menjaga performa.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Input Validation</h3>
            <p className="text-xs text-gray-500">
              RHF, Zod → Menjaga validitas data.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">State Management</h3>
            <p className="text-xs text-gray-500">
              Zustand → Menjaga responsivitas UI.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Testing</h3>
            <p className="text-xs text-gray-500">
              Vitest, Playwright → Menjaga stabilitas fitur.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Documentation</h3>
            <p className="text-xs text-gray-500">
              Storybook → Menjaga kemudahan kolaborasi.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">DevOps</h3>
            <p className="text-xs text-gray-500">
              Docker, CI/CD → Menjaga kelancaran deploy.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Observability</h3>
            <p className="text-xs text-gray-500">
              Sentry, Analytics → Menjaga kesehatan aplikasi di produksi.
            </p>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <Step11Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-10"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-12"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 12: Finalisasi →
        </Link>
      </div>
    </div>
  )
}