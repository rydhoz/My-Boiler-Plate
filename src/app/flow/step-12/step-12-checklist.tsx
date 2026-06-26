"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'step12-checklist'

const CHECKLIST_ITEMS = [
  'README.md',
  'Security Headers',
  'Lighthouse Audit',
  'Git Tag v1.0.0',
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

export default function Step12Checklist() {
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
        <span className="text-2xl">✅</span> Checklist Akhir Tahap 12
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
              <td className="py-2 pr-4">README.md</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[0]}
                  onChange={() => toggleItem(0)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                README lengkap dengan cara menjalankan, struktur folder, dan git convention.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Security Headers</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[1]}
                  onChange={() => toggleItem(1)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                <code>next.config.ts</code> memiliki headers X-Frame-Options, dll.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lighthouse Audit</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[2]}
                  onChange={() => toggleItem(2)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                Skor Performance &gt; 90, tidak ada error kritis.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Git Tag v1.0.0</td>
              <td className="py-2 pr-4">
                <input
                  type="checkbox"
                  checked={checklist[3]}
                  onChange={() => toggleItem(3)}
                  className="h-4 w-4 rounded accent-emerald-600"
                />
              </td>
              <td className="py-2">
                <code>git tag</code> menampilkan v1.0.0.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}