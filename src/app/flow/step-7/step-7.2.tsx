import { CopyButton } from "../utils/copy-button";

export default function InstalasiZustand() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Instalasi Zustand
      </h2>
      <p className="mt-3 text-gray-600">
        Zustand adalah library state management yang sangat ringan untuk React.
        Tidak memerlukan Provider, tidak ada boilerplate panjang, dan sangat
        cocok untuk Client State seperti sidebar, modal, atau filter global.
      </p>
      <div className="relative mt-3 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install zustand" />
        <code>npm install zustand</code>
      </div>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Kapan pakai Zustand vs TanStack Query?</strong>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>
            <strong>Zustand</strong> → data yang hanya hidup di browser (UI
            state, preferensi, wizard form).
          </li>
          <li>
            <strong>TanStack Query</strong> → data yang sumber aslinya dari
            server/database.
          </li>
        </ul>
        <p className="mt-2">
          Keduanya bisa dipakai bersamaan tanpa konflik.
        </p>
      </div>
    </li>
  )
}