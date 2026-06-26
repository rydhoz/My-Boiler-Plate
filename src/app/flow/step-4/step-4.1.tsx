import { CopyButton } from "../utils/copy-button";

export default function InstalasiAuthentication() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Instalasi Autentikasi
      </h2>
      <p className="mt-3 text-gray-600">
        Kita akan menggunakan <strong>Auth.js</strong> (NextAuth v5) yang sudah
        mendukung App Router. Pasang juga adapter Prisma agar bisa menyimpan
        sesi dan akun di database, serta bcrypt untuk hashing password.
      </p>

      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install next-auth@beta @auth/prisma-adapter bcryptjs\nnpm install -D @types/bcryptjs" />
        <code>
          npm install next-auth@beta @auth/prisma-adapter bcryptjs
          <br />
          npm install -D @types/bcryptjs
        </code>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>
          <strong>Penjelasan paket:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>next-auth@beta</code> — core Auth.js (NextAuth v5) untuk
            Next.js App Router.
          </li>
          <li>
            <code>@auth/prisma-adapter</code> — menyimpan user, sesi, dan akun
            ke database melalui Prisma.
          </li>
          <li>
            <code>bcryptjs</code> — menghash password sebelum disimpan di
            database.
          </li>
        </ul>

        <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Catatan:</strong> Nantinya kita juga perlu membuat{' '}
          <code>AUTH_SECRET</code> di <code>.env</code> untuk menandatangani
          token JWT. Jalankan <code>npx auth secret</code> untuk membuatnya
          secara otomatis (akan dijelaskan di langkah selanjutnya).
        </div>
      </div>
    </li>
  )
}