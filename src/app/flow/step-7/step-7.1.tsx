export default function StateManagementMindset() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Memahami Perbedaan State
      </h2>
      <p className="mt-3 text-gray-600">
        Sebelum menginstal, pahami aturan emas ini agar setiap state ditempatkan
        di tempat yang tepat:
      </p>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 pr-4 font-semibold">Jenis State</th>
              <th className="py-2 pr-4 font-semibold">Alat</th>
              <th className="py-2 font-semibold">Contoh Nyata</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-medium">Server State</td>
              <td className="py-2 pr-4">TanStack Query</td>
              <td className="py-2">
                Daftar produk, profil user, notifikasi (data dari database)
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-medium">Global Client State</td>
              <td className="py-2 pr-4">Zustand</td>
              <td className="py-2">
                Sidebar buka/tutup, tema, filter pencarian, wizard step
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">Local State</td>
              <td className="py-2 pr-4">useState / useReducer</td>
              <td className="py-2">
                Input form, loading tombol, dropdown kecil, modal konfirmasi
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-sm font-semibold text-gray-600">
          Contoh sederhana di kode:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>
            <strong>Server State:</strong>{' '}
            <code className="text-xs">const {'{ data }'} = useQuery(...)</code>
          </li>
          <li>
            <strong>Global Client State:</strong>{' '}
            <code className="text-xs">
              const isOpen = useSidebarStore(s =&gt; s.isOpen)
            </code>
          </li>
          <li>
            <strong>Local State:</strong>{' '}
            <code className="text-xs">const [search, setSearch] = useState('')</code>
          </li>
        </ul>
      </div>

      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Aturan Utama:</strong> Jangan menyimpan data dari database ke
        Zustand. Gunakan TanStack Query sebagai{' '}
        <em>single source of truth</em> untuk server state. Nanti di langkah
        berikutnya kita akan menginstal Zustand dan membuat store pertama.
      </div>
    </li>
  )
}