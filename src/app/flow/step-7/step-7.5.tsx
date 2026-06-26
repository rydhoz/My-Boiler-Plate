export default function StateManagementBestPractices() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Tips Best Practice State Management
      </h2>
      <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
        <li>
          <strong>KISS (Keep It Simple, Stupid):</strong> Jangan masukkan
          semuanya ke Zustand. Jika state hanya dipakai di satu komponen,
          gunakan <code>useState</code>.
        </li>
        <li>
          <strong>Selector:</strong> Saat memanggil store, ambil hanya state
          yang dibutuhkan.
          <ul className="mt-1 ml-5 list-inside list-disc space-y-1">
            <li>
              ❌ <code>const state = useUIStore()</code> — Merender ulang
              komponen setiap ada perubahan APAPUN di store.
            </li>
            <li>
              ✅{' '}
              <code>
                const isSidebarOpen = useUIStore((state) =&gt; state.isSidebarOpen)
              </code>{' '}
              — Hanya merender ulang jika <code>isSidebarOpen</code> berubah.
            </li>
          </ul>
        </li>
        <li>
          <strong>Persist Middleware:</strong> Gunakan <code>persist</code>{' '}
          hanya untuk hal-hal yang harus diingat browser (seperti tema atau
          status sidebar), jangan untuk data sensitif.
        </li>
      </ul>
    </li>
  )
}