import { CodeBlock } from '../utils/code-block'

export default function ConfigurationDatabase() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Konfigurasi Database (SQLite)
      </h2>
      <p className="mt-3 text-gray-600">
        Untuk development, gunakan SQLite karena praktis: database berupa
        satu file tanpa perlu install server database. Nanti di production bisa
        diganti ke PostgreSQL atau MySQL.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            A. Ubah file <code>.env</code>
          </h3>
          <CodeBlock code={`DATABASE_URL="file:./dev.db"`} lang="env" />
          <p className="mt-1 text-sm text-gray-600">
            Arahkan Prisma ke file SQLite bernama <code>dev.db</code> di root
            proyek.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            B. Ubah <code>prisma/schema.prisma</code>
          </h3>
          <CodeBlock
            code={`datasource db {
  provider = "sqlite"   // Ubah dari "postgresql" menjadi "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}`}
            lang="prisma"
          />
          <p className="mt-1 text-sm text-gray-600">
            Bagian <code>generator client</code> biasanya sudah ada; biarkan
            saja.
          </p>
        </div>

        <div className="rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Langkah selanjutnya (setelah model dibuat):</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>
              Jalankan <code>npx prisma migrate dev --name init</code> untuk
              membuat file <code>dev.db</code> dan menerapkan skema.
            </li>
            <li>
              Setiap kali skema berubah, ulangi perintah migrasi atau gunakan{' '}
              <code>npx prisma db push</code> untuk prototyping.
            </li>
            <li>
              <strong>Penting:</strong> tambahkan <code>*.db</code> ke{' '}
              <code>.gitignore</code> agar file database lokal tidak ikut
              terupload.
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}