import Link from 'next/link'
import SetupTesting from './step-8.1'
import UnitTestExample from './step-8.2'
import IntegrationTestExample from './step-8.3'
import E2ETestExample from './step-8.4'
import TestingBestPractices from './step-8.5'
import Step8Checklist from './step-8-checklist'

export default function Step8Page() {
  return (
    <div className="space-y-10 text-gray-700">
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 8 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Testing
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menjamin kualitas aplikasi dengan unit test, integration test, dan
          end‑to‑end test yang solid.
        </p>
      </div>

      <ol className="space-y-8">
        <SetupTesting />
        <UnitTestExample />
        <IntegrationTestExample />
        <E2ETestExample />
        <TestingBestPractices />
      </ol>

      <Step8Checklist />

      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-7"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-9"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 9: Deployment →
        </Link>
      </div>
    </div>
  )
}