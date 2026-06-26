"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'step2-checklist'

const CHECKLIST_ITEMS = [
  'Dark Mode',
  'Shadcn UI',
  'Root Layout',
  'Responsivitas',
  'Font Inter',
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

export default function Step2Checklist() {
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
        <span className="text-2xl">✅</span> Checklist Akhir Tahap 2
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
              <td className="py-2 pr-4">Dark Mode</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[0]}
                  onChange={() => toggleItem(0)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Klik tombol toggle → warna background berubah.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Shadcn UI</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[1]}
                  onChange={() => toggleItem(1)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Gunakan &lt;Button /&gt; di page → tampilan rapi.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Root Layout</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[2]}
                  onChange={() => toggleItem(2)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Navbar & Footer muncul di semua halaman.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Responsivitas</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[3]}
                  onChange={() => toggleItem(3)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Cek di browser (Inspect → Mobile view) → tidak berantakan.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Font Inter</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[4]}
                  onChange={() => toggleItem(4)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Teks terlihat bersih dan tidak menggunakan font default browser.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}