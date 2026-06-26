// src/app/flow/step-5/page.tsx
import Link from 'next/link'
import DataFetchingStrategy from './step-5.1'
import ServiceLayer from './step-5.2'
import IntegrationTanStackQuery from './step-5.3'
import CustomHooks from './step-5.4'
import RouteHandlers from './step-5.5'
import GlobalErrorHandling from './step-5.6'
import Step5Checklist from './step-5-checklist'

export default function Step5Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 5 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          API Layer & Data Fetching
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membangun strategi pengambilan data yang efisien dengan Server
          Components, Server Actions, dan TanStack Query.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Strategi Pengambilan Data */}
        <DataFetchingStrategy />

        {/* 2. Service Layer */}
        <ServiceLayer />

        {/* 3. Integrasi TanStack Query */}
        <IntegrationTanStackQuery />

        {/* 4. Custom Hooks */}
        <CustomHooks />

        {/* 5. Route Handlers (API Publik) */}
        <RouteHandlers />

        {/* 6. Global Error Handling & Notification */}
        <GlobalErrorHandling />
      </ol>

      {/* Checklist Akhir Tahap 5 */}
      <Step5Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-4"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-6"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 6: Forms & Validasi →
        </Link>
      </div>
    </div>
  )
}
