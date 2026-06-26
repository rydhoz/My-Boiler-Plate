import { CodeBlock } from "../utils/code-block";

export default function CreateValidationSchema() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Membuat Schema Validasi
      </h2>
      <p className="mt-3 text-gray-600">
        Simpan aturan validasi di folder terpisah agar bisa dipakai ulang di
        client dan server. Contoh: <code>src/validations/auth.ts</code>
      </p>
      <CodeBlock
        lang="ts"
        code={`import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak cocok",
  path: ["confirmPassword"],
})

export type RegisterInput = z.infer<typeof registerSchema>`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Jangan simpan <code>confirmPassword</code> ke
        database. Gunakan hanya untuk validasi di form, lalu ambil{' '}
        <code>email</code>, <code>name</code>, dan <code>password</code> saja saat
        mengirim ke server.
      </div>
    </li>
  )
}