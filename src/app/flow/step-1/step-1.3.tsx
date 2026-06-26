"use client"

import { useState } from "react"
import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function FormattingAndLinting() {
  const [showFormattingDetail, setShowFormattingDetail] = useState(false)
// const [showTsExpl, setShowTsExpl] = useState(false)
    return (
        <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
  <h2 className="flex items-center gap-3 text-xl font-bold">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
      3
    </span>
    Formatting & Linting
  </h2>
  <p className="mt-3 text-gray-600">
    Agar kode seragam siapapun yang menulisnya.
  </p>

  {/* Tombol Collapse untuk Penjelasan Detail */}
  <button
    onClick={() => setShowFormattingDetail(!showFormattingDetail)}
    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-4 py-2 text-sm font-medium text-gray-600 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all duration-200 hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"
  >
    {showFormattingDetail ? 'Sembunyikan Penjelasan Detail' : 'Tampilkan Penjelasan Detail'}
    <span className={`transform transition-transform ${showFormattingDetail ? 'rotate-180' : ''}`}>▼</span>
  </button>

  {/* Collapse: Penjelasan Detail */}
  {showFormattingDetail && (
    <div className="mt-4 space-y-4 border-l-4 border-gray-300 pl-4">
      <div>
        <h4 className="text-base font-semibold text-gray-700">
          Mengapa Perlu Prettier & ESLint?
        </h4>
        <p className="text-sm text-gray-600">
          Prettier menangani <strong>format visual</strong> kode (spasi, koma, lebar baris) secara otomatis.
          ESLint menangani <strong>logika dan kualitas kode</strong> (variabel tidak terpakai, hook rules, aksesibilitas).
          Keduanya saling melengkapi, bukan bersaing.
        </p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-gray-700">
          A. Install Prettier & Plugin Tailwind
        </h4>
        <p className="text-sm text-gray-600">
          <code>prettier-plugin-tailwindcss</code> akan mengurutkan class Tailwind sesuai standar resmi,
          sehingga posisi class selalu konsisten di seluruh proyek. Ini mencegah konflik urutan yang bisa
          menyebabkan tampilan berbeda antar developer.
        </p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-gray-700">
          B. Konfigurasi <code>.prettierrc</code> & <code>.prettierignore</code>
        </h4>
        <p className="text-sm text-gray-600">
          <strong>semi: false</strong> – tidak menggunakan titik koma di akhir baris (gaya modern).<br />
          <strong>singleQuote: true</strong> – pakai kutip satu, lebih bersih.<br />
          <strong>trailingComma: es5</strong> – koma di akhir item array/objek, memudahkan diff git.<br />
          <strong>printWidth: 80</strong> – batas lebar baris, memaksa kode terbaca tanpa scroll horizontal.<br />
          <strong>tabWidth: 2</strong> – indentasi 2 spasi, standar di banyak proyek.<br />
          <strong>plugins</strong> – mengaktifkan sorting Tailwind otomatis.
        </p>
        <p className="text-sm text-gray-600 mt-1">
          <code>.prettierignore</code> mencegah Prettier memproses folder yang tidak perlu (node_modules, .next, dist, public)
          agar tidak memperlambat atau merusak file build.
        </p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-gray-700">
          C. Integrasi ESLint dengan Prettier
        </h4>
        <p className="text-sm text-gray-600">
          Kita menambahkan <code>eslint-config-prettier</code> ke <code>.eslintrc.json</code>.
          Package ini mematikan semua aturan ESLint yang bisa bentrok dengan Prettier.
          Tanpa ini, ESLint akan terus menerus mengeluh tentang format yang sudah ditangani Prettier,
          menyebabkan pengalaman development yang buruk.
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Script <code>format</code> dan <code>lint</code> di <code>package.json</code> memudahkan
          seluruh tim untuk menjalankan pengecekan hanya dengan satu perintah.
        </p>
      </div>

      <div>
        <h4 className="text-base font-semibold text-gray-700">
          D. Setup Format‑on‑Save (Opsional tapi Direkomendasikan)
        </h4>
        <p className="text-sm text-gray-600">
          Mengaktifkan format otomatis setiap kali menyimpan file di editor akan menghilangkan
          kebutuhan untuk menjalankan Prettier secara manual. File <code>.vscode/settings.json</code>
          bisa di-commit agar semua anggota tim mendapatkan pengalaman yang sama.
        </p>
      </div>
    </div>
  )}

  {/* Sub-langkah tetap terlihat */}
  <div className="mt-4 space-y-4">
    <div>
      <h3 className="text-sm font-semibold text-gray-600">
        A. Install Prettier, Plugin Tailwind, & ESLint Config
      </h3>
      <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
        <CopyButton text="npm install -D prettier prettier-plugin-tailwindcss eslint-config-prettier" />
        <code>npm install -D prettier prettier-plugin-tailwindcss eslint-config-prettier</code>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600">
        B. Buat <code>.prettierrc</code> & <code>.prettierignore</code>
      </h3>
      <CodeBlock
        code={`// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}

// .prettierignore
node_modules
.next
dist
public`}
        lang="json"
      />
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600">
        C. Integrasi ESLint dengan Prettier
      </h3>
      <p className="mt-1 text-gray-600">
        Perbarui <code>.eslintrc.json</code> agar ESLint tidak bertentangan dengan Prettier.
      </p>
      <CodeBlock
        code={`{
  "extends": [
    "next/core-web-vitals",
    "prettier"   // harus ada eslint-config-prettier terinstall
  ]
}`}
        lang="json"
      />
      <div className="mt-2 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Tambahkan script <code>format</code> dan <code>lint</code> di <code>package.json</code>:
        <CodeBlock
          code={`"scripts": {
  "lint": "next lint",
  "format": "prettier --write ."
}`}
          lang="json"
        />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-600">
        D. Setup Format‑on‑Save (Opsional)
      </h3>
      <p className="mt-1 text-gray-600">
        Untuk kenyamanan, aktifkan format otomatis di VS Code. Buat <code>.vscode/settings.json</code>:
      </p>
      <CodeBlock
        code={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`}
        lang="json"
      />
    </div>
  </div>
</li>
    )
}