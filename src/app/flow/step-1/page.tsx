// src/app/flow/step-1/page.tsx
import Link from 'next/link'
import FormattingAndLinting from './step-1.3'
import TypeScriptConfiguration from './step-1.2'
import Scaffolding from './step-1.1'
import GitWorkflow from './step-1.4'
import EnvironmentVariableValidation from './step-1.5'
import Step1Checklist from './step-1-checklist'

export default function Step1Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 1 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Inisialisasi & Fondasi
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membangun &quot;aturan main&quot; proyek. Kita tidak membuat fitur,
          tetapi membangun sistem agar siap menerima fitur skala besar tanpa
          menjadi berantakan.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Scaffolding */}
        <Scaffolding />

        {/* 2. Konfigurasi TypeScript */}
        <TypeScriptConfiguration />

        {/* 3. Formatting & Linting */}
        <FormattingAndLinting />

        {/* 4. Git Workflow */}
        <GitWorkflow />

        {/* 5. Environment Variable Validation */}
        <EnvironmentVariableValidation />
      </ol>

      {/* Checklist Akhir Tahap 1 */}
      <Step1Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-2"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 2: Styling & Theming →
        </Link>
      </div>
    </div>
  )
}