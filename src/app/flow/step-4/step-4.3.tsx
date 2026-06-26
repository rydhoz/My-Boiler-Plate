import { CodeBlock } from "../utils/code-block";

export default function CreateRouteAPI() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Membuat API Route
      </h2>
      <p className="mt-3 text-gray-600">
        Auth.js (NextAuth) memerlukan satu endpoint API untuk menangani semua
        proses autentikasi: login, logout, callback dari provider eksternal,
        dan session management. Buat file{' '}
        <code>src/app/api/auth/[...nextauth]/route.ts</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`import { handlers } from "@/server/auth"
export const { GET, POST } = handlers`}
      />
      <div className="mt-3 space-y-2 text-sm text-gray-600">
        <p>
          Hanya dengan dua baris ini, aplikasi sudah siap menangani:
        </p>
        <ul className="list-disc list-inside">
          <li>Sign in dengan kredensial atau Google</li>
          <li>Sign out</li>
          <li>Pengecekan sesi</li>
        </ul>
        <p>
          Sekarang kamu bisa mengakses <code>/api/auth/signin</code> untuk
          halaman login bawaan (jika dibutuhkan).
        </p>
      </div>
    </li>
  )
}