export default function AuditPerforma() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Audit Performa (Lighthouse)
      </h2>
      <p className="mt-3 text-gray-600">
        Sebelum rilis, cek kualitas aplikasi dengan Lighthouse di Chrome
        DevTools. Targetkan skor di atas 90 untuk Performance, Accessibility,
        dan Best Practices.
      </p>
      <p className="mt-2 text-sm text-gray-600">Tips optimasi cepat:</p>
      <ul className="mt-1 list-inside list-disc space-y-1 text-gray-600">
        <li>
          Gunakan <code>&lt;Image /&gt;</code> dari Next.js untuk semua gambar.
        </li>
        <li>
          Gunakan <code>next/font</code> untuk mencegah Layout Shift (CLS).
        </li>
        <li>
          Hapus library yang tidak terpakai (<code>npm prune</code>).
        </li>
        <li>
          Gunakan <code>dynamic</code> import untuk komponen berat.
        </li>
      </ul>
    </li>
  )
}