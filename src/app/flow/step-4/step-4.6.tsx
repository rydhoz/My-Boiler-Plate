import { CodeBlock } from "../utils/code-block";

export default function LoginAndRegisterPageMinimalis() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          6
        </span>
        Halaman Login & Register (Minimalis)
      </h2>
      <p className="mt-3 text-gray-600">
        Buat halaman register di{' '}
        <code>src/app/(auth)/register/page.tsx</code> dan login di{' '}
        <code>src/app/(auth)/login/page.tsx</code>. Kedua halaman menggunakan
        Client Component agar bisa menampilkan error dari server.
      </p>

      {/* Register */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-600">
          Halaman Register
        </h3>
        <CodeBlock
          lang="tsx"
          code={`'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/lib/auth-service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function RegisterPage() {
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const formData = new FormData(e.currentTarget)
    try {
      await registerUser({
        email: formData.get('email') as string,
        name: formData.get('name') as string,
        password: formData.get('password') as string,
      })
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Gagal mendaftar')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Input name="name" placeholder="Nama" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">Daftar</Button>
        <p className="text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}`}
        />
      </div>

      {/* Login */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-600">
          Halaman Login (struktur serupa)
        </h3>
        <CodeBlock
          lang="tsx"
          code={`'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/lib/auth-service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const formData = new FormData(e.currentTarget)
    try {
      await loginUser({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      })
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Gagal login')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />
        <Button type="submit" className="w-full">Masuk</Button>
        <p className="text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}`}
        />
      </div>

      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Penjelasan:</strong> Kedua halaman adalah{' '}
        <strong>Client Component</strong> karena membutuhkan state untuk error
        dan router untuk redirect. Fungsi <code>registerUser</code> dan{' '}
        <code>loginUser</code> adalah Server Actions yang diimpor dari{' '}
        <code>@/lib/auth-service</code>.
      </div>
    </li>
  )
}