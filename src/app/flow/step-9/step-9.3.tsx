import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function IntegrasiTailwindDarkMode() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Integrasi Tailwind & Dark Mode
      </h2>
      <p className="mt-3 text-gray-600">
        Agar komponen di Storybook tampil sama dengan di aplikasi, kita perlu
        mengimpor CSS global dan menambahkan addon tema.
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Import CSS Global (<code>.storybook/preview.ts</code>)
          </h3>
          <CodeBlock
            lang="ts"
            code={`import type { Preview } from "@storybook/react";
import '../src/app/globals.css'; // Import CSS Tailwind

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;`}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Dark Mode (Addon Themes)
          </h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-3 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npm install -D storybook-addon-themes" />
            <code>npm install -D storybook-addon-themes</code>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Tambahkan <code>"storybook-addon-themes"</code> ke array{' '}
            <code>addons</code> di <code>.storybook/main.ts</code>.
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Hasil:</strong> Toolbar Storybook akan memiliki tombol untuk
        berganti tema (light/dark), dan semua komponen akan mengikuti kelas{' '}
        <code>dark</code> seperti di aplikasi.
      </div>
    </li>
  )
}