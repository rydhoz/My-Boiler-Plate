import { CodeBlock } from "../utils/code-block";

export default function Scaffolding() {
    return(
        <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
          <h2 className="flex items-center gap-3 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
              1
            </span>
            Scaffolding Project
          </h2>
          <p className="mt-3 text-gray-600">
            Jalankan perintah berikut untuk memulai. Kita menggunakan{' '}
            <code>src</code> directory agar kode aplikasi terpisah dari file
            konfigurasi root.
          </p>
          <CodeBlock
            code={`npx create-next-app@latest my-next-boilerplate \\
  --typescript \\
  --tailwind \\
  --eslint \\
  --app \\
  --src-dir \\
  --import-alias "@/*"`}
            lang="bash"
          />
          <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
            <strong>Best Practice:</strong> <code>--src-dir</code> menjaga root
            folder bersih hanya berisi file konfigurasi.{' '}
            <code>--import-alias &quot;@/*&quot;</code> menghindari &quot;Import
            Hell&quot; seperti <code>../../../../components</code>.
          </div>
        </li>
    )
}