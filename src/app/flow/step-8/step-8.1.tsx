import { CodeBlock } from "../utils/code-block";
import { CopyButton } from "../utils/copy-button";

export default function SetupTesting() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          1
        </span>
        Setup Testing Environment
      </h2>
      <p className="mt-3 text-gray-600">
        Kita akan menggunakan <strong>Vitest</strong> (unit & integration) dan{' '}
        <strong>Playwright</strong> (end‑to‑end). Vitest sangat cepat, kompatibel
        dengan ekosistem Vite, dan mendukung ESM tanpa konfigurasi rumit.
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Install</h3>
          <div className="relative mt-2 rounded-xl bg-[#e8edf2] p-4 pr-20 font-mono text-sm shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff]">
            <CopyButton text="npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event\nnpx playwright install" />
            <code>npm install -D vitest @vitejs/plugin-react jsdom</code>
            <br />
            <code>npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event</code>
            <br />
            <code>npx playwright install</code>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Konfigurasi Vitest (<code>vitest.config.ts</code> di root)
          </h3>
          <CodeBlock
            lang="ts"
            code={`import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            Setup file (<code>vitest.setup.ts</code> di root)
          </h3>
          <CodeBlock
            lang="ts"
            code={`import '@testing-library/jest-dom/vitest'`}
          />
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Best Practice:</strong> Simpan file konfigurasi di root agar
        mudah ditemukan. Vitest akan otomatis membaca <code>vitest.config.ts</code>.
      </div>
    </li>
  )
}