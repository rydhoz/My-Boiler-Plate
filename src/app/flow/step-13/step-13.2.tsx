import { CodeBlock } from "../utils/code-block";

export default function BusinessLogicSeparation() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Pemisahan Business Logic (Framework Agnostic)
      </h2>
      <p className="mt-3 text-gray-600">
        Pindahkan logika bisnis dari komponen ke folder{' '}
        <code>src/services/</code> atau <code>src/lib/</code> agar bisa diuji
        tanpa server Next.js.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-red-600">
            ❌ Buruk (Logic di Component)
          </h3>
          <CodeBlock
            lang="tsx"
            code={`// Di dalam page.tsx
const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
const tax = total * 0.11;`}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-green-600">
            ✅ Bagus (Logic di Service)
          </h3>
          <CodeBlock
            lang="ts"
            code={`// src/services/cart.service.ts
export function calculateTotal(items: CartItem[]) {
  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  return { total, tax: total * 0.11 };
}`}
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Keuntungan: Fungsi <code>calculateTotal</code> bisa dites dengan Vitest
        tanpa menjalankan server Next.js. Kode juga lebih mudah dibaca dan
        di-reuse.
      </p>
    </li>
  )
}