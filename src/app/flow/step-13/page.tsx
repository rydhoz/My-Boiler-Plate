// src/app/flow/step-13/page.tsx
import Link from 'next/link'
import DependencyUpdate from './step-13.1'
import BusinessLogicSeparation from './step-13.2'
import FeatureFlags from './step-13.3'
import ADRDocumentation from './step-13.4'
import RefactoringRutin from './step-13.5'
import MaintenanceChecklist from './step-13-checklist'

export default function MaintenancePage() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Best Practices
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Tips Perawatan Jangka Panjang
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menjaga boilerplate tetap sehat, modern, dan mudah dikelola seiring
          waktu. Jangan sampai project bagus berubah menjadi spaghetti code.
        </p>
      </div>

      {/* Tips */}
      <ol className="space-y-8">
        <DependencyUpdate />
        <BusinessLogicSeparation />
        <FeatureFlags />
        <ADRDocumentation />
        <RefactoringRutin />
      </ol>

      {/* Ringkasan Perawatan */}
      <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🏁</span> Ringkasan Perawatan Boilerplate
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 pr-4 font-semibold">Aktivitas</th>
                <th className="py-2 pr-4 font-semibold">Frekuensi</th>
                <th className="py-2 pr-4 font-semibold">Alat</th>
                <th className="py-2 font-semibold">Tujuan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Update Deps</td>
                <td className="py-2 pr-4">Mingguan</td>
                <td className="py-2 pr-4">Dependabot</td>
                <td className="py-2">Menghindari technical debt.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Refactor</td>
                <td className="py-2 pr-4">Setiap Fitur</td>
                <td className="py-2 pr-4">Manual</td>
                <td className="py-2">Menjaga kode mudah dibaca.</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Dokumentasi</td>
                <td className="py-2 pr-4">Setiap Perubahan Arsitektur</td>
                <td className="py-2 pr-4">Markdown/Wiki</td>
                <td className="py-2">Menghindari kebingungan di masa depan.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Testing</td>
                <td className="py-2 pr-4">Sebelum Merge</td>
                <td className="py-2 pr-4">Vitest/Playwright</td>
                <td className="py-2">Mencegah regresi (bug baru).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist */}
      <MaintenanceChecklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-12"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali ke Tahap 12
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