import { CodeBlock } from "../utils/code-block";

export default function EnvironmentVariableValidation() {
    return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
              5
            </span>
            Environment Variable Validation (Fail Fast)
          </h2>
          <p className="mt-3 text-gray-600">
            Kita memastikan aplikasi langsung mati jika konfigurasi{' '}
            <code>.env</code> salah atau kurang.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                A. Buat <code>.env.example</code>
              </h3>
              <CodeBlock
                code={`DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
NEXTAUTH_SECRET="your_secret_here"
PORT="3000"`}
                lang="text"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                B. Buat <code>src/config/env.ts</code>
              </h3>
              <p className="mt-1 text-gray-600">Gunakan Zod untuk validasi:</p>
              <CodeBlock
                code={`import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  PORT: z.string().transform(Number).default(3000),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data`}
                lang="ts"
              />
              <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
                <strong>Best Practice:</strong> Selalu gunakan{' '}
                <code>safeParse</code> daripada <code>parse</code> agar kamu
                bisa memberikan pesan error yang lebih cantik di terminal
                sebelum aplikasi benar-benar throw Error.
              </div>
            </div>
          </div>
        </li>
    )
}