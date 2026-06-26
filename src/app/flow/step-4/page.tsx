// src/app/flow/step-4/page.tsx
import Link from 'next/link'
import InstalationAuthentication from './step-4.1'
import AuthCoreConfiguration from './step-4.2'
import CreateRouteAPI from './step-4.3'
import CreateAuthService from './step-4.4'
import ProtectedRoute from './step-4.5'
import LoginAndRegisterPageMinimalis from './step-4.6'
import Step4Checklist from './step-4-checklist'

export default function Step4Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 4 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Autentikasi & Otorisasi
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menambahkan sistem login, register, dan proteksi halaman dengan
          NextAuth, Prisma, dan JWT.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Instalasi Authentication */}
        <InstalationAuthentication />

        {/* 2. Konfigurasi Inti Auth */}
        <AuthCoreConfiguration />

        {/* 3. Membuat API Route */}
        <CreateRouteAPI />

        {/* 4. Membuat Auth Service / Server Actions */}
        <CreateAuthService />

        {/* 5. Proteksi Route dengan Middleware */}
        <ProtectedRoute />

        {/* 6. Halaman Login & Register (Minimalist) */}
        <LoginAndRegisterPageMinimalis />
      </ol>

      {/* Checklist Akhir Tahap 4 */}
      <Step4Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-3"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-5"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 5: API & Data Fetching →
        </Link>
      </div>
    </div>
  )
}
