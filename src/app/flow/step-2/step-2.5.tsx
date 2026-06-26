import { CodeBlock } from '../utils/code-block'

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
        komponen <code>Button</code> dari shadcn dan ikon{' '}
        <code>lucide-react</code>.
      </p>

      <CodeBlock
        lang="tsx"
        code={`import { Button } from '@/components/ui/button'
        import { ArrowRight, Layers, Palette, Zap } from 'lucide-react'
        
        export default function HomePage() {
          return (
            <div className="flex flex-col items-center space-y-32 py-20 px-4">
              {/* Hero Section */}
              <section className="text-center max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Bangun aplikasi lebih cepat dengan{' '}
                  <span className="text-primary">Boilerplate Modern</span>
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  Fokus pada fitur, bukan konfigurasi. Semua fondasi sudah siap — tinggal eksekusi idemu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                      className="
                        rounded-xl
                        bg-white dark:bg-gray-900
                        border border-gray-200 dark:border-gray-800
                        shadow-sm
                        p-6
                        flex flex-col items-center text-center gap-4
                        transition-all duration-200 hover:shadow-md
                      "
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>
        
              {/* CTA Section */}
              <section className="w-full max-w-2xl">
                <div className="
                  rounded-xl
                  bg-primary/5 dark:bg-primary/10
                  border border-primary/20 dark:border-primary/30
                  px-8 py-10
                  text-center
                  transition-colors duration-200
                ">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Siap Memulai?
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    Clone repo ini dan mulai bangun proyek impianmu dalam hitungan menit.
                  </p>
                  <Button size="lg" className="gap-2 px-8">
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
