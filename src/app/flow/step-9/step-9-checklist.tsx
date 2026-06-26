"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'step9-checklist'

const CHECKLIST_ITEMS = [
  'Storybook Init',
  'Path Alias',
  'Tailwind Setup',
  'First Story',
  'Dark Mode',
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

export default function Step9Checklist() {
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
        <span className="text-2xl">✅</span> Checklist Akhir Tahap 9
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
              <td className="py-2 pr-4">Storybook Init</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[0]}
                  onChange={() => toggleItem(0)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Jalankan <code>npm run storybook</code> → Browser terbuka di port 6006.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Path Alias</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[1]}
                  onChange={() => toggleItem(1)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Komponen yang menggunakan <code>@/</code> tidak error di Storybook.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Tailwind Setup</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[2]}
                  onChange={() => toggleItem(2)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Komponen di Storybook sudah memiliki styling Tailwind.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">First Story</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[3]}
                  onChange={() => toggleItem(3)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Muncul menu UI/Button dengan varian Primary, Destructive, dll.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Dark Mode</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[4]}
                  onChange={() => toggleItem(4)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Bisa switch tema di panel Storybook → warna komponen berubah.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}