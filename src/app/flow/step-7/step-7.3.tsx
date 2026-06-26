import { CodeBlock } from "../utils/code-block";

export default function CreateUIStore() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Membuat UI Store
      </h2>
      <p className="mt-3 text-gray-600">
        Buat store pertama untuk mengelola state UI yang bisa dipakai di banyak
        komponen, misalnya status sidebar. Simpan di{' '}
        <code>src/stores/ui-store.ts</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
  openSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      isSidebarOpen: false,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      closeSidebar: () => set({ isSidebarOpen: false }),
      openSidebar: () => set({ isSidebarOpen: true }),
    }),
    {
      name: 'ui-storage',
    }
  )
)`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Penjelasan:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            <code>persist</code> middleware menyimpan state ke{' '}
            <strong>localStorage</strong> otomatis. Sidebar yang dibuka akan
            tetap terbuka meskipun browser di-refresh.
          </li>
          <li>
            Store ini hanya untuk <strong>UI state</strong>. Jangan masukkan
            data user atau produk ke sini.
          </li>
        </ul>
      </div>
    </li>
  )
}