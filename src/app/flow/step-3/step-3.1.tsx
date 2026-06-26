import { CopyButton } from '../utils/copy-button'

export default function InstalasiPrisma() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Instalasi Prisma
      </h2>
      <p className="mt-3 text-gray-600">
        Pertama, kita install dua package:{' '}
        <strong>prisma</strong> (CLI untuk development) dan{' '}
        <strong>@prisma/client</strong> (library untuk menjalankan query di kode).
      </p>

      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install -D prisma\nnpm install @prisma/client\nnpx prisma init" />
        <code>
          npm install -D prisma
          <br />
          npm install @prisma/client
          <br />
          npx prisma init
        </code>
      </div>

      <div className="mt-4 space-y-3 text-sm text-gray-600">
        <p>
          <strong>Output dari </strong><code>npx prisma init</code>:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Membuat folder <code>prisma/</code> dengan file{' '}
            <code>schema.prisma</code> (tempat mendefinisikan model data).
          </li>
          <li>
            Menambahkan variabel <code>DATABASE_URL</code> di file{' '}
            <code>.env</code> (jika belum ada).
          </li>
        </ul>
        <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Penting:</strong> Sesuaikan <code>DATABASE_URL</code> sesuai
          database yang akan digunakan, misal:
          <br />
          <code className="text-xs">
            postgresql://user:password@localhost:5432/mydb
          </code>{' '}
          atau{' '}
          <code className="text-xs">file:./dev.db</code> untuk SQLite.
        </div>
        <p>
          Sekarang kita siap untuk mendefinisikan model data di langkah
          berikutnya.
        </p>
      </div>
    </li>
  )
}