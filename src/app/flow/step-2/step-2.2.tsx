import { CopyButton } from "../utils/copy-button";

export default function SetupShadcnUI() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Setup Shadcn UI
      </h2>
      <p className="mt-3 text-gray-600">
        Shadcn bukan library komponen yang diinstall lewat npm, melainkan
        memberikan kode komponen langsung ke folder kamu sehingga bisa
        dikustomisasi penuh.
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Inisialisasi
          </h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-4 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npx shadcn@latest init" />
            <code>npx shadcn@latest init</code>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Pilihan saat init (Sangat Penting):{' '}
            <strong>
              Style: Default, Base color: Slate, CSS variables: Yes
            </strong>{' '}
            (agar bisa ganti warna tema dengan mudah).
          </p>
          <p className="mt-1 text-sm text-gray-500">
            *Pastikan Tailwind CSS sudah terpasang. Proyek dari Langkah 1 sudah
            menyertakannya.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Install Komponen Dasar
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Jangan install semua, cukup yang paling sering dipakai agar project
            tidak berat:
          </p>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-4 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npx shadcn@latest add button input card dropdown-menu sheet" />
            <code>
              npx shadcn@latest add button input card dropdown-menu sheet
            </code>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Sekarang kamu punya folder <code>src/components/ui</code> yang berisi
            komponen-komponen tersebut.
          </p>
        </div>
      </div>
    </li>
  )
}