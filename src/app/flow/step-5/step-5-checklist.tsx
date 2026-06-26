"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'step5-checklist'

const CHECKLIST_ITEMS = [
  'Service Layer',
  'Query Provider',
  'Custom Hooks',
  'Revalidation',
  'Notifications',
] as const

function loadChecklist(): boolean[] {
  if (typeof window === 'undefined') return Array(CHECKLIST_ITEMS.length).fill(false)
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length === CHECKLIST_ITEMS.length) {
        return parsed
      }
    }
  } catch {
    // abaikan error parsing
  }
  return Array(CHECKLIST_ITEMS.length).fill(false)
}

export default function Step5Checklist() {
  const [checklist, setChecklist] = useState<boolean[]>(loadChecklist)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checklist))
  }, [checklist])

  const toggleItem = (index: number) => {
    setChecklist((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
        <span className="text-2xl">✅</span> Checklist Akhir Tahap 5
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 pr-4 font-semibold">Item</th>
              <th className="py-2 pr-4 font-semibold">Status</th>
              <th className="py-2 font-semibold">Verifikasi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Service Layer</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[0]}
                  onChange={() => toggleItem(0)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Ada file di <code>src/services/</code> yang berisi fungsi{' '}
                <code>&apos;use server&apos;</code>.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Query Provider</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[1]}
                  onChange={() => toggleItem(1)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                QueryProvider sudah membungkus aplikasi di layout.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Custom Hooks</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[2]}
                  onChange={() => toggleItem(2)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Bisa memanggil <code>useUser()</code> dan mendapatkan data
                user.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Revalidation</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[3]}
                  onChange={() => toggleItem(3)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Setelah update data, halaman otomatis ter-refresh (
                <code>revalidatePath</code>).
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Notifications</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[4]}
                  onChange={() => toggleItem(4)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Muncul toast pesan sukses/error saat mutasi data.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}