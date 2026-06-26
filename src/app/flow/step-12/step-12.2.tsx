import { CodeBlock } from "../utils/code-block";

export default function SecurityHeaders() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          2
        </span>
        Final Polish & Security Headers
      </h2>
      <p className="mt-3 text-gray-600">
        Pastikan <code>next.config.ts</code> memiliki security headers untuk
        mencegah serangan umum.
      </p>
      <CodeBlock
        lang="ts"
        code={`import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ... konfigurasi sebelumnya
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Mencegah Clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig`}
      />
      <div className="mt-3 rounded-xl bg-[#e8edf2] p-3 text-sm text-gray-500 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
        <strong>Catatan:</strong> Header <code>X-XSS-Protection</code> sudah
        deprecated di browser modern, tapi masih berguna untuk kompatibilitas.
        Untuk keamanan lebih lanjut, tambahkan Content Security Policy (CSP).
      </div>
    </li>
  )
}