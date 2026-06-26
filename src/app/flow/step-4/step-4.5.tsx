import { CodeBlock } from "../utils/code-block";

export default function ProtectedRoute() {
  return (
    <li className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]">
      <h2 className="flex items-center gap-3 text-xl font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0e5ec] text-sm font-bold text-gray-600 shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff]">
          5
        </span>
        Proteksi Route dengan Middleware
      </h2>
      <p className="mt-3 text-gray-600">
        Middleware akan berjalan sebelum setiap request. Kita gunakan untuk
        mengamankan halaman <code>/dashboard</code> dan mengalihkan pengguna
        yang sudah login dari halaman login/register. Buat file{' '}
        <code>src/middleware.ts</code>:
      </p>
      <CodeBlock
        lang="ts"
        code={`import { auth } from "@/server/auth"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')
  const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard')

  if (isDashboardPage && !isLoggedIn) {
    return Response.redirect(new URL('/login', req.nextUrl))
  }

  if (isAuthPage && isLoggedIn) {
    return Response.redirect(new URL('/dashboard', req.nextUrl))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}`}
      />
      <div className="mt-3 space-y-2 text-sm text-gray-600">
        <p><strong>Alur logika:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>User belum login → akses dashboard? → dilempar ke <code>/login</code></li>
          <li>User sudah login → akses login/register? → langsung ke dashboard</li>
        </ul>
        <div className="rounded-xl bg-[#e8edf2] p-3 shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff]">
          <strong>Catatan:</strong> Middleware ini menggunakan <strong>Edge Runtime</strong>
          yang ringan dan cepat. Pastikan provider database didukung di Edge
          (Prisma dengan SQLite tidak bisa di Edge, hanya untuk local dev).
        </div>
      </div>
    </li>
  )
}
