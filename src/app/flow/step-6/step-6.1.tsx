import { CopyButton } from "../utils/copy-button";

export default function InstalasiFormValidation() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Instalasi Form & Validasi
      </h2>
      <p className="mt-3 text-gray-600">
        Pasang React Hook Form, Zod, dan adapter-nya agar form bisa
        terkelola dengan performa terbaik dan validasi yang ketat.
      </p>
      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install react-hook-form @hookform/resolvers zod" />
        <code>npm install react-hook-form @hookform/resolvers zod</code>
      </div>
      <div className="mt-3 space-y-1 text-sm text-gray-600">
        <p>
          <strong>react-hook-form</strong> — mengurangi re‑render, manajemen
          state form yang efisien.
        </p>
        <p>
          <strong>zod</strong> — validasi skema yang terintegrasi langsung
          dengan tipe TypeScript.
        </p>
        <p>
          <strong>@hookform/resolvers</strong> — menghubungkan Zod ke React
          Hook Form tanpa konfigurasi tambahan.
        </p>
      </div>
    </li>
  )
}