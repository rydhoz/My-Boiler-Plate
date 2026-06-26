import { CodeBlock } from "../utils/code-block";

export default function AnalyticsSetup() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          3
        </span>
        Analytics (Umami / Plausible)
      </h2>
      <p className="mt-3 text-gray-600">
        Gunakan analytics ringan dan privacy-friendly. Untuk Next.js, gunakan{' '}
        <code>next/script</code> dengan <code>strategy="afterInteractive"</code>{' '}
        agar tidak memblokir render halaman.
      </p>
      <p className="mt-1 text-sm text-gray-600">
        Contoh: buka <code>src/app/layout.tsx</code> dan tambahkan:
      </p>
      <CodeBlock
        lang="tsx"
        code={`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script 
          src="https://your-umami-instance.com/script.js" 
          data-website-id="your-website-id"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}`}
      />
      <p className="mt-2 text-sm text-gray-600">
        Alternatif: <strong>Plausible</strong> – ganti URL script dan{' '}
        <code>data-domain</code>.
      </p>
    </li>
  )
}