// src/app/flow/step-2/page.tsx
import Link from 'next/link'
import SetupDarkMode from './step-2.1'
import SetupShadcnUI from './step-2.2'
import BuildBasicLayout from './step-2.3'
import IntegrasiRootLayout from './step-2.4'
import LandingPageMinimal from './step-2.5'
import Step2Checklist from './step-2-checklist'

export default function Step2Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 2 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Styling, Theming & Layout Dasar
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membangun tampilan visual aplikasi dengan dark mode, UI kit Shadcn,
          dan komponen layout (navbar, footer, sidebar).
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Setup Dark Mode */}
        <SetupDarkMode />

        {/* 2. Setup Shadcn UI */}
        <SetupShadcnUI />

        {/* 3. Membangun Layout Dasar */}
        <BuildBasicLayout />

        {/* 4. Integrasi Root Layout */}
        <IntegrasiRootLayout />

        {/* 5. Halaman Landing Minimal */}
        <LandingPageMinimal />
      </ol>

      {/* Checklist Akhir Tahap 2 */}
      <Step2Checklist />
      
      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-1"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-3"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 3: Database & ORM →
        </Link>
      </div>
    </div>
  )
}
