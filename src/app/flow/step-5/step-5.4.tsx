import { CodeBlock } from "../utils/code-block";

export default function CustomHooks() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Membuat Custom Hooks
      </h2>
      <p className="mt-3 text-gray-600">
        Bungkus TanStack Query dalam custom hook agar logika fetching tidak
        mengotori komponen UI. Contoh: <code>src/hooks/use-user.ts</code>
      </p>
      <CodeBlock
        lang="ts"
        code={`'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUserProfile, updateProfile } from '@/services/user.service'
import { toast } from 'sonner'

export function useUser() {
  const queryClient = useQueryClient()

  const { data: user, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await getUserProfile()
      return res
    },
  })

  const { mutate: updateName } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      toast.success('Profil berhasil diperbarui!')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Gagal memperbarui profil')
    },
  })

  // Gunakan: updateName({ name: 'Nama Baru' })
  return { user, isLoading, updateName }
}`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Custom hook menyembunyikan detail
        teknis query/mutation dari komponen. Komponen cukup memanggil{' '}
        <code>{`const { user, updateName } = useUser()`}</code> dan menggunakan
        data yang sudah rapi.
      </div>
    </li>
  )
}