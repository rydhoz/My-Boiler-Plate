export default function DependencyUpdate() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Dependency Update Otomatis
      </h2>
      <p className="mt-3 text-gray-600">
        Library JavaScript berkembang sangat cepat. Dependabot (bawaan GitHub)
        akan mengirim PR otomatis ketika ada versi baru dari dependensi. Kamu
        hanya perlu cek PR → jalankan test → merge jika hijau (✅).
      </p>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Jangan update semua library sekaligus.
        Update satu per satu dan jalankan <code>npm run test</code>. Gunakan
        juga <strong>Renovate</strong> sebagai alternatif jika butuh konfigurasi
        yang lebih granular.
      </div>
    </li>
  )
}