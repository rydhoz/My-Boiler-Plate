// src/app/flow/step-9/page.tsx
import Link from 'next/link'
import InstalasiStorybook from './step-9.1'
import KonfigurasiPathAlias from './step-9.2'
import IntegrasiTailwindDarkMode from './step-9.3'
import MembuatStories from './step-9.4'
import ManfaatStorybook from './step-9.5'
import Step9Checklist from './step-9-checklist'

export default function Step9Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 9 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Dokumentasi Komponen (Storybook)
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membangun dokumentasi UI interaktif dengan Storybook agar komponen
          dapat dikembangkan dan diuji secara terisolasi.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        <InstalasiStorybook />
        <KonfigurasiPathAlias />
        <IntegrasiTailwindDarkMode />
        <MembuatStories />
        <ManfaatStorybook />
      </ol>

      {/* Checklist */}
      <Step9Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-8"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-10"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 10: Container & CI/CD →
        </Link>
      </div>
    </div>
  )
}