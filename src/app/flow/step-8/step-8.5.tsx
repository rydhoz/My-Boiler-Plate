export default function TestingBestPractices() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Best Practices & CI
      </h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-gray-600">
        <li>
          <strong>Struktur file:</strong> Letakkan test di folder{' '}
          <code>__tests__</code> di samping kode yang diuji, atau di folder{' '}
          <code>tests/</code> terpusat.
        </li>
        <li>
          <strong>Coverage:</strong> Jalankan{' '}
          <code>npx vitest run --coverage</code> (perlu install{' '}
          <code>@vitest/coverage-v8</code>).
        </li>
        <li>
          <strong>CI Pipeline:</strong> Tambahkan script di{' '}
          <code>package.json</code>:
          <code className="text-xs ml-2">
            &quot;test&quot;: &quot;vitest run&quot;
          </code>
          ,{' '}
          <code className="text-xs">
            &quot;test:e2e&quot;: &quot;playwright test&quot;
          </code>
          .
        </li>
        <li>
          <strong>Jangan menguji implementasi detail:</strong> Uji perilaku,
          bukan state internal. Gunakan <code>screen.getByRole</code> daripada
          query class.
        </li>
      </ul>
    </li>
  )
}