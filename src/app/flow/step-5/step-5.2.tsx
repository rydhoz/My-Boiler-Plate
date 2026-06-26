import { CodeBlock } from "../utils/code-block";

export default function ServiceLayer() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Membuat Service Layer
      </h2>
      <p className="mt-3 text-gray-600">
        Jangan menulis query Prisma langsung di komponen UI. Buat Service Layer
        agar logika bisnis terpusat, mudah diuji, dan bisa dipakai ulang. Contoh:{' '}
        <code>src/services/user.service.ts</code>
      </p>
      <CodeBlock
        lang="ts"
        code={`'use server'

import { db } from '@/lib/db'
import { auth } from '@/server/auth'
import { revalidatePath } from 'next/cache'

export async function getUserProfile() {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, name: true, email: true, image: true },
  })

  if (!user) throw new Error('User not found')
  return user
}

export async function updateProfile(data: { name: string }) {
  const session = await auth()
  if (!session?.user?.id) throw new Error('Unauthorized')

  try {
    await db.user.update({
      where: { id: session.user.id },
      data: { name: data.name },
    })

    revalidatePath('/dashboard/profile')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Gagal memperbarui profil' }
  }
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            Gunakan <code>select</code> untuk membatasi kolom yang diambil.
          </li>
          <li>
            Tangani error dengan <code>try/catch</code> agar client menerima
            respons yang jelas.
          </li>
          <li>
            File ini adalah <strong>Server Actions</strong> (karena direktif{' '}
            <code>&apos;use server&apos;</code>), bisa langsung digunakan di
            form atau event handler.
          </li>
        </ul>
      </div>
    </li>
  )
}