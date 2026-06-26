import { CopyButton } from "../utils/copy-button";

export default function EksekusiMigrasi() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Eksekusi Migrasi
      </h2>
      <p className="mt-3 text-gray-600">
        Jalankan perintah berikut untuk membuat database fisik dari skema yang
        sudah didefinisikan, serta menghasilkan Prisma Client.
      </p>
      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npx prisma migrate dev --name init" />
        <code>npx prisma migrate dev --name init</code>
      </div>
      <p className="mt-3 text-gray-600">Perintah ini akan:</p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
        <li>
          Membuat file <code>dev.db</code> di <strong>root proyek</strong> (lokasi
          mengacu pada <code>DATABASE_URL</code> di <code>.env</code>).
        </li>
        <li>
          Membuat folder <code>prisma/migrations</code> yang berisi riwayat
          perubahan skema database.
        </li>
        <li>
          Menghasilkan <strong>Prisma Client</strong> yang otomatis disesuaikan
          dengan model terbaru.
        </li>
      </ul>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-600 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Penting:</strong> tambahkan <code>*.db</code> ke file{' '}
        <code>.gitignore</code> agar file database lokal tidak ikut ter-<em>commit</em>.
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Setelah migrasi berhasil, Prisma Client siap digunakan di kode aplikasi.
        Kamu bisa langsung mengimpor <code>@prisma/client</code> dan mulai
        melakukan query.
      </p>
    </li>
  )
}