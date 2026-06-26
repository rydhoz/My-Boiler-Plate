import { z } from 'zod'

// 1. Definisikan skema validasi menggunakan Zod
const envSchema = z.object({
  // Variabel yang WAJIB ada
  DATABASE_URL: z
    .string()
    .url({ message: 'DATABASE_URL harus berupa URL yang valid' }),
  NEXTAUTH_SECRET: z
    .string()
    .min(1, { message: 'NEXTAUTH_SECRET wajib diisi' }),

  // Variabel yang OPSIONAL (boleh kosong)
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  // Contoh validasi angka (Zod otomatis mengubah string dari .env menjadi number)
  PORT: z.string().default('3000').transform(Number),
})

// 2. Validasi process.env terhadap skema
const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables:')
  console.error(_env.error.format())

  // Menghentikan aplikasi agar tidak berjalan dalam kondisi rusak
  throw new Error('Invalid environment variables')
}

// 3. Export variabel yang sudah tervalidasi dan bertipe data (Type-safe)
export const env = _env.data
