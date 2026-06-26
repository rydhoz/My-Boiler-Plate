// src/app/flow/page.tsx
import Link from 'next/link'

const steps = [
  { number: 1, title: 'Inisialisasi & Fondasi', href: '/flow/step-1' },
  { number: 2, title: 'Styling, Theming & Layout Dasar', href: '/flow/step-2' },
  { number: 3, title: 'Database & ORM Setup', href: '/flow/step-3' },
  { number: 4, title: 'Autentikasi & Otorisasi', href: '/flow/step-4' },
  { number: 5, title: 'API Layer & Data Fetching', href: '/flow/step-5' },
  { number: 6, title: 'Forms & Validasi', href: '/flow/step-6' },
  { number: 7, title: 'State Management (Client State)', href: '/flow/step-7' },
  { number: 8, title: 'Testing', href: '/flow/step-8' },
  { number: 9, title: 'Dokumentasi Komponen (Storybook)', href: '/flow/step-9' },
  { number: 10, title: 'Containerization & CI/CD', href: '/flow/step-10' },
  { number: 11, title: 'Monitoring, Error Tracking & Analytics', href: '/flow/step-11' },
  { number: 12, title: 'Dokumentasi & Finalisasi', href: '/flow/step-12' },
]

export default function FlowPage() {
  return (
    <div className="space-y-12 text-gray-700">
      {/* Header */}
      <div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Flow Boilerplate Next.js
        </h1>
        <p className="max-w-2xl text-lg text-gray-500">
          Bangun fondasi aplikasi modern secara bertahap dengan panduan 12 langkah.
          Dari inisialisasi hingga siap produksi, semua praktik terbaik 2025 dalam
          satu tempat.
        </p>
      </div>

      {/* 12 Langkah */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">📋 12 Langkah Membangun Boilerplate</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Link
              key={step.number}
              href={step.href}
              className="rounded-2xl bg-[#e0e5ec] p-4 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e0e5ec] text-xs font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
                {step.number}
              </span>
              <span className="ml-2 text-sm font-medium">{step.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tombol Mulai */}
      <Link
        href="/flow/step-1"
        className="inline-block rounded-2xl bg-[#e0e5ec] px-8 py-4 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]"
      >
        🚀 Mulai dari Awal: Tahap 1 – Inisialisasi & Fondasi
      </Link>

      {/* Overview */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="mb-2 text-lg font-semibold">
            🎯 Apa yang Akan Dibangun?
          </h2>
          <p className="text-sm text-gray-500">
            Sebuah boilerplate full‑stack dengan autentikasi JWT, database
            terintegrasi, UI berbasis komponen, pengujian otomatis, pipeline
            CI/CD, dan pemantauan error siap pakai.
          </p>
        </div>
        <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="mb-2 text-lg font-semibold">🛠 Tech Stack</h2>
          <p className="text-sm text-gray-500">
            Next.js 15, TypeScript (strict), Tailwind CSS, shadcn/ui, Prisma,
            Auth.js, Zustand, TanStack Query, React Hook Form + Zod, Vitest,
            Playwright, Storybook, Docker, GitHub Actions.
          </p>
        </div>
        <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="mb-2 text-lg font-semibold">📂 Arsitektur Folder</h2>
          <p className="text-sm text-gray-500">
            Struktur modular: <code>components/</code>, <code>services/</code>,
            <code>stores/</code>, <code>server/</code>, <code>validations/</code>, dan{' '}
            <code>hooks/</code>. Setiap modul memiliki tanggung jawab yang jelas.
          </p>
        </div>
        <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="mb-2 text-lg font-semibold">🚀 Siap Deploy</h2>
          <p className="text-sm text-gray-500">
            Docker multi‑stage, GitHub Actions CI, environment variable
            terenkripsi, dan panduan deploy ke Vercel maupun VPS.
          </p>
        </div>
      </div>

      {/* Maintenance Link */}
      <Link
        href="/flow/step-13"
        className="inline-block rounded-2xl bg-[#e0e5ec] px-8 py-4 font-semibold text-gray-700 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] transition-all duration-200 hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] active:shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]"
      >
        🧹 Tips Perawatan Jangka Panjang
      </Link>
    </div>
  )
}