import { CopyButton } from "../utils/copy-button";

export default function InstalasiStorybook() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Instalasi Storybook
      </h2>
      <p className="mt-3 text-gray-600">
        Storybook akan mendeteksi framework Next.js secara otomatis dan
        menghasilkan konfigurasi awal yang siap pakai.
      </p>
      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npx storybook@latest init" />
        <code>npx storybook@latest init</code>
      </div>
      <p className="mt-3 text-gray-600">
        Setelah perintah ini, akan muncul folder <code>.storybook</code>,
        folder <code>src/stories</code> (contoh), dan script{' '}
        <code>npm run storybook</code>.
      </p>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Pilih <strong>yes</strong> saat ditanya
        tentang migrasi ke Storybook 8. Storybook akan menginstal dependensi
        yang diperlukan dan menambahkan script ke <code>package.json</code>.
      </div>
    </li>
  )
}