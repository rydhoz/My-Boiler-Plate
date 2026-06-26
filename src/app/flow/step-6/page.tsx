// src/app/flow/step-6/page.tsx
import Link from 'next/link'
import InstalasiFormValidation from './step-6.1'
import CreateValidationSchema from './step-6.2'
import ReusableFormImplementation from './step-6.3'
import HandlingLoadingState from './step-6.4'
import DoubleLayerValidation from './step-6.5'
import Step6Checklist from './step-6-checklist'

export default function Step6Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 6 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Forms & Validasi
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membangun form yang aman, terstruktur, dan nyaman digunakan dengan
          React Hook Form, Zod, dan shadcn/ui.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Instalasi Instalasi Form & Validasi */}
        <InstalasiFormValidation />

        {/* 2. Schema Validasi */}
        <CreateValidationSchema />

        {/* 3. Implementasi Form Reusable */}
        <ReusableFormImplementation />

        {/* 4. Handling Loading State */}
        <HandlingLoadingState />

        {/* 5. Validasi Double-Layer */}
        <DoubleLayerValidation />
      </ol>

      {/* Checklist Akhir Tahap 6 */}
      <Step6Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-5"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-7"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 7: State Management →
        </Link>
      </div>
    </div>
  )
}
