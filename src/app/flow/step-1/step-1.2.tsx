"use client"

import { useState } from "react";
import { CodeBlock } from "../utils/code-block";


export default function TypeScriptConfiguration() {
const [showTsExpl, setShowTsExpl] = useState(false)
    return (
         <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
              2
            </span>
            Konfigurasi TypeScript (Strict Mode)
          </h2>
          <p className="mt-3 text-gray-600">
            Buka <code>tsconfig.json</code>. Kita ingin TypeScript menjadi
            &quot;polisi&quot; yang sangat ketat untuk mencegah bug di produksi.
            Berikut file lengkap yang sudah sesuai standar profesional Next.js.
          </p>

          {/* File tsconfig.json SELALU TERLIHAT */}
          <CodeBlock
            code={`{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": false,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "noEmit": true,
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}
            lang="json"
          />

          {/* Tombol untuk menampilkan penjelasan per opsi */}
          <button
            onClick={() => setShowTsExpl(!showTsExpl)}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#e0e5ec] px-4 py-2 text-sm font-medium text-gray-600 shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all duration-200 hover:shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]"
          >
            {showTsExpl
              ? 'Sembunyikan Penjelasan'
              : 'Tampilkan Penjelasan per Opsi'}
            <span
              className={`transform transition-transform ${showTsExpl ? 'rotate-180' : ''}`}
            >
              ▼
            </span>
          </button>

          {/* Collapse: Penjelasan satu per satu */}
          {showTsExpl && (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold">Opsi</th>
                    <th className="py-2 pr-4 font-semibold">Fungsi</th>
                    <th className="py-2 pr-4 font-semibold">Kenapa Dipakai</th>
                    <th className="py-2 font-semibold">
                      Resiko / Error yang Sering Dialami
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Baris strict – menantang, tetapi fondasi */}
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">strict</td>
                    <td className="py-2 pr-4">
                      Mengaktifkan semua aturan ketat (noImplicitAny,
                      strictNullChecks, dll.)
                    </td>
                    <td className="py-2 pr-4">
                      Mencegah banyak bug tersembunyi sejak dini.
                    </td>
                    <td className="py-2">
                      ⚠️ Bisa terasa "terlalu ketat" untuk pemula, banyak error
                      yang harus diperbaiki di awal.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">
                      noUncheckedIndexedAccess
                    </td>
                    <td className="py-2 pr-4">
                      Akses indeks array/objek harus divalidasi (undefined bisa
                      muncul)
                    </td>
                    <td className="py-2 pr-4">
                      Menghilangkan error “Cannot read property of undefined”.
                    </td>
                    <td className="py-2">
                      ⚠️ Kode menjadi lebih panjang karena harus selalu cek
                      `undefined`. Pada kode lama, banyak bagian yang harus
                      di-refactor.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">noUnusedLocals</td>
                    <td className="py-2 pr-4">
                      Variabel lokal yang tidak terpakai akan error
                    </td>
                    <td className="py-2 pr-4">
                      Kode bersih dari deklarasi sia‑sia.
                    </td>
                    <td className="py-2">
                      ⚠️ Variabel debugging atau sisa eksperimen akan
                      menyebabkan error. Gunakan prefix `_` atau hapus.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">noUnusedParameters</td>
                    <td className="py-2 pr-4">
                      Parameter fungsi yang tidak digunakan akan error
                    </td>
                    <td className="py-2 pr-4">
                      Mencegah fungsi menerima data yang diabaikan.
                    </td>
                    <td className="py-2">
                      ⚠️ Sering terjadi pada callback atau interface yang
                      memaksa parameter ada. Akali dengan `_` atau hapus jika
                      tidak diperlukan.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">noImplicitReturns</td>
                    <td className="py-2 pr-4">
                      Semua cabang fungsi harus mengembalikan nilai (jika tipe
                      return bukan void)
                    </td>
                    <td className="py-2 pr-4">
                      Menghindari nilai kembalian yang tidak disengaja
                      undefined.
                    </td>
                    <td className="py-2">
                      ⚠️ Pada fungsi dengan banyak percabangan, lupa menulis
                      `return` di salah satu cabang akan menyebabkan error.
                      Kadang merepotkan di awal.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">baseUrl & paths</td>
                    <td className="py-2 pr-4">
                      Memungkinkan import absolut (misal{' '}
                      <code>@/components</code>)
                    </td>
                    <td className="py-2 pr-4">
                      Mencegah <code>../../../</code> yang membingungkan.
                    </td>
                    <td className="py-2">
                      Jika tidak sinkron dengan konfigurasi bundler
                      (webpack/next.config.js), import bisa gagal saat build.
                      Pastikan path sesuai.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">target</td>
                    <td className="py-2 pr-4">
                      Versi JavaScript output (ES2017 sudah modern)
                    </td>
                    <td className="py-2 pr-4">
                      Menghasilkan kode yang efisien tanpa polifil berlebihan.
                    </td>
                    <td className="py-2">
                      Jika target terlalu tinggi, browser lama mungkin tidak
                      mendukung. Untuk Next.js ini aman karena ada kompilasi
                      lebih lanjut.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">lib</td>
                    <td className="py-2 pr-4">
                      Menyertakan tipe untuk DOM, ESNext, dll.
                    </td>
                    <td className="py-2 pr-4">
                      Agar bisa menggunakan API browser (window, document) dan
                      fitur terbaru.
                    </td>
                    <td className="py-2">
                      Lupa menambahkan "dom" akan menyebabkan error "Cannot find
                      name 'window'".
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">allowJs</td>
                    <td className="py-2 pr-4">
                      Mengizinkan file JavaScript di proyek
                    </td>
                    <td className="py-2 pr-4">
                      Proyek bisa bertahap migrasi ke TS.
                    </td>
                    <td className="py-2">
                      Jika tidak diatur, file .js tidak akan dikenali. Tapi jika
                      ada file JS dengan error, build bisa gagal.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">skipLibCheck</td>
                    <td className="py-2 pr-4">
                      Melewatkan pengecekan tipe di <code>node_modules</code>
                    </td>
                    <td className="py-2 pr-4">
                      Mempercepat kompilasi, mencegah error dari library pihak
                      ketiga.
                    </td>
                    <td className="py-2">
                      Kesalahan tipe di library tidak terdeteksi. Dalam produksi
                      biasanya aman karena library sudah teruji.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">
                      forceConsistentCasingInFileNames
                    </td>
                    <td className="py-2 pr-4">
                      Memastikan kapitalisasi nama file konsisten
                    </td>
                    <td className="py-2 pr-4">
                      Mencegah bug di Linux/macOS (case‑sensitive).
                    </td>
                    <td className="py-2">
                      ⚠️ Import file dengan beda huruf kapital akan error
                      meskipun di Windows berjalan. Developer Windows sering
                      terjebak.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">esModuleInterop</td>
                    <td className="py-2 pr-4">
                      Memudahkan import modul CommonJS (allow default import)
                    </td>
                    <td className="py-2 pr-4">
                      Import library seperti{' '}
                      <code>import express from 'express'</code> berjalan mulus.
                    </td>
                    <td className="py-2">
                      Tanpa ini, import default dari modul CommonJS akan error.
                      Wajib diaktifkan di proyek Node.js.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">module</td>
                    <td className="py-2 pr-4">
                      Format modul output (esnext untuk tree shaking)
                    </td>
                    <td className="py-2 pr-4">
                      Next.js akan mengoptimalkan bundle dengan ESM.
                    </td>
                    <td className="py-2">
                      Jika disetel ke "commonjs", Next.js mungkin tidak bisa
                      melakukan tree shaking optimal.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">moduleResolution</td>
                    <td className="py-2 pr-4">
                      Cara TypeScript mencari modul (bundler = native ke alat
                      bundler)
                    </td>
                    <td className="py-2 pr-4">
                      Cocok untuk Next.js, mendukung conditional exports.
                    </td>
                    <td className="py-2">
                      Pakai "node" di versi Next.js lama tidak masalah, tapi
                      "bundler" direkomendasikan untuk versi baru. Salah setting
                      bisa menyebabkan modul tidak ditemukan.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">resolveJsonModule</td>
                    <td className="py-2 pr-4">
                      Bisa import file JSON langsung
                    </td>
                    <td className="py-2 pr-4">
                      Berguna untuk konfigurasi atau data statis.
                    </td>
                    <td className="py-2">
                      Tanpa ini, import JSON akan error. Namun JSON besar bisa
                      memperlambat build, sebaiknya gunakan dynamic import jika
                      ukuran besar.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-yellow-50">
                    <td className="py-2 pr-4 font-mono">isolatedModules</td>
                    <td className="py-2 pr-4">
                      Memperlakukan setiap file sebagai modul terpisah (wajib
                      oleh Babel/SWC)
                    </td>
                    <td className="py-2 pr-4">
                      Next.js menggunakan SWC/Babel yang memproses file per
                      file.
                    </td>
                    <td className="py-2">
                      ⚠️ Jika menulis `const enum` atau tipe global, akan error.
                      Hindari const enum, pakai regular enum atau union type.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">jsx</td>
                    <td className="py-2 pr-4">
                      Mode JSX: preserve (Next.js yang akan mengubah JSX)
                    </td>
                    <td className="py-2 pr-4">
                      Menyerahkan transformasi JSX ke compiler Next.js.
                    </td>
                    <td className="py-2">
                      Jika diubah ke "react" atau "react-jsx", Next.js mungkin
                      error. Biarkan "preserve".
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-mono">noEmit</td>
                    <td className="py-2 pr-4">
                      TypeScript tidak menghasilkan file output (hanya cek tipe)
                    </td>
                    <td className="py-2 pr-4">
                      Output final dihasilkan oleh Next.js, bukan tsc.
                    </td>
                    <td className="py-2">
                      Jika tidak diaktifkan, tsc akan menghasilkan file .js di
                      folder yang bisa bertabrakan. Pastikan tetap `true`.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono">incremental</td>
                    <td className="py-2 pr-4">
                      Menyimpan cache kompilasi untuk mempercepat build
                      berikutnya
                    </td>
                    <td className="py-2 pr-4">
                      Mempercepat waktu build di development & CI.
                    </td>
                    <td className="py-2">
                      Cache bisa rusak kadang, menyebabkan error aneh. Jika
                      terjadi, hapus `.tsbuildinfo` dan build ulang.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-gray-500">
                ⚠️ Baris berwarna{' '}
                <span className="rounded bg-yellow-50 px-1">kuning</span>{' '}
                menandakan opsi yang sering menimbulkan error bagi pemula. Anda
                bisa menonaktifkannya untuk sementara selama belajar, lalu
                mengaktifkan kembali saat sudah siap.
              </p>
            </div>
          )}
        </li>
    )
}
