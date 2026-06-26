import { CopyButton } from "../utils/copy-button";

export default function IntegrasiSentry() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Integrasi Sentry (The Error Watchdog)
      </h2>
      <p className="mt-3 text-gray-600">
        Sentry mengirim notifikasi real-time saat terjadi error di browser
        user, lengkap dengan baris kode, browser, dan urutan klik sebelum
        error. Daftar gratis di{' '}
        <a href="https://sentry.io" className="text-blue-600 hover:underline">
          sentry.io
        </a>
        , lalu dapatkan <code>DSN</code> proyek.
      </p>
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600">
          Instalasi & Setup Otomatis
        </h3>
        <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
          <CopyButton text="npx @sentry/wizard@latest -i nextjs" />
          <code>npx @sentry/wizard@latest -i nextjs</code>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Wizard akan membuat file konfigurasi (
          <code>sentry.client.config.ts</code>,{' '}
          <code>sentry.server.config.ts</code>,{' '}
          <code>sentry.edge.config.ts</code>), file{' '}
          <code>src/instrumentation.ts</code>, dan menambahkan{' '}
          <code>SENTRY_DSN</code> ke <code>.env</code>.
        </p>
        <div className="mt-2 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Catatan:</strong> Sentry free tier cukup untuk proyek kecil.
          Pastikan <code>sentry.client.config.ts</code> sudah ada agar error
          di browser tertangkap.
        </div>
      </div>
    </li>
  )
}