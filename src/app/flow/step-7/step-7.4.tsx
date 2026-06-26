import { CodeBlock } from "../utils/code-block";

export default function ImplementStoreInComponents() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          4
        </span>
        Mengimplementasikan Store di Komponen
      </h2>
      <p className="mt-3 text-gray-600">
        Hubungkan store Zustand ke Navbar dan Sidebar. Kedua komponen harus
        bertanda <code>&apos;use client&apos;</code> karena menggunakan hooks.
      </p>

      <div className="mt-4 space-y-4">
        {/* A. Navbar */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            A. Navbar (<code>src/components/layouts/navbar.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Tambahkan tombol hamburger yang membaca dan mengubah state sidebar.
          </p>
          <CodeBlock
            lang="tsx"
            code={`'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useUIStore } from '@/stores/ui-store'

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar } = useUIStore()

  return (
    <nav className="flex items-center p-4 border-b">
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <X /> : <Menu />}
      </Button>
      <span className="ml-4 font-bold">My App</span>
    </nav>
  )
}`}
          />
          <p className="mt-2 text-sm text-gray-600">
            Ikon akan berganti antara <code>Menu</code> (sidebar tertutup) dan{' '}
            <code>X</code> (sidebar terbuka).
          </p>
        </div>

        {/* B. Sidebar */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            B. Sidebar (<code>src/components/layouts/sidebar.tsx</code>)
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Sidebar akan bergeser masuk/keluar layar mengikuti state dari store.
          </p>
          <CodeBlock
            lang="tsx"
            code={`'use client'

import { useUIStore } from '@/stores/ui-store'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const { isSidebarOpen } = useUIStore()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full w-64 bg-slate-100 transition-transform duration-300 z-50',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="p-6">
        <h2 className="font-bold mb-4">Menu Utama</h2>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="block p-2 hover:bg-slate-200 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/settings" className="block p-2 hover:bg-slate-200 rounded">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}`}
          />
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            Gunakan <code>useUIStore()</code> hanya di Client Component.
          </li>
          <li>
            Fungsi <code>cn</code> berasal dari <code>@/lib/utils</code> (dibuat
            otomatis oleh shadcn/ui).
          </li>
          <li>
            Pass <code>isSidebarOpen</code> sebagai props jika perlu membacanya
            di Server Component.
          </li>
        </ul>
      </div>
    </li>
  )
}