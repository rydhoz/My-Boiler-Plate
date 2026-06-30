import { Button } from '@/components/ui/button'
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-24 py-16">
      {/* Hero Section */}
      <section className="max-w-3xl px-4 text-center">
        <div className="mb-6 inline-block rounded-full bg-[#e0e5ec] px-4 py-1 text-sm font-medium text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          🚀 Boilerplate siap pakai
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Bangun Aplikasi Lebih Cepat dengan{' '}
          <span className="text-primary">Boilerplate Modern</span>
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
          Fokus pada fitur, bukan konfigurasi. Semua fondasi sudah siap —
          tinggal eksekusi idemu.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="gap-2">
            Mulai Sekarang <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Dokumentasi
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
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
              className="flex flex-col items-center gap-3 rounded-2xl bg-[#e0e5ec] p-6 text-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
                <Icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-2xl px-4">
        <div className="rounded-2xl bg-[#e0e5ec] p-8 text-center shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="mb-4 text-3xl font-bold">Siap Memulai?</h2>
          <p className="text-muted-foreground mb-6">
            Clone repo ini dan mulai bangun proyek impianmu dalam hitungan
            menit.
          </p>
          <Button size="lg" className="gap-2">
            Lihat di GitHub <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
