export default function ADRDocumentation() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Dokumentasi Arsitektur (ADR)
      </h2>
      <p className="mt-3 text-gray-600">
        Buat catatan setiap kali mengambil keputusan besar. Contoh:{' '}
        <code>docs/adr-001-database-choice.md</code>
      </p>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <p className="text-gray-600">
          <strong>Konteks:</strong> Butuh database yang cepat di-setup untuk
          MVP.
          <br />
          <strong>Keputusan:</strong> SQLite untuk dev, PostgreSQL untuk
          produksi.
          <br />
          <strong>Alasan:</strong> SQLite tidak butuh server eksternal,
          mempermudah onboarding developer baru.
          <br />
          <strong>Konsekuensi:</strong> Harus melakukan migrasi schema yang
          teliti saat pindah ke Postgres.
        </p>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Gunakan template ADR di{' '}
        <a href="https://adr.github.io/" className="text-blue-600 hover:underline">
          adr.github.io
        </a>{' '}
        untuk format yang konsisten.
      </p>
    </li>
  )
}