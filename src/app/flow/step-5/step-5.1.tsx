export default function DataFetchingStrategy() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Strategi Pengambilan Data (The Mindset)
      </h2>
      <p className="mt-3 text-gray-600">
        Di Next.js App Router, pilihlah metode pengambilan data sesuai
        kebutuhan. Tiga pilar utama yang akan kita gunakan:
      </p>
      <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
        <li>
          <strong>Data yang dibaca (Read)</strong> →{' '}
          <strong>Server Component</strong>: Ambil data langsung dari database
          atau API eksternal di dalam komponen tanpa mengirim kode ke client.
          <br />
          <code className="text-xs">
            const users = await db.user.findMany()
          </code>
        </li>
        <li>
          <strong>Data yang diubah (Create/Update/Delete)</strong> →{' '}
          <strong>Server Actions</strong>: Fungsi dengan direktif{' '}
          <code>&apos;use server&apos;</code> untuk memproses mutasi. Bisa
          dipanggil langsung dari form atau event handler Client Component.
        </li>
        <li>
          <strong>Interaksi kompleks & client‑side caching</strong> →{' '}
          <strong>TanStack Query</strong>: Untuk infinite scroll, polling,
          optimistic update, dan manajemen state server yang canggih di sisi
          client.
        </li>
      </ul>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Prinsip utama:</strong> Gunakan Server Component sebagai
        pilihan pertama. Client Component hanya jika membutuhkan interaktivitas
        atau state lokal. Dengan begitu, kamu mengirim lebih sedikit JavaScript
        ke browser.
      </div>
    </li>
  )
}