import { CodeBlock } from "../utils/code-block";

export default function ReusableFormImplementation() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Implementasi Form Reusable (shadcn/ui)
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan wrapper <code>Form</code> dari shadcn/ui yang sudah terintegrasi
        dengan React Hook Form dan Zod. Buat komponen{' '}
        <code>src/components/forms/RegisterForm.tsx</code>:
      </p>
      <CodeBlock
        lang="tsx"
        code={`'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { registerSchema, RegisterInput } from '@/validations/auth'
import { registerUser } from '@/lib/auth-service'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { toast } from 'sonner'

export function RegisterForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  })

  async function onSubmit(values: RegisterInput) {
    startTransition(async () => {
      try {
        await registerUser({ 
          email: values.email, 
          name: values.name, 
          password: values.password 
        })
        toast.success('Akun berhasil dibuat!')
      } catch (error: any) {
        toast.error(error.message || 'Terjadi kesalahan')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Password</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Memproses...' : 'Daftar Sekarang'}
        </Button>
      </form>
    </Form>
  )
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            Gunakan <code>useTransition</code> untuk menjaga UI tetap responsif
            saat Server Action berjalan.
          </li>
          <li>
            Jangan kirim <code>confirmPassword</code> ke server; hanya untuk
            validasi lokal.
          </li>
          <li>
            Komponen <code>Form</code> dari shadcn/ui membuat tampilan error
            otomatis di bawah setiap input.
          </li>
        </ul>
      </div>
    </li>
  )
}