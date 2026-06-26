// src/app/flow/step-12/page.tsx
import Link from 'next/link'
import WriteReadme from './step-12.1'
import SecurityHeaders from './step-12.2'
import AuditPerforma from './step-12.3'
import Versioning from './step-12.4'
import Step12Checklist from './step-12-checklist'

export default function Step12Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 12 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Dokumentasi & Finalisasi
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menulis README profesional, mengamankan aplikasi, mengaudit performa,
          dan merilis versi stabil pertama.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        <WriteReadme />
        <SecurityHeaders />
        <AuditPerforma />
        <Versioning />
      </ol>

      {/* Penutup */}
      <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🏁</span> Kata Penutup: Apa yang Sudah Kamu Capai?
        </h2>
        <p className="mb-4 text-gray-600">
          Kamu baru saja menyelesaikan perjalanan panjang membangun sebuah
          Enterprise-Ready Boilerplate. Kamu tidak hanya belajar koding, tapi
          belajar bagaimana membangun sistem yang:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Type-Safe</h3>
            <p className="text-xs text-gray-500">Minim bug karena TypeScript.</p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Developer-Friendly</h3>
            <p className="text-xs text-gray-500">
              Rapi berkat Prettier, Husky, dan Storybook.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Production-Ready</h3>
            <p className="text-xs text-gray-500">
              Aman dengan Auth.js dan terpantau dengan Sentry.
            </p>
          </div>
          <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Scalable</h3>
            <p className="text-xs text-gray-500">
              Terstruktur dengan Service Layer dan Docker.
            </p>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <Step12Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-11"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Kembali ke Halaman Flow
        </Link>
      </div>
    </div>
  )
}