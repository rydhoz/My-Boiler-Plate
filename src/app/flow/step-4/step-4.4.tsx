import { CodeBlock } from "../utils/code-block";

export default function CreateAuthService() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Membuat Auth Service (Server Actions)
      </h2>
      <p className="mt-3 text-gray-600">
        Pisahkan logika register, login, dan logout ke file terpisah agar kode
        komponen tetap bersih. Buat file{' '}
        <code>src/lib/auth-service.ts</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`'use server'

import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { signIn, signOut } from '@/server/auth'
import { redirect } from 'next/navigation'

export async function registerUser(data: {
  email: string
  name: string
  password: string
}) {
  const exists = await db.user.findUnique({
    where: { email: data.email },
  })
  if (exists) throw new Error('Email sudah terdaftar')

  const hashedPassword = await bcrypt.hash(data.password, 10)
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashedPassword,
    },
  })

  await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirectTo: '/dashboard',
  })
}

export async function loginUser(data: {
  email: string
  password: string
}) {
  await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirectTo: '/dashboard',
  })
}

export async function logout() {
  await signOut({ redirectTo: '/' })
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Semua fungsi di atas adalah{' '}
        <strong>Server Actions</strong>. Mereka bisa dipanggil langsung dari
        form di Client Component. Dengan memisahkannya, kamu bisa
        menggunakannya di berbagai halaman tanpa menulis ulang kode.
      </div>
    </li>
  )
}