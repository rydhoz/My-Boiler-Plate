import { Button } from '@/components/ui/button'
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-32 px-4 py-20">
      {/* Hero Section */}
      <section className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Bangun aplikasi lebih cepat dengan{' '}
          <span className="text-primary">Boilerplate Modern</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          Fokus pada fitur, bukan konfigurasi. Semua fondasi sudah siap —
          tinggal eksekusi idemu.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8">
            Mulai Sekarang <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Dokumentasi
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: 'Cepat & Ringan',
              desc: 'Next.js App Router, SWC, dan Tailwind membuat pengembangan terasa instan.',
            },
            {
              icon: Palette,
              title: 'Tema Siap Pakai',
              desc: 'Dark mode otomatis dengan next-themes, plus Shadcn UI yang elegan.',
            },
            {
              icon: Layers,
              title: 'Arsitektur Bersih',
              desc: 'Struktur folder yang rapi, TypeScript strict, dan alat bantu terintegrasi.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-2xl">
        <div className="bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30 rounded-xl border px-8 py-10 text-center transition-colors duration-200">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Siap Memulai?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-500 dark:text-gray-400">
            Clone repo ini dan mulai bangun proyek impianmu dalam hitungan
            menit.
          </p>
          <Button size="lg" className="gap-2 px-8">
            Lihat di GitHub <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
