// src/app/flow/step-10/page.tsx
import Link from 'next/link'
import DockerfileMultistage from './step-10.1'
import DockerComposeDev from './step-10.2'
import GitHubActionsCI from './step-10.3'
import StrategiDeployment from './step-10.4'
import Step10Checklist from './step-10-checklist'

export default function Step10Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 10 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Containerization & CI/CD
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Membungkus aplikasi dalam Docker, menjalankan database dengan Docker
          Compose, dan menyiapkan pipeline CI/CD dengan GitHub Actions.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        <DockerfileMultistage />
        <DockerComposeDev />
        <GitHubActionsCI />
        <StrategiDeployment />
      </ol>

      {/* Penutup */}
      <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🏆</span> Selamat! Kamu Telah Menyelesaikan
          Boilerplate!
        </h2>
        <p className="mb-3 text-gray-600">
          Kamu baru saja membangun sebuah sistem yang sangat kompleks. Review
          pencapaianmu:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#e8edf2] p-4 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Kualitas Kode</h3>
            <p className="text-sm text-gray-500">
              TS Strict → Prettier → ESLint → Husky → Commitlint
            </p>
          </div>
          <div className="rounded-2xl bg-[#e8edf2] p-4 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Tampilan</h3>
            <p className="text-sm text-gray-500">
              Tailwind → Shadcn UI → Dark Mode → Storybook
            </p>
          </div>
          <div className="rounded-2xl bg-[#e8edf2] p-4 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Data</h3>
            <p className="text-sm text-gray-500">
              Prisma → PostgreSQL/SQLite → Zod Env Validation
            </p>
          </div>
          <div className="rounded-2xl bg-[#e8edf2] p-4 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <h3 className="text-sm font-bold">Fitur & Kestabilan</h3>
            <p className="text-sm text-gray-500">
              Auth.js → Server Actions → TanStack Query → RHF
            </p>
            <p className="text-sm text-gray-500">
              Vitest → Playwright → Docker → GitHub Actions
            </p>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <Step10Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-9"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-11"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 11: Monitoring & Analytics →
        </Link>
      </div>
    </div>
  )
}