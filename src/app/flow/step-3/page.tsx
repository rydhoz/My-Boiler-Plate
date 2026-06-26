// src/app/flow/step-3/page.tsx
import Link from 'next/link'
import InstalasiPrisma from './step-3.1'
import ConfigurationDatabase from './step-3.2'
import ModelDefinition from './step-3.3'
import EksekusiMigrasi from './step-3.4'
import SingletonPrismaClient from './step-3.5'
import DatabaseTest from './step-3.6'
import GuiPrismaStudio from './step-3.7'
import Step3Checklist from './step-3-checklist'

export default function Step3Page() {
  return (
    <div className="space-y-10 text-gray-700">
      {/* Header */}
      <div>
        <div className="inline-block rounded-full bg-[#e0e5ec] px-3 py-1 text-xs font-semibold text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          Langkah 3 dari 12
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Database & ORM Setup
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-gray-500">
          Menghubungkan aplikasi dengan database menggunakan Prisma, membuat
          schema, menjalankan migrasi, dan menyiapkan Prisma Client.
        </p>
      </div>

      {/* Instruksi */}
      <ol className="space-y-8">
        {/* 1. Instalasi Prisma */}
        <InstalasiPrisma />

        {/* 2. Konfigurasi Database (SQLite) */}
        <ConfigurationDatabase />

        {/* 3. Mendefinisikan Model */}
        <ModelDefinition />

        {/* 4. Eksekusi Migrasi */}
        <EksekusiMigrasi />

        {/* 5. Prisma Client Singleton */}
        <SingletonPrismaClient />

        {/* 6. Tes Database */}
        <DatabaseTest />

        {/* 7. Bonus: GUI Prisma Studio */}
        <GuiPrismaStudio />
      </ol>

      {/* Checklist Akhir Tahap 3 */}
      <Step3Checklist />

      {/* Navigasi */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/flow/step-2"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-5 py-3 font-medium text-gray-600 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          ← Kembali
        </Link>
        <Link
          href="/flow/step-4"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#e0e5ec] px-6 py-3 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
        >
          Tahap 4: Autentikasi →
        </Link>
      </div>
    </div>
  )
}
