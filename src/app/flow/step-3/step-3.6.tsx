import { CodeBlock } from "../utils/code-block";

export default function DatabaseTest() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          6
        </span>
        Cara Tes Database
      </h2>
      <p className="mt-3 text-gray-600">
        Untuk membuktikan database sudah berfungsi, kita akan membuat tombol
        yang menambahkan data user ke database melalui Server Action.
      </p>

      <CodeBlock
        code={`import { db } from '@/lib/db'
import { Button } from '@/components/ui/button'
import { revalidatePath } from 'next/cache'

export default async function HomePage() {
  async function createUser() {
    'use server'
    try {
      await db.user.create({
        data: {
          email: \`user\${Math.random()}@test.com\`,
          name: 'User Test',
        },
      })
      revalidatePath('/')
    } catch (error) {
      console.error('Gagal membuat user:', error)
    }
  }

  const userCount = await db.user.count()

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <p className="text-sm text-gray-600">
        Jumlah user di database: <strong>{userCount}</strong>
      </p>
      <form action={createUser}>
        <Button type="submit">Tambah User ke Database</Button>
      </form>
    </div>
  )
}`}
        lang="tsx"
      />

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>
          <strong>Cara verifikasi:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Klik tombol, lalu lihat perubahan jumlah user di halaman.
          </li>
          <li>
            Jalankan <code>npx prisma studio</code> untuk melihat isi database
            secara visual di browser.
          </li>
          <li>
            Semua log error akan muncul di terminal tempat kamu menjalankan{' '}
            <code>next dev</code>.
          </li>
        </ul>
        <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Catatan:</strong> Fungsi <code>createUser</code> adalah{' '}
          <strong>Server Action</strong>. Ia hanya bisa dipanggil dari form atau
          event handler di Client Component. Jangan lupa{' '}
          <code>revalidatePath</code> agar tampilan diperbarui setelah data
          berubah.
        </div>
      </div>
    </li>
  )
}