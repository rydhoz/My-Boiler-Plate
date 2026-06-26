import { CodeBlock } from "../utils/code-block";

export default function DoubleLayerValidation() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Validasi Double-Layer (Client & Server)
      </h2>
      <p className="mt-3 text-gray-600">
        Validasi di client bisa dilewati. Selalu lakukan validasi ulang di
        Server Action dengan schema yang sama agar data tetap aman.
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Update <code>src/lib/auth-service.ts</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`import { registerSchema } from '@/validations/auth'

export async function registerUser(data: unknown) {
  const validatedFields = registerSchema.safeParse(data)

  if (!validatedFields.success) {
    throw new Error('Data yang dikirim tidak valid')
  }

  const { email, name, password } = validatedFields.data
  // ... sisa kode register (bcrypt, prisma, dll)
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            Client validation = UX (cepat, responsif). Server validation = security
            (tidak bisa ditembus).
          </li>
          <li>
            Gunakan <code>safeParse</code> (bukan <code>parse</code>) agar bisa
            mengembalikan error yang terstruktur, tidak langsung throw.
          </li>
          <li>
            Parameter <code>data</code> sebaiknya bertipe <code>unknown</code>{' '}
            (bukan <code>any</code>) agar lebih aman.
          </li>
        </ul>
      </div>
    </li>
  )
}