"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'step1-checklist'

const CHECKLIST_ITEMS = [
  'Project Structure',
  'TypeScript',
  'Prettier',
  'Husky',
  'Env Validation',
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

export default function Step1Checklist() {
  const [checklist, setChecklist] = useState<boolean[]>(loadChecklist)

  // Simpan ke localStorage setiap kali checklist berubah
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
          <span className="text-2xl">✅</span> Checklist Akhir Tahap 1
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
                <td className="py-2 pr-4">Project Structure</td>
                <td className="py-2 pr-4">
                  <input
                    type="checkbox"
                    checked={checklist[0]}
                    onChange={() => toggleItem(0)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                </td>
                <td className="py-2">
                  Folder <code>src</code> ada, folder <code>app</code> ada di dalamnya.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">TypeScript</td>
                <td className="py-2 pr-4">
                  <input
                    type="checkbox"
                    checked={checklist[1]}
                    onChange={() => toggleItem(1)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                </td>
                <td className="py-2">
                  <code>strict: true</code> aktif, tidak ada error tipe di editor.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Prettier</td>
                <td className="py-2 pr-4">
                  <input
                    type="checkbox"
                    checked={checklist[2]}
                    onChange={() => toggleItem(2)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                </td>
                <td className="py-2">
                  Save file → Kode otomatis rapi & Tailwind terurut.
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Husky</td>
                <td className="py-2 pr-4">
                  <input
                    type="checkbox"
                    checked={checklist[3]}
                    onChange={() => toggleItem(3)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                </td>
                <td className="py-2">
                  <code>git commit -m &quot;update&quot;</code> → DITOLAK oleh commitlint.
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Env Validation</td>
                <td className="py-2 pr-4">
                  <input
                    type="checkbox"
                    checked={checklist[4]}
                    onChange={() => toggleItem(4)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                </td>
                <td className="py-2">
                  Hapus <code>DATABASE_URL</code> di <code>.env</code> →{' '}
                  <code>npm run dev</code> → CRASH.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}
