import { CodeBlock } from "../utils/code-block";

export default function LandingPageMinimal() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Halaman Landing Minimal
      </h2>
      <p className="mt-3 text-gray-600">
        Buatlah halaman depan yang menarik dengan Hero, Fitur, dan CTA. Gunakan
        komponen <code>Button</code> dari shadcn dan ikon <code>lucide-react</code>.
      </p>

      <CodeBlock
        lang="tsx"
        code={`import { Button } from '@/components/ui/button'
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center space-y-24 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl px-4">
        <div className="inline-block rounded-full bg-[#e0e5ec] px-4 py-1 text-sm font-medium text-gray-500 shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] mb-6">
          🚀 Boilerplate siap pakai
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Bangun Aplikasi Lebih Cepat dengan{' '}
          <span className="text-primary">Boilerplate Modern</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Fokus pada fitur, bukan konfigurasi. Semua fondasi sudah siap — tinggal
          eksekusi idemu.
        </p>
        <div className="flex gap-4 justify-center">
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
              className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex flex-col items-center text-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-2xl px-4">
        <div className="rounded-2xl bg-[#e0e5ec] p-8 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
          <p className="text-muted-foreground mb-6">
            Clone repo ini dan mulai bangun proyek impianmu dalam hitungan menit.
          </p>
          <Button size="lg" className="gap-2">
            Lihat di GitHub <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}`}
      />
      <p className="mt-2 text-sm text-gray-600">
        Simpan sebagai <code>src/app/page.tsx</code>. Pastikan ikon{' '}
        <code>lucide-react</code> sudah terpasang.
      </p>
    </li>
  )
}